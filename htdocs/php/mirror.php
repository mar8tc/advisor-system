<?php

	//$student = $_REQUEST["student"];
	
	//echo $student . "<br>";
	
	//$newstudent = json_decode($student,true);
	//print "OK: We're in!";
	//var_dump($newstudent);
	
	//print json_encode($newstudent);
	//'{"Schedule":{"Fall_2014":{"CMP_SCI4250":"CMP SCI 4250 Programming Languages","CMP_SCI5130":"CMP SCI 5130 Advanced Data Structures and Algorithms","CMP_SCI5420":"CMP SCI 5420 Digital Image Processing","CMP_SCI4410":"CMP SCI 4410 Computer Graphics"},"Spring_2015":{"CMP_SCI4760":"CMP SCI 4760 Operating Systems","CMP_SCI5500":"CMP SCI 5500 Software Engineering","CMP_SCI5700":"CMP SCI 5700 Computer Systems","CMP_SCI5320":"CMP SCI 5320 Introduction to Evolutionary Computation"},"Fall_2015":{"CMP_SCI6340":"CMP SCI 6340 Genetic Programming","CMP_SCI5010":"CMP SCI 5010 Enterprise Web Development"}}}'

	$a = '"CMP_SCI4250":""';
	$b = '"CMP_SCI5130":""';
	$c = '"CMP_SCI5420":""';
	$d = '"CMP_SCI4410":""';

	$e = '"CMP_SCI4760":""';
	$f = '"CMP_SCI5500":""';
	$g = '"CMP_SCI5700":""';
	$h = '"CMP_SCI5320":""';
	$i = '"CMP_SCI6340":""';
	$j = '"CMP_SCI5010":""';
	
	$Semester1 = "Fall_2014";
	$Semester2 = "Spring_2015";
	$Semester3 = "Fall_2015";
	
	$response = '{"Schedule":{"'.$Semester1.'":{'.$a.','.$b.','.$c.','.$d.'},"'.$Semester2.'":{'.$e.','.$f.','.$g.','.$h.'},"'.$Semester3.'":{'.$i.','.$j.'}}}';
	

$graphplan = '{"Schedule":{"Spring_2016":{"CMP_SCI4730":"","CMP_SCI4500":"","CMP_SCI4760":"","CMP_SCI6410":"","CMP_SCI4280":"","CMP_SCI5700":"","CMP_SCI5500":"","CMP_SCI4250":""},"Fall_2016":{"CMP_SCI4410":"","CMP_SCI4760":"","CMP_SCI4280":"","CMP_SCI5130":"","CMP_SCI4250":"","CMP_SCI5010":"","CMP_SCI4500":"","CMP_SCI5420":"","CMP_SCI4010":""},"Fall_2014":{"CMP_SCI4410":"","CMP_SCI4760":"","CMP_SCI4780":"","CMP_SCI4290":"","CMP_SCI4250":"","CMP_SCI4730":"","CMP_SCI5420":"","CMP_SCI4500":"","CMP_SCI4880":"","CMP_SCI5880":"","CMP_SCI5700":"","CMP_SCI5500":"","CMP_SCI4010":""},"Fall_2015":{"CMP_SCI4410":"","CMP_SCI4500":"","CMP_SCI4760":"","CMP_SCI4280":"","CMP_SCI5130":"","CMP_SCI5740":"","CMP_SCI4010":"","CMP_SCI4250":"","CMP_SCI5010":""},"Spring_2015":{"CMP_SCI4730":"","CMP_SCI4500":"","CMP_SCI4760":"","CMP_SCI4280":"","CMP_SCI5700":"","CMP_SCI5500":"","CMP_SCI4250":""},"Spring_2017":{"CMP_SCI4730":"","CMP_SCI4500":"","CMP_SCI4760":"","CMP_SCI4280":"","CMP_SCI5700":"","CMP_SCI5500":"","CMP_SCI4250":""}}}';
	print $response;
	//print $graphplan;
?>
