import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/ex1', pathMatch: 'full' },
  { path: 'ex1', component: BonjourComponent },
  { path: 'ex2', component: CalculatorComponent },
  { path: 'transaction', component: TransactionsComponent },
  { path: 'detail/:id', component: TransactionDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
