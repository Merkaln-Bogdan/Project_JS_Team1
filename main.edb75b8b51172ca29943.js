(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1UyB":function(e,t,n){},D1Ai:function(e,t,n){},L1EO:function(e,t,n){},OLnK:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression(e.lambda(null!=t?o(t,"name"):t,t))+",\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o,i,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\n<section id="js-detailsPage" class="main__detailsPage">\n<div class="main__detailsContainer">\n<div class="main__imgContainer">\n<img id="js-detailsImg" class="main__detailsImg" src="https://image.tmdb.org/t/p/w500'+u(typeof(i=null!=(i=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?i:c)===s?i.call(l,{name:"poster_path",hash:{},data:r,loc:{start:{line:5,column:85},end:{line:5,column:100}}}):i)+'">\n</div>\n<div class="main__textContainer">\n<h2 id="js-detailsTitle" class="main__detailsTitle">'+u(typeof(i=null!=(i=d(n,"title")||(null!=t?d(t,"title"):t))?i:c)===s?i.call(l,{name:"title",hash:{},data:r,loc:{start:{line:8,column:52},end:{line:8,column:61}}}):i)+'</h2>\n<table class="main__detailsTable">\n<tbody class="main__detailsBody">\n<tr class="main__detailsTextRow">\n<td class="main__td">vote</td>\n<td class="main__td" id="js-vote">'+u(typeof(i=null!=(i=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?i:c)===s?i.call(l,{name:"vote_average",hash:{},data:r,loc:{start:{line:13,column:34},end:{line:13,column:50}}}):i)+'</td>\n</tr>\n<tr class="main__detailsTextRow">\n<td class="main__td">popularity</td>\n<td class="main__td" id="js-popularity">'+u(typeof(i=null!=(i=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?i:c)===s?i.call(l,{name:"popularity",hash:{},data:r,loc:{start:{line:17,column:40},end:{line:17,column:54}}}):i)+'</td>\n</tr>\n<tr class="main__detailsTextRow">\n<td class="main__td">original title</td>\n<td class="main__td" id="js-originalTitle">'+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:c)===s?i.call(l,{name:"original_title",hash:{},data:r,loc:{start:{line:21,column:43},end:{line:21,column:61}}}):i)+'</td>\n</tr>\n<tr class="main__detailsTextRow">\n<td class="main__td">genre</td>\n<td class="main__td">\n'+(null!=(o=d(n,"each").call(l,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:26,column:0},end:{line:28,column:9}}}))?o:"")+'</td>\n</tr>\n</tbody>\n</table>\n<h3 class="main__detailsAbout">About</h3>\n<p id="js-detailsAboutText" class="main__detailsAboutText">'+u(typeof(i=null!=(i=d(n,"overview")||(null!=t?d(t,"overview"):t))?i:c)===s?i.call(l,{name:"overview",hash:{},data:r,loc:{start:{line:34,column:59},end:{line:34,column:71}}}):i)+'</p>\n<ul class="main__addList">\n<li class="main_btnList">\n<button class="btnAddQueue" data-action="add" data-movieID="'+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)===s?i.call(l,{name:"id",hash:{},data:r,loc:{start:{line:37,column:60},end:{line:37,column:66}}}):i)+'">Add to queue</button>\n</li>\n<li class="main_btnList">\n<button class="btnAddWatch" data-action="add" data-movieID="'+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)===s?i.call(l,{name:"id",hash:{},data:r,loc:{start:{line:40,column:60},end:{line:40,column:66}}}):i)+'">Add to watched</button>\n</li>\n</ul>\n</div>\n</div>\n</section>\n\n\n'},useData:!0})},QaKm:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("VYOp"),n("QaKm"),n("1UyB"),n("WUHM"),n("XCN3"),n("D1Ai"),n("lmye"),n("JBxO"),n("FdtR"),n("Muwe"),n("aZFp"),n("wcNg");var a,r=n("czhI"),o=n.n(r),i=o.a.defaults.baseURL="https://api.themoviedb.org/3/",l="https://cors-anywhere.herokuapp.com/",c="8b49236e6b82eb62c6f5cab7126e8684",s={currPage:1,getPopularFilms:function(){return o.a.get(""+l+i+"/movie/popular/?api_key="+c+"&page="+this.currPage).then((function(e){return e.data}))},getInfoById:function(e){return e=this.getMovieIdFromLink()?this.getMovieIdFromLink():e,o.a.get(""+l+i+"/movie/"+e+"?api_key="+c).then((function(e){return e.data}))},getMoviesByQuery:function(e){return this.currPage=this.getPageFromLink()?this.getPageFromLink():this.currPage,o.a.get(""+l+i+"/search/movie?api_key="+c+"&page="+this.currPage+"&query="+e+"&include_adult=false&language=en-US").then((function(e){return 0===e.data.total_pages?alert("Please enter correct film name")||(refs.textArea.value=""):e.data}))},getPageFromLink:function(){return location.hash.split("#page=")[1]},getMovieIdFromLink:function(){return location.hash.split("#id=")[1]},getSimilarMovies:function(e){return e=this.getMovieIdFromLink()?this.getMovieIdFromLink():e,o.a.get(""+l+i+"/movie/"+e+"/similar?api_key="+c).then((function(e){return e.data}))}},u=((a={logoHome:document.querySelector(".site-logo"),home:document.querySelector("#nav-home"),container:document.querySelector("#container"),serchForm:document.querySelector(".search-form"),textArea:document.querySelector("#search-form"),cardContainer:document.querySelector("#container"),cardList:document.querySelector(".card_list"),library:document.querySelector("#nav-library"),sidebar:document.querySelector(".sidebar"),sidebarWatchBtn:document.querySelector(".sidebar_watch"),sidebarQueueBtn:document.querySelector(".sidebar_queue"),loadMoreBtn:document.querySelector(".loadMoreBtn"),cardListItem:document.querySelector(".itemCard"),pagination:document.querySelector(".pagination"),paginationNumber:document.querySelector(".pagination-page--number"),libraryPageList:document.querySelector(".library-page__list"),libraryPageSection:document.querySelector(".library-page")}).sidebar=document.querySelector(".sidebar"),a.sidebarWatch=document.querySelector(".sidebar_watch"),a.watchButton=document.querySelector(".sidebar_watch-button"),a.sidebarQueue=document.querySelector(".sidebar_queue"),a.queueButton=document.querySelector(".sidebar_queue-button"),a.cardContainer=document.querySelector(".card_container"),a),d=n("VJAs"),m=n.n(d),p=(n("iPZ8"),n("kypl"),n("pCzD"),n("IlJM"),n("4owi"),n("/YXa"),n("WB5j"),n("D/wG"),n("fp7Y"),n("9UJh"),n("WoWj"),n("U00V"),n("OLnK")),h=n.n(p),f=n("rrsR"),g=n.n(f),v=(n("uQK7"),n("Xlt+"),{setWatchedMovieIdToLocalStorage:function(e){var t=localStorage.getItem("watched"),n=t?JSON.parse(t):[];n.find((function(t){return t.id===e.id}))||(n.push(e),localStorage.setItem("watched",JSON.stringify(n)))},getWatchedMovieIdToLocalStorage:function(){var e=localStorage.getItem("watched");return JSON.parse(e)},deleteWatchedMovieIdFromLocalStorage:function(e){var t=localStorage.getItem("watched"),n=t?JSON.parse(t):[],a=n.find((function(t){return t.id===e.id}));if(a){var r=n.indexOf(a);n.splice(r,1)}localStorage.setItem("watched",JSON.stringify(n))},setQueueMovieIdToLocalStorage:function(e){var t=localStorage.getItem("queue"),n=t?JSON.parse(t):[];n.find((function(t){return t.id===e.id}))||(n.push(e),localStorage.setItem("queue",JSON.stringify(n)))},getQueueMovieIdToLocalStorage:function(){var e=localStorage.getItem("queue");return JSON.parse(e)},deleteQueueMovieIdFromLocalStorage:function(e){var t=localStorage.getItem("queue"),n=t?JSON.parse(t):[],a=n.find((function(t){return t.id===e.id}));if(a){var r=n.indexOf(a);n.splice(r,1)}localStorage.setItem("queue",JSON.stringify(n))}});function y(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var _={card:function(e){var t=this;s.getInfoById(e).then((function(n){u.loadMoreBtn.classList.add("hide"),u.pagination.classList.add("hide");var a=h()(n);t.insertCardToMain(a),t.rerenderButtons(),t.setOnclickAddWatch(),t.setOnclickAddQueue(),s.getSimilarMovies(e).then((function(e){e.results;var n=g()(e.results);t.insertSimilarMoviesToCard(n),$(".similarMovies").slick({dots:!0,infinite:!0,speed:400,slidesToShow:1,centerMode:!0,variableWidth:!0,centerPadding:"60px",arrows:!0,autoplay:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}))}))},buildCartTemplate:function(e){return h()(e)},insertSimilarMoviesToCard:function(e){u.cardList.insertAdjacentHTML("beforeend",e)},insertCardToMain:function(e){u.cardList.innerHTML="",u.cardList.innerHTML=e,u.textArea.hidden=!0},insertCardsToMainPage:function(e){u.cardList.insertAdjacentHTML("beforeend",e)},setOnclickAddWatch:function(){var e=this,t=document.querySelector(".btnAddWatch");t.addEventListener("click",(function(n){var a=n.currentTarget.dataset.movieid;if("add"===t.dataset.action){var r=v.setWatchedMovieIdToLocalStorage;s.getInfoById(a).then(r).then(e.rerenderButtons)}else"remove"===t.dataset.action&&s.getInfoById(a).then(v.deleteWatchedMovieIdFromLocalStorage).then(e.rerenderButtons)}))},rerenderButtons:function(){var e=document.querySelector(".btnAddWatch"),t=document.querySelector(".btnAddQueue"),n=v.getWatchedMovieIdToLocalStorage(),a=!1,r=!1;n&&(a=n.find((function(t){return t.id===Number(e.dataset.movieid)})));var o=v.getQueueMovieIdToLocalStorage();o&&(r=o.find((function(e){return e.id===Number(t.dataset.movieid)}))),a?(e.textContent="Remove from watched",e.dataset.action="remove"):(e.textContent="Add to watched",e.dataset.action="add"),r?(t.textContent="Remove from queue",t.dataset.action="remove"):(t.textContent="Add to queue",t.dataset.action="add")},setOnclickAddQueue:function(){var e=this,t=document.querySelector(".btnAddQueue");t.addEventListener("click",(function(n){var a=n.currentTarget.dataset.movieid;if("add"===t.dataset.action){var r=v.setQueueMovieIdToLocalStorage;s.getInfoById(a).then(r).then(e.rerenderButtons)}else"remove"===t.dataset.action&&s.getInfoById(a).then(v.deleteQueueMovieIdFromLocalStorage).then(e.rerenderButtons)}))},setOnclick:function(){for(var e,t=this,n=y(document.querySelectorAll(".itemCard"));!(e=n()).done;){e.value.addEventListener("click",(function(e){if("A"!=e.target.nodeName){var n=e.currentTarget.dataset.movieid;t.card(n)}}))}}};function S(e,t,n,a,r,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(a,r)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){S(o,a,r,i,l,"next",e)}function l(e){S(o,a,r,i,l,"throw",e)}i(void 0)}))}}var w='<h2 class="empty-message">You do not have watched movies.\n<a href="../../index.html">Add them</a></h2>';u.serchForm.addEventListener("submit",(function(e){u.loadMoreBtn.classList.remove("hide"),s.currPage=1,e.preventDefault(),u.cardList.innerHTML="";var t,n=u.textArea.value;t=n,s.getMoviesByQuery(t).then((function(e){e.results.map((function(e){return e.release_date=e.release_date.split("-")[0]}));var t=e.results.length?w:m()(e.results);_.insertCardsToMainPage(t),_.setOnclick()}))}));var k=document.querySelector(".prev_btn"),M=document.querySelector(".next_btn"),I=document.querySelector(".counter__value");function P(){return(P=L(regeneratorRuntime.mark((function e(){var t,n,a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.currPage=s.currPage+1,t=u.textArea.value,n=t?L(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getMoviesByQuery(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))):s.getPopularFilms.bind(s),e.next=5,n();case 5:a=e.sent,r=a.results.length?m()(a.results):w,u.cardList.innerHTML="",u.cardList.insertAdjacentHTML("beforeend",r),1!==s.currPage&&(k.removeAttribute("disabled"),k.classList.remove("disable")),I.value=s.currPage;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=L(regeneratorRuntime.mark((function e(){var t,n,a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.currPage=s.currPage-1,t=u.textArea.value,n=t?L(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.getMoviesByQuery(t));case 1:case"end":return e.stop()}}),e)}))):s.getPopularFilms.bind(s),e.next=5,n();case 5:a=e.sent,r=a.results.length?m()(a.results):w,u.cardList.innerHTML="",u.cardList.insertAdjacentHTML("beforeend",r),1===s.currPage&&(k.setAttribute("disabled","disabled"),k.classList.add("disable")),I.value=s.currPage;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}M.addEventListener("click",(function(){return P.apply(this,arguments)})),k.addEventListener("click",(function(){return T.apply(this,arguments)})),k.setAttribute("disabled","disabled"),k.classList.add("disable");var q=n("QQXS");var x='<h2 class="empty-message">You do not have watched movies.\n<a href="../../index.html">Add them</a></h2>';var O=new(n.n(q).a),A=u.logoHome.getAttribute("href"),B=u.library.getAttribute("href"),C=u.queueButton.getAttribute("href");u.home.addEventListener("click",(function(e){e.preventDefault(),O.navigate(A)})),u.library.addEventListener("click",(function(e){e.preventDefault(),O.navigate(B)})),u.sidebarQueueBtn.addEventListener("click",(function(e){e.preventDefault(),O.navigate(C)})),O.on({"/":function(){console.log("hello homepage!!!"),u.serchForm.classList.remove("hide"),u.queueButton.classList.remove("active-button"),u.watchButton.classList.remove("active-button"),u.pagination.classList.remove("hide"),u.sidebar.classList.add("hide"),u.libraryPageSection.classList.add("hide"),u.serchForm.classList.remove("hide"),s.getPopularFilms().then((function(e){e.results.map((function(e){return e.release_date=e.release_date.split("-")[0]}));var t=m()(e.results);u.cardList.innerHTML="",_.insertCardsToMainPage(t),_.setOnclick()}))}}).resolve(),O.on({"library/watched":function(){console.log(location.pathname),u.queueButton.classList.remove("active-button"),u.watchButton.classList.add("active-button"),u.sidebar.classList.remove("hide"),u.libraryPageSection.classList.remove("hide"),u.pagination.classList.add("hide"),u.serchForm.classList.add("hide"),function(){u.cardList.innerHTML="";var e=JSON.parse(localStorage.getItem("watched")),t=e.length?m()(e):x;_.insertCardsToMainPage(t),_.setOnclick()}()}}).resolve(),O.on({"library/queue":function(){console.log("queue!!!",window.location.href),u.queueButton.classList.add("active-button"),u.watchButton.classList.remove("active-button"),function(){u.cardList.innerHTML="";var e=JSON.parse(localStorage.getItem("queue")),t=e.length?m()(e):x;_.insertCardsToMainPage(t),_.setOnclick()}()}}).resolve("/queue")},VJAs:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o,i,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <li class="itemCard" data-movieID="'+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)===s?i.call(l,{name:"id",hash:{},data:r,loc:{start:{line:3,column:39},end:{line:3,column:45}}}):i)+'">\r\n        <a href="#" class="" data-movieID="'+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)===s?i.call(l,{name:"id",hash:{},data:r,loc:{start:{line:4,column:43},end:{line:4,column:49}}}):i)+'"></a>\r\n        <a href="#id='+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)===s?i.call(l,{name:"id",hash:{},data:r,loc:{start:{line:5,column:21},end:{line:5,column:27}}}):i)+'" onclick="location.replace(\'#id='+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)===s?i.call(l,{name:"id",hash:{},data:r,loc:{start:{line:5,column:60},end:{line:5,column:66}}}):i)+"')\">\r\n            "+(null!=(o=d(n,"if").call(l,null!=t?d(t,"backdrop_path"):t,{name:"if",hash:{},fn:e.program(2,r,0),inverse:e.program(4,r,0),data:r,loc:{start:{line:8,column:12},end:{line:10,column:19}}}))?o:"")+'            <h2 class="libraryItem__title">'+u(typeof(i=null!=(i=d(n,"title")||(null!=t?d(t,"title"):t))?i:c)===s?i.call(l,{name:"title",hash:{},data:r,loc:{start:{line:11,column:43},end:{line:11,column:52}}}):i)+" ("+u(typeof(i=null!=(i=d(n,"release_date")||(null!=t?d(t,"release_date"):t))?i:c)===s?i.call(l,{name:"release_date",hash:{},data:r,loc:{start:{line:11,column:54},end:{line:11,column:70}}}):i)+')</h2>\r\n            <h2 class="libraryItem__vote">'+u(typeof(i=null!=(i=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?i:c)===s?i.call(l,{name:"vote_average",hash:{},data:r,loc:{start:{line:12,column:42},end:{line:12,column:58}}}):i)+"</h2>\r\n        </a>\r\n    </li>\r\n"},2:function(e,t,n,a,r){var o,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return' <img src="https://image.tmdb.org/t/p/w500'+c("function"==typeof(o=null!=(o=s(n,"backdrop_path")||(null!=t?s(t,"backdrop_path"):t))?o:l)?o.call(i,{name:"backdrop_path",hash:{},data:r,loc:{start:{line:8,column:75},end:{line:8,column:92}}}):o)+'" id="'+c("function"==typeof(o=null!=(o=s(n,"id")||(null!=t?s(t,"id"):t))?o:l)?o.call(i,{name:"id",hash:{},data:r,loc:{start:{line:8,column:98},end:{line:8,column:104}}}):o)+'" alt="filmImg">\r\n            '},4:function(e,t,n,a,r){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return' <img src=`https://image.tmdb.org../../images/no_image.jpg` id="'+e.escapeExpression("function"==typeof(o=null!=(o=i(n,"id")||(null!=t?i(t,"id"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"id",hash:{},data:r,loc:{start:{line:9,column:84},end:{line:9,column:90}}}):o)+'" alt="filmImg">\r\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o;return'<ul class="movie-cards">\r\n'+(null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:2,column:4},end:{line:15,column:13}}}))?o:"")+"</ul>"},useData:!0})},VYOp:function(e,t,n){},WUHM:function(e,t,n){},XCN3:function(e,t,n){},rrsR:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var o,i,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,s=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\n    <div class="slider-item">\n        <a href="#id='+s("function"==typeof(i=null!=(i=u(n,"id")||(null!=t?u(t,"id"):t))?i:c)?i.call(l,{name:"id",hash:{},data:r,loc:{start:{line:6,column:21},end:{line:6,column:27}}}):i)+'" onclick="location.replace(\'#id='+s("function"==typeof(i=null!=(i=u(n,"id")||(null!=t?u(t,"id"):t))?i:c)?i.call(l,{name:"id",hash:{},data:r,loc:{start:{line:6,column:60},end:{line:6,column:66}}}):i)+"'); location.reload();\">\n        "+(null!=(o=u(n,"if").call(l,null!=t?u(t,"backdrop_path"):t,{name:"if",hash:{},fn:e.program(2,r,0),inverse:e.program(4,r,0),data:r,loc:{start:{line:7,column:8},end:{line:7,column:143}}}))?o:"")+"            \n        <h2>"+s("function"==typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:c)?i.call(l,{name:"title",hash:{},data:r,loc:{start:{line:8,column:12},end:{line:8,column:21}}}):i)+"</h2>\n        </a>\n    </div>\n\n"},2:function(e,t,n,a,r){var o,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return' <img src="https://image.tmdb.org/t/p/w500'+e.escapeExpression("function"==typeof(o=null!=(o=i(n,"backdrop_path")||(null!=t?i(t,"backdrop_path"):t))?o:e.hooks.helperMissing)?o.call(null!=t?t:e.nullContext||{},{name:"backdrop_path",hash:{},data:r,loc:{start:{line:7,column:71},end:{line:7,column:88}}}):o)+'"> '},4:function(e,t,n,a,r){return' <img src="src/images/no_image.jpg"> '},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var o;return'<h2 class="similarTitle">Similar movies</h2>\n<div class="similarMovies" data-slick=\'{"slidesToShow": 4, "slidesToScroll": 4}\'>\n'+(null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:3,column:4},end:{line:12,column:13}}}))?o:"")+"\n</div>"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.edb75b8b51172ca29943.js.map