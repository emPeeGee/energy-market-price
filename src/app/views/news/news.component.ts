import { Component } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { News } from '../../core/models/news.model';
import { AnimatedComponent, Animations } from '../../shared/animation/animations';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [ Animations.onAppearAnimation ]
})
export class NewsComponent extends AnimatedComponent {
  faAngleRight = faAngleRight;

  slides: News[] = [
    {
      image: 'assets/images/backgrounds/news_daily.png',
      date: new Date(2020, 5, 17),
      title: 'Daily (24.05.2020): EUAs surpassed the $ 25-level for the first time in four months on Tuesday amid bullish economic data',
      description: 'Crude oil futures pulled back off the highest level since before coronavirus pandemic on Tuesday amid a sharp increase in COVID-19 cases and before the release of a weekly report which is expected to reveal that crude inventories have reached a new all-time high in the United States.'
    },
    {
      image: 'assets/images/backgrounds/cyberpunk_background1.jpg',
      date: new Date(2020, 5, 17),
      title: 'Daily (24.05.2020): EUAs surpassed the $ 25-level for the first time in four months on Tuesday amid bullish economic data',
      description: 'Crude oil futures pulled back off the highest level since before coronavirus pandemic on Tuesday amid a sharp increase in COVID-19 cases and before the release of a weekly report which is expected to reveal that crude inventories have reached a new all-time high in the United States.'
    },
    {
      image: 'assets/images/backgrounds/cyberpunk_background2.jpg',
      date: new Date(2020, 5, 17),
      title: 'Daily (24.05.2020): EUAs surpassed the $ 25-level for the first time in four months on Tuesday amid bullish economic data',
      description: 'Crude oil futures pulled back off the highest level since before coronavirus pandemic on Tuesday amid a sharp increase in COVID-19 cases and before the release of a weekly report which is expected to reveal that crude inventories have reached a new all-time high in the United States.'
    },

  ];

  constructor() {
    super();
  }
}
