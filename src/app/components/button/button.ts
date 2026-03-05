import { Component, effect, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.html',
})
export class Button {
  options = input<any[]>();
  selectedButton = output<string>();

  onSelect(language: string) {
    this.selectedButton.emit(language);
  }
}
