import { TransactionHistoryService } from './../transaction-history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  transactions: any;

  constructor(private service: TransactionHistoryService) { }

  ngOnInit(): void {
    this.transactions = this.service.postTransactions().subscribe(data => this.transactions = data);
  }

}
