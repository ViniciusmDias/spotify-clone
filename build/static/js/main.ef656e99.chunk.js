(this["webpackJsonpreact-spotify"]=this["webpackJsonpreact-spotify"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/app-intro-1.60df5f78.jpg"},28:function(e){e.exports=JSON.parse('{"name":"react-spotify","version":"0.1.0","author":"Vin\xedcius Ribeiro Fernandes <https://github.com/viniciusvinna>","private":true,"dependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","history":"^4.10.1","jest-junit":"^10.0.0","lodash":"^4.17.15","node-sass":"^4.14.1","prop-types":"^15.7.2","react":"^16.13.1","react-dom":"^16.13.1","react-icons":"^3.10.0","react-ink":"^6.4.0","react-redux":"^7.2.0","react-router-dom":"^5.2.0","react-scripts":"3.4.1","redux":"^4.0.5","redux-persist":"^6.0.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","submit":"react-scripts test src/__tests__/validation.spec.js --reporters=default --reporters=jest-junit"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"redux-logger":"^3.0.6"}}')},36:function(e,t,a){e.exports=a.p+"static/media/app-intro-2.ac2b9dd2.jpg"},37:function(e,t,a){e.exports=a(64)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(18),s=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(6),l=a(31),i=a(3),u=a(5),E=a(13),m=a(2),p={AUTH_CALLBACK_ERROR:"AUTH_CALLBACK_ERROR",AUTH_CALLBACK_SUCCESS:"AUTH_CALLBACK_SUCCESS"},d={ADD_PLAYER_TRACK:"ADD_PLAYER_TRACK",GET_CATEGORIES_REQUEST:"GET_CATEGORIES_REQUEST",GET_CATEGORIES_SUCCESS:"GET_CATEGORIES_SUCCESS",GET_CATEGORIES_FAILED:"GET_CATEGORIES_FAILED",GET_CATEGORY_PLAYLIST_REQUEST:"GET_CATEGORY_PLAYLIST_REQUEST",GET_CATEGORY_PLAYLIST_SUCCESS:"GET_CATEGORY_PLAYLIST_SUCCESS",GET_CATEGORY_PLAYLIST_FAILED:"GET_CATEGORY_PLAYLIST_FAILED",GET_PLAYLIST_TRACKS_REQUEST:"GET_PLAYLIST_TRACKS_REQUEST",GET_PLAYLIST_TRACKS_SUCCESS:"GET_PLAYLIST_TRACKS_SUCCESS",GET_PLAYLIST_TRACKS_FAILED:"GET_CATEGORY_PLAYLIST_FAILED",REMOVE_PLAYER_TRACK:"REMOVE_PLAYER_TRACK",SET_PLAYER_HEIGHT:"SET_PLAYER_HEIGHT"},_=function(){return{type:d.REMOVE_PLAYER_TRACK}},f={GET_USER_REQUEST:"GET_USER_REQUEST",GET_USER_SUCCESS:"GET_USER_SUCCESS",GET_USER_FAILED:"GET_USER_FAILED",USER_LOGOUT:"USER_LOGOUT"},g=function(){return{type:f.USER_LOGOUT,payload:{}}},b=a(17),T=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],c=t[1],s=Object(i.c)((function(e){return e.auth.isLogged})),o=Object(i.b)(),l=window.location.hash;return Object(n.useEffect)((function(){var e,t,a=function(e){return e?e.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[Object(b.camelCase)(a[0])]=decodeURIComponent(a[1])}return e}),{}):{error:"Acesso negado. Voc\xea n\xe3o possui permiss\xf5es para acessar o aplicativo"}}(l);a.error?o((e=a.error,{type:p.AUTH_CALLBACK_ERROR,payload:e})):o((t=a,{type:p.AUTH_CALLBACK_SUCCESS,payload:Object(m.a)({},t)}))}),[o,l]),Object(n.useEffect)((function(){s&&setTimeout((function(){return c(!0)}),3e3)}),[s]),a?r.a.createElement(u.a,{to:{pathname:"/dashboard"}}):r.a.createElement(ge,null)},h={spotify:{authorizationURL:"https://accounts.spotify.com/authorize",clientId:"4ac48558c5d0421da843b642d630f9e1",redirectUrl:"".concat(window.location.origin,"/authorize"),webAPI:"https://api.spotify.com/v1",scopes:["user-read-email","user-read-private","streaming"]}}.spotify,O={Accept:"application/json","Content-Type":"application/json",method:"GET"},y={getAuthorization:{url:"".concat(h.authorizationURL,"?client_id=").concat(h.clientId).concat(h.scopes?"&scope="+encodeURIComponent(h.scopes):"","&redirect_uri=").concat(encodeURIComponent(h.redirectUrl),"&response_type=token&show_dialog=true"),options:{method:"GET"}},getCategories:{url:"".concat(h.webAPI,"/browse/categories?country=BR&locale=pt_BR"),options:O},getCategoryPlaylists:{url:"".concat(h.webAPI,"/browse/categories/{categoryId}/playlists"),options:O},getPlaylistTracks:{url:"".concat(h.webAPI,"/playlists/{playlistId}/tracks"),options:O},getUserProfile:{url:"".concat(h.webAPI,"/me"),options:O}},S=a(27),v=a.n(S),A=a(33),j=function(){var e=Object(A.a)(v.a.mark((function e(t){var a,n,r=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.length>1&&void 0!==r[1]?r[1]:{},t){e.next=3;break}throw new Error("O par\xe2metro URL \xe9 obrigat\xf3rio");case 3:return n=function(e){if(!e.ok)throw e.status;return e.json()},e.next=6,fetch(t,a).then(n);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e,t){var a=Object.keys(t)[0];return e.replace("{".concat(a,"}"),t[a])},C=(a(49),function(e){var t=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loading"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("p",{className:"loading__text"},t))});C.defaultProps={text:"Carregando..."};var L=C;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var U=function(e){var t=e.svgRef,a=e.title,n=G(e,["svgRef","title"]);return r.a.createElement("svg",I({viewBox:"0 0 558.44 167.5",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M83.75,0A83.75,83.75,0,1,0,167.5,83.75h0A83.74,83.74,0,0,0,83.76,0Zm38.41,120.79a5.22,5.22,0,0,1-7.18,1.73h0c-19.66-12-44.42-14.73-73.57-8.07a5.22,5.22,0,0,1-2.32-10.17c31.9-7.3,59.26-4.16,81.34,9.33A5.23,5.23,0,0,1,122.16,120.79ZM132.41,98a6.52,6.52,0,0,1-9,2.16h0C100.92,86.3,66.6,82.29,40,90.38a6.53,6.53,0,0,1-3.8-12.5h0c30.39-9.23,68.2-4.76,94,11.12a6.52,6.52,0,0,1,2.16,9Zm.88-23.74c-27-16-71.52-17.5-97.29-9.68a7.84,7.84,0,0,1-4.55-15h0c29.58-9,78.76-7.25,109.84,11.2a7.83,7.83,0,1,1-8,13.47Z",style:{fill:"#00f387"}}),r.a.createElement("path",{d:"M227.85,77.31c-14.46-3.45-17-5.87-17-11,0-4.81,4.53-8,11.25-8,6.52,0,13,2.46,19.77,7.51a.94.94,0,0,0,.71.17.92.92,0,0,0,.63-.38l7.06-10a1,1,0,0,0-.18-1.29,42.72,42.72,0,0,0-27.77-9.62c-15.62,0-26.52,9.37-26.52,22.77,0,14.38,9.41,19.47,25.66,23.4,13.84,3.18,16.17,5.85,16.17,10.63,0,5.28-4.72,8.57-12.32,8.57-8.44,0-15.32-2.84-23-9.51a1.05,1.05,0,0,0-.7-.23,1,1,0,0,0-.65.34l-8,9.48a.94.94,0,0,0,.09,1.31A47.19,47.19,0,0,0,225,123.69c16.83,0,27.7-9.2,27.7-23.42C252.65,88.24,245.46,81.59,227.85,77.31Z",style:{fill:"#00f387"}}),r.a.createElement("path",{d:"M290.71,63.05c-7.29,0-13.28,2.87-18.21,8.76V65.18a1,1,0,0,0-.94-1H258.61a1,1,0,0,0-1,1v73.6a1,1,0,0,0,1,.95h12.95a.94.94,0,0,0,.94-.94h0V115.55a23.27,23.27,0,0,0,18.21,8.24c13.55,0,27.26-10.43,27.26-30.37S304.26,63.05,290.71,63.05Zm12.21,30.37c0,10.16-6.25,17.24-15.21,17.24s-15.53-7.41-15.53-17.24,6.68-17.23,15.53-17.23S302.92,83.43,302.92,93.42Z",style:{fill:"#00f387"}}),r.a.createElement("path",{d:"M353.13,63.05C335.68,63.05,322,76.49,322,93.64c0,17,13.58,30.27,30.91,30.27,17.51,0,31.22-13.4,31.22-30.49S370.52,63.05,353.13,63.05Zm0,47.72c-9.28,0-16.28-7.46-16.28-17.35s6.76-17.13,16.07-17.13,16.38,7.46,16.38,17.35S362.5,110.77,353.13,110.77Z",style:{fill:"#00f387"}}),r.a.createElement("path",{d:"M421.4,64.23H407.15V49.67a1,1,0,0,0-.88-1h-13a1,1,0,0,0-.95,1V64.23h-6.22a1,1,0,0,0-.94,1V76.31a1,1,0,0,0,.94,1h6.22V106.1c0,11.63,5.8,17.53,17.22,17.53a23.69,23.69,0,0,0,12.13-3,1,1,0,0,0,.47-.83V109.15a1,1,0,0,0-.95-1,1,1,0,0,0-.42.1,16.36,16.36,0,0,1-7.6,1.83c-4.15,0-6-1.88-6-6.11V77.26h14.25a1,1,0,0,0,.95-1V65.18A1,1,0,0,0,421.4,64.23Z",style:{fill:"#00f387"}}),r.a.createElement("path",{d:"M471,64.29V62.5c0-5.26,2-7.61,6.54-7.61a21.94,21.94,0,0,1,7.3,1.35,1,1,0,0,0,.85-.13,1,1,0,0,0,.39-.77V44.43a1,1,0,0,0-.67-.91A35.16,35.16,0,0,0,474.69,42c-12,0-18.28,6.73-18.28,19.47v2.74h-6.22a1,1,0,0,0-.95,1V76.31a1,1,0,0,0,.95,1h6.22v44.41a1,1,0,0,0,1,1h12.94a1,1,0,0,0,.95-1V77.26h12.09l18.52,44.4c-2.1,4.66-4.17,5.59-7,5.59a14.82,14.82,0,0,1-7.14-2,1.06,1.06,0,0,0-.76-.07,1,1,0,0,0-.56.51l-4.44,9.6a.94.94,0,0,0,.4,1.23,27.23,27.23,0,0,0,13.83,3.54c9.56,0,14.84-4.46,19.5-16.44l22.46-58a.92.92,0,0,0-.1-.88,1,1,0,0,0-.78-.41H523.87a1,1,0,0,0-.9.64L509.16,104.4,494,64.9a.94.94,0,0,0-.88-.61Z",style:{fill:"#00f387"}}),r.a.createElement("rect",{x:428.37,y:64.23,width:14.84,height:58.38,rx:.95,style:{fill:"#00f387"}}),r.a.createElement("path",{d:"M435.86,38.51a9.29,9.29,0,1,0,9.28,9.3h0A9.31,9.31,0,0,0,435.86,38.51Z",style:{fill:"#00f387"}}),r.a.createElement("path",{d:"M549.28,82.39a9.14,9.14,0,1,1,9.16-9.16A9.14,9.14,0,0,1,549.28,82.39Zm0-17.36a8.23,8.23,0,1,0,8.16,8.3v-.1A8.13,8.13,0,0,0,549.39,65h-.07Zm2,9.14,2.58,3.61h-2.17l-2.32-3.31h-2v3.31h-1.81V68.21h4.26c2.22,0,3.68,1.14,3.68,3.05a2.85,2.85,0,0,1-2.16,2.91Zm-1.53-4.32h-2.38v3h2.38c1.18,0,1.89-.58,1.89-1.52s-.63-1.48-1.83-1.48Z",style:{fill:"#00f387"}}))))))},N=r.a.forwardRef((function(e,t){return r.a.createElement(U,I({svgRef:t},e))})),k=(a.p,function(){return r.a.createElement(N,{className:"spotify-brand"})}),w=a(34),P=(a(50),function(e){var t=e.categoryName,a=e.path;return r.a.createElement("div",{className:"route-header","data-testid":"route-header"},r.a.createElement("div",{className:"route-header__title-group"},r.a.createElement(o.b,{to:a,className:"back-button"},r.a.createElement(w.a,null)),r.a.createElement("span",{className:"route-header__title"},t)))});P.defaultProps={path:"/dashboard"};var Y=P,x=(a(51),function(e){var t=e.name;return r.a.createElement("div",{className:"welcome-box","data-testid":"welcome-box"},r.a.createElement("div",{className:"container"},r.a.createElement("span",null,"Bem vindo ",r.a.createElement("strong",null,t))))});x.defaultProps={name:""};var D=x,K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e&&0===t.length)return"";var a=t.find((function(t){return e===t.id}))||"",n=a.name,r=void 0===n?"":n;return r},M=y.getCategoryPlaylists,H=function(e){var t=e.path,a=Object(i.c)((function(e){return e})),c=a.auth,s=a.content,o=Object(i.b)(),l=Object(u.g)().categoryId;return Object(n.useEffect)((function(){var e=Object(m.a)(Object(m.a)({},M.options),{},{headers:{Authorization:"Bearer ".concat(c.accessToken)}});o({type:d.GET_CATEGORY_PLAYLIST_REQUEST}),j(R(M.url,{categoryId:l}),e).then((function(e){return o(function(e){var t=e.playlists;return{type:d.GET_CATEGORY_PLAYLIST_SUCCESS,payload:t.items}}(e))})).catch((function(e){o(401!==e?function(e){var t=e.message;return{type:d.GET_CATEGORY_PLAYLIST_FAILED,payload:{message:t}}}(e):g())}))}),[c,l,o]),r.a.createElement(Ge,{categoryId:l,categoryName:K(l,s.categories),data:s.playlists,isLoading:"running"===s.status&&0===s.playlists.length,path:t})},V=y.getPlaylistTracks,B=function(e){var t=e.path,a=Object(i.c)((function(e){return e})),c=a.auth,s=a.content,o=Object(i.b)(),l=Object(u.g)().playlistId;return Object(n.useEffect)((function(){var e=Object(m.a)(Object(m.a)({},V.options),{},{headers:{Authorization:"Bearer ".concat(c.accessToken)}});o({type:d.GET_PLAYLIST_TRACKS_REQUEST}),j(R(V.url,{playlistId:l}),e).then((function(e){return o(function(e){var t=e.items;return{type:d.GET_PLAYLIST_TRACKS_SUCCESS,payload:t}}(e))})).catch((function(e){o(401!==e?function(e){var t=e.message;return{type:d.GET_PLAYLIST_TRACKS_FAILED,payload:{message:t}}}(e):g())}))}),[c,l,o]),r.a.createElement(Pe,{categoryName:K(l,s.playlists),data:s.tracks,isLoading:"running"===s.status,path:t})},F=y.getCategories,Q=y.getUserProfile,Z=function(){var e=Object(i.c)((function(e){return e})),t=e.auth,a=e.content,c=e.user,s=Object(u.h)(),o=s.path,l=s.url,E=Object(i.b)();return Object(n.useEffect)((function(){var e=Object(m.a)(Object(m.a)({},Q.options),{},{headers:{Authorization:"Bearer ".concat(t.accessToken)}});E({type:f.GET_USER_REQUEST}),j(Q.url,e).then((function(e){return E(function(e){var t={email:e.email,name:e.display_name,thumb:e.images.length?e.images[0].url:""};return{type:f.GET_USER_SUCCESS,payload:Object(m.a)({},t)}}(e))})).catch((function(e){E(401!==e?function(e){var t=e.message;return{type:f.GET_USER_FAILED,payload:{message:t}}}(e):g())}))}),[t,E]),Object(n.useEffect)((function(){var e=Object(m.a)(Object(m.a)({},F.options),{},{headers:{Authorization:"Bearer ".concat(t.accessToken)}});E({type:d.GET_CATEGORIES_REQUEST}),j(F.url,e).then((function(e){return E(function(e){var t=e.categories;return{type:d.GET_CATEGORIES_SUCCESS,payload:t.items}}(e))})).catch((function(e){E(401!==e?function(e){var t=e.message;return{type:d.GET_CATEGORIES_FAILED,payload:{message:t}}}(e):g())}))}),[t,E]),r.a.createElement(ve,null,r.a.createElement(Ne,null),r.a.createElement(u.d,null,r.a.createElement(Ue,{exact:!0,path:o},r.a.createElement(D,{name:c.name}),r.a.createElement(ye,{isLoading:"running"===a.status&&0===a.categories.length,data:a.categories,url:l})),r.a.createElement(Ue,{exact:!0,path:"".concat(o,"/:categoryId")},r.a.createElement(H,{path:o})),r.a.createElement(Ue,{exact:!0,path:"".concat(o,"/:categoryId/:playlistId")},r.a.createElement(B,null))))},z=function(){return r.a.createElement(Re,null)},W=function(){return r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:z}),r.a.createElement(u.b,{exact:!0,path:"/authorize",component:T}),r.a.createElement(Ue,{path:"/dashboard",comp:Z}))},X=a(11),J=a(29),$=a(35),q=a.n($),ee=a(28),te={environment:"production",name:ee.name,version:ee.version},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te;return e},ne={accessToken:"",errorMessage:"",expirationTime:"",expiresIn:"",isLogged:!1,tokenType:""},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case p.AUTH_CALLBACK_ERROR:return Object(m.a)(Object(m.a)({},e),{},{accessToken:"",errorMessage:n,expiresIn:"",isLogged:!1,tokenType:""});case p.AUTH_CALLBACK_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{accessToken:n.accessToken,errorMessage:"",expirationTime:(new Date).getTime()+parseInt(n.expiresIn),expiresIn:n.expiresIn,isLogged:!0,tokenType:n.tokenType});default:return e}},ce={categories:[],playlists:[],tracks:[],playingNowId:null,playingNowTrack:null,playerHeight:0,status:"idle",errorMessage:""},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case d.ADD_PLAYER_TRACK:return Object(m.a)(Object(m.a)({},e),{},{playingNowId:n.id,playingNowTrack:n});case d.GET_CATEGORIES_REQUEST:return Object(m.a)(Object(m.a)({},e),{},{categories:[],status:"running"});case d.GET_CATEGORIES_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{errorMessage:"",categories:n,status:"success"});case d.GET_CATEGORIES_FAILED:return Object(m.a)(Object(m.a)({},e),{},{categories:[],errorMessage:n.message,status:"error"});case d.GET_CATEGORY_PLAYLIST_REQUEST:return Object(m.a)(Object(m.a)({},e),{},{playlists:[],status:"running"});case d.GET_CATEGORY_PLAYLIST_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{errorMessage:"",playlists:n,status:"success"});case d.GET_CATEGORY_PLAYLIST_FAILED:return Object(m.a)(Object(m.a)({},e),{},{errorMessage:n.message,playlists:[],status:"error"});case d.GET_PLAYLIST_TRACKS_REQUEST:return Object(m.a)(Object(m.a)({},e),{},{tracks:[],status:"running"});case d.GET_PLAYLIST_TRACKS_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{errorMessage:"",tracks:n.filter((function(e){return e.track})),status:"success"});case d.GET_PLAYLIST_TRACKS_FAILED:return Object(m.a)(Object(m.a)({},e),{},{tracks:[],errorMessage:n.message,status:"error"});case d.REMOVE_PLAYER_TRACK:return Object(m.a)(Object(m.a)({},e),{},{playingNowId:null,playingNowTrack:null,playerHeight:0});case d.SET_PLAYER_HEIGHT:return Object(m.a)(Object(m.a)({},e),{},{playerHeight:n});default:return e}},oe={email:"",errorMessage:"",name:"",status:"idle",thumb:""},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case f.GET_USER_REQUEST:return Object(m.a)(Object(m.a)({},e),{},{status:"running"});case f.GET_USER_SUCCESS:return Object(m.a)(Object(m.a)(Object(m.a)({},e),n),{},{status:"success"});case f.GET_USER_FAILED:return Object(m.a)(Object(m.a)({},e),{},{errorMessage:n.message,status:"error"});default:return e}},ie=Object(X.b)({app:ae,auth:re,content:se,user:le}),ue={key:"spotifyStorage",storage:q.a,blacklist:["auth","content"]},Ee=Object(J.a)(ue,(function(e,t){return t.type===f.USER_LOGOUT&&(e=void 0),ie(e,t)})),me=Object(X.c)(Ee,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),pe=Object(J.b)(me),de=(a(54),function(){return r.a.createElement(i.a,{store:me},r.a.createElement(l.a,{persistor:pe},r.a.createElement("div",{className:"app","data-testid":"app"},r.a.createElement(o.a,null,r.a.createElement(W,null)))))}),_e=a(20),fe=a.n(_e),ge=(a(55),function(){return r.a.createElement("div",{className:"callback","data-testid":"callback",style:{backgroundImage:"url(".concat(fe.a,")")}},r.a.createElement("div",{className:"container"},r.a.createElement(L,{text:"Autenticando..."})))}),be=a(12),Te=a.n(be),he=function(e){var t=e.id,a=e.icon,n=e.name,c=e.url;return r.a.createElement("div",{className:"categories__item",style:{backgroundImage:"url(".concat(a.url,")")}},r.a.createElement(o.b,{to:"".concat(c,"/").concat(t),className:"categories__item__link"},r.a.createElement("span",{className:"categories__item__title"},n),r.a.createElement(Te.a,null)))},Oe=(a(56),function(e){var t=e.data,a=e.isLoading,n=e.url;return r.a.createElement("div",{className:"categories","data-testid":"categories"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"categories__title"},"Categorias"),a?r.a.createElement(L,{text:"Carregando..."}):r.a.createElement("div",{className:"categories__content"},t.length&&t.map((function(e){return r.a.createElement(he,{icon:e.icons[0],id:e.id,key:e.id,name:e.name,url:n})})))))});Oe.defaultProps={isLoading:!1};var ye=Oe,Se=(a(57),function(e){var t=e.children,a=Object(i.c)((function(e){return e.content.playerHeight}));return r.a.createElement("div",{className:"dashboard","data-testid":"dashboard",style:{paddingBottom:"".concat(a,"px")}},t,r.a.createElement(Le,null))});Se.defaultProps={children:[]};var ve=Se,Ae=a(36),je=a.n(Ae),Re=(a(58),function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],c=t[1],s=function(e){e.target.innerWidth<=768?c(!0):c(!1)};Object(n.useEffect)((function(){return window.addEventListener("resize",Object(b.debounce)(s,250)),function(){window.removeEventListener("resize",Object(b.debounce)(s))}}),[]);var o=window.innerWidth;return r.a.createElement("main",{className:"login","data-testid":"login",style:{backgroundImage:"url(".concat(a||o<=768?fe.a:je.a,")")}},r.a.createElement("div",{className:"container"},r.a.createElement(k,null),r.a.createElement("h2",{className:"login__microcopy"},"N\xe3o toca a m\xfasica inteira,",r.a.createElement("strong",null," mas toca o seu ",r.a.createElement("span",{role:"img",className:"login__microcopy__heart","aria-label":"Cora\xe7\xe3o"},"\u2764\ufe0f"))),r.a.createElement("a",{href:y.getAuthorization.url,className:"login__auth-button"},"Entrar com Spotify",r.a.createElement(Te.a,null))))}),Ce=a(15),Le=(a(59),function(){var e,t,a,c=Object(n.useState)(null),s=Object(E.a)(c,2),o=s[0],l=s[1],u=Object(i.c)((function(e){return e.content.playingNowId})),m=Object(i.c)((function(e){return e.content.playingNowTrack})),p=Object(i.b)(),f=Object(n.useState)(!0),g=Object(E.a)(f,2),b=g[0],T=g[1],h=Object(n.useState)("0%"),O=Object(E.a)(h,2),y=O[0],S=O[1],v=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e}),[e]),t.current}(u),A=Object(n.useRef)(null),j=Object(n.useRef)(null),R=(null===j||void 0===j||null===(e=j.current)||void 0===e?void 0:e.offsetHeight)||0;return Object(n.useEffect)((function(){u!==v&&l(m)}),[u,v,m]),Object(n.useEffect)((function(){var e=A.current;v===u?(b&&(null===e||void 0===e?void 0:e.paused)&&e.play(),b||(null===e||void 0===e?void 0:e.paused)||e.pause()):T(!0)}),[b,u,v]),Object(n.useEffect)((function(){R>0&&p({type:d.SET_PLAYER_HEIGHT,payload:R})}),[b,p,R]),r.a.createElement("div",{ref:j,className:"player ".concat(o?"is-playing":""),"data-testid":"player"},o&&r.a.createElement("div",{className:"player__wrapper"},r.a.createElement("div",{className:"player__progress-bar"},r.a.createElement("div",{className:"player__progress-bar__stroke",style:{width:"".concat(y)}})),r.a.createElement("div",{className:"container"},r.a.createElement("figure",{className:"player__album-cover",style:{backgroundImage:"url(".concat((null===(t=o.album)||void 0===t||null===(a=t.images[1])||void 0===a?void 0:a.url)||"",")")}}),r.a.createElement("div",{className:"player__status"},r.a.createElement("div",{className:"player__artist"},r.a.createElement("span",{className:"player__music"},o.name),r.a.createElement("span",{className:"player__artists"},o.artists&&o.artists.map((function(e){return e.name})).join(", ")),r.a.createElement("div",{className:"player__status__current ".concat(b?"is-playing":"")},r.a.createElement("span",null,"Pausado"),r.a.createElement("span",null,"Reproduzindo")))),r.a.createElement("div",{className:"player__controls",onClick:function(){var e=A.current;b&&!e.paused?T(!1):!b&&e.paused&&T(!0)}},r.a.createElement("div",{className:"player__control ".concat(b?"":"is-paused")},b?r.a.createElement(Ce.a,null):r.a.createElement(Ce.b,null),r.a.createElement(Te.a,null)))),r.a.createElement("audio",{ref:A,autoPlay:!0,onEnded:function(){p(_())},onTimeUpdate:function(){var e=A.current,t=Math.floor(e.currentTime/e.duration*100)+"%";S(t)},preload:"metadata",src:o.preview_url})))}),Ie=a(21),Ge=function(e){var t=e.comp,a=Object(Ie.a)(e,["comp"]),n=Object(i.c)((function(e){return e.auth.isLogged}));return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/"})}}))},Ue=function(e){var t=e.comp,a=Object(Ie.a)(e,["comp"]),n=Object(i.c)((function(e){return e.auth.isLogged}));return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/"})}}))},Ne=(a(60),function(){var e=Object(i.c)((function(e){return e.user}));return r.a.createElement("header",{className:"topbar","data-testid":"topbar"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{to:"/dashboard"},r.a.createElement(k,null)),r.a.createElement("div",{className:"user"},r.a.createElement("span",{className:"user__name"},e.name),r.a.createElement("figure",{className:"user__thumb"},r.a.createElement("img",{src:e.thumb,alt:"foto de perfil de ".concat(e.name)})))))}),ke=(a(61),function(e){var t=e.track,a=Object(i.c)((function(e){return e.content.playingNowId})),c=Object(n.useState)(!1),s=Object(E.a)(c,2),o=s[0],l=s[1],u=Object(i.b)();return Object(n.useEffect)((function(){a!==t.id&&l(!1)}),[a,t.id]),r.a.createElement("div",{className:"track ".concat(o&&"is-playing"),onClick:function(){if(o&&a===t.id)return l(!1),void u(_());u(function(e){return{type:d.ADD_PLAYER_TRACK,payload:e}}(t)),l(!o)}},r.a.createElement("div",{className:"track__play"},r.a.createElement("div",{className:"track__play__wrapper"},r.a.createElement(Ce.b,{className:"track__play__icon"}),r.a.createElement(Ce.c,{className:"track__play__icon"}))),r.a.createElement("div",{className:"track__info"},r.a.createElement("span",{className:"track__name"},t.name),r.a.createElement("span",{className:"track__artists"},t.artists.length&&t.artists.map((function(e){return e.name})).join(", "))),r.a.createElement(Te.a,null))}),we=(a(62),function(e){var t=e.categoryName,a=e.data,n=e.isLoading,c=e.path;return r.a.createElement("div",{className:"tracks","data-testid":"tracks"},r.a.createElement("div",{className:"container"},r.a.createElement(Y,{categoryName:t,path:c}),n?r.a.createElement(L,{text:"Carregando tracks..."}):r.a.createElement("div",{className:"tracks__content"},a.length&&a.map((function(e,t){var a=e.track;return r.a.createElement(ke,{key:"".concat(t," - ").concat(a.id),track:a})})))))});we.defaultProps={isLoading:!1};var Pe=we;a(63);s.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ef656e99.chunk.js.map