import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabComponent } from './components/tabs/tab/tab.component';
import { TabManagerComponent } from './components/tabs/tab-manager/tab-manager.component';

@NgModule({
  declarations: [HeaderComponent, TabComponent, TabManagerComponent],
  exports: [
    HeaderComponent,
    TabManagerComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
