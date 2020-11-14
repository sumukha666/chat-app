import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {
  //slider, transformer, stepper,
  fader,slider
} from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    slider
  ]
})
export class AppComponent {
  title = 'chat-app';
  animationState: string;
  constructor(private route: Router) { }
  prepareRoute(outlet: RouterOutlet){
    return  outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
