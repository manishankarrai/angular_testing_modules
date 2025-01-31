import { Component } from '@angular/core';

@Component({
  selector: 'app-galleryview',
  templateUrl: './galleryview.component.html',
  styleUrl: './galleryview.component.css'
})
export class GalleryviewComponent {

     listOfGalaryItem : { filename : string ; filepath: string ; description : string }[];
     filename : string  =  'checkImage.jpg' ;
     filepath : string  = '1.jpg' ;
     description: string  =   "Nothing is like going to watch marvel movies in cinemas in india and now you see  the full picture in ages abd check now";
     constructor(){
        this.listOfGalaryItem =  [
          {filename : 'checkImage.jpg' ,  filepath  :'1.jpg'  , description: "Nothing is like going to watch marvel movies in cinemas in india and now you see  the full picture in ages abd check now"},
          {filename : 'checkImage.jpg' ,  filepath  :'2.jpg'  , description: "Nothing is like going to watch marvel movies in cinemas in india and now you see  the full picture in ages abd check now"},
          {filename : 'checkImage.jpg' ,  filepath  :'3.jpeg'  , description: "Nothing is like going to watch marvel movies in cinemas in india and now you see  the full picture in ages abd check now"},
          {filename : 'checkImage.jpg' ,  filepath  :'1.jpg'  , description: "Nothing is like going to watch marvel movies in cinemas in india and now you see  the full picture in ages abd check now"},
          {filename : 'checkImage.jpg' ,  filepath  :'2.jpg'  , description: "Nothing is like going to watch marvel movies in cinemas in india and now you see  the full picture in ages abd check now"},
        ]
     }
}
