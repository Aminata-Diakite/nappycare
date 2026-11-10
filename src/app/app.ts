import { Component } from '@angular/core';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Promo } from './sections/promo/promo';
import { About } from './sections/about/about';
import { Features } from './sections/features/features';
import { Reservation } from './sections/reservation/reservation';
import { Pricing } from './sections/pricing/pricing';
import { Testimonials } from './sections/testimonials/testimonials';
import { Video } from './sections/video/video';
import { Gallery } from './sections/gallery/gallery';
import { Team } from './sections/team/team';
import { Blog } from './sections/blog/blog';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Promo, About, Features, Reservation, Pricing, Testimonials, Video, Gallery, Team, Blog, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
