import { Component } from '@angular/core';
import { SALON } from '../../salon-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  host: { class: 'd-block' },
})
export class Header {
  salon = SALON;
}
