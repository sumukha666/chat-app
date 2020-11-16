import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  currentIndex: number;
  constructor() {}

  ngOnInit(): void {}
  getIndex(index): any {
    console.log(index);
    this.currentIndex = index;
  }
}
