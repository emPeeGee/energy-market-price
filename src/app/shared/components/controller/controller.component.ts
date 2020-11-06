import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent {

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  @Input() currentItem: number;

  @Output() previousClick: EventEmitter<any> = new EventEmitter();
  @Output() nextClick: EventEmitter<any> = new EventEmitter();

}
