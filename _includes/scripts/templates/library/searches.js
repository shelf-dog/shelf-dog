!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).searches=n({1:function(n,e,l,t,r){var o;return null!=(o=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(l,"if").call(null!=e?e:n.nullContext||{},e,{name:"if",hash:{},fn:n.program(2,r,0),inverse:n.noop,data:r,loc:{start:{line:3,column:16},end:{line:3,column:307}}}))?o:""},2:function(n,e,l,t,r){var o,a=null!=e?e:n.nullContext||{},c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="list-group-item p-1 px-3 bg-highlight text-dark"><a href="#search.'+(null!=(o=c(l,"if").call(a,c(l,"isString").call(a,e,{name:"isString",hash:{},data:r,loc:{start:{line:3,column:112},end:{line:3,column:127}}}),{name:"if",hash:{},fn:n.program(3,r,0),inverse:n.program(5,r,0),data:r,loc:{start:{line:3,column:106},end:{line:3,column:181}}}))?o:"")+'" class="font-weight-bolder text-decoration-none">'+(null!=(o=c(l,"if").call(a,c(l,"isString").call(a,e,{name:"isString",hash:{},data:r,loc:{start:{line:3,column:237},end:{line:3,column:252}}}),{name:"if",hash:{},fn:n.program(7,r,0),inverse:n.program(9,r,0),data:r,loc:{start:{line:3,column:231},end:{line:3,column:289}}}))?o:"")+"</a></li>"},3:function(n,e,l,t,r){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return n.escapeExpression(o(l,"encode").call(null!=e?e:n.nullContext||{},e,{name:"encode",hash:{},data:r,loc:{start:{line:3,column:129},end:{line:3,column:144}}}))},5:function(n,e,l,t,r){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return n.escapeExpression(o(l,"encode").call(null!=e?e:n.nullContext||{},null!=e?o(e,"search"):e,{name:"encode",hash:{},data:r,loc:{start:{line:3,column:152},end:{line:3,column:174}}}))},7:function(n,e,l,t,r){return"Generic"},9:function(n,e,l,t,r){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return n.escapeExpression(n.lambda(null!=e?o(e,"name"):e,e))},compiler:[8,">= 4.3.0"],main:function(n,e,l,t,r){var o;return'<ul class="list-group list-group-horizontal-md">\n  <li class="list-group-item p-1 px-2 text-light bg-secondary o-75">Custom Searches<span class="ml-1 text-dark d-none d-md-inline">➡</span></li>\n  '+(null!=(o=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(l,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:3,column:2},end:{line:3,column:316}}}))?o:"")+"\n</ul>\n"},useData:!0})}();