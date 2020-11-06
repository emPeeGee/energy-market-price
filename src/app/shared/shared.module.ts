import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabComponent } from './components/tabs/tab/tab.component';
import { TabManagerComponent } from './components/tabs/tab-manager/tab-manager.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnergyDataItemComponent } from './components/energy-data-item/energy-data-item.component';

@NgModule({
  declarations: [HeaderComponent, TabComponent, TabManagerComponent, CarouselComponent, EnergyDataItemComponent],
  exports: [
    HeaderComponent,
    TabManagerComponent,
    TabComponent,
    CarouselComponent,
    EnergyDataItemComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ]
})
export class SharedModule { }
