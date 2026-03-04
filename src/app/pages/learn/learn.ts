import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonText } from '../../components/text-button/button-text';
import { Card } from '../../components/card/card';
import { Dropdown } from '../../components/dropdown/dropdown';
import { CATEGORIES, SUBCATEGORIES } from '../../constants/options';
import { COMMANDS } from '../../constants/commands';

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
  selectedCategory = signal<string>('');
  selectedSubCategory = signal<string>('');

  cardTitle = signal<string>('');
  cardSubTitle = signal<string>('');
  cardBody = signal<string>('');

  languageOptions = [
    { code: 'angular', name: 'Angular' },
    { code: 'flutter', name: 'Flutter' },
  ];
  categoryOptions = CATEGORIES;

  subCategoryOptions = computed(() => {
    const category = this.selectedCategory();
    return SUBCATEGORIES[category.toLowerCase() as keyof typeof SUBCATEGORIES] ?? [];
  });

  onSelectLanguage(event: string) {
    this.selectedLanguage = event;
  }

  onSelectedCategory(event: string) {
    this.selectedCategory.set(event);
  }

  onSelectedSubCategory(event: string) {
    this.selectedSubCategory.set(event);

    const subCategoryKey = this.selectedSubCategory().toLowerCase() as keyof typeof COMMANDS;
    const languageKey =
      this.selectedLanguage.toLowerCase() as keyof (typeof COMMANDS)[typeof subCategoryKey];

    this.cardTitle.set(this.selectedSubCategory());
    this.cardSubTitle.set('');
    this.cardBody.set(COMMANDS[subCategoryKey][languageKey]);
  }
}
