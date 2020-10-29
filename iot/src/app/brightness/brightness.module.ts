import { BrightnessRoutingModule } from './brightness-routing.module';
import { BrightnessComponent } from './brightness.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BrightnessComponent
  ],
  imports: [
    RouterModule,
    BrightnessRoutingModule
  ]
})
export class BrightnessModule {}
