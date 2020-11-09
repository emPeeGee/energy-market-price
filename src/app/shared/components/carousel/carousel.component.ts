import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0.3 }),
        animate('1000ms ease', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() slides;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  currentSlide = 0;
  currentLength: number[];

  constructor() {}

  ngOnInit(): void {
    this.updateLength(this.slides[this.currentSlide].elems);
  }

  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    this.updateLength(this.slides[this.currentSlide].elems);
  }

  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    this.updateLength(this.slides[this.currentSlide].elems);
  }

  updateLength(length: number): void {
    this.currentLength = [...Array(length).keys()];
  }

  onTabClick(index: number): void {
    this.currentSlide = index === this.slides.length ? 0 : index;
  }
}

