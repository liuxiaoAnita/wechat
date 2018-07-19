//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //输入框显隐
    showPassword: false,
    // 输入框参数设置
    inputData: {
      input_value: "",//输入框的初始内容
      value_length: 0,//输入框密码位数
      isNext: false,//是否有下一步的按钮
      get_focus: true,//输入框的聚焦状态
      focus_class: true,//输入框聚焦样式
      value_num: [1, 2, 3, 4, 5, 6],//输入框格子数
      height: "98rpx",//输入框高度
      width: "604rpx",//输入框宽度
      see: false,//是否明文展示
      interval: true,//是否显示间隔格子
    },
  },
  // 6位密码输入成功后
  valueSix(e) {
    console.log('交易密码' + e.detail);
    this.hidePassBord()
    // 模态交互效果
    wx.showToast({
      title: '支付成功',
      icon: 'success',
      duration: 2000
    })
  },
  //显示交易密码框
  passwordInput() {
    this.setData({
      showPassword: true,
    })
  },
  //隐藏交易密码框
  hidePassBord() {
    this.setData({
      showPassword: false,
    })
  },
 
})
