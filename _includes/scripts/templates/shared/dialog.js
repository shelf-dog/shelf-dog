!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).dialog=n({1:function(n,l,t,a,e){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' id="'+n.escapeExpression(n.lambda(null!=l?o(l,"id"):l,l))+'"'},3:function(n,l,t,a,e){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return" "+n.escapeExpression(n.lambda(null!=l?o(l,"class"):l,l))},5:function(n,l,t,a,e){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<i class="mr-2 material-icons md-light md-24 align-self-center">'+n.escapeExpression(n.lambda(null!=l?o(l,"icon"):l,l))+"</i>"},7:function(n,l,t,a,e){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<h6 class="text-secondary m-0">'+(null!=(o=n.lambda(null!=l?r(l,"subtitle"):l,l))?o:"")+"</h6>"},9:function(n,l,t,a,e){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(o=n.lambda(null!=l?r(l,"instructions"):l,l))?o:""},11:function(n,l,t,a,e){var o=null!=l?l:n.nullContext||{},r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' tabindex="'+n.escapeExpression(r(t,"inc").call(o,r(t,"inc").call(o,null!=l?r(l,"tabindex"):l,{name:"inc",hash:{},data:e,loc:{start:{line:19,column:138},end:{line:19,column:152}}}),{name:"inc",hash:{},data:e,loc:{start:{line:19,column:132},end:{line:19,column:154}}}))+'"'},13:function(n,l,t,a,e){var o,r=null!=l?l:n.nullContext||{},i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<button type="button" class="btn btn-primary" data-dismiss="modal"'+(null!=(o=i(t,"exists").call(r,null!=l?i(l,"tabindex"):l,{name:"exists",hash:{},fn:n.program(14,e,0),inverse:n.noop,data:e,loc:{start:{line:20,column:95},end:{line:20,column:155}}}))?o:"")+(null!=(o=i(t,"present").call(r,null!=l?i(l,"action_desc"):l,{name:"present",hash:{},fn:n.program(16,e,0),inverse:n.noop,data:e,loc:{start:{line:20,column:155},end:{line:20,column:293}}}))?o:"")+">"+(null!=(o=i(t,"if").call(r,null!=l?i(l,"action"):l,{name:"if",hash:{},fn:n.program(18,e,0),inverse:n.program(20,e,0),data:e,loc:{start:{line:20,column:294},end:{line:20,column:340}}}))?o:"")+"</button>"},14:function(n,l,t,a,e){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' tabindex="'+n.escapeExpression(o(t,"inc").call(null!=l?l:n.nullContext||{},null!=l?o(l,"tabindex"):l,{name:"inc",hash:{},data:e,loc:{start:{line:20,column:127},end:{line:20,column:143}}}))+'"'},16:function(n,l,t,a,e){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' data-toggle="tooltip" data-delay="500" data-placement="top" data-html="true" title="'+n.escapeExpression(n.lambda(null!=l?o(l,"action_desc"):l,l))+'"'},18:function(n,l,t,a,e){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return n.escapeExpression(n.lambda(null!=l?o(l,"action"):l,l))},20:function(n,l,t,a,e){return"Confirm"},compiler:[8,">= 4.3.0"],main:function(n,l,t,a,e){var o,r=null!=l?l:n.nullContext||{},i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"<div"+(null!=(o=i(t,"present").call(r,null!=l?i(l,"id"):l,{name:"present",hash:{},fn:n.program(1,e,0),inverse:n.noop,data:e,loc:{start:{line:1,column:4},end:{line:1,column:43}}}))?o:"")+' class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_options_title">\n  <div class="modal-dialog modal-dialog-scrollable'+(null!=(o=i(t,"if").call(r,null!=l?i(l,"class"):l,{name:"if",hash:{},fn:n.program(3,e,0),inverse:n.noop,data:e,loc:{start:{line:2,column:50},end:{line:2,column:80}}}))?o:"")+'" role="document">\n    <div class="modal-content">\n      <div class="modal-header">'+(null!=(o=i(t,"if").call(r,null!=l?i(l,"icon"):l,{name:"if",hash:{},fn:n.program(5,e,0),inverse:n.noop,data:e,loc:{start:{line:5,column:8},end:{line:5,column:105}}}))?o:"")+'<div class="flex-column">\n          <h5 class="modal-title" id="modal_options_title">'+(null!=(o=n.lambda(null!=l?i(l,"title"):l,l))?o:"")+"</h5>"+(null!=(o=i(t,"present").call(r,null!=l?i(l,"subtitle"):l,{name:"present",hash:{},fn:n.program(7,e,0),inverse:n.noop,data:e,loc:{start:{line:8,column:10},end:{line:8,column:95}}}))?o:"")+'</div>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">'+(null!=(o=i(t,"if").call(r,null!=l?i(l,"instructions"):l,{name:"if",hash:{},fn:n.program(9,e,0),inverse:n.noop,data:e,loc:{start:{line:15,column:8},end:{line:15,column:57}}}))?o:"")+(null!=(o=n.invokePartial(i(a,"@partial-block"),l,{name:"@partial-block",data:e,helpers:t,partials:a,decorators:n.decorators}))?o:"")+'\t\t\t</div>\n      <div class="modal-footer">\n\t\t\t\t<button type="button" class="btn btn-outline-secondary btn-flat text-light" data-dismiss="modal"'+(null!=(o=i(t,"exists").call(r,null!=l?i(l,"tabindex"):l,{name:"exists",hash:{},fn:n.program(11,e,0),inverse:n.noop,data:e,loc:{start:{line:19,column:100},end:{line:19,column:166}}}))?o:"")+">Close</button>\n        "+(null!=(o=i(t,"unless").call(r,null!=l?i(l,"no_action"):l,{name:"unless",hash:{},fn:n.program(13,e,0),inverse:n.noop,data:e,loc:{start:{line:20,column:8},end:{line:20,column:360}}}))?o:"")+"\n      </div>\n    </div>\n  </div>\n</div>\n"},usePartial:!0,useData:!0})}();