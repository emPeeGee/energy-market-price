import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  slides = [
    {
      logos: [
        'assets/images/gazprom.png',
        'assets/images/vodafone.png',
        'assets/images/toyota.png',
      ],
      images: [
        'assets/images/background_gas_pipeline.jpg',
        'assets/images/background_pipelines.jpg',
        'assets/images/background_wind_turbines.jpg',
      ],
      elems: 3
    },
    {
      logos: [
        'assets/images/gazprom.png',
        'assets/images/toyota.png',
        'assets/images/vodafone.png',
      ],
      images: [
        'assets/images/background_gas_pipeline.jpg',
        'assets/images/background_wind_turbines.jpg',
        'assets/images/background_pipelines.jpg',
      ],
      elems: 3,
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
