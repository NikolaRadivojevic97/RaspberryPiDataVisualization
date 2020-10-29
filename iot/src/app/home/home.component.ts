import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url1 = "http://localhost:3000/d/-W20W9qZk/home?orgId=1&from=now-";
  url2 = "&to=now&refresh=10s&kiosk";
  url: string;
  urlSafe: SafeResourceUrl;
  time: string;
  private subsription:Subscription;

  constructor(
    public sanitizer: DomSanitizer,
    private timeSerivce: TimeService
  ) {}

  ngOnInit() {
    this.timeSerivce.setOpenWeather(false);
    this.timeSerivce.setTableMode(false);
    this.time = this.timeSerivce.time;
    this.url = this.url1 + this.time + this.url2;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
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
  }
}
