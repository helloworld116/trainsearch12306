<?php
header ( 'Content-Type:text/html;charset=UTF-8' );
$query = $_SERVER["QUERY_STRING"];
$real = "http://dynamic.12306.cn/otsquery/query/queryRemanentTicketAction.do?".$query;
$data = file_get_contents ($real);
echo $data;
?>