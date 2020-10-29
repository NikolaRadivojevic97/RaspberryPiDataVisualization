import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
   {
    path: "home",
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: "all",
    loadChildren: () => import('./all/all.module').then(mod => mod.AllModule),
  },
  {
    path: "temperature",
    loadChildren: () =>
      import("./temperature/temperature.module").then(
        mod => mod.TemperatureModule
      ),
  },
  {
    path: "humidity",
    loadChildren: () =>
      import("./humidity/humidity.module").then(
        mod => mod.HumidityModule
      ),
  },
  {
    path: "brightness",
    loadChildren: () =>
      import("./brightness/brightness.module").then(
        mod => mod.BrightnessModule
      ),
  },
  {
    path: "smoke",
    loadChildren: () =>
      import("./smoke/smoke.module").then(
        mod => mod.SmokeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
