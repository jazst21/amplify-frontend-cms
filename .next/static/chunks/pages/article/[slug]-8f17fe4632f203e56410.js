(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{5030:function(e,t,r){"use strict";var a=r(5893),n=r(1422),i=r(5675);t.Z=function(e){var t=e.image,r=(e.style,t.url),s=t.alternativeText;return(0,a.jsx)(i.default,{loader:function(){return(0,n.$)(t)},layout:"responsive",width:t.width,height:t.height,objectFit:"contain",src:r,alt:s||""})}},6347:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(5893),n=(r(7294),r(1664)),i=function(e){var t=e.categories;return(0,a.jsx)("div",{children:(0,a.jsxs)("nav",{className:"uk-navbar-container","data-uk-navbar":!0,children:[(0,a.jsx)("div",{className:"uk-navbar-left",children:(0,a.jsx)("ul",{className:"uk-navbar-nav",children:(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("a",{children:"Strapi Blog"})})})})}),(0,a.jsx)("div",{className:"uk-navbar-right",children:(0,a.jsx)("ul",{className:"uk-navbar-nav",children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{as:"/category/".concat(e.slug),href:"/category/[id]",children:(0,a.jsx)("a",{className:"uk-link-reset",children:e.name})})},e.id)}))})})]})})},s=function(e){var t=e.children,r=e.categories;e.seo;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{categories:r}),t]})}},8303:function(e,t,r){"use strict";var a=r(5893),n=r(6156),i=r(9008),s=r(7294),c=r(7672),l=r(1422);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.seo,r=(0,s.useContext)(c.GlobalContext),n=r.defaultSeo,o=r.siteName,m=u(u({},n),t),d=u(u({},m),{},{metaTitle:"".concat(m.metaTitle," | ").concat(o),shareImage:(0,l.$)(m.shareImage)});return(0,a.jsxs)(i.default,{children:[d.metaTitle&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:d.metaTitle}),(0,a.jsx)("meta",{property:"og:title",content:d.metaTitle}),(0,a.jsx)("meta",{name:"twitter:title",content:d.metaTitle})]}),d.metaDescription&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"description",content:d.metaDescription}),(0,a.jsx)("meta",{property:"og:description",content:d.metaDescription}),(0,a.jsx)("meta",{name:"twitter:description",content:d.metaDescription})]}),d.shareImage&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{property:"og:image",content:d.shareImage}),(0,a.jsx)("meta",{name:"twitter:image",content:d.shareImage}),(0,a.jsx)("meta",{name:"image",content:d.shareImage})]}),d.article&&(0,a.jsx)("meta",{property:"og:type",content:"article"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},6612:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d}});var a=r(5893),n=r(724),i=r.n(n),s=r(4803),c=r.n(s),l=r(6347),o=r(5030),u=r(8303),m=r(1422),d=!0;t.default=function(e){var t=e.article,r=e.categories,n=(0,m.$)(t.image),s={metaTitle:t.title,metaDescription:t.description,shareImage:t.image,article:!0};return(0,a.jsxs)(l.Z,{categories:r,children:[(0,a.jsx)(u.Z,{seo:s}),(0,a.jsx)("div",{id:"banner",className:"uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin","data-src":n,"data-srcset":n,"data-uk-img":!0,children:(0,a.jsx)("h1",{children:t.title})}),(0,a.jsx)("div",{className:"uk-section",children:(0,a.jsxs)("div",{className:"uk-container uk-container-small",children:[(0,a.jsx)(i(),{source:t.content,escapeHtml:!1}),(0,a.jsx)("hr",{className:"uk-divider-small"}),(0,a.jsxs)("div",{className:"uk-grid-small uk-flex-left","data-uk-grid":"true",children:[(0,a.jsx)("div",{children:t.author.picture&&(0,a.jsx)(o.Z,{image:t.author.picture})}),(0,a.jsxs)("div",{className:"uk-width-expand",children:[(0,a.jsxs)("p",{className:"uk-margin-remove-bottom",children:["By ",t.author.name]}),(0,a.jsx)("p",{className:"uk-text-meta uk-margin-remove-top",children:(0,a.jsx)(c(),{format:"MMM Do YYYY",children:t.published_at})})]})]})]})})]})}},615:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[slug]",function(){return r(6612)}])}},function(e){e.O(0,[774,885,61,939,888,179],(function(){return t=615,e(e.s=t);var t}));var t=e.O();_N_E=t}]);