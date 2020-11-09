import { Component, OnInit } from '@angular/core';
import {
  trigger,
  keyframes,
  animate,
  transition,
  style,
} from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'app-animation-swipe',
  templateUrl: './animation-swipe.component.html',
  styleUrls: ['./animation-swipe.component.scss'],
  animations: [
    trigger('cardAnimator', [
      // trigger('* => wobble', animate(1000, keyframes(kf.wobble))),
      // trigger('* => swing', animate(1000, keyframes(kf.swing))),
      // trigger('* => jello', animate(1000, keyframes(kf.jello))),translate3d(-100%, 0, 0)
      transition('* => slideOutRight',  animate(500, keyframes(kf.slideOutRight))),
      transition('* => slideOutLeft', animate(500, keyframes(kf.slideOutLeft))),
    ]),
  ],
})
export class AnimationSwipeComponent implements OnInit {
  animationState: string;
  constructor() {}

  ngOnInit(): void {}

  startAnimation(state) {
    console.log(state);
    if (this.animationState !== state) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  testFun() {
    console.log('test pass');
  }
}
