import { Component, Input, OnInit } from '@angular/core';

import { PanGestureEventData } from "ui/gestures";
import { TouchGestureEventData } from "ui/gestures";



@Component({
    moduleId: module.id,
    selector: 'ZoeStr',
    templateUrl: './zoe-str.component.html'
    


})
export class ZoeStrComponent implements OnInit {

@Input()
    iconClass = "star-icon";

    @Input()
    fullIcon = "★";

    @Input()
    emptyIcon = "☆";

    @Input()
    readonly: boolean;

    @Input()
    disabled: boolean;
 @Input()
 titles: string = 'test bla bla';

 @Input()
 ratingValue: number = 0;   

 @Input()
 starsCount: number = 5;   
 @Input()
 itemWidth: number = 20;    


    wrapperWidth: number;    

    constructor() { 
        this.wrapperWidth = this.starsCount * this.itemWidth;
    }
   



    ngOnInit() { 
        this.buildRating();
    }
    rating: any[] = [];

    getRating() {
        
    }

    private buildRating() {
        for (let i = 0; i < this.starsCount; i++) {
            this.rating.push(i);
        }
        
}

    onTouch(args: TouchGestureEventData) {
        switch (args.action) {
            case 'up':
            // for this case we'll send the value to api
                this.titles = args.getX().toString();    
            default:
                this.titles = args.getX().toString();
        }
 
        console.log("Touch action (up, down, cancel or move)" + args.action);
        console.log("Touch point: [" + args.getX() + ", " + args.view.getMeasuredWidth() + "]");
        console.log("activePointers: " + args.getActivePointers().length);
   
    }
}