const wechat = require("/utils/weChat.js")
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    wechat: wechat,
    appApiUrl01:"http://usercenter.dev.yinchengku.com:15000",
    appApiUrl02:"http://channelraise.dev.yinchengku.com:16001"
  }
})