import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animationState: string;
  constructor(private route: Router) { }
  @Input() index;
  ngOnInit(): void {
    console.log(this.index);
  }
  clickBtn1(event){
    this.route.navigate(["left"]);
  }
  clickBtn2(event){
    this.route.navigate(["right"]);
  }

 
}
