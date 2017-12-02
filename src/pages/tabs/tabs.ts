import { Component } from '@angular/core';
import { SwipePage } from '../swipe/swipe';
import { ScrollPage } from '../scroll/scroll';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SwipePage;
  tab2Root = ScrollPage;

  constructor() {

  }
}
