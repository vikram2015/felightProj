import { Component, OnInit } from '@angular/core';
import { InstituteServiceService } from '../institute-service.service';
// import { Observable } from 'rxjs/Observable';
import { Router , ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css']
})
export class AddInstituteComponent implements OnInit {

  formData = {};
  constructor(private instituteService : InstituteServiceService, private router:Router) { }

  //This is for goback
  goBack(){
    this.router.navigateByUrl('instituteList');
  }
  
  //This is for adding the new institute
  addInstitute(){
    console.log(this.formData);
    this.instituteService.saveInstitute(this.formData).subscribe((responseFromService)=>{
      console.log(responseFromService);
      if(responseFromService){
        this.router.navigateByUrl('instituteList');
      }
    })

  }

  ngOnInit() {
  }

}
