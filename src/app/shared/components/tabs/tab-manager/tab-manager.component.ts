import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-manager',
  templateUrl: './tab-manager.component.html',
  styleUrls: ['./tab-manager.component.scss']
})
export class TabManagerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

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
