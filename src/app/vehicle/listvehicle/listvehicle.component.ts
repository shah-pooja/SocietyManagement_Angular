import { Component, OnInit } from '@angular/core';
import { VehicleService } from "../vehicleserver.service";

@Component({
  selector: 'app-listvehicle',
  templateUrl: './listvehicle.component.html',
  styleUrls: ['./listvehicle.component.css']
})
export class ListvehicleComponent implements OnInit {

  vehicles=[];
  constructor(private service:VehicleService) { }

  ngOnInit() {

    this.service.getVehicles().subscribe(
      (response)=>{console.log(response);
      this.vehicles=response.json().data},
      (error)=>{console.log(error)}
    )
  }

}
