import { Component, OnInit } from '@angular/core';
import { VehicleService } from "../vehicleserver.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-editmyvehicle',
  templateUrl: './editmyvehicle.component.html',
  styleUrls: ['./editmyvehicle.component.css']
})
export class EditmyvehicleComponent implements OnInit {

  reactive:FormGroup;
  constructor(private service:VehicleService,private route:Router,private routes:ActivatedRoute) { }

  ngOnInit() {

    var vehicle=this.routes.snapshot.params['vehicle'];
    var number=this.routes.snapshot.params['number'];
    var color=this.routes.snapshot.params['color']
    
    console.log(number)
    this.reactive=new FormGroup({
      'vehicle':new FormControl(vehicle),
      'v_number':new FormControl(number),
      'image':new FormControl(null),
      'color':new FormControl(color)
    });

    
  }

  editVehicle()
  {
    this.service.editVehicles(this.reactive.value).subscribe(
      (response)=>{console.log(response);
        this.route.navigate(['../../../../../showmyvehicle'],{relativeTo:this.routes})
      },
      (error)=>{console.log(error)}
    )
  }
}
