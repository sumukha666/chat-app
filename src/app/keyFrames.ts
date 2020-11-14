import { keyframes, style } from '@angular/animations';

export const zoomOutRight = [
  style({
    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
    offset: 0.4,
    opacity: 1,
  }),
  style({ transform: 'none', offset: 1, opacity: 0 }),
];

export const slideOutLeft = [
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ transform: 'translate3d(-100%, 0, 0)', offset: 1 }),
];

export const slideOutRight = [
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ transform: 'translate3d(100%, 0, 0)', offset: 1 }),
];
