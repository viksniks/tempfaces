import { Component } from '@angular/core';

import { DomSanitizer ,SafeResourceUrl} from '@angular/platform-browser';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images:string[]=[];
  url:SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer,private browser:InAppBrowser) {

    
  }

  

ngOnInit()
{
  var options:InAppBrowserOptions={
       zoom: 'no',
      fullscreen: "yes",
      hidenavigationbuttons: "yes",
      toolbar:'no',
      toolbarcolor:"black",
      hideurlbar: 'yes',
      closebuttoncolor:"black",
     // hidden:"no",
     // hardwareback:"yes",
      location:"no",
      useWideViewPort:"no"
    
  }
  this.browser.create("https://adultfaces.club","_blank",options);
  
}
 
}
