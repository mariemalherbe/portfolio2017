import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Ng2ScrollimateModule} from 'ng2-scrollimate';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
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

}
