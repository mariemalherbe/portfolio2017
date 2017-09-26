import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import * as _ from "lodash";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;

    constructor(
      db: AngularFireDatabase,
      private route: ActivatedRoute,
    ) {
      const projectUrl = this.route.snapshot.params['id']
      this.projects = db.list('/projects', {
        query:{
          orderByChild: 'name',
          equalTo: projectUrl,
        }
      });
      console.log(this.projects);
    }

  ngOnInit() {
  }
}
