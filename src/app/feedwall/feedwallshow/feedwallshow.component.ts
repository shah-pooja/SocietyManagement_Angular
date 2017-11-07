import { Component, OnInit } from '@angular/core';
import { FeedWallService } from "../feedwallserver.service";
import { FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { ServerService } from "../../members/nodeserver.service";
import { InfiniteScrollModule} from 'ngx-infinite-scroll';
@Component({
  selector: 'app-feedwallshow',
  templateUrl: './feedwallshow.component.html',
  styleUrls: ['./feedwallshow.component.css']
})
export class FeedwallshowComponent implements OnInit {
  form:FormGroup
  comments=[];
  p:number=1;
  constructor(private service:FeedWallService,private server:ServerService ) { }
  count=0;
  feeds=[{}]
  likes=[];
 
  ngOnInit() {
  //   var comment=new FormArray([]);
    
  //   comment.push(new FormGroup({
  //     'comment':new FormControl(null,Validators.required),
  //     // 'like':new FormControl(null)
  //   }))
      
  this.form= new FormGroup({
    'comment':new FormControl(null),
    
   })
    //get feeds
      this.showfeeds()
  }
  onScroll()
  {
    console.log("scrolled");
    this.p+=1;
    this.showfeeds();
  }

  showfeeds()
  {
    this.service.showfeeds(this.p).subscribe(
      (response)=>{console.log(response.json());
        if(response.status === 200) 
          {
            this.feeds=this.feeds.concat(response.json());
            console.log(this.feeds)
          }
    },
       (error)=>{console.log(error);alert("no more data")});

  }
  comment(id){
    this.service.setfeedid(id)
    this.service.addcomments(this.form.value).subscribe((response)=>
    {if(response.status == 200){this.showfeeds()}
      console.log(response);
    },
    (error)=>{console.log(error)})
   
   this.form.reset();
  }

  like(id){
    this.service.setfeedid(id)
    this.service.addlike(id).subscribe(
      (response)=>{console.log(response);
        if(response.status == 200){this.showfeeds()}},
      (error)=>{console.log(error)});
  }

  // getcomments()
  // {
  //   this.service.getcomments().subscribe((response)=>{
  //     this.comments=response.json().data;
  //     console.log(this.comments)
  // })
  // }
  // getlikes()
  // {
  //   this.service.getlike().subscribe(
  //     (response)=>{
  //       console.log(response)
  //          this.likes=response.json().data;
  //          console.log(this.likes)
  //           console.log(this.likes.length)
  //     },
  //     (error)=>(console.log(error))
  //   )
  // }

}
