import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollingComponent } from './scrolling/scrolling.component';

const routes: Routes = [
  { path: 'scroll', component: ScrollingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
