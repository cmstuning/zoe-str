import { Component } from "@angular/core";

// import { ChangeDetectionStrategy } from "@angular/core";


@Component({
     moduleId: module.id,
    selector: "my-app",
    template: `
        <GridLayout>
            <page-router-outlet></page-router-outlet>
        </GridLayout>
    `
   
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
//     public counter: number = 16;
//     public rating = ['one', 'two', 'three'];
//     public ratingCount: number = 3;
//     public star = { empty: '', full: '', half: '' }
//     public empty = 'f006';

//     public get message(): string {
//         if (this.counter > 0) {
//             return this.counter + " taps left";
//         } else {
//             return "Hoorraaay! \nYou are ready to start building!";
//         }
//     }
    
//     public onTap() {
//         this.counter--;
//     }
//     public getRating(current: number, total:number = 5) {
//         let rating = [];
//         for (let i = 0; i < total; i++){
// rating.push({active:(i<current)?true:false})
//         }
//         return rating;
//     }
//     public setRating(rating) {
//         this.ratingCount = rating+1;
        
//     }
}
