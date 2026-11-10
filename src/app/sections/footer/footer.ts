import { Component } from '@angular/core';
import { SALON, TEL_HREF } from '../../salon-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  host: { class: 'd-block' },
})
export class Footer {
  salon = SALON;
  telHref = TEL_HREF;

  allerAuContact(event: Event): void {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
