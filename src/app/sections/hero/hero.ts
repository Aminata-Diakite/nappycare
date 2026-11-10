import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  host: { class: 'd-block' },
})
export class Hero {

  allerAuContact(event: Event): void {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
