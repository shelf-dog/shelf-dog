!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).filter=n({1:function(n,e,t,l,a){return"custom-slider"},3:function(n,e,t,l,a){return""},compiler:[8,">= 4.3.0"],main:function(n,e,t,l,a){var s,r=n.lambda,i=n.escapeExpression,o=null!=e?e:n.nullContext||{},u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div id="filter_'+i(r(a&&u(a,"key"),e))+'" data-filter-name="'+i(r(a&&u(a,"key"),e))+'">\n  <div class="'+(null!=(s=u(t,"if").call(o,null!=e?u(e,"range"):e,{name:"if",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:2,column:14},end:{line:2,column:47}}}))?s:"")+'">'+(null!=(s=u(t,"unless").call(o,null!=e?u(e,"range"):e,{name:"unless",hash:{},fn:n.program(3,a,0),inverse:n.noop,data:a,loc:{start:{line:3,column:2},end:{line:3,column:34}}}))?s:"")+'</div>\n  <div class="mt-2 pt-1 d-flex flex-row align-items-center">\n    <span class="font-larger-110">Filter by: <span class="font-weight-bold text-white">'+i(r(null!=e?u(e,"name"):e,e))+'</span></span>\n    <button class="btn btn-light waves-effect btn-sm ml-2" data-action="reset" type="button">Reset</button>\n  </div>\n</div>\n'},useData:!0})}();