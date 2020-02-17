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
  //主模块点击改变背景色并切换显示
  $('.nav li').click(function(){
	  $('.content_wrap').css('display','none');
	  $('.nav li').css({'color':'#000'});
	  $(this).css({'color':'rgb(15,156,237)'});
	  // $('.' + $(this).attr("class") +'> .line').css({'display':'block','left':'40%'});
	  $('#content .'+$(this).attr("class")).css('display','block');
  })
  //点击下一步切换到下个模块界面
  $("#content-page .next_btn").click(function(){
	  var page = '.'+$(this).parent().attr("id");
	  var num = parseInt(page.charAt(page.length-1));
	  // 姓名,出生日期,年龄为空时弹出对话框
	  if("" != $("#name").val().trim() && "" != $("#date").val().trim() && "" != $("#age").val().trim()){
		  $('#page'+(num)).css('display','none');
		  $('#page'+(num+1)).css('display','block');
		  $('.nav li').css({'color':'#000'});
		  $('.nav li').eq(num).css({'color':'rgb(15,156,237)'})
	  }else{
		  if("" == $("#name").val()){
			  myAlert('','请输入姓名！',function(){});  
		  }
		  if("" == $("#date").val()){
			  myAlert('','请选择出生日期！',function(){});  
		  }
		  if("" == $("#age").val()){
		  	  myAlert('','请输入年龄！',function(){});  
		  }
	  }
	  
  })
  // 点击年龄,根据前面的出生日期进行判断
  $('#age').click(function(){
	  if("" != $("#date").val().trim()){
		  var year = $("#date").val().trim().split('-')[0];
		  $("#age").val(parseInt(new Date().getFullYear()) - parseInt(year));
	  }
  })
  //追加问诊题目选项
  var testCheckBox = 0;
  $('#hiddenresult  .inquiry').each(function(){
	testCheckBox++;  
    $(this).after("<p id='choose'><label><input type='radio' name="+testCheckBox+"/>无</label><label><input type='radio' name="+testCheckBox+"/>很少</label><label><input type='radio' name="+testCheckBox+"/>有时</label><label><input type='radio' name="+testCheckBox+"/>经常</label><label><input type='radio' name="+testCheckBox+"/>总是</label></p>") 
  });
});