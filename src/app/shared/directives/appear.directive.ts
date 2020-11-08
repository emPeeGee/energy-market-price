import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Directive({
  selector: '[appAppear]'
})
export class AppearDirective implements AfterViewInit, OnDestroy {

  @Output()
  appear: EventEmitter<void>;

  elementPos: number;
  elementHeight: number;

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;
  subscriptionResize: Subscription;

  constructor(private element: ElementRef){
    this.appear = new EventEmitter<void>();
  }

  saveDimensions(): void {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }

  saveScrollPos(): void {
    this.scrollPos = window.scrollY;
  }

  getOffsetTop(element: any): number {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent) - 350;
    }

    return offsetTop;
  }

  checkVisibility(): void {
    if (this.isVisible()) {
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();
      if (this.isVisible()) {
        this.unsubscribe();
        this.appear.emit();
      }
    }
  }

  isVisible(): boolean {
    return this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
  }

  subscribe(): void {
    this.subscriptionScroll = fromEvent(window, 'scroll')
      .subscribe((res) => {
        this.saveDimensions();
        this.saveScrollPos();
        this.checkVisibility();
      });

    this.subscriptionResize = fromEvent(window, 'resize')
      .subscribe(() => {
        this.saveDimensions();
        this.checkVisibility();
      });
  }

  unsubscribe(): void {
    if (this.subscriptionScroll) {
      this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
