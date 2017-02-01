import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
    calb = this.onVoteRegistered();

    onVoteRegistered() {
        console.log(this.userRatingValue);
}    
    
@Input()
    iconActiveClass:string = "star-icon-active"

    @Input()
    fullIcon = "";

    @Input()
    emptyIcon = '';

    @Input()
    halfIcon = '';

    // @Input()
    // readonly: boolean = false;

    // @Input()
    // disabled: boolean = false;


 @Input()
    ratingValue: number = 0;  
    
 @Input()   
userRatingValue: number = 0;   

 @Input()
 starsCount: number = 5;  
    
 @Input()
 itemWidth: number = 30;   

  @Input()
 correlationPoint: number = 0.6;  

     @Output()
    onUp = new EventEmitter();


 public wrapperWidth: number;   
 public icon: string; 
 

    constructor() { 
        
    }
    private ratingChanged: boolean = false;

    ngOnInit() { 
        this.wrapperWidth = this.starsCount * this.itemWidth;
        this.buildRating();
    }
    rating: any[];

    private buildRating() {
        let value = this.ratingChanged ? this.userRatingValue:this.ratingValue;
         this.rating = []; //init on each call
       
        for (let i = 1; i <= this.starsCount; i++) {
            
            let ico = value >= i ? this.fullIcon : Math.round(value)>i-1?this.halfIcon:this.emptyIcon;
       
            this.rating.push({
                icon: ico,
            class: ico!==this.emptyIcon?this.iconActiveClass:'',

            });
        }
        return this.rating;
      
    }

    onTouch(args: TouchGestureEventData) {
        this.ratingChanged = true;   
        
        switch (args.action) {
            case 'up':
                this.onUp.emit(this.userRatingValue);
                
                // for this case we'll send the value to api
                // this.titles = args.getX().toString();   
                break;
            default:
                
                let percent = args.getX() * 100 / this.wrapperWidth;
                //  remove values emmited if drag outside the container
                percent = percent > 100 ? 100 : (percent < 0) ? 0 : percent;
                // add correlation point to any rating to get more natural feel on tap and scroll
                let rating = (this.starsCount / 100 * percent) + this.correlationPoint;
                
                // also remove the correlation which goes outside the range
                this.userRatingValue = (rating > this.starsCount) ? this.starsCount:rating===this.correlationPoint?0:rating;

                
                this.buildRating();
                
                // console.log(`${percent} ${rating}`);
             
                
        }

   
    }

}