(this["webpackJsonpgallery-api"]=this["webpackJsonpgallery-api"]||[]).push([[0],{45:function(e,t,a){e.exports=a(76)},50:function(e,t,a){},51:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),s=a(21),n=a.n(s),r=(a(50),a(51),a(3)),c=a(17),o=a(4),m=a(5),u=a(7),p=a(6),h=(a(52),a(15)),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark secondary-color-dark"},i.a.createElement("div",{className:"container"},i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampleNav","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"basicExampleNav"},i.a.createElement("ul",{className:"navbar-nav mx-auto mr-auto manav-ul"},i.a.createElement("li",{className:"nav-item active mx-2 "},i.a.createElement(r.b,{className:"nav-link",to:"/home"}," ",i.a.createElement("span",{className:"logo"},"MirrorMedia")," "),i.a.createElement("span",{className:"sr-only "})),i.a.createElement("li",{className:"nav-item active mx-2 vide"},i.a.createElement("span",{className:"sr-only "})),i.a.createElement("li",{className:"nav-item active mx-2"},i.a.createElement(r.b,{className:"nav-link",to:"/home"}," Home "),i.a.createElement("span",{className:"sr-only"},"(current)")),i.a.createElement("li",{className:"nav-item mx-2"},i.a.createElement(r.b,{className:"nav-link",to:"/favoris"},"My favourites",i.a.createElement("span",{className:"badge badge-success badge-pill mr-1 nb-fav"},this.props.films.length))))))))}}]),a}(l.Component),f=Object(h.b)((function(e){return{films:e.films}}))(d),v=a(44),g=a(8),E=a(9),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).clickCollapseCard=function(){l.props.clickCollapse(l.props.film),console.log(l.props.film)},l.clickAjouterFilmFav=function(){l.setState((function(e){return{isFavorite:!l.state.isFavorite}}),(function(){return l.props.ajouterFilmFavDispatch(l.props.film)}))},l.clickSuppFilmFav=function(){l.setState((function(e){return{isFavorite:!l.state.isFavorite}}),(function(){return l.props.supprimeFilmFavDispatch(l.props.film)}))},l.state={urlCover:"http://api.themoviedb.org/3/search/movie?api_key=369db2052a84d1a49d133d25a3983cbd&query=",urlImage:"https://image.tmdb.org/t/p/original/",isFavorite:!1},l}return Object(m.a)(a,[{key:"verifFavorite",value:function(){var e=this;this.props.films.map((function(t){t.id===e.props.film.id&&e.setState((function(e){return{isFavorite:!0}}))}))}},{key:"render",value:function(){var e,t=!1,a=Object(v.a)(this.props.films);try{for(a.s();!(e=a.n()).done;){e.value.id===this.props.film.id&&(t=!0)}}catch(s){a.e(s)}finally{a.f()}var l=void 0!==this.props.film.first_air_date?"tv":"movie";return console.log(this.props.film),i.a.createElement("div",{className:"m-2"},i.a.createElement("div",{className:"card div-card"},i.a.createElement("h6",{className:"card-title p-2"},!0===this.props.tv?this.props.film.name:this.props.film.title),i.a.createElement(r.b,{className:"nav-link link-people",to:"/film/"+this.props.film.id+"/"+l},null===this.props.film.poster_path?i.a.createElement("img",{className:"card-img-top",src:"/reactReduxMovieDB/no_image.png",alt:this.props.film.title}):i.a.createElement("img",{className:"card-img-top",src:this.state.urlImage+this.props.film.poster_path,alt:this.props.film.title})),i.a.createElement(g.a,{icon:E.c,title:"Plus de d\xe9tails","data-toggle":"modal","data-target":"#myModal",onClick:this.clickCollapseCard}),!1===t?i.a.createElement(g.a,{icon:E.d,onClick:this.clickAjouterFilmFav}):i.a.createElement(g.a,{icon:E.b,onClick:this.clickSuppFilmFav})))}}]),a}(l.Component),y=Object(h.b)((function(e){return{films:e.films}}),(function(e){return{supprimeFilmFavDispatch:function(t){e({type:"SUPP_FILM_FAV",film:t})},ajouterFilmFavDispatch:function(t){e({type:"AJ_FILM_FAV",film:t})}}}))(b),k=a(12),N=a.n(k),F=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).changeInput=function(e){l.setState({inputSearch:e.target.value})},l.clickSearch=function(e){l.getFilms(l.state.inputSearch),l.getSerie(l.state.inputSearch)},l.showCollapse=function(e){console.log(e),l.setState({filmCollapse:e,idCollapse:e.id},l.recupererFilm(e.id))},l.state={api_key:"?api_key=369db2052a84d1a49d133d25a3983cbd",url:"https://api.themoviedb.or550g/3/movie/?api_key=369db2052a84d1a49d133d25a3983cbd",urlSearch:"https://api.themoviedb.org/3/search/movie?api_key=369db2052a84d1a49d133d25a3983cbd&query=",urlImage:"https://image.tmdb.org/t/p/original/",urlBase:"https://api.themoviedb.org/3/",inputSearch:"",listFilm:[],listSerie:[],filmCollapse:{},idCollapse:"",isShow:!1,testRechercheIdFilm:"https://api.themoviedb.org/3/movie/384737/videos?api_key=369db2052a84d1a49d133d25a3983cbd",filmJumbo:null},l}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=Math.floor(10*Math.random(this.state.listFilm.length-1));N.a.get("https://api.themoviedb.org/3/discover/movie?api_key=369db2052a84d1a49d133d25a3983cbd&language=en-US&sort_by=popularity.desc").then((function(a){var l=a.data.results;e.setState((function(e){return{listFilm:l,filmJumbo:l[t]}}),(function(){return e.getSerie()}))}))}},{key:"getFilms",value:function(e){var t=this;N.a.get(this.state.urlSearch.concat(e)).then((function(e){var a=e.data.results;console.log(a),t.setState({listFilm:a})})),console.log(this.state.listFilm)}},{key:"getSerie",value:function(e){var t=this;console.log(e);var a=void 0!==e?"search/tv"+this.state.api_key+"&query=":"discover/tv?api_key=369db2052a84d1a49d133d25a3983cbd&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false";console.log(e,this.state.urlBase.concat(a,e)),N.a.get(this.state.urlBase.concat(a)+e).then((function(e){var a=e.data.results;console.log(e.data.results),t.setState((function(e){return{listSerie:a}}),(function(){return console.log(a)}))}))}},{key:"recupererFilm",value:function(e){console.log("recupere film ",e,typeof this.state.listFilm);var t=this.state.listFilm.filter((function(t){return t.id===e}));console.log(t),this.setState({isShow:this.state.idCollapse!==e||!this.state.isShow})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"comp-gallery m-3"},i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("input",{type:"text",className:"form-control",placeholder:"ex: Jack Reacher",value:this.state.inputSearch,onChange:this.changeInput}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn",type:"submit",onClick:this.clickSearch},"Rechercher"))),i.a.createElement("h3",null,"Movies most Popular"),i.a.createElement("div",null,i.a.createElement("div",{className:"modal fade",id:"myModal"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h4",{className:"modal-title"},this.state.filmCollapse.title?this.state.filmCollapse.title:this.state.filmCollapse.name),i.a.createElement("button",{type:"button",className:"close modal-close","data-dismiss":"modal",title:"fermer la modal"},"\xd7")),i.a.createElement("div",{className:"modal-body"},null===this.state.filmCollapse.backdrop_path?i.a.createElement("img",{className:"card-img-top",src:"/reactReduxMovieDB/no_image.png",alt:this.state.filmCollapse.title}):i.a.createElement("img",{className:"card-img-top",src:this.state.urlImage+this.state.filmCollapse.backdrop_path,alt:this.state.filmCollapse.title}),i.a.createElement("hr",null),i.a.createElement("p",{className:"card-text"},this.state.filmCollapse.overview),i.a.createElement("p",{className:"card-text"},this.state.filmCollapse.release_date)),i.a.createElement(r.b,{className:"nav-link close",to:this.state.filmCollapse.title?"/film/"+this.state.filmCollapse.id+"/movie":"/film/"+this.state.filmCollapse.id+"/tv"},i.a.createElement(g.a,{icon:E.e,"data-toggle":"modal","data-target":"#myModal",alt:"En savoir plus sur "+this.state.filmCollapse.title})))))),i.a.createElement("div",{className:"container-fluid color-grey div-cont "},this.state.listFilm.map((function(t,a){return a<=(""===e.state.inputSearch?13:e.state.listFilm.length)?i.a.createElement("div",{key:a},i.a.createElement(y,{key:a,film:t,tv:!1,clickCollapse:e.showCollapse})):""}))),i.a.createElement("h3",null,"Tv Show most Popular"),i.a.createElement("div",{className:"container-fluid color-grey div-cont "},this.state.listSerie.map((function(t,a){return a<=(""===e.state.inputSearch?13:e.state.listSerie.length)?i.a.createElement("div",{key:a},i.a.createElement(y,{key:a,film:t,tv:!0,clickCollapse:e.showCollapse})):""}))))}}]),a}(l.Component),_=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).clickAjouterFilmFav=function(e){console.log(e),l.setState((function(e){return{isFavorite:!l.state.isFavorite}}),(function(){return l.props.ajouterFilmFavDispatch(e)}))},l.clickSuppFilmFav=function(e){console.log(e),l.setState((function(e){return{isFavorite:!l.state.isFavorite}}),(function(){return l.props.supprimeFilmFavDispatch(e)}))},l.state={film:null,filmId:"",acteurs:null,urlQuery:"https://api.themoviedb.org/3/",urlCover:"http://api.themoviedb.org/3/search/movie?api_key=369db2052a84d1a49d133d25a3983cbd&query=",urlImage:"https://image.tmdb.org/t/p/original",apiKey:"369db2052a84d1a49d133d25a3983cbd",isFavorite:null,type:null},console.log(l.props),l}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a=this.props.match.params.type;console.log(t),console.log(this.state.films),this.setState((function(e){return{filmId:t,type:a}}),(function(){return e.getFilm(e.state.filmId)}))}},{key:"getFilm",value:function(){var e=this,t="".concat(this.state.urlQuery,this.state.type,"/",this.state.filmId,"?api_key=",this.state.apiKey);N.a.get(t).then((function(t){var a=t.data;console.log(t.data),e.setState((function(e){return{film:a,isFavorite:!1}}),(function(){e.getActeurs(),e.props.films.map((function(t){t.id===e.state.film.id&&e.setState((function(e){return{isFavorite:!0}}))}))}))}))}},{key:"getActeurs",value:function(){var e=this,t="".concat(this.state.urlQuery,this.state.type,"/",this.state.filmId,"/credits?api_key=",this.state.apiKey);N.a.get(t).then((function(t){var a=t.data;console.log(t.data),e.setState((function(e){return{acteurs:a}}))}))}},{key:"render",value:function(){var e=this;console.log(this.props.film);var t=this.state.film&&this.state.film.backdrop_path?this.state.urlImage+this.state.film.backdrop_path:window.location.origin+"",a=this.state.film&&this.state.film.poster_path?this.state.urlImage+this.state.film.poster_path:"/reactReduxMovieDB/no_image.png";return null!=this.state.film?i.a.createElement("div",{className:"container-fluid header-container",style:{backgroundImage:"url("+t+")"}},i.a.createElement(r.b,{className:"nav-link close",to:"/gallery"},i.a.createElement(g.a,{icon:E.a,alt:"Retour \xe0 la page pr\xe9cedente","data-toggle":"tooltip","data-placement":"right",title:"Retour \xe0 la page pr\xe9c\xe9dente!"})),i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"movie"===this.state.type?this.state.film.title:this.state.film.name,i.a.createElement("span",{className:"date"}," (","movie"===this.state.type?this.state.film.release_date:this.state.film.first_air_date+" / "+this.state.film.last_air_date,")"),i.a.createElement("p",{className:"tagline"},"movie"===this.state.type?this.state.film.tagline:this.state.film.original_name)),i.a.createElement("div",{className:"container-gd"},i.a.createElement("div",{className:"gauche"},i.a.createElement("img",{src:a,alt:this.state.film.title})),i.a.createElement("div",{className:"droite"},i.a.createElement("div",{className:"sypnosis"},this.state.film.genres.map((function(e,t){return i.a.createElement("span",{key:t,className:"badge badge-success badge-pill mr-1 genre"},e.name)})),i.a.createElement("p",null,i.a.createElement("strong",null,"Sypnosis: ")),i.a.createElement("p",null,this.state.film.overview),i.a.createElement("span",null,!1===this.state.isFavorite?i.a.createElement(g.a,{icon:E.d,onClick:function(){return e.clickAjouterFilmFav(e.state.film)}}):i.a.createElement(g.a,{icon:E.b,onClick:function(){return e.clickSuppFilmFav(e.state.film)}})),i.a.createElement("span",{className:"badge badge-warning badge-pill vote"},"Vote : ",this.state.film.vote_average),null!=this.state.acteurs?this.state.acteurs.cast.map((function(t,a){return a<=10?i.a.createElement(r.b,{className:"nav-link link-people",to:"/people/"+t.id,key:a,"data-toggle":"tooltip",title:"<img src="+e.state.urlImage+t.profile_path+" />"},i.a.createElement("span",{className:"btn btn-info m-1 mt-3"},t.name)):""})):i.a.createElement("div",{className:"spinner-border text-info"})))))):i.a.createElement("div",null,"Loading ...")}}]),a}(l.Component),S=Object(h.b)((function(e){return{films:e.films}}),(function(e){return{supprimeFilmFavDispatch:function(t){e({type:"SUPP_FILM_FAV",film:t})},ajouterFilmFavDispatch:function(t){e({type:"AJ_FILM_FAV",film:t})}}}))(_),C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).myCollapse=function(){l.setState((function(e){return{isCollapse:!l.state.isCollapse}}))},l.state={acteur:null,acteurId:"",urlQuery:"https://api.themoviedb.org/3/person/",urlImage:"https://image.tmdb.org/t/p/original",apiKey:"369db2052a84d1a49d133d25a3983cbd",films:null,series:null,isCollapse:!1},l}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(t){return{acteurId:e.props.match.params.id}}),(function(){return e.getActeur(e.state.acteur)}))}},{key:"getActeur",value:function(){var e=this,t="".concat(this.state.urlQuery,this.state.acteurId,"?api_key=",this.state.apiKey);N.a.get(t).then((function(t){var a=t.data;console.log(t.data),e.setState((function(e){return{acteur:a}}),(function(){return e.getFilms()}))}))}},{key:"getSeries",value:function(){var e=this;console.log("cherche series tv");var t="".concat(this.state.urlQuery,this.state.acteurId,"/tv_credits?api_key=",this.state.apiKey);N.a.get(t).then((function(t){var a=t.data;e.setState((function(e){return{series:a}}),(function(){return console.log(e.state.series.cast)}))}))}},{key:"getFilms",value:function(){var e=this,t="".concat(this.state.urlQuery,this.state.acteurId,"/movie_credits?api_key=",this.state.apiKey);N.a.get(t).then((function(t){var a=t.data.cast;e.setState((function(e){return{films:a}}),(function(){return e.getSeries()}))}))}},{key:"render",value:function(){return null!=this.state.acteur?i.a.createElement("div",{className:"container people"},i.a.createElement("h1",null,this.state.acteur.name),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container-gd"},i.a.createElement("div",{className:"gauche"},null!==this.state.acteur.profile_path?i.a.createElement("img",{src:this.state.urlImage+this.state.acteur.profile_path,alt:this.state.acteur.name}):i.a.createElement("img",{src:"/reactReduxMovieDB/no_image.png",alt:this.state.acteur.name})),i.a.createElement("div",{className:"droite"},i.a.createElement("div",{className:"biographie"},i.a.createElement("p",null,this.state.acteur.also_known_as[0]),i.a.createElement("p",null,this.state.acteur.place_of_birth),i.a.createElement("p",null,this.state.acteur.birthday),null!==this.state.acteur.deathday?this.state.acteurdeathday:"",i.a.createElement("strong",null,0!==this.state.acteur.biography.length?"Biographie:":"",i.a.createElement("br",null),i.a.createElement("br",null),this.state.acteur.biography.split(" ").map((function(e,t){return t<30?e+" ":""}))),i.a.createElement("div",{id:"colapse-biography",className:"collapse"},this.state.acteur.biography.split(" ").map((function(e,t){return t<30?"":e+" "})))),this.state.acteur.biography.split(" ").length>=30?i.a.createElement("button",{className:"btn btn-info btn-sm mt-2 ml-3","data-toggle":"collapse","data-target":"#colapse-biography",onClick:this.myCollapse},!1===this.state.isCollapse?"Voir plus":"Voir moins"):""))),i.a.createElement("h3",{className:"m-2"},"Movies "),null!=this.state.films?i.a.createElement("div",{className:"row"},i.a.createElement("br",null),null!=this.state.films?this.state.films.map((function(e,t){return i.a.createElement(r.b,{className:"nav-link link-people",to:"/film/"+e.id+"/movie",key:t},i.a.createElement("span",{className:"btn btn-film"},e.title))})):""):i.a.createElement("div",{className:"spinner-border text-dark"}),null!=this.state.series&&this.state.series.cast.length>0&&i.a.createElement("h3",{className:"m-2"},"Tv Shows "),null!=this.state.series?i.a.createElement("div",{className:"row"},i.a.createElement("br",null),null!=this.state.series?this.state.series.cast.map((function(e,t){return i.a.createElement(r.b,{className:"nav-link link-people",to:"/film/"+e.id+"/tv",key:t},i.a.createElement("span",{className:"btn btn-serie"},e.name))})):""):i.a.createElement("div",{className:"spinner-border text-dark"})):i.a.createElement("span",null,"Loading ... acteurs ")}}]),a}(l.Component),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).state={film:{cover:"https://image.tmdb.org/t/p/original",isPresent:!0}},l}return Object(m.a)(a,[{key:"render",value:function(){var e=void 0!==this.props.film.first_air_date?"tv":"movie";return console.log(this.props.film),i.a.createElement(r.b,{className:"nav-link link-people",to:"/film/"+this.props.film.id+"/"+e},i.a.createElement("div",{className:" container my-container-film"},i.a.createElement("div",{className:"gauche"},null!==this.props.film.poster_path?i.a.createElement("img",{src:this.state.film.cover+this.props.film.poster_path,alt:"Cover "+this.props.film.title}):i.a.createElement("img",{src:"/reactReduxMovieDB/no_image.png",alt:this.props.film.title})),i.a.createElement("div",{className:"centre"},i.a.createElement(r.b,{className:"nav-link link-people",to:"/film/"+this.props.film.id+"/"+e},i.a.createElement("h4",null,"tv"===e?this.props.film.original_name:this.props.film.title)),i.a.createElement("p",null,"tv"===e?this.props.film.first_air_date:this.props.film.release_date)),i.a.createElement("div",{className:"droite"},!0===this.state.film.isPresent?i.a.createElement(g.a,{icon:E.b}):i.a.createElement(g.a,{icon:E.f}))))}}]),a}(l.Component),O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var l=arguments.length,i=new Array(l),s=0;s<l;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).supprimeFilmFav=function(t){console.log(t),e.props.supprimeFilmFavDispatch(t)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:" container-list"},i.a.createElement("h3",null,"Mes Films Favoris:"),0!==this.props.films.length?this.props.films.map((function(t){return i.a.createElement("div",{className:"m-2 div-film",key:t.id},i.a.createElement(j,{film:t}),i.a.createElement(g.a,{icon:E.g,onClick:function(){return e.supprimeFilmFav(t)}}))})):i.a.createElement("p",null,"Votre liste de favoris est vide "))}}]),a}(l.Component),I=Object(h.b)((function(e){return{films:e.films}}),(function(e){return{supprimeFilmFavDispatch:function(t){e({type:"SUPP_FILM_FAV",film:t})}}}))(O),M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).state={baseUrl:"https://api.themoviedb.org/3/discover/movie?api_key=369db2052a84d1a49d133d25a3983cbd&language=en-US&sort_by=popularity.desc",inputSearch:"",urlImage:"https://image.tmdb.org/t/p/original/",films:[]},l}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get(this.state.baseUrl).then((function(t){var a=t.data.results;e.setState((function(e){return{films:a}}),(function(){return console.log(e.state.films[0])}))}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",{id:"demo",className:"carousel slide","data-ride":"carousel"},i.a.createElement("ul",{className:"carousel-indicators"},i.a.createElement("li",{"data-target":"#demo","data-slide-to":"0",className:"active"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"1"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"2"})),i.a.createElement("div",{className:"carousel-inner"},i.a.createElement("div",{className:"carousel-item active"},0!==this.state.films.length?i.a.createElement("img",{src:this.state.urlImage+this.state.films[0].backdrop_path,alt:this.state.films}):"",i.a.createElement("div",{className:"carousel-caption"},i.a.createElement("h3",null,0!==this.state.films.length?i.a.createElement(r.b,{className:"nav-link",to:"/film/"+this.state.films[0].id},this.state.films[0].title):""),i.a.createElement("p",null,0!==this.state.films.length?this.state.films[0].release_date:""))),i.a.createElement("div",{className:"carousel-item"},0!==this.state.films.length?i.a.createElement("img",{src:this.state.urlImage+this.state.films[1].backdrop_path,alt:this.state.films}):"",i.a.createElement("div",{className:"carousel-caption"},i.a.createElement("h3",null,0!==this.state.films.length?i.a.createElement(r.b,{className:"nav-link",to:"/film/"+this.state.films[1].id},this.state.films[1].title):""),i.a.createElement("p",null,0!==this.state.films.length?this.state.films[0].release_date:""))),i.a.createElement("div",{className:"carousel-item"},0!==this.state.films.length?i.a.createElement("img",{src:this.state.urlImage+this.state.films[2].backdrop_path,alt:this.state.films}):"",i.a.createElement("div",{className:"carousel-caption"},i.a.createElement("h3",null,0!==this.state.films.length?i.a.createElement(r.b,{className:"nav-link",to:"/film/"+this.state.films[2].id},this.state.films[2].title):""),i.a.createElement("p",null,0!==this.state.films.length?this.state.films[0].release_date:"")))),i.a.createElement("a",{className:"carousel-control-prev",href:"#demo","data-slide":"prev"},i.a.createElement("span",{className:"carousel-control-prev-icon"})),i.a.createElement("a",{className:"carousel-control-next",href:"#demo","data-slide":"next"},i.a.createElement("span",{className:"carousel-control-next-icon"})))),i.a.createElement(F,null))}}]),a}(l.Component);var w=function(){return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement(r.a,null,i.a.createElement(f,null),i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/home",component:M}),i.a.createElement(c.a,{path:"/gallery",component:F}),i.a.createElement(c.a,{path:"/film/:id/:type",component:S}),i.a.createElement(c.a,{path:"/people/:id",component:C}),i.a.createElement(c.a,{path:"/favoris",component:I})))),i.a.createElement("footer",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(23),A=a(30),D=a(31),P={films:null!==localStorage.getItem("films")?JSON.parse(localStorage.getItem("films")):[]},B=function(e){var t=JSON.stringify(e);localStorage.setItem("films",t)},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;if("SUPP_FILM_FAV"===t.type){console.log(t,"sup film");var a=e.films.filter((function(e){return e.id!==t.film.id}));return B(a),Object(D.a)({},e,{films:a})}return"AJ_FILM_FAV"===t.type?(console.log(t,"ajout film"),B([].concat(Object(A.a)(e.films),[t.film])),Object(D.a)({},e,{films:[].concat(Object(A.a)(e.films),[t.film])})):e},J=Object(x.b)(V);n.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h.a,{store:J},i.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.e98565e2.chunk.js.map