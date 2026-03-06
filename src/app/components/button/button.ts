import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgrammingLanguage } from '../../constants';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.html',
})
export class Button {
  options = input<any[]>();
  selectedButton = output<ProgrammingLanguage>();

  onSelect(language: ProgrammingLanguage) {
    this.selectedButton.emit(language);
  }
}
