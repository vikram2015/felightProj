import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//This is for Routing Files
import { AppRoutingModule } from './app.routing';

//This is for new Component Files
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';

//This is for Service Files
import { StudentService } from './student.service';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent
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
