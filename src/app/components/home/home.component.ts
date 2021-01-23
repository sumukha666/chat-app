import { HelperService } from "./../../services/helper.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  userObj = [];

  @Output() sendIndex: EventEmitter<any> = new EventEmitter<any>();
  constructor(private helperFun: HelperService) {}

  ngOnInit(): void {
    this.getFivePosts();
  }

  handleSwipeLeft(): any {
    this.sendIndex.emit(1);
  }

  getFivePosts(): void {
    for (let i = 0; i < 5; i++) {
      console.log(i);
      this.userObj.push(this.helperFun.getPostDetails());
    }
    console.log(this.userObj);
  }
}
