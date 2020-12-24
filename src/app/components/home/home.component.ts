import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @Output() sendIndex: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  handleSwipeLeft(): any {
    this.sendIndex.emit(1);
  }
}
