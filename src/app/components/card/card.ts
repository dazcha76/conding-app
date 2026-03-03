import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  imports: [ButtonModule, CardModule],
  templateUrl: './card.html',
  standalone: true,
})
export class Card {}
