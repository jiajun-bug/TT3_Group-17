import { CurrentPricingComponent } from './current-pricing/current-pricing.component';
import { PriceHistoryComponent } from './price-history/price-history.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'price',
        component: CurrentPricingComponent
    },
    {
        path: 'historical',
        component: PriceHistoryComponent
    },
    {
        path: 'pasttransactions',
        component: TransactionHistoryComponent
    }
];
export default appRoutes;