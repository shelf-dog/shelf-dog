!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).results_header=n({1:function(n,e,l,t,a){return"s"},3:function(n,e,l,t,a){return" for "},5:function(n,e,l,t,a){var r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<span class="text-secondary">'+n.escapeExpression(n.lambda(null!=e?r(e,"terms"):e,e))+"</span>"},compiler:[8,">= 4.3.0"],main:function(n,e,l,t,a){var r,s=null!=e?e:n.nullContext||{},o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<span class="text-white">'+n.escapeExpression(n.lambda(null!=e?o(e,"count"):e,e))+"</span><span> Result"+(null!=(r=o(l,"is").call(s,null!=e?o(e,"count"):e,"gt",1,{name:"is",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:54},end:{line:1,column:82}}}))?r:"")+(null!=(r=o(l,"present").call(s,null!=e?o(e,"terms"):e,{name:"present",hash:{},fn:n.program(3,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:82},end:{line:1,column:117}}}))?r:"")+"</span>"+(null!=(r=o(l,"present").call(s,null!=e?o(e,"terms"):e,{name:"present",hash:{},fn:n.program(5,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:124},end:{line:1,column:199}}}))?r:"")+"\n"},useData:!0})}();