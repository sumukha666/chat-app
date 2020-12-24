import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  @Output() sendIndex: EventEmitter<any> = new EventEmitter<any>();
  animationState: string;
  constructor() {}

  ngOnInit(): void {}

  handleSwipeRight(): any {
    this.sendIndex.emit(1);
  }
}
