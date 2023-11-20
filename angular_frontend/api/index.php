<?php
include 'database.php';
$products = [];

$sql = "SELECT * FROM events";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$products[$i]['id'] = $row['id'];
		$products[$i]['title'] = $row['title'];
		$products[$i]['date_created'] = $row['date_created'];
		$products[$i]['descrip'] = $row['descrip'];
		$products[$i]['img'] = $row['img'];
		
		$i++;
	}
	echo json_encode($products);
}
else
{
	http_response_code(404);
}