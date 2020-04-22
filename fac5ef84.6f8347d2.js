(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),o=(n(0),n(165)),c=(n(176),{id:"api-documentation",title:"Cloud SDK API Documentation",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"API Documentation (JavaDoc)",description:"Check our generated API Documentation to discover SDK capabilities via code",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null}),i={id:"java/api-documentation",title:"Cloud SDK API Documentation",description:"Check our generated API Documentation to discover SDK capabilities via code",source:"@site/docs/java/api-documentation.md",permalink:"/cloud-sdk/docs/java/api-documentation",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1587312889,sidebar_label:"API Documentation (JavaDoc)",sidebar:"someSidebar",previous:{title:"Deploy to Cloud Foundry",permalink:"/cloud-sdk/docs/java/how-to/cf-deploy"},next:{title:"Introduction - SDK for JavaScript",permalink:"/cloud-sdk/docs/js/introduction"}},u=[{value:"JavaDoc - Cloud SDK",id:"javadoc---cloud-sdk",children:[{value:"API Version 3",id:"api-version-3",children:[]},{value:"API Version 2",id:"api-version-2",children:[]}]}],s={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"javadoc---cloud-sdk"},"JavaDoc - Cloud SDK"),Object(o.b)("h3",{id:"api-version-3"},"API Version 3"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.sap.com/doc/a3be0ed889004b9485c980357ab6ad52/1.0/en-US/index.html"}),"3.17.1")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.sap.com/doc/059aaed870b44d8e8e24938c505b8120/1.0/en-US/index.html"}),"3.16.1"))),Object(o.b)("h3",{id:"api-version-2"},"API Version 2"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Cloud ",Object(o.b)("strong",{parentName:"p"},"SDK for Java V2")," was moved to maintenance. No major updates and bug-fixing is planned.\nTo continue using the latest feature, please, migrate to ",Object(o.b)("strong",{parentName:"p"},"SDK for Java V3")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://help.sap.com/doc/3e8c7a614a8b49a8806bd0392e7b78d6/1.0/en-US/index.html"}),"2.28.0"))))}d.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=d(n),b=a,m=l["".concat(c,".").concat(b)]||l[b]||p[b]||o;return n?r.a.createElement(m,i({ref:t},s,{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},167:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),c=n(19),i=n(170),u=n(13),s=n.n(u);t.a=function(e){const{to:t,href:n}=e,u=t||n,d=Object(i.a)(u),l=Object(r.useRef)(!1),p=s.a.canUseIntersectionObserver;let b;return Object(r.useEffect)(()=>(!p&&d&&window.docusaurus.prefetch(u),()=>{p&&b&&b.disconnect()}),[u,p,d]),u&&d?o.a.createElement(c.b,Object(a.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(u),l.current=!0)},innerRef:e=>{var t,n;p&&e&&d&&(t=e,n=()=>{window.docusaurus.prefetch(u)},b=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())})}),b.observe(t))},to:u})):o.a.createElement("a",Object(a.a)({},e,{href:u}))}},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(166);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},170:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},176:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(167),n(168)),c=["1.19.0","1.18.1","1.18.0"];t.a=function(){return r.a.createElement("ul",null,c.map(e=>r.a.createElement("li",{key:""+e},r.a.createElement("a",{href:Object(o.a)(`api/${e}/`)},""+e))))}}}]);