import { TimeService } from "./../time.service";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"],
})
export class AllComponent implements OnInit, OnDestroy {
  // api = "http://localhost:3000/api/search?query=bar";
  grafUrl = "http://localhost:3000/d/DyIIL1qZk/svi?orgId=1&from=now-";
  tableUrl = "http://localhost:3000/d/50JoIfqZk/tabela-svi?orgId=1&from=now-";
  url2 = "&to=now&refresh=10s&kiosk";
  url: string;
  url1: string;
  urlSafe: SafeResourceUrl;
  time: string;
  private subsription: Subscription;
  private tableSub: Subscription;

  constructor(
    public sanitizer: DomSanitizer,
    private http: HttpClient,
    private timeSerivce: TimeService
  ) {}

  ngOnInit() {
    if (this.timeSerivce.table) {
      this.url1 = this.tableUrl;
    } else {
      this.url1 = this.grafUrl;
    }
    this.timeSerivce.setOpenWeather(false);
    this.timeSerivce.setTableMode(true);
    this.time = this.timeSerivce.time;
    this.url = this.url1 + this.time + this.url2;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.tableSub = this.timeSerivce.inTableMode.subscribe((tableMode) => {
      if (tableMode) {
        this.url1 = this.tableUrl;
      } else {
        this.url1 = this.grafUrl;
      }
      this.url = this.url1 + this.time + this.url2;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    });
    this.subsription = this.timeSerivce.timeChanged.subscribe(
      (time: string) => {
        this.time = time;
        // console.log(time);
        this.url = this.url1 + this.time + this.url2;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      }
    );
    //TO DO kad bude na rpi onda ovo preko api
    // this.http.get(this.api).toPromise().then(data => {
    //   console.log(data);
    //})
  }
  ngOnDestroy() {
    this.subsription.unsubscribe();
    this.tableSub.unsubscribe();
  }
}
