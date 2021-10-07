(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return r?i.a.createElement(m,c(c({ref:t},p),{},{components:r})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(7),a=(r(0),r(101)),o={id:"getting-started",title:"Starting a Server Project"},c={unversionedId:"server/getting-started",id:"server/getting-started",isDocsHomePage:!1,title:"Starting a Server Project",description:"Purpose: To quickly get going with a Node.js project that deals with TypeScript, Rollup, Prettier, ESLint, Jest, etc. use tsdx.",source:"@site/docs/server/getting-started.md",slug:"/server/getting-started",permalink:"/dev/docs/server/getting-started",editUrl:"https://github.com/vampiro/dev/edit/master/website/docs/server/getting-started.md",version:"current",sidebar:"someSidebar",previous:{title:"Electron w/ CRA",permalink:"/dev/docs/react/electron"},next:{title:"Koa",permalink:"/dev/docs/server/koa"}},l=[],p={toc:l};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Purpose: To quickly get going with a Node.js project that deals with TypeScript, Rollup, Prettier, ESLint, Jest, etc. use ",Object(a.b)("a",{parentName:"p",href:"https://tsdx.io/"},"tsdx"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npx tsdx create YOUR_SERVER_PROJECT\n")),Object(a.b)("p",null,'Select "basic". This will create a project with some of the necessary tooling.'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Edit license as needed."),Object(a.b)("li",{parentName:"ul"},"If you don't use ",Object(a.b)("inlineCode",{parentName:"li"},"yarn"),", delete ",Object(a.b)("inlineCode",{parentName:"li"},"yarn.lock")," and run ",Object(a.b)("inlineCode",{parentName:"li"},"npm install")," to generate the ",Object(a.b)("inlineCode",{parentName:"li"},"package-lock.json"),"."),Object(a.b)("li",{parentName:"ul"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"git init")," to initialize the git repo."),Object(a.b)("li",{parentName:"ul"},"Update the ",Object(a.b)("inlineCode",{parentName:"li"},"Prettier")," settings in ",Object(a.b)("inlineCode",{parentName:"li"},"package.json")," to your liking.")),Object(a.b)("p",null,"At this point, you should commit the files and then pick a server library to work with."))}s.isMDXComponent=!0}}]);