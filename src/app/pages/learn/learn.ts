import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Button } from '../../components/button/button';
import { Card } from '../../components/card/card';
import { Dropdown } from '../../components/dropdown/dropdown';
import { CATEGORIES, SUBCATEGORIES } from '../../constants/options';
import { COMMANDS } from '../../constants/commands';
import { FRONTEND_STACK } from '../../constants/languages/frontend';

interface Options {
  name: string;
  code: string;
}

@Component({
  selector: 'app-learn',
  imports: [Button, Card, Dropdown, FormsModule, SelectModule],
  templateUrl: './learn.html',
  styleUrl: './learn.scss',
})
export class Learn {
  selectedLanguage = signal<string>('');
  selectedFramework = signal<string>('');
  selectedCategory = signal<string>('');
  selectedSubCategory = signal<string>('');

  cardTitle = signal<string>('');
  cardSubTitle = signal<string>('');
  cardBody = signal<string>('');

  languageOptions = signal(
    FRONTEND_STACK.map((language) => ({ code: language.id, name: language.name })),
  );
  categoryOptions = CATEGORIES;
  frameworkOptions = computed<Options[]>(() => {
    const selectedLanguage = this.selectedLanguage();
    const languages = FRONTEND_STACK.find((language) => language.name === selectedLanguage);
    return (
      languages?.frameworks?.map((framework) => ({
        code: framework.id,
        name: framework.name,
      })) || []
    );
  });

  subCategoryOptions = computed(() => {
    const category = this.selectedCategory();
    return SUBCATEGORIES[category.toLowerCase() as keyof typeof SUBCATEGORIES] ?? [];
  });

  onSelectLanguage(event: string) {
    this.selectedLanguage.set(event);
    this.selectedCategory.set('');
    this.selectedSubCategory.set('');
  }

  onSelectFramework(event: string) {
    this.selectedFramework.set(event);
  }

  onSelectedCategory(event: string) {
    this.selectedCategory.set(event);
  }

  onSelectedSubCategory(event: string) {
    this.selectedSubCategory.set(event);

    const subCategoryKey = this.selectedSubCategory().toLowerCase() as keyof typeof COMMANDS;
    const frameworkKey =
      this.selectedFramework().toLowerCase() as keyof (typeof COMMANDS)[typeof subCategoryKey];

    this.cardTitle.set(this.selectedSubCategory());
    this.cardSubTitle.set('');
    this.cardBody.set(COMMANDS[subCategoryKey][frameworkKey]);
  }
}
