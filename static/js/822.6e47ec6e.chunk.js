"use strict";(self.webpackChunksolana_tools_client=self.webpackChunksolana_tools_client||[]).push([[822],{3541:function(e,n,t){var r=t(9506),a=t(5281),s=(t(7313),t(6417));n.Z=function(){return(0,s.jsx)(r.Z,{sx:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:2e3,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)(a.Z,{sx:{background:"transparent"}})})}},1822:function(e,n,t){t.r(n);var r=t(4165),a=t(5861),s=t(9439),c=t(1413),o=t(3541),i=t(3076),l=t(7592),u=t(9506),h=t(2832),d=t(1113),p=t(891),x=t(9099),f=t(4631),v=t(6436),g=t(4334),Z=t(2478),k=t(7429),y=t(7655),b=t(7313),m=t(6417),w=(0,l.ZP)(u.Z)((function(e){var n=e.theme;return(0,c.Z)((0,c.Z)({},n.typography.body2),{},{textAlign:"center"})})),j=new k.nh("CQ68EPr2bHQ29bLZdHioLx5An35hfav1mqn36hG74ofH"),T=new k.nh("Gir7LUMrsXHv5gGctKNp6th2Pj7j9qmYR1LSrsHS6Yaj"),A=function(e,n,t,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:v.H_,s=[{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!0,isWritable:!1}],c=Buffer.alloc(9);c.writeUInt8(3);var o=BigInt(r);return c.writeBigInt64LE(o,1),new k.Sl({keys:s,programId:a,data:c})};n.default=function(){var e=(0,g.O)(),n=e.publicKey,t=e.sendTransaction,c=(0,b.useState)(0),l=(0,s.Z)(c,2),S=l[0],C=l[1],P=(0,b.useState)(),B=(0,s.Z)(P,2),H=B[0],I=B[1],L=(0,b.useState)(0),_=(0,s.Z)(L,2),K=_[0],V=_[1],E=(0,b.useState)(),G=(0,s.Z)(E,2),Q=G[0],z=G[1],N=(0,b.useState)(0),W=(0,s.Z)(N,2),M=W[0],q=W[1],F=(0,Z.R)().connection,R=(0,b.useState)(!1),X=(0,s.Z)(R,2),$=X[0],J=X[1],U=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return(0,y.yv)("Please connect to your wallet",{variant:"warning"}),e.abrupt("return");case 3:F.getBalance(n).then((function(e){(0,y.yv)("".concat(n," has a balance of ").concat(e/k.j5),{variant:"success"}),C(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return(0,y.yv)("Please connect to your wallet",{variant:"warning"}),e.abrupt("return");case 3:return e.next=5,F.getTokenAccountsByOwner(n,{mint:j});case 5:if((t=e.sent).value.length){e.next=9;break}return(0,y.yv)("".concat(n," doesn't has a ATA of ").concat(j),{variant:"warning"}),e.abrupt("return");case 9:return(0,y.yv)("".concat(n," has a ATA of ").concat(t.value[0].pubkey),{variant:"success"}),e.abrupt("return",t.value[0].pubkey);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H){e.next=3;break}return(0,y.yv)("Please connect to your wallet",{variant:"warning"}),e.abrupt("return");case 3:F.getTokenAccountBalance(H).then((function(e){e.value.uiAmount&&V(e.value.uiAmount)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return(0,y.yv)("Please connect to your wallet",{variant:"warning"}),e.abrupt("return");case 3:if(Q&&H){e.next=6;break}return(0,y.yv)("Token ATA don't exsit",{variant:"warning"}),e.abrupt("return");case 6:return J(!0),a=[A(H,Q,n,M*k.j5,v.H_)],console.log("   \u2705 - Step 1 - create an array with your desires `instructions`"),e.next=11,(0,i.S)(n,F,t,a);case 11:s=e.sent,console.log("   \u2705 - Step 2 - Generate a transaction and send it to the network"),J(!1),(0,y.yv)("\ud83c\udf89 Transaction succesfully confirmed!"),(0,y.yv)("https://explorer.solana.com/tx/".concat(s,"?cluster=devnet"));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(h.Z,{justifyContent:"center",spacing:5,alignItems:"center",marginTop:10,children:[(0,m.jsx)(w,{children:(0,m.jsx)(d.Z,{variant:"h2",children:"Please connect to your wallet for transfer"})}),(0,m.jsx)(w,{children:(0,m.jsx)(d.Z,{variant:"h2",children:"Transfer SPL Token"})}),(0,m.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,m.jsx)(d.Z,{variant:"h5",children:"PublicKey:"}),(0,m.jsx)(p.Z,{target:"_blank",href:"https://explorer.solana.com/address/".concat(n,"?cluster=devnet"),children:"".concat(n)})]}),(0,m.jsxs)(h.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,m.jsx)(d.Z,{variant:"h5",children:"Balance:"}),(0,m.jsx)("span",{children:S/k.j5}),(0,m.jsx)(x.Z,{variant:"contained",size:"small",onClick:U,children:"Query"})]}),(0,m.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,m.jsx)(d.Z,{variant:"h5",children:"Token:"}),(0,m.jsx)(p.Z,{target:"_blank",href:"https://explorer.solana.com/address/".concat(j,"?cluster=devnet"),children:"".concat(j)})]}),(0,m.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,m.jsx)(d.Z,{variant:"h5",children:"ATA Public Key:"}),(0,m.jsx)(p.Z,{target:"_blank",href:"https://explorer.solana.com/address/".concat(H,"?cluster=devnet"),children:"".concat(H||"")}),!H&&(0,m.jsx)(x.Z,{variant:"contained",size:"small",onClick:(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(n);case 2:t=e.sent,I(t);case 4:case"end":return e.stop()}}),e)}))),children:"Query Token"})]}),(0,m.jsxs)(h.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,m.jsx)(d.Z,{variant:"h5",children:"ATA Balance:"}),(0,m.jsx)("span",{children:K}),(0,m.jsx)(x.Z,{variant:"contained",size:"small",onClick:O,children:"Query"})]}),(0,m.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,m.jsx)(d.Z,{variant:"h5",children:"To Public Key:"}),(0,m.jsx)(p.Z,{target:"_blank",href:"https://explorer.solana.com/address/".concat(T,"?cluster=devnet"),children:"".concat(T||"")})]}),(0,m.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,m.jsx)(d.Z,{variant:"h5",children:"To ATA Public Key:"}),(0,m.jsx)(p.Z,{target:"_blank",href:"https://explorer.solana.com/address/".concat(Q,"?cluster=devnet"),children:"".concat(Q||"")}),!Q&&(0,m.jsx)(x.Z,{variant:"contained",size:"small",onClick:(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(T);case 2:n=e.sent,console.log(n,"newAtaPubkey"),z(n);case 5:case"end":return e.stop()}}),e)}))),children:"Query Token"})]}),(0,m.jsxs)(h.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,m.jsx)(f.Z,{id:"recived_address",label:"Recive Address",variant:"outlined",value:"".concat(Q||""),onChange:function(e){z(e.target.value)}}),(0,m.jsx)(f.Z,{id:"count",label:"Count",variant:"outlined",type:"number",sx:{minWidth:100},InputProps:{inputProps:{min:0,max:K}},defaultValue:M,onChange:function(e){q(e.target.value)}}),(0,m.jsx)(x.Z,{variant:"contained",size:"small",onClick:Y,children:"Transfer"})]})]}),$&&(0,m.jsx)(o.Z,{})]})}},3076:function(e,n,t){t.d(n,{S:function(){return i},n:function(){return c}});var r=t(4165),a=t(5861),s=t(7429);function c(e,n,t,r){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function e(n,t,a,c){var o,i,l,u,h,d,p,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getLatestBlockhashAndContext();case 2:return o=e.sent,i=o.context.slot,l=o.value,u=l.blockhash,h=l.lastValidBlockHeight,console.log("   \u2705 - 1. Fetched latest blockhash. Last valid height:",h),d=c?new s.$Z({payerKey:n.publicKey,recentBlockhash:u,instructions:a}).compileToV0Message([c]):new s.$Z({payerKey:n.publicKey,recentBlockhash:u,instructions:a}).compileToV0Message(),console.log("   \u2705 - 2. Compiled transaction message"),(p=new s.GS(d)).sign([n]),console.log("   \u2705 - 3. Transaction Signed"),e.next=15,t.sendTransaction(p,{maxRetries:5,minContextSlot:i});case 15:return x=e.sent,console.log("   \u2705 - 4. Transaction sent to network"),e.next=19,t.confirmTransaction({signature:x,blockhash:u,lastValidBlockHeight:h});case 19:if(!e.sent.value.err){e.next=22;break}throw new Error("   \u274c - 5. Transaction not confirmed.");case 22:return console.log("   \ud83c\udf89 - 5. Transaction succesfully confirmed!","https://explorer.solana.com/tx/".concat(x,"?cluster=devnet")),e.abrupt("return",x);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e,n,t,r,a){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function e(n,t,a,c,o){var i,l,u,h,d,p,x,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getLatestBlockhashAndContext();case 2:return i=e.sent,l=i.context.slot,u=i.value,h=u.blockhash,d=u.lastValidBlockHeight,console.log("   \u2705 - 1. Fetched latest blockhash. Last valid height:",d),p=o?new s.$Z({payerKey:n,recentBlockhash:h,instructions:c}).compileToV0Message([o]):new s.$Z({payerKey:n,recentBlockhash:h,instructions:c}).compileToV0Message(),console.log("   \u2705 - 2. Compiled transaction message"),x=new s.GS(p),e.next=13,a(x,t,{maxRetries:5,minContextSlot:l});case 13:return f=e.sent,console.log("   \u2705 - 3. Transaction sent to network"),e.next=17,t.confirmTransaction({signature:f,blockhash:h,lastValidBlockHeight:d});case 17:if(!e.sent.value.err){e.next=20;break}throw new Error("   \u274c - 4. Transaction not confirmed.");case 20:return console.log("   \ud83c\udf89 - 5. Transaction succesfully confirmed!","https://explorer.solana.com/tx/".concat(f,"?cluster=devnet")),e.abrupt("return",f);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},6436:function(e,n,t){t.d(n,{H_:function(){return a},_u:function(){return s}});var r=t(7429),a=new r.nh("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),s=(new r.nh("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"),new r.nh("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"));new r.nh("So11111111111111111111111111111111111111112"),new r.nh("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP")}}]);