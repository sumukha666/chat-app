import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements AfterViewInit {
  currentIndex: number;
  @ViewChild("home") home: ElementRef;
  @ViewChild("activity") activity: ElementRef;
  @ViewChild("menu") menu: ElementRef;

  constructor() {}
  ngAfterViewInit(): any {}

  getIndex(index): any {
    index === 0
      ? this.home.nativeElement.firstChild.click()
      : index === 1
      ? this.activity.nativeElement.firstChild.click()
      : this.menu.nativeElement.firstChild.click();
    this.currentIndex = index;
  }
}
