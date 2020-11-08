import { Component, OnInit } from '@angular/core';
import { faGasPump, faCoins, faLeaf, faBolt, faFire, faIndustry } from '@fortawesome/free-solid-svg-icons';
import { EnergyData } from '../../core/models/energy-data.model';
import {AnimatedComponent, Animations} from '../../shared/animation/animations';

@Component({
  selector: 'app-energy-data',
  templateUrl: './energy-data.component.html',
  styleUrls: ['./energy-data.component.scss'],
  animations: [ Animations.onAppearAnimation ]
})
export class EnergyDataComponent extends AnimatedComponent implements OnInit {
  energyData: EnergyData[];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.energyData = [
      { title: 'Crude Oil', icon: faGasPump, percentage: 1.49, price: '68.51 USD/bbl', info: 'WTI Crude' },
      { title: 'Natural Gas', icon: faFire, percentage: 3.43, price: '68.51 Eur/MWh', info: 'NBP Y+1' },
      { title: 'Power', icon: faBolt, percentage: -5.77, price: '41.25 EUR/MWh', info: 'Belgium Power Y+1' },
      { title: 'Coal', icon: faIndustry, percentage: 1.49, price: '68.51 USM/tonne', info: 'Coal ARA CIF Q+1' },
      { title: 'Economics', icon: faCoins, percentage: -1.85, price: '47.10 million bbl', info: 'EIA Crude Stock' },
      { title: 'Green', icon: faLeaf, percentage: 1.43, price: '4.95 EUR/tonne', info: 'CO2 EUA Dec20' },
    ];
  }
}
