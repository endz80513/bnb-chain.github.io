"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1938],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||h[f]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},56638:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={sidebar_label:"BSC Cross-chain Communication FAQs",hide_table_of_contents:!1,sidebar_position:2},c="Cross-chain Communication",l={unversionedId:"cross",id:"cross",isDocsHomePage:!1,title:"Cross-chain Communication",description:"How much is cross-chain transfer fee?",source:"@site/docs/cross.md",sourceDirName:".",slug:"/cross",permalink:"/docs/cross",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/cross.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BSC Cross-chain Communication FAQs",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"BSC Staking Parameters FAQs",permalink:"/docs/parameters"},next:{title:"Binance Extension Wallet FAQs",permalink:"/docs/faq"}},u=[{value:"How much is cross-chain transfer fee?",id:"how-much-is-cross-chain-transfer-fee",children:[],level:3},{value:"What&#39;s is a BSC relayer?",id:"whats-is-a-bsc-relayer",children:[],level:3},{value:"What&#39;s is an Oracle relayer?",id:"whats-is-an-oracle-relayer",children:[],level:3},{value:"What&#39;s an oracle?",id:"whats-an-oracle",children:[],level:3},{value:"Which wallet support cross-chain transfer?",id:"which-wallet-support-cross-chain-transfer",children:[],level:3},{value:"How to send cross-chain transfer?",id:"how-to-send-cross-chain-transfer",children:[],level:3}],h={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cross-chain-communication"},"Cross-chain Communication"),(0,o.kt)("h3",{id:"how-much-is-cross-chain-transfer-fee"},"How much is cross-chain transfer fee?"),(0,o.kt)("p",null,"The total cost of transfer from BC to BSC is composed of 2 parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fee for executing ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge transfer-out")," transaction is 0.004BNB, pay validators on Beacon Chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fee for BSC-relayers 0.004BNB. it will cover the fees of calling TokenHub Contract on BSC."))),(0,o.kt)("p",null,"The total cost of transfer from BSC to BC is composed of 2 parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fee for Oracle-relayers 0.004BNB, pay for BSC relayers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Call TokenHub Contract: You need to pay BNB for calling smart-contract on BSC, this transaction is metered by gas, which is a global parameter. At the moment, you need to pay about 0.0005BNB ~ 0.0015BNB."))),(0,o.kt)("h3",{id:"whats-is-a-bsc-relayer"},"What's is a BSC relayer?"),(0,o.kt)("p",null,"BSC relayer monitors cross chain packages on Beacon Chain, builds and broadcasts transactions to BSC to deliver these packages, which is the key of cross chain communication from Beacon Chain to BSC."),(0,o.kt)("h3",{id:"whats-is-an-oracle-relayer"},"What's is an Oracle relayer?"),(0,o.kt)("p",null,"Oracle Relayer watches the state change of Binance Smart Chain. Once it catches Cross-Chain Communication Events, it will submit to vote for the requests. After Oracle Relayers from \u2154 of the voting power of BC validators vote for the changes, the cross-chain actions will be performed. Only validators of Beacon Chain are eligible to run Oracle relayers."),(0,o.kt)("h3",{id:"whats-an-oracle"},"What's an oracle?"),(0,o.kt)("p",null,"In blockchain network, an oracle refers to the element that connects smart contracts with data from the outside world. In the network of Binance Smart Chain, the execution of the transanction wil emit Events, and such events can be packaged and relayed onto BC. In this way, BC will get updates about changes of BSC."),(0,o.kt)("h3",{id:"which-wallet-support-cross-chain-transfer"},"Which wallet support cross-chain transfer?"),(0,o.kt)("p",null,"You need to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/wallet/myetherwallet"},"MyEtherWallet"),"to call contracts and use Beacon Chain commandline client: ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbcli"),"/ ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli")," for complementary commands"),(0,o.kt)("p",null,"Please refer to this ",(0,o.kt)("a",{parentName:"p",href:"/docs/cross-chain-transfer"},"guide")," for details"),(0,o.kt)("h3",{id:"how-to-send-cross-chain-transfer"},"How to send cross-chain transfer?"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/wallet/binance"},"BInance Extension Wallet")," or"),(0,o.kt)("p",null,"use ",(0,o.kt)("a",{parentName:"p",href:"https://community.trustwallet.com/t/how-to-send-and-receive-bnb-on-smart-chain/67430"},"Trust wallet")))}p.isMDXComponent=!0}}]);