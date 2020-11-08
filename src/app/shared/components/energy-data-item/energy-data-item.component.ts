import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { EnergyData } from '../../../core/models/energy-data.model';
import {animate, style, transition, trigger} from '@angular/animations';

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
    ])
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
