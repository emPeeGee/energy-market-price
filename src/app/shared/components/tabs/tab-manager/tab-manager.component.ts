import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { TabComponent } from '../tab/tab.component';
import { COLORS } from '../../../constants/colors.constants';

@Component({
  selector: 'app-tab-manager',
  templateUrl: './tab-manager.component.html',
  styleUrls: ['./tab-manager.component.scss'],
  animations: [
    trigger('aaaa', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('1000ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
        style({ opacity: '1' })
      ])
    ])
  ]
})
export class TabManagerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  COLORS = COLORS;

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent): void {
    this.tabs.toArray().forEach(thisTab => thisTab.active = false);
    tab.active = true;
  }

}
