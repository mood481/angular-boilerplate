import { NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import localeEs from "@angular/common/locales/es";
import {SimpleLoggerModule, SimpleLogLevel} from "@macto/ngx-simple-logger";
import { provideTransloco, TranslocoModule, TranslocoService } from "@jsverse/transloco";

registerLocaleData(localeEs);

import { environment } from "@abo/environments/environment";
import { LoggerService } from "./services/logger.service";
import { TranslateHttpLoader } from "@abo/core/services/translate-http.loader";
import { AppConstants } from "@abo/app.constants";


@NgModule({
    declarations: [],
    exports: [
        BrowserModule,
        CommonModule,
        TranslocoModule
    ],
    imports: [
        BrowserModule,
        CommonModule,
        SimpleLoggerModule.forRoot({
            level: !environment.production ? SimpleLogLevel.DEBUG : SimpleLogLevel.ERROR
        }),
        TranslocoModule
    ],
    providers: [
        provideTransloco({
            config: {
                availableLangs: AppConstants.LANGS,
                defaultLang: environment.defaultLang || AppConstants.DEFAULT_LANG,
                reRenderOnLangChange: false,
                prodMode: environment.production
            },
            loader: TranslateHttpLoader
        }),
        LoggerService,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class CoreModule
{
    public constructor(protected translocoService: TranslocoService) {
        this.translocoService.setActiveLang(environment.defaultLang || AppConstants.DEFAULT_LANG);
    }
}
