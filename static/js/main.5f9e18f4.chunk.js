(this.webpackJsonpclonenetflix=this.webpackJsonpclonenetflix||[]).push([[0],{53:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),c=n.n(s),i=n(4),o=n.n(i),l=n(6),u=n(5),d=n(24),j=n.n(d),m="2eabc78d837c127ef746b130b69eb798",b=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(m));case 2:return e.t0=e.sent,e.t1={slug:"orginals",title:"Originais Netflix",items:e.t0},e.next=6,b("/trending/all/week?&language=pt-BR&api_key=".concat(m));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para voce",items:e.t2},e.next=10,b("/movie/top_rated?&language=pt-BR&api_key=".concat(m));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em alta",items:e.t4},e.next=14,b("/discover/tv?with_genres=28&language=pt-BR&api_key=".concat(m));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,b("/discover/tv?with_genres=35&language=pt-BR&api_key=".concat(m));case 18:return e.t8=e.sent,e.t9={slug:"comedia",title:"Com\xe9dia",items:e.t8},e.next=22,b("/discover/tv?with_network=27&language=pt-BR&api_key=".concat(m));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,b("/discover/tv?with_genres=10749&language=pt-BR&api_key=".concat(m));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,b("/discover/tv?with_genres=99&language=pt-BR&api_key=".concat(m));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rio",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={},!t){e.next=15;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,b("/movie/".concat(t,"?language=pt-BR&api_key=").concat(m));case 7:case 11:return a=e.sent,e.abrupt("return",a);case 9:return e.next=11,b("/tv/".concat(t,"?language=pt-BR&api_key=").concat(m));case 13:return a=null,e.abrupt("break",15);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},g=h,f=(n(53),n(27)),p=n.n(f),v=n(25),x=n.n(v),O=n(1),w=function(e){var t=e.title,n=e.items,r=Object(a.useState)(-400),s=Object(u.a)(r,2),c=s[0],i=s[1];return Object(O.jsxs)("div",{className:"movieRow",children:[Object(O.jsx)("h2",{children:t}),Object(O.jsx)("div",{className:"movie-row--left",children:Object(O.jsx)(x.a,{style:{fontSize:50},onClick:function(){var e=c+Math.round(window.innerWidth/2);e>0&&(e=0),i(e)}})}),Object(O.jsx)("div",{className:"movie-row--right",children:Object(O.jsx)(p.a,{style:{fontSize:50},onClick:function(){var e=c-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),i(e)}})}),Object(O.jsx)("div",{className:"movie-row--listarea",children:Object(O.jsx)("div",{className:"movie-row--list",style:{marginLeft:c,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(O.jsx)("div",{className:"movieRow--item",children:Object(O.jsx)("img",{src:"http://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:e.original_title})},t)}))})})]})},k=(n(60),n(61),function(e){var t=e.item,n=new Date(t.first_air_date),a=[];for(var r in t.genres)a.push(t.genres[r].name);return Object(O.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(http://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(O.jsx)("div",{className:"featured--vertical",children:Object(O.jsxs)("div",{className:"featured--horizontal",children:[Object(O.jsx)("div",{className:"featured--name",children:t.original_name}),Object(O.jsxs)("div",{className:"featured--info",children:[Object(O.jsxs)("div",{className:"featured--points",children:[" ",t.vote_average," pontos"]}),Object(O.jsxs)("div",{className:"featured--year",children:[" ",n.getFullYear()]}),Object(O.jsxs)("div",{className:"featured--seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]})]}),Object(O.jsx)("div",{className:"featured--description",children:t.overview}),Object(O.jsxs)("div",{className:"featured--buttons",children:[Object(O.jsx)("a",{href:"/watch/".concat(t.id),className:"featured--watchbutton",children:"\u25ba Assistir"}),Object(O.jsx)("a",{href:"/list/add/".concat(t.id),className:"featured--mylistbutton",children:"+ Minha Lista"})]}),Object(O.jsxs)("div",{className:"featured--genres",children:[Object(O.jsx)("strong",{children:"G\xeaneros:"}),a.join(",")]})]})})})}),_=(n(62),function(e){var t=e.black;return Object(O.jsxs)("header",{className:t?"black":"",children:[Object(O.jsx)("div",{className:"header--logo",children:Object(O.jsx)("a",{href:"/",children:Object(O.jsx)("img",{alt:"logo",src:"https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"})})}),Object(O.jsx)("div",{className:"header--user",children:Object(O.jsx)("a",{href:"/",children:Object(O.jsx)("img",{alt:"user",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"})})})]})}),N=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),c=Object(u.a)(s,2),i=c[0],d=c[1],j=Object(a.useState)(!0),m=Object(u.a)(j,2),b=m[0],h=m[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getHomeList();case 2:return t=e.sent,r(t),n=t.filter((function(e){return"orginals"===e.slug})),a=Math.floor(Math.random()*n[0].items.results.length-1),s=n[0].items.results[a],e.next=9,g.getMovieInfo(s.id,"tv");case 9:c=e.sent,d(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(a.useEffect)((function(){var e=function(){window.scrollY>10?h(!0):h(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(O.jsxs)("div",{className:"page",children:[Object(O.jsx)(_,{black:b}),i&&Object(O.jsx)(k,{item:i}),Object(O.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(O.jsx)(w,{title:e.title,items:e.items},t)}))}),Object(O.jsxs)("footer",{children:["Feito com"," ",Object(O.jsx)("span",{role:"img","aria-label":"coracao",children:"\u2665"})," ","por Mariola"]}),n.length<=0&&Object(O.jsx)("div",{className:"loading",children:Object(O.jsx)("img",{alt:"loading",src:"https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"})})]})};c.a.render(Object(O.jsx)(r.a.StrictMode,{enable:!1,children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.5f9e18f4.chunk.js.map