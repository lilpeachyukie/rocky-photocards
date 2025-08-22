import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent, CustomizeTemplate } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }, 
  { path: 'customize', component: CustomizeTemplate }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
