import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { ObsDemoRoutingModule } from './obs-demo-routing.module';

@NgModule({
  declarations: [
    RxjsDemoComponent,
    RxjsDemoComponent
  ],
  imports: [
    ObsDemoRoutingModule,
    CommonModule
  ]
})
export class ObsDemoModule { }
