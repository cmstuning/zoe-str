import { Component, Input } from '@angular/core';
// import { ContentView } from "ui/content-view";



@Component({
    moduleId: module.id,
    selector: 'ZoeStr',
    // templateUrl: 'feature.component.html'
    template: `
    <Label text="{{titles}}" textWrap="true"></Label>
`


})
export class ZoeStrComponent {
    constructor() { }
    @Input()
    titles: string = 'test bla bla';

    //ngOnInit() { }
}