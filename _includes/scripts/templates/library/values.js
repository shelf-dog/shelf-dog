!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).values=n({1:function(n,e,t,a,l){var r=n.lambda,o=n.escapeExpression,u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<tr data-id="'+o(r(null!=e?u(e,"0"):e,e))+'" data-href="#book.'+o(r(null!=e?u(e,"0"):e,e))+'" data-action="click">\n  '+(null!=(o=u(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(2,l,0),inverse:n.noop,data:l,loc:{start:{line:2,column:2},end:{line:2,column:430}}}))?o:"")+"\n</tr>"},2:function(n,e,t,a,l){var r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(t=r(t,"is").call(null!=e?e:n.nullContext||{},l&&r(l,"index"),0,{name:"is",hash:{},fn:n.program(3,l,0),inverse:n.program(5,l,0),data:l,loc:{start:{line:2,column:16},end:{line:2,column:421}}}))?t:""},3:function(n,e,t,a,l){var r=n.lambda,n=n.escapeExpression;return'<th scope="row" class="align-middle bg-dark text-center"><a href="#book.'+n(r(e,e))+'" class="bg-primary px-1 py-2 rounded text-decoration-none text-white d-flex justify-content-center ml-auto mr-auto" style="max-width: fit-content;"><span style="min-width: 2em;">'+n(r(e,e))+"</span></a></th>"},5:function(n,e,t,a,l){var r,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<td class="align-middle'+(null!=(r=o(t,"is").call(null!=e?e:n.nullContext||{},l&&o(l,"index"),1,{name:"is",hash:{},fn:n.program(6,l,0),inverse:n.noop,data:l,loc:{start:{line:2,column:346},end:{line:2,column:386}}}))?r:"")+'">'+(null!=(r=n.invokePartial(o(a,"value"),e,{name:"value",hash:{item:e},data:l,helpers:t,partials:a,decorators:n.decorators}))?r:"")+"</td>"},6:function(n,e,t,a,l){return" font-weight-bold"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return(null!=(t=r(t,"each").call(null!=e?e:n.nullContext||{},null!=e?r(e,"values"):e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:1,column:0},end:{line:3,column:14}}}))?t:"")+"\n"},usePartial:!0,useData:!0})}();