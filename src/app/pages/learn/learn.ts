import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonText } from '../../components/text-button/button-text';
import { Card } from '../../components/card/card';
import { Dropdown } from '../../components/dropdown/dropdown';
import { CATEGORIES } from '../../constants/options';

interface Options {
  name: string;
  code: string;
}

@Component({
  selector: 'app-learn',
  imports: [ButtonText, Card, Dropdown, FormsModule, SelectModule],
  templateUrl: './learn.html',
  styleUrl: './learn.scss',
})
export class Learn {
  selectedLanguage = '';
  selectedCategory = '';
  buttonOptions = [{ code: 'flutter', name: 'Flutter' }];
  categoryOptions: Options[] = CATEGORIES;

  onSelectLanguage(event: string) {
    this.selectedLanguage = event;
  }

  onSelectedCategory(event: string) {
    this.selectedCategory = event;
  }
}
