import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectChangeEvent, SelectModule } from 'primeng/select';

interface Options {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.html',
  imports: [SelectModule, FormsModule],
  standalone: true,
})
export class Dropdown {
  options = input<Options[]>([]);
  selectedOption: Options | undefined = undefined;
  selected = output<string>();

  onSelect(event: SelectChangeEvent) {
    this.selected.emit(event.value.name);
  }
}
