import {Injectable} from "@angular/core";
import { Http,Headers } from "@angular/http";
import { ServerService } from "../members/nodeserver.service";

@Injectable()
export class FeedWallService{
    id="";
    constructor (private http:Http,private server: ServerService){}
        addfeeds(info:any[]){
                return  this.http.post("http://localhost:3000/addfeed",
                info,{headers:this.server.getToken()});
        }

        showfeeds(p){

            return this.http.get("http://localhost:3000/showfeed/"+p,{headers:this.server.getToken()});
        }

        addcomments(comment:any){

          var feedid=this.getfeedid()
            return this.http.post("http://localhost:3000/addcomments/"+feedid,
            comment,{headers:this.server.getToken()});
        }

        getcomments(){
            
            return this.http.get("http://localhost:3000/getcomments",{headers:this.server.getToken()});
        }

        addlike(feedid){

            return this.http.get("http://localhost:3000/addlike/"+feedid,{headers:this.server.getToken()});
        }

        getlike(){
            
            return this.http.get("http://localhost:3000/getlike",{headers:this.server.getToken()});
        }

        setfeedid(id)
        {
            this.id = id;
        }

        getfeedid()
        {
            console.log(this.id)
            return this.id;
        }
    }