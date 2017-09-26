import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Ng2ScrollimateModule} from 'ng2-scrollimate';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],


  animations: [
        trigger("animationProject", [
            state("inactive", style({
                opacity: 0,
                visibility: "hidden",
                transform: 'translateY(100%)'
            })),
            state("active", style({
                opacity: 1,
                visibility: "visible",
                transform: 'translateY(0%)'
            })),
            transition("inactive => active", animate("1500ms ease-in")),
            transition("active => inactive", animate("2000ms ease-out")),
        ])
    ]
})
export class ProjectComponent implements OnInit {
projects: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.projects = db.list('/projects');
    this.projects.subscribe(
      val => console.log(val)
    )
  }

  ngOnInit() {
  }

  colorTags: string = "white";

 onMouseOver(myColor): void {
   this.colorTags = myColor;
 }

 onMouseOut(): void {
    this.colorTags = "white";
  }

  scrollimateOptions: any = {
    myScrollimation: {
        currentState: "inactive", //currentState is required
        states: [
            {
                method: "pxLeft", //this will be true when a total of 85% of the page has been scrolled
                value: 1500,
                state: "active",
            },
            {
                method: "default",
                state: "inactive"
            }
        ]
    },
}

}
