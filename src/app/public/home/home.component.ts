import { Component } from "@angular/core";

import { LoggerService } from "@abo/core/services/logger.service";
import { BaseComponent } from "@abo/common/base/base.component";
import { AppAuthService } from "@abo/core/auth/auth.service";

@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.scss"],
})
export class HomeComponent extends BaseComponent
{
    public name = "ABO";
    public isLoggedIn = false;

    constructor(logger: LoggerService,
                private authSrv: AppAuthService) {
        super(logger);
    }

    public ngOnInit() {
        this.isLoggedIn = this.authSrv.isLoggedIn();
    }
}
