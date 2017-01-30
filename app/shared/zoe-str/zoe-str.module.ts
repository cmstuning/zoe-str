import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { ZoeStrComponent } from './zoe-str.component';

import { registerElement } from "nativescript-angular/element-registry";


@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptModule
    ],
    exports: [ZoeStrComponent],
 declarations: [ZoeStrComponent],
    providers: [],
})
export class ZoeStrModule { }
