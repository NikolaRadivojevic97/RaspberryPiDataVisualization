import { SmokeRoutingModule } from './smoke-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SmokeComponent } from './smoke.component';

@NgModule({
  declarations: [
    SmokeComponent
  ],
  imports: [
    RouterModule,
    SmokeRoutingModule
  ]
})
export class SmokeModule {}
