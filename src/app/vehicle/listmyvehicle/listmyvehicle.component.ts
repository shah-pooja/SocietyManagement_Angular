import { Component, OnInit } from '@angular/core';
import { VehicleService } from "../vehicleserver.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-listmyvehicle',
  templateUrl: './listmyvehicle.component.html',
  styleUrls: ['./listmyvehicle.component.css']
})
export class ListmyvehicleComponent implements OnInit {

  vehicles=[{}];
  constructor(private service:VehicleService,private route:Router,private routes:ActivatedRoute) { }

  ngOnInit() {

    this.service.getmyVehicles().subscribe(
      (response)=>{console.log(response);
        this.vehicles=response.json().data;
      console.log(this.vehicles)},
      (error)=>{console.log(error)}
    )
  }

  deleteVehicle(id){
    this.service.deleteVehicles(id).subscribe(
      (response)=>{console.log(response);
        console.log(id)
       //this.vehicles=response.json().data;
      this.vehicles.splice(id,1)}
      )
  }

  editVehicle(id)
  {
    this.service.setVehicleId(id);
    
  }

}
