(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),o=(n(0),n(116)),i={id:"node",title:"Setup a full node",sidebar_label:"Setup a full node"},c={id:"node",title:"Setup a full node",description:"## Startup",source:"@site/docs/node.md",permalink:"/node",editUrl:"https://github.com/radicle-dev/radicle-run/edit/master/website/docs/node.md",sidebar_label:"Setup a full node",sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/getting-started"},next:{title:"Submit transactions",permalink:"/submit-transactions"}},l=[{value:"Startup",id:"startup",children:[{value:"Connecting to the network",id:"connecting-to-the-network",children:[]}]},{value:"Mining Blocks",id:"mining-blocks",children:[]},{value:"Node key",id:"node-key",children:[]},{value:"Monitoring",id:"monitoring",children:[{value:"Logging",id:"logging",children:[]},{value:"Prometheus metrics",id:"prometheus-metrics",children:[]}]},{value:"The RPC interface",id:"the-rpc-interface",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"startup"},"Startup"),Object(o.b)("p",null,"To start the node, run its executable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-node\n")),Object(o.b)("p",null,"The node must store data on your hard drive.\nYou can override the default location with a parameter:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-node --data-path <PATH>\n")),Object(o.b)("h3",{id:"connecting-to-the-network"},"Connecting to the network"),Object(o.b)("p",null,"The node connects by default to the testnet network.\nIt has a list of known nodes, which can be called to join the network for the first time.\nYou can use your own list of bootstrap nodes with a startup parameter:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-node --bootnodes <ADDR>\n")),Object(o.b)("p",null,"The addresses must be expressed as libp2p multiaddresses with a peer ID, e.g.\n",Object(o.b)("inlineCode",{parentName:"p"},"/ip4/35.233.120.254/tcp/30333/p2p/QmRpheLN4JWdAnY7HGJfWFNbfkQCb6tFf4vvA6hgjMZKrR"),".\nFor more information visit ",Object(o.b)("a",{href:"https://docs.libp2p.io/concepts/addressing/",target:"_blank",rel:"noopener noreferrer"},"libp2p documentation"),"."),Object(o.b)("h2",{id:"mining-blocks"},"Mining Blocks"),Object(o.b)("p",null,"You can support the network by mining blocks. Miners receive rewards from\nsuccessfully mined blocks. To collect your rewards, you need an account."),Object(o.b)("p",null,"Generate an account for mining:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli account generate mining\n")),Object(o.b)("p",null,"This will print the SS58 address for your mining account.\nYou can now run a mining node:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-node --mine <address>\n")),Object(o.b)("p",null,"If your node successfully mined a block and imported it will log ",Object(o.b)("inlineCode",{parentName:"p"},"Imported own\nblock"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"15:50:13.041 INFO radicle_registry_node::service  Imported own block #1322 (0xefd1\u20264445)\n")),Object(o.b)("p",null,"Depending on how lucky you are mining a block might take minutes or hours."),Object(o.b)("p",null,"When your node has mined a block, your mining account receives some block\nrewards. Check your balance with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-cli account balance <address>\n")),Object(o.b)("p",null,"At the moment, only single-threaded mining is supported. Follow ",Object(o.b)("a",{href:"https://github.com/radicle-dev/radicle-registry/issues/298",target:"_blank",rel:"noopener noreferrer"},"this issue")," for updates."),Object(o.b)("h2",{id:"node-key"},"Node key"),Object(o.b)("p",null,"Every node has a key pair, which is used to identify it on the P2P network.\nIt's useful for building ties with other nodes.\nBy default the key pair is generated on every startup, but you can set it manually to store and\nreuse later.\nTo do that, you must pass the private key file on the node startup:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-node --node-key-file <KEY_FILE>\n")),Object(o.b)("p",null,"The file must contain exactly 32 bytes of raw data.\nIt will be used without any transformations as an Ed25519 private key.\nIf the file doesn't exist, it will be created and filled with a new random key."),Object(o.b)("h2",{id:"monitoring"},"Monitoring"),Object(o.b)("p",null,"The node has multiple means of monitoring its state."),Object(o.b)("h3",{id:"logging"},"Logging"),Object(o.b)("p",null,"The most basic monitoring is done with logging to the output.\nIt's enabled by default, but you can change the verbosity on the node startup with an environment\nvariable ",Object(o.b)("inlineCode",{parentName:"p"},"RUST_LOG"),".\nIt can be set to one of these values, from least to most verbose:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"OFF\nERROR\nWARN\nINFO\nDEBUG\nTRACE\n")),Object(o.b)("p",null,"Alternatively it can be set to a number from 0 to 5.\nThe default is ",Object(o.b)("inlineCode",{parentName:"p"},"INFO")," or 3 with some exceptions for logs useful only for developers."),Object(o.b)("p",null,"An example of limiting logging to ",Object(o.b)("inlineCode",{parentName:"p"},"ERROR"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"RUST_LOG=ERROR radicle-registry-node\n")),Object(o.b)("h3",{id:"prometheus-metrics"},"Prometheus metrics"),Object(o.b)("p",null,"The node collects multiple metrics measuring its health, performance and network activity.\nThey can be collected with Prometheus and then analyzed with any compatible tool.\nThe node can expose the Prometheus interface to the external network on port 9615.\nThis may be a security concern, because anybody will be able to connect and start gathering data.\nIn order to expose the Prometheus interface you need to pass this flag on the node startup:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-node --prometheus-external\n")),Object(o.b)("h2",{id:"the-rpc-interface"},"The RPC interface"),Object(o.b)("p",null,"The node always exposes the RPC interface for communication.\nBy default it only accepts requests from the tools running on your local machine like\n",Object(o.b)("inlineCode",{parentName:"p"},"radicle-registry-cli"),".\nYou can expose this interface to the external network.\nThis is potentially risky, because your node can start getting an arbitrary amount of requests\nfrom unknown sources.\nYou can enable that by passing a flag on the node startup:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"radicle-registry-node --unsafe-rpc-external\n")))}b.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);