import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component'
import { StudentListComponent } from './student-list/student-list.component'
import { UpdateStudentComponent } from "./update-student/update-student.component";
import { ViewStudentComponent } from "./view-student/view-student.component";
import { AddInstituteComponent } from './add-institute/add-institute.component'
import { InstituteListComponent } from './institute-list/institute-list.component'
import { UpdateInstituteComponent } from "./update-institute/update-institute.component";
import { ViewInstituteComponent } from "./view-institute/view-institute.component";



const routes: Routes = [
    {path : 'addStudent' , component : AddStudentComponent},
    {path : 'studentList' , component : StudentListComponent},
    {path : 'updateStudent' , component : UpdateStudentComponent},
    {path : 'viewStudent' , component : ViewStudentComponent},
    {path : 'addInstitute' , component : AddInstituteComponent},
    {path : 'instituteList' , component : InstituteListComponent},
    {path : 'updateInstitute' , component : UpdateInstituteComponent},
    {path : 'viewInstitute' , component : ViewInstituteComponent}

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})



export class AppRoutingModule { }
