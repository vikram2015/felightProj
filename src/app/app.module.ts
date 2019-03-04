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


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentListComponent,
    UpdateStudentComponent,
    ViewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
