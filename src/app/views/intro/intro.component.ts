import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { COLORS } from '../../shared/constants/colors.constants';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  COLORS = COLORS;
  faAngleRight = faAngleRight;

  isMenuVisible = false;

  menuItems = ['HOME', 'SOLUTIONS', 'TUTORIAL', 'ABOUT US', 'LIBRARY', 'NEWS', 'CONTACT US'];

  constructor() { }

  onMenuIsVisible(isVisible: boolean): void {
    this.isMenuVisible = isVisible;
    console.log(this.isMenuVisible);
  }
}
