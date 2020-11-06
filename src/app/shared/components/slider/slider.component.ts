import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { News } from '../../../core/models/news.model';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('sliderAnimation', [
      transition('void => *', [
        style({ opacity: 0.3 }),
        animate('1000ms ease', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class SliderComponent {

  @Input() slides: News[];

  faAngleRight = faAngleRight;
  currentSlide = 0;

  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
