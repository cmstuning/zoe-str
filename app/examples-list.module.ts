import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ExamplesListComponent } from "./examples-list.component";
import { ZoeStrModule } from './shared/zoe-str/zoe-str.module'

export const routerConfig = [{
    path: "",
    component: ExamplesListComponent
}];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig),
        ZoeStrModule,
    ],
    declarations: [ExamplesListComponent]
})

export class ExamplesListModule {
    constructor() { }
}
