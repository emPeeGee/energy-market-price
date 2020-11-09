import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { AnimatedComponent, Animations } from '../../shared/animation/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ Animations.onAppearAnimation ]
})
export class AboutComponent extends AnimatedComponent implements OnInit {

  faPlay = faPlay;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
