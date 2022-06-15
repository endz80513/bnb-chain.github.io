"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6711],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(a),m=r,u=h["".concat(o,".").concat(m)]||h[m]||d[m]||i;return a?n.createElement(u,p(p({ref:t},c),{},{components:a})):n.createElement(u,p({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var l=2;l<i;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},27688:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),p=["components"],s={sidebar_label:"RPC"},o="JSON-RPC Endpoint",l={unversionedId:"rpc",id:"rpc",isDocsHomePage:!1,title:"JSON-RPC Endpoint",description:"Available Resources",source:"@site/docs/rpc.md",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/rpc.md",tags:[],version:"current",frontMatter:{sidebar_label:"RPC"},sidebar:"bscSideBar",previous:{title:"Upgrading Geth",permalink:"/docs/validator/upgrade-fullnode"},next:{title:"Using Remix IDE",permalink:"/docs/remix"}},c=[{value:"Available Resources",id:"available-resources",children:[{value:"Mainnet(ChainID 0x38, 56 in decimal)",id:"mainnetchainid-0x38-56-in-decimal",children:[],level:3},{value:"Testnet(ChainID 0x61, 97 in decimal)",id:"testnetchainid-0x61-97-in-decimal",children:[],level:3},{value:"Rate limit",id:"rate-limit",children:[],level:3},{value:"3rd Party Provider",id:"3rd-party-provider",children:[],level:3}],level:2},{value:"Start HTTP JSON-RPC",id:"start-http-json-rpc",children:[],level:2},{value:"JSON-RPC methods",id:"json-rpc-methods",children:[],level:2}],d={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"json-rpc-endpoint"},"JSON-RPC Endpoint"),(0,i.kt)("h2",{id:"available-resources"},"Available Resources"),(0,i.kt)("h3",{id:"mainnetchainid-0x38-56-in-decimal"},"Mainnet(ChainID 0x38, 56 in decimal)"),(0,i.kt)("p",null,"BSC RPC Endpoints:"),(0,i.kt)("p",null,"!!! NOTE\nYou can make ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_getLogs")," requests with up to a 5K block range.\nIf you need to pull logs frequently, we recommend using WebSockets to push new logs to you when they are available."),(0,i.kt)("p",null,"Recommend"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bsc-dataseed.binance.org/"},"https://bsc-dataseed.binance.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bsc-dataseed1.defibit.io/"},"https://bsc-dataseed1.defibit.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bsc-dataseed1.ninicoin.io/"},"https://bsc-dataseed1.ninicoin.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://bsc.nodereal.io"},"https://bsc.nodereal.io"))),(0,i.kt)("p",null,"BC RPC Endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed1.binance.org/"},"https://dataseed1.binance.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed2.binance.org/"},"https://dataseed2.binance.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed3.binance.org/"},"https://dataseed3.binance.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed4.binance.org/"},"https://dataseed4.binance.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed1.defibit.io/"},"https://dataseed1.defibit.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed2.defibit.io/"},"https://dataseed2.defibit.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed3.defibit.io/"},"https://dataseed3.defibit.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed4.defibit.io/"},"https://dataseed4.defibit.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed1.ninicoin.io/"},"https://dataseed1.ninicoin.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed2.ninicoin.io/"},"https://dataseed2.ninicoin.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed3.ninicoin.io/"},"https://dataseed3.ninicoin.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dataseed4.ninicoin.io/"},"https://dataseed4.ninicoin.io/"))),(0,i.kt)("h3",{id:"testnetchainid-0x61-97-in-decimal"},"Testnet(ChainID 0x61, 97 in decimal)"),(0,i.kt)("p",null,"BSC RPC Endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-1-s1.binance.org:8545/"},"https://data-seed-prebsc-1-s1.binance.org:8545/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-2-s1.binance.org:8545/"},"https://data-seed-prebsc-2-s1.binance.org:8545/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-1-s2.binance.org:8545/"},"https://data-seed-prebsc-1-s2.binance.org:8545/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-2-s2.binance.org:8545/"},"https://data-seed-prebsc-2-s2.binance.org:8545/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-1-s3.binance.org:8545/"},"https://data-seed-prebsc-1-s3.binance.org:8545/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-2-s3.binance.org:8545/"},"https://data-seed-prebsc-2-s3.binance.org:8545/"))),(0,i.kt)("p",null,"BC RPC Endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://data-seed-pre-0-s1.binance.org:80"},"http://data-seed-pre-0-s1.binance.org:80")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://data-seed-pre-1-s1.binance.org:80"},"http://data-seed-pre-1-s1.binance.org:80")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://data-seed-pre-2-s1.binance.org:80"},"http://data-seed-pre-2-s1.binance.org:80")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://data-seed-pre-0-s3.binance.org:80"},"http://data-seed-pre-0-s3.binance.org:80")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://data-seed-pre-1-s3.binance.org:80"},"http://data-seed-pre-1-s3.binance.org:80"))),(0,i.kt)("h3",{id:"rate-limit"},"Rate limit"),(0,i.kt)("p",null,"The rate limit of BSC endpoint on Testnet and Mainnet is 8K/5min."),(0,i.kt)("h3",{id:"3rd-party-provider"},"3rd Party Provider"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://app.ankr.com/api"},"ANKR"),": ",(0,i.kt)("a",{parentName:"p",href:"https://app.ankr.com/api"},"https://app.ankr.com/api"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://chainstack.com/"},"Chainstack"),": ",(0,i.kt)("a",{parentName:"p",href:"https://chainstack.com/build-better-with-binance-smart-chain/"},"https://chainstack.com/build-better-with-binance-smart-chain/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://getblock.io/"},"GetBlock.io"),": ",(0,i.kt)("a",{parentName:"p",href:"https://getblock.io/nodes/bsc"},"https://getblock.io/nodes/bsc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://quicknode.com"},"QuickNode")," : ",(0,i.kt)("a",{parentName:"p",href:"https://quicknode.com"},"https://quicknode.com"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://nodereal.io/"},"NodeReal"),": ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nodereal.io/nodereal/meganode/introduction"},"https://docs.nodereal.io/nodereal/meganode/introduction"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.blockvision.org/blockvision/"},"BlockVision"),": ",(0,i.kt)("a",{parentName:"p",href:"https://docs.blockvision.org/blockvision/chain-apis/bnb-chain-api"},"https://docs.blockvision.org/blockvision/chain-apis/bnb-chain-api")))),(0,i.kt)("h2",{id:"start-http-json-rpc"},"Start HTTP JSON-RPC"),(0,i.kt)("p",null,"You can start the HTTP JSON-RPC with the --rpc flag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\ngeth attach https://bsc-dataseed1.binance.org\n\n## testnet\ngeth attach https://data-seed-prebsc-1-s1.binance.org:8545/\n")),(0,i.kt)("h2",{id:"json-rpc-methods"},"JSON-RPC methods"),(0,i.kt)("p",null,"Please refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/wiki/wiki/JSON-RPC"},"wiki page")," or use Postman: ",(0,i.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest"},"https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest")))}h.isMDXComponent=!0}}]);