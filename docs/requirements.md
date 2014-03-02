New Bonus Ideas
--------------
* Interface for Kimberly to update the rotation




On Fri, Feb 7, 2014 at 8:12 AM, Michael Kiwala <michael.kiwala@gmail.com> wrote:
>Below are notes that I was typing of things that were said.  I'm sure they are incomplete, and we should supplement them with things that you were able to capture from the meeting too.


Requirements
------------
* Must be accessible by students
* Create schedules for both part time and full time students
* Accept constraints that the student might have on their schedule
* Accept preferences of courses that the would like to take
* Use the rotation information to forecast out the rest of the student's program
* Must be able to figure degrees standing
* Must also be able to consider waived courses
* (waived courses don't count towards credits; is this always true)
* Must consider graduation requirements for a degree program




Explicit Requirements
---------------------
* Must be a web application
* Has to include a course list
* Must run on the virtual machine
* Must use course information provided by Dr. Janikow
* No storing grade information




Bonus Features
--------------
* Smartphone compatible
* Uses DARS report as input
* Inspect get_schedule.pl to see if there is any additional information we can use
* Allow for constraints such as "I would like to take the computer graphics class"




Risks
-----
* Can we make changes to the vm?
* Will prolog work as an expert system?



System Description
------------------
Given a degree program and assuming the student has not already met the gradation requirements, while considering the graduation requirements for a degree program along with a student's current standing in the program, a student's waived courses, the actual course schedule, the multi-year course rotation for the degree program, how many credit hours the student would like to take per semester, and external constraints the student may have on their schedule (eg, day or evening), the Advisor System should produce a projected course schedule for as many semesters as required for the student to successfully graduate the degree program.

The schedule produced should be somewhat interactive, allowing students to introduce new constraints, such as "I do not want to take Operating Systems during Spring '14".  And the advisor system should produce a new suggested schedule which considers those additional constraints.




