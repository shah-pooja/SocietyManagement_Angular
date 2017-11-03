import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataComponent } from "./members/data/data.component";
import { SignupComponent } from "./members/signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { FeedwallComponent } from "./feedwall/feedwall.component";
import { FeedwallshowComponent } from "./feedwall/feedwallshow/feedwallshow.component";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { AddvehicleComponent } from "./vehicle/addvehicle/addvehicle.component";
import { ListvehicleComponent } from "./vehicle/listvehicle/listvehicle.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { ListmyvehicleComponent } from "./vehicle/listmyvehicle/listmyvehicle.component";
import { EditmyvehicleComponent } from "./vehicle/editmyvehicle/editmyvehicle.component";

const approutes:Routes=[
{path:'',component:DataComponent},
{path:'signin',component:DataComponent},
{path:'signup',component:SignupComponent},
{path:'maintenance',component:MaintenanceComponent},
{path:'choice',component:HeaderComponent,children:[
    {path:'feedwall',component:FeedwallComponent},
    {path:'show',component:FeedwallshowComponent},
    {path:'vehicles',component:VehicleComponent,children:[
        {path:'addvehicle',component:AddvehicleComponent},
        {path:'listvehicle',component:ListvehicleComponent},
        {path:'showmyvehicle',component:ListmyvehicleComponent},
        {path:'editmyvehicle/:id/:vehicle/:number/:color',component:EditmyvehicleComponent}
    ]}
]},
{path:'**',redirectTo:'/signin'}
]
@NgModule({
    imports:[RouterModule.forRoot(approutes)],
    exports:[RouterModule]
})


export class AppRoutingModule{}