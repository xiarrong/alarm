//logs.js
// const util = require('../../utils/util.js')

// Page({
//   data: {
//     logs: []
//   },
//   onLoad: function () {
//     this.setData({
//       logs: (wx.getStorageSync('logs') || []).map(log => {
//         return util.formatTime(new Date(log))
//       })
//     })
//   }
// })
Page({
  data:{
    logs: []
  },
  onShow: function () {
    var logs = wx.getStorageSync('todo_logs')
    if (logs) {
      this.setData({ logs: logs.reverse() })
    }
  },
})
