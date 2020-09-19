import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { IconsComponent } from './icons/icons.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LinechartComponent } from './chart/linechart/linechart.component';
import { BarchartComponent } from './chart/barchart/barchart.component';
import { DoughnutComponent } from './chart/doughnut/doughnut.component';
import { PiechartComponent } from './chart/piechart/piechart.component';
import { PolarareaComponent } from './chart/polararea/polararea.component';

@NgModule({
  declarations: [
    LinechartComponent,
    BarchartComponent,
    DoughnutComponent,
    PiechartComponent,
    PolarareaComponent,
  ],
  imports: [CommonModule, NzIconModule],
  exports: [
    CommonModule,
    NzIconModule,
    LinechartComponent,
    BarchartComponent,
    DoughnutComponent,
    PiechartComponent,
    PolarareaComponent,
  ],
})
export class NGUIComponentModulesModule {}
