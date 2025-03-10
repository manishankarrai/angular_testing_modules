import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HostlistneruserComponent } from './pages/hostlistneruser/hostlistneruser.component';
import { GalleryviewComponent } from './pages/galleryview/galleryview.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { CoreComponent } from './pages/core/core.component';
import { Signal1Component } from './pages/signal1/signal1.component';
import { ImageuploadComponent } from './pages/imageupload/imageupload.component';
import { InputComponent } from './pages/input/input.component';
import { ReusableFormComponent } from './pages/reusable-form/reusable-form.component';
import { SidebartoggleComponent } from './pages/sidebartoggle/sidebartoggle.component';
import { ToSignalComponentComponent } from './pages/to-signal-component/to-signal-component.component';
import { PersonStateComponent } from './pages/person-state/person-state.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hostlistner', component: HostlistneruserComponent },
  { path: 'gallaryview', component: GalleryviewComponent },
  { path: "template1", component: TemplatesComponent },
  { path: "core", component: CoreComponent },
  { path: "signal1", component: Signal1Component },
  { path: "imageupload", component: ImageuploadComponent },
  { path: "core_input", component: InputComponent },
  { path: "reusableForm", component: ReusableFormComponent },
  { path: "sidebartoggle", component: SidebartoggleComponent },
  { path: 'toSignal', component: ToSignalComponentComponent },
  { path: 'personState', component: PersonStateComponent },


  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
