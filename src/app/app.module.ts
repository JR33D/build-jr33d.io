import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChronologyModule } from 'ngx-chronology';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSelectionComponent } from './nav-selection/nav-selection.component';
import { NavOptionComponent } from './nav-option/nav-option.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
   declarations: [AppComponent, NavigationComponent, NavSelectionComponent, NavOptionComponent, TimelineComponent],
   imports: [BrowserModule, AppRoutingModule, NgxChronologyModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
