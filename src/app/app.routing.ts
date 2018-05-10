import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { MainPageComponent } from './main-page/main-page.component';


const appRoutes: Routes = [
  {
  path: '',
  component: MainPageComponent
},
  {
  path: 'details/:id',
  component: RouteDetailComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
