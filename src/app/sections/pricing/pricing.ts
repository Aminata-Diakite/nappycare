import { Component } from '@angular/core';
import { OFFRES } from '../../salon-info';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.html',
  host: { class: 'd-block' },
})
export class Pricing {
  offres = OFFRES;
}
