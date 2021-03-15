import { Component } from '@angular/core';
import {ImagePicker,ImagePickerOptions} from "@ionic-native/image-picker/ngx";



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images:string[]=[];
  
  constructor(private picker:ImagePicker) {

    
  }

  

ngOnInit()
{
  
  
  this.picker.hasReadPermission().then((val)=>{
    
    if(val)
    {

    }
    else{
      this.picker.requestReadPermission();
    }
  },(err)=>{
    this.picker.requestReadPermission();
  })
}
  pickImages()
{
  
  let options:ImagePickerOptions={
    maximumImagesCount:10,
    outputType:1
  }
  this.picker.getPictures(options).then((res)=>{
    for(var i = 0;i<res.length;i++)
    {
      let str = "data:image/png;base64,"+res[i];
      this.images.push(str);
    }
    
  },(err)=>{
    alert(JSON.stringify(err));
  })
}

}
