import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModel } from '@angular/forms';


//This is for Routing Files
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';

//This is for new Component Files
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';

//This is for Service Files
import { StudentService } from './student.service';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { InstituteListComponent } from './institute-list/institute-list.component';
import { AddInstituteComponent } from './add-institute/add-institute.component';
import { ViewInstituteComponent } from './view-institute/view-institute.component';
import { UpdateInstituteComponent } from './update-institute/update-institute.component';
import { InstituteServiceService } from './institute-service.service';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentListComponent,
    UpdateStudentComponent,
    ViewStudentComponent,
    InstituteListComponent,
    AddInstituteComponent,
    ViewInstituteComponent,
    UpdateInstituteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ StudentService, InstituteServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
