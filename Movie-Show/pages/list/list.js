Page({
  data:{
    list:[],
	loading:true,
	title:'Loding...'
  },

  onLoad(params){
    //console.log(params.type)
	var apiUrl = 'https://api.douban.com/v2/movie/'+params.type
	var _this = this
	wx.request({
	  url: apiUrl, 
	  data: {},
	  header: {
		  'content-type': 'application/text'
	  },
	  success: function(res) {
		//console.log(res.data)
		_this.setData({list:res.data.subjects,title:res.data.title,loading:false})
	  }
	})
  }
})