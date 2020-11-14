import {
  transition,
  trigger,
  style,
  query,
  animateChild,
  animate,
  keyframes, group
} from '@angular/animations';

// Basic
export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ])
    ]),
]);

/*
export const slider = trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft', slideTo('right')),
]);


function slideTo(direction){
    const optional = {optional: true};
    return [
        query(':enter,:leave', [
            style({
                position: 'absolue',
                top: 0,
                [direction]: 0,
                width: '100%'

            })
        ], optional),
        query(':enter', [
            style({[direction]: '-100%'})
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({[direction]: '100%'}))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({[direction]: '0%'}))
            ],optional),
        ]),
    ];
}
*/


export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}