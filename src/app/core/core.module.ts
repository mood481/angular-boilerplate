import { NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import localeEs from "@angular/common/locales/es";
import {SimpleLoggerModule, SimpleLogLevel} from "@macto/ngx-simple-logger";

registerLocaleData(localeEs);

import { environment } from "@abo/environments/environment";
import { LoggerService } from "./services/logger.service";


@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        SimpleLoggerModule.forRoot({
            level: !environment.production ? SimpleLogLevel.DEBUG : SimpleLogLevel.ERROR
        })
    ],
    exports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
    ],
    providers: [
        LoggerService
    ]
})
export class CoreModule
{
    public constructor() {

    }
}
