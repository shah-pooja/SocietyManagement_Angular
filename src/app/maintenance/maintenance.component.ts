import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ServerService } from "../members/nodeserver.service";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})

export class MaintenanceComponent implements OnInit {
  maintenance=[];
  maintenanceform:FormGroup
  constructor(private service:ServerService) { }

  ngOnInit() {

    this.maintenanceform=new FormGroup({
      'month':new FormControl(null),
      'block':new FormControl(null)
    })
  }

  showStatus()
  {
    this.service.maintenanceData(this.maintenanceform.value).subscribe(
      (response)=>{console.log(response)
      this.maintenance=response.json().data;
      console.log(response.json().data)
      console.log(this.maintenance)},
      (error)=>{console.log(error)})
  }


}
