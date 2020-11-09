import { Component } from '@angular/core';
import { AnimatedComponent, Animations } from '../../shared/animation/animations';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  animations: [ Animations.onAppearAnimation ]
})
export class PartnersComponent extends AnimatedComponent {

  slides = [
    {
      logos: [
        'assets/images/logos/gazprom.png',
        'assets/images/logos/vodafone.png',
        'assets/images/logos/toyota.png',
      ],
      images: [
        'assets/images/backgrounds/background_gas_pipeline.jpg',
        'assets/images/backgrounds/background_pipelines.jpg',
        'assets/images/backgrounds/background_wind_turbines.jpg',
      ],
      elems: 3
    },
    {
      logos: [
        'assets/images/logos/toyota.png',
        'assets/images/logos/gazprom.png',
        'assets/images/logos/vodafone.png',
      ],
      images: [
        'assets/images/backgrounds/background_wind_turbines.jpg',
        'assets/images/backgrounds/background_pipelines.jpg',
        'assets/images/backgrounds/background_gas_pipeline.jpg',
      ],
      elems: 3,
    },
    {
      logos: [
        'assets/images/logos/vodafone.png',
        'assets/images/logos/toyota.png',
        'assets/images/logos/gazprom.png',
      ],
      images: [
        'assets/images/backgrounds/background_wind_turbines.jpg',
        'assets/images/backgrounds/background_gas_pipeline.jpg',
        'assets/images/backgrounds/background_pipelines.jpg',
      ],
      elems: 3,
    },

  ];

  constructor() {
    super();
  }

}
