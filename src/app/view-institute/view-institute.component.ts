import { Component, OnInit } from '@angular/core';
import { InstituteServiceService } from '../institute-service.service';
import { Router , ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-view-institute',
  templateUrl: './view-institute.component.html',
  styleUrls: ['./view-institute.component.css']
})
export class ViewInstituteComponent implements OnInit {

  formData = {};
  constructor(private instituteService : InstituteServiceService, private router:Router) { }

  //This is for goback
  goBack(){
    this.router.navigateByUrl('instituteList');
  }

  ngOnInit() {
    //This is for getting the institute record from service file
    this.formData =  this.instituteService.getterInstitute();
  }

}
