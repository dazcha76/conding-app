import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-text',
  imports: [ButtonModule],
  templateUrl: './button-text.html',
  standalone: true,
})
export class ButtonText {}
