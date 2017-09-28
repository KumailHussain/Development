import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing';
import {AboutComponent} from './Dashboard/about/about.component';
import {HomeComponent} from './Dashboard/home/home.component';
import {MenuComponent} from './Dashboard/menu/menu.component';
import {NewsComponent} from './Dashboard/news/news.component';
import {HeaderComponent} from './Global/components/header/header.component';
import {ContactComponent} from './Dashboard/contact/contact.component';
import {GalleryComponent} from './Dashboard/gallery/gallery.component';
import {BrachComponent} from './Dashboard/branch/branch.component';
import {ShopComponent} from "./Dashboard/shop/shop.component";
import {SingleShopComponent} from "./Dashboard/singe_shop/singe_shop.component";
import {CartComponent} from "./Dashboard/cart/cart.component";
import {CheckoutComponent} from "./Dashboard/checkout/checkout.component";
import {BlogVersion2Component} from "./Dashboard/bog_v2/blog_v2.component";
import {GalleryMansoryComponent} from "./Dashboard/gallery_masonry/gallery_masonry.component";
import {SingleBlogComponent} from "./Dashboard/single_blog/single_blog.component";
import {BlogVersion1Component} from "./Dashboard/blog_v1/blog_v1.component";
import {FooterComponent} from "./Global/components/footer/footer.component";
import {ChefComponent} from "./Dashboard/chef/chef.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    NewsComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    ChefComponent,
    ContactComponent,
    GalleryComponent,
    BrachComponent,
    ShopComponent,
    SingleShopComponent,
    CartComponent,
    GalleryMansoryComponent,
    CheckoutComponent,
    BlogVersion2Component,
    BlogVersion1Component,
    SingleBlogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
