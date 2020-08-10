Libraries = (options, factory) => {
  "use strict";

  /* <!-- MODULE: Provides an interface to provide common functionality --> */
  /* <!-- PARAMETERS: Receives the global app context --> */
  /* <!-- REQUIRES: Global Scope: JQuery, Underscore | App Scope: Display --> */

  /* <!-- Internal Constants --> */
  const DEFAULTS = {
    cache: factory.Dates.duration("30", "minutes"),
    db_cache: factory.Dates.duration("15", "minutes"),
  }, FN = {};
  /* <!-- Internal Constants --> */

  /* <!-- Internal Options --> */
  options = _.defaults(options ? _.clone(options) : {}, DEFAULTS);
  /* <!-- Internal Options --> */
  
  /* <!-- Internal Variables --> */
  var ರ‿ರ = {}; /* <!-- Session State --> */
  /* <!-- Internal Variables --> */
  
  /* <!-- Internal Functions --> */
  var _endpoint = endpoint => ({
    name: endpoint.name,
    admin: endpoint.admin,
    cache: endpoint.id ? key => `endpoint_${endpoint.id}${key ? `_${key.toLowerCase()}` : ""}` : false,
    api: endpoint.id ? 
      options.functions.client.action(endpoint.id, endpoint.user, endpoint.key, endpoint.algorithm, endpoint.context) : 
      () => Promise.resolve(false),
  });
  
  var _fetch = (endpoint, action, timeout) => endpoint.api(action, null, timeout).catch(e => {
          factory.Flags.error(`Endpoint: ${endpoint.id} ERRORED [${action}]`, e);
          return null;
        });
  
  var _meta = (endpoint, force) => {
    var _action = "META",
        _process = meta => {
          if (meta === null) {
            endpoint.state = "OFFLINE";
          } else {
            factory.Flags.log(`ENDPOINT META: ${endpoint.name}`, meta);
            endpoint.state = meta === false ? "NOT_AVAILABLE" : "READY";
            endpoint.meta = meta === false ? {} : meta;
          }
          return endpoint;
        };
    
    return (endpoint.cache ? 
        options.functions.cache.get(endpoint.cache(_action), options.cache, () => _fetch(endpoint, _action), force) : 
        _fetch(endpoint, _action))
      .then(_process);
    
  };
  
  var _prepare = (endpoints, force) => Promise.all(_.chain(endpoints)
                                        .map(_endpoint).map(endpoint => _meta(endpoint, force)).value());
  
  var _all = force => options.functions.cache.get("endpoints", options.cache, options.functions.client.endpoints, force)
      .then(value => {
        if (options.functions.events) factory.Main.event(options.functions.events.endpoints.loaded, 
                            value && value.endpoints ? Math.max(value.endpoints.length, 1) : 1);
        factory.Flags.log("ENDPOINTS:", value);
        return value && value.endpoints && value.endpoints.length > 0 ? _prepare(value.endpoints, force) : 
          [options.functions.demo.generate()];
      })
      .then(libraries => {
        factory.Flags.log("LIBRARIES:", libraries);
        return (ರ‿ರ.all = _.sortBy(libraries, "name"));
      });
  /* <!-- Internal Functions --> */
  
  /* <!-- Public Functions --> */
  FN.all = force => !force && ರ‿ರ.all ? Promise.resolve(ರ‿ರ.all) : _all(force);
  
  FN.one = index => FN.all().then(libraries => libraries[_.isNumber(index) ? index : parseInt(index)]),
  
  FN.select = value => _.isObject(value) ? Promise.resolve(value) : FN.one(value);
  
  FN.refresh = value => FN.select(value).then(library => _meta(library, true)),
    
  FN.hash = value => FN.select(value).then(library => library.api("HASH"));
  
  FN.db = value => FN.select(value)
    .then(library => options.functions.cache.get(library.cache("DB"), {
      age: options.db_cache,
      fn: (stored, data) => library.api("HASH").then(hash => hash == data.hash),
    }, () => _fetch(library, "DB", 60000).then(result => {
      result.data = new Uint8Array(result.data);
      var spark_md5 = new SparkMD5.ArrayBuffer();
      spark_md5.append(result.data);
      result.local_hash = spark_md5.end();
      return result;
    })));
  
  FN.settings = (value, settings) => FN.select(value).then(library => library.api("SETTINGS", settings));
  /* <!-- Public Functions --> */
  
  return FN;
  
};