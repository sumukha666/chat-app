import { EventEmitter, HostListener } from "@angular/core";
import { Output } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from "../../keyFrames";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  animations: [
    trigger("swipeEndAnimation", [
      transition("* => headShake", animate(1000, keyframes(kf.headShake))),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  @Output() sendIndex: EventEmitter<any> = new EventEmitter<any>();
  animationState: string;
  constructor() {}

  ngOnInit(): void {}

  handleSwipeRight(): any {
    this.sendIndex.emit(1);
  }

  startAnimation(state): any {
    console.log(state);
    if (this.animationState !== state) {
      this.animationState = state;
    }
  }

  resetAnimationState(): any {
    this.animationState = "";
  }
  @HostListener("window:focus", ["$event"])
  onFocus(event: any): void {
    this.resetAnimationState();
  }
}
