!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).loans_returned=n({1:function(n,l,e,a,t){return"text-warning "},3:function(n,l,e,a,t){return"text-danger "},5:function(n,l,e,a,t){return"o-75"},7:function(n,l,e,a,t){return"font-weight-bold"},9:function(n,l,e,a,t){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' data-toggle="tooltip" data-html="true" title="<strong>Duration: </strong>'+n.escapeExpression(r(e,"humanize").call(null!=l?l:n.nullContext||{},null!=l?r(l,"duration"):l,{name:"humanize",hash:{},data:t,loc:{start:{line:2,column:276},end:{line:2,column:297}}}))+'"'},11:function(n,l,e,a,t){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return n.escapeExpression(r(e,"localeDate").call(null!=l?l:n.nullContext||{},null!=l?r(l,"returned"):l,{name:"localeDate",hash:{},data:t,loc:{start:{line:2,column:331},end:{line:2,column:354}}}))},13:function(n,l,e,a,t){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return n.escapeExpression(n.lambda(null!=l?r(l,"returned"):l,l))},compiler:[8,">= 4.3.0"],main:function(n,l,e,a,t){var r,o=null!=l?l:n.nullContext||{},u=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<td class="small align-middle">\n  <span class="'+(null!=(r=u(e,"if").call(o,null!=l?u(l,"queried"):l,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:2,column:15},end:{line:2,column:50}}}))?r:"")+(null!=(r=u(e,"if").call(o,null!=l?u(l,"disputed"):l,{name:"if",hash:{},fn:n.program(3,t,0),inverse:n.noop,data:t,loc:{start:{line:2,column:50},end:{line:2,column:85}}}))?r:"")+(null!=(r=u(e,"unless").call(o,u(e,"any").call(o,null!=l?u(l,"queried"):l,null!=l?u(l,"disputed"):l,{name:"any",hash:{},data:t,loc:{start:{line:2,column:95},end:{line:2,column:117}}}),{name:"unless",hash:{},fn:n.program(5,t,0),inverse:n.program(7,t,0),data:t,loc:{start:{line:2,column:85},end:{line:2,column:158}}}))?r:"")+' align-middle returned-date"'+(null!=(r=u(e,"if").call(o,null!=l?u(l,"duration"):l,{name:"if",hash:{},fn:n.program(9,t,0),inverse:n.noop,data:t,loc:{start:{line:2,column:186},end:{line:2,column:305}}}))?r:"")+">"+(null!=(r=u(e,"if").call(o,u(e,"isDate").call(o,null!=l?u(l,"returned"):l,{name:"isDate",hash:{},data:t,loc:{start:{line:2,column:312},end:{line:2,column:329}}}),{name:"if",hash:{},fn:n.program(11,t,0),inverse:n.program(13,t,0),data:t,loc:{start:{line:2,column:306},end:{line:2,column:381}}}))?r:"")+"</span>\n</td>\n"},useData:!0})}();