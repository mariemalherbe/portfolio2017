import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-lastprojects',
  templateUrl: './lastprojects.component.html',
  styleUrls: ['./lastprojects.component.scss']
})
export class LastprojectsComponent implements OnInit {
projects: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.projects = db.list('/projects');
  }

  ngOnInit() {
  }

}
