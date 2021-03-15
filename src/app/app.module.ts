import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AppMinimize} from "@ionic-native/app-minimize/ngx";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ImagePicker} from "@ionic-native/image-picker/ngx";
import {InAppBrowser} from "@ionic-native/in-app-browser/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ImagePicker,InAppBrowser,AppMinimize],
  bootstrap: [AppComponent],
})
export class AppModule {}
