import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  items: number[];

  @Input() currentItem: number;
  @Input() totalItems: number;

  @Output() previousClick: EventEmitter<any> = new EventEmitter();
  @Output() nextClick: EventEmitter<any> = new EventEmitter();
  @Output() tabClick: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.items = Array.from(Array(this.totalItems).keys());
  }

}
