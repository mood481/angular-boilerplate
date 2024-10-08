import { mapToCanMatch, Routes } from "@angular/router";

import { MainLayoutComponent } from "@abo/common/layouts/main-layout.component";
import { AppConstants } from "@abo/app.constants";
import { AuthGuard } from "@abo/core/auth/auth.guard";

export const routes: Routes = [
    {
        path:  AppConstants.Routing.BASE_PRIVATE,
        component: MainLayoutComponent,
        children: [
            {
                path: "dashboard",
                canMatch: mapToCanMatch([AuthGuard]),
                loadChildren: () => import("./private/dashboard/dashboard.module").then(mod => mod.DashboardModule)
            },
            {
                path: "elements",
                canMatch: mapToCanMatch([AuthGuard]),
                loadChildren: () => import("./private/elements/elements.module").then(mod => mod.ElementsModule)
            }
        ]

    },
    {
        path: "home",
        loadChildren: () => import("./public/home/home.module").then(mod => mod.HomeModule)
    },
    {
        path: "login",
        loadChildren: () => import("./public/login/login.module").then(mod => mod.LoginModule)
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "/home"
    }
];
