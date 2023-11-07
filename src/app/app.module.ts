import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ClientComponent } from './components/client/client.component';
import { FormsModule } from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import { FooterComponent } from './components/footer/footer.component'; // Asegúrate de que la ruta sea correcta.



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProductComponent,
    CartComponent,
    ClientComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
