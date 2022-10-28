import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferCarouselComponent } from './components/offer-carousel/offer-carousel.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';



@NgModule({
  declarations: [
    OfferCarouselComponent,
    ProductsCarouselComponent,
    LoginModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
