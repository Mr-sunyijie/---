var URL = "http://api01.bitspaceman.com:8000/movie/douban?apikey=ScceUDpXIP7oKjSqGgQhbKOKvn5kfpbmeChXz0Ojjota8XxPLIXAvuqNiMY9U7fS&catid=";
var pageToken = 10;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      URL = "http://api01.bitspaceman.com:8000/movie/douban?apikey=ScceUDpXIP7oKjSqGgQhbKOKvn5kfpbmeChXz0Ojjota8XxPLIXAvuqNiMY9U7fS&catid=";

    console.log(options);

    URL = URL + options.catid;

    console.log(URL);

    var _this = this;
    wx.showLoading({
        title: '加载中...',
    })

    //发起http请求
    wx.request({
        url: URL,
        success: function (res) {
            wx.hideLoading();

            console.log(res.data);

            // pageToken = parseInt(res.data.pageToken);
            // pageToken += 10;

            for (var i = 0; i < res.data.data.length; i++) {
                res.data.data[i].coverUrl = res.data.data[i].coverUrl.replace(/img7/, 'img3');
            }

            for (var i = 0; i < res.data.data.length; i++) {

                res.data.data[i].title = res.data.data[i].title.slice(0, 8);

                console.log(res.data.data[i].title);
            }

            // console.log(res.data);

            _this.setData({
                movies: res.data.data
            })

            // console.log(_this.data.movies)
            // URL = "http://api01.bitspaceman.com:8000/movie/douban?apikey=ScceUDpXIP7oKjSqGgQhbKOKvn5kfpbmeChXz0Ojjota8XxPLIXAvuqNiMY9U7fS&catid=";
        }
    })
    // }
 
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
    console.log('ok');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  scrolltolower: function () {
      var _this = this;
      console.log('ok');
      wx.showLoading({
          title: '加载中...',
      })
    
      wx.request({
          url: URL + "&pageToken=" + pageToken,
          success: function (res) {
              wx.hideLoading();

              console.log(res.data);

              for (var i = 0; i < res.data.data.length; i++) {
                  res.data.data[i].coverUrl = res.data.data[i].coverUrl.replace(/img7/, 'img3');
              }

              for (var i = 0; i < res.data.data.length; i++) {

                  console.log(res.data.data[i].title);

                  res.data.data[i].title = res.data.data[i].title.slice(0, 8);

                  console.log(res.data.data[i].title);
              }

              // console.log(res.data);
              var nextMovies = _this.data.movies.concat(res.data.data)

              _this.setData({
                  movies: nextMovies
              })

              // console.log(_this.data.movies)
              pageToken += 10;

          }

      })
  }
})