
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss'],

  animations: [
        trigger("animationList", [
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
        ]),

        trigger("animationList2", [
            state("inactive1", style({
                opacity: 0,
                visibility: "hidden",
                transform: 'translateY(100%)'
            })),
            state("active1", style({
                opacity: 1,
                visibility: "visible",
                transform: 'translateY(0%)'
            })),
            transition("inactive1 => active1", animate("1500ms ease-in")),
            transition("active1 => inactive1", animate("2000ms ease-out")),
        ]),

        trigger("animationList3", [
            state("inactive2", style({
                opacity: 0,
                visibility: "hidden",
                transform: 'translateY(100%)'
            })),
            state("active2", style({
                opacity: 1,
                visibility: "visible",
                transform: 'translateY(0%)'
            })),
            transition("inactive2 => active2", animate("1500ms ease-in")),
            transition("active2 => inactive2", animate("2000ms ease-out")),
        ]),

        trigger("animationTitle", [
            state("inactiveTitle", style({
                opacity: 0,
                visibility: "hidden",
                transform: 'translateY(100%)'
            })),
            state("activeTitle", style({
                opacity: 1,
                visibility: "visible",
                transform: 'translateY(0%)'
            })),
            transition("inactiveTitle => activeTitle", animate("2000ms ease-in")),
            transition("activeTitle => inactiveTitle", animate("2000ms ease-out")),
        ]),
    ]

})
export class ExpertiseComponent implements OnInit {


  ngOnInit() {
  }

  scrollimateOptions: any = {
    myScrollimation: {
        currentState: "inactive", //currentState is required
        states: [
            {
                method: "pxElement", //this will be true when a total of 85% of the page has been scrolled
                value: 50,
                state: "active",
            },
            {
                method: "default",
                state: "inactive"
            }
        ]
    },
}

scrollimateOptions1: any = {
  myScrollimation1: {
      currentState: "inactive1", //currentState is required
      states: [
          {
              method: "pxElement", //this will be true when a total of 85% of the page has been scrolled
              value: 50,
              state: "active1",
          },
          {
              method: "default",
              state: "inactive1"
          }
      ]
  },
}

scrollimateOptions2: any = {
  myScrollimation2: {
      currentState: "inactive2", //currentState is required
      states: [
          {
              method: "pxElement", //this will be true when a total of 85% of the page has been scrolled
              value: 50,
              state: "active2",
          },
          {
              method: "default",
              state: "inactive2"
          }
      ]
  },
}

scrollimateOptionsTitle: any = {
  myScrollimationTitle: {
      currentState: "inactiveTitle", //currentState is required
      states: [
          {
              method: "pxElement", //this will be true when a total of 85% of the page has been scrolled
              value: 50,
              state: "activeTitle",
          },
          {
              method: "default",
              state: "inactiveTitle"
          }
      ]
  },
}



}
