(this["webpackJsonpfirebase-storage-test"]=this["webpackJsonpfirebase-storage-test"]||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(28),s=n.n(r),l=n(5),i=n(16),o=n(7),u=n(6),j=n.n(u),b=n(26),d=n(14),m=n(20);n(44),n(36),n(45);m.a.initializeApp({apiKey:"AIzaSyBTbPzUKMEJwgrXVWvFQyDFhThMbgX5cbs",authDomain:"udemy-auth-learning.firebaseapp.com",projectId:"udemy-auth-learning",storageBucket:"udemy-auth-learning.appspot.com",messagingSenderId:"409133570692",appId:"1:409133570692:web:9958d4098531ba38ac80d1",measurementId:"G-3WJTJZHHP4"});var h=m.a.firestore(),p=m.a.auth(),x=m.a.storage(),O=n(1);var f=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],m=Object(c.useState)([]),p=Object(l.a)(m,2),x=p[0],f=p[1],v=Object(c.useState)(null),g=Object(l.a)(v,2),N=g[0],k=g[1],y=Object(c.useState)(!1),w=Object(l.a)(y,2),U=w[0],S=w[1],F=Object(c.useState)(null),I=Object(l.a)(F,2),D=I[0],E=I[1],C=Object(c.useState)(!1),T=Object(l.a)(C,2),P=T[0],B=T[1],L=Object(c.useState)(!1),M=Object(l.a)(L,2),W=M[0],A=M[1];Object(c.useEffect)((function(){(function(){var t=Object(d.a)(j.a.mark((function t(){var n,c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(A(!0),t.prev=1,!e.currentUser){t.next=10;break}return t.next=5,h.collection("phoneBook-".concat(e.currentUser)).get();case 5:n=t.sent,c=n.docs,a=c.map((function(e){return Object(b.a)({id:e.id},e.data())})),f(a),A(!1);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}})()()}),[e.currentUser]);var J=function(){var t=Object(d.a)(j.a.mark((function t(){var n,c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(A(!0),t.prev=1,!e.currentUser){t.next=10;break}return t.next=5,h.collection("phoneBook-".concat(e.currentUser)).get();case 5:n=t.sent,c=n.docs,a=c.map((function(e){return Object(b.a)({id:e.id},e.data())})),f(a),A(!1);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}(),H=function(){var t=Object(d.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a.trim()){t.next=5;break}k("Name can't be blanck"),t.next=26;break;case 5:if(o){t.next=9;break}k("Phone can't be blanck"),t.next=26;break;case 9:return k(null),B(!0),c={name:a,phone:o},t.prev=12,t.next=15,h.collection("phoneBook-".concat(e.currentUser)).add(c);case 15:r(""),u(""),S(!0),J(),B(!1),setTimeout((function(){S(!1)}),3e3),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(12),console.log(t.t0);case 26:case"end":return t.stop()}}),t,null,[[12,23]])})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(d.a)(j.a.mark((function t(n){var c,a,s,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.collection("phoneBook-".concat(e.currentUser)).doc(n).get();case 3:c=t.sent,a=c.data(),s=a.name,l=a.phone,u(l),r(s),E(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=Object(d.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),B(!0),c={name:a,phone:o},t.prev=3,t.next=6,h.collection("phoneBook-".concat(e.currentUser)).doc(D).set(c);case 6:E(null),u(""),r(""),J(),B(!1),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=Object(d.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.collection("phoneBook-".concat(e.currentUser)).doc(n).delete();case 3:J(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"container mt-5",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col",children:[Object(O.jsx)("h2",{children:"New contact"}),Object(O.jsxs)("form",{className:"form-group",onSubmit:D?G:H,children:[Object(O.jsx)("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},className:"form-control",placeholder:"Type a name"}),Object(O.jsx)("input",{type:"number",value:o,onChange:function(e){return u(e.target.value)},className:"form-control",placeholder:"Type a number phone"}),Object(O.jsx)("div",{className:"d-grid gap-2",children:D?Object(O.jsx)(O.Fragment,{children:P?Object(O.jsx)("div",{className:"btn btn-dark btn-block mt-3",children:Object(O.jsx)("div",{className:"spinner-border text-light",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(O.jsx)("input",{type:"submit",value:"Update contact",className:"btn btn-primary btn-block mt-3"})}):Object(O.jsx)(O.Fragment,{children:P?Object(O.jsx)("div",{className:"btn btn-dark btn-block mt-3",children:Object(O.jsx)("div",{className:"spinner-border text-light",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(O.jsx)("input",{type:"submit",value:"Add contact",className:"btn btn-dark btn-block mt-3"})})})]}),N?Object(O.jsx)("div",{className:"text-danger mt-2",children:N}):Object(O.jsx)(O.Fragment,{}),U?Object(O.jsx)("div",{className:"text-success mt-2",children:"Person correctly added!"}):Object(O.jsx)(O.Fragment,{})]}),Object(O.jsxs)("div",{className:"col",children:[Object(O.jsx)("h2",{children:"Contact list"}),Object(O.jsx)("ul",{className:"list-group",children:W?Object(O.jsx)("li",{className:"list-group-item text-center",children:Object(O.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(O.jsx)(O.Fragment,{children:x.length?x.map((function(e,t){return Object(O.jsx)("li",{className:"list-group-item",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col",children:e.name}),Object(O.jsx)("div",{className:"col",children:e.phone}),Object(O.jsxs)("div",{className:"col btn-group float-end",children:[Object(O.jsx)("button",{className:"btn btn-secondary",onClick:function(){return z(e.id)},children:"Update"}),Object(O.jsx)("button",{className:"btn btn-danger",onClick:function(){return R(e.id)},children:"Delete"})]})]})},e.id+t)})):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:"It seems that there are no people here..."}),Object(O.jsx)("div",{children:"Try adding a new contact!"})]})})})]})]})})};var v=function(e){return Object(c.useEffect)((function(){e.msg&&setTimeout((function(){e.showMessage(null)}),3e3)})),Object(O.jsxs)(O.Fragment,{children:[e.msg?Object(O.jsx)("div",{className:"alert alert-success",role:"alert",children:e.msg}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)("h1",{className:"text-center mt-2",children:"Home"})]})};var g=function(e){var t=Object(o.f)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e.currentUser?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(i.b,{className:"nav-link",to:"/",children:"Home"})}),"noOne"!==e.currentUser?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(i.b,{className:"nav-link",to:"/phone-book",children:"Phone-book"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(i.b,{className:"nav-link",to:"/profile",children:"Profile"})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(i.b,{className:"nav-link",to:"/register",children:"Register"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(i.b,{className:"nav-link",to:"/login",children:"Login"})})]})]}):Object(O.jsx)(O.Fragment,{})}),Object(O.jsx)(O.Fragment,{}),"noOne"!==e.currentUser?Object(O.jsx)("button",{className:"btn btn-danger",onClick:function(){p.signOut().then((function(e){t.push("/")})).catch((function(e){console.log(e)}))},children:"Logout"}):Object(O.jsx)(O.Fragment,{})]})})})};var N=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),u=s[0],j=s[1],b=Object(c.useState)(null),d=Object(l.a)(b,2),m=d[0],h=d[1],x=Object(o.f)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{className:"container-fluid border mt-5",style:{maxWidth:"360px"},onSubmit:function(e){e.preventDefault(),p.signInWithEmailAndPassword(n,u).then((function(e){h(null),x.push("/")})).catch((function(e){h(e.message)}))},children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"emailInput",className:"form-label",children:"Email"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"emailInput",placeholder:"Type a email for username",onChange:function(e){return a(e.target.value)}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"passInput",className:"form-label",children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"passInput",placeholder:"Type a password",onChange:function(e){return j(e.target.value)}})]}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsx)("input",{type:"submit",className:"btn btn-dark btn-block mt-4 w-100",value:"Log In"})}),m?Object(O.jsx)("div",{className:"text-danger mb-2",children:m}):Object(O.jsx)(O.Fragment,{}),Object(O.jsxs)("div",{className:"mb-2",children:["Don't have an account? ",Object(O.jsx)(i.b,{to:"/register",children:"Sign up"})," "]})]})})};var k=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(null),d=Object(l.a)(b,2),m=d[0],h=d[1],x=Object(o.f)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{className:"container-fluid border mt-5",style:{maxWidth:"360px"},onSubmit:function(t){t.preventDefault(),p.createUserWithEmailAndPassword(a,u).then((function(t){e.showMessage("Great! Now you can use your own Phone book!"),h(null),x.push("/")})).catch((function(e){h(e.message)}))},children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"emailInput",className:"form-label",children:"Email"}),Object(O.jsx)("input",{type:"email",className:"form-control",id:"emailInput",placeholder:"Type a email for username",onChange:function(e){return r(e.target.value)}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"passInput",className:"form-label",children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"passInput",placeholder:"Type a password",onChange:function(e){return j(e.target.value)}})]}),Object(O.jsx)("div",{className:"mb-3",children:Object(O.jsx)("input",{type:"submit",className:"btn btn-dark btn-block mt-4 w-100",value:"Sign up"})}),m?Object(O.jsx)("div",{className:"text-danger mb-2",children:m}):Object(O.jsx)(O.Fragment,{})]})})};var y=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],b=Object(c.useState)(""),m=Object(l.a)(b,2),p=m[0],f=m[1],v=Object(c.useState)(null),g=Object(l.a)(v,2),N=g[0],k=g[1],y=Object(c.useState)(null),w=Object(l.a)(y,2),U=w[0],S=w[1],F=Object(c.useState)(!0),I=Object(l.a)(F,2),D=I[0],E=I[1];Object(c.useEffect)((function(){E(!0);var t=function(){var t=Object(d.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.currentUser){t.next=7;break}return t.next=4,x.ref("/images/".concat(e.currentUser)).getDownloadURL();case 4:n=t.sent,S(n),E(!1);case 7:t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),S(null),E(!1);case 14:console.log("Efecto!");case 15:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();(function(){var t=Object(d.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.currentUser){t.next=12;break}return t.prev=1,t.next=4,h.collection("Users-Data").doc(e.currentUser).get();case 4:n=t.sent,k(n.data()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:console.log("Efecto!");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}})()(),t()}),[e.currentUser]);var C=function(){var t=Object(d.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("out the useEffect"),t.prev=1,!e.currentUser){t.next=8;break}return t.next=5,x.ref("/images/".concat(e.currentUser)).getDownloadURL();case 5:n=t.sent,S(n),E(!1);case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),S(null);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=Object(d.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.currentUser){t.next=12;break}return t.prev=1,t.next=4,h.collection("Users-Data").doc(e.currentUser).get();case 4:n=t.sent,k(n.data()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:console.log("Efecto!");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(d.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),E(!0),c={nick:a,gender:o},t.prev=3,t.next=6,h.collection("Users-Data").doc(e.currentUser).set(c);case 6:if(console.log("fin de carga de data"),!p){t.next=13;break}return t.next=10,x.ref("/images/".concat(e.currentUser)).put(p);case 10:return t.next=12,C();case 12:console.log("fin de carga de img");case 13:return t.next=15,T();case 15:console.log("fin de get img"),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(3),console.log(n);case 21:case"end":return t.stop()}}),t,null,[[3,18]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{className:"text-center mt-2",children:"Profile"}),Object(O.jsxs)("div",{className:"row mt-5",children:[Object(O.jsx)("div",{className:"col",children:Object(O.jsxs)("form",{onSubmit:P,className:"form-control",style:{maxWidth:"480px"},children:[Object(O.jsx)("h4",{children:"Edit Profile"}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"username",className:"form-label",children:"Name"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Type a name or nickname",onChange:function(e){r(e.target.value)}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{className:"form-label",children:"Gender"}),Object(O.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){u(e.target.value)},children:[Object(O.jsx)("option",{defaultValue:!0,children:"Open this select menu"}),Object(O.jsx)("option",{value:"Male",children:"Male"}),Object(O.jsx)("option",{value:"Female",children:"Female"}),Object(O.jsx)("option",{value:"Unicorn",children:"Unicorn \ud83e\udd84"})]})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"imageInput",className:"form-label",children:"Name"}),Object(O.jsx)("input",{type:"file",className:"form-control",id:"imageInput",placeholder:"Type a name or nickname",onChange:function(e){return f(e.target.files[0])}})]}),Object(O.jsx)("input",{type:"submit",className:"btn btn-dark mt-4 w-100",value:"Update profile"})]})}),Object(O.jsx)("div",{className:"col",children:D?Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"d-flex justify-content-center",children:Object(O.jsxs)("div",{className:"card",style:{width:"18rem"},children:[U?Object(O.jsx)("img",{src:U,className:"card-img-top",alt:"..."}):Object(O.jsx)("img",{src:"/phone-book-firebase/images/unnamed.jpg",className:"card-img-top",alt:"..."}),N?Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:N.nick}),Object(O.jsx)("p",{className:"card-text",children:N.gender})]}):Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:"Unknown"}),Object(O.jsx)("p",{className:"card-text",children:"No data"})]})]})})})})]})]})};var w=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),u=s[0],j=s[1];Object(c.useEffect)((function(){p.onAuthStateChanged((function(e){a(e?e.uid:"noOne")}))}));var b=function(e){j(e)};return Object(O.jsxs)(i.a,{basename:"/",children:[Object(O.jsx)(g,{currentUser:n}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",children:Object(O.jsx)(v,{msg:u,showMessage:b})}),Object(O.jsx)(o.a,{path:"/login",children:Object(O.jsx)(N,{})}),Object(O.jsx)(o.a,{path:"/register",children:Object(O.jsx)(k,{showMessage:b})}),Object(O.jsx)(o.a,{path:"/phone-book",children:Object(O.jsx)(f,{currentUser:n})}),Object(O.jsx)(o.a,{path:"/profile",children:Object(O.jsx)(y,{currentUser:n})})]})]})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.253dbb75.chunk.js.map