!function(){var e=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).filter_header=e({compiler:[8,">= 4.3.0"],main:function(e,t,a,r,s){var n=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<span class="text-highlight filtered-results">'+e.escapeExpression(e.lambda(null!=t?n(t,"count"):t,t))+'</span><span class="filtered-results text-secondary"> / </span>\n'},useData:!0})}();