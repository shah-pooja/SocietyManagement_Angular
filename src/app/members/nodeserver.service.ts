import {Injectable} from "@angular/core";
import { Http,Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService{
    id="";
    token;
    isAdmin;
    
    constructor (private http:Http){}
        addData(info:any){
                return  this.http.post("http://localhost:3000/signup",info);
        }

        validate(data){
            
            return this.http.post("http://localhost:3000/login",data);
        }

        getToken()
        {
            return new Headers({'token':this.gettoken()});
        }
        maintenanceData(data)
        {
            return this.http.post("http://localhost:3000/maintenance",data,{headers:this.getToken()});
        
        }

        getUserProfile()
        {
            return this.http.get("http://localhost:3000/user-profile",{headers:this.getToken()});
        }
        setid(id)
        {
            this.id = id;
        }

        getid()
        {
            return this.id;
        }

        setAdminaccess(isAdmin)
        {
            this.isAdmin=isAdmin;
        }
        getAdminaccess()
        {
            return this.isAdmin;
        }
        
        gettoken(){
            return this.token = window.localStorage.getItem("token")
        }
    }