import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {News} from '../../core/models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  faAngleRight = faAngleRight;

  slides: News[] = [
    {
      image: 'assets/images/news_daily.png',
      date: new Date(2020, 5, 17),
      title: 'Daily (24.05.2020): EUAs surpassed the $ 25-level for the first time in four months on Tuesday amid bullish economic data',
      description: 'Crude oil futures pulled back off the highest level since before coronavirus pandemic on Tuesday amid a sharp increase in COVID-19 cases and before the release of a weekly report which is expected to reveal that crude inventories have reached a new all-time high in the United States.'
    },
    {
      image: 'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
      date: new Date(2020, 5, 17),
      title: 'Daily (24.05.2020): EUAs surpassed the $ 25-level for the first time in four months on Tuesday amid bullish economic data',
      description: 'Crude oil futures pulled back off the highest level since before coronavirus pandemic on Tuesday amid a sharp increase in COVID-19 cases and before the release of a weekly report which is expected to reveal that crude inventories have reached a new all-time high in the United States.'
    },
    {
      image: 'https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg',
      date: new Date(2020, 5, 17),
      title: 'Daily (24.05.2020): EUAs surpassed the $ 25-level for the first time in four months on Tuesday amid bullish economic data',
      description: 'Crude oil futures pulled back off the highest level since before coronavirus pandemic on Tuesday amid a sharp increase in COVID-19 cases and before the release of a weekly report which is expected to reveal that crude inventories have reached a new all-time high in the United States.'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
