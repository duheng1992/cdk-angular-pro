import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  { path: 'scroll', component: ScrollingComponent },
  { path: 'textField', component: TextFieldComponent },
  { path: 'dragDrop', component: DragDropComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
