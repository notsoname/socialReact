(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(38),a=n(5),c="ADD-MESSAGE",s={messagesData:[{id:1,message:"Hsadasi"},{id:2,message:"Andrey"},{id:3,message:"Sveta"},{id:4,message:"Valera"},{id:5,message:"Viktor"},{id:6,message:"Sasha"}],dialogsData:[{id:1,name:"Dima"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Valera"},{id:5,name:"Viktor"},{id:6,name:"Sasha"}]},i=function(e){return{type:c,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{dialogsData:[].concat(Object(r.a)(e.dialogsData),[{id:7,name:n}])});default:return e}}},136:function(e,t,n){e.exports={avatar:"users_avatar__1lCDH",selectedPage:"users_selectedPage__13ADs"}},15:function(e,t,n){e.exports={nav:"nav_nav__2sD5A",item:"nav_item__11aZD",active:"nav_active__1S-a0"}},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(134),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c6e4b4a3-e703-4a56-b015-4171391cdc48"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return i.getProfile(e)}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("/auth/login",{email:e,password:t,rememberMe:n})},logOut:function(){return a.delete("/auth/login")}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}}},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var r=n(1),a=(n(99),n(0)),c=n.n(a),s=n(64),i=n.n(s),o=n(28),u=n(29),l=n(31),d=n(30),f=n(12),j=n(15),b=n.n(j),p=function(){return Object(r.jsxs)("nav",{className:b.a.nav,children:[Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/news",activeClassName:b.a.active,children:"News"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/music",activeClassName:b.a.active,children:"Music"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/settings",activeClassName:b.a.active,children:"Settings"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/friends",activeClassName:b.a.active,children:"Friends"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/users",activeClassName:b.a.active,children:"Users"})})]})},h=(n(173),n(11)),O=(n(174),function(){return Object(r.jsx)("div",{children:"sdffds"})}),g=(n(175),function(){return Object(r.jsx)("div",{children:"sdffds"})}),m=(n(176),function(){return Object(r.jsx)("div",{children:"sdffds"})}),v=(n(177),function(e){return Object(r.jsxs)("div",{children:[e.name," name"]})}),x=function(e){var t=e.friendsData.map((function(e){return Object(r.jsx)(v,{name:e.name})}));return Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:t})})},w=n(13),C=n(9),S=n(98),y=n(10),P=n.n(y),k=n(21),A=n(38),E=n(5),N=n(17),I=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(E.a)(Object(E.a)({},e),r):e}))},U="FOLLOW",_="UNFOLLOW",R="SET_USERS",F="SET_CURRENT_PAGE",T="SET_TOTAL_USERS_COUNT",D="TOOGLE_IS_FETCHING",M="TOOGLE_IS_FOLLOWING_PROGRESS",z={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},V=function(e){return{type:U,userId:e}},L=function(e){return{type:_,userId:e}},K=function(e){return{type:F,currentPage:e}},G=function(e){return{type:D,isFetching:e}},H=function(e,t){return{type:M,isFetching:e,userId:t}},Q=function(){var e=Object(k.a)(P.a.mark((function e(t,n,r,a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(H(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(E.a)(Object(E.a)({},e),{},{users:I(e.users,t.userId,"id",{followed:!0})});case _:return Object(E.a)(Object(E.a)({},e),{},{users:I(e.users,t.userId,"id",{followed:!1})});case R:return Object(E.a)(Object(E.a)({},e),{},{users:t.users});case F:return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.currentPage});case T:return Object(E.a)(Object(E.a)({},e),{},{totalUsersCount:t.totalCount});case D:return Object(E.a)(Object(E.a)({},e),{},{isFetching:t.isFetching});case M:return Object(E.a)(Object(E.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.userId]):Object(A.a)(e.followingInProgress.filter((function(e){return e!=t.userId})))});default:return e}},X=n(135),Z=Object(X.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),q=function(e){return e.usersPage.pageSize},W=function(e){return e.usersPage.totalUsersCount},B=function(e){return e.usersPage.currentPage},J=function(e){return e.usersPage.isFetching},$=function(e){return e.usersPage.followingInProgress},ee=n(67),te=n(44),ne=n(68),re=n(131),ae=n(71),ce=n.n(ae),se=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,s=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,u=t/n,l=[],d=1;d<=u;d++)l.push(d);var f=Math.ceil(u/o),j=Object(a.useState)(1),b=Object(re.a)(j,2),p=b[0],h=b[1],O=(p-1)*o+1,g=p*o;return Object(r.jsxs)("div",{className:ce.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){h(p-1)},children:"Prev"}),l.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(r.jsx)("span",{className:(Object(ne.a)({},ce.a.selectedPage,c===e),ce.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),f>p&&Object(r.jsx)("button",{onClick:function(){h(p+1)},children:"NEXT"})]})},ie=n(136),oe=n.n(ie),ue=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,c=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:Object(r.jsx)("div",{children:Object(r.jsx)(f.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{className:oe.a.avatar,src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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"})})})}),Object(r.jsx)("span",{children:Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},le=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,c=e.onPageChanged,s=e.users,i=Object(te.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(se,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{children:s.map((function(e){return Object(r.jsx)(ue,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))})]})},de=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(ee.a,{}):null,Object(r.jsx)(le,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),fe=Object(C.d)(S.a,Object(w.b)((function(e){return{users:Z(e),pageSize:q(e),totalUsersCount:W(e),currentPage:B(e),isFetching:J(e),followingInProgress:$(e)}}),{follow:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Q(n,e,N.c.follow.bind(N.c),V);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(k.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Q(n,e,N.c.unfollow.bind(N.c),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:K,toogleIsFollowingInProgress:H,getUsers:function(e,t){return function(){var n=Object(k.a)(P.a.mark((function n(r){var a;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(G(!0)),r(K(e)),n.next=4,N.c.getUsers(e,t);case 4:a=n.sent,r(G(!1)),r((s=a.items,{type:R,users:s})),r((c=a.totalCount,{type:T,totalCount:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(de),je=n(94),be=n.n(je),pe=function(e){return Object(r.jsxs)("header",{className:be.a.header,children:[Object(r.jsx)("img",{src:"https://image.freepik.com/free-vector/cute-cat-unicorn-flying-cartoon-illustration-animal-wildlife-icon-concept_138676-1909.jpg"}),Object(r.jsx)("div",{className:be.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login,"  ",Object(r.jsx)("button",{onClick:e.logOut,children:"log out"})]}):Object(r.jsx)(f.b,{to:"/login",children:"Login"})})]})},he=n(45),Oe="samurai-network/auth/SET_USER_DATA",ge={userId:null,email:null,login:null,isAuth:!1},me=function(e,t,n,r){return{type:Oe,payload:{userId:e,email:t,login:n,isAuth:r}}},ve=function(){return function(){var e=Object(k.a)(P.a.mark((function e(t){var n,r,a,c,s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(me(a,s,c,!0)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(E.a)(Object(E.a)({},e),t.payload);default:return e}},we=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(pe,Object(E.a)({},this.props))}}]),n}(c.a.Component),Ce=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logOut:function(){return function(){var e=Object(k.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.logOut();case 2:0===e.sent.data.resultCode&&t(me(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(we),Se=n(130),ye=n(65),Pe=n(37),ke=n(53),Ae=n.n(ke),Ee=(Object(ye.b)(5),Object(Se.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(Pe.c)("Email","email",[ye.c],Pe.a),Object(Pe.c)("Password","password",[ye.c],Pe.a,{type:"password"}),Object(Pe.c)(null,"rememberMe",[],Pe.a,{type:"checkbox"},"remember me"),n&&Object(r.jsx)("div",{className:Ae.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})}))),Ne=Object(w.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(k.a)(P.a.mark((function r(a){var c,s;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,N.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(ve()):(s=c.data.messages.length>0?c.data.messages[0]:"some error",a(Object(he.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(h.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Ee,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ie="SET_INITIALIZED",Ue={initialized:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(E.a)(Object(E.a)({},e),{},{initialized:!0});default:return e}},Re=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)("div",{children:"loading..."}),children:Object(r.jsx)(e,Object(E.a)({},t))})}},Fe=c.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),Te=c.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),De=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){var e=this;return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(Ce,{}),Object(r.jsx)(p,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(h.b,{path:"/dialogs",render:Re(Fe)}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:Re(Te)}),Object(r.jsx)(h.b,{path:"/users",render:function(){return Object(r.jsx)(fe,{})}}),Object(r.jsx)(h.b,{path:"/login",render:function(){return Object(r.jsx)(Ne,{})}}),Object(r.jsx)(h.b,{path:"/news",component:O}),Object(r.jsx)(h.b,{path:"/music",component:g}),Object(r.jsx)(h.b,{path:"/settings",component:m}),Object(r.jsx)(h.b,{path:"/friends",render:function(){return Object(r.jsx)(x,{friendsData:e.props.state.sidebar.friendsData})}})]})]}):Object(r.jsx)(ee.a,{})}}]),n}(a.Component),Me=Object(C.d)(h.f,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ve());Promise.all([t]).then((function(){e({type:Ie})}))}}}))(De),ze=n(129),Ve=n(97),Le={},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;return e},Ge=n(138),He=n(132),Qe=Object(C.c)({profilePage:Ve.b,messagesPage:ze.b,sidebar:Ke,usersPage:Y,auth:xe,form:He.a,app:_e}),Ye=Object(C.e)(Qe,Object(C.a)(Ge.a));window.store=Ye;var Xe=Ye,Ze=function(){i.a.render(Object(r.jsxs)(f.a,{children:[Object(r.jsx)(w.a,{store:Xe,children:Object(r.jsx)(Me,{})}),","]}),document.getElementById("root"))};Ze(),Xe.subscribe((function(){Ze()}))},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(5),a=n(1),c=n(44),s=(n(0),n(90)),i=n(53),o=n.n(i),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,s=(e.child,Object(c.a)(e,["input","meta","child"])),i=n&&r;return Object(a.jsxs)("div",{className:o.a.formControl+" "+(i?o.a.error:""),children:[Object(a.jsx)("div",{children:s.children}),i&&Object(a.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,c){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},i))," ",o]})}},53:function(e,t,n){e.exports={formControl:"formsControls_formControl__1d0Eg",error:"formsControls_error__1p2uA",formSummaryError:"formsControls_formSummaryError__3vISH"}},65:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"max length is ".concat(e," symbols")}},c=function(e){return function(t){if(t&&t.length<e)return"min length is ".concat(e," symbols")}}},67:function(e,t,n){"use strict";var r=n(1),a=(n(0),n.p+"static/media/preloader.b767aab4.svg");t.a=function(){return Object(r.jsx)("img",{src:a})}},71:function(e,t,n){e.exports={paginator:"paginator_paginator__tCs8I",pageNumber:"paginator_pageNumber__gEfP4",selectedPage:"paginator_selectedPage__Weql7"}},94:function(e,t,n){e.exports={header:"app-header_header__3DpZn",loginBlock:"app-header_loginBlock__1kzHO"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(10),a=n.n(r),c=n(21),s=n(38),i=n(5),o=n(17),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",f={postData:[{id:1,message:"Hi",like:12},{id:2,message:"'It's my first post",like:11}],newPostText:"sss",profile:null,status:""},j=function(e){return{type:u,newPostText:e}},b=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,like:0};return Object(i.a)(Object(i.a)({},e),{},{postData:[].concat(Object(s.a)(e.postData),[n]),newPostText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(5),a=n(1),c=n(28),s=n(29),i=n(31),o=n(30),u=n(0),l=n.n(u),d=n(13),f=n(11),j=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(o.a)(u);function u(){return Object(c.a)(this,u),n.apply(this,arguments)}return Object(s.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(a.jsx)(e,Object(r.a)({},this.props)):Object(a.jsx)(f.a,{to:"/login"})}}]),u}(l.a.Component);return Object(d.b)(j)(t)}},99:function(e,t,n){}},[[294,1,2]]]);
//# sourceMappingURL=main.69462481.chunk.js.map