import { Directive, ElementRef, HostListener } from '@angular/core';
import {animate, AnimationBuilder, AnimationMetadata, style} from '@angular/animations';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  green = '#83a600';
  white = '#ffffff';

  constructor(private builder: AnimationBuilder, private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    const metadata = this.color();

    const factory = this.builder.build(metadata);
    const player = factory.create(this.el.nativeElement);

    player.play();
  }

  @HostListener('mouseout') onMouseLeave(): void {
    const metadata = this.decolor();

    const factory = this.builder.build(metadata);
    const player = factory.create(this.el.nativeElement);

    player.play();
  }

  @HostListener('click') onCLick(): void {
    console.log('click');
    this.el.nativeElement.style.color = this.green;
  }

  private color(): AnimationMetadata[] {
    return [
      style({ color: this.white }),
      animate('300ms ease-in', style({  color: this.green })),
    ];
  }

  private decolor(): AnimationMetadata[] {
    return [
      style({ color: this.green }),
      animate('400ms ease-in', style({ color: this.white })),
    ];
  }
}
