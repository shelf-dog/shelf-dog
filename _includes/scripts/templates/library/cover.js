!function(){var e=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).cover=e({1:function(e,n,l,t,a){var r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return' style="'+e.escapeExpression(e.lambda(null!=n?r(n,"style"):n,n))+'"'},compiler:[8,">= 4.3.0"],main:function(e,n,l,t,a){var r,o=null!=n?n:e.nullContext||{},i=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<div class="d-flex justify-content-center h-100 align-items-center" style="width: '+i(s(l,"either").call(o,null!=n?s(n,"width"):n,"200px",{name:"either",hash:{},data:a,loc:{start:{line:1,column:82},end:{line:1,column:106}}}))+';">\n  <img src="'+i(e.lambda(null!=n?s(n,"image"):n,n))+'" class="img-fluid rounded"'+(null!=(r=s(l,"if").call(o,null!=n?s(n,"style"):n,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:2,column:48},end:{line:2,column:86}}}))?r:"")+">\n</div>\n"},useData:!0})}();