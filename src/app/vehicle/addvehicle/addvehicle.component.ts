import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { VehicleService } from "../vehicleserver.service";

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {

  reactive:FormGroup;
  constructor(private route:Router,private routes:ActivatedRoute,private service:VehicleService) { }


  ngOnInit() {

    this.reactive=new FormGroup({
      'vehicle':new FormControl(null),
      'v_number':new FormControl(null),
      'image':new FormControl(null),
      'color':new FormControl(null)
    })
  }

  addvehicle(){

    this.service.addVehicle(this.reactive.value).subscribe(
      (response)=>{console.log(response);
        this.service.setVehicleId(response.json().data._id)
      this.route.navigate(['../listvehicle'],{relativeTo:this.routes})
      },
    (error)=>{console.log(error)})
  }
}
