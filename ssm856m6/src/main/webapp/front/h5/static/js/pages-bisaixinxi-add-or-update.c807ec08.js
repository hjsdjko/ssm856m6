(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bisaixinxi-add-or-update"],{"1c39":function(i,e,r){var t=r("24fb");e=t(!1),e.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-63391d12]{padding:%?20?%}.content[data-v-63391d12]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-63391d12]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-63391d12]{width:%?180?%}.avator[data-v-63391d12]{width:%?150?%;height:%?60?%}.right-input[data-v-63391d12]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-63391d12]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-63391d12]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-63391d12]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-63391d12]{border:0}.cu-form-group uni-input[data-v-63391d12]{padding:0 %?30?%}.uni-input[data-v-63391d12]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-63391d12]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-63391d12]::after{line-height:%?88?%}.select .uni-input[data-v-63391d12]{line-height:%?88?%}.input .right-input[data-v-63391d12]{line-height:%?60?%}',""]),i.exports=e},"351f":function(i,e,r){var t=r("1c39");"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var a=r("4f06").default;a("b311c156",t,!0,{sourceMap:!1,shadowMode:!1})},"3cb2":function(i,e,r){"use strict";r.r(e);var t=r("560b"),a=r.n(t);for(var n in t)"default"!==n&&function(i){r.d(e,i,(function(){return t[i]}))}(n);e["default"]=a.a},"560b":function(i,e,r){"use strict";var t=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("ac6a"),r("96cf");var a=t(r("3b8d")),n=t(r("e2b1")),o={data:function(){return{ruleForm:{bisaimingcheng:"",tupian:"",bisaishijian:"",baomingshijian:"",jiezhishijian:"",bisaididian:"",bisaineirong:""},user:{},ro:{bisaimingcheng:!1,tupian:!1,bisaishijian:!1,baomingshijian:!1,jiezhishijian:!1,bisaididian:!1,bisaineirong:!1}}},components:{wPicker:n.default},computed:{},onLoad:function(){var i=(0,a.default)(regeneratorRuntime.mark((function i(e){var r,t,a,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.ruleForm.baomingshijian=this.$utils.getCurDateTime(),this.ruleForm.jiezhishijian=this.$utils.getCurDateTime(),r=uni.getStorageSync("nowTable"),i.next=5,this.$api.session(r);case 5:if(t=i.sent,this.user=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){i.next=15;break}return this.ruleForm.id=e.id,i.next=13,this.$api.info("bisaixinxi",this.ruleForm.id);case 13:t=i.sent,this.ruleForm=t.data;case 15:if(!e.cross){i.next=50;break}a=uni.getStorageSync("crossObj"),i.t0=regeneratorRuntime.keys(a);case 18:if((i.t1=i.t0()).done){i.next=50;break}if(n=i.t1.value,"bisaimingcheng"!=n){i.next=24;break}return this.ruleForm.bisaimingcheng=a[n],this.ro.bisaimingcheng=!0,i.abrupt("continue",18);case 24:if("tupian"!=n){i.next=28;break}return this.ruleForm.tupian=a[n],this.ro.tupian=!0,i.abrupt("continue",18);case 28:if("bisaishijian"!=n){i.next=32;break}return this.ruleForm.bisaishijian=a[n],this.ro.bisaishijian=!0,i.abrupt("continue",18);case 32:if("baomingshijian"!=n){i.next=36;break}return this.ruleForm.baomingshijian=a[n],this.ro.baomingshijian=!0,i.abrupt("continue",18);case 36:if("jiezhishijian"!=n){i.next=40;break}return this.ruleForm.jiezhishijian=a[n],this.ro.jiezhishijian=!0,i.abrupt("continue",18);case 40:if("bisaididian"!=n){i.next=44;break}return this.ruleForm.bisaididian=a[n],this.ro.bisaididian=!0,i.abrupt("continue",18);case 44:if("bisaineirong"!=n){i.next=48;break}return this.ruleForm.bisaineirong=a[n],this.ro.bisaineirong=!0,i.abrupt("continue",18);case 48:i.next=18;break;case 50:this.styleChange();case 51:case"end":return i.stop()}}),i,this)})));function e(e){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},baomingshijianConfirm:function(i){console.log(i),this.ruleForm.baomingshijian=i.result,this.$forceUpdate()},jiezhishijianConfirm:function(i){console.log(i),this.ruleForm.jiezhishijian=i.result,this.$forceUpdate()},tupianTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.tupian=i.$base.url+"upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=(0,a.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!this.ruleForm.id){i.next=5;break}return i.next=3,this.$api.update("bisaixinxi",this.ruleForm);case 3:i.next=7;break;case 5:return i.next=7,this.$api.add("bisaixinxi",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var e=new Date,r=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===i?r-=60:"end"===i&&(r+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(r,"-").concat(t,"-").concat(a)},toggleTab:function(i){this.$refs[i].show()}}};e.default=o},aa4e:function(i,e,r){"use strict";r.r(e);var t=r("d94d"),a=r("3cb2");for(var n in a)"default"!==n&&function(i){r.d(e,i,(function(){return a[i]}))}(n);r("ec36");var o,s=r("f0c5"),l=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,"63391d12",null,!1,t["a"],o);e["default"]=l.exports},d94d:function(i,e,r){"use strict";var t={"w-picker":r("e2b1").default},a=function(){var i=this,e=i.$createElement,r=i._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("比赛名称")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:i.ro.bisaimingcheng,placeholder:"比赛名称"},model:{value:i.ruleForm.bisaimingcheng,callback:function(e){i.$set(i.ruleForm,"bisaimingcheng",e)},expression:"ruleForm.bisaimingcheng"}})],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==i.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.tupianTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(1, 1, 1, 1)",textAlign:"left"}},[i._v("图片")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[i.ruleForm.tupian?r("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:i.ruleForm.tupian,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"100rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"2%",textAlign:"left",height:"100rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("比赛时间")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:i.ro.bisaishijian,placeholder:"比赛时间"},model:{value:i.ruleForm.bisaishijian,callback:function(e){i.$set(i.ruleForm,"bisaishijian",e)},expression:"ruleForm.bisaishijian"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("报名时间")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{placeholder:"报名时间"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toggleTab("baomingshijian")}},model:{value:i.ruleForm.baomingshijian,callback:function(e){i.$set(i.ruleForm,"baomingshijian",e)},expression:"ruleForm.baomingshijian"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("截止时间")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{placeholder:"截止时间"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toggleTab("jiezhishijian")}},model:{value:i.ruleForm.jiezhishijian,callback:function(e){i.$set(i.ruleForm,"jiezhishijian",e)},expression:"ruleForm.jiezhishijian"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("比赛地点")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:i.ro.bisaididian,placeholder:"比赛地点"},model:{value:i.ruleForm.bisaididian,callback:function(e){i.$set(i.ruleForm,"bisaididian",e)},expression:"ruleForm.bisaididian"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 2rpx rgba(0,0,0,.8)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0",borderWidth:"0",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"22%",fontSize:"24rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("比赛内容")]),r("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(205, 205, 205, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"200rpx"},attrs:{placeholder:"比赛内容"},model:{value:i.ruleForm.bisaineirong,callback:function(e){i.$set(i.ruleForm,"bisaineirong",e)},expression:"ruleForm.bisaineirong"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(242, 199, 68, 1)",borderColor:"rgba(57, 78, 99, 1)",borderRadius:"40rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"40%",fontSize:"28rpx",borderStyle:"solid",height:"76rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onSubmitTap.apply(void 0,arguments)}}},[i._v("提交")])],1)],1),r("w-picker",{ref:"baomingshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=i.$handleEvent(e),i.baomingshijianConfirm.apply(void 0,arguments)}}}),r("w-picker",{ref:"jiezhishijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=i.$handleEvent(e),i.jiezhishijianConfirm.apply(void 0,arguments)}}})],1)},n=[];r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return t}))},ec36:function(i,e,r){"use strict";var t=r("351f"),a=r.n(t);a.a}}]);