Load = function(options, factory) {
  "use strict";

  /* <!-- HELPER: Form data to/from JSON Object --> */
  /* <!-- PARAMETERS: Options (see below) and a factory context (to generate modules, helpers etc) --> */
  /* <!-- REQUIRES: Global Scope: JQuery, Underscore --> */
  /* <!-- REQUIRES: Factory Scope: Flags --> */

  /* <!-- Internal Constants --> */
  const COUNTS = {

    users : 1000,

  };
  /* <!-- Internal Constants --> */
  
  /* <!-- Internal Variables --> */
  var assert, config, sheet, users;
  /* <!-- Internal Variables --> */

  /* <!-- Cache Variables --> */
  var GENERATED = {

    users : null,

  };
  /* <!-- Cache Variables --> */

  /* <!-- Scaffolding Functions --> */

  /* <!-- Sheet Functions --> */
  const SHEETS = {

    users: (sheet) => {

      /* <!-- Grab Users Sheet (by Metadata) --> */
      var _users = sheet.sheets.find(t => t && t.developerMetadata && 
        t.developerMetadata.find(m => m.metadataKey == "TYPE" && m.metadataValue == "USERS")),
        _grid, _notation, _meta, _row;

      if (_users && _users.data && _users.data[0] && _users.data[0].rowData) {
        
        _grid = factory.Google_Sheets_Grid({
          sheet: _users.properties.sheetId
        });
        
        _notation = factory.Google_Sheets_Notation();
        
        _meta = factory.Google_Sheets_Metadata({
            sheet: _users.properties.sheetId,
            visibility: "PROJECT"
          }, factory);

        _row = _users.data[0].rowData
          .findIndex(r => r.values.every(v => v.formattedValue === null || v.formattedValue === undefined));

        return {
          sheet : _users,
          grid : _grid,
          notation : _notation,
          meta : _meta,
          row : _row,
          title : _users.properties.title
        };

      } else {
        return null;
      }

    },

  };
  /* <!-- Sheet Functions --> */

  /* <!-- Setup Functions --> */
  const SETUP = {

    users: (sheet) => {
      
      /* <!-- Get Users Sheet --> */
      users = SHEETS.users(sheet);

      /* <!-- Add Users Example Data --> */
      if (users.row) {

        GENERATED.users = options.functions.generate.users.normal(COUNTS.users);

        return factory.Google.sheets.update(sheet.spreadsheetId, 
          users.notation.grid(users.row, users.row + COUNTS.users, 0, 
            GENERATED.users[0].length, true, users.title), GENERATED.users, "USER_ENTERED");

      }
     
    }

  };
  /* <!-- Setup Functions --> */

  /* <!-- Teardown Functions --> */
  const TEARDOWN = {

    users: (sheet) => {
      
      if (users && users.row) {

        var _remove = options.functions.generate.users.blank(COUNTS.users);

        return factory.Google.sheets.update(sheet.spreadsheetId, 
          users.notation.grid(users.row, users.row + COUNTS.users, 0, 
            _remove[0].length, true, users.title), _remove, "USER_ENTERED");

      }

    }
  
  };
  /* <!-- Teardown Functions --> */
  
  /* <!-- Scaffolding Functions --> */

  /* <!-- Internal Functions --> */ 
  var _setup = () => options.functions.settings.get()
    .then(result => (config = result, factory.Flags.log("CONFIG Retrieved")))
    .then(() => factory.Google.sheets.get(config.CLIENT, true)
    .then(response => sheet = response))
    .then(sheet => Promise.all([
      SETUP.users(sheet),
    ]))
    .then(() => factory.Flags.log("SETUP Completed").reflect(true))
    .catch(e => factory.Flags.error("Config Retrieval Failed FAILED", e).reflect(false));
    
  var _teardown = () => Promise.all([
      TEARDOWN.users(sheet),
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
  /* <!-- Internal Functions --> */
      
  /* <!-- External Visibility --> */
  return {

    /* <!-- External Functions --> */
    start: () => (
      assert = chai.assert,
      _setup()
        .catch(e => factory.Flags.error("Load Setup FAILED", e).reflect(false))
        .then(result => factory.Flags.log("START Completed").reflect(result === false ? result : true))
    ),

    users : () => {

      var _verify = (mark, client) => () => {
        var _random = GENERATED.users[chance.integer({min: 0, max: COUNTS.users - 1})];

        performance.mark(`Start-${mark}`);

        return client(_random[0], "META")
          .then(meta => {
            
            performance.mark(`End-${mark}`);

            assert.equal(meta.user, _random[0], "Correct Username");

            assert.ok(meta.details, "Has Details");

            assert.equal(meta.details.display, _random[2], "Correct User Display Name");

            assert.ok(meta.details.search, "Has Searches");

            assert.lengthOf(meta.details.search, 1, "Has 1 Search");

            assert.notOk(meta.claims.admin, `User: ${meta.user} is NOT an ADMIN`);

            assert.notOk(meta.claims.owner, `User: ${meta.user} is NOT an OWNER`);
          
            assert.notOk(meta.claims.manage, `User: ${meta.user} is NOT a MANAGER`);
            
          });
      };

      return _test("Meta", (client) => ([

        /* <!-- Refresh | Clear Cache --> */
        () => client(chance.email(), "REFRESH", null, true),

        /* <!-- Run First Test --> */
        _verify("User-Test-1", client),
        
        /* <!-- Run Additional Test --> */
        _verify("User-Test-2", client),
        
        /* <!-- Refresh | Clear Cache --> */
        () => client(chance.email(), "REFRESH", null, true),

        /* <!-- Check Performance Durations --> */
        () => {

          var _performance = _.times(2, (n) => performance.measure(`Performance Test ${n+1}`,
            `Start-User-Test-${n+1}`, `End-User-Test-${n+1}`)),
              _r = factory.App.round;

          _.each(_performance, (perf, i) => {
            if (i > 0) {
              var d_1 = _performance[i].duration, d_2 = _performance[i-1].duration;
              assert.ok(d_1 < d_2,
                `Performance Test ${i+1} (${_r(d_1)}) ran faster than ${i} (${_r(d_2)})`);
            }
          });
          
          factory.Flags.log("Users Performance:", _performance);

          return Promise.resolve(_performance);

        },
  
      ]));
    },

    finish: () => _teardown()
      .catch(e => factory.Flags.error("Load Teardown FAILED", e).reflect(false))
      .then(result => factory.Flags.log("FINISH Completed").reflect(result === false ? result : true)),
    /* <!-- External Functions --> */

  };
  /* <!-- External Visibility --> */
};