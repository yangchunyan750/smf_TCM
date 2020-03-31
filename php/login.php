<?php
	require_once "sqlTool.class.php";
	$mysqli=new SqlTool();
	if(isset($_POST['userName'])){
		$userName=$_POST['userName'];
	}
	if(isset($_POST['password'])){
		$password=$_POST['password'];
	}
	$sql="select * from sys_user where USER_NAME='".$userName."'and PASS_WORD ='".$password."'";
	$res=$mysqli->execute_dql($sql);
	echo $res->num_rows;
	
?>