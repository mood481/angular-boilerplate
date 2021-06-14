import { Component } from "@angular/core";

import { LoggerService } from "@abo/core/services/logger.service";
import { BaseComponent } from "@abo/common/base/base.component";

@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.scss"],
})
export class HomeComponent extends BaseComponent
{
    public name = "ABO";

    constructor(logger: LoggerService) {
        super(logger);
    }
}
