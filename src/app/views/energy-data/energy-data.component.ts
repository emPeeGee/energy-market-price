import { Component, OnInit } from '@angular/core';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-energy-data',
  templateUrl: './energy-data.component.html',
  styleUrls: ['./energy-data.component.scss']
})
export class EnergyDataComponent implements OnInit {
  faGasPump = faGasPump;

  constructor() { }

  ngOnInit(): void {
  }

}
