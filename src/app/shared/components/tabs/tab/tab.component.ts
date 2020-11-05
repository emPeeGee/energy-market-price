import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
}
