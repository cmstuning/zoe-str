import { Component, Input, OnInit } from '@angular/core';
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
    fullIcon = "";

    @Input()
    emptyIcon = '';

    @Input()
    halfIcon = '';

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


 public wrapperWidth: number;   
 public icon: string; 
 public userRatingValue: number = 0;

    constructor() { 
        this.wrapperWidth = this.starsCount * this.itemWidth;
    }
   



    ngOnInit() { 
        this.buildRating();
    }
    rating: any[];

    
    getRating() {
        return this.rating;
}
    public buildRating() {
        let value = this.userRatingValue === 0 ? this.ratingValue : this.userRatingValue;
         this.rating = []; //init on each call
        // this.rating.length = 0; //init on each call
      
        
        
        for (let i = 1; i <= this.starsCount; i++) {
            
            let ico = value >= i ? this.fullIcon : Math.round(value)>i-1?this.halfIcon:this.emptyIcon;
       
            this.rating.push({
                icon: ico,
            class: '',

            });
        }
        return this.rating;
      
    }
    private setIcon(percentage) {
    
}    

    onTouch(args: TouchGestureEventData) {
        switch (args.action) {
            case 'up':
                // for this case we'll send the value to api
                // this.titles = args.getX().toString();   
                break;
            default:
                // let percent = this.wrapperWidth / 100 * args.getX();
                // let rating = this.starsCount / 100 * percent;
                this.userRatingValue = this.starsCount / 100 * (this.wrapperWidth / 100 * args.getX())+0.5;
                this.buildRating();
                
             
                
                 this.titles = this.userRatingValue.toString();
        }
 
        // console.log("Touch action (up, down, cancel or move)" + args.action);
        // console.log("Touch point: [" + args.getX() + ", " + args.view.getMeasuredWidth() + "]");
        // console.log("activePointers: " + args.getActivePointers().length);
   
    }

}