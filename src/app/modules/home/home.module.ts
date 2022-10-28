import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferCarouselComponent } from './components/offer-carousel/offer-carousel.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    OfferCarouselComponent,
    ProductsCarouselComponent,
    LoginModalComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
