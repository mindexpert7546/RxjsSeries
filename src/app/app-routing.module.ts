import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoiseComponent } from './promoise/promoise.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {path :'promoise', component:PromoiseComponent},
  {path : 'observable', component:ObservableComponent},
  {path :'**', component:PromoiseComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
