import { Directive, ElementRef, HostListener } from '@angular/core';
import { animate, AnimationBuilder, AnimationMetadata, style } from '@angular/animations';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  green = '#83a600';
  white = '#ffffff';

  constructor(private builder: AnimationBuilder, private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    const metadata = this.color();
    this.highlight(metadata);
  }

  @HostListener('mouseout') onMouseLeave(): void {
    const metadata = this.discolor();
    this.highlight(metadata);
  }

  private highlight(metadata: AnimationMetadata[]): void {
    const factory = this.builder.build(metadata);
    const player = factory.create(this.el.nativeElement);

    player.play();
  }

  private color(): AnimationMetadata[] {
    return [
      style({ color: this.white }),
      animate('300ms ease-in', style({  color: this.green })),
    ];
  }

  private discolor(): AnimationMetadata[] {
    return [
      style({ color: this.green }),
      animate('400ms ease-in', style({ color: this.white })),
    ];
  }
}
