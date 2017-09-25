import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing';
import {AboutComponent} from './Dashboard/about/about.component';
import {HomeComponent} from './Dashboard/home/home.component';
import {MenuComponent} from './Dashboard/menu/menu.component';
import {NewsComponent} from './Dashboard/news/news.component';
import {HeaderComponent} from './Global/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    NewsComponent,
    NewsComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
