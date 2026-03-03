import { Component, input, output, signal } from '@angular/core';
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
  selectedOption = output<string>();

  // NOTE TO SELF:
  // Two-Way Binding Collision: When you use [(ngModel)]="selectedOption", Angular tries to write the selected value from the PrimeNG dropdown directly into your selectedOption variable.
  // Overwriting: It replaces your OutputEmitterRef (which has the .emit() method) with a plain string (the value from the dropdown).
  // The Error: When onSelect runs, this.selectedOption is now a string, and strings do not have an .emit() method.
  selectedItem = signal<string | null>(null);

  onSelect(event: SelectChangeEvent) {
    this.selectedOption.emit(event.value.name);
  }
}
