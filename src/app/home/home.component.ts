import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  texts: Array<any>;
  text: String;

  constructor() {
    this.texts = ["Made For You", "By Me", "So You Can Shine"];
    this.text = "";
  }

  ngOnInit() {
    let i = 0;
    Observable.timer(0, 500).subscribe(x => {
      if(i < 3){
        this.text = this.texts[i];
        i++;
        } else {
        i = 0;
        }
      })
    }
  }
