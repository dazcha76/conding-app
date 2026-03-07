import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectChangeEvent, SelectModule } from 'primeng/select';

interface Options {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dropdown',
  imports: [SelectModule, FormsModule],
  templateUrl: './dropdown.html',
})
export class Dropdown {
  options = input<Options[] | null>([]);
  placeholder = input<string>('');
  selectedOption = output<string>();

  onSelect(event: SelectChangeEvent) {
    this.selectedOption.emit(event.value.code);
  }
}
