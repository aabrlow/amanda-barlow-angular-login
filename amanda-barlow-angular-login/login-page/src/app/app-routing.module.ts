import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SuccessPageComponent } from './success-page/success-page.component';




const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path: 'success-page', component: SuccessPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
