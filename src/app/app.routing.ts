import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AboutComponent} from './Dashboard/about/about.component';
import {HomeComponent} from './Dashboard/home/home.component';
import {MenuComponent} from './Dashboard/menu/menu.component';
import {NewsComponent} from './Dashboard/news/news.component';
import {ContactComponent} from './Dashboard/contact/contact.component';
import {GalleryComponent} from './Dashboard/gallery/gallery.component';
import {GalleryMansoryComponent} from './Dashboard/gallery_masonry/gallery_masonry.component';
import {BrachComponent} from './Dashboard/branch/branch.component';
import {ChefComponent} from './Dashboard/chef/chef.component';
import {ShopComponent} from "./Dashboard/shop/shop.component";
import {SingleShopComponent} from "./Dashboard/singe_shop/singe_shop.component";
import {CartComponent} from "./Dashboard/cart/cart.component";
import {CheckoutComponent} from "./Dashboard/checkout/checkout.component";
import {BlogVersion2Component} from "./Dashboard/bog_v2/blog_v2.component";
import {SingleBlogComponent} from "./Dashboard/single_blog/single_blog.component";
import {BlogVersion1Component} from "./Dashboard/blog_v1/blog_v1.component";

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Gallery', component: GalleryComponent},
  { path: 'Gallery-Mansory', component: GalleryMansoryComponent},
  { path: 'Branch', component: BrachComponent},
  { path: 'Chef', component: ChefComponent},
  { path: 'Shop', component: ShopComponent},
  { path: 'Single-Shop', component: SingleShopComponent},
  { path: 'Cart', component: CartComponent},
  { path: 'Checkout', component: CheckoutComponent},
  { path: 'blog2', component: BlogVersion2Component},
  { path: 'blog1', component: BlogVersion1Component},
  { path: 'single_blog', component: SingleBlogComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
