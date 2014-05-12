////////////////////////////////////////

function getCourses(){


	$.getJSON( "mock-data/courses2.json", function( json ) {
		var items = [];
		$.each( json, function( key, val ) {
			items.push( "<option value='" + key + "'>" + val + "</option>" );
		});
		$(items.join( "" )).appendTo( ".course-select" );
		$(".course-select").trigger("chosen:updated");
	});
	jQuery(document).ready(function(){
		jQuery(".course-select").chosen();
		$(".course-select").trigger("chosen:updated");
	});

/**
	$(document).ready(function(){

	$.ajax({
		type: "GET",
		url: "xml/Courses.xml",
		dataType: "xml",
		success: function(xml) {
		
			$(xml).find('course').each(function(){
				//alert($(this).find('year').text());


						//alert($(this).find('rotation_term').find('term').text());
						var subject = $(this).find('subject').text();
						var courseno = $(this).find('course_number').text();
						var name = $(this).find('course_name').text();
						//alert(courseno[0]);
					
							//alert($(this).find('course_name').text());
							
								var key = subject + courseno;
								key = key.replace(/ /g, "_");

								//document.getElementById("dump").innerHTML += key + "<br>";
								var option = "<option value='" + key + "'>" + subject + " " + courseno + " " + name + " </option>"
								//alert(option);

								$(option).appendTo("#course-select");	
								$("#course-select").trigger("chosen:updated");
							//alert(key + " added");
						
						});
					
				
				
			}

	});
		
		//
	});

	
	$(".course-select").chosen();

*/
}

///////////////////////////////////////

function getWaived(){



	$.getJSON( "mock-data/required.json", function( json ) {
		var items = [];
		$.each( json, function( key, val ) {

			items.push( "<option value='" + key + "'>" + val + "</option>" );
		});
		$(items.join( "" )).appendTo( ".waived-select" );
		$(".waived-select").trigger("chosen:updated");
	});
	jQuery(document).ready(function(){
		jQuery(".waived-select").chosen();
		$(".waived-select").trigger("chosen:updated");
	});

/**
	$(document).ready(function(){

	$.ajax({
		type: "GET",
		url: "xml/MSCSDegreeReq.xml",
		dataType: "xml",
		success: function(xml) {
		
			$(xml).find('corecourse').each(function(){
				//alert($(this).find('year').text());


						//alert($(this).find('rotation_term').find('term').text());
						var subject = $(this).find('subject').text();
						var course_number = $(this).find('course_number').text();
						var course_name = $(this).find('course_name').text();
						//var noofclasses = $(this).find('noofclasses').text();
						//var level       = $(this).find('atlevel').text();
						//alert(courseno[0]);
					       
							//alert($(this).find('course_name').text());
							
								var key = subject + course_number;
								key = key.replace(/ /g, "_");
                          
								//document.getElementById("dump").innerHTML += key + "<br>";
								var option = "<option value='" + key + "'>" + subject + " " + course_number + " " + course_name + " </option>"
								//alert(option);

								$(option).appendTo("#waived-select");	
								$("#waived-select").trigger("chosen:updated");
						});
					
				
				
			}

	});
		
		//
	});

	
	$(".waived-select").chosen();
*/
}

//////////////////////////////////////

function getPrefered(){


	
	$(document).ready(function(){

	$.ajax({
		type: "GET",
		url: "xml/Courses.xml",
		dataType: "xml",
		success: function(xml) {
		
			$(xml).find('course').each(function(){
				//alert($(this).find('year').text());


					//alert($(this).find('rotation_term').find('term').text());
						var subject = $(this).find('subject').text();
						var courseno = $(this).find('course_number').text();
						var name = $(this).find('course_name').text();
						var required = $(this).find('and_required').text();
						//alert(courseno[0]);
					       
							//alert($(this).find('course_name').text());
							
								var key = subject + courseno;
								key = key.replace(/ /g, "_");
                              if((courseno >= 4000)||(courseno >= 5000))
							  {
								//document.getElementById("dump").innerHTML += key + "<br>";
								var option = "<option value='" + key + "'>" + subject + " " + courseno + " " + name + " </option>"
								//alert(option);

								$(option).appendTo("#prefered-select");	
								$("#prefered-select").trigger("chosen:updated");
							//alert(key + " added");
						     }
						});
					
				
				
			}

	});
		
		//
	});

	
	$(".prefered-select").chosen();
/**
	jQuery(document).ready(function(){
		jQuery("."+ year + term+ "-select").chosen();
		$("#"+ year + term+ "-select").trigger("chosen:updated");
	});

*/
}

