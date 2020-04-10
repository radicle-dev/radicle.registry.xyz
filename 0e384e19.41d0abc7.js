(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(h,c({ref:t},l,{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),a=(n(0),n(122)),i={id:"intro",title:"Introduction",sidebar_label:"Introduction"},c={id:"intro",title:"Introduction",description:"Radicle Registry is an account-based blockchain protocol that acts as a canonical global registry for code repositories. It provides users with the trusted, auditable and shared view of the network. It introduces a complementary and foremost secure layer to the [Radicle P2P](https://radicle.xyz/) network.",source:"@site/docs/intro.md",permalink:"/docs/intro",editUrl:"https://github.com/radicle-dev/radicle-run/edit/master/website/docs/intro.md",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Why Radicle?",permalink:"/docs/why"}},s=[{value:"Source code",id:"source-code",children:[]},{value:"Tokens",id:"tokens",children:[]},{value:"Get in touch",id:"get-in-touch",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Radicle Registry is an account-based blockchain protocol that acts as a canonical global registry for code repositories. It provides users with the trusted, auditable and shared view of the network. It introduces a complementary and foremost secure layer to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://radicle.xyz/"}),"Radicle P2P")," network."),Object(a.b)("p",null,"The full node daemon, ",Object(a.b)("inlineCode",{parentName:"p"},"TBD")," is written in Rust and based on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://substrate.dev/"}),"substrate"),". By running a full node, you can participate in securing the network and serving canonical registry keys for Radicle."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"                    ____________________\n                   /                    \\\n                   | Radicle Registry   |\n                   | is an alpha        |\n                   | software garden.   |\n                   | Please proceed     |\n                   | with caution.      |\n                   \\____________________/\n                            !  !\n                            !  !\n                            !  !\n                            !  !\n                _(_)_       !  !                   _(_)_\n    @@@@       (_)@(_)     (____)      @@@@       (_)@(_)\n   @@()@@ wWWWw  (_)\\      (____)     @@()@@ wWWWw  (_)\\\n    @@@@  (___)     \\|/    (____)      @@@@  (___)     \\|/\n     /      Y       \\|     (____)       /      Y       \\|\n  \\ |     \\ |/       | /    !  !     \\ |     \\ |/       | /\n  \\\\|//   \\\\|///  \\\\\\|//    !  !     \\\\|//   \\\\|///  \\\\\\|//\n^^^^^^^^^^^^^^^^^^^^^^^^^   \\__/   ^^^^^^^^^^^^^^^^^^^^^^^^^^\n")),Object(a.b)("h2",{id:"source-code"},"Source code"),Object(a.b)("p",null,"The latest source code is available on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/radicle-dev"}),"Github")," under the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://opensource.org/licenses/GPL-3.0"}),"GPL v3.0")," license."),Object(a.b)("h2",{id:"tokens"},"Tokens"),Object(a.b)("p",null,"The integrity of our canonical registry is secured through an incentivized ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Proof_of_work"}),"proof-of-work (PoW)")," based consensus scheme. The Registry uses a utility token to support its native functions such as project registration, checkpointing etc. (",Object(a.b)("inlineCode",{parentName:"p"},"TBD")," better explanation)."),Object(a.b)("p",null,"We strive to achieve network ownership by the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Foss"}),"FOSS")," community from ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.bitcoin.it/wiki/Genesis_block"}),"genesis"),"."),Object(a.b)("h2",{id:"get-in-touch"},"Get in touch"),Object(a.b)("p",null,"We would love to hear from you!\nThere are several ways to get in touch with us:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Participate or follow the discussions in our ",Object(a.b)("a",{href:"https://radicle.community/",target:"_blank"},"Community forum")),Object(a.b)("li",{parentName:"ul"},"Follow us on Twitter ",Object(a.b)("a",{href:"https://twitter.com/radicle_xyz",target:"_blank"},"@radicle_xyz")),Object(a.b)("li",{parentName:"ul"},"Join our ",Object(a.b)("a",{href:"https://webchat.freenode.net/#radicle",target:"_blank"},"Comunity IRC channel"))))}u.isMDXComponent=!0}}]);