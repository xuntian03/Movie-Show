Page({
  data:{
    title:'Loding...',
	ori_title:'',
	year:'',
	directors:'',
	countries:'',
	image:'',
	summary:'',
    casts:[],
	average:''
  },
  
  onLoad(params){
    //console.log(params)
    var movUrl = 'https://api.douban.com/v2/movie/subject/'+params.id
	var _this = this
	wx.request({
	  url: movUrl, 
	  data: {},
	  header: {
		  'content-type': 'application/text'
	  },
	  success: function(res) {
		//console.log(res.data)
		_this.setData({average:res.data.rating.average,title:res.data.title,
		ori_title:res.data.original_title,year:res.data.year,
		directors:res.data.directors[0].name,countries:res.data.countries[0],
		image:res.data.images.large,summary:res.data.summary,casts:res.data.casts})
	  }
	})

  }
})