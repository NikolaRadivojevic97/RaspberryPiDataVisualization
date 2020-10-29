import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule {}
