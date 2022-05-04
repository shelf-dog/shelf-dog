Performance = function(options, factory) {
    "use strict";
  
    /* <!-- HELPER: Form data to/from JSON Object --> */
    /* <!-- PARAMETERS: Options (see below) and a factory context (to generate modules, helpers etc) --> */
    /* <!-- REQUIRES: Global Scope: JQuery, Underscore --> */
    /* <!-- REQUIRES: Factory Scope: Flags --> */
  
    /* <!-- Internal Constants --> */
    /* <!-- Internal Constants --> */
    
    /* <!-- Internal Variables --> */
    var assert, config;
    /* <!-- Internal Variables --> */
  
    /* <!-- Scaffolding Functions --> */
  
    /* <!-- Setup Functions --> */
    const SETUP = {
  
      placeholder : () => true,

    };
    /* <!-- Setup Functions --> */
  
    /* <!-- Teardown Functions --> */
    const TEARDOWN = {
    
      placeholder : () => true,

    };
    /* <!-- Teardown Functions --> */
    
    /* <!-- Scaffolding Functions --> */
  
    /* <!-- Internal Functions --> */   
    var _setup = () => options.functions.settings.get()
      .then(result => (config = result, factory.Flags.log("CONFIG Retrieved")))
      .then(() => Promise.all([
        SETUP.placeholder()
      ]))
      .then(() => factory.Flags.log("SETUP Completed").reflect(true))
      .catch(e => factory.Flags.error("Config Retrieval Failed FAILED", e).reflect(false));
      
    var _teardown = () => Promise.all([
        TEARDOWN.placeholder()
      ])
      .then(() => factory.Flags.log("TEARDOWN Called").reflect(true));

    var _test = (name, tests) => new Promise(resolve => {
        
      var _fail = e => resolve(factory.Flags.error(`${name} Test FAILED`, e).reflect(false)),
          _succeed = () => resolve(factory.Flags.log(`${name} Test SUCCEEDED`).reflect(true));
      
      try {

        /* <!-- Check Configuration Settings --> */
        assert.ok(config);
          
        var _client = options.functions.client.client(config.ID, null, config.ALGORITHM, config.KEY, true);

        /* <!-- Use Functions in order to run sequentially --> */
        Promise.each(tests(_client))
          .then(_succeed)
          .catch(_fail);
        
      } catch (err) { 
        
        _fail(err);
        
      }
      
    });

    var _performance = (client, action, threshold, params, tests) => () => {

      try {

        /* <!-- Run Performance Test --> */
        var id = uuid.v4(),
        mark = `${action}-${id}`,
        start = `Start-${mark}`,
        end = `End-${mark}`;

        performance.mark(start);

        return client(params, action)
        .then(result => {
          
        performance.mark(end);

        _.each(_.isArray(tests) ? tests : [tests], test => test(result));

        var _performance = performance.measure(`Performance Test ${action} [${id}]`, start, end),
            _duration = _performance.duration;

        assert.ok(_duration <= threshold,
              `Performance Test ${action} (${_duration}) ran faster than ${threshold}`);

        factory.Flags.performance(`${action} Took [${id}]:`, factory.App.round(_duration));

        });

      } catch (e) {
        factory.Flags.error("Performance Error", e);
        throw e;
      }
      
    };
    /* <!-- Internal Functions --> */
        
    /* <!-- External Visibility --> */
    return {
  
      /* <!-- External Functions --> */
      start: () => (
        assert = chai.assert,
        _setup()
          .catch(e => factory.Flags.error("Performance Setup FAILED", e).reflect(false))
          .then(result => factory.Flags.log("START Completed").reflect(result === false ? result : true))
      ),
  
      auth: () => _test("Auth", (client) => ([

        /* <!-- Run Performance Test --> */
        _performance(client, "TIME", 2500, null, 
          (result) => (
            factory.Flags.performance(`API Response Time Elapsed: ${factory.Dates.duration(new Date() - factory.Dates.parse(result)).asSeconds()}`),
            assert.ok(result, "Time Returned from API")
          ))

      ])),

      meta: () => _test("Meta", (client) => ([

        /* <!-- Refresh | Clear Cache --> */
        () => client(config.OWNER, "REFRESH", null, true),
        
        /* <!-- Run Performance Test --> */
        _performance(client, "META", 4500, config.OWNER, 
          (result) => assert.equal(result.user, config.OWNER, "Correct Username")),

        /* <!-- Refresh | Clear Cache --> */
        () => client(config.OWNER, "REFRESH", null, true),

      ])),
  
      finish: () => _teardown()
        .catch(e => factory.Flags.error("Performance Teardown FAILED", e).reflect(false))
        .then(result => factory.Flags.log("FINISH Completed").reflect(result === false ? result : true)),
      /* <!-- External Functions --> */
  
    };
    /* <!-- External Visibility --> */
  };