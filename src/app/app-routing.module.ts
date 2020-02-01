import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const childrenRoutes: Routes = [
  { path: 'component', loadChildren: () => import('./components/component.module').then(m => m.ComponentModule)},
  { path: '', redirectTo: 'component', pathMatch: 'full' },
];

const routes: Routes = [{
  path: '',
  children: childrenRoutes,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
