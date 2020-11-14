import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponentComponent } from './demo/swipePages/about-page-component/about-page-component.component';
import { LeftComponentComponent } from './demo/swipePages/left-component/left-component.component';
import { RightComponentComponent } from './demo/swipePages/right-component/right-component.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponentComponent },
  {
    path: 'left',
    component: LeftComponentComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'right',
    component: RightComponentComponent,
    data: { animation: 'isRight' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
