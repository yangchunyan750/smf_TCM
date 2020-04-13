$(document).ready(function(){
  //关闭弹窗 鼠标划过小手显示
  $('.close_btn').click(function(event){
	  $('#Popup').css('display','none');
  }).mouseover(function(){
  	  $(this).css({'cursor':'pointer'});
	  $(this).removeClass('pos_in').addClass('pos_out');
  }).mouseout(function(){
	  $(this).removeClass('pos_out').addClass('pos_in');
  })
  $(".nav li,button").hover(function(){
  	  $(this).css('cursor','pointer');
  })
  $(".next_btn").click(function(){
	  var page = '.'+$(this).parent().attr("page");
	  $(".leftNav li").removeClass("active");
	  $('.leftNav '+page).addClass("active");//利用pages属性去控制左侧导航
	  var loadUrl = $(this).attr("url");//获取url
	  var index = $(this).attr("page");//获取page属性
	  yCookie.set("currPageIndex", index);
	  console.log("loadUrl:"+loadUrl);
	  $('.wrap').load(baseUrl.webProjUrl() + loadUrl); 
  })
  // 点击年龄,根据前面的出生日期进行判断
  $('#age').click(function(){
	  if("" != $("#date").val().trim()){
		  var year = $("#date").val().trim().split('-')[0];
		  $("#age").val(parseInt(new Date().getFullYear()) - parseInt(year));
	  }
  })
  
});


