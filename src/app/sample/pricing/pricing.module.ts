import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingRoutingModule } from "./pricing-routing.module";
import { PricingComponent } from "./pricing.component";
@NgModule({
    imports: [
        CommonModule,
          PricingRoutingModule,
    ],
    declarations: [
        PricingComponent
    ]
})
export class PricingModule { }