import { Component, OnInit } from '@angular/core';

import { Animations, AnimatedComponent } from '../../shared/animation/animations';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
  animations: [
    Animations.onAppearAnimation
  ]
})
export class SolutionComponent extends AnimatedComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
