import { TemperatureRoutingModule } from './temperature-routing.module';
import { TemperatureComponent } from './temperature.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TemperatureComponent
  ],
  imports: [
    RouterModule,
    TemperatureRoutingModule
  ]
})
export class TemperatureModule {}
