<?php
	$serverName = "localhost";
	$connectionInfo = array( "Database"=>"CSYY", "UID"=>"sa", "PWD"=>"SMFKJ12345");
	$conn = sqlsrv_connect( $serverName, $connectionInfo);
	$userName=$_POST['userName'];
	$password=HashBytes('MD5',$_POST['password'])
	$sql="SELECT * FROM GGuser where Name='".$userName."'and PasswordMD5 ='".$password."'";
	$params = array();
	$options =  array( "Scrollable" => SQLSRV_CURSOR_KEYSET );
	$stmt = sqlsrv_query( $conn, $sql , $params, $options );
	$row_count = sqlsrv_num_rows( $stmt );
	echo $row_count;
	sqlsrv_free_stmt($stmt);
	sqlsrv_close($conn);
?>