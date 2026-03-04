import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  imports: [ButtonModule, CardModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  cardImage = input<string>('');
  cardTitle = input<string>('Card Title');
  cardSubtitle = input<string>('Card Subtitle');
  cardBody =
    input<string>(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
      repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
      ratione quam perferendis esse, cupiditate neque quas!`);
  showFooter = false;
}
