import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
  
        Ng2Charts,
        ChartsRoutingModule,
        PageHeaderModule
    ],
    declarations: [ChartsComponent]
})
export class ChartsModule { }
