import { Component, ChangeDetectionStrategy } from "@angular/core";




@Component({
    moduleId: module.id,
    templateUrl: "examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExamplesListComponent {
    items = [
        { title: 'item 1', rating: 3.5, id:10 },
        { title: 'item 2', rating: 2.6789, id:20 },
         { title: 'item 3', rating: 3.3, id:30 },
        { title: 'item 4', rating: 50, id:40 },

    ];

    constructor() {
       
    }
    
    public logRating(val, item) {
        console.log(`${val} ${item.id}`);
    }
    
}
