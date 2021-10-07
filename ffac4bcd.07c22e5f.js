(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,d=p["".concat(i,".").concat(h)]||p[h]||b[h]||o;return n?r.a.createElement(d,l(l({ref:t},u),{},{components:n})):r.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(101)),i={id:"auth0",title:"Auth0"},l={unversionedId:"auth/auth0",id:"auth/auth0",isDocsHomePage:!1,title:"Auth0",description:'This rough "guide" assumes you\'ve already gone through setting up an account with Auth0.',source:"@site/docs/auth/auth0.md",slug:"/auth/auth0",permalink:"/dev/docs/auth/auth0",editUrl:"https://github.com/vampiro/dev/edit/master/website/docs/auth/auth0.md",version:"current",sidebar:"someSidebar",previous:{title:"gql",permalink:"/dev/docs/database/gql"}},c=[{value:"Server Side",id:"server-side",children:[{value:"JWT Authentication (with Koa)",id:"jwt-authentication-with-koa",children:[]}]}],u={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'This rough "guide" assumes you\'ve already gone through setting up an account with Auth0.'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Create a Tenant (multiple apps can live under one "Tenant"): Top left -> Create Tenant'),Object(o.b)("li",{parentName:"ul"},"Create an App: Left-hand menu -> Applications -> + Create Application -> SPA (if that's what you're making)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Within the Application settings, you'll have to set:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Allowed Callback URLs: Where the user is allowed to be sent after authenticating, ex: ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:3000")),Object(o.b)("li",{parentName:"ul"},"Allowed logout URLs: Where the user is allowed to be sent after logging out, ex: ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:3000")),Object(o.b)("li",{parentName:"ul"},"Allowed Web Origins: Where you're going to be contacting Auth0 from. ex: ",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:3000")))))),Object(o.b)("li",{parentName:"ul"},"For a SPA that will end up calling backend services (an API), you'll need to define an API in Auth0. Applications -> APIs -> + Create API",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'There are instructions under "Quick Start" for how to deal with verifying the JWT on the server side. These instructions are for an Express app, but it works for koa as well (just use koa-jwt instead of express-jwt).'))),Object(o.b)("li",{parentName:"ul"},"Take down the following information:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"From Auth0 Application: Client ID"),Object(o.b)("li",{parentName:"ul"},"From Auth0 Application: Domain"),Object(o.b)("li",{parentName:"ul"},"From Auth0 API: Audience (Identifier)"),Object(o.b)("li",{parentName:"ul"},"Location your API will reside. For development, this might just be http://localhost/api"))),Object(o.b)("li",{parentName:"ul"},"In your React project, in ",Object(o.b)("inlineCode",{parentName:"li"},".env"),", put:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# obviously fill in your own values\nREACT_APP_API_ORIGIN=http://location-of-api.com/api\nREACT_APP_AUTH0_AUDIENCE=YOUR_AUDIENCE\nREACT_APP_AUTH0_CLIENT_ID=YOUR_CLIENT_ID\nREACT_APP_AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN\n")),Object(o.b)("p",null,"These will be set at dev/build time so ensure you fill in correct values at the various points in development/deployment."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"At this point in your React app, you can follow ",Object(o.b)("a",{parentName:"li",href:"https://auth0.com/docs/quickstart/spa/react/01-login"},"these Auth0/React instructions"),". Or, if you're Robbie, you can look at one of your React projects where you've implemented authentication with Auth0/React and copy the components out of there.")),Object(o.b)("h2",{id:"server-side"},"Server Side"),Object(o.b)("h3",{id:"jwt-authentication-with-koa"},"JWT Authentication (with Koa)"),Object(o.b)("p",null,"Have the following environment variables available."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"AUTH0_AUDIENCE=AUTH0_API_AUDIENCE\nAUTH0_CLIENT_ID=AUTH0_APP_CLIENT_ID\nAUTH0_DOMAIN=AUTH0_APP_DOMAIN\n")),Object(o.b)("p",null,"Install the following packages. Note: I am using Koa, Express has its own version of ",Object(o.b)("inlineCode",{parentName:"p"},"koa-jwt"),"."),Object(o.b)("p",null,"Create ",Object(o.b)("inlineCode",{parentName:"p"},"src/auth.ts"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'import jwt from "koa-jwt";\nimport * as jwksRsa from "jwks-rsa";\n\n/**\n * Can be used as middleware in Koa to validate the user\'s JWT against Auth0.\n */\nexport const validateJwt = jwt({\n  secret: jwksRsa.koaJwtSecret({\n    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,\n  }),\n\n  audience: process.env.AUTH0_AUDIENCE,\n  issuer: `https://${process.env.AUTH0_DOMAIN}/`,\n  algorithms: ["RS256"],\n});\n')),Object(o.b)("p",null,"In your ",Object(o.b)("inlineCode",{parentName:"p"},"app.ts")," file, you can now use the ",Object(o.b)("inlineCode",{parentName:"p"},"validateJwt")," middleware in front of the endpoints you want kept behind authentication."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'router.use(validateJwt);\n\nrouter.get("/secret", (ctx: Koa.Context) => {\n  ctx.body = "Super secret!!";\n});\n')))}s.isMDXComponent=!0}}]);