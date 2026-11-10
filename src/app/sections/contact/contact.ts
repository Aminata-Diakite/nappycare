import { Component, signal } from '@angular/core';
import { SALON, TEL_HREF, waHref } from '../../salon-info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  host: { class: 'd-block' },
})
export class Contact {
  salon = SALON;
  telHref = TEL_HREF;
  envoye = signal(false);

  envoyer(event: Event, nom: string, email: string, tel: string, prestation: string, message: string): void {
    event.preventDefault();
    const texte =
      `Bonjour ${SALON.nom}, je suis ${nom}.\n` +
      `Téléphone : ${tel}\nEmail : ${email}\n` +
      `Prestation souhaitée : ${prestation}\n` +
      `Message : ${message}`;
    window.open(waHref(texte), '_blank');
    this.envoye.set(true);
  }
}
