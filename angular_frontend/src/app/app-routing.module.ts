import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FeaturesComponent } from './features/features.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { EventsComponent } from './events/events.component';
import { ShopComponent } from './shop/shop.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  // {path:"home", component:HomeComponent},
  {path:"features", component:FeaturesComponent},
  {path:"blog", component:BlogComponent},
  {path:"portfolio", component:PortfolioComponent},
  // {path:"events", component:EventsComponent},
  {path:"shop", component:ShopComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