//////////////////////////////////////
var xhr;
var yearstore = 2014;
var termstore = "Fall";
var schedule;
var takencourses;
var waivedcourses;
var timepref;
var minclasses;
var maxclasses;
var graphplan;
//////////////////////////////////////

function Show(){       
	//alert("in");
	graphplan = document.getElementById("graphplan").checked;
	//alert(graphplan);
	takencourses = [];
	waivedcourses = [];
	var coursesTaken = document.getElementById("course-select");
	var count = 0;
	var result1 = "[";
	       //step through options
       for (i = 0; i < coursesTaken.length; i++){
         //examine current option
          currentOption = coursesTaken[i];

          //print it if it has been selected
          if (currentOption.selected == true){
          	if(count == 1){ result1 += ","};
          	count = 1;
            result1 += "\" " + currentOption.value + "\"";
			takencourses.push(currentOption.value);
          } // end if
        } // end for loop

        //finish off the list and print it out
        result1 += "]";

	var coursesWaived = document.getElementById("waived-select");
	count = 0;
    var result2 = "[";
	       //step through options
       for (i = 0; i < coursesWaived.length; i++){
         //examine current option
          currentOption = coursesWaived[i];

          //print it if it has been selected
          if (currentOption.selected == true){
          	if(count == 1) result2 += ",";
          	count = 1;
            result2 += "\"" + currentOption.value + "\"";
			waivedcourses.push(currentOption.value);
          } // end if
        } // end for loop

        //finish off the list and print it out
        result2 += "]";
        
	var coursePref = document.getElementById("prefered-select");  
	count = 0;      
        var result3 = "[";
	       //step through options
       for (i = 0; i < coursePref.length; i++){
         //examine current option
          currentOption = coursePref[i];

          //print it if it has been selected
          if (currentOption.selected == true){
          	if(count == 1) result3 += ",";
          	count = 1;
            result3 += "\"" + currentOption.value + "\"";
          } // end if
        } // end for loop

        //finish off the list and print it out
        result3 += "]";
        
	var taken = result1;
	var waived = result2;
	var prefered = result3;
	var timeofday = document.getElementsByName('time');
	for(var i = 0; i < timeofday.length; i++){
		if(timeofday[i].checked){
			timepref = "\"" + timeofday[i].value + "\"";
		}
	}
	var noclassesmax = "\"" + document.getElementById("maxnumb").selectedIndex + "\"";
	maxclasses = document.getElementById("maxnumb").selectedIndex;

	var noclassesmin =  "\"" + document.getElementById("minnumb").selectedIndex + "\"";
	minclasses = document.getElementById("minnumb").selectedIndex
	
	var student = '{"student": {"courses": {"taken":' + taken + ',"waived":' + waived + ',"prefered":' + prefered + '},"timePref": {"timeofday":' + timepref + ',"maxclasses":' + noclassesmax + ',"minclasses":' + noclassesmin + '}}}';

	timepref = timepref.replace(/"/, "");
	timepref = timepref.replace(/"/, "");
	//document.getElementById("Input").textContent = student;
	
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = build;//put this on the new page
	xhr.open("POST","php/mirror.php?&student=" + student,true);
	xhr.send();

	build();
}



function check(select){
	//alert('in');
	var courses = $('#'+select.id).val();
	//var text = $('#'+select.id).text();
	//var names = text.split(/([DE])/)
	//alert(String(names));
	var info = select.id.split("-");
	var semester = info[0];
	//alert(schedule.Schedule[semester].length);
	var type;
	var coursevar;
	var coursename;
	
	for (var course in schedule.Schedule[semester]){ 
		var pass = 0;
		for (var selcourse in courses){

			if(courses[selcourse] == course) pass = 1;
			//alert(courses[selcourse] + " " + course + " " + pass);
		}
		if(pass == 0){
			type = "remove";
			coursevar = course;

		}
	}

	for (var selcourse in courses){ 
		var pass = 0;
		for (var course in schedule.Schedule[semester]){

			if(courses[selcourse] == course) pass = 1;
			//alert(courses[selcourse] + " " + course + " " + pass);
		}
		if(pass == 0){
			type = "add";
			coursevar = courses[selcourse];
			//coursename = names[selcourse];
			//alert(coursevar + " " + coursename);
		}
	}
	//for(var test in schedule.Schedule[semester])alert(test);
	
	//alert(schedule.Schedule[semester][coursevar] + " " + type);
	if (type == "remove"){
		delete schedule.Schedule[semester][coursevar];
	}
	else if (type == "add"){
		schedule.Schedule[semester][coursevar] = coursevar;
	}
	//alert(schedule.Schedule[semester][coursevar] + " " + type);
	//for(var test in schedule.Schedule[semester])alert(test);
	checkReqs();

}

function checkReqs(){
	var required = [];
	var courses = [];
	document.getElementById("remaining").innerHTML = "";
	for (var semester in schedule.Schedule){
		//alert(semester);

		for (var course in schedule.Schedule[semester]){ 
			courses.push(course);
		}
		//alert(courses);
	}
	

	$(document).ready(function(){

	$.ajax({
		type: "GET",
		url: "xml/MSCSDegreeReq.xml",
		dataType: "xml",
		success: function(xml) {
		
			$(xml).find('corecourse').each(function(){
				//alert($(this).find('year').text());


				//alert($(this).find('rotation_term').find('term').text());
				var subject = $(this).find('subject').text();
				var course_number = $(this).find('course_number').text();
				var course_name = $(this).find('course_name').text();
				//var noofclasses = $(this).find('noofclasses').text();
				//var level       = $(this).find('atlevel').text();
				//alert(courseno[0]);
				      
				//alert($(this).find('course_name').text());
				
				var key = subject + course_number;
				key = key.replace(/ /g, "_");
                     
				//document.getElementById("dump").innerHTML += key + "<br>";
				var val = subject + " " + course_number + " " + course_name + "</br>";
				var pass = 0;
				for (var course in courses){
					//alert(courses[course] + " " + key);
					if (courses[course] == key) pass = 1;
					else;
				}
				for (var course in takencourses){
					//alert(courses[course] + " " + key);
					if (takencourses[course] == key) pass = 1;
					else;
				}
				for (var course in waivedcourses){
					//alert(courses[course] + " " + key);
					if (waivedcourses[course] == key) pass = 1;
					else;
				}
				//alert(val);
				if (pass == 0){
					document.getElementById("remaining").innerHTML += val;

				}
				else;

			});
			//alert(required);
			//$(required.join("")).appendTo("#required");
		
		}

	});
		
		//
	});
	var fivecount = 0;
	var sixcount = 0;
	var totalcount = 0;
	for (var course in courses){
		
		var number = courses[course][7];
		//alert(number);
		if (number >= 4) totalcount = totalcount + 1;
		if (number >= 5) fivecount = fivecount + 1;
		if (number == 6) sixcount = sixcount + 1;
		
		
	}
		for (var course in takencourses){
		
		var number = takencourses[course][7];
		//alert(number);
		if (number >= 4) totalcount = totalcount + 1;
		if (number >= 5) fivecount = fivecount + 1;
		if (number == 6) sixcount = sixcount + 1;
		
		
	}
	document.getElementById("fivek").innerHTML = fivecount + "/6 Courses of 5000 level or higher";
	document.getElementById("sixk").innerHTML = sixcount + "/1 6000 Level Course";
	document.getElementById("thirtyhours").innerHTML = totalcount * 3 + "/30 Hours";


}
/**
function Back(){
	document.getElementById("inputs").style.display="";
	document.getElementById("Output").style.visibility="hidden";
	document.getElementById("back").style.visibility="hidden";
	document.getElementById("add").style.visibility="hidden";
}
*/


var counter = 0;

function test(){
	//alert("in");
	var html = "<select multiple class='" + counter + "chosen-select'>";
		html += "<option value='" + counter + "apple'>" + counter + "apple</option>";
		html += "<option value='" + counter + "orange'>" + counter + "orange</option>";
		html += "<option value='" + counter + "pear'>" + counter + "pear</option>";
		html += "<option value='" + counter + "grape'>" + counter + "grape</option>";
		html += "<option value='" + counter + "berry'>" + counter + "berry</option>";
		html += "</select>";

	$(html).appendTo("#schedule");
	$("." + counter + "chosen-select").chosen();


	counter = counter + 1;




}



function build(){
	//alert("in");

	//alert(xhr.readyState);
	if ((xhr.readyState == 4) && (xhr.responseText != "")) {
		//alert("now...");
		
		var response = xhr.responseText;
		//document.getElementById("schedule").innerHTML = response;
	
	if (graphplan == "true"){
		schedule = eval ("(" + response + ")"); 
	}
	else{
		var response = '{"Schedule":{"Fall_2014":{"CMP_SCI4250":"CMP SCI 4250 Programming Languages","CMP_SCI5130":"CMP SCI 5130 Advanced Data Structures and Algorithms","CMP_SCI5420":"CMP SCI 5420 Digital Image Processing","CMP_SCI4410":"CMP SCI 4410 Computer Graphics"},"Spring_2015":{"CMP_SCI4760":"CMP SCI 4760 Operating Systems","CMP_SCI5500":"CMP SCI 5500 Software Engineering","CMP_SCI5700":"CMP SCI 5700 Computer Systems","CMP_SCI5320":"CMP SCI 5320 Introduction to Evolutionary Computation"},"Fall_2015":{"CMP_SCI6340":"CMP SCI 6340 Genetic Programming","CMP_SCI5010":"CMP SCI 5010 Enterprise Web Development"}}}';
		schedule = eval ("(" + response + ")"); 
	}



	var courses;
	for (var semester in schedule.Schedule){
		//alert(semester);
		courses = [semester];

		for (var course in schedule.Schedule[semester]){ 
			courses.push(course);
		}
		//alert(courses);
		addSemester(courses);
	}

	checkReqs();
	

	document.getElementById("inputs").style.display="none";
	document.getElementById("Output").style.visibility="visible";
	document.getElementById("scheduleholder").style.visibility="visible";
	//document.getElementById("back").style.visibility="visible";
	//document.location.href = "response.html";
	document.getElementById("add").style.visibility="visible";
	}
}


function addNew(){
	var semester = [ termstore + "_" + yearstore];
	//alert(semester);
	schedule.Schedule[semester] = semester;


	if (termstore == "Fall"){
		yearstore = yearstore + 1;
		termstore = "Spring";
	}
	else termstore = "Fall";


	if (semester != "FALL_2017"){
		addSemester(semester);
	}
	else;
}

function addSemester(list){
		


	var info = list[0].split("_");
	var year = info[1];
	var term = info[0];

	if (term == "Fall"){
		yearstore = yearstore + 1;
		termstore = "Spring";
	}
	else termstore = "Fall";


	var html = "<tr><td>" + term + " " + year + "</td></tr><tr><td>";
	var semester = list[0];
	//alert(list[0]);
	html += "<select multiple class='"+ semester + "-select' id='"+ semester +"-select' tabindex='3' style='width:500px;' onchange='check(this)'>";
	html += "</select></td></tr>";
	$(html).appendTo("#schedule");
	//document.getElementById("schedule").innerHTML += semester;
	


	
	$(document).ready(function(){

	$.ajax({
		type: "GET",
		url: "xml/Rotation.xml",
		dataType: "xml",
		success: function(xml) {
		
			$(xml).find('rotation_year').each(function(){
				//alert($(this).find('year').text());
				if ($(this).find('year').text() == year){
					$(this).find('course').each(function(){
						//alert($(this).find('rotation_term').find('term').text());
						var subject = $(this).find('subject').text();
						var courseno = $(this).find('course_number').text();
						var name = $(this).find('course_name').text();
						//alert(courseno[0]);
						$(this).find('rotation_term').each(function(){
							var time = $(this).find('time_code').text();
							var sem = $(this).find('term').text();
							if (sem.indexOf(term) > -1 && time != "" && courseno[0] >= 4){
							//alert($(this).find('course_name').text());
								var add = 1;
								var key = subject + courseno;
								key = key.replace(/ /g, "_");
								
								for (var i in takencourses){
									if(key == takencourses[i]) add = 0;
									else;
								}
								for (var i in waivedcourses){
									if(key == waivedcourses[i]) add = 0;
									else;
								}
								//alert(timepref + " " + time);
								if (timepref == "evening" && time != "E") add = 0;
								else;
								//alert(add);
								if(add == 1){
									//document.getElementById("dump").innerHTML += key + "<br>";
									var option = "<option value='" + key + "' ";
									/**
									if( courseno == 4250 || courseno == 4760 || courseno == 5130 || courseno == 5500 || courseno == 5700){
										option += "style='background-color:green;'";
									}
									*/
									for (var course in list){
										//alert(list[course] + "  " + key);
										if (list[course] == key){
											option += "selected='selected'";
											//alert("found it");
											}
										else ;
									}
									option += ">" + subject + " " + courseno + " " + name + " (" + time +")</option>"
									//alert(option);
	
									$(option).appendTo("#"+ semester + "-select");	
									$("#"+ semester + "-select").trigger("chosen:updated");
								}
							//alert(key + " added");
						}
						});
					});
				}
				
			});
				
		}

	});
		
		//
	});

	
	$("." + semester + "-select").chosen();

	$("." + semester + "-select").chosen({
		max_selected_options: 4
	});
/**
	jQuery(document).ready(function(){
		jQuery("."+ year + term+ "-select").chosen();
		$("#"+ year + term+ "-select").trigger("chosen:updated");
	});

*/
}
