import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ServerService } from "../members/nodeserver.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin;
  constructor(private route:Router,private routes:ActivatedRoute,private service:ServerService ) { }

  ngOnInit() {
  //  var f= localStorage.getItem('currentUser');
  //  console.log(f);
    // this.isAdmin=this.service.getAdminaccess();
    // console.log(this.isAdmin)
    this.service.getUserProfile().subscribe(
      (response)=>{console.log(response.json().isAdmin);
      this.isAdmin=response.json().isAdmin;
    // console.log(this.isAdmin)
  },
      (error)=>{console.log(error)}
    );

  }

  logout()
  {
    window.localStorage.removeItem("token");
    window.localStorage.clear();

    this.route.navigate(['/signin'],{relativeTo:this.routes})
  }

}
