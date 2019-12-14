(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{295:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(355),c=t(162),l=t(330),s=t(352),o=t(344),u=t(334),d=t(331),m=function(n){var e=n.txs,t=[{key:"columnId",name:"Id",fieldName:"id",minWidth:50,maxWidth:300,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(n){var e=n.id;return r.a.createElement(i.a,{href:"../transaction/?"+e},e)}},{key:"columnSigner",name:"Signer",fieldName:"signer",minWidth:50,maxWidth:250,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"string",isPadded:!0,onRender:function(n){var e=n.signer;return r.a.createElement(i.a,{href:"../account/?"+e},e)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:50,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0},{key:"columnActionNumber",name:"Action #",minWidth:20,maxWidth:40,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"number",isPadded:!0,onRender:function(n){return r.a.createElement(r.a.Fragment,null,n.actions?n.actions.length:"--")}}];return r.a.createElement(s.a,{items:e,columns:t,selectionMode:o.b.none,getKey:function(n){return n.id},setKey:"set",layoutMode:u.e.justified,isHeaderVisible:!0,onItemInvoked:function(n){return Object(c.navigate)("../transaction/?"+n.id)}})};e.default=function(n){var e=n.location,t=Object(l.a)(e),a=t[0],c=(t[1],a);return r.a.createElement(d.a,{variables:{hash:c}},function(n){var e=n.data,t=n.loading,a=n.error;if(t)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"Loading…"));if(a)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"Failed to load ",c," - ",JSON.stringify(a.message)));var l=e.blockQuery.block;if(!l)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("p",null,"No such block: ",r.a.createElement("code",null,c)));var s="../account/?"+l.miner;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Block Details"),r.a.createElement("dl",null,r.a.createElement("dt",null,"Index"),r.a.createElement("dd",null,l.index),r.a.createElement("dt",null,"Hash"),r.a.createElement("dd",null,r.a.createElement("code",null,l.hash)),r.a.createElement("dt",null,"Nonce"),r.a.createElement("dd",null,r.a.createElement("code",null,l.nonce)),r.a.createElement("dt",null,"Miner"),r.a.createElement("dd",null,r.a.createElement(i.a,{href:s},r.a.createElement("code",null,l.miner))),r.a.createElement("dt",null,"Timestamp"),r.a.createElement("dd",null,l.timestamp),r.a.createElement("dt",null,"Previous hash"),r.a.createElement("dd",null,l.previousBlock?r.a.createElement(i.a,{href:"./?"+l.previousBlock.hash},r.a.createElement("code",null,l.previousBlock.hash)):"N/A"),r.a.createElement("dt",null,"Difficulty"),r.a.createElement("dd",null,l.difficulty),r.a.createElement("dt",null,"Transactions"),l.transactions.length>0?r.a.createElement(m,{txs:l.transactions}):r.a.createElement("dd",null,r.a.createElement("i",null,"There is no transactions in this block."))))})}},330:function(n,e,t){"use strict";t.d(e,"a",function(){return i});t(164);var a=t(0),r=t(162);function i(n){return[Object(a.useMemo)(function(){return n.search.substr(1)},[n]),Object(a.useCallback)(function(e){var t=n.pathname.substr(Object(r.withPrefix)("/").length-1);Object(r.navigate)(t+(e?"?"+e:""))},[n,r.navigate])]}},331:function(n,e,t){"use strict";t.d(e,"b",function(){return b}),t.d(e,"a",function(){return k}),t.d(e,"c",function(){return $}),t.d(e,"d",function(){return T});t(45);var a=t(165),r=t.n(a),i=t(0),c=t(332);t(333);function l(){var n=E(["\n  query TransactionsByAccount($involvedAddress: Address) {\n    transactionQuery {\n      transactions(involvedAddress: $involvedAddress) {\n        ...TransactionCommon\n      }\n    }\n  }\n  ","\n"]);return l=function(){return n},n}function s(){var n=E(["\n  query TransactionById($id: ID) {\n    transactionQuery {\n      transaction(id: $id) {\n        ...TransactionCommon\n      }\n    }\n  }\n  ","\n"]);return s=function(){return n},n}function o(){var n=E(["\n  query TransactionList(\n    $signer: Address!\n    $updatedAddresses: Address!\n    $desc: Boolean!\n    $offset: Int!\n    $limit: Int!\n  ) {\n    transactionQuery {\n      transactions(\n        signer: $signer\n        updatedAddresses: $updatedAddresses\n        desc: $desc\n        offset: $offset\n        limit: $limit\n      ) {\n        ...TransactionCommon\n      }\n    }\n  }\n  ","\n"]);return o=function(){return n},n}function u(){var n=E(["\n  query BlockByHash($hash: ID) {\n    blockQuery {\n      block(hash: $hash) {\n        ...BlockCommon\n        miner\n        nonce\n        previousBlock {\n          hash\n        }\n        transactions {\n          ...TransactionCommon\n        }\n      }\n    }\n  }\n  ","\n  ","\n"]);return u=function(){return n},n}function d(){var n=E(["\n  query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!) {\n    blockQuery {\n      blocks(\n        desc: true\n        offset: $offset\n        limit: $limit\n        excludeEmptyTxs: $excludeEmptyTxs\n      ) {\n        ...BlockCommon\n        miner\n        transactions {\n          id\n        }\n      }\n    }\n  }\n  ","\n"]);return d=function(){return n},n}function m(){var n=E(["\n  fragment TransactionCommon on Transaction {\n    actions {\n      arguments {\n        key\n        value\n      }\n    }\n    id\n    nonce\n    publicKey\n    signature\n    signer\n    timestamp\n    updatedAddresses\n  }\n"]);return m=function(){return n},n}function f(){var n=E(["\n  fragment BlockCommon on Block {\n    hash\n    index\n    difficulty\n    timestamp\n  }\n"]);return f=function(){return n},n}function E(n,e){return e||(e=n.slice(0)),n.raw=e,n}var h=r()(f()),g=r()(m()),v=r()(d(),h),b=function(n){return i.createElement(c.b,Object.assign({query:v},n))};var y=r()(u(),h,g),k=function(n){return i.createElement(c.b,Object.assign({query:y},n))};r()(o(),g);var p=r()(s(),g),$=function(n){return i.createElement(c.b,Object.assign({query:p},n))};var B=r()(l(),g),T=function(n){return i.createElement(c.b,Object.assign({query:B},n))}}}]);
//# sourceMappingURL=component---src-pages-block-tsx-b34272389f3db7200c6c.js.map