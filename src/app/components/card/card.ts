import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CategoryItems } from '../../models/models';

@Component({
  selector: 'app-card',
  imports: [ButtonModule, CardModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  cardData = input<CategoryItems>({
    id: 'loose-equal',
    link: '',
    name: 'Equality',
    code: '',
    example: '',
    output: '',
    bullets: ['Dart does not support type coercion'],
  });
}
