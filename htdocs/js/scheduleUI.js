//////////////////////////////////////
var xhr;
var taken = [];
var yearstore = 2016;
var termstore = "Spring";
//////////////////////////////////////

function Show(){       
	alert("in");
	var coursesTaken = document.getElementById("completed");
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
          } // end if
        } // end for loop

        //finish off the list and print it out
        result1 += "]";

	var coursesWaived = document.getElementById("waived");
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
          } // end if
        } // end for loop

        //finish off the list and print it out
        result2 += "]";
        
	var coursePref = document.getElementById("preferences");  
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
	var timepref;
	for(var i = 0; i < timeofday.length; i++){
		if(timeofday[i].checked){
			timepref = "\"" + timeofday[i].value + "\"";
		}
	}
	var noclassesmax = "\"" + document.getElementById("maxnumb").selectedIndex + "\"";
	var noclassesmin =  "\"" + document.getElementById("minnumb").selectedIndex + "\"";
	
	var student = '{"student": {"courses": {"taken":' + taken + ',"waived":' + waived + ',"prefered":' + prefered + '},"timePref": {"timeofday":' + timepref + ',"maxclasses":' + noclassesmax + ',"minclasses":' + noclassesmin + '}}}';


	//document.getElementById("Input").textContent = student;
	
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = build();//put this on the new page
	xhr.open("POST","php/mirror.php?&student=" + student,true);
	xhr.send();
	document.getElementById("inputs").style.display="none";
	document.getElementById("Output").style.visibility="visible";
	document.getElementById("back").style.visibility="visible";
	//document.location.href = "response.html";
	document.getElementById("add").style.visibility="hidden";
	build();
}

function changeTaken(evt, param){




}

function checkTaken(){
	



}
/**
function Back(){
	document.getElementById("inputs").style.display="";
	document.getElementById("Output").style.visibility="hidden";
	document.getElementById("back").style.visibility="hidden";
	document.getElementById("add").style.visibility="hidden";
}
*/
function buildSchedule(){

	var response = '{"Schedule":{"Fall_2014":{"CMP_SCI4250":"CMP SCI 4250 Programming Languages","CMP_SCI5130":"CMP SCI 5130 Advanced Data Structures and Algorithms","CMP_SCI4610":"CMP SCI 4610 Database Management Systems","CMP_SCI5320":"CMP SCI 5320 Introduction to Evolutionary Computation"},"Spring_2015":{"CMP_SCI4760":"CMP SCI 4760 Operating Systems","CMP_SCI5500":"CMP SCI 5500 Software Engineering"},"Fall_2015":{"CMP_SCI6340":"CMP SCI 6340 Genetic Programming","CMP_SCI5880":"CMP SCI 5880 Computer Science Independent Project","CMP_SCI5520":"CMP SCI 5520 Object Oriented Analysis and Design","CMP_SCI5700":"CMP SCI 5700 Computer Systems"}}}';


	var schedule = eval ("(" + response + ")"); 

	for (var semester in schedule.Schedule){
		var info = semester.split("_");
		var year = info[1];
		var term = info[0];
		//alert(semester + " " + year);

		var table ="<tr><td>" + semester + "</td></tr><tr><td>";

		table += "<select multiple class='" + semester + "-select' id='" + semester + "-select' tabindex='3' style='width:500px;'>";

		document.getElementById("schedule").innerHTML += table;


	$(document).ready(function(){

		$.ajax({
			type: "GET",
			url: "xml/Rotation.xml",
			dataType: "xml",
			success: function(xml) {

			$(xml).find('rotation_year').each(function(){

				//alert($(this).find('year').text() + " " + year);
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
							
								var key = subject + courseno;
								key = key.replace(/ /g, "_");

								document.getElementById("dump").innerHTML += key + "<br>";
								var option = "<option value='" + key + "' ";
								for (var course in schedule.Schedule[semester]){
									//alert(course + "  " + key);
									if (course == key) option += "selected='selected'";
									else;
								}
								option += ">" + subject + " " + courseno + " " + name + "</option>"

								$(option).appendTo("#"+ year + term + "-select");	
								$("#"+ year + term + "-select").trigger("chosen:updated");
							//alert(key + " added");
								}
							});
						});
					}
					
				});
			}
		});
		//$(items.join( "" )).appendTo( "#semester-select");
		//
	});

		document.getElementById("schedule").innerHTML += "</select></td></tr>";


		jQuery(document).ready(function(){
			jQuery("#"+semester+"-select").chosen();
			$("#"+semester+"-select").trigger("chosen:updated");
		});




		
	}
	//schedule.Schedule.Semester1[1]

		
		
}


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
/**
if ((xhr.readyState == 4) && (xhr.responseText != "")) {
		alert("now...");
		var response = xhr.responseText;

*/


	var response = '{"Schedule":{"Fall_2014":{"CMP_SCI4250":"CMP SCI 4250 Programming Languages","CMP_SCI5130":"CMP SCI 5130 Advanced Data Structures and Algorithms","CMP_SCI5420":"CMP SCI 5420 Digital Image Processing","CMP_SCI4410":"CMP SCI 4410 Computer Graphics"},"Spring_2015":{"CMP_SCI4760":"CMP SCI 4760 Operating Systems","CMP_SCI5500":"CMP SCI 5500 Software Engineering","CMP_SCI5700":"CMP SCI 5700 Computer Systems","CMP_SCI5320":"CMP SCI 5320 Introduction to Evolutionary Computation"},"Fall_2015":{"CMP_SCI6340":"CMP SCI 6340 Genetic Programming","CMP_SCI5010":"CMP SCI 5010 Enterprise Web Development"}}}';

	var schedule = eval ("(" + response + ")"); 

	var courses;
	for (var semester in schedule.Schedule){
		//alert(semester);
		courses = [semester];

		for (var course in schedule.Schedule[semester]){ 
			courses.push(course);
			taken.push(course);
		}
		//alert(courses);
		addSemester(courses);
	}

	//checkTaken();
	//}

	//document.getElementById("inputs").style.display="none";
	document.getElementById("Output").style.visibility="visible";
	document.getElementById("scheduleholder").style.visibility="visible";
	//document.getElementById("back").style.visibility="visible";
	//document.location.href = "response.html";
	document.getElementById("add").style.visibility="visible";
}

function addNew(){
	var semester = [ termstore + "_" + yearstore];
	if (termstore == "Fall"){
		yearstore = yearstore + 1;
		termstore = "Spring";
	}
	else termstore = "Fall";

	addSemester(semester);
}

function addSemester(list){
	var info = list[0].split("_");
	var year = info[1];
	var term = info[0];
	var semester = "<tr><td>" + term + " " + year + "</td></tr><tr><td>";
	var courses = list.shift();
	//alert(list[0]);
	semester += "<select multiple class='"+ year + term + "-select' id='"+ year + term +"-select' tabindex='3' style='width:500px;'>";
	semester += "</select></td></tr>";
	$(semester).appendTo("#schedule");
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
							
								var key = subject + courseno;
								key = key.replace(/ /g, "_");

								//document.getElementById("dump").innerHTML += key + "<br>";
								var option = "<option value='" + key + "' ";
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

								$(option).appendTo("#"+ year + term + "-select");	
								$("#"+ year + term + "-select").trigger("chosen:updated");
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

	
	$("." + year + term + "-select").chosen();
/**
	jQuery(document).ready(function(){
		jQuery("."+ year + term+ "-select").chosen();
		$("#"+ year + term+ "-select").trigger("chosen:updated");
	});

*/
}
