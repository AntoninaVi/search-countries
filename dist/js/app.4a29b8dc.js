(function(){"use strict";var t={7082:function(t,e,s){var a=s(144),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"app-bar primary"},[e("div",{staticClass:"main__navbar"},[e("div",{staticClass:"main__navbar-content"},[e("h1",{staticClass:"main__title"},[t._v("Where in the world?")]),e("button",{staticClass:"theme-button",on:{click:t.toggleTheme}},[t.isDarkTheme?e("span",{staticClass:"theme-icon"},[t._v("☀")]):e("span",{staticClass:"theme-icon"},[t._v("☾")]),t.isDarkTheme?e("span",{staticClass:"theme-text"},[t._v("Light Mode")]):e("span",{staticClass:"theme-text"},[t._v("Dark Mode")])])])])]),e("main",{staticClass:"background"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)])},n=[],o={name:"App",data(){return{isDarkTheme:!1}},methods:{toggleTheme(){this.isDarkTheme=!this.isDarkTheme,localStorage.setItem("theme",this.isDarkTheme?"dark":"light"),this.updateTheme()},updateTheme(){this.isDarkTheme?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")}},created(){const t=localStorage.getItem("theme");this.isDarkTheme="dark"===t,this.updateTheme()}},r=o,c=s(1001),l=(0,c.Z)(r,i,n,!1,null,null,null),u=l.exports,m=s(8345),_=s(6563),d=function(){var t=this,e=t._self._c;return e("div",{class:{dark:t.darkMode,light:!t.darkMode}},[e("div",{staticClass:"wrapper background"},[e("div",{staticClass:"main__container"},[e("div",{staticClass:"main__filters"},[e("div",{staticClass:"main__filters-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"main__filters-search-input",class:{dark:t.darkMode},attrs:{placeholder:"Search for a country…"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),e("span",{staticClass:"main__filters-search-input-el"})]),e("div",{staticClass:"custom-select-container",on:{click:t.toggleSelect}},[e("span",{staticClass:"custom-select-label"},[t._v("Filter by Region")]),e("div",{staticClass:"custom-select-dropdown",class:{active:t.selectActive}},t._l(t.continents,(function(s){return e("div",{key:s,staticClass:"custom-select-option",on:{click:function(e){return t.selectContinent(s)}}},[t._v(" "+t._s(s)+" ")])})),0)])]),t.isLoading?e(_.Z,{staticClass:"loader",attrs:{size:94,width:10,indeterminate:"",color:"green"}}):t._e(),e("div",{staticClass:"main__list"},[t._l(t.displayedCountries,(function(t){return e("CountryItem",{key:t.cca3,attrs:{country:t}})})),0===t.filteredCountries.length?e("p",{staticClass:"error-message"},[t._v(" Sorry, country wasn't found ")]):t._e()],2)],1),e("button",{staticClass:"main__list-button primary",on:{click:t.showMore}},[t._v(" Show More ")])])])},p=[],f=(s(2087),function(){var t=this,e=t._self._c;return e("div",{staticClass:"main__list-item primary"},[e("router-link",{attrs:{to:"/country/"+t.country.cca3}},[e("img",{staticClass:"main__list-item-flag",attrs:{alt:`Flag of ${t.country.name.common}`,src:t.country.flags.png}})]),e("div",{staticClass:"main__list-item-info"},[e("p",{staticClass:"main__list-item-info-title"},[t._v(t._s(t.country.name.common))]),e("p",{staticClass:"main__list-item-info-text"},[e("span",{staticClass:"main__list-item-info-text-label"},[t._v("Population: ")]),e("span",{staticClass:"main__list-item-info-text-value"},[t._v(t._s(t.country.population))])]),e("p",{staticClass:"main__list-item-info-text"},[e("span",{staticClass:"main__list-item-info-text-label"},[t._v("Region: ")]),e("span",{staticClass:"main__list-item-info-text-value"},[t._v(t._s(t.country.region))])]),e("p",{staticClass:"main__list-item-info-text"},[e("span",{staticClass:"main__list-item-info-text-label"},[t._v("Capital: ")]),e("span",{staticClass:"main__list-item-info-text-value"},[t._v(" "+t._s(t.country.capital.join(", "))+" ")])])])],1)}),h=[],v={props:{country:Object}},C=v,y=(0,c.Z)(C,f,h,!1,null,"3e8ec7a8",null),g=y.exports,b={components:{CountryItem:g},data(){return{isLoading:!0,selectedContinent:"",continents:["Africa","Asia","Europe","Oceania","Americas"],searchTerm:"",visibleCountries:8,darkMode:!1,selectActive:!1}},computed:{countries(){return this.$store.state.countries},filteredCountries(){return this.countries.filter((t=>{const e=!this.selectedContinent||t.region===this.selectedContinent,s=!this.searchTerm||t.name.common.toLowerCase().includes(this.searchTerm.toLowerCase());return e&&s}))},displayedCountries(){return this.filteredCountries.slice(0,this.visibleCountries)}},methods:{showMore(){this.visibleCountries+=8},toggleDarkMode(){this.darkMode=!this.darkMode,console.log("Dark mode is now:",this.darkMode)},selectContinent(t){this.selectedContinent=t},toggleSelect(){this.selectActive=!this.selectActive}},created(){this.$store.dispatch("fetchCountries").then((()=>{this.isLoading=!1})).catch((t=>{console.error("Error loading countries:",t)}))}},k=b,D=(0,c.Z)(k,d,p,!1,null,"3103c5ca",null),w=D.exports,T=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"wrapper background"},[e("div",{staticClass:"country__container background"},[e("router-link",{staticClass:"back-button",attrs:{to:"/"}},[e("span",{staticClass:"country__button-back"},[e("i",{staticClass:"material-icons"},[t._v("arrow_back")]),t._v(" Back ")])]),t.countryDetail?e("div",{staticClass:"country__info"},[e("img",{staticClass:"country__flag",attrs:{alt:`Flag of ${t.countryDetail.name.common}`,src:t.countryDetail.flags.png}}),e("div",{staticClass:"country__info-items"},[e("h2",{staticClass:"country__title"},[t._v(t._s(t.countryDetail.name.common))]),e("div",{staticClass:"country__info-items-text"},[e("p",{staticClass:"country__info-item"},[t._v(" Native Name: "+t._s(t.formatNativeName(t.countryDetail.name.nativeName))+" ")]),e("p",{staticClass:"country__info-item"},[t._v(" Population: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.countryDetail.population))])]),e("p",{staticClass:"country__info-item"},[t._v(" Region: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.countryDetail.region))])]),e("p",{staticClass:"country__info-item"},[t._v(" Sub Region: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.countryDetail.subregion))])]),e("p",{staticClass:"country__info-item"},[t._v(" Capital: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.countryDetail.capital.join(", ")))])]),e("p",{staticClass:"country__info-item"},[t._v(" Top Level Domain: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.countryDetail.tld.join(", ")))])]),e("p",{staticClass:"country__info-item"},[t._v(" Currencies: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.getCurrenciesList(t.countryDetail.currencies)))])]),e("p",{staticClass:"country__info-item"},[t._v(" Languages: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.getLanguagesList(t.countryDetail.languages)))])])]),e("div",{key:"border",staticClass:"country__info-borders"},[t._v(" Border Countries:   "),e("ul",{staticClass:"country__info-borders-list"},t._l(t.countryDetail.borders,(function(s){return e("li",{key:s,staticClass:"country__info-borders-list-item"},[e("router-link",{attrs:{to:"/country/"+s}},[t._v(" "+t._s(t.getCountryNameByCode(s))+" ")])],1)})),0)])])]):t._e()],1)])])},x=[],j=s(9686);const O="https://restcountries.com/v3.1";var L={name:"CountryDetail",data(){return{countryDetail:null}},beforeRouteEnter(t,e,s){const a=t.params.code;j.Z.get(`${O}/alpha?codes=${a}`).then((t=>{s((e=>e.setData(t.data[0])))})).catch((t=>{s(!1)}))},computed:{borderCountries(){return this.countryDetail&&this.countryDetail.borders||[]}},methods:{setData(t){this.countryDetail=t},getCountryNameByCode(t){const e=this.$store.getters.getCountryByCode(t);return e?e.name.common:t},getCurrenciesList(t){return t?Object.values(t).map((t=>`${t.name} (${t.symbol})`)).join(", "):""},getLanguagesList(t){return t?Object.values(t).join(", "):""},formatNativeName(t){return t?Object.values(t).map((t=>t.common||t.official)).join(", "):"N/A"}}},M=L,P=(0,c.Z)(M,T,x,!1,null,"0b4b8f2a",null),Z=P.exports;a.ZP.use(m.ZP);const S=[{path:"/",name:"Home",component:w},{path:"/country/:code",name:"CountryDetail",component:Z}],$=new m.ZP({mode:"history",routes:S});var N=$,A=s(629);a.ZP.use(A.ZP);var B=new A.ZP.Store({state:{countries:[],flags:{}},mutations:{setCountries(t,e){t.countries=e}},actions:{async fetchCountries({commit:t}){try{const e=await fetch(`${O}/all`),s=await e.json();t("setCountries",s)}catch(e){console.error("Error fetching countries:",e)}}},getters:{getCountryByCode:t=>e=>t.countries.find((t=>t.cca3===e))},modules:{}});a.ZP.prototype.$http=j.Z,new a.ZP({router:N,store:B,render:t=>t(u)}).$mount("#app")}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,n){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],n=t[u][2];for(var r=!0,c=0;c<a.length;c++)(!1&n||o>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(r=!1,n<o&&(o=n));if(r){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,i,n]}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,o=a[0],r=a[1],c=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(c)var u=c(s)}for(e&&e(a);l<o.length;l++)n=o[l],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},a=self["webpackChunksearch_countries"]=self["webpackChunksearch_countries"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(7082)}));a=s.O(a)})();
//# sourceMappingURL=app.4a29b8dc.js.map