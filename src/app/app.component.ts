import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";
import {AppMinimize} from "@ionic-native/app-minimize/ngx";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform:Platform,private minimize:AppMinimize) {
   
    // this.platform.backButton.subscribeWithPriority(99999999,()=>{
      
    //   this.minimize.minimize();
    // })
  }
}
