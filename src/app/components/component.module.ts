// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentRoutingModule } from './component-routing.module';

import { ScrollingComponent } from './scrolling/scrolling.component';

@NgModule({
  declarations: [
    ScrollingComponent,
  ],
  imports: [
    // BrowserModule,
    ComponentRoutingModule,
  ],
  providers: [],
})
export class ComponentModule { }
