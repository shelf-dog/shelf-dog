!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).loan=n({1:function(n,l,a,t,e){var o,i=null!=l?l:n.nullContext||{},r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<div data-type="source" class="row align-items-center">\n\n  <div class="container col-xl-5">\n    <div class="form-group row my-1">\n      <label for="'+(null!=(o=r(a,"if").call(i,null!=l?r(l,"id"):l,{name:"if",hash:{},fn:n.program(2,e,0),inverse:n.noop,data:e,loc:{start:{line:6,column:18},end:{line:6,column:42}}}))?o:"")+'item" class="col-sm-2 col-form-label text-white">Item</label>\n      <div class="col-sm-10">\n        <input id="'+(null!=(o=r(a,"if").call(i,null!=l?r(l,"id"):l,{name:"if",hash:{},fn:n.program(2,e,0),inverse:n.noop,data:e,loc:{start:{line:8,column:19},end:{line:8,column:43}}}))?o:"")+'item" data-enter="next" data-output-field="Item" data-output-always="true"\n               type="text" class="form-control" tabindex="1" />\n      </div>\n    </div>\n  </div>\n\n  <div class="container col-xl-6">\n    <div class="form-group row my-1">\n      <label for="'+(null!=(o=r(a,"if").call(i,null!=l?r(l,"id"):l,{name:"if",hash:{},fn:n.program(2,e,0),inverse:n.noop,data:e,loc:{start:{line:16,column:18},end:{line:16,column:42}}}))?o:"")+'who" class="col-sm-2 col-form-label text-white">Who</label>\n      <div class="col-sm-10">\n        <input id="'+(null!=(o=r(a,"if").call(i,null!=l?r(l,"id"):l,{name:"if",hash:{},fn:n.program(2,e,0),inverse:n.noop,data:e,loc:{start:{line:18,column:19},end:{line:18,column:43}}}))?o:"")+'who" data-enter="next" data-output-field="Who" data-output-always="true"\n               type="text" class="form-control" tabindex="2" />\n      </div>\n    </div>\n  </div>\n\n  <div class="col-xl-1 d-flex align-items-center">\n    <button type="button" class="btn btn-success d-flex p-2 waves-effect ml-auto mt-2 mt-xl-0" data-click="add" tabindex="3">\n      <i class="material-icons md-24 text-light">playlist_add</i>\n    </button>\n  </div>\n  \n</div>\n\n<form class="needs-validation mt-3" novalidate>\n  <div data-output-field="Loans">\n    <div data-type="output" data-holder-field="Entries"></div>  \n  </div>\n</form>\n'},2:function(n,l,a,t,e){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return n.escapeExpression(n.lambda(null!=l?o(l,"id"):l,l))+"_"},compiler:[8,">= 4.3.0"],main:function(n,l,a,t,e){var o,i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(o=n.invokePartial(i(t,"dialog"),l,{name:"dialog",hash:{tabindex:3,class:"modal-xl"},fn:n.program(1,e,0),inverse:n.noop,data:e,helpers:a,partials:t,decorators:n.decorators}))?o:""},usePartial:!0,useData:!0})}();