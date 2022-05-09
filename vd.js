var Class = new Object();
    Class.nameclass = 'T2203M';
    Class.sumstudent = 27 ;
    Class.student = 25;
    Class.absent_student = function(){
        return this.sumstudent-this.student;
    };
var elNameclass=document.getElementById('nameclass');
    elNameclass.textContent = 'Tên lớp :' + Class.nameclass;
var elStudent=document.getElementById('student');
    elStudent.textContent= 'Số học sinh trong lớp :' + Class.sumstudent;
var elAbsen_student =document.getElementById('absent_student');
    elAbsen_student.textContent= 'Số học sinh vắng :' + Class.absent_student();

