import { DoBootstrap, Injector, NgModule , CUSTOM_ELEMENTS_SCHEMA, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostlistneruserComponent } from './pages/hostlistneruser/hostlistneruser.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollerDirective } from './directives/scroller.directive';
import { TestdirectiveDirective } from './directives/testdirective.directive';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
//import { GraphQLModule } from './graphql.module';
import { BooksComponent } from './pages/books/books.component';
import { LastwordincapitalPipe } from './pipes/lastwordincapital.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { GoodcardComponent } from './pages/goodcard/goodcard.component';
import { GalleryviewComponent } from './pages/galleryview/galleryview.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { Content2Component } from './pages/content2/content2.component';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './pages/core/core.component';
import { CoreChild1Component } from './pages/core-child1/core-child1.component';
import { CoreChild2Component } from './pages/core-child2/core-child2.component';
import { Signal1Component } from './pages/signal1/signal1.component';
import { ImageuploadComponent } from './pages/imageupload/imageupload.component';
import { InputComponent } from './pages/input/input.component';
import { Input2Component } from './pages/input2/input2.component';
import { ReusableFormComponent } from './pages/reusable-form/reusable-form.component';
import { InputtypeComponent } from './pages/reusableForm/inputtype/inputtype.component';
import { SelecttypeComponent } from './pages/reusableForm/selecttype/selecttype.component';
import { ColortagDirective } from './directives/colortag.directive';
import { CustomElementComponent } from './directives/custom-element.component';
import { createCustomElement } from '@angular/elements';
import { BindBackgroundDirective } from './directives/bind-background.directive';
import { SidebartoggleComponent } from './pages/sidebartoggle/sidebartoggle.component';
import { ClickToggleDirective } from './directives/click-toggle.directive';
import { ToSignalComponentComponent } from './pages/to-signal-component/to-signal-component.component';
import { SinglaHeaderComponent } from './pages/singla-header/singla-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonStateComponent } from './pages/person-state/person-state.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { personReducer } from './store/person/person.reducer';
import { CallChildElementViewElementComponent } from './pages/call-child-element-view-element/call-child-element-view-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HostlistneruserComponent,
    HomeComponent,
    ScrollerDirective,
    TestdirectiveDirective  ,
    BooksComponent,
    LastwordincapitalPipe ,
    ReversePipe,
    GoodcardComponent,
    GalleryviewComponent,
    TemplatesComponent,
    Content2Component,
    CoreComponent,
    CoreChild1Component,
    CoreChild2Component,
    Signal1Component,
    ImageuploadComponent,
    InputComponent,
    Input2Component,
    ReusableFormComponent,
    InputtypeComponent,
    SelecttypeComponent,
    ColortagDirective ,
    CustomElementComponent,
    BindBackgroundDirective,
    SidebartoggleComponent,
    ClickToggleDirective,
    ToSignalComponentComponent,
    SinglaHeaderComponent,
    PersonStateComponent,
    CallChildElementViewElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule  ,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    StoreModule.forRoot({ 'person' :  personReducer }, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }) ,
   // GraphQLModule ,
   
    
  ],
 // entryComponents: [CustomElementComponent], 
  providers: [provideHttpClient()],
  bootstrap: [AppComponent] ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule   { 
  constructor(public injector: Injector) { 
    const el = createCustomElement(CustomElementComponent, { injector }); //(2)
    customElements.define('custom-element', el); //(3)
  }


}
