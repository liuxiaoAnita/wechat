
/** 
 * Promise化小程序接口
 * */
class Wechat {
  /** 
   * 发起请求
   */
  static getApiData(url, method, data, token) {
    return new Promise((resolve, reject) => {
      let opts = {
        url, method, data, header: { 'Content-Type': "application/json;charset=UTF-8", token: token },
        complete: function (res) {
          wx.hideLoading();
          wx.hideToast();
          let data = res.data
          if (res.statusCode == 200) {
            resolve(data)
          } else if (res.statusCode && res.data.msg) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none'
            })
          } else {
            // wx.navigateTo({
            //   url: '/pages/error/error',
            // })
          }
        },
        fail: function () {
          // wx.navigateTo({
          //   url: '/pages/error/error',
          // })
        }
      };
      wx.request(opts);
    });
  }
};
module.exports = Wechat;  
