(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),i=(n(0),n(122)),o={id:"quickstart",title:"Getting started",sidebar_label:"Getting started"},l={id:"quickstart",title:"Getting started",description:"## Install",source:"@site/docs/quickstart.md",permalink:"/docs/quickstart",editUrl:"https://github.com/radicle-dev/radicle-run/edit/master/website/docs/quickstart.md",sidebar_label:"Getting started",sidebar:"someSidebar",previous:{title:"The Radicle Network",permalink:"/docs/network"},next:{title:"System requirements",permalink:"/docs/requirements"}},c=[{value:"Install",id:"install",children:[]},{value:"Run Node",id:"run-node",children:[{value:"Logging",id:"logging",children:[]}]}],u={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"We build binaries of the node and docker images for every pushed commit. Node\nbinaries are available for the ",Object(i.b)("inlineCode",{parentName:"p"},"x86_64-unknown-linux-gnu")," target triple."),Object(i.b)("p",null,"You can get the latest master build ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://bintray.com/oscoin/radicle-registry-files/radicle-registry/_latestVersion"}),"here")),Object(i.b)("p",null,"You can directly download node binaries for every build from"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"https://dl.bintray.com/oscoin/radicle-registry-files/by-commit/$COMMIT_SHA/x86_64-linux-gnu/radicle-registry-node\n")),Object(i.b)("p",null,"You can pull a docker image of the node with"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker pull gcr.io/opensourcecoin/radicle-registry/node:<commit-sha>\n")),Object(i.b)("p",null,"In the image the node binary is located at ",Object(i.b)("inlineCode",{parentName:"p"},"/usr/local/bin/radicle-registry-node")),Object(i.b)("h2",{id:"run-node"},"Run Node"),Object(i.b)("p",null,"The node can be run in development mode or with a specified chain. Currently,\nonly the ",Object(i.b)("inlineCode",{parentName:"p"},"devnet")," chain is available."),Object(i.b)("p",null,"For more information use the ",Object(i.b)("inlineCode",{parentName:"p"},"--help")," flag."),Object(i.b)("h3",{id:"logging"},"Logging"),Object(i.b)("p",null,"The node prints logs to stdout in the following format"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"<local time> <level> <target> <msg>\n")),Object(i.b)("p",null,"You can adjust the global log level and the log level for specific targets with\nthe ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.rs/env_logger/0.7.1/env_logger/#enabling-logging"}),Object(i.b)("inlineCode",{parentName:"a"},"RUST_LOG")," environment variable"),"."))}b.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=b(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||s[p]||i;return n?a.a.createElement(m,l({ref:t},u,{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);