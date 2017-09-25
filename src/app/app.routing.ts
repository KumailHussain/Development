import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AboutComponent} from './Dashboard/about/about.component';
import {HomeComponent} from './Dashboard/home/home.component';
import {MenuComponent} from './Dashboard/menu/menu.component';
import {NewsComponent} from './Dashboard/news/news.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'News', component: NewsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
