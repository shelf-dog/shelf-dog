!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{})["confirm-dispute"]=n({compiler:[8,">= 4.3.0"],main:function(n,e,l,a,t){var c,o=null!=e?e:n.nullContext||{},s=n.escapeExpression,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="d-flex align-items-center">\n  <a href="#item.dispute.'+s(i(l,"encode").call(o,null!=e?i(e,"id"):e,{name:"encode",hash:{},data:t,loc:{start:{line:2,column:25},end:{line:2,column:38}}}))+"."+s(i(l,"encode").call(o,null!=e?i(e,"user"):e,{name:"encode",hash:{},data:t,loc:{start:{line:2,column:39},end:{line:2,column:54}}}))+"."+s(i(l,"encode").call(o,i(l,"md5").call(o,i(l,"concat").call(o,null!=e?i(e,"id"):e,"_",null!=e?i(e,"user"):e,{name:"concat",hash:{},data:t,loc:{start:{line:2,column:69},end:{line:2,column:89}}}),{name:"md5",hash:{},data:t,loc:{start:{line:2,column:64},end:{line:2,column:90}}}),{name:"encode",hash:{},data:t,loc:{start:{line:2,column:55},end:{line:2,column:92}}}))+'" role="button"\n     class="btn btn-action btn-small text-nowrap" style="line-height: 0.7em;">Dispute</a>\n'+(null!=(c=n.invokePartial(i(a,"cancel"),e,{name:"cancel",hash:{state:"outstanding",type:"loan"},data:t,indent:"  ",helpers:l,partials:a,decorators:n.decorators}))?c:"")+"</div>\n"},usePartial:!0,useData:!0})}();