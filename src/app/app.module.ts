import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostlistneruserComponent } from './pages/hostlistneruser/hostlistneruser.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollerDirective } from './directives/scroller.directive';
import { TestdirectiveDirective } from './directives/testdirective.directive';
import { HttpClientModule } from '@angular/common/http';
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
    Input2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule  ,
    ReactiveFormsModule,
    CommonModule ,
    HttpClientModule,
   // GraphQLModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
