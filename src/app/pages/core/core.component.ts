import { Component, OnInit, DoCheck, TemplateRef , ViewChild, ViewContainerRef, ElementRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';

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
    private cfr: ComponentFactoryResolver  ,
    private el : ElementRef ,
    private renderer : Renderer2 
   ) { }
  ngOnInit(): void {
      const box  =  this.el.nativeElement.querySelector('.page_name');
      this.renderer.addClass(box ,'highlighted');
      setTimeout(() => {
        this.renderer.removeClass(box, 'highlighted');
      }, 2000);
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
