import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { IntroComponent } from './views/intro/intro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SolutionComponent } from './views/solution/solution.component';
import { AboutComponent } from './views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SolutionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
