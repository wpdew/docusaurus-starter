(self.webpackChunkdocusaurus_starter=self.webpackChunkdocusaurus_starter||[]).push([[637],{6159:(e,t,n)=>{"use strict";n.d(t,{N:()=>d,Z:()=>y});var r=n(9756),o=n(2122),a=n(7294),l=n(6010),s=n(4973),c=n(941);const i="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-";var p=["id"],d=function(e){var t=Object.assign({},e);return a.createElement("header",null,a.createElement("h1",(0,o.Z)({},t,{id:void 0}),t.children))};const y=function(e){return"h1"===e?d:(t=e,function(e){var n,o=e.id,d=(0,r.Z)(e,p),y=(0,c.LU)().navbar.hideOnScroll;return o?a.createElement(t,d,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor","anchor__"+t,(n={},n[u]=y,n[i]=!y,n)),id:o}),d.children,a.createElement("a",{className:"hash-link",href:"#"+o,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(t,d)});var t}},637:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$});var r=n(2122),o=n(9756),a=n(7294),l=n(9105),s=n(6742),c=n(6010);const i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var u={Prism:n(7410).default,theme:i};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=/\r\n|\r|\n/,h=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=d({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=d({},n,{backgroundColor:null}),o};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const v=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=d({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?d({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(s))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=d({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?d({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),p(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,s=[],c=[s];l>-1;){for(;(a=r[l]++)<o[l];){var i=void 0,u=t[l],p=n[l][a];if("string"==typeof p?(u=l>0?u:["plain"],i=p):(u=m(u,p.type),p.alias&&(u=m(u,p.alias)),i=p.content),"string"==typeof i){var d=i.split(y),g=d.length;s.push({types:u,content:d[0]});for(var f=1;f<g;f++)h(s),c.push(s=[]),s.push({types:u,content:d[f]})}else l++,t.push(u),n.push(i),r.push(0),o.push(i.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return h(s),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var b=n(7594),k=n.n(b);const E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var j=n(5350),T=n(941);const N=function(){var e=(0,T.LU)().prism,t=(0,j.Z)().isDarkTheme,n=e.theme||E,r=e.darkTheme||n;return t?r:n};var Z=n(4973);const x="codeBlockContainer_K1bP",C="codeBlockContent_hGly",O="codeBlockTitle_eoMF",_="codeBlock_23N8",L="copyButton_Ue-o",B="codeBlockLines_39YC";var P=/{([\d,-]+)}/,S=["js","jsBlock","jsx","python","html"],D={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},w=["highlight-next-line","highlight-start","highlight-end"],A=function(e){void 0===e&&(e=S);var t=e.map((function(e){var t=D[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+w.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function I(e){var t=e.children,n=e.className,o=e.metastring,l=e.title,s=(0,T.LU)().prism,i=(0,a.useState)(!1),p=i[0],d=i[1],y=(0,a.useState)(!1),h=y[0],m=y[1];(0,a.useEffect)((function(){m(!0)}),[]);var g=(0,T.bc)(o)||l,f=(0,a.useRef)(null),b=[],E=N(),j=Array.isArray(t)?t.join(""):t;if(o&&P.test(o)){var S=o.match(P)[1];b=k()(S).filter((function(e){return e>0}))}var D=null==n?void 0:n.replace(/language-/,"");!D&&s.defaultLanguage&&(D=s.defaultLanguage);var w=j.replace(/\n$/,"");if(0===b.length&&void 0!==D){for(var I,R="",z=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return A(["js","jsBlock"]);case"jsx":case"tsx":return A(["js","jsBlock","jsx"]);case"html":return A(["js","jsBlock","html"]);case"python":case"py":return A(["python"]);default:return A()}}(D),F=j.replace(/\n$/,"").split("\n"),V=0;V<F.length;){var $=V+1,U=F[V].match(z);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=$+",";break;case"highlight-start":I=$;break;case"highlight-end":R+=I+"-"+($-1)+","}F.splice(V,1)}else V+=1}b=k()(R),w=F.join("\n")}var W=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var l=document.getSelection(),s=!1;l.rangeCount>0&&(s=l.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(i){}o.remove(),s&&(l.removeAllRanges(),l.addRange(s)),a&&a.focus()}(w),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.createElement(v,(0,r.Z)({},u,{key:String(h),theme:E,code:w,language:D}),(function(e){var t=e.className,n=e.style,o=e.tokens,l=e.getLineProps,s=e.getTokenProps;return a.createElement("div",{className:x},g&&a.createElement("div",{style:n,className:O},g),a.createElement("div",{className:(0,c.Z)(C,D)},a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,_,"thin-scrollbar"),style:n},a.createElement("code",{className:B},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return b.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))})))})))),a.createElement("button",{ref:f,type:"button","aria-label":(0,Z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(L,"clean-btn"),onClick:W},p?a.createElement(Z.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(Z.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var R=n(6159);const z="details_1VDD";function F(e){var t=Object.assign({},e);return a.createElement(T.PO,(0,r.Z)({},t,{className:(0,c.Z)("alert alert--info",z,t.className)}))}var V=["mdxType","originalType"];const $={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,o.Z)(r,V));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(l.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(I,e):a.createElement("code",e)},a:function(e){return a.createElement(s.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(I,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(F,(0,r.Z)({},e,{summary:n}),o)},h1:(0,R.Z)("h1"),h2:(0,R.Z)("h2"),h3:(0,R.Z)("h3"),h4:(0,R.Z)("h4"),h5:(0,R.Z)("h5"),h6:(0,R.Z)("h6")}},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);