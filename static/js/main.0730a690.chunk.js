(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{58:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),r=n.n(s),i=n(29),c=n.n(i),o=n(9),u=n(2),j=n(17),l=n.n(j),m=n(30),d=n(11),p=n(12),b=n(14),v=n(13),h=n(31),O=n.n(h),x=n(5),y=n.n(x);n(58);function f(e){var t=e.id,n=e.year,s=e.title,r=e.summary,i=e.poster,c=e.genres;return Object(a.jsx)("div",{className:"movie",children:Object(a.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,genres:c,summary:r,poster:i}},children:[Object(a.jsx)("img",{src:i,alt:s,tilte:s}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"mov_title",children:s}),Object(a.jsx)("h3",{className:"mov_year",children:n}),Object(a.jsx)("ul",{className:"genres",children:c.map((function(e,t){return Object(a.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(a.jsx)("p",{className:"mov_sum",children:r.slice(0,180)})]})]})})}f.prototype={id:y.a.number.isRequired,year:y.a.number.isRequired,title:y.a.string.isRequired,summary:y.a.string.isRequired,poster:y.a.string.isRequired,genres:y.a.arrayOf(y.a.string).isRequired};var g=f,_=(n(62),function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,moives:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:'"Loading"'})}):Object(a.jsx)("div",{className:"movies",children:n.map((function(e){return Object(a.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(r.a.Component));n(63);var N=function(e){return Object(a.jsx)("div",{className:"about__container",children:Object(a.jsx)("span",{children:" Movie make you happy "})})},k=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(a.jsx)("span",{children:e.state.title}):null}}]),n}(r.a.Component);n(64);var q=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",children:"About"})]})};n(65);var w=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(q,{}),Object(a.jsx)(u.a,{path:"/",exact:!0,component:_}),Object(a.jsx)(u.a,{path:"/about",component:N}),Object(a.jsx)(u.a,{path:"/movie/:id",component:k})]})};c.a.render(Object(a.jsx)(w,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.0730a690.chunk.js.map