import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from "../nodeserver.service";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @ViewChild('f')form:NgForm
  constructor(private server:ServerService,private route:Router,private routes:ActivatedRoute) { }
  token;
  isAdmin;
  ngOnInit() {
  }

  login(){
    console.log(this.form.value)
    this.server.validate(this.form.value).subscribe(
    (response)=> {console.log(response);
      //console.log(response.ok)
      if(response.ok)
      {
        //localStorage.setItem('currentUser',JSON.stringify(this.form.value.email));
        this.server.setid(response.json().data._id);
        this.token=response.json().data.logintoken;
        this.isAdmin=response.json().data.isAdmin;
        this.server.setAdminaccess(this.isAdmin);
        this.settoken();
        this.route.navigate(['/choice'],{relativeTo:this.routes})}; 
      },
    (error)=>{
      console.log(error)
    //alert("enter valid data")
  });
     
   }

   settoken()
   {
     window.localStorage.setItem("token",this.token)
   }
}
