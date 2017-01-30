import { Component, ChangeDetectionStrategy } from "@angular/core";




@Component({
    moduleId: module.id,
    templateUrl: "examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExamplesListComponent {
    items = [
        { title: 'item1' },
         {title: 'item2'}
    ];

    constructor() {
       
        }
    
}
