import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CameraComponent } from './camera/camera.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { GeolocationComponent } from './geolocation/geolocation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CameraComponent,
    ComponentNameComponent,
    GeolocationComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
