!function(){var e=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).details=e({1:function(e,a,t,l,n,r,o){var i,s=e.lookupProperty||function(e,a){if(Object.prototype.hasOwnProperty.call(e,a))return e[a]};return null!=(i=e.invokePartial(s(l,"detail"),a,{name:"detail",hash:{query:null!=o[1]?s(o[1],"query"):o[1],id:n&&s(n,"index")},data:n,helpers:t,partials:l,decorators:e.decorators}))?i:""},compiler:[8,">= 4.3.0"],main:function(e,a,t,l,n,r,o){var i,s=e.lookupProperty||function(e,a){if(Object.prototype.hasOwnProperty.call(e,a))return e[a]};return'<div id="details" class="card-deck details justify-content-around">'+(null!=(i=s(t,"each").call(null!=a?a:e.nullContext||{},null!=a?s(a,"details"):a,{name:"each",hash:{},fn:e.program(1,n,0,r,o),inverse:e.noop,data:n,loc:{start:{line:1,column:67},end:{line:1,column:130}}}))?i:"")+"</div>\n"},usePartial:!0,useData:!0,useDepths:!0})}();