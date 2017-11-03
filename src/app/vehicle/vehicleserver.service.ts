import {Injectable} from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ServerService } from "../members/nodeserver.service";

@Injectable()
export class VehicleService{
    id;
    constructor (private http:Http,private service:ServerService){}
        addVehicle(info){
        
                return  this.http.post("http://localhost:3000/addvehicle",info,{headers:this.service.getToken()});
        }

        getVehicles()
        {
            return this.http.get("http://localhost:3000/getallvehicles",
            {headers:this.service.getToken()});
        }

        getmyVehicles()
        {
            return this.http.get("http://localhost:3000/getmyvehicles",
            {headers:this.service.getToken()});
        }

        deleteVehicles(id)
        {
            console.log(id)
            return this.http.delete("http://localhost:3000/deletemyvehicle/"+id,
            {headers:this.service.getToken()});

        }
        editVehicles(data)
        {
            var id=this.getVehicleId();
            console.log(id)
            console.log(data)
            return this.http.put("http://localhost:3000/editmyvehicle/"+id,data,
            {headers:this.service.getToken()});

        }
        setVehicleId(id)
        {
            this.id = id;
            console.log(this.id)
        }

        getVehicleId()
        {
           // console.log(this.id)
            return this.id;
        }
    }