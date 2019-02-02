import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductService } from './products/product/product.service';
import { ButtonComponent } from './button/button.component';

import { HighlightDirective } from './highlight.directive';
import { ShortenPipe } from './shorten.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
    NavbarComponent,
    ButtonComponent,
    HighlightDirective,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
