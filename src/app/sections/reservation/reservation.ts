import { Component } from '@angular/core';
import { SALON, TEL_HREF, waHref } from '../../salon-info';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.html',
  host: { class: 'd-block' },
})
export class Reservation {
  salon = SALON;
  telHref = TEL_HREF;
  waHref = waHref('Bonjour, je souhaite prendre rendez-vous.');
}
