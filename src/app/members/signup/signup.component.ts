import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ServerService } from "../nodeserver.service";
import { FileUploader } from "ng2-file-upload";
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";

const URL="http://localhost:3000/upload";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
// @Directive({selector:'[ng2FileSelect]'})
export class SignupComponent implements OnInit {

  token;  
  file;
  public uploader:FileUploader=new FileUploader({url:URL,itemAlias:"photo"})

  reactive:FormGroup;
  constructor(private route:Router,private routes:ActivatedRoute,private server:ServerService,
    private http: Http, private el: ElementRef) { }

  
  ngOnInit() {

    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
    };
    this.reactive=new FormGroup({
      'fname':new FormControl(null,[Validators.required,
                                    Validators.maxLength(50),
                                    Validators.pattern("[a-zA-Z]+")]),
      
      'lname':new FormControl(null,[Validators.required,
        Validators.maxLength(50),
        Validators.pattern("[a-zA-Z]+")]),
      'email':new FormControl(null,[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pwd':new FormControl(null,[Validators.required]),
      //'pwd':new FormControl(null,Validators.required),
      //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
      //(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}
      'cpwd':new FormControl(null),
      'bday':new FormControl(null),
      'date':new FormControl(null),
      'img':new FormControl(null),
      'check':new FormControl(null,Validators.required),
      'block':new FormControl(null,[Validators.required,Validators.pattern("[A-F]")]),
      'fnum':new FormControl(null,[Validators.required,Validators.max(20),Validators.min(1)]),
      'phone':new FormControl(null,[Validators.required,Validators.pattern("[0-9]{10}"),Validators.maxLength(10)]),
    })
  }

  

   onsubmit(){

    console.log(this.reactive.value)
    let formData=new FormData()
    formData.append("formdata",JSON.stringify(this.reactive.value));
    console.log(this.file)
    formData.append("photo",this.file)
    console.log(formData)
    this.server.addData(formData).subscribe((response)=>{console.log(response.json().data);  
    },
    (error)=>{console.log(error)})
    
    // this.server.addServers({fname,lname,email,pwd,bday,date,block,fnum,phone}).subscribe(
    //   (response)=>{
    //     console.log(response);
    //     this.server.setid(response.json().data._id);
    //   } ,
    //   (error)=>console.log(error)
    // )
    this.route.navigate(['/signin'],{relativeTo:this.routes})
  }



  
upload(img){

  console.log(img.srcElement.files.item(0))
  // let formData=new FormData();
   this.file=img.srcElement.files.item(0)
  // console.log(formData)
  // this.http.post(URL,formData).subscribe(
  //                 //map the success function and alert the response
  //                  (response) => console.log(response),
  //                 (error) => console.log(error))
}
}
