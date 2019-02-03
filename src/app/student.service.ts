import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private http : Http) { }

  saveStudent(formData){
    console.log(formData);

  }

}
