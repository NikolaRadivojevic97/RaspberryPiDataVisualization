import { Subscription } from 'rxjs';
import { TimeService } from './../time.service';
import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy {
  timeRanges:string[];
  openWeather:boolean;
  tableMode:boolean;
  tableSub:Subscription;
  sub:Subscription;
  inTableMode=false;
  inOpenWeatherMode=false;
  constructor(private timeSerivce:TimeService) { }

  ngOnInit(): void {
    this.timeRanges=this.timeSerivce.timeRanges.slice();
    this.sub=this.timeSerivce.openWeatherMode.subscribe(ow=>{
      this.openWeather=ow;
    })
    this.tableSub=this.timeSerivce.tableMode.subscribe(tm=>{
      this.tableMode=tm;
    })
  }
  OnChange(range:string){
    this.timeSerivce.setTime(range);

  }
  ngOnDestroy(){
    this.sub.unsubscribe();
    this.tableSub.unsubscribe();
  }
  onOpen(){
  this.inOpenWeatherMode=!this.inOpenWeatherMode;
  this.timeSerivce.setInOpenWeatherMode();
  }
  onTable(){
    this.inTableMode=!this.inTableMode;
    this.timeSerivce.setOnTableMode();
  }


}
