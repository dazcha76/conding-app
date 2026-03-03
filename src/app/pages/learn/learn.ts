import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonText } from '../../components/text-button/button-text';
import { Card } from '../../components/card/card';
import { Dropdown } from '../../components/dropdown/dropdown';

@Component({
  selector: 'app-learn',
  imports: [ButtonText, Card, Dropdown, FormsModule, SelectModule],
  templateUrl: './learn.html',
  styleUrl: './learn.scss',
})
export class Learn {
  categoryOptions = [
    { code: 'requirements', name: 'Requirements' },
    { code: 'commands', name: 'Commands' },
    { code: 'functions', name: 'Functions' },
    { code: 'variables', name: 'Variables' },
  ];

  buttonOptions = [{ code: 'flutter', name: 'Flutter' }];

  onSelectLanguage(event: Event) {
    console.log('language: ', event);
  }

  onSelectedCategory(event: string) {
    console.log('category: ', event);
  }
}
