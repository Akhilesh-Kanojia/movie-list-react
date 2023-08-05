(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{24:function(e,t){e.exports={APIKeys:"170f4bad"}},44:function(e,t,c){},45:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(19),s=c.n(r),i=(c(44),c(4)),o=c(5),l=c(7),j=c(6),d=(c.p,c(45),c(13)),b="SEARCH_MOVIE",u="FETCH_MOVIES",h="FETCH_MOVIE",p="LOADING",m=c(23),O=c.n(m),v=c(24),f=function(){return{type:p}},x=c(1),g=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onChange=function(t){e.props.searchMovie(t.target.value)},e.onSubmit=function(t){t.preventDefault(),e.props.fetchMovies(e.props.text),e.props.setLoading()},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"input-group rounded d-flex justify-content-end",children:Object(x.jsxs)("form",{id:"searchForm",onSubmit:this.onSubmit,children:[Object(x.jsx)("input",{type:"search",name:"searchText",className:"form-control input",placeholder:"Search Movies, TV Series..","aria-label":"Search","aria-describedby":"search-addon",onChange:this.onChange}),Object(x.jsx)("button",{type:"submit",className:"btn btn-default border-0",id:"search-addon",children:Object(x.jsx)("i",{className:"fa fa-search"})})]})})}}]),c}(n.Component),y=Object(d.b)((function(e){return{text:e.finalMovies.text}}),{searchMovie:function(e){return function(t){t({type:b,payload:e})}},fetchMovies:function(e){return function(t){O.a.get("http://www.omdbapi.com/?apikey=".concat(v.APIKeys,"&s=").concat(e)).then((function(e){return t({type:u,payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:f})(g);var N=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("a",{className:"navbar-brand",href:"#",children:Object(x.jsx)("i",{className:"fa fa-film"})}),Object(x.jsx)("div",{id:"navbarNav",children:Object(x.jsx)(y,{})})]})})})};var M=function(){return Object(x.jsx)("footer",{className:"page-footer font-small blue",style:{position:"fixed",bottom:"0",width:"100%",background:"#ccc",zIndex:"999"},children:Object(x.jsxs)("div",{className:"footer-copyright text-center py-2",children:["\xa9 2020 Copyright:",Object(x.jsx)("a",{href:"https://mdbootstrap.com/",target:"_blank",rel:"noopener noreferrer",children:" searchMovie.com"})]})})},k=c(16),w=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.movie;return Object(x.jsx)("div",{className:"col-md-3 mb-3 mt-3",children:Object(x.jsxs)("div",{className:"card card-body bg-dark text-center h-100 d-flex flex-column flex-grow-1",children:[Object(x.jsx)("img",{src:e.Poster,className:"card-img-top",alt:"Movie Cover"}),Object(x.jsxs)("div",{className:"content-wraper",children:[Object(x.jsxs)("h5",{className:"text-light card-title",children:[e.Title," - ",e.Year]}),Object(x.jsxs)(k.b,{className:"btn btn-primary",to:"/movie/".concat(e.imdbID),children:["Movie Detail ",Object(x.jsx)("i",{className:"fa fa-chevron-right"})]})]})]})})}}]),c}(n.Component),C=c.p+"static/media/404.d1a6bb86.png",I=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"text-center col-md-12 notFound",children:Object(x.jsx)("img",{src:C})})}}]),c}(n.Component),S=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e,t=this.props.movies;return e="True"==t.Response?t.Search.map((function(e,t){return Object(x.jsx)(w,{movie:e},t)})):"False"==t.Response?Object(x.jsx)(I,{}):null,Object(x.jsx)("div",{className:"row movieWrapper",children:e})}}]),c}(n.Component),T=Object(d.b)((function(e){return{movies:e.finalMovies.movies}}))(S),A=c.p+"static/media/spinner.46f8b838.gif";var D=function(){return Object(x.jsx)("div",{className:"spinner",children:Object(x.jsx)("img",{src:A,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},R=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.loading;return Object(x.jsx)("div",{className:"container-fluid",children:e?Object(x.jsx)(D,{}):Object(x.jsx)(T,{})})}}]),c}(n.Component),E=Object(d.b)((function(e){return{loading:e.finalMovies.loading}}))(R),F=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.movie,c=e.loading,n=Object(x.jsx)(a.a.Fragment,{children:Object(x.jsxs)("div",{className:"container mt-2",children:[Object(x.jsx)("div",{className:"row back",children:Object(x.jsxs)(k.b,{to:"/",className:"back-search",children:[Object(x.jsx)("i",{className:"fa fa-chevron-left"})," Back To Search"]})}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"card card-body col-md-4",children:Object(x.jsx)("img",{src:t.Poster,className:"thumbnail",alt:"Poster"})}),Object(x.jsxs)("div",{className:"col-md-8",children:[Object(x.jsx)("h2",{className:"mb-4",children:t.Title}),Object(x.jsxs)("ul",{className:"list-group",children:[Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Genre: "})," ",t.Genre]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Released: "})," ",t.Released]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Rated: "})," ",t.Rated]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Director: "})," ",t.Director]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Actor: "})," ",t.Actors]})]})]})]})]})}),r=c?Object(x.jsx)(D,{}):n;return Object(x.jsx)("div",{className:"movieInfo",children:r})}}]),c}(n.Component),L=Object(d.b)((function(e){return{loading:e.finalMovies.loading,movie:e.finalMovies.movie}}),{fetchMovie:function(e){return function(t){O.a.get("http://www.omdbapi.com/?apikey=".concat(v.APIKeys,"&i=").concat(e)).then((function(e){return t({type:h,payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:f})(F),P=c(15),V=c(38),_=c(39),G=c(14),H={text:"",movies:[],loading:!1,movie:[]},K=Object(P.combineReducers)({finalMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(G.a)(Object(G.a)({},e),{},{text:t.payload,loading:!1});case u:return Object(G.a)(Object(G.a)({},e),{},{movies:t.payload,loading:!1});case h:return Object(G.a)(Object(G.a)({},e),{},{movie:t.payload,loading:!1});case p:return Object(G.a)(Object(G.a)({},e),{},{loading:!0});default:return e}}}),B=[V.a],J=Object(P.createStore)(K,{},Object(_.composeWithDevTools)(P.applyMiddleware.apply(void 0,B))),W=c(3),z=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(x.jsx)(d.a,{store:J,children:Object(x.jsx)(k.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(N,{}),Object(x.jsx)(W.a,{exact:!0,component:E,path:"/"}),Object(x.jsx)(W.a,{exact:!0,component:L,path:"/movie/:id"}),Object(x.jsx)(M,{})]})})})}}]),c}(n.Component);s.a.render(Object(x.jsx)(z,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.4d9ac857.chunk.js.map