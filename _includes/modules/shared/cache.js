Cache = (options, factory) => {
  "use strict";

  /* <!-- MODULE: Provides an interface to provide common functionality --> */
  /* <!-- PARAMETERS: Receives the global app context --> */
  /* <!-- REQUIRES: Global Scope: JQuery, Underscore | App Scope: Display --> */

  /* <!-- Internal Constants --> */
  const DEFAULTS = {
    name: "APP_CACHE",
    age: 1000*60*10,
  }, FN = {};
  /* <!-- Internal Constants --> */

  /* <!-- Internal Options --> */
  options = _.defaults(options ? _.clone(options) : {}, DEFAULTS);
  /* <!-- Internal Options --> */
  
  /* <!-- Internal Variables --> */
  var ರ‿ರ = {
    db: localforage.createInstance({
      name: options.name
    })
  }; /* <!-- Session State --> */
  
  /* <!-- Internal Variables --> */
  
  /* <!-- Internal Functions --> */
  var _valid = (value, age) => {
    var _stored = factory.Dates.parse(value.stored);
    if (_.isFunction(age)) {
      return Promise.resolve(age(_stored, value.data));
    } else {
      var _age = factory.Dates.duration(factory.Dates.now().diff(_stored));
      if (age.age && age.fn && _.isFunction(age.fn)) {
        return _age.asMilliseconds() <= age.age.asMilliseconds() ? 
          Promise.resolve(true) : Promise.resolve(age.fn(_stored, value.data));
      } else {
        return _age.asMilliseconds() <= age.asMilliseconds() ? Promise.resolve(true) : Promise.resolve(false);
      }
    }
  };
  
  var _get = (key, age, force, hit) => force ? 
      (factory.Flags.log("CACHE Forced Override for:", key), Promise.resolve(undefined)) : 
      ರ‿ರ.db.getItem(key).then(value => {
        if (value) {
          if (value.stored) {
            if (hit) {
              factory.Flags.log("CACHE Forced Hit for:", key);
              return value.data;
            } else {
              return _valid(value, age).then(valid => {
                if (valid) {
                  /* <!-- Cache Hit / Not Stale --> */
                  factory.Flags.log("CACHE Hit for:", key);
                  return value.data;
                } else {
                  /* <!-- Cache Stale --> */
                  factory.Flags.log("CACHE Stale for:", key);
                  return false;
                }
              });
            }
          } else {
            /* <!-- Cache Entry Corrupt --> */
            factory.Flags.log("CACHE Corrupt for:", key);
            return undefined;
          }
        } else {
          /* <!-- Cache Miss --> */
          factory.Flags.log("CACHE Miss for:", key);
          return undefined;
        }
      }).catch(e => (factory.Flags.error("CACHE Get Error:", e), undefined));
  
  var _set = (key, value) => ರ‿ರ.db.setItem(key, {
      stored: factory.Dates.now().toISOString(),
      data: value
    }).then(() => value)
    .catch(e => (factory.Flags.error("CACHE Set Error:", e), value));
  /* <!-- Internal Functions --> */
  
  /* <!-- Public Functions --> */
  FN.clear = () => ರ‿ರ.db.clear();
  
  FN.get = (key, age, fn, force, hit) => {
    age = !age ? factory.Dates.duration(options.age) : _.isNumber(age) ? factory.Dates.duration(age) : age;
    return _get(key, age, force)
      .then(data => data === false && Navigator.onLine === false && !hit ? FN.get(key, age, fn, force, true) : 
              data === false || data === undefined ? Promise.resolve(fn()).then(value => _set(key, value)) : data);
  };
  
  FN.set = _set;
  /* <!-- Public Functions --> */
  
  return FN;
  
};