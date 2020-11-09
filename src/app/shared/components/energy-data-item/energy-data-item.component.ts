import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { EnergyData } from '../../../core/models/energy-data.model';

@Component({
  selector: 'app-energy-data-item',
  templateUrl: './energy-data-item.component.html',
  styleUrls: ['./energy-data-item.component.scss'],
  animations: [
    trigger('secretRevealedAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
        style({ opacity: 1 })
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms ease-in', style({ opacity: 0 })),
      ])
    ]),

    trigger('faChangeAnimation', [
      state('up', style({
        transform: 'rotate(180deg)',
      })),
      state('down', style({
        transform: 'rotate(0deg)',
      })),
      transition('up => down', [
        animate('500ms ease', style({ transform: 'rotate(0deg)' })),
      ]),
      transition('down => up', [
        animate('500ms ease', style({ transform: 'rotate(180deg)' })),
      ]),
    ]),
  ]})
export class EnergyDataItemComponent {
  faAngleDown = faAngleDown;

  isSecretRevealed = false;

  @Input() data: EnergyData;

  constructor() { }

  onSecretReveal(): void {
    this.isSecretRevealed = !this.isSecretRevealed;
  }

}
