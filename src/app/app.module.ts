import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentPricingComponent } from './current-pricing/current-pricing.component';
import { PriceHistoryComponent } from './price-history/price-history.component';
import appRoutes from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    TransactionHistoryComponent,
    CurrentPricingComponent,
    PriceHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
