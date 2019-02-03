import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  formData = {};

  constructor(private studentService : StudentService) { }

  addStudent(){

    console.log(this.formData);
    this.studentService.saveStudent(this.formData);

  }

  ngOnInit() {
  }

}
