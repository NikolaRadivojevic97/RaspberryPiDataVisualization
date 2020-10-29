import { TimeService } from './time.service';
import { NgModule } from '@angular/core';

@NgModule({
    //ovde servise ne moramo da export oni idu bez
    providers:[TimeService]
})
export class CoreModule{}
