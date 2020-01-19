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
  //主模块点击改变背景色
  $('#content li').click(function(){
	  $('#content li').css({'background-color':'#fff','color':'#000'});
	  $(this).css({'background-color':'rgb(0,162,232)','color':'#fff'});
  })
});