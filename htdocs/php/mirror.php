<?php

	$student = $_REQUEST["student"];
	
	//echo $student . "<br>";
	
	//$newstudent = json_decode($student,true);
	//print "OK: We're in!";
	//var_dump($newstudent);
	
	//print json_encode($newstudent);
	
	$a = '"CMP_SCI4250":"CMP SCI 4250 Programming Languages"';
	$b = '"CMP_SCI5130":"CMP SCI 5130 Advanced Data Structures and Algorithms"';
	$c = '"CMP_SCI4610":"CMP SCI 4610 Database Management Systems"';
	$d = '"CMP_SCI5320":"CMP SCI 5320 Introduction to Evolutionary Computation"';
	$e = '"CMP_SCI4760":"CMP SCI 4760 Operating Systems"';
	$f = '"CMP_SCI5500":"CMP SCI 5500 Software Engineering"';
	$g = '"CMP_SCI6340":"CMP SCI 6340 Genetic Programming"';
	$h = '"CMP_SCI5880":"CMP SCI 5880 Computer Science Independent Project"';
	$i = '"CMP_SCI5520":"CMP SCI 5520 Object Oriented Analysis and Design"';
	$j = '"CMP_SCI5700":"CMP SCI 5700 Computer Systems"';
	
	$Semester1 = "Fall 2014";
	$Semester2 = "Spring 2015";
	$Semester3 = "Fall 2015";
	
	$response = '{"Schedule":{"'.$Semester1.'":{'.$a.','.$b.','.$c.','.$d.'},"'.$Semester2.'":{'.$e.','.$f.'},"'.$Semester3.'":{'.$g.','.$h.','.$i.','.$j.'}}}';
	
	print $response;
	
?>
