<template>
	<view class="content">
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='qiuyuan'" class="cu-form-group">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>账号</view>
			<input  style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' v-model="ruleForm.zhanghao" placeholder="账号"></input>
		</view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='qiuyuan'" class="cu-form-group">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>密码</view>
			<input type="password" style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' v-model="ruleForm.mima" placeholder="密码"></input>
		</view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='qiuyuan'" class="cu-form-group">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>姓名</view>
			<input  style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' v-model="ruleForm.xingming" placeholder="姓名"></input>
		</view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='qiuyuan'" class="cu-form-group">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>年龄</view>
			<input  style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' v-model="ruleForm.nianling" placeholder="年龄"></input>
		</view>
			<view v-if="tableName=='qiuyuan'" :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
                                <view :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">性别</view>
                                <picker @change="qiuyuanxingbieChange" :value="qiuyuanxingbieIndex" :range="qiuyuanxingbieOptions">
                                        <view style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
                                </picker>
                        </view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='qiuyuan'" class="cu-form-group">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>手机</view>
			<input  style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' v-model="ruleForm.shouji" placeholder="手机"></input>
		</view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='qiuyuan'" @tap="qiuyuanzhaopianTap" class="cu-form-group" :class="left == 'left'?'':'active'">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>照片</view>
			<view style="flex: 1;textAlign:left">
				<image :style='{"width":"96rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"96rpx"}' v-if="ruleForm.zhaopian" style="margin: 0;" class="avator" :src="ruleForm.zhaopian" mode=""></image>
				<image :style='{"width":"96rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"96rpx"}' v-else class="avator" style="margin: 0;" src="../../static/center/face.jpeg" mode=""></image>
			</view>
		</view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='duizhang'" class="cu-form-group">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>队长账号</view>
			<input  style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' v-model="ruleForm.duizhangzhanghao" placeholder="队长账号"></input>
		</view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='duizhang'" class="cu-form-group">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>密码</view>
			<input type="password" style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' v-model="ruleForm.mima" placeholder="密码"></input>
		</view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='duizhang'" class="cu-form-group">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>队长姓名</view>
			<input  style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' v-model="ruleForm.duizhangxingming" placeholder="队长姓名"></input>
		</view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='duizhang'" class="cu-form-group">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>年龄</view>
			<input  style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' v-model="ruleForm.nianling" placeholder="年龄"></input>
		</view>
			<view v-if="tableName=='duizhang'" :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
                                <view :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">性别</view>
                                <picker @change="duizhangxingbieChange" :value="duizhangxingbieIndex" :range="duizhangxingbieOptions">
                                        <view style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
                                </picker>
                        </view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='duizhang'" class="cu-form-group">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>手机</view>
			<input  style="padding: 0 30upx" :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"12rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"24rpx","borderStyle":"solid","height":"72rpx"}' v-model="ruleForm.shouji" placeholder="手机"></input>
		</view>
		<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.4)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 0px 0","borderWidth":"0","borderStyle":"solid","height":"100rpx"}' v-if="tableName=='duizhang'" @tap="duizhangzhaopianTap" class="cu-form-group" :class="left == 'left'?'':'active'">
			<view class="title" :style='{"width":"20%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}'>照片</view>
			<view style="flex: 1;textAlign:left">
				<image :style='{"width":"96rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"96rpx"}' v-if="ruleForm.zhaopian" style="margin: 0;" class="avator" :src="ruleForm.zhaopian" mode=""></image>
				<image :style='{"width":"96rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"0","textAlign":"left","height":"96rpx"}' v-else class="avator" style="margin: 0;" src="../../static/center/face.jpeg" mode=""></image>
			</view>
		</view>
		
		<view class="btn">
			<view class="box" :style="{width: 'auto'}">
				<button @tap="update()" class="cu-btn lg" :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"rgba(242, 199, 68, 1)","borderColor":"rgba(25, 25, 30, 1)","borderRadius":"8rpx","color":"rgba(0, 0, 0, 1)","borderWidth":"1","width":"auto","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'>保存</button>
			</view>

			<view class="box" :style="{width: 'auto'}">
				<button @tap="logout()" class="cu-btn lg" :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"rgba(25, 25, 30, 1)","borderColor":"rgba(242, 199, 68, 1)","borderRadius":"8rpx","color":"rgba(242, 199, 68, 1)","borderWidth":"2rpx","width":"auto","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				qiuyuanxingbieOptions: [],
				qiuyuanxingbieIndex: 0,
				duizhangxingbieOptions: [],
				duizhangxingbieIndex: 0,
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='qiuyuan'){
				this.qiuyuanxingbieOptions = "男,女".split(',');
				this.qiuyuanxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.qiuyuanxingbieIndex = index;
					}
				});
			}
			// 自定义下拉框值
			if(this.tableName=='duizhang'){
				this.duizhangxingbieOptions = "男,女".split(',');
				this.duizhangxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.duizhangxingbieIndex = index;
					}
				});
			}
			this.styleChange()
		},
		methods: {
                        // 下拉变化
                        qiuyuanxingbieChange(e) {
                                this.qiuyuanxingbieIndex = e.target.value
                                this.ruleForm.xingbie = this.qiuyuanxingbieOptions[this.qiuyuanxingbieIndex]
                        },
                        // 下拉变化
                        duizhangxingbieChange(e) {
                                this.duizhangxingbieIndex = e.target.value
                                this.ruleForm.xingbie = this.duizhangxingbieOptions[this.duizhangxingbieIndex]
                        },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.zhanghao) && `qiuyuan` == this.tableName){
					this.$utils.msg(`账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `qiuyuan` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if((!this.ruleForm.xingming) && `qiuyuan` == this.tableName){
					this.$utils.msg(`姓名不能为空`);
					return
				}
				if((!this.ruleForm.nianling) && `qiuyuan` == this.tableName){
					this.$utils.msg(`年龄不能为空`);
					return
				}
				if(`qiuyuan` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
					this.$utils.msg(`年龄应输入整数`);
					return
				}
				if((!this.ruleForm.shouji) && `qiuyuan` == this.tableName){
					this.$utils.msg(`手机不能为空`);
					return
				}
				if(`qiuyuan` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				if((!this.ruleForm.duizhangzhanghao) && `duizhang` == this.tableName){
					this.$utils.msg(`队长账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `duizhang` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if((!this.ruleForm.duizhangxingming) && `duizhang` == this.tableName){
					this.$utils.msg(`队长姓名不能为空`);
					return
				}
				if((!this.ruleForm.nianling) && `duizhang` == this.tableName){
					this.$utils.msg(`年龄不能为空`);
					return
				}
				if(`duizhang` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
					this.$utils.msg(`年龄应输入整数`);
					return
				}
				if((!this.ruleForm.shouji) && `duizhang` == this.tableName){
					this.$utils.msg(`手机不能为空`);
					return
				}
				if(`duizhang` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
					this.$utils.msg(`手机应输入手机格式`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			}

			,qiuyuanzhaopianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.zhaopian = _this.$base.url + 'upload/' + res.file;
					_this.$forceUpdate();
				});
			}
			,duizhangzhaopianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.zhaopian = _this.$base.url + 'upload/' + res.file;
					_this.$forceUpdate();
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	.avator {
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		margin-left: 30upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}

	.cu-btn {
		width: 100%;
	}

	.right-input {
		flex: 1;
		text-align: left;
		line-height: 72rpx;
	}
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.box {
	  width: auto;
	  padding: 0 10upx;
	  box-sizing: border-box;
	  margin-bottom: 20upx;
	}
	
	.cu-btn {
	  width: 100% !important;
	}

.picker-select-input {
	line-height: 72rpx;
}
</style>
