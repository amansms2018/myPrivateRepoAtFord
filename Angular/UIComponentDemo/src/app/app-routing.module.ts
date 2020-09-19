import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './nguicomponent-modules/chart/barchart/barchart.component';
import { LinechartComponent } from './nguicomponent-modules/chart/linechart/linechart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  // { path: 'icons', component: IconsComponent } ,
  {

    path: 'barChart', component: BarchartComponent
  },
 {

    path: 'lineChart', component: LinechartComponent

  },


//   {

//     path: 'DoughnutChart', component: DoughnutComponent

//   },

//    { path:'Polarchart',component:PolarareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
