import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from "@angular/core";
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from "../../keyFrames";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("swipeEndAnimation", [
      transition("* => headShake", animate(1500, keyframes(kf.headShake))),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  @Output() sendIndex: EventEmitter<any> = new EventEmitter<any>();
  animationState: string;
  constructor() {}

  ngOnInit(): void {}

  handleSwipeLeft(): any {
    this.sendIndex.emit(1);
  }

  startAnimation(state): any {
    console.log(state);
    if (this.animationState !== state) {
      this.animationState = state;
    }
  }

  resetAnimationState(): any {
    console.log("animation Ended");
    this.animationState = "";
  }

  @HostListener("window:focus", ["$event"])
  onFocus(event: any): void {
    this.resetAnimationState();
  }
}
