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
  $(".page0 .next_btn").click(function(){
	  //姓名/出生日期/年龄/性别不能为空
	  if($('#name').val() == null || $('#name').val() == '' || $('#name').val() == undefined){
		  $.alerts.alert('提示','姓名不能为空',function(){
			  return false;
		  });
	  }else if($('#sex').val() == null || $('#sex').val() == '' || $('#sex').val() == undefined){
		  $.alerts.alert('提示','性别不能为空',function(){
			  return false;
		  });
	  }else if($('#date').val() == null || $('#date').val() == '' || $('#date').val() == undefined){
		  $.alerts.alert('提示','出生日期不能为空',function(){
			  return false;
		  });
	  }else if($('#age').val() == null || $('#age').val() == '' || $('#age').val() == undefined){
		  $.alerts.alert('提示','年龄不能为空',function(){
			  return false;
		  });
	  }else{
		  nextBtn($(this));
	  }
  })
  // 点击年龄,根据前面的出生日期进行判断
  $('#age').click(function(){
	  if("" != $("#date").val().trim()){
		  var year = $("#date").val().trim().split('-')[0];
		  $("#age").val(parseInt(new Date().getFullYear()) - parseInt(year));
	  }
  })
  
	function nextBtn(that){
		var page = '.'+that.parent().attr("page");
		$(".leftNav li").removeClass("active");
		$('.leftNav '+page).addClass("active");//利用pages属性去控制左侧导航
		var loadUrl = that.attr("url");//获取url
		var index = that.attr("page");//获取page属性
		yCookie.set("currPageIndex", index);
		$('.wrap').load(baseUrl.webProjUrl() + loadUrl); 
	}
});


