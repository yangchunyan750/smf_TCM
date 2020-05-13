<?php
	//将获取的数据存入到数据库，如果存入数据库成功弹出保存成功按钮
	require_once "sqlTool.class.php";
	$mysqli=new SqlTool();
	if(isset($_POST['userName'])){
	 $userName=$_POST['userName'];
	}
	if(isset($_POST['password'])){
	 $password=md5($_POST["password"]);
	}
?>