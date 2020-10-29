
import { Subject } from 'rxjs';

export class TimeService {
  timeRanges:string[]=["5m","10m","15m","30m","1h","2h","8h","12h","24h","48h"];
  timeChanged=new Subject<string>();
  openWeatherMode=new Subject<boolean>();
  tableMode=new Subject<boolean>();
  inTableMode=new Subject<boolean>();
  inOpenWeatherMode=new Subject<boolean>();
  _inTableMode=false;
  _inOpenWeatherMode=false;
  _time="36h";
  _openWeather=false;
  _tableMode=false;
  constructor() {}
  get time() {
    return this._time;
  }
  get table(){
    return this._inTableMode;
  }
  get openWeather(){
    return this._inOpenWeatherMode;
  }
  setTime(time: string) {
    this._time = time;
    this.timeChanged.next(this._time);
  }

  setOpenWeather(ow: boolean) {
    this._openWeather = ow;
    this.openWeatherMode.next(this._openWeather);
  }
  setTableMode(tm:boolean){
    this._tableMode=tm;
    this.tableMode.next(this._tableMode);
  }
  setOnTableMode(){
    this._inTableMode=!this._inTableMode;
    this.inTableMode.next(this._inTableMode);
  }
  setInOpenWeatherMode(){
    this._inOpenWeatherMode=!this._inOpenWeatherMode;
    this.inOpenWeatherMode.next(this._inOpenWeatherMode);
  }
}
