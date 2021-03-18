!function(){var n=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).loans_loan=n({1:function(n,l,e,a,t){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(r=o(e,"if").call(null!=l?l:n.nullContext||{},null!=l?o(l,"returned"):l,{name:"if",hash:{},fn:n.program(2,t,0),inverse:n.program(4,t,0),data:t,loc:{start:{line:2,column:50},end:{line:2,column:100}}}))?r:""},2:function(n,l,e,a,t){return"returned"},4:function(n,l,e,a,t){return"outstanding"},6:function(n,l,e,a,t){var r,o=null!=l?l:n.nullContext||{},i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<div class="d-flex align-items-center flex-row">'+(null!=(r=i(e,"if").call(o,null!=l?i(l,"overdue"):l,{name:"if",hash:{},fn:n.program(7,t,0),inverse:n.noop,data:t,loc:{start:{line:5,column:6},end:{line:6,column:89}}}))?r:"")+'<a href="'+n.escapeExpression(n.lambda(null!=l?i(l,"command"):l,l))+'"'+(null!=(r=i(e,"if").call(o,null!=l?i(l,"decorate"):l,{name:"if",hash:{},fn:n.program(9,t,0),inverse:n.noop,data:t,loc:{start:{line:7,column:27},end:{line:7,column:64}}}))?r:"")+' class="text-decoration-none link-action pr-2 mr-1 border-right'+(null!=(r=i(e,"if").call(o,null!=l?i(l,"missing"):l,{name:"if",hash:{},fn:n.program(11,t,0),inverse:n.noop,data:t,loc:{start:{line:7,column:127},end:{line:7,column:154}}}))?r:"")+'" style="line-height: 1em;"'+(null!=(r=i(e,"if").call(o,null!=l?i(l,"external"):l,{name:"if",hash:{},fn:n.program(13,t,0),inverse:n.noop,data:t,loc:{start:{line:7,column:181},end:{line:7,column:220}}}))?r:"")+(null!=(r=i(e,"if").call(o,null!=l?i(l,"description"):l,{name:"if",hash:{},fn:n.program(15,t,0),inverse:n.noop,data:t,loc:{start:{line:7,column:220},end:{line:7,column:311}}}))?r:"")+'>\n        <span class="material-icons md-18">menu_book</span>\n      </a>'},7:function(n,l,e,a,t){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<span class="material-icons md-18 text-danger pr-2 o-80" data-toggle="tooltip"\n                            data-html="true" title="'+(null!=(r=n.lambda(null!=l?o(l,"overdue"):l,l))?r:"")+'">warning</span>'},9:function(n,l,e,a,t){return" data-decorate"},11:function(n,l,e,a,t){return" o-25"},13:function(n,l,e,a,t){return' target="_blank"'},15:function(n,l,e,a,t){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return' data-toggle="tooltip" data-html="true" title="'+(null!=(r=n.lambda(null!=l?o(l,"description"):l,l))?r:"")+'"'},17:function(n,l,e,a,t){return'<span class="material-icons md-18 text-warning ml-2 pl-2 border-left" data-toggle="tooltip"\n                            data-html="true" title="Loan is being <strong class=\'text-warning\'>queried</strong>">thumb_down</span>'},19:function(n,l,e,a,t){return'<span class="material-icons md-18 text-danger ml-2 pl-2 border-left" data-toggle="tooltip"\n                            data-html="true" title="Loan is <strong class=\'text-danger\'>disputed</strong>">thumb_down</span>'},21:function(n,l,e,a,t){return"</div>"},23:function(n,l,e,a,t){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(r=n.invokePartial(o(a,"loans_returned"),l,{name:"loans_returned",data:t,helpers:e,partials:a,decorators:n.decorators}))?r:""},25:function(n,l,e,a,t){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(r=n.invokePartial(o(a,"loans_last"),l,{name:"loans_last",data:t,helpers:e,partials:a,decorators:n.decorators}))?r:""},27:function(n,l,e,a,t){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(r=n.invokePartial(o(a,"returned"),l,{name:"returned",data:t,indent:"      ",helpers:e,partials:a,decorators:n.decorators}))?r:""},29:function(n,l,e,a,t){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(r=o(e,"unless").call(null!=l?l:n.nullContext||{},null!=l?o(l,"disputed"):l,{name:"unless",hash:{},fn:n.program(30,t,0),inverse:n.noop,data:t,loc:{start:{line:25,column:6},end:{line:25,column:129}}}))?r:"")+(null!=(r=n.invokePartial(o(a,"return"),l,{name:"return",hash:{user:null!=l?o(l,"who"):l},data:t,helpers:e,partials:a,decorators:n.decorators}))?r:"")},30:function(n,l,e,a,t){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(r=n.invokePartial(o(a,"renew"),l,{name:"renew",hash:{user:null!=l?o(l,"who"):l},data:t,helpers:e,partials:a,decorators:n.decorators}))?r:"")+(null!=(r=o(e,"if").call(null!=l?l:n.nullContext||{},null!=l?o(l,"queried"):l,{name:"if",hash:{},fn:n.program(31,t,0),inverse:n.program(33,t,0),data:t,loc:{start:{line:25,column:46},end:{line:25,column:118}}}))?r:"")},31:function(n,l,e,a,t){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(r=n.invokePartial(o(a,"dispute"),l,{name:"dispute",hash:{user:null!=l?o(l,"who"):l},data:t,helpers:e,partials:a,decorators:n.decorators}))?r:""},33:function(n,l,e,a,t){var r,o=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(r=n.invokePartial(o(a,"query"),l,{name:"query",hash:{user:null!=l?o(l,"who"):l},data:t,helpers:e,partials:a,decorators:n.decorators}))?r:""},compiler:[8,">= 4.3.0"],main:function(n,l,e,a,t){var r,o=n.lambda,i=n.escapeExpression,u=null!=l?l:n.nullContext||{},s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<tr data-type="loan" data-id="'+i(o(null!=l?s(l,"item"):l,l))+'" data-user="'+i(o(null!=l?s(l,"who"):l,l))+'"\n    data-state="'+(null!=(r=s(e,"unless").call(u,s(e,"any").call(u,null!=l?s(l,"queried"):l,null!=l?s(l,"disputed"):l,{name:"any",hash:{},data:t,loc:{start:{line:2,column:26},end:{line:2,column:48}}}),{name:"unless",hash:{},fn:n.program(1,t,0),inverse:n.program(4,t,0),data:t,loc:{start:{line:2,column:16},end:{line:2,column:130}}}))?r:"")+'">\n  <th class="align-middle" scope="row">'+(null!=(r=s(e,"if").call(u,null!=l?s(l,"command"):l,{name:"if",hash:{},fn:n.program(6,t,0),inverse:n.noop,data:t,loc:{start:{line:4,column:4},end:{line:9,column:18}}}))?r:"")+'<a href="#search.'+i(s(e,"encode").call(u,null!=l?s(l,"item"):l,{name:"encode",hash:{},data:t,loc:{start:{line:10,column:23},end:{line:10,column:38}}}))+'" class="text-decoration-none link-action ml-1">'+i(o(null!=l?s(l,"item"):l,l))+"</a>\n    "+(null!=(r=s(e,"if").call(u,null!=l?s(l,"queried"):l,{name:"if",hash:{},fn:n.program(17,t,0),inverse:n.noop,data:t,loc:{start:{line:11,column:4},end:{line:12,column:138}}}))?r:"")+(null!=(r=s(e,"if").call(u,null!=l?s(l,"disputed"):l,{name:"if",hash:{},fn:n.program(19,t,0),inverse:n.noop,data:t,loc:{start:{line:13,column:4},end:{line:14,column:132}}}))?r:"")+(null!=(r=s(e,"if").call(u,null!=l?s(l,"command"):l,{name:"if",hash:{},fn:n.program(21,t,0),inverse:n.noop,data:t,loc:{start:{line:15,column:4},end:{line:15,column:34}}}))?r:"")+"</th>\n"+(null!=(r=n.invokePartial(s(a,"loans_who"),l,{name:"loans_who",data:t,indent:"  ",helpers:e,partials:a,decorators:n.decorators}))?r:"")+(null!=(r=n.invokePartial(s(a,"loans_when"),l,{name:"loans_when",data:t,indent:"  ",helpers:e,partials:a,decorators:n.decorators}))?r:"")+(null!=(r=s(e,"if").call(u,null!=l?s(l,"show_returned"):l,{name:"if",hash:{},fn:n.program(23,t,0),inverse:n.noop,data:t,loc:{start:{line:19,column:2},end:{line:19,column:52}}}))?r:"")+(null!=(r=s(e,"if").call(u,null!=l?s(l,"show_full"):l,{name:"if",hash:{},fn:n.program(25,t,0),inverse:n.noop,data:t,loc:{start:{line:20,column:2},end:{line:20,column:44}}}))?r:"")+'<td class="align-middle commands data-commands" style="padding-top: 11x; padding-bottom: 6px;">'+(null!=(r=s(e,"if").call(u,s(e,"isDate").call(u,null!=l?s(l,"returned"):l,{name:"isDate",hash:{},data:t,loc:{start:{line:22,column:11},end:{line:22,column:28}}}),{name:"if",hash:{},fn:n.program(27,t,0),inverse:n.program(29,t,0),data:t,loc:{start:{line:22,column:4},end:{line:26,column:13}}}))?r:"")+'</td>\n  <td class="d-none data-confirm align-middle commands" style="padding-top: 5px; padding-bottom: 5px;"></td>\n  <td class="d-none data-result align-middle commands" style="padding-top: 5px; padding-bottom: 5px;"></td>\n</tr>\n'},usePartial:!0,useData:!0})}();