import { HumidityRoutingModule } from './humidity-router.module';
import { HumidityComponent } from './humidity.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HumidityComponent
  ],
  imports: [
    RouterModule,
    HumidityRoutingModule
  ]
})
export class HumidityModule {}
