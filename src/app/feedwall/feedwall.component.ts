import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Routes, ActivatedRoute, Router } from "@angular/router";
import { FeedWallService } from "./feedwallserver.service";
import { ServerService } from "../members/nodeserver.service";

@Component({
  selector: 'app-feedwall',
  templateUrl: './feedwall.component.html',
  styleUrls: ['./feedwall.component.css']
})
export class FeedwallComponent implements OnInit {

  feedwallform:FormGroup;
  constructor(private route:Router,private routes:ActivatedRoute,private service:FeedWallService,private server:ServerService) { }
  userId=this.server.getid();
  
  ngOnInit() {

    this.feedwallform=new FormGroup({
      'status':new FormControl(null),
      'img':new FormControl(null)
    })
  }

  upload(){
    this.service.addfeeds(this.feedwallform.value).subscribe(
      (response)=>{
        console.log(response);
        console.log(response.json().data._id)
        this.service.setfeedid(response.json().data._id);
        this.route.navigate(['../show'],{relativeTo:this.routes});
      },
      (error)=>(console.log(error)))
      //console.log(this.server.getid());
    
  }

  showfeeds(){
    this.route.navigate(['../show'],{relativeTo:this.routes});
  }

  clear(){
    this.feedwallform.reset();
  }
}
