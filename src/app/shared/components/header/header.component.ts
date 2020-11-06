import {Component, Input, OnInit} from '@angular/core';
import { faUser, faMap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
