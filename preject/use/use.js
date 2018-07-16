Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:10,
    s : 0,
    m : 0,
    h : 0,
    actionText:'正在计费',
    disabled:false,
  },
  bindtap: function () {
    var value = this.data.value;
    console.log(value)
    this.setData({
    value: ++value 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      number:options.number
    })
    let h = 0 ,
      s = 0,
      m = 0;
    this.timer = setInterval(()=>{
      this.setData({
        s : ++s
      })
      if(s == 60){
        s = 0
        this.setData({
          m : ++m,
          s : 0,
        })
        if(m == 60){
          m = 0
          this.setData({
            m:0,
            h : ++h
          })
        }
      }
    },10) 
  },
  endride: function(){
    clearInterval(this.timer)
    this.timer = ""
    this.setData({
      actionText:'本次骑行时间',
      disabled:true,
    })
  },
  movetoIndex : function(){
    if(this.timer == ''){
      wx.redirectTo({
        url: '../index/index',
      })
    }else{
      wx.navigateTo({
        url: '../index/index?timer='+this.timer,
      })
    }
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