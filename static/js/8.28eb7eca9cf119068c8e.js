webpackJsonp([8],{"/8AT":function(t,e,a){"use strict";var n=a("4YfN"),i=a.n(n),c=a("aVGL");e.a={data:function(){return{activeTab:"high"}},mounted:function(){this.activeTab="tab1",console.log(1111,this.activeTab)},methods:i()({handleTabChange:function(t){this.activeTab=t,this.setActiveTab(t)},handleActive:function(t){this.$router.push({name:t})}},Object(c.c)(["setActiveTab"]))}},ilYB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/8AT"),i=a("kOVM"),c=a("46Yf"),u=c(n.a,i.a,!1,null,null,null);e.default=u.exports},kOVM:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-tabs",{attrs:{value:t.activeTab},on:{change:t.handleTabChange}},[a("mu-tab",{attrs:{value:"high",title:"精品歌单"},on:{active:function(e){t.handleActive("high")}}}),t._v(" "),a("mu-tab",{attrs:{value:"hot",title:"热门歌单"},on:{active:function(e){t.handleActive("hot")}}}),t._v(" "),a("mu-tab",{attrs:{value:"new",title:"最新歌单"},on:{active:function(e){t.handleActive("new")}}})],1),t._v(" "),a("keep-alive",[a("router-view")],1)],1)},i=[],c={render:n,staticRenderFns:i};e.a=c}});
//# sourceMappingURL=8.28eb7eca9cf119068c8e.js.map