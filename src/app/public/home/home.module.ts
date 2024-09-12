import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { TranslocoModule } from "@jsverse/transloco";

@NgModule({
    imports: [
        CommonModule,
        TranslocoModule,
        RouterModule.forChild([
            {
                path: "",
                component: HomeComponent
            }
        ])
    ],
    declarations: [HomeComponent]
})
export class HomeModule
{
}
