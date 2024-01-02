(function(){"use strict";var t={9832:function(t,e,s){var n=s(144),i=function(){var t=this,e=t._self._c;return e("v-app",[e("v-app-bar",{staticClass:"primary"},[e("v-spacer",[e("header",[e("div",{staticClass:"main__container primary"},[e("nav",{staticClass:"main__navbar"},[e("div",{staticClass:"main__navbar-content"},[e("h1",{staticClass:"main__title"},[t._v("Where in the world?")]),e("v-btn",{staticClass:"theme-button",attrs:{icon:""},on:{click:t.toggleTheme}},[t.$vuetify.theme.dark?e("v-icon",{staticClass:"mr-1",attrs:{color:"yellow darken-3"}},[t._v(" mdi-weather-sunny ")]):e("v-icon",{staticClass:"mr-1",attrs:{color:"blue-grey darken-4"}},[t._v(" mdi-weather-night ")]),t.$vuetify.theme.dark?e("span",{staticClass:"theme-text"},[t._v("Light Mode")]):e("span",{staticClass:"theme-text"},[t._v("Dark Mode")])],1)],1)])])])])],1),e("v-main",[e("router-view")],1)],1)},a=[],r={name:"App",methods:{toggleTheme(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},o=r,c=s(1001),l=(0,c.Z)(o,i,a,!1,null,null,null),u=l.exports,_=s(8345),m=(s(2087),function(){var t=this,e=t._self._c;return e("div",{class:{dark:t.darkMode,light:!t.darkMode}},[e("div",{staticClass:"wrapper background"},[e("div",{staticClass:"main__container"},[e("div",{staticClass:"main__filters"},[e("div",{staticClass:"main__filters-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"main__filters-search-input primary",attrs:{placeholder:"Search for a country…"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),e("span",{staticClass:"main__filters-search-input-el"})]),e("v-col",{staticClass:"main__filters-select-wrapper custom-select",attrs:{cols:"6",md:"6",lg:"2"}},[e("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:n}){return[e("v-text-field",t._g(t._b({attrs:{label:"Filter by Region",dense:"",solo:"","append-icon":"mdi-chevron-down"},model:{value:t.selectedContinent,callback:function(e){t.selectedContinent=e},expression:"selectedContinent"}},"v-text-field",n,!1),s))]}}])},[e("v-list",{staticClass:"primary"},t._l(t.continents,(function(s){return e("v-list-item",{key:s,on:{click:function(e){return t.selectContinent(s)}}},[e("v-list-item-title",[t._v(t._s(s))])],1)})),1)],1)],1)],1),t.isLoading?e("v-progress-circular",{staticClass:"loader",attrs:{size:94,width:10,indeterminate:"",color:"green"}}):t._e(),e("div",{staticClass:"main__list"},[t._l(t.displayedCountries,(function(s){return e("div",{key:s.cca3,staticClass:"main__list-item primary"},[e("router-link",{attrs:{to:"/country/"+s.cca3}},[e("img",{staticClass:"main__list-item-flag",attrs:{alt:`Flag of ${s.name.common}`,src:s.flags.png}})]),e("div",{staticClass:"main__list-item-info"},[e("p",{staticClass:"main__list-item-info-title"},[t._v(" "+t._s(s.name.common)+" ")]),e("p",{staticClass:"main__list-item-info-text"},[e("span",{staticClass:"main__list-item-info-text-label"},[t._v("Population: ")]),e("span",{staticClass:"main__list-item-info-text-value"},[t._v(t._s(s.population))])]),e("p",{staticClass:"main__list-item-info-text"},[e("span",{staticClass:"main__list-item-info-text-label"},[t._v("Region: ")]),e("span",{staticClass:"main__list-item-info-text-value"},[t._v(t._s(s.region))])]),e("p",{staticClass:"main__list-item-info-text"},[e("span",{staticClass:"main__list-item-info-text-label"},[t._v("Capital: ")]),e("span",{staticClass:"main__list-item-info-text-value"},[t._v(t._s(s.capital.join(", ")))])])])],1)})),0===t.filteredCountries.length?e("p",{staticClass:"error-message"},[t._v(" Sorry, country wasn't found ")]):t._e()],2),e("button",{staticClass:"main__list-button primary",on:{click:t.showMore}},[t._v(" Show More ")])],1)])])}),d=[],f={data(){return{isLoading:!0,selectedContinent:"",continents:["Africa","Asia","Europe","Oceania","Americas"],searchTerm:"",visibleCountries:8,darkMode:!1}},computed:{countries(){return this.$store.state.countries},filteredCountries(){return this.countries.filter((t=>{const e=!this.selectedContinent||t.region===this.selectedContinent,s=!this.searchTerm||t.name.common.toLowerCase().includes(this.searchTerm.toLowerCase());return e&&s}))},displayedCountries(){return this.filteredCountries.slice(0,this.visibleCountries)}},methods:{showMore(){this.visibleCountries+=8},toggleDarkMode(){this.darkMode=!this.darkMode,console.log("Dark mode is now:",this.darkMode)},selectContinent(t){this.selectedContinent=t}},created(){this.$store.dispatch("fetchCountries").then((()=>{this.isLoading=!1})).catch((t=>{console.error("Error loading countries:",t)}))}},p=f,v=(0,c.Z)(p,m,d,!1,null,null,null),y=v.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"wrapper background"},[e("div",{staticClass:"country__container background"},[e("router-link",{staticClass:"primary",attrs:{to:"/"}},[e("span",{staticClass:"country__button-back"},[e("i",{staticClass:"material-icons"},[t._v("arrow_back")]),e("span",{class:[t.$vuetify.theme.dark?"white--text":"primary"]},[t._v(" Back ")])])]),t.country?e("div",{staticClass:"country__info"},[t.country?e("img",{staticClass:"country__flag",attrs:{alt:`Flag of ${t.country}`,src:t.country.flags.png}}):t._e(),e("div",{staticClass:"country__info-items"},[e("h2",{staticClass:"country__title"},[t._v(t._s(t.country.name.common))]),e("div",{staticClass:"country__info-items-text"},[e("p",{staticClass:"country__info-item"},[t._v(" Native Name: "+t._s(t.formatNativeName(t.country.name.nativeName))+" ")]),e("p",{staticClass:"country__info-item"},[t._v(" Population: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.country.population))])]),e("p",{staticClass:"country__info-item"},[t._v(" Region: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.country.region))])]),e("p",{staticClass:"country__info-item"},[t._v(" Sub Region: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.country.subregion))])]),e("p",{staticClass:"country__info-item"},[t._v(" Capital: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.country.capital.join(", ")))])]),e("p",{staticClass:"country__info-item"},[t._v(" Top Level Domain: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.country.tld.join(", ")))])]),e("p",{staticClass:"country__info-item"},[t._v(" Currencies: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.getCurrenciesList(t.country.currencies)))])]),e("p",{staticClass:"country__info-item"},[t._v(" Languages: "),e("span",{staticClass:"country__info-data"},[t._v(t._s(t.getLanguagesList(t.country.languages)))])])]),e("div",{staticClass:"country__info-borders"},[t._v(" Border Countries:   "),e("ul",{staticClass:"country__info-borders-list"},t._l(t.borderCountries,(function(s){return e("li",{key:s,staticClass:"country__info-borders-list-item primary",class:{primary:t.$vuetify.theme.dark}},[e("router-link",{attrs:{to:"/country/"+s}},[t._v(" "+t._s(t.getCountryNameByCode(s)))])],1)})),0)])])]):t._e()],1)])])},h=[],g={name:"CountryDetail",computed:{country(){const t=this.$route.params.code;return this.$store.getters.getCountryByCode(t)||this.loadCountryFromLocalStorage(t)},borderCountries(){return this.country.borders||[]}},methods:{loadCountryFromLocalStorage(t){const e=localStorage.getItem(`country_${t}`);return e?JSON.parse(e):null},getCountryNameByCode(t){const e=this.$store.getters.getCountryByCode(t);return e?e.name.common:t},getCurrenciesList(t){if(t){const e=Object.values(t).map((t=>`${t.name} (${t.symbol})`));return e.join(", ")}return""},getLanguagesList(t){return t?Object.values(t).join(", "):""},formatNativeName(t){if(t){const e=Object.values(t).map((t=>t.common||t.official));return e.join(", ")}return"N/A"}},watch:{country:{handler(t){t&&localStorage.setItem(`country_${t.cca3}`,JSON.stringify(t))},deep:!0}}},b=g,k=(0,c.Z)(b,C,h,!1,null,null,null),w=k.exports;n["default"].use(_.ZP);const x=[{path:"/",name:"Home",component:y},{path:"/country/:code",name:"CountryDetail",component:w}],F=new _.ZP({routes:x});var O=F,$=s(629);n["default"].use($.ZP);var j=new $.ZP.Store({state:{countries:[],flags:{}},mutations:{setCountries(t,e){t.countries=e}},actions:{async fetchCountries({commit:t}){try{const e=await fetch("https://restcountries.com/v3.1/all"),s=await e.json();t("setCountries",s)}catch(e){console.error("Error fetching countries:",e)}}},getters:{getCountryByCode:t=>e=>t.countries.find((t=>t.cca3===e))},modules:{}}),S=s(5464),L=s.n(S);s(8556);n["default"].use(L());var M=new(L())({theme:{options:{customProperties:!0},themes:{light:{primary:"#FFFFFF",background:"#FAFAFA",input:"#848484",text:"#111517",icon:"#000000"},dark:{primary:"#2B3844",background:"#202C36",text:"#2B3844",input:"#FFF",icon:"#FFF"}}}}),T=s(9686);n["default"].prototype.$http=T.Z,new n["default"]({router:O,store:j,vuetify:M,render:t=>t(u)}).$mount("#app")}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,n,i,a){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],a=t[u][2];for(var o=!0,c=0;c<n.length;c++)(!1&a||r>=a)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(o=!1,a<r&&(r=a));if(o){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,i,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,a,r=n[0],o=n[1],c=n[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(c)var u=c(s)}for(e&&e(n);l<r.length;l++)a=r[l],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(u)},n=self["webpackChunksearch_countries"]=self["webpackChunksearch_countries"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(9832)}));n=s.O(n)})();
//# sourceMappingURL=app.7cdae08c.js.map