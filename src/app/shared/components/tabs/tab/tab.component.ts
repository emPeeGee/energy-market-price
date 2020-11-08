import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  animations: [
    trigger('tabChangeAnimation', [
      state('hidden', style({
         transform: 'scale(0.05, 0.05)',
      })),
      state('active', style({
        transform: 'scale(1, 1)',
      })),
      transition('hidden => active', [
        animate('1000ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ])
    ])
  ]
})
export class TabComponent {
  @Input('title') title: string;
  @Input() active = false;
}
