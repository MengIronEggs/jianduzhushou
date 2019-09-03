// 引入公共js
import common from '../../utils/common.js';
// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [
      ["湖南省"],
      ["省直管", "长沙市", "张家界市", "常德市", "益阳市", "岳阳市", "株洲市", "湘潭市", "衡阳市", "郴州市", "永州市", "邵阳市", "怀化市", "娄底市", "湘西土家族苗族自治州"],
      ["省直管"],
    ],
    multiIndex: [0, 0, 0],
    isTabOne:true,
    isTabTwo:false,
    isTabThree:false,
  },
  /**
   * 下拉确定的点击事件
   */
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  /**
   * 监听列的变化的方法
   */
  bindMultiPickerColumnChange: function (e) {
    console.log("修改的列为", e.detail.column, "，值为", e.detail.value);
    var data = common.queryCity(this.data.multiArray, this.data.multiIndex, e.detail.column, e.detail.value);
    this.setData(data);
  },
  /**
   * 头部table栏的点击事件
   */
  oneTableClick(){
    this.setData({
      isTabOne: true,
      isTabTwo: false,
      isTabThree: false,
    });
  },
  twoTableClick(){
    this.setData({
      isTabOne: false,
      isTabTwo: true,
      isTabThree: false,
    });
  },
  threeTableClick(){
    this.setData({
      isTabOne: false,
      isTabTwo: false,
      isTabThree: true,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})