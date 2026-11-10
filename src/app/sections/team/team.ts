import { Component } from '@angular/core';
import { EQUIPE } from '../../salon-info';

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  host: { class: 'd-block' },
})
export class Team {
  equipe = EQUIPE;
}
