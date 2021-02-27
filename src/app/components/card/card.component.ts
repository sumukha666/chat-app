import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() iconUrl;
  @Input() postUrl;
  @Input() cardText;
  @Input() title;
  @Input() subTitle;
  @Input() type;
  @Input() isAvatarReq;
  constructor() {
  }

  ngOnInit(): void {}
}
