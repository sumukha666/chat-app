import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  keyframes,
  animate,
  transition,
  style,
} from '@angular/animations';
import * as kf from '../../animation-swipe/keyframes';

@Component({
  selector: 'app-about-page-component',
  templateUrl: './about-page-component.component.html',
  styleUrls: ['./about-page-component.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutRight',  animate(500, keyframes(kf.slideOutRight))),
      transition('* => slideOutLeft', animate(500, keyframes(kf.slideOutLeft))),
    ])
  ]
})
export class AboutPageComponentComponent implements OnInit {
  animationState: string;
  dynamicIndex: number;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  startAnimation(state) {
    console.log(state);
    if (this.animationState !== state) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  swipeLeft(animationType, event){
    console.log(event);
    // this.route.navigate(['left']);
    this.dynamicIndex = 0;
    this.startAnimation(animationType);
  }

  swipeRight(animationType, event){
    console.log(event);
    // this.route.navigate(['right']);
    this.dynamicIndex = 2;
    console.log(this.dynamicIndex)
    this.startAnimation(animationType);
  }
  getIndex(data){
    console.log(data);
  }

}
