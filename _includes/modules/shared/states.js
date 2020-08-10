States = () => {
  "use strict";

  /* <!-- MODULE: Provides an interface to provide common state functionality --> */
  /* <!-- PARAMETERS: Receives the global app context --> */
  /* <!-- REQUIRES: Global Scope: JQuery, Underscore | App Scope: Display --> */

  /* <!-- Internal Constants --> */
  const STATE_CONFIG = "config",
        STATE_LANDING = "landing",
        STATE_LANDING_LIBRARIES = "landing-libaries",
        STATE_LIBRARY = "library",
        STATE_LIBRARY_ALL = "library-all",
        STATE_LIBRARY_LOADED = "library-loaded",
        STATE_MANAGE = "manage",
        STATE_SETTINGS = "settings",
        STATE_SETTINGS_PERSONAL = "settings-personal",
        STATE_SETTINGS_ALL = "settings-all",
        STATE_SETTINGS_LIBRARY = "settings-library",
        STATES = [
          STATE_CONFIG, STATE_LANDING, STATE_LANDING_LIBRARIES, 
          STATE_LIBRARY, STATE_LIBRARY_ALL, STATE_LIBRARY_LOADED,
          STATE_MANAGE, 
          STATE_SETTINGS, STATE_SETTINGS_PERSONAL, STATE_SETTINGS_ALL, STATE_SETTINGS_LIBRARY
        ];
  /* <!-- Internal Constants --> */

  /* <!-- Internal Options --> */
  
  /* <!-- Internal Options --> */

  /* <!-- Internal Variables --> */
  /* <!-- Internal Variables --> */

  /* <!-- Internal Functions --> */
  /* <!-- Internal Functions --> */

  /* <!-- Initial Calls --> */

  /* <!-- External Visibility --> */
  return {

    all : STATES,
    
    config : {
      in : STATE_CONFIG,
    },
    
    landing : {
      in : STATE_LANDING,
      libraries : STATE_LANDING_LIBRARIES,
    },
    
    library : {
      in : STATE_LIBRARY,
      all : STATE_LIBRARY_ALL,
      loaded : STATE_LIBRARY_LOADED,
      specific :[
        STATE_LIBRARY_ALL, STATE_LIBRARY_LOADED
      ],
    },
    
    manage : {
      in : STATE_MANAGE,
    },
    
    settings : {
      in : STATE_SETTINGS,
      personal : STATE_SETTINGS_PERSONAL,
      all : STATE_SETTINGS_ALL,
      library : STATE_SETTINGS_LIBRARY,
      specific :[
        STATE_SETTINGS_PERSONAL, STATE_SETTINGS_ALL, STATE_SETTINGS_LIBRARY
      ],
    },
    
    views : [
      STATE_LANDING, STATE_LIBRARY, STATE_MANAGE, STATE_SETTINGS
    ],
    
  };
  /* <!-- External Visibility --> */

};