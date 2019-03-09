import { Component, OnInit } from '@angular/core';
import { InstituteServiceService } from '../institute-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.css']
})
export class InstituteListComponent implements OnInit {

   instituteList = [];

  constructor(private instituteService: InstituteServiceService, private router: Router) { }
//This is for taking the institute record for view.
  viewInstitute(institute) {
    this.instituteService.setterInstitute(institute);
    this.router.navigateByUrl('viewInstitute');
  }

  //This is for Adding the new institute
  addInstitute(){
    this.router.navigateByUrl('addInstitute');
  }

  //This is for taking the institute record for updation.
  updateInstitute(institute) {
    this.instituteService.setterInstitute(institute);
    this.router.navigateByUrl('updateInstitute');
  }

  //This is for taking the institute record for deletion.
  deleteInstitute() { }

  ngOnInit() {
    //This is for desplaying the institute record.
    console.log("---------- in the institute list component -------")
    this.instituteService.getInstitute().subscribe((responseFromService) => {
      console.log(responseFromService)
      this.instituteList = responseFromService;
    })
  }

}
