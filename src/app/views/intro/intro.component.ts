import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { COLORS } from '../../shared/constants/colors.constants';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  COLORS = COLORS;
  faAngleRight = faAngleRight;

  menuItems = ['HOME', 'SOLUTIONS', 'TUTORIAL', 'ABOUT US', 'LIBRARY', 'NEWS', 'CONTACT US'];

  constructor() { }

  ngOnInit(): void {
  }

}
