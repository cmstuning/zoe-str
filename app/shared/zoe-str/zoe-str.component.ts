import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TouchGestureEventData } from "ui/gestures";

interface Rating {
    icon: string,
    css: string
}

@Component({
    moduleId: module.id,
    selector: 'ZoeStr',
    templateUrl: './zoe-str.component.html'
})
export class ZoeStrComponent implements OnInit {

    /*
    *  Type of the star. Note, that HTML escape code is not supported, just copy and paste the real text value
    */

    @Input()
    fullIcon: string = "";

    @Input()
    emptyIcon: string = '';

    @Input()
    halfIcon: string = '';

    /*
    * css class for the icons. You can control size, color, etc...
    */

    @Input()
    iconClass = "star-icon";

    @Input()
    iconActiveClass: string = "star-icon-active";

    @Input()
    align: string = "left";

    @Input()
    readonly: boolean = false;

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


    @Output()
    onUp = new EventEmitter();


    public wrapperWidth: number;
    public icon: string;
    private ratingChanged: boolean = false;
    rating: Rating[];
    constructor() {

    }


    ngOnInit() {
        this.wrapperWidth = this.starsCount * this.itemWidth;
        this.buildRating();
        this.inputValidator();
    }

    private inputValidator() {
        if (this.ratingValue > this.starsCount) {
            console.error('Rating value cannot be more than stars count!');
            this.ratingValue = this.starsCount;
        }

    }

    private buildRating() {
        let value = this.ratingChanged ? this.userRatingValue : this.ratingValue;
        this.rating = []; //init on each call

        for (let i = 1; i <= this.starsCount; i++) {

            let ico = value >= i ? this.fullIcon : Math.round(value) > i - 1 ? this.halfIcon : this.emptyIcon;

            this.rating.push({
                icon: ico,
                css: ico !== this.emptyIcon ? this.iconActiveClass : '',

            });
        }
        return this.rating;

    }

    onTouch(args: TouchGestureEventData) {


        switch (args.action) {
            case 'up':
                this.onUp.emit(this.userRatingValue);

                break;
            default:
                if (!this.readonly) {
                    this.ratingChanged = true;
                    let percent = args.getX() * 100 / this.wrapperWidth;
                    //  remove values emmited if drag outside the container
                    percent = percent > 100 ? 100 : (percent < 0) ? 0 : percent;
                    this.userRatingValue = Math.ceil(this.starsCount / 100 * percent);

                    this.buildRating();

                }
        }

    }

}