
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThankyouComponent } from "./thankyou.component";
import { ThankyouRoutingModule } from "./thankyou-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ThankyouRoutingModule
        ],
    declarations: [ThankyouComponent]
})
export class ThankyouModule {
}