// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentRoutingModule } from './component-routing.module';

import { ScrollingComponent } from './scrolling/scrolling.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    ScrollingComponent,
    TextFieldComponent,
    DragDropComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    ScrollingModule,
    TextFieldModule,
    DragDropModule,
    ComponentRoutingModule,
  ],
  providers: [],
})
export class ComponentModule { }
