(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qiuyuan-add-or-update"],{"0026":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-ea754758]{padding:%?20?%}.content[data-v-ea754758]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-ea754758]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-ea754758]{width:%?180?%}.avator[data-v-ea754758]{width:%?150?%;height:%?60?%}.right-input[data-v-ea754758]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-ea754758]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-ea754758]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-ea754758]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-ea754758]{border:0}.cu-form-group uni-input[data-v-ea754758]{padding:0 %?30?%}.uni-input[data-v-ea754758]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-ea754758]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-ea754758]::after{line-height:%?88?%}.select .uni-input[data-v-ea754758]{line-height:%?88?%}.input .right-input[data-v-ea754758]{line-height:%?60?%}',""]),e.exports=r},"26a6":function(e,r,t){var i=t("0026");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("61e16ef4",i,!0,{sourceMap:!1,shadowMode:!1})},"4eba":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("28a5"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o={data:function(){return{ruleForm:{zhanghao:"",mima:"",xingming:"",nianling:"",xingbie:"",shouji:"",zhaopian:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{zhanghao:!1,mima:!1,xingming:!1,nianling:!1,xingbie:!1,shouji:!1,zhaopian:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(i=e.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=14;break}return this.ruleForm.id=r.id,e.next=12,this.$api.info("qiuyuan",this.ruleForm.id);case 12:i=e.sent,this.ruleForm=i.data;case 14:if(!r.cross){e.next=49;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 17:if((e.t1=e.t0()).done){e.next=49;break}if(a=e.t1.value,"zhanghao"!=a){e.next=23;break}return this.ruleForm.zhanghao=n[a],this.ro.zhanghao=!0,e.abrupt("continue",17);case 23:if("mima"!=a){e.next=27;break}return this.ruleForm.mima=n[a],this.ro.mima=!0,e.abrupt("continue",17);case 27:if("xingming"!=a){e.next=31;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,e.abrupt("continue",17);case 31:if("nianling"!=a){e.next=35;break}return this.ruleForm.nianling=n[a],this.ro.nianling=!0,e.abrupt("continue",17);case 35:if("xingbie"!=a){e.next=39;break}return this.ruleForm.xingbie=n[a],this.ro.xingbie=!0,e.abrupt("continue",17);case 39:if("shouji"!=a){e.next=43;break}return this.ruleForm.shouji=n[a],this.ro.shouji=!0,e.abrupt("continue",17);case 43:if("zhaopian"!=a){e.next=47;break}return this.ruleForm.zhaopian=n[a],this.ro.zhaopian=!0,e.abrupt("continue",17);case 47:e.next=17;break;case 49:this.styleChange();case 50:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.zhaopian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhanghao){e.next=3;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xingming){e.next=9;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if(this.ruleForm.nianling){e.next=12;break}return this.$utils.msg("年龄不能为空"),e.abrupt("return");case 12:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){e.next=15;break}return this.$utils.msg("年龄应输入整数"),e.abrupt("return");case 15:if(this.ruleForm.shouji){e.next=18;break}return this.$utils.msg("手机不能为空"),e.abrupt("return");case 18:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=21;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 21:if(!this.ruleForm.id){e.next=26;break}return e.next=24,this.$api.update("qiuyuan",this.ruleForm);case 24:e.next=28;break;case 26:return e.next=28,this.$api.add("qiuyuan",this.ruleForm);case 28:this.$utils.msgBack("提交成功");case 29:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},7828:function(e,r,t){"use strict";t.r(r);var i=t("4eba"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=n.a},"7cab":function(e,r,t){"use strict";var i,n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("账号")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(r){e.$set(e.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("密码")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.mima,placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(r){e.$set(e.ruleForm,"mima",r)},expression:"ruleForm.mima"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("年龄")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.nianling,placeholder:"年龄"},model:{value:e.ruleForm.nianling,callback:function(r){e.$set(e.ruleForm,"nianling",r)},expression:"ruleForm.nianling"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("性别")]),t("v-uni-picker",{attrs:{value:e.xingbieIndex,range:e.xingbieOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.xingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("手机")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:e.ro.shouji,placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(r){e.$set(e.ruleForm,"shouji",r)},expression:"ruleForm.shouji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.zhaopianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(1, 1, 1, 1)",textAlign:"left"}},[e._v("照片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.zhaopian?t("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:e.ruleForm.zhaopian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(242, 199, 68, 1)",borderColor:"rgba(57, 78, 99, 1)",borderRadius:"40rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"40%",fontSize:"28rpx",borderStyle:"solid",height:"76rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},a=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))},"9f49":function(e,r,t){"use strict";t.r(r);var i=t("7cab"),n=t("7828");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("d4d8");var o,s=t("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"ea754758",null,!1,i["a"],o);r["default"]=u.exports},d4d8:function(e,r,t){"use strict";var i=t("26a6"),n=t.n(i);n.a}}]);