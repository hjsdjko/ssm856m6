(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/saishigonggao/add-or-update"],{1168:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},a5c0:function(e,n,t){"use strict";var a=t("ae18"),r=t.n(a);r.a},ae18:function(e,n,t){},b82e:function(e,n,t){"use strict";(function(e){t("81c0");a(t("66fd"));var n=a(t("c352"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},c352:function(e,n,t){"use strict";t.r(n);var a=t("1168"),r=t("f905");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("a5c0");var u,o=t("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"6428e5d8",null,!1,a["a"],u);n["default"]=c.exports},ced3:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,r,i,u){try{var o=e[i](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(a,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var u=e.apply(n,t);function o(e){i(u,a,r,o,c,"next",e)}function c(e){i(u,a,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("270d"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{biaoti:"",jianjie:"",neirong:"",fabushijian:"",fengmian:""},user:{},ro:{biaoti:!1,jianjie:!1,neirong:!1,fabushijian:!1,fengmian:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return u(a.default.mark((function r(){var i,u,o,c;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.ruleForm.fabushijian=t.$utils.getCurDate(),i=e.getStorageSync("nowTable"),r.next=4,t.$api.session(i);case 4:if(u=r.sent,t.user=u.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=14;break}return t.ruleForm.id=n.id,r.next=12,t.$api.info("saishigonggao",t.ruleForm.id);case 12:u=r.sent,t.ruleForm=u.data;case 14:if(!n.cross){r.next=41;break}o=e.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 17:if((r.t1=r.t0()).done){r.next=41;break}if(c=r.t1.value,"biaoti"!=c){r.next=23;break}return t.ruleForm.biaoti=o[c],t.ro.biaoti=!0,r.abrupt("continue",17);case 23:if("jianjie"!=c){r.next=27;break}return t.ruleForm.jianjie=o[c],t.ro.jianjie=!0,r.abrupt("continue",17);case 27:if("neirong"!=c){r.next=31;break}return t.ruleForm.neirong=o[c],t.ro.neirong=!0,r.abrupt("continue",17);case 31:if("fabushijian"!=c){r.next=35;break}return t.ruleForm.fabushijian=o[c],t.ro.fabushijian=!0,r.abrupt("continue",17);case 35:if("fengmian"!=c){r.next=39;break}return t.ruleForm.fengmian=o[c],t.ro.fengmian=!0,r.abrupt("continue",17);case 39:r.next=17;break;case 41:t.styleChange();case 42:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(e){this.ruleForm.fabushijian=e.target.value,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.id){n.next=5;break}return n.next=3,e.$api.update("saishigonggao",e.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,e.$api.add("saishigonggao",e.ruleForm);case 7:e.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(t,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},f905:function(e,n,t){"use strict";t.r(n);var a=t("ced3"),r=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=r.a}},[["b82e","common/runtime","common/vendor"]]]);