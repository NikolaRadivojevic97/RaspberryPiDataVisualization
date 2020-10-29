import { TimeService } from './../time.service';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  url1Inside = "http://localhost:3000/d/CqoTFBqWz/bar?from=now-";
  url1OpenWeather='http://localhost:3000/d/Y-4Tm93Zk/temperature_openweather?orgId=1&from=now-';
  url2 = "&to=now&refresh=10s&kiosk";
  url: string;
  url1:string;
  urlSafe: SafeResourceUrl;
  time: string;
  private subsription:Subscription;
  private OpenWeatherSub:Subscription;

  constructor(
    public sanitizer: DomSanitizer,
    private timeSerivce: TimeService
  ) {}

  ngOnInit() {
    if (this.timeSerivce.openWeather) {
      this.url1 = this.url1OpenWeather;
    } else {
      this.url1 = this.url1Inside;
    }
    this.timeSerivce.setOpenWeather(true);
    this.timeSerivce.setTableMode(false);
    this.time = this.timeSerivce.time;
    this.url = this.url1 + this.time + this.url2;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.OpenWeatherSub = this.timeSerivce.inOpenWeatherMode.subscribe((openWeatherMode) => {
      if (openWeatherMode) {
        this.url1 = this.url1OpenWeather;
      } else {
        this.url1 = this.url1Inside;
      }
      this.url = this.url1 + this.time + this.url2;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    });
    this.subsription=this.timeSerivce.timeChanged.subscribe((time: string) => {
      this.time = time;
     // console.log(time);
      this.url = this.url1 + this.time + this.url2;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    });
    //TO DO kad bude na rpi onda ovo preko api
    // this.http.get(this.api).toPromise().then(data => {
    //   console.log(data);
    //})
  }
  ngOnDestroy(){
    this.subsription.unsubscribe();
    this.OpenWeatherSub.unsubscribe();
  }
}
