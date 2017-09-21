
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import {NgsRevealConfig} from 'ng-scrollreveal';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit {


  ngOnInit() {
  }

  constructor(config: NgsRevealConfig) {
    config.duration = 500;
    config.origin = 'bottom';
    config.distance = '200px';
    config.easing = 'ease-in-out';
  }

}
