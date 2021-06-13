import { Component } from "@angular/core";

import { LoggerService } from "@abo/core/services/logger.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent
{
    public name = "AppComponent";

    public constructor(private log: LoggerService) {
        log.debug("Init LoggerService")
    }
}
