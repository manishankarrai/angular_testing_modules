import { Component, OnInit, DoCheck, TemplateRef , ViewChild, ViewContainerRef, ElementRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent implements OnInit, DoCheck {
  personObject: { [key: string]: string } = {
     firstName : "rajan" , 
     lastName : "rai" , 
     college : "MCMT" 
  };
  @ViewChild('showMeDev') showMeDevRef !: TemplateRef<any> ;
  @ViewChild('changeColorOfPtag')  changeColorOfPtagRef  !: ElementRef ;
  @ViewChild('mycontainer', { read: ViewContainerRef }) containerRef!: ViewContainerRef;

  constructor(
    private viewContainerRef : ViewContainerRef ,
    private cfr: ComponentFactoryResolver 
   ) { }
  ngOnInit(): void {

  }

  ngDoCheck(): void {
    console.log('core somevalue is change');
  }
   commonButton() : void {
    //  this.viewContainerRef.createEmbeddedView(this.showMeDevRef)
      this.changeColorOfPtagRef.nativeElement.style.color =  'red' ;
      this.addComponent();

  }
  async addComponent() {
    const {  HostlistneruserComponent } = await import('../hostlistneruser/hostlistneruser.component')
    const factory  = this.cfr.resolveComponentFactory(HostlistneruserComponent) ;
    this.containerRef.createComponent(factory);
  }
}
