import { CurrentPricingComponent } from './current-pricing/current-pricing.component';
import { PriceHistoryComponent } from './price-history/price-history.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'currentPrice',
        component: CurrentPricingComponent
    },
    {
        path: 'priceHistory',
        component: PriceHistoryComponent
    },
    {
        path: 'transactionHistory',
        component: TransactionHistoryComponent
    }
];
export default appRoutes;