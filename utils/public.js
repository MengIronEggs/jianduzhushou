

let pUrl = "https://mt.guoanfamily.com/monitor/"
let pUrl1 = "https://test.guoanfamily.com/monitor/"

export default {
  $get(url, interfaceType = "") {
    pUrl = pUrl
    switch (interfaceType) {
      case "common":
        pUrl = pUrl;
        break;
      case "integral":
        pUrl = pUrl1;
        break;
    }
    // 获取token
    // let Authorization = wx.getStorageSync("token");
    // if (!Authorization) {
    //   Authorization = ""
    // }
    return new Promise((resolve, reject) => {
      wx.request({
        url: pUrl + url,
        header: {
          'content-type': 'application/json',
          // "Authorization": Authorization
        },
        method: 'GET',
        dataType: 'json',
        success(res) {
          if (res.code == 0 || res.status == 200 || res.Code == 200 || res.Status == 200 || res.statusCode == 200) {
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail(res) {
          reject(res)
        }
      })
    }).then((res) => {
      return res.data
    })
  },
  $post(url, data = {}, interfaceType = "") {
    pUrl = pUrl
    return new Promise((resolve, reject) => {
      switch (interfaceType) {
        case "common":
          pUrl = COMMON_API_URL;
          break;
        case "integral":
          pUrl = pUrl1;
          break;
      }
       // 获取token
      // let Authorization = wx.getStorageSync("token");
      // if (!Authorization) {
      //   Authorization = ""
      // }
      wx.request({
        url: pUrl + url,
        method: "POST",
        header: {
          'content-type': 'application/json',
          // "Authorization": Authorization
        },
        dataType: 'json',
        data: data,
        success(res) {
          if (res.code == 0 || res.status == 200 || res.Code == 200 || res.Status == 200 || res.statusCode == 200) {
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail(res) {
          reject(res)
        }
      })

    }).then((res) => {
      return res.data
    })
  }
}