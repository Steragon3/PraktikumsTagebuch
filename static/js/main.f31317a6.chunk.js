(this.webpackJsonppraktikumsdiary=this.webpackJsonppraktikumsdiary||[]).push([[0],{104:function(e,t,n){e.exports={DiaryEditor:"DiaryEditor_DiaryEditor__3wjkR",mainbutton:"DiaryEditor_mainbutton__YZBoD",EntryList:"DiaryEditor_EntryList__1eK0Q"}},153:function(e,t,n){e.exports={DeleteEntry:"DeleteEntry_DeleteEntry__1WMj3"}},22:function(e,t,n){e.exports={Entry:"DiaryEntry_Entry__2uVU4",EntryContainer:"DiaryEntry_EntryContainer__2M6zT",relative:"DiaryEntry_relative__1I9jk",Label:"DiaryEntry_Label__3oLYc",Level1:"DiaryEntry_Level1__3ex3X",Level2:"DiaryEntry_Level2__3qmx3",Level3:"DiaryEntry_Level3__3-R6d",Level4:"DiaryEntry_Level4__246Xd",Level5:"DiaryEntry_Level5__37iGw",Level6:"DiaryEntry_Level6__1UjkV"}},232:function(e,t,n){e.exports={EntryControls:"EntryControls_EntryControls__2zfyF"}},233:function(e,t,n){e.exports={ControlButton:"ControlButton_ControlButton__1bRfe"}},234:function(e,t,n){e.exports={DiaryActions:"DiaryActions_DiaryActions__2hZpl"}},235:function(e,t,n){e.exports={Menu:"Menu_Menu__1Owdi"}},239:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},254:function(e,t,n){},263:function(e,t,n){},444:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n(2),c=n.n(a),i=n(36),s=n.n(i),o=(n(250),n(251),n(11)),l=n.n(o),u=n(21),d=n(242),j=n(12),b=n(104),p=n.n(b),h=n(22),f=n.n(h),x=n(3),O=function(e){var t=e.editing,n=e.text,r=e.index,a=e.onchange,c=e.entry;return Object(x.jsx)(x.Fragment,{children:t?Object(x.jsx)("input",{type:"text",defaultValue:n,className:f.a.Entry,onChange:function(e){!function(e){c.value=e.target.value,a(r,c)}(e)}}):Object(x.jsx)("p",{className:f.a.Entry,children:n})})};O.defaultProps={};var v=O,m=(n(254),n(232)),y=n.n(m),g=n.p+"static/media/expand_more_black_24dp.8322b254.svg",k=n.p+"static/media/expand_less_black_24dp.fce0db3a.svg",w=n(233),E=n.n(w),_=function(e){var t=e.img,n=e.onclick;return Object(x.jsx)("button",{onClick:n,className:E.a.ControlButton,children:Object(x.jsx)("img",{src:t})})},C=function(e){var t=e.index,n=e.swapItems;return Object(x.jsxs)("div",{className:y.a.EntryControls,children:[Object(x.jsx)(_,{img:k,onclick:function(){n(t,t-1)}}),Object(x.jsx)(_,{img:g,onclick:function(){n(t,t+1)}})]})};C.defaultProps={};var P=C,N=n.p+"static/media/edit_black_24dp.4fa02ba3.svg",D=n.p+"static/media/delete_black_24dp.1129c53a.svg",L=function(e){var t=e.editing,n=e.index,r=e.text,a=e.onchange,c=e.entry;return Object(x.jsx)(x.Fragment,{children:t?Object(x.jsx)("input",{type:"text",defaultValue:r,onChange:function(e){!function(e){c.value=e.target.value,a(n,c)}(e)},className:f.a.Entry}):Object(x.jsx)("p",{className:f.a.Entry,children:r})})},M=n(49),S=function(e){var t=e.editing,n=e.text,r=e.index,a=e.onchange,c=e.entry,i=function(e,t){c[t]=e.target.value,a(r,c)};return Object(x.jsx)(x.Fragment,{children:t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{type:"date",defaultValue:c.startDate,className:f.a.Entry,onChange:function(e){i(e,"startDate")}}),Object(x.jsx)("input",{type:"date",defaultValue:c.endDate,className:f.a.Entry,onChange:function(e){i(e,"endDate")}}),Object(x.jsx)("input",{type:"text",defaultValue:n,className:f.a.Entry,onChange:function(e){i(e,"value")}})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{className:f.a.Entry,children:n}),Object(x.jsx)("p",{className:f.a.Entry,children:c.startDate}),Object(x.jsx)("p",{className:f.a.Entry,children:c.endDate})]})})};S.defaultProps={};var F=S,R=function(e){var t=e.entry,n=e.index,c=e.onchange,i=e.swapItems,s=e.deleteItem,o=Object(a.useState)(!1),l=Object(j.a)(o,2),u=l[0],d=l[1],b=function(){switch(t.type){case"Heading":return Object(x.jsx)(v,{text:t.value,editing:u,index:n,onchange:c,entry:t});case"Text":return Object(x.jsx)(L,{text:t.value,editing:u,index:n,onchange:c,entry:t});case"Week":return Object(x.jsx)(F,{text:t.value,editing:u,index:n,onchange:c,entry:t});default:return Object(x.jsx)(x.Fragment,{children:"Not Implemented type"})}};return Object(x.jsx)(M.b,{draggableId:"".concat(t.id),index:n,children:function(e,a){return Object(x.jsx)("div",Object(r.a)(Object(r.a)(Object(r.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{className:f.a["Level".concat(t.level)],id:"".concat(t.id),children:Object(x.jsxs)("div",{className:f.a.relative,children:[b(),Object(x.jsxs)("span",{className:f.a.Label,children:["Text"==t.type?"Text":"".concat(t.type," ").concat(t.level),Object(x.jsx)(_,{img:N,onclick:function(){d(!u)}}),Object(x.jsx)(_,{img:D,onclick:function(){s(n)}})]}),Object(x.jsx)(P,{index:n,swapItems:i})]})}))}})};R.defaultProps={};var I=R,V=n(234),A=n.n(V),H=function(e){var t=e.addItem;return Object(x.jsxs)("div",{className:A.a.DiaryActions,children:[Object(x.jsx)("button",{onClick:function(){t({type:"Heading",level:1,value:""})},children:"Heading Level 1"}),Object(x.jsx)("button",{onClick:function(){t({type:"Heading",level:2,value:""})},children:"Heading Level 2"}),Object(x.jsx)("button",{onClick:function(){t({type:"Heading",level:3,value:""})},children:"Heading Level 3"}),Object(x.jsx)("button",{onClick:function(){t({type:"Heading",level:4,value:""})},children:"Heading Level 4"}),Object(x.jsx)("button",{onClick:function(){t({type:"Heading",level:5,value:""})},children:"Heading Level 5"}),Object(x.jsx)("button",{onClick:function(){t({type:"Week",level:1,value:"",startDate:"",endDate:""})},children:"Week"}),Object(x.jsx)("button",{onClick:function(){t({type:"Text",level:1,value:""})},children:"Text"})]})};H.defaultProps={};var T=H,U=n(153),B=n.n(U),G=function(){return Object(x.jsx)("img",{src:D})};G.defaultProps={};var W=G,Y=n(24),q=n(31),z=n(41);n(260),n(261);z.a.initializeApp({apiKey:"AIzaSyCtVwgbTXWDk55yyy821XYGjfiLdxCdHRY",authDomain:"studiowoche-fullstack.firebaseapp.com",projectId:"studiowoche-fullstack",storageBucket:"studiowoche-fullstack.appspot.com",messagingSenderId:"855433817646",appId:"1:855433817646:web:1e2b00ab1ca9e7d12c39bf",measurementId:"G-YFSZPWHD79"}),z.a.firestore().settings({timestampsInSnapshots:!0});var X=z.a.auth(),$=z.a,J={entries:[{id:1,type:"Heading",level:1,value:"Mein nices Praktikum"},{id:2,type:"Heading",level:2,value:"Mein nices Praktikum"},{id:3,type:"Text",level:2,value:"Mein nices Praktikum"},{id:4,type:"Heading",level:3,value:""},{id:5,type:"Heading",level:3,value:"Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3Mein nices Praktikum Version 3"}]},Z=function(e){return function(){var t=Object(u.a)(l.a.mark((function t(n,r,a){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=a.getFirestore,c().collection("journals").doc(X.currentUser.uid).set(e).then((function(e){n({type:"diary/update",payload:e})})).catch((function(e){console.log(e),n({type:"diary/error",payload:e})}));case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},K=function(){return function(){var e=Object(u.a)(l.a.mark((function e(t,n,r){var a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.getFirestore,c=a(),e.next=4,c.collection("journals").doc(X.currentUser.uid).get().then((function(e){return e.exists?{type:"diary/fetch",payload:e.data()}:{type:"diary/fetch",payload:J}})).catch((function(e){return{type:"diary/error",payload:e}}));case 4:return i=e.sent,t(i),e.abrupt("return",i.payload);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},Q=n(20),ee=Object(Y.d)(Object(q.b)((function(e){return{diary:e.diary}}),(function(e){return{onLoadData:function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(K());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),onupdateDiary:function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Z(n));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})))((function(e){e.diary;var t=e.onLoadData,n=e.onupdateDiary,c=Object(a.useState)([]),i=Object(j.a)(c,2),s=i[0],o=i[1];Object(a.useEffect)((function(){t().then((function(e){o(e.entries)}))}),[]);var l=function(e,t){var n=Array.from(s);n[e]=t,o(n)},u=function(e){var t=Object(d.a)(e);console.log(t),e.forEach((function(n,r){if("Text"==n.type){for(var a=!1,c=r-1;c>=0&&!a;c--)"Heading"==e[c].type&&(console.log(e[c].level,parseInt(e[c].level)+1),t[r].level=parseInt(e[c].level)+1,a=!0,console.log(c,r));a||(t[r].level=1)}})),o(t),console.log(t)},b=function(e,t){if(t<0||t>s.length-1);else{console.log(e,t);var n=Array.from(s),r=n[t];n[t]=n[e],n[e]=r,u(n)}},h=function(e){var t=Array.from(s);t.splice(e,1),u(t)};return Object(x.jsxs)("div",{className:p.a.DiaryEditor,children:[Object(x.jsxs)(M.a,{onDragEnd:function(e){if(e.destination)if("bucket"==e.destination.droppableId)h(e.source.index);else{var t=Array.from(s),n=t.splice(e.source.index,1),r=Object(j.a)(n,1)[0];t.splice(e.destination.index,0,r),u(t)}},children:[Object(x.jsx)(M.c,{droppableId:"entries",children:function(e,t){return Object(x.jsxs)("div",Object(r.a)(Object(r.a)({ref:e.innerRef},e.droppableProps),{},{className:p.a.EntryLists,children:[s.map((function(e,t){return Object(x.jsx)(I,{entry:e,index:t,onchange:l,swapItems:b,deleteItem:h},e.id)})),e.placeholder]}))}}),Object(x.jsx)(T,{addItem:function(e){e.id=s.length+1;var t=Array.from(s);t.push(e),u(t)}}),Object(x.jsx)(M.c,{droppableId:"bucket",children:function(e,t){return Object(x.jsxs)("div",Object(r.a)(Object(r.a)({ref:e.innerRef},e.droppableProps),{},{className:B.a.DeleteEntry,children:[Object(x.jsx)(W,{}),e.placeholder]}))}})]}),Object(x.jsx)("button",{className:p.a.mainbutton,onClick:function(){n({entries:s})},children:"Save"}),Object(x.jsx)(Q.b,{to:"/export",className:"btn btn-primary",children:"Export"})]})})),te=n(235),ne=n.n(te),re=function(){return Object(x.jsx)("div",{className:ne.a.Menu,children:"Menu Component"})};re.defaultProps={};var ae=function(){return Object(x.jsx)(ee,{})};ae.defaultProps={};var ce=ae,ie=(n(62),n.p,n(263),n(450)),se=n(448),oe=n(449),le=n(446),ue=c.a.createContext();function de(){return Object(a.useContext)(ue)}function je(e){var t=e.children,n=Object(a.useState)(),r=Object(j.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(!0),o=Object(j.a)(s,2),l=o[0],u=o[1];Object(a.useEffect)((function(){return X.onAuthStateChanged((function(e){i(e),u(!1)}))}),[]);var d={currentUser:c,login:function(e,t){return X.signInWithEmailAndPassword(e,t)},signup:function(e,t){return X.createUserWithEmailAndPassword(e,t)},logout:function(){return X.signOut()},resetPassword:function(e){return X.sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return Object(x.jsx)(ue.Provider,{value:d,children:!l&&t})}var be=n(15);function pe(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=de().signup,c=Object(a.useState)(""),i=Object(j.a)(c,2),s=i[0],o=i[1],d=Object(a.useState)(!1),b=Object(j.a)(d,2),p=b[0],h=b[1],f=Object(be.g)();function O(){return(O=Object(u.a)(l.a.mark((function a(c){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),t.current.value===n.current.value){a.next=3;break}return a.abrupt("return",o("Passwords do not match"));case 3:return a.prev=3,o(""),h(!0),a.next=8,r(e.current.value,t.current.value);case 8:f.push("/"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),o("Faild to create an account");case 14:h(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ie.a,{children:Object(x.jsxs)(ie.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),s&&Object(x.jsx)(se.a,{variant:"danger",children:s}),Object(x.jsxs)(oe.a,{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(x.jsxs)(oe.a.Group,{id:"email",children:[Object(x.jsx)(oe.a.Label,{children:"Email"}),Object(x.jsx)(oe.a.Control,{type:"email",ref:e,required:!0})]}),Object(x.jsxs)(oe.a.Group,{id:"password",children:[Object(x.jsx)(oe.a.Label,{children:"Password"}),Object(x.jsx)(oe.a.Control,{type:"password",ref:t,required:!0})]}),Object(x.jsxs)(oe.a.Group,{id:"password-confirm",children:[Object(x.jsx)(oe.a.Label,{children:"Password Confirmation"}),Object(x.jsx)(oe.a.Control,{type:"password",ref:n,required:!0})]}),Object(x.jsx)(le.a,{disabled:p,className:"w-100",type:"submit",children:"Sign up"})]})]})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(x.jsx)(Q.b,{to:"/login",children:"Log In"})]})]})}var he=n(447);function fe(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],c=de(),i=c.currentUser,s=c.logout,o=Object(be.g)();function d(){return(d=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,s();case 4:o.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ie.a,{children:Object(x.jsxs)(ie.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),n&&Object(x.jsx)(se.a,{variant:"danger",children:n}),Object(x.jsx)("strong",{children:"Email: "}),i.email,console.log(i.uid),Object(x.jsx)(Q.b,{to:"update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(x.jsx)("div",{className:"w-100 text-center mt-2",children:Object(x.jsx)(le.a,{variant:"link",onClick:function(){return d.apply(this,arguments)},children:"Log Out"})})]})}function xe(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=de().login,r=Object(a.useState)(""),c=Object(j.a)(r,2),i=c[0],s=c[1],o=Object(a.useState)(!1),d=Object(j.a)(o,2),b=d[0],p=d[1],h=Object(be.g)();function f(){return(f=Object(u.a)(l.a.mark((function r(a){return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.prev=1,s(""),p(!0),r.next=6,n(e.current.value,t.current.value);case 6:h.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),s("Faild to log in");case 12:p(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ie.a,{children:Object(x.jsxs)(ie.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),i&&Object(x.jsx)(se.a,{variant:"danger",children:i}),Object(x.jsxs)(oe.a,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(x.jsxs)(oe.a.Group,{id:"email",children:[Object(x.jsx)(oe.a.Label,{children:"Email"}),Object(x.jsx)(oe.a.Control,{type:"email",ref:e,required:!0})]}),Object(x.jsxs)(oe.a.Group,{id:"password",children:[Object(x.jsx)(oe.a.Label,{children:"Password"}),Object(x.jsx)(oe.a.Control,{type:"password",ref:t,required:!0})]}),Object(x.jsx)(le.a,{disabled:b,className:"w-100",type:"submit",children:"Log In"})]}),Object(x.jsx)("div",{className:"w-100 text-center mt-3",children:Object(x.jsx)(Q.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?   ",Object(x.jsx)(Q.b,{to:"/sign-up",children:"Sign up"})]})]})}var Oe=n(243);function ve(e){var t=e.component,n=Object(Oe.a)(e,["component"]),a=de().currentUser;return Object(x.jsx)(be.b,Object(r.a)(Object(r.a)({},n),{},{render:function(e){return a?Object(x.jsx)(t,Object(r.a)({},e)):Object(x.jsx)(be.a,{to:"/login"})}}))}function me(){var e=Object(a.useRef)(),t=de().resetPassword,n=Object(a.useState)(""),r=Object(j.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(!1),o=Object(j.a)(s,2),d=o[0],b=o[1],p=Object(a.useState)(!1),h=Object(j.a)(p,2),f=h[0],O=h[1];function v(){return(v=Object(u.a)(l.a.mark((function n(r){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,O(""),i(""),b(!0),n.next=7,t(e.current.value);case 7:O("Check your inbox for further instructions"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),i("Faild to reset password");case 13:b(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ie.a,{children:Object(x.jsxs)(ie.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),c&&Object(x.jsx)(se.a,{variant:"danger",children:c}),f&&Object(x.jsx)(se.a,{variant:"success",children:f}),Object(x.jsxs)(oe.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(x.jsxs)(oe.a.Group,{id:"email",children:[Object(x.jsx)(oe.a.Label,{children:"Email"}),Object(x.jsx)(oe.a.Control,{type:"email",ref:e,required:!0})]}),Object(x.jsx)(le.a,{disabled:d,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(x.jsx)("div",{className:"w-100 text-center mt-3",children:Object(x.jsx)(Q.b,{to:"/login",children:"Login"})})]})}),Object(x.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account?   ",Object(x.jsx)(Q.b,{to:"/sign-up",children:"Sign up"})]})]})}function ye(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=de(),c=r.currentUser,i=r.updateEmail,s=r.updatePassword,o=Object(a.useState)(""),l=Object(j.a)(o,2),u=l[0],d=l[1],b=Object(a.useState)(!1),p=Object(j.a)(b,2),h=p[0],f=p[1],O=Object(be.g)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ie.a,{children:Object(x.jsxs)(ie.a.Body,{children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Edit Profile"}),u&&Object(x.jsx)(se.a,{variant:"danger",children:u}),Object(x.jsxs)(oe.a,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==n.current.value)return d("Passwords do not match");var a=[];f(!0),e.current.value!==c.email&&a.push(i(e.current.value)),t.current.value&&a.push(s(t.current.value)),Promise.all(a).then((function(){O.push("/")})).catch((function(){d("Failed to update account")})).finally((function(){f(!1)}))},children:[Object(x.jsxs)(oe.a.Group,{id:"email",children:[Object(x.jsx)(oe.a.Label,{children:"Email"}),Object(x.jsx)(oe.a.Control,{type:"email",ref:e,defaultValue:c.email})]}),Object(x.jsxs)(oe.a.Group,{id:"password",children:[Object(x.jsx)(oe.a.Label,{children:"Password"}),Object(x.jsx)(oe.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(x.jsxs)(oe.a.Group,{id:"password-confirm",children:[Object(x.jsx)(oe.a.Label,{children:"Password Confirmation"}),Object(x.jsx)(oe.a.Control,{type:"password",ref:n,placeholder:"Leave blank to keep the same"})]}),Object(x.jsx)(le.a,{disabled:h,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(x.jsx)("div",{className:"w-100 text-center mt-2",children:Object(x.jsx)(Q.b,{to:"/",children:"Cancle"})})]})}var ge=n(101),ke=n(50),we=n(238),Ee=n(244),_e=n(241),Ce=function(e){Object(Ee.a)(n,e);var t=Object(_e.a)(n);function n(){var e;Object(ke.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(ge.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createCompany(e.state),e.props.history.push("/")},e}return Object(we.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("form",{className:"white",onSubmit:this.handleSubmit,children:[Object(x.jsx)("h5",{className:"grey-text text-darken-3",children:"Create a New Project"}),Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("input",{type:"text",id:"title",onChange:this.handleChange}),Object(x.jsx)("label",{htmlFor:"title",children:"Project Title"})]}),Object(x.jsxs)("div",{className:"input-field",children:[Object(x.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange}),Object(x.jsx)("label",{htmlFor:"content",children:"Project Content"})]}),Object(x.jsx)("div",{className:"input-field",children:Object(x.jsx)("button",{className:"btn pink lighten-1",children:"Create"})})]})})}}]),n}(a.Component),Pe=Object(q.b)(null,(function(e){return{createCompany:function(t){return e(function(e){return function(t,n,a){var c=(0,a.getFirestore)();c.collection("journals").doc(X.currentUser.uid).get().then((function(e){console.log(e.exists),e.exists?c.collection("journals").doc(X.currentUser.uid).set({feci:"farted again"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})):c.collection("journals").doc(X.currentUser.uid).set({feci:"farted"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),console.log(e.docs)})),c.collection("companies").add(Object(r.a)({},e)).then((function(){t({type:"CREATE_COMPANY"})})).catch((function(e){t({type:"CREATE_COMPANY_ERROR"},e),console.log(e)}))}}(t))}}}))(Ce),Ne=n(239),De=n.n(Ne),Le=function e(t){Object(ke.a)(this,e),this.value="{{ ",this.value+=Ie(t),this.value+=" }}",this.value+="\n"},Me=function e(t,n){Object(ke.a)(this,e),this.value="=".repeat(t+1)+" ",this.value+=Ie(n)+" ",this.value+="=".repeat(t+1),this.value+="\n"},Se=function e(t,n,r){Object(ke.a)(this,e),this.value="'''",this.value+=Re(t)+" - "+Re(n),this.value+="'''\n",this.value+=Ie(r),this.value+="\n"},Fe=function e(t){Object(ke.a)(this,e),this.value=Ie(t),this.value+="\n"};function Re(e){var t=e.replace(/-/gi,".");return t=(t=t.substring(4,t.length)).replace(/(\.)(\d{2})(\.)(\d{2})/,"$4$3$2$1")}function Ie(e){var t=e.replace(/\*/gi,"'''"),n=(t=t.replace(/\_/gi,"''")).match(/\[(.*?)\]/g);return null!=n&&n.forEach((function(e){var n=e.substr(0,e.length-1);n+=" "+n.substr(e.indexOf(".")+1,n.lastIndexOf(".")-e.indexOf(".")-1)+"]",t=t.substr(0,t.indexOf(e))+n+t.substr(t.indexOf(e)+e.length,t.length)})),t}function Ve(e){var t=function(e){return e.map((function(e){switch(e.type){case"Title":return new Le(e.value);case"Heading":return new Me(e.level,e.value);case"Week":return new Se(e.startDate,e.endDate,e.value);case"Text":return new Fe(e.value);default:console.log(e),console.log("fehler")}}))}(e),n="";return t.forEach((function(e){n+=e.value})),console.log(n),n}var Ae=Object(Y.d)(Object(q.b)((function(e){return{diary:e.diary}}),(function(e){return{onLoadData:function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(K());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),onupdateDiary:function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Z(n));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})))((function(e){var t=e.onLoadData,n=Object(a.useState)([]),r=Object(j.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){t().then((function(e){console.log(JSON.stringify(e.entries)),i(Ve(e.entries))}))}),[]),Object(x.jsxs)("div",{className:De.a.WikiExporter,children:[Object(x.jsx)("textarea",{onChange:function(e){return c=e.target.value},id:"wikiText",defaultValue:c,rows:"10",cols:"100"}),Object(x.jsx)("button",{onClick:function(){return navigator.clipboard.writeText(c)},children:" Copy to Clipboard "})]})}));var He=function(){return Object(x.jsx)(he.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(x.jsx)("div",{className:"w-100",children:Object(x.jsx)(Q.a,{children:Object(x.jsx)(je,{children:Object(x.jsxs)(be.d,{children:[Object(x.jsx)(ve,{exact:!0,path:"/",component:fe}),Object(x.jsx)(ve,{path:"/update-profile",component:ye}),Object(x.jsx)(ve,{path:"/diary",component:ce}),Object(x.jsx)(ve,{path:"/export",component:Ae}),Object(x.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(x.jsx)(be.b,{path:"/sign-up",component:pe}),Object(x.jsx)(be.b,{path:"/login",component:xe}),Object(x.jsx)(be.b,{path:"/forgot-password",component:me}),Object(x.jsx)(be.b,{path:"/create",component:Pe})]})]})})})})})},Te={entries:[]},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"diary/update":return e;case"diary/fetch":return t.payload;case"diary/error":return console.log("diary err"),console.log(t.payload),e;default:return e}},Be={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_COMPANY":return console.log("create project success"),e;case"CREATE_COMPANY_ERROR":return console.log("create project error"),e;default:return e}},We=Object(Y.c)({company:Ge,diary:Ue}),Ye=n(240),qe=n(105),ze=n(157),Xe=Object(Y.e)(We,Object(Y.d)(Object(Y.a)(Ye.a.withExtraArgument({getFirestore:qe.getFirestore,getFirebase:ze.getFirebase})),Object(qe.reduxFirestore)(z.a,$))),$e={firebase:z.a,config:$,dispatch:Xe.dispatch,createFirestoreInstance:qe.createFirestoreInstance};s.a.render(Object(x.jsx)(q.a,{store:Xe,children:Object(x.jsx)(ze.ReactReduxFirebaseProvider,Object(r.a)(Object(r.a)({},$e),{},{children:Object(x.jsx)(He,{})}))}),document.getElementById("root"))}},[[444,1,2]]]);
//# sourceMappingURL=main.f31317a6.chunk.js.map