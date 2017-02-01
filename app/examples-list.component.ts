import { Component, ChangeDetectionStrategy } from "@angular/core";




@Component({
    moduleId: module.id,
    templateUrl: "examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExamplesListComponent {
    items = [
        { title: 'item 1', rating: 3.5 },
        { title: 'item 2', rating: 2.6789 },
         { title: 'item 3', rating: 3.3 },
        { title: 'item 4', rating: 5 },

    ];

    constructor() {
       
    }
    
    public logRating(val) {
        console.log(val);
    }
    
}
