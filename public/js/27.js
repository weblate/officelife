(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"4A5y":function(t,a,e){var n=e("NWqq");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,s);n.locals&&(t.exports=n.locals)},NWqq:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".list li[data-v-74380552]:last-child {\n  border-bottom: 0;\n}",""])},Vyzm:function(t,a,e){"use strict";e.r(a);var n={components:{Layout:e("+SZM").a},props:{notifications:{type:Array,default:null},news:{type:Array,default:null}},data:function(){return{idToDelete:0}},methods:{destroy:function(t){var a=this;axios.delete("/"+this.$page.auth.company.id+"/account/news/"+t).then((function(e){a.$snotify.success(a.$t("account.company_news_success_destroy"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),a.idToDelete=0,t=a.news.findIndex((function(a){return a.id===t})),a.news.splice(t,1)})).catch((function(t){a.form.errors=_.flatten(_.toArray(t.response.data))}))}}},s=(e("cKU2"),e("KHd+")),i=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("layout",{attrs:{title:"Home",notifications:t.notifications}},[e("div",{staticClass:"ph2 ph0-ns"},[e("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[e("ul",{staticClass:"list ph0 tc-l tl"},[e("li",{staticClass:"di"},[e("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v(t._s(t.$page.auth.company.name))])],1),t._v(" "),e("li",{staticClass:"di"},[e("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account"}},[t._v(t._s(t.$t("app.breadcrumb_account_home")))])],1),t._v(" "),e("li",{staticClass:"di"},[t._v("\n          "+t._s(t.$t("app.breadcrumb_account_manage_company_news"))+"\n        ")])])]),t._v(" "),e("div",{staticClass:"mw7 center br3 mb5 bg-white box restricted relative z-1"},[e("div",{staticClass:"pa3 mt5"},[e("h2",{staticClass:"tc normal mb4"},[t._v("\n          "+t._s(t.$t("account.company_news_title",{company:t.$page.auth.company.name}))+"\n        ")]),t._v(" "),e("p",{staticClass:"relative adminland-headline"},[e("span",{staticClass:"dib mb3 di-l",class:0==t.news.length?"white":""},[t._v("\n            "+t._s(t.$tc("account.company_news_number_news",t.news.length,{company:t.$page.auth.company.name,count:t.news.length}))+"\n          ")]),t._v(" "),e("inertia-link",{staticClass:"btn absolute-l relative dib-l db right-0",attrs:{href:"/"+t.$page.auth.company.id+"/account/news/create","data-cy":"add-news-button"}},[t._v("\n            "+t._s(t.$t("account.company_news_cta"))+"\n          ")])],1),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:0!=t.news.length,expression:"news.length != 0"}],staticClass:"list pl0 mv0 center",attrs:{"data-cy":"news-list"}},t._l(t.news,(function(a){return e("li",{key:a.id,staticClass:"pb2 pt1 bb bb-gray bb-gray-hover"},[e("h3",[t._v(t._s(a.title))]),t._v(" "),e("div",{staticClass:"parsed-content",domProps:{innerHTML:t._s(a.parsed_content)}}),t._v(" "),e("ul",{staticClass:"list pa0 ma0 di-ns db mt2 mt0-ns"},[e("span",{staticClass:"f7 mr1"},[t._v("\n                "+t._s(t.$t("account.company_news_written_by",{name:a.author.name,date:a.localized_created_at}))+"\n              ")]),t._v(" "),e("li",{staticClass:"di mr1 f7"},[e("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account/news/"+a.id+"/edit","data-cy":"edit-news-button-"+a.id}},[t._v("\n                  "+t._s(t.$t("app.edit"))+"\n                ")])],1),t._v(" "),t.idToDelete==a.id?e("li",{staticClass:"di f7"},[t._v("\n                "+t._s(t.$t("app.sure"))+"\n                "),e("a",{staticClass:"c-delete mr1 pointer",attrs:{"data-cy":"list-delete-confirm-button-"+a.id},on:{click:function(e){return e.preventDefault(),t.destroy(a.id)}}},[t._v("\n                  "+t._s(t.$t("app.yes"))+"\n                ")]),t._v(" "),e("a",{staticClass:"pointer",attrs:{"data-cy":"list-delete-cancel-button-"+a.id},on:{click:function(a){a.preventDefault(),t.idToDelete=0}}},[t._v("\n                  "+t._s(t.$t("app.no"))+"\n                ")])]):e("li",{staticClass:"di f7"},[e("a",{staticClass:"pointer",attrs:{"data-cy":"list-delete-button-"+a.id},on:{click:function(e){e.preventDefault(),t.idToDelete=a.id}}},[t._v("\n                  "+t._s(t.$t("app.delete"))+"\n                ")])])])])})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.news.length,expression:"news.length == 0"}],staticClass:"pa3 mt5"},[e("p",{staticClass:"tc measure center mb4 lh-copy"},[t._v("\n            "+t._s(t.$t("account.company_news_blank"))+"\n          ")])])])])])])}),[],!1,null,"74380552",null);a.default=i.exports},cKU2:function(t,a,e){"use strict";var n=e("4A5y");e.n(n).a}}]);
//# sourceMappingURL=27.js.map?id=17c4cba8274dbfa261de