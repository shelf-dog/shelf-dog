!function(){var a=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).update=a({compiler:[8,">= 4.3.0"],main:function(a,e,t,n,l){var s,d=a.lambda,r=a.escapeExpression,p=a.lookupProperty||function(a,e){if(Object.prototype.hasOwnProperty.call(a,e))return a[e]};return'<a href="#'+r(d(null!=e?p(e,"command"):e,e))+'" class="badge badge-dark d-flex align-items-center"\n   data-toggle="tooltip" data-html="true" title="'+r(d(null!=e?p(e,"desc"):e,e))+'" data-action="upgrade" data-id="'+r(d(null!=(s=null!=e?p(e,"file"):e)?p(s,"id"):s,e))+'">\n  <span class="md-24 md-light material-icons">update</span>\n  <span class="mx-1">Update Sheet</span>\n</a>\n'},useData:!0})}();