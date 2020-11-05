import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faPlay = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

}
