var xhr;
/**
function Show(){       

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
	xhr.onreadystatechange = showResult;//put this on the new page
	xhr.open("POST","php/mirror.php?&student=" + student,true);
	xhr.send();
	document.getElementById("inputs").style.display="none";
	document.getElementById("Output").style.visibility="visible";
	document.getElementById("back").style.visibility="visible";
	//document.location.href = "response.html";
	showResult();
}
*/
function Back(){
	document.getElementById("inputs").style.display="";
	document.getElementById("Output").style.visibility="hidden";
	document.getElementById("back").style.visibility="hidden";
}


function showResult() {
	//alert("showme");
	//alert(xhr.readyState);
	if ((xhr.readyState == 4) && (xhr.responseText != "")) {
		//alert("now...");
		var response = xhr.responseText;

		var schedule = eval ("(" + response + ")"); 
		var table = "<table>";
		for (var semester in schedule.Schedule){
			table += "<tr><td>" + semester + "</td></tr>";







			for (var course in schedule.Schedule[semester]){ 
				table += "<tr><td></td><td>" + schedule.Schedule[semester][course] + "</td></tr>";
			}

		}
		table += "</table>";
		//schedule.Schedule.Semester1[1]
		document.getElementById("Schedule").innerHTML = table;
		
		
	}
	

}


