!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).confirm=n({1:function(n,l,a,e,t){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'id="'+n.escapeExpression(n.lambda(null!=l?o(l,"id"):l,l))+'" '},3:function(n,l,a,e,t){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return n.escapeExpression(n.lambda(null!=l?o(l,"title"):l,l))},5:function(n,l,a,e,t){return"Are you sure?"},7:function(n,l,a,e,t){var o,r=null!=l?l:n.nullContext||{},s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(o=s(a,"unless").call(r,s(a,"startsWith").call(r,null!=l?s(l,"message"):l,"<p>",{name:"startsWith",hash:{},data:t,loc:{start:{line:12,column:20},end:{line:12,column:46}}}),{name:"unless",hash:{},fn:n.program(8,t,0),inverse:n.noop,data:t,loc:{start:{line:12,column:10},end:{line:12,column:62}}}))?o:"")+(null!=(o=n.lambda(null!=l?s(l,"message"):l,l))?o:"")+(null!=(o=s(a,"unless").call(r,s(a,"startsWith").call(r,null!=l?s(l,"message"):l,"<p>",{name:"startsWith",hash:{},data:t,loc:{start:{line:12,column:85},end:{line:12,column:111}}}),{name:"unless",hash:{},fn:n.program(10,t,0),inverse:n.noop,data:t,loc:{start:{line:12,column:75},end:{line:12,column:128}}}))?o:"")},8:function(n,l,a,e,t){return"<p>"},10:function(n,l,a,e,t){return"</p>"},12:function(n,l,a,e,t){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return n.escapeExpression(n.lambda(null!=l?o(l,"close"):l,l))},14:function(n,l,a,e,t){return"Close"},16:function(n,l,a,e,t){var o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return n.escapeExpression(n.lambda(null!=l?o(l,"action"):l,l))},18:function(n,l,a,e,t){return"Confirm"},compiler:[8,">= 4.3.0"],main:function(n,l,a,e,t){var o,r=null!=l?l:n.nullContext||{},s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return"<div "+(null!=(o=s(a,"if").call(r,null!=l?s(l,"id"):l,{name:"if",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:1,column:5},end:{line:1,column:36}}}))?o:"")+'class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modal_confirm_title">\n  <div class="modal-dialog modal-lg" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="modal_confirm_title">'+(null!=(o=s(a,"if").call(r,null!=l?s(l,"title"):l,{name:"if",hash:{},fn:n.program(3,t,0),inverse:n.program(5,t,0),data:t,loc:{start:{line:5,column:57},end:{line:5,column:107}}}))?o:"")+'</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">'+(null!=(o=s(a,"if").call(r,null!=l?s(l,"message"):l,{name:"if",hash:{},fn:n.program(7,t,0),inverse:n.noop,data:t,loc:{start:{line:11,column:8},end:{line:13,column:17}}}))?o:"")+'</div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary btn-outline-secondary btn-flat waves-effect" data-dismiss="modal">'+(null!=(o=s(a,"if").call(r,null!=l?s(l,"close"):l,{name:"if",hash:{},fn:n.program(12,t,0),inverse:n.program(14,t,0),data:t,loc:{start:{line:16,column:121},end:{line:16,column:163}}}))?o:"")+'</button>\n        <button type="button" class="btn btn-primary waves-effect" data-dismiss="modal">'+(null!=(o=s(a,"if").call(r,null!=l?s(l,"action"):l,{name:"if",hash:{},fn:n.program(16,t,0),inverse:n.program(18,t,0),data:t,loc:{start:{line:17,column:88},end:{line:17,column:134}}}))?o:"")+"</button>\n      </div>\n    </div>\n  </div>\n</div>\n"},useData:!0})}();