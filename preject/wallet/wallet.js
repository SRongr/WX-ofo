Page({

  /**
   * 页面的初始数据
   */
  data: {
    balanceContent:0,
    carInfo:0
  },
  balanceInfoBtn:function(){
    wx.showModal({
      title: '你的余额',
      content: '该充钱了',
    })
  },
  carInfoBtn:function(){
    wx.showModal({
      title: '剩余用车卷',
      content: '0',
    })
  },
  yajinBtn:function(){
    wx.showModal({
      title: '押金',
      content: '200',
    })
  },
  aboutBtn: function(){
    wx.showModal({
      title: '关于ofo',
      content: 'ofoofoofoofoofoofoofoofoofoofo',
    })
  },
  moveToChongzhi:function(){
    wx.navigateTo({
      url: '../chongzhi/chongzhi',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({
      key: 'overage',
      success: (res) => {
        console.log(res)
        this.setData({
          balanceContent: res.data
        })
      },
    })
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