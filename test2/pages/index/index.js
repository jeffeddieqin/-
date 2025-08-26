Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['山东省','青岛市','黄岛区']
  },
  regionChange:function(e){
    this.setData({region:e.detail.value});
    this.getWeather();
  },
  getWeather:function(){
    var that=this;
    wx.request({ //获取地址
      url:'https://pu5pwcrrwb.re.qweatherapi.com/geo/v2/city/lookup',
      data:{
        location:that.data.region[0],
        key:'ba333ef9395f4e908d22c7764a5cd3ad'
      },
      success(res1){
       wx.request({
        url:'https://pu5pwcrrwb.re.qweatherapi.com/v7/weather/now',
        data:{
          location:res1.data.location[2].id,
          key:'ba333ef9395f4e908d22c7764a5cd3ad'
        },
        success:function(res2){
          that.setData({now:res2.data.now});
          console.log(res2.data);
        }
      })
    }
    })
    
    
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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