!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["left-overview"]=n({1:function(n,e,a,l,r){var t=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"#library."+n.escapeExpression(n.lambda(null!=e?t(e,"index"):e,e))},compiler:[8,">= 4.3.0"],main:function(n,e,a,l,r){var t,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="d-flex flex-row">\n\n  <a class="d-flex flex-column flex-lg-row pl-2 btn btn-outline-warning border border-warning waves-effect back-button" \n    href="/app/library/'+(null!=(t=o(a,"present").call(null!=e?e:n.nullContext||{},null!=e?o(e,"index"):e,{name:"present",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:4,column:23},end:{line:4,column:71}}}))?t:"")+'" data-decorate>\n    <span class="d-none d-md-block material-icons mr-1" data-toggle="tooltip" data-html="true" title="Close Search / Library">arrow_back</span>\n    <span>Close</span>\n  </a>\n\n  <a class="d-none d-sm-flex flex-column flex-lg-row pr-2 ml-2 btn btn-outline-action border border-highlight waves-effect"\n         data-route="show.contents" href="#">\n    <span class="d-none d-md-block material-icons mr-2" data-toggle="tooltip" data-html="true" title="Show Library Contents">library_books</span>\n    <span>Contents</span>\n  </a>\n  \n  <div class="d-none show-libraries-multiple ml-2">\n    <div class="libraries-selector hide-libraries-selecting">\n      <a class="d-none d-sm-flex flex-column flex-lg-row pr-2 btn btn-outline-primary border border-primary waves-effect"\n         data-route="swap.show" href="#">\n        <span class="d-none d-md-block material-icons mr-2" data-toggle="tooltip" data-html="true" title="Swap Library">swap_calls</span>\n        <span>Swap</span>\n      </a>\n    </div>\n    <div class="d-none show-libraries-selecting h-100">\n      <div class="libraries-selection d-flex align-items-center h-100"></div>\n    </div>\n  </div>\n\n</div>\n'},useData:!0})}();