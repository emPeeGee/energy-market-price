import { Component } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { COLORS } from '../../constants/colors.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  COLORS = COLORS;

  faAngleRight = faAngleRight;

  constructor() { }

}
