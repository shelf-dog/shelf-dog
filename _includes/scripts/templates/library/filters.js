!function(){var e=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).filters=e({1:function(e,t,a,n,l){var r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(t=e.invokePartial(r(n,"filter"),t,{name:"filter",hash:{id:l&&r(l,"key")},data:l,helpers:a,partials:n,decorators:e.decorators}))?t:""},compiler:[8,">= 4.3.0"],main:function(e,t,a,n,l){var r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="bg-dark rounded mx-1 p-1" id="filters_container">\n  <button class="btn btn-dark waves-effect mb-1" type="button" data-toggle="collapse" data-target="#filters"\n            aria-expanded="false" aria-controls="filters">Filter these Results</button>\n  <div class="collapse" id="filters">\n    <div class="px-1 py-2">\n      '+(null!=(a=r(a,"each").call(null!=t?t:e.nullContext||{},null!=t?r(t,"filters"):t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:6,column:6},end:{line:6,column:52}}}))?a:"")+"\n    </div>\n  </div>\n</div>\n"},usePartial:!0,useData:!0})}();