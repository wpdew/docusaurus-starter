/*! For license information please see 486.fdcff914.js.LICENSE.txt */
(self.webpackChunkdocusaurus_starter=self.webpackChunkdocusaurus_starter||[]).push([[486],{6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(9756),o=n(7294),i=n(3727),a=n(2263),u=n(3919),c=n(412),s=(0,o.createContext)({collectLink:function(){}}),l=n(4996),f=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){var t,n,v=e.isNavLink,p=e.to,g=e.href,h=e.activeClassName,m=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,_=(0,r.Z)(e,d),P=(0,a.Z)().siteConfig,D=P.trailingSlash,A=P.baseUrl,E=(0,l.C)().withBaseUrl,O=(0,o.useContext)(s),S=p||g,V=(0,u.Z)(S),j=null==S?void 0:S.replace("pathname://",""),x=void 0!==j?(n=j,w&&function(e){return e.startsWith("/")}(n)?E(n):n):void 0;x&&V&&(x=(0,f.applyTrailingSlash)(x,{trailingSlash:D,baseUrl:A}));var C,L=(0,o.useRef)(!1),k=v?i.OL:i.rU,I=c.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!I&&V&&null!=x&&window.docusaurus.prefetch(x),function(){I&&C&&C.disconnect()}}),[x,I,V]);var R=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,T=!x||!V||R;return x&&V&&!R&&!y&&O.collectLink(x),T?o.createElement("a",Object.assign({href:x},S&&!V&&{target:"_blank",rel:"noopener noreferrer"},_)):o.createElement(k,Object.assign({},_,{onMouseEnter:function(){L.current||null==x||(window.docusaurus.preload(x),L.current=!0)},innerRef:function(e){var t,n;I&&e&&V&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},(C=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))}))).observe(t))},to:x||""},v&&{isActive:m,activeClassName:h}))}},4973:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f,I:()=>l});var r=n(7294),o=/{\w+}/g,i="{}";function a(e,t){var n=[],a=e.replace(o,(function(e){var o=e.substr(1,e.length-2),a=null==t?void 0:t[o];if(void 0!==a){var u=r.isValidElement(a)?a:String(a);return n.push(u),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(i).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):a.split(i).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function u(e){return a(e.children,e.values)}var c=n(4644);function s(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function l(e,t){var n,r=e.message;return a(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function f(e){var t,n=e.children,o=e.id,i=e.values,a=null!==(t=s({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(u,{values:i},a)}},3919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>o})},8143:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BrowserRouter:()=>r.VK,HashRouter:()=>r.UT,Link:()=>r.rU,MemoryRouter:()=>r.VA,NavLink:()=>r.OL,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=n(3727)},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>i,Z:()=>a});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8084:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o,useAllPluginInstancesData:()=>i,usePluginData:()=>a});var r=n(2263);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var t=o()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function a(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8408:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(8143);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for \""+t+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return i};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,n){var o,i,a=t.getActiveVersion(e,n),u=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:u,alternateDocVersions:u?(o=u.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}};t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(655),o=n(8143),i=r.__importStar(n(8084)),a=n(8408),u={};t.useAllDocsData=function(){var e;return null!==(e=i.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:u};t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=o.useLocation().pathname;return a.getActivePlugin(n,r,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=o.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,r)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)};t.useActiveVersion=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return a.getActiveVersion(n,r)};t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return a.getActiveDocContext(n,r)};t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return a.getDocVersionSuggestions(n,r)}},1217:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7294),o=n(9105),i=n(9306),a=n(4996);function u(e){var t=e.title,n=e.description,u=e.keywords,c=e.image,s=(0,i.LU)().image,l=(0,i.pe)(t),f=(0,a.Z)(c||s,{absolute:!0});return r.createElement(o.Z,null,t&&r.createElement("title",null,l),t&&r.createElement("meta",{property:"og:title",content:l}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),u&&r.createElement("meta",{name:"keywords",content:Array.isArray(u)?u.join(","):u}),f&&r.createElement("meta",{property:"og:image",content:f}),f&&r.createElement("meta",{name:"twitter:image",content:f}))}},907:(e,t,n)=>{"use strict";n.d(t,{Iw:()=>r.useActiveDocContext,gA:()=>r.useActivePlugin,zu:()=>r.useActiveVersion,_r:()=>r.useAllDocsData,Jo:()=>r.useDocVersionSuggestions,zh:()=>r.useDocsData,yW:()=>r.useLatestVersion,gB:()=>r.useVersions});var r=n(6730)},9306:(e,t,n)=>{"use strict";n.d(t,{pl:()=>M,HX:()=>g,L5:()=>C,kM:()=>I,WA:()=>s,os:()=>h,Mg:()=>b,_f:()=>l,bc:()=>p,l5:()=>d,nT:()=>N,J:()=>k,SL:()=>E,D9:()=>A,LU:()=>o,pe:()=>w});var r=n(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}var i="localStorage";function a(e){if(void 0===e&&(e=i),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),u=!0),null}var t}var u=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:t,set:t,del:t}}(e);var n=a(null==t?void 0:t.persistence);return null===n?c:{get:function(){return n.getItem(e)},set:function(t){return n.setItem(e,t)},del:function(){return n.removeItem(e)}}};function l(e){void 0===e&&(e=i);var t=a(e);if(!t)return[];for(var n=[],r=0;r<t.length;r+=1){var o=t.key(r);null!==o&&n.push(o)}return n}var f=n(5977);function d(){var e=(0,r.Z)(),t=e.siteConfig,n=t.baseUrl,o=t.url,i=e.i18n,a=i.defaultLocale,u=i.currentLocale,c=(0,f.TH)().pathname,s=u===a?n:n.replace("/"+u+"/","/"),l=c.replace(n,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===a?""+s:""+s+e+"/"}(t)+l}}}var v=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(v))||void 0===t?void 0:t[2])&&void 0!==n?n:""}var g="default";function h(e,t){return"docs-"+e+"-"+t}var m=n(907),y=!!m._r,b=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)},w=function(e){var t=(0,r.Z)().siteConfig,n=void 0===t?{}:t,o=n.title,i=n.titleDelimiter,a=void 0===i?"|":i;return e&&e.trim().length?e.trim()+" "+a+" "+o:o},_=n(7294),P=["zero","one","two","few","many","other"];function D(e){return P.filter((function(t){return e.includes(t)}))}D(["one","other"]);function A(e){var t=(0,_.useRef)();return(0,_.useEffect)((function(){t.current=e})),t.current}function E(e){var t=(0,f.TH)(),n=A(t),r=(0,_.useRef)(!0);(0,_.useEffect)((function(){r.current?r.current=!1:e({location:t,previousLocation:n})}),[t])}var O=function(e){return"docs-preferred-version-"+e};const S={save:function(e,t,n){s(O(e),{persistence:t}).set(n)},read:function(e,t){return s(O(e),{persistence:t}).get()},clear:function(e,t){s(O(e),{persistence:t}).del()}};function V(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=S.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(S.clear(e,n),{preferredVersionName:null})}(e)})),o}function j(){var e=(0,m._r)(),t=o().docs.versionPersistence,n=(0,_.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,_.useState)((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),i=r[0],a=r[1];return(0,_.useEffect)((function(){a(V({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[i,(0,_.useMemo)((function(){return{savePreferredVersion:function(e,n){S.save(e,t,n),a((function(t){var r;return Object.assign({},t,((r={})[e]={preferredVersionName:n},r))}))}}}),[a])]}var x=(0,_.createContext)(null);function C(e){var t=e.children;return y?_.createElement(L,null,t):_.createElement(_.Fragment,null,t)}function L(e){var t=e.children,n=j();return _.createElement(x.Provider,{value:n},t)}function k(e){void 0===e&&(e="default");var t=(0,m.zh)(e),n=function(){var e=(0,_.useContext)(x);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=n[0],o=n[1],i=r[e].preferredVersionName;return{preferredVersion:i?t.versions.find((function(e){return e.name===i})):null,savePreferredVersionName:(0,_.useCallback)((function(t){o.savePreferredVersion(e,t)}),[o])}}var I={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}},R=s("docusaurus.announcement.dismiss"),T=s("docusaurus.announcement.id"),U=function(){return"true"===R.get()},Z=function(e){return R.set(String(e))},B=(0,_.createContext)(null),M=function(e){var t=e.children,n=function(){var e=o().announcementBar,t=(0,r.Z)().isClient,n=(0,_.useState)((function(){return!!t&&U()})),i=n[0],a=n[1];(0,_.useEffect)((function(){a(U())}),[]);var u=(0,_.useCallback)((function(){Z(!0),a(!0)}),[]);return(0,_.useEffect)((function(){if(e){var t=e.id,n=T.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;T.set(t),r&&Z(!1),!r&&U()||a(!1)}}),[]),(0,_.useMemo)((function(){return{isClosed:i,close:u}}),[i])}();return _.createElement(B.Provider,{value:n},t)},N=function(){var e=(0,_.useContext)(B);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,i=e.split(/[#?]/)[0],a="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,a)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6010:(e,t,n)=>{"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})},655:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__extends:()=>o,__assign:()=>i,__rest:()=>a,__decorate:()=>u,__param:()=>c,__metadata:()=>s,__awaiter:()=>l,__generator:()=>f,__createBinding:()=>d,__exportStar:()=>v,__values:()=>p,__read:()=>g,__spread:()=>h,__spreadArrays:()=>m,__spreadArray:()=>y,__await:()=>b,__asyncGenerator:()=>w,__asyncDelegator:()=>_,__asyncValues:()=>P,__makeTemplateObject:()=>D,__importStar:()=>E,__importDefault:()=>O,__classPrivateFieldGet:()=>S,__classPrivateFieldSet:()=>V});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function u(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function v(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||t)}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||u(e,t)}))})}function u(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,s):l(i[0][2],n)}catch(r){l(i[0][3],r)}var n}function c(e){u("next",e)}function s(e){u("throw",e)}function l(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}function _(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var A=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return A(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function S(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function V(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);