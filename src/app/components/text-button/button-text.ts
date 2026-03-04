import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-text',
  imports: [ButtonModule],
  templateUrl: './button-text.html',
})
export class ButtonText {
  options = input<any[]>();
  selectedButton = output<string>();

  onSelect(language: string) {
    this.selectedButton.emit(language);
  }
}
