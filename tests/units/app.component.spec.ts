import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

// TODO: change jest config to use paths
import { AppComponent } from "@abo/app.component";
import { CoreModule } from "@abo/core/core.module";

describe("AppComponent", () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                CoreModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });

    test("app is created", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    test("main component name is AppComponent", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.name).toEqual("AppComponent");
    });

    xtest("welcome message is displayed in home", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector(".content p").textContent).toContain("Angular boilerplate is running!");
    });
});
