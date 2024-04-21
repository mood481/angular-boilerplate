import {Injectable} from "@angular/core";


import {AppAuthService} from "./auth.service";
import {LoggerService} from "@abo/core/services/logger.service";

@Injectable({providedIn: "root"})
export class AuthGuard
{
    public constructor(private authSrv: AppAuthService,
                       private log: LoggerService) {
    }

    public canMatch(): boolean {
        const isLogged = this.authSrv.isLoggedIn();

        if (isLogged) {
            this.log.debug("User is logged: access granted");
            this.authSrv.checkTokenAndUpdate();
        } else {
            this.log.debug("User is not logged in... logout");
            this.authSrv.logout();
        }

        return isLogged;
    }
}
