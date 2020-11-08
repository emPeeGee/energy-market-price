import { trigger, transition, animate, style, state } from '@angular/animations';

export const Animations = {
  onAppearAnimation: trigger('appearAnimation', [
    state('hidden', style({
      opacity: 0,
      // transform: 'translateX(-100%)',
    })),
    state('appear', style({
      opacity: 1,
      // transform: 'translateX(0%)',
    })),
    transition('hidden => appear', [
      animate('1000ms ease-out')
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
