import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrl: './imageupload.component.css'
})
export class ImageuploadComponent implements OnInit { 
      imagePriview  : string | ArrayBuffer | null  =  null ;
      @ViewChild('inputref') inputRef  : ElementRef<HTMLInputElement> | null   = null ;
      selectFile : File | null  =  null ;
      fileName : string  = '' ;
      constructor(){
      }
      ngOnInit(): void {
        
      }
      uploadImageEvent(event : Event) : void {
          const file  =  (event.target as HTMLInputElement).files?.[0] ;
          if(file) {
             this.selectFile =  file  ;
             this.fileName =  file.name ;
             const reader  =  new FileReader() ;
             reader.onload  =  ()=> {
                this.imagePriview =  reader.result ;
             }
             reader.readAsDataURL(file) ;
          }
      }
      resetUploadImage(): void {
        this.selectFile =  null ;
        this.fileName = '' ;
        this.imagePriview = null ;
        if(this.inputRef?.nativeElement) {
          this.inputRef.nativeElement.value  = '' ;
        }
      }
}
