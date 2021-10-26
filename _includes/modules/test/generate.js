Generate = (options) => {
  "use strict";

  /* <!-- MODULE: Provides an interface to provide common functionality --> */
  /* <!-- PARAMETERS: Receives the global app context --> */
  /* <!-- REQUIRES: Global Scope: JQuery, Underscore | App Scope: Display --> */

  /* <!-- Internal Constants --> */
  const DEFAULTS = {
    counts : {
      users : 100,
    },
  }, FN = {};
  /* <!-- Internal Constants --> */

  /* <!-- Internal Options --> */
  options = _.defaults(options ? _.clone(options) : {}, DEFAULTS);
  /* <!-- Internal Options --> */
  
  /* <!-- Internal Constants --> */

  /* <!-- Internal Constants --> */

  /* <!-- Internal Variables --> */

  /* <!-- Internal Variables --> */
  
  /* <!-- Internal Functions --> */
  var _users = (blank) => (count) => {
    return _.times(count || options.counts.users, () => {
      if (blank) {
        return ["", "", "", "", ""];
      } else {
        var _name = chance.name();
        return [
          chance.email(),
          _name,
          _name.split(" ")[0],
          "[General Books]general",
          chance.email()
        ];
      }
    });
  };
  /* <!-- Internal Functions --> */
  
  /* <!-- Public Functions --> */

  /* <!-- User Functions --> */
  FN.users = {

    blank : _users(true),

    normal : _users(),

  };
  /* <!-- User Functions --> */

  /* <!-- Public Functions --> */
  
  return FN;
  
};