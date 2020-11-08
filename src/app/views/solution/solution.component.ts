import {AfterViewInit, Component, OnInit} from '@angular/core';

import { Animations, AnimatedComponent } from '../../shared/animation/animations';
import { Solution } from '../../core/models/solution.model';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
  animations: [
    Animations.onAppearAnimation
  ]
})
export class SolutionComponent extends AnimatedComponent {

  solutions: Solution[] = [
    {
      title: 'INDUSTRIAL & COMMERCIAL',
      images: [
        'assets/images/backgrounds/blue_image1.jpg',
        'assets/images/backgrounds/blue_image2.jpg',
        'assets/images/backgrounds/blue_image3.jpg',
        'assets/images/backgrounds/blue_image1.jpg',
        'assets/images/backgrounds/blue_image3.jpg',
        'assets/images/backgrounds/blue_image1.jpg',
        'assets/images/backgrounds/blue_image4.jpg',
      ]
    },
    {
      title: 'ENERGY CONSULTANTS',
      images: [
        'assets/images/backgrounds/blue_image4.jpg',
        'assets/images/backgrounds/blue_image3.jpg',
        'assets/images/backgrounds/blue_image2.jpg',
        'assets/images/backgrounds/blue_image1.jpg',
        'assets/images/backgrounds/blue_image2.jpg',
        'assets/images/backgrounds/blue_image1.jpg',
        'assets/images/backgrounds/blue_image4.jpg',
      ]
    },
    {
      title: 'ENERGY SUPPLIERS',
      images: [
        'assets/images/backgrounds/blue_image1.jpg',
        'assets/images/backgrounds/blue_image3.jpg',
        'assets/images/backgrounds/blue_image2.jpg',
        'assets/images/backgrounds/blue_image3.jpg',
        'assets/images/backgrounds/blue_image4.jpg',
        'assets/images/backgrounds/blue_image1.jpg',
        'assets/images/backgrounds/blue_image2.jpg',
      ]
    }
  ];

  constructor() {
    super();
  }
}
