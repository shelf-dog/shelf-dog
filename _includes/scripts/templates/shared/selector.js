!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).selector=n({1:function(n,l,e,a,o){return'<div class="bg-dark p-2 p-xl-3 mb-2 rounded-lg">'},3:function(n,l,e,a,o){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(n=n.lambda(null!=l?r(l,"content"):l,l))?n:""},5:function(n,l,e,a,o){var r=n.lambda,t=n.escapeExpression,n=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<option value="library.'+t(r(null!=l?n(l,"code"):l,l))+'">'+t(r(null!=l?n(l,"name"):l,l))+"</option>"},7:function(n,l,e,a,o){var r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<a class="btn btn-warning d-flex waves-effect align-items-center" href="'+n.escapeExpression(n.lambda(null!=l?r(l,"cancel"):l,l))+'"'+(null!=(e=r(e,"if").call(null!=l?l:n.nullContext||{},null!=l?r(l,"external"):l,{name:"if",hash:{},fn:n.program(8,o,0),inverse:n.noop,data:o,loc:{start:{line:9,column:102},end:{line:9,column:139}}}))?e:"")+' role="button">\n      <span class="d-none d-md-inline">Cancel</span>\n      <span class="d-md-none material-icons md-18">close</span>\n    </a>'},8:function(n,l,e,a,o){return" data-decorate"},10:function(n,l,e,a,o){return"</div>"},compiler:[8,">= 4.3.0"],main:function(n,l,e,a,o){var r,t=null!=l?l:n.nullContext||{},c=n.lambda,i=n.escapeExpression,s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(r=s(e,"if").call(t,null!=l?s(l,"container"):l,{name:"if",hash:{},fn:n.program(1,o,0),inverse:n.noop,data:o,loc:{start:{line:1,column:0},end:{line:1,column:74}}}))?r:"")+(null!=(r=s(e,"if").call(t,null!=l?s(l,"content"):l,{name:"if",hash:{},fn:n.program(3,o,0),inverse:n.noop,data:o,loc:{start:{line:2,column:0},end:{line:2,column:39}}}))?r:"")+'<div class="input-group">\n  <select class="custom-select swap-selector" id="choose_Library" aria-label="Choose Library for Settings">\n    <option selected>Choose Library...</option>\n    '+(null!=(r=s(e,"each").call(t,null!=l?s(l,"libraries"):l,{name:"each",hash:{},fn:n.program(5,o,0),inverse:n.noop,data:o,loc:{start:{line:6,column:4},end:{line:6,column:82}}}))?r:"")+'\n  </select>\n  <div class="input-group-append">'+(null!=(r=s(e,"if").call(t,null!=l?s(l,"cancel"):l,{name:"if",hash:{},fn:n.program(7,o,0),inverse:n.noop,data:o,loc:{start:{line:9,column:4},end:{line:12,column:16}}}))?r:"")+'<a class="btn btn-dark disabled d-flex waves-effect align-items-center" href="'+i(c(null!=l?s(l,"url"):l,l))+'" data-href="'+i(c(null!=l?s(l,"url"):l,l))+'"'+(null!=(r=s(e,"if").call(t,null!=l?s(l,"external"):l,{name:"if",hash:{},fn:n.program(8,o,0),inverse:n.noop,data:o,loc:{start:{line:13,column:110},end:{line:13,column:147}}}))?r:"")+' role="button" data-role="select">\n      <span class="d-none d-md-inline">'+i(c(null!=l?s(l,"text"):l,l))+'</span>\n      <span class="d-md-none material-icons md-18">arrow_forward</span>\n    </a>\n  </div>\n</div>'+(null!=(r=s(e,"if").call(t,null!=l?s(l,"container"):l,{name:"if",hash:{},fn:n.program(10,o,0),inverse:n.noop,data:o,loc:{start:{line:19,column:0},end:{line:19,column:32}}}))?r:"")},useData:!0})}();