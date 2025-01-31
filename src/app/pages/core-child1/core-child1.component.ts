import { Component, OnInit   , ViewChild  , DoCheck, ElementRef, ContentChild, AfterContentInit, ContentChildren, QueryList, ViewContainerRef, ComponentRef } from '@angular/core';
import { HostlistneruserComponent } from '../hostlistneruser/hostlistneruser.component';

@Component({
  selector: 'app-core-child1',
  templateUrl: './core-child1.component.html',
  styleUrl: './core-child1.component.css'
})
export class CoreChild1Component implements OnInit , DoCheck , AfterContentInit {
  @ContentChild('projectedContent') content !: ElementRef ;
  @ContentChild('messagePassed')  messagePass !: ElementRef ;
  @ContentChildren('messageItems') messageItems  !: QueryList<ElementRef> ;
  @ViewChild('componentContainer' , { read: ViewContainerRef})  componentContainer  !: ViewContainerRef ;
  private componentRef!: ComponentRef<HostlistneruserComponent>;

  constructor() { }
  ngOnInit(): void {

  }
  ngDoCheck() : void {
     console.log("CoreChild1Component change detection")
  }
  ngAfterContentInit(): void  {
      console.log('child1' , this.content.nativeElement.textContent) ;
      this.content.nativeElement.style.color  =  'blue' ;
      this.messagePass.nativeElement.style.color  =  'pink' ;
      this.messageItems.forEach((item , index)=> {
            item.nativeElement.style.color  =  'pink' ;
      });
  }
  addComponent() : void {
     this.componentRef =  this.componentContainer.createComponent(HostlistneruserComponent);  
  }
  destroyComponent(): void {
     this.componentRef.destroy();
  }
  
}
