var URL = "http://api01.bitspaceman.com:8000/movie/douban?apikey=ScceUDpXIP7oKjSqGgQhbKOKvn5kfpbmeChXz0Ojjota8XxPLIXAvuqNiMY9U7fS&catid=喜剧";

var URL1 = "http://api01.bitspaceman.com:8000/movie/douban?apikey=ScceUDpXIP7oKjSqGgQhbKOKvn5kfpbmeChXz0Ojjota8XxPLIXAvuqNiMY9U7fS&catid=爱情";

var URL2 = "http://api01.bitspaceman.com:8000/movie/douban?apikey=ScceUDpXIP7oKjSqGgQhbKOKvn5kfpbmeChXz0Ojjota8XxPLIXAvuqNiMY9U7fS&catid=动作";

var URL3 = "http://api01.bitspaceman.com:8000/movie/douban?apikey=ScceUDpXIP7oKjSqGgQhbKOKvn5kfpbmeChXz0Ojjota8XxPLIXAvuqNiMY9U7fS&catid=科幻";

var URL4 = "http://api01.bitspaceman.com:8000/movie/douban?apikey=ScceUDpXIP7oKjSqGgQhbKOKvn5kfpbmeChXz0Ojjota8XxPLIXAvuqNiMY9U7fS&catid=恐怖";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    joyMovies: [],
    loveMovies: [],
    actionMovies: [],
    tecMovies: [],
    kongMovies: [],
    keyWords: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.showLoading({
          title: '加载中...',
      })
      var _this = this;
      wx.request({
          url: URL,
          success: function (res) {
            //   wx.hideLoading();

              console.log(res.data);

              // pageToken = parseInt(res.data.pageToken);
              // pageToken += 10;

              for (var i = 0; i < res.data.data.length; i++) {
                  res.data.data[i].coverUrl = res.data.data[i].coverUrl.replace(/img7/, 'img3');
              }

              // console.log(res.data);

              _this.setData({
                  joyMovies: res.data.data
              })

              // console.log(_this.data.movies)

          }
      });

      setTimeout(function() {
          wx.request({
              url: URL1,
              success: function (res) {
                //   wx.hideLoading();

                  console.log(res.data);

                  // pageToken = parseInt(res.data.pageToken);
                  // pageToken += 10;

                  for (var i = 0; i < res.data.data.length; i++) {
                      res.data.data[i].coverUrl = res.data.data[i].coverUrl.replace(/img7/, 'img3');
                  }

                  // console.log(res.data);

                  _this.setData({
                      loveMovies: res.data.data
                  })

                  // console.log(_this.data.movies)

              }
          })
      }, 1000);

      setTimeout(function () {
          wx.request({
              url: URL2,
              success: function (res) {
                  wx.hideLoading();

                  console.log(res.data);

                  // pageToken = parseInt(res.data.pageToken);
                  // pageToken += 10;

                  for (var i = 0; i < res.data.data.length; i++) {
                      res.data.data[i].coverUrl = res.data.data[i].coverUrl.replace(/img7/, 'img3');
                  }

                  // console.log(res.data);

                  _this.setData({
                      actionMovies: res.data.data
                  })

                  // console.log(_this.data.movies)

              }
          })
      }, 2000);

      setTimeout(function () {
          wx.request({
              url: URL3,
              success: function (res) {
                //   wx.hideLoading();

                  console.log(res.data);

                  // pageToken = parseInt(res.data.pageToken);
                  // pageToken += 10;

                  for (var i = 0; i < res.data.data.length; i++) {
                      res.data.data[i].coverUrl = res.data.data[i].coverUrl.replace(/img7/, 'img3');
                  }

                  // console.log(res.data);

                  _this.setData({
                      tecMovies: res.data.data
                  })

                  // console.log(_this.data.movies)

              }
          })
      }, 3000);

      setTimeout(function () {
          wx.request({
              url: URL4,
              success: function (res) {
                //   wx.hideLoading();

                  console.log(res.data);

                  // pageToken = parseInt(res.data.pageToken);
                  // pageToken += 10;

                  for (var i = 0; i < res.data.data.length; i++) {
                      res.data.data[i].coverUrl = res.data.data[i].coverUrl.replace(/img7/, 'img3');
                  }

                  // console.log(res.data);

                  _this.setData({
                      kongMovies: res.data.data
                  })

                  // console.log(_this.data.movies)
                  wx.hideLoading();
                  wx.stopPullDownRefresh();

              }
          })
      }, 4000);
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
    this.onLoad();
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
    
  },
  navigateToJoyMovies: function () {
    //   console.log('ok');
    wx.navigateTo({
        url: '../cat/cat?catid=喜剧',
    })
  },
  navigateToLoveMovies: function() {
    wx.navigateTo({
        url: '../cat/cat?catid=爱情',
    })
  },
  navigateToActionMovies: function () {
      wx.navigateTo({
          url: '../cat/cat?catid=动作',
      })
  },
  navigateToTecMovies: function () {
      wx.navigateTo({
          url: '../cat/cat?catid=科幻',
      })
  },
  navigateToKongMovies: function () {
      wx.navigateTo({
          url: '../cat/cat?catid=恐怖',
      })
  }
})