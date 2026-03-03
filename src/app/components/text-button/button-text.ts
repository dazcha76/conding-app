import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-text',
  imports: [ButtonModule],
  templateUrl: './button-text.html',
  standalone: true,
})
export class ButtonText {
  options = input<any[]>();
  selected: string | undefined = undefined;
  selectedButton = output<string>();

  onSelect(event: string) {
    this.selectedButton.emit(event);
  }
}
