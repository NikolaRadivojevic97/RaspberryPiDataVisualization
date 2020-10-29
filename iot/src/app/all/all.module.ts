import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './all.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AllComponent
  ],
  imports: [
    RouterModule,
    AllRoutingModule,
    HttpClientModule
  ]
})
export class AllModule {}
