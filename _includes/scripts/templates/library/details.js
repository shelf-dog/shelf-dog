!function(){var e=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).details=e({1:function(e,n,r,a,l){return"2"},3:function(e,n,r,a,l){return"3"},5:function(e,n,r,a,l){var t,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<div class="searches mx-2 mb-2">'+(null!=(t=e.invokePartial(o(a,"searches"),null!=n?o(n,"searches"):n,{name:"searches",data:l,helpers:r,partials:a,decorators:e.decorators}))?t:"")+"</div>"},7:function(e,n,r,a,l){var t,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return null!=(t=e.invokePartial(o(a,"results"),null!=n?o(n,"results"):n,{name:"results",data:l,helpers:r,partials:a,decorators:e.decorators}))?t:""},compiler:[8,">= 4.3.0"],main:function(e,n,r,a,l){var t,o=null!=n?n:e.nullContext||{},s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<div class="bg-dark main p-2 mb-2 rounded-lg">\n  \n  \x3c!-- LIBRARY COMMANDS / SMALL SCREEN SIZE --\x3e\n  <div class="d-flex d-md-none justify-content-between align-items-center loaded-content px-2 pt-1 mb-2 mb-xl-3">\n    \n    \x3c!-- LEFT BUTTONS --\x3e\n'+(null!=(t=e.invokePartial(s(a,"left-overview"),n,{name:"left-overview",hash:{back:"Close Search / Library"},data:l,indent:"    ",helpers:r,partials:a,decorators:e.decorators}))?t:"")+"    \n    \x3c!-- RIGHT BUTTONS --\x3e\n"+(null!=(t=e.invokePartial(s(a,"right-overview"),n,{name:"right-overview",data:l,indent:"    ",helpers:r,partials:a,decorators:e.decorators}))?t:"")+'    \n  </div>\n  \n  \x3c!-- LIBRARY COMMANDS / MEDIUM SIZE AND UPWARDS --\x3e\n  <div class="d-none d-md-flex justify-content-between align-items-center loaded-content px-2 pt-1 mb-2 mb-xl-3">\n    \n    \x3c!-- LEFT BUTTONS --\x3e\n'+(null!=(t=e.invokePartial(s(a,"left-overview"),n,{name:"left-overview",hash:{back:"Close Search / Library"},data:l,indent:"    ",helpers:r,partials:a,decorators:e.decorators}))?t:"")+'    \n    \x3c!-- DETAILS --\x3e\n    <span class="font-larger-150 mx-2 my-0 p-0 d-none header"></span>\n    \n    \x3c!-- RIGHT BUTTONS --\x3e\n'+(null!=(t=e.invokePartial(s(a,"right-overview"),n,{name:"right-overview",data:l,indent:"    ",helpers:r,partials:a,decorators:e.decorators}))?t:"")+'    \n  </div>\n  \n  \x3c!-- LIBRARY DETAILS --\x3e\n  <div id="library-details" class="border border-secondary rounded px-1 pt-1 px-xl-2 pt-xl-2 my-2">\n\n    <div class="m-2 pb-1 details d-none d-md-block">'+(null!=(t=e.lambda(null!=n?s(n,"details"):n,n))?t:"")+'</div>\n    \n    <div class="mx-2 mb-'+(null!=(t=s(r,"if").call(o,null!=n?s(n,"searches"):n,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l,loc:{start:{line:33,column:24},end:{line:33,column:57}}}))?t:"")+' d-none d-md-block">\n      <form class="w-100 d-inline-flex flex-row align-items-center" data-role="search">\n        <div class="input-group">\n          <input type="text" class="form-control" role="search" placeholder="What would you like to find?" aria-label="Search">\n          <div class="input-group-append">\n            <a role="button" href="#search" class="btn btn-outline-light border border-dark waves-effect d-none d-lg-block" >Advanced</a>\n            <button class="btn btn-outline-primary border border-primary waves-effect" type="submit">Search</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    \n    \x3c!-- SEARCHES (if available) --\x3e'+(null!=(t=s(r,"if").call(o,null!=n?s(n,"searches"):n,{name:"if",hash:{},fn:e.program(5,l,0),inverse:e.noop,data:l,loc:{start:{line:46,column:4},end:{line:46,column:92}}}))?t:"")+'\x3c!-- DETAILS --\x3e\n    <h4 class="mt-1 ml-2 mb-2 pb-1">Recent</h4>\n    \n    <div class="results table-responsive">'+(null!=(t=s(r,"if").call(o,null!=n?s(n,"results"):n,{name:"if",hash:{},fn:e.program(7,l,0),inverse:e.noop,data:l,loc:{start:{line:51,column:42},end:{line:51,column:85}}}))?t:"")+'</div>\n    \n  </div>\n  \n  \x3c!-- SEARCH RESULTS --\x3e\n  <div id="search-results" class="border border-secondary rounded px-1 pt-1 px-xl-2 pt-xl-2 my-2 d-none">\n    \n    <div class="results table-responsive">\n      \n    </div>\n  \n  </div>\n\n</div>\n'},usePartial:!0,useData:!0})}();