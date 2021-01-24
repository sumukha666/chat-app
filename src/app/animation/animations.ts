import {
  animate,
  animation,
  keyframes,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from "@angular/animations";

/*export const fadeIn = trigger("fade", [
  state("void", style({ opacity: 0 })),
  transition(":enter,:leave", [animate(2000)]),
]);*/

export const fadeInAnimation = animation(
  animate(
    "1s ease-out",
    keyframes([
      style({ offset: 0, opacity: 0, transform: "translateY(-100%)" }),
      style({ offset: 1, opacity: 1, transform: "translateY(0%)" }),
    ])
  )
);

export const postAnimationTrigger = trigger("postsAnimation", [
  transition(":enter", useAnimation(fadeInAnimation)),
]);
