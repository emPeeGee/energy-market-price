import {Component, Input, OnInit} from '@angular/core';
import { faUser, faMap } from '@fortawesome/free-solid-svg-icons';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:  [
    trigger('faAppear', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({  color: '#83a600', opacity: 1 })),
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faMap = faMap;

  selectedIndex = 0;

  @Input() items: string[];

  constructor() { }

  ngOnInit(): void {
  }

  setItem(index: number): void {
    this.selectedIndex = index;
  }
}
