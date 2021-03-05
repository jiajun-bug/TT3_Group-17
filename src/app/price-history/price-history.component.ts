import { PriceHistoryService } from './../price-history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.css']
})
export class PriceHistoryComponent implements OnInit {

  priceHistory: any;

  constructor(private service: PriceHistoryService) { }

  ngOnInit(): void {
    this.priceHistory = this.service.postPriceHistory().subscribe(data => this.priceHistory = data);
  }


}
