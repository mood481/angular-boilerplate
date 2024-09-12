import { Component, OnInit } from "@angular/core";

import {BaseComponent} from "../base/base.component";
import {LoggerService} from "@abo/core/services/logger.service";
import {AppConstants} from "@abo/app.constants";
import { AppAuthService } from "@abo/core/auth/auth.service";

@Component({
    selector: "app-main-layout",
    templateUrl: "./main-layout.component.html",
    styleUrls: ["./main-layout.component.scss"]
})
export class MainLayoutComponent extends BaseComponent implements OnInit
{
   constructor(protected logger: LoggerService,
               private authSrv: AppAuthService) {
        super(logger);
    }

    public ngOnInit(): void {
        //
    }

    public doLogout(): void {
        this.authSrv.logout();
    }
}
