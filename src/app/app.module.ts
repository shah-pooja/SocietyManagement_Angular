import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { DataComponent } from './members/data/data.component';
import { SignupComponent } from './members/signup/signup.component';
import { AppRoutingModule } from "./app-routes-module";
import { HeaderComponent } from './header/header.component';
import { FeedwallComponent } from './feedwall/feedwall.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServerService } from "./members/nodeserver.service";
import { FeedwallshowComponent } from './feedwall/feedwallshow/feedwallshow.component';
import { FeedWallService } from "./feedwall/feedwallserver.service";
import { AddvehicleComponent } from './vehicle/addvehicle/addvehicle.component';
import { ListvehicleComponent } from './vehicle/listvehicle/listvehicle.component';
import { VehicleService } from "./vehicle/vehicleserver.service";
import { FileSelectDirective } from "ng2-file-upload";
import { ListmyvehicleComponent } from './vehicle/listmyvehicle/listmyvehicle.component';
import { EditmyvehicleComponent } from './vehicle/editmyvehicle/editmyvehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    DataComponent,
    SignupComponent,
    HeaderComponent,
    FeedwallComponent,
    MaintenanceComponent,
    VehicleComponent,
    FeedwallshowComponent,
    AddvehicleComponent,
    ListvehicleComponent,
    FileSelectDirective,
    ListmyvehicleComponent,
    EditmyvehicleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ServerService,FeedWallService,VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
