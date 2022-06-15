"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9868],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95755:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},c="Architecture",l={unversionedId:"beaconchain/learn/architecture",id:"beaconchain/learn/architecture",isDocsHomePage:!1,title:"Architecture",description:"Consensus Details",source:"@site/docs/beaconchain/learn/architecture.md",sourceDirName:"beaconchain/learn",slug:"/beaconchain/learn/architecture",permalink:"/docs/beaconchain/learn/architecture",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/learn/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Tutorials",permalink:"/docs/beaconchain/bc-tutorials"},next:{title:"Accounts",permalink:"/docs/beaconchain/learn/accounts"}},p=[{value:"Consensus Details",id:"consensus-details",children:[],level:2},{value:"Block Size",id:"block-size",children:[],level:2},{value:"Blockchain State",id:"blockchain-state",children:[],level:2},{value:"Cryptographic Design",id:"cryptographic-design",children:[{value:"Account and Address",id:"account-and-address",children:[{value:"Keys",id:"keys",children:[],level:4},{value:"Address",id:"address",children:[],level:4},{value:"Signature",id:"signature",children:[],level:4}],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("h2",{id:"consensus-details"},"Consensus Details"),(0,i.kt)("p",null,'Beacon Chain  is a peer-to-peer distributed system, connecting together multiple clients that reach consensus on their views of the "state of the world". Beacon Chain  uses ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint"},"Tendermint")," BFT consensus and has a dedicated ",(0,i.kt)("inlineCode",{parentName:"p"},"application layer")," that runs upon it. A simplified overview of the application's architecture might look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+------------+-----------+\n| RPC API    | Web API   |\n+------------------------+---------+\n| Asset Management | Match Engine  |\n+----------------------------------+\n| Account Management | Governance  |---------\x3e crypto and blockchain governance\n+----------------------------------+\n| State Caching and Persisence     +-+\n+----------------------------------+ |\n| Consensus Protocol               | |\n+----------------------------------+ |-----\x3e revised Tendermint\n| P2P Protocol                     | |\n+----------------------------------+ |\n| Networking    |  Database        +-+\n+----------------------------------+\n\n")),(0,i.kt)("p",null,"For more information, please have a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/blob/master/docs/spec/consensus/consensus.md"},"Tendermint spec"),"."),(0,i.kt)("h2",{id:"block-size"},"Block Size"),(0,i.kt)("p",null,"Beacon Chain  uses a similar block structure as Tendermint proposes, with a size limit of 1 megabyte."),(0,i.kt)("p",null,"It is expected a block will be produced on a-few-of-seconds level among validators, and can include\nfrom 0 up to several thousands of transactions."),(0,i.kt)("h2",{id:"blockchain-state"},"Blockchain State"),(0,i.kt)("p",null,"Blockchain state stores the below information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"account and balances"),(0,i.kt)("li",{parentName:"ul"},"fees"),(0,i.kt)("li",{parentName:"ul"},"token information"),(0,i.kt)("li",{parentName:"ul"},"trading pairs"),(0,i.kt)("li",{parentName:"ul"},"tick size and lot size"),(0,i.kt)("li",{parentName:"ul"},"governance information")),(0,i.kt)("p",null,"please note the transactions are not stored as chain state, because they are stored in blocks, while\ntrades are not stored as state either, because they can be reproduced via balances and transactions."),(0,i.kt)("h2",{id:"cryptographic-design"},"Cryptographic Design"),(0,i.kt)("h3",{id:"account-and-address"},"Account and Address"),(0,i.kt)("p",null,"For normal users, all the keys and addresses can be generated via Binance ",(0,i.kt)("a",{parentName:"p",href:"https://www.binance.org/en/create"},"Web Wallet"),"."),(0,i.kt)("p",null,"This default wallet would use a similar way to generate keys as Bitcoin, i.e. use 256 bits entropy to generate a 24-word mnemonic based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"},"BIP39"),", and then use the mnemonic and an empty passphrase to generate a seed; finally use the seed to generate a master key, and derive the private key using BIP32/BIP44 with HD prefix as ",(0,i.kt)("inlineCode",{parentName:"p"},"\"44'/714'/\""),", which is reserved at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"SLIP 44"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"714 comes from Binance's birthday, July 14th. :)")),(0,i.kt)("h4",{id:"keys"},"Keys"),(0,i.kt)("p",null,"Beacon Chain  uses the same elliptic curve cryptography as the current ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/btcsuite/btcd/tree/master/btcec"},"Bitcoin implementation"),", i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1"),". Its private key is 32 bytes while public key is 33 bytes."),(0,i.kt)("h4",{id:"address"},"Address"),(0,i.kt)("p",null,"Addresses on Beacon Chain  are 20 bytes and may be expressed as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Address = RIPEMD160(SHA256(compressed public key))\n")),(0,i.kt)("p",null,"Typically, an address is encoded in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki"},"bech32")," format which includes a checksum and human-readable prefix (HRP). However, it doesn't use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SegWit")," address format (because we do not have ",(0,i.kt)("inlineCode",{parentName:"p"},"SegWit")," function anyway, so no ",(0,i.kt)("inlineCode",{parentName:"p"},"witness program version")," etc.)."),(0,i.kt)("p",null,"A Beacon Chain  address is therefore more similar to a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/cashaddr.md"},"Bitcoin Cash address"),", which does not include a SegWit program script."),(0,i.kt)("p",null,"Address format pseudo-code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Address_Bech32 = HRP + '1' + bech32.encode(convert8BitsTo5Bits(RIPEMD160(SHA256(compressed public key))))\n")),(0,i.kt)("p",null,"For Beacon Chain  address, the prefix is ",(0,i.kt)("inlineCode",{parentName:"p"},"bnb")," for production network, and ",(0,i.kt)("inlineCode",{parentName:"p"},"tbnb")," for testnet."),(0,i.kt)("h4",{id:"signature"},"Signature"),(0,i.kt)("p",null,"Beacon Chain  uses an ECDSA signature on curve secp256k1 against a ",(0,i.kt)("inlineCode",{parentName:"p"},"SHA256")," hash of the byte array of a JSON-encoded canonical representation of the transaction. For more information, please see ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/learn/encoding/encoding#canonical-bytes-for-signing"},"this page"),"."))}u.isMDXComponent=!0}}]);