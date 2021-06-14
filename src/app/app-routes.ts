import { Routes } from "@angular/router";

import { MainLayoutComponent } from "@abo/common/layouts/main-layout.component";
import { AppConstants } from "@abo/app.constants";

export const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "dashboard"
            },
            {
                path: AppConstants.Routing.BASE_PRIVATE + "/dashboard",
                loadChildren: () => import("./private/dashboard/dashboard.module").then(mod => mod.DashboardModule)
            },
            {
                path: AppConstants.Routing.BASE_PRIVATE + "/elements",
                loadChildren: () => import("./private/elements/elements.module").then(mod => mod.ElementsModule)
            }
        ]

    },
    {
        path: "home",
        loadChildren: () => import("./public/home/home.module").then(mod => mod.HomeModule)
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
