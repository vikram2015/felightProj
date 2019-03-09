import { Component, OnInit } from '@angular/core';
import { InstituteServiceService } from '../institute-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-update-institute',
  templateUrl: './update-institute.component.html',
  styleUrls: ['./update-institute.component.css']
})
export class UpdateInstituteComponent implements OnInit {

  formData = {};

  constructor(private instituteService: InstituteServiceService, private router: Router) { }

   //This is for back button
  goBack() {
    this.router.navigateByUrl('instituteList');
  }

  //This is to update the institute
  updateInstitute() {
    console.log(this.formData);
    this.instituteService.updateInstitute(this.formData).subscribe((updatedData) => {
      if (updatedData) {
        this.router.navigateByUrl('instituteList');
      }
    })
  }

  ngOnInit() {
    //This is for getting the institute record from service file
    this.formData = this.instituteService.getterInstitute();
    console.log(this.formData);
  }

}
