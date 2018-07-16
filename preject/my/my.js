Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      userUrl:"",
      nickName:"未登录",

    },
    btnType: 'primary',
    btnText: '登录'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  getuserInfo:function(e){
    if (this.data.btnText =='登录'){
      console.log(e)
      this.setData({
        userInfo:{
          userUrl:e.detail.userInfo.avatarUrl,
          nickName: e.detail.userInfo.nickName
        },
        btnText:'退出登录',
        btnType:'warn'
      })
      wx.setStorage({
        key: 'userInfo',
        data: {
          userInfo: {
            userUrl: e.detail.userInfo.avatarUrl,
            nickName: e.detail.userInfo.nickName
          },
          btnInfo: {
            btnText: '退出登录',
            btnType: 'warn'
          }
        },
      })
    } else {
      wx.removeStorageSync('userInfo')
      this.setData({
        
        userInfo:{
          userUrl:'',
          nickName:'未登录'
        },
        btnType:'primary',
        btnText:'登录'
      })
    }
  },
  myWallet:function(){
    wx.navigateTo({
      url: '../wallet/wallet',
    })
  },
  // btnLoad:function(){
  //   if(this.data.btnText === '登录'){
  //     wx.login({
  //       success:()=>{
  //         wx.getUserInfo({
  //           success:(res)=>{
  //             console.log(res)
  //           }
  //         })
  //       }
  //     })
  //   }
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
  onReady: function () {
    wx.getStorage({
      key:'userInfo',
      success: (res)=> {
        console.log(res.data)
        this.setData({
          userInfo:{
            userUrl: res.data.userInfo.userUrl,
            nickName: res.data.userInfo.nickName
          },
          btnText: res.data.btnInfo.btnText,
          btnType: res.data.btnInfo.btnType
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})