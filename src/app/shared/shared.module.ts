import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { TabManagerComponent } from './components/tabs/tab-manager/tab-manager.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EnergyDataItemComponent } from './components/energy-data-item/energy-data-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SliderComponent } from './components/slider/slider.component';
import { ControllerComponent } from './components/controller/controller.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabComponent,
    TabManagerComponent,
    CarouselComponent,
    EnergyDataItemComponent,
    FooterComponent,
    HighlightDirective,
    SliderComponent,
    SliderComponent,
    ControllerComponent
  ],
  exports: [
    HeaderComponent,
    TabManagerComponent,
    TabComponent,
    CarouselComponent,
    EnergyDataItemComponent,
    FooterComponent,
    SliderComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ]
})
export class SharedModule { }
