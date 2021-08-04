import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityInfoComponent } from './_components/city-info/city-info.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'city/:name',
    component: CityInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
