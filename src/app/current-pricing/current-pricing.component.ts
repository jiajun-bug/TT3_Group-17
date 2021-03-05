import { CurrentPricingService } from './../current-pricing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-pricing',
  templateUrl: './current-pricing.component.html',
  styleUrls: ['./current-pricing.component.css']
})
export class CurrentPricingComponent implements OnInit {

  currentPrice: any;

  constructor(private service: CurrentPricingService) { }

  ngOnInit(): void {
    this.currentPrice = this.service.postCurrentPrice().subscribe(data => this.currentPrice = data);
  }


}
