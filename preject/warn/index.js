Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:{
      num: 0,
      desc:''
    },
    takephotos:'拍摄/相册',
    buttonStyle : 'default',
    checkboxValue:[],
    itemsphoto:[],
    itemsvalue:[{
      value:"私锁私用",
      checked:false,
      color:"#b9dd08"      
    },
      {
        value: "轮胎坏了",
        checked: false,
        color: "#b9dd08"
      },
      {
        value: "车锁坏了",
        checked: false,
        color: "#b9dd08"
      },
      {
        value: "违规乱停",
        checked: false,
        color: "#b9dd08"
      },
      {
        value: "密码不对",
        checked: false,
        color: "#b9dd08"
      },
      {
        value: "刹车坏了",
        checked: false,
        color: "#b9dd08"
      },
      {
        value: "其他故障",
        checked: false,
        color: "#b9dd08"
      }]
      
  },
  changeCheckbox:function(e){
    console.log(e)
    var _value = e.detail.value
    if(_value.length != 0){
      this.setData({
        buttonStyle:"primary",
        checkboxValue : _value
      })
    }else{
      this.setData({
        buttonStyle:'default',
        checkboxValue:[]
      })
    }
  },
  takePhohos:function(){
    console.log(111)
    wx.chooseImage({
      success:(res)=>{
        console.log(res)

        var _itemsphoto = this.data.itemsphoto;
        var temp = res.tempFilePaths;
        console.log(temp)
        for(let item of temp){
          _itemsphoto.push(item)
        }
        this.setData({
          itemsphoto:_itemsphoto,
          takephotos:"+"
        })
      }
    })
  },
  icontap:function(e){
    let _index = e.target.dataset.index;
    let _itemsphoto = this.data.itemsphoto;
    console.log(_itemsphoto)
    _itemsphoto.splice(_index,1)
    this.setData({
      itemsphoto :_itemsphoto
    })
    if(_itemsphoto.length == 0){
      this.setData({
        takephotos:'拍摄/相册'
      })
    }
  },
  changenum:function(e){
    this.setData({
      inputValue:{
        num:e.detail.value,
        desc:this.data.inputValue.desc
      }
    })
  },
  changedesc: function (e) {
    this.setData({
      inputValue: {
        num: this.data.inputValue.num,
        desc: e.detail.value
      }
    })
  },
  submit:function(){
    if(this.data.checkboxValue.length > 0 && this.data.itemsphoto.length > 0){
      wx.request({
        url: 'https://www.easy-mock.com/mock/5afd2adb659068782e121874/example/#!method=get',
        // method:'POST',
        // data:{
        //   checkboxValue : this.data.checkboxValue
        // },
        success:(res)=>{
          console.log(res)
          wx.showToast({
            title: '提交成功',
            icon:'success'
          })
          
        }
      })
    }else{
      wx.showModal({
        title: '请填写完整的反馈信息',
        content: '你愁啥  快去填啊',
        confirmText:'我我填',
        cancelText:"劳资不填",
        success:(res)=>{
          console.log(res)
          if(res.confirm){

          }else{
            wx.navigateBack({
              delta : 1
            })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData
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