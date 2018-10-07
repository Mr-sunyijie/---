var pageToken = 10;
var URL1 = "http://api01.bitspaceman.com:8000/movie/douban?apikey=ScceUDpXIP7oKjSqGgQhbKOKvn5kfpbmeChXz0Ojjota8XxPLIXAvuqNiMY9U7fS&kw=";
var URL2 = "http://api01.bitspaceman.com:8000/movie/douban?apikey=ScceUDpXIP7oKjSqGgQhbKOKvn5kfpbmeChXz0Ojjota8XxPLIXAvuqNiMY9U7fS&catid=";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyWords: '',
    movies: [],
    value: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //     url: URL1,
    //     success: function (res) {
    //         console.log(res.data);
    //     }
    // })
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
    
  },
  scroll: function () {
      console.log('ok');
  },
  saveKeyWords: function (event) {
    //   console.log(event.detail.value)
    this.setData({
        keyWords: event.detail.value
    })
  },
  confirm: function () {
    var _this = this;
    //   console.log('ok');
    //对用户输入进行判断,如果关键字为类别则使用URL2发起请求
    var word = this.data.keyWords;
    var URL = '';
    if (word == '剧情' || word == '喜剧' || word == '爱情' || word == '动作' || word == '科幻' || word == '悬疑' || word == '惊悚' || word == '恐怖' || word == '犯罪' || word == '同性' || word == '音乐' || word == '歌舞' || word == '传记' || word == '历史' || word == '战争' || word == '西部' || word == '奇幻' || word == '冒险' || word == '灾难' || word == '武侠' || word == '情色') {
        URL = URL2 + word;
    }else {
        URL = URL1 + word;
    }
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
        }
    })
    // console.log(URL1 + this.data.keyWords);
  },
  scrolltolower: function () {
      var _this = this;
      console.log('ok');
      wx.showLoading({
          title: '加载中...',
      })
      //对用户输入进行判断,如果关键字为类别则使用URL2发起请求
      var word = this.data.keyWords;
      var URL = '';
      if (word == '剧情' || word == '喜剧' || word == '爱情' || word == '动作' || word == '科幻' || word == '悬疑' || word == '惊悚' || word == '恐怖' || word == '犯罪' || word == '同性' || word == '音乐' || word == '歌舞' || word == '传记' || word == '历史' || word == '战争' || word == '西部' || word == '奇幻' || word == '冒险' || word == '灾难' || word == '武侠' || word == '情色') {
          URL = URL2 + word;
      } else {
          URL = URL1 + word;
      }
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
  },
  clear: function (event) {
      this.setData({
          movies: []
      })
      this.setData({
          value: ''
      })
    //   console.log(e);
    event.detail.value;
  }
})