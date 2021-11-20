import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "rxjsdemos",
    loadChildren: () => import("./obs-demo/obs-demo.module").then(m => m.ObsDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
    preloadingStrategy: PreloadAllModules
  })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
