API to create Student:

Method: POST
Path: /students
API to Assign a student to Mentor:

Method: POST
Path: /assignments/assign
API to show all students for a particular mentor:

Method: GET
Path: /mentors/:mentorId/students
API to show the previously assigned mentor for a particular student:

Method: GET
Path: /students/:studentId/previous-mentor
