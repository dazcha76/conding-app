import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TopicItems } from '../../models/models';

@Component({
  selector: 'app-card',
  imports: [ButtonModule, CardModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  cardData = input<TopicItems>({
    id: 'loose-equal',
    link: '',
    name: 'Equality',
    code: '',
    example: '',
    output: '',
    bullets: ['Dart does not support type coercion'],
  });

  openLink(url: string) {
    console.log(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
