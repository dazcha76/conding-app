import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Card } from '../../components/card/card';

interface Dropdown {
  code: string;
  name: string;
}

@Component({
  selector: 'app-learn',
  imports: [Card, FormsModule, SelectModule],
  templateUrl: './learn.html',
  styleUrl: './learn.scss',
})
export class Learn {
  frameworks: Dropdown[] = [{ code: 'flutter', name: 'Flutter' }];
  selectedFramework: Dropdown | undefined;

  categories: Dropdown[] = [
    { code: 'requirements', name: 'Requirements' },
    { code: 'commands', name: 'Commands' },
    { code: 'functions', name: 'Functions' },
    { code: 'variables', name: 'Variables' },
  ];
  selectedCategory: Dropdown | undefined;
}
