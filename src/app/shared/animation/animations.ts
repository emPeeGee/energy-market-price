import { trigger, transition, animate, style, state } from '@angular/animations';

export const Animations = {
  onAppearAnimation: trigger('appearAnimation', [
    state('hidden', style({
      opacity: 0,
    })),
    state('appear', style({
      opacity: 1,
    })),
    transition('hidden => appear', [
      animate('1000ms ease')
    ])
  ])
};

export class AnimatedComponent {
  status = 'hidden';

  constructor() { }

  onAppear(): void {
    this.status = 'appear';
  }
}
