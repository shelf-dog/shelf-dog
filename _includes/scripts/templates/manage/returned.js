!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).returned=n({1:function(n,e,l,t,a){var o=null!=e?e:n.nullContext||{},c=n.escapeExpression,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<a href="#item.unreturn.'+c(r(l,"encode").call(o,null!=e?r(e,"item"):e,{name:"encode",hash:{},data:a,loc:{start:{line:2,column:42},end:{line:2,column:57}}}))+"."+c(r(l,"encode").call(o,null!=e?r(e,"user"):e,{name:"encode",hash:{},data:a,loc:{start:{line:2,column:58},end:{line:2,column:73}}}))+"."+c(r(l,"encode").call(o,null!=e?r(e,"since"):e,{name:"encode",hash:{},data:a,loc:{start:{line:2,column:74},end:{line:2,column:90}}}))+"."+c(r(l,"encode").call(o,null!=e?r(e,"until"):e,{name:"encode",hash:{},data:a,loc:{start:{line:2,column:91},end:{line:2,column:107}}}))+'" class="text-decoration-none link-action ml-1" data-toggle="tooltip" data-html="true" title="Undo <strong class=\'text-warning\'>Returned</strong>" style="line-height: 1em;">\n  <span class="material-icons md-1 text-warning">undo</span>\n</a>'},compiler:[8,">= 4.3.0"],main:function(n,e,l,t,a){var o,c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<span data-toggle="tooltip" title="Book has been Returned" class="material-icons md-1 o-50 text-success">check_circle</span>'+(null!=(o=c(l,"if").call(null!=e?e:n.nullContext||{},null!=e?c(e,"unreturn"):e,{name:"if",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:2,column:0},end:{line:4,column:13}}}))?o:"")},useData:!0})}();