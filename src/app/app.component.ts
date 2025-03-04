import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CallChildElementViewElementComponent } from './pages/call-child-element-view-element/call-child-element-view-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngtest';
  routeInpute: string = '';
  routeListOriginal: string[] = ['home', 'hostlistner', 'gallaryview', 'template1', "core",
    'signal1', 'imageupload', 'core_input', 'reusableForm', 'personState',
    'toSignal', 'sidebartoggle'];
  routeList: string[] = [];
  @ViewChild('tellme') tellMe  !: ElementRef;
  @ViewChild('callchildelement') calledChildElMethod: CallChildElementViewElementComponent | undefined;
  constructor(private router: Router) { }

  @HostListener('mouseenter') tellMeMouseEnter() {
    this.tellMe.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') tellMeMounseLeave() {
    this.tellMe.nativeElement.style.color = 'blue';
  }

  tellMeSomething(): void {
    this.calledChildElMethod?.sayHello();
  }
  suggestList(): void {
    if (this.routeInpute) {
      let dataList = this.routeListOriginal.filter(item => item.includes(this.routeInpute));
      this.routeList = dataList;
    } else {
      this.routeList = [];
    }
  }
  gotoRoute(): void {
    if (this.routeListOriginal.includes(this.routeInpute)) {
      this.router.navigate([this.routeInpute]);
      this.routeInpute = '';
      this.routeList = [];
    } else {
      alert('route not exit !')
    }
  }
  enterRoute(r: string): void {
    this.routeInpute = r;
    this.gotoRoute();
  }
  onkeyPress(event: KeyboardEvent): void {
    if (event.key == 'Enter') {
      this.gotoRoute();
    } else {
      this.suggestList();
    }
  }
}
