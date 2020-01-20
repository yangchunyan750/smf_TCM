$(document).ready(function(){
	//点击登录弹出弹框提示
  $(".login").on('click',function(event){
	  event.preventDefault();
	  $('#Popup').css('display','block');
  })
  //关闭弹窗 鼠标划过小手显示
  $('.close_button').click(function(event){
	  $('#Popup').css('display','none');
  }).mouseover(function(){
  	  $(this).css('cursor','pointer');
  })
  //主模块点击改变背景色并切换右侧显示
  $('#content li').click(function(){
	  $('.content_wrap').css('display','none');
	  $('#content li').css({'background-color':'rgb(243,243,243)','color':'#000'});
	  $(this).css({'background-color':'rgb(31,184,205)','color':'#fff'});
	  $('.'+$(this).attr("class")).css('display','block')
  })
});