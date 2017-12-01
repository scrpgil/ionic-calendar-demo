import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipePage } from './swipe';

@NgModule({
  declarations: [
    SwipePage,
  ],
  imports: [
    IonicPageModule.forChild(SwipePage),
  ],
  exports: [
      SwipePage,
  ]
})
export class SwipePageModule {}
