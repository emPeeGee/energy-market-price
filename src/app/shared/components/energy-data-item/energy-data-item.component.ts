import { Component, Input, OnInit } from '@angular/core';
import { EnergyData } from '../../../core/models/energy-data.model';

@Component({
  selector: 'app-energy-data-item',
  templateUrl: './energy-data-item.component.html',
  styleUrls: ['./energy-data-item.component.scss']
})
export class EnergyDataItemComponent implements OnInit {

  @Input() data: EnergyData;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  getPercentage(percentage: number): string {
    if (percentage > 0) {
      return `+${percentage}%`;
    }

    return `-${percentage}%`;
  }

}
