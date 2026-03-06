import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Button } from '../../components/button/button';
import { Card } from '../../components/card/card';
import { Dropdown } from '../../components/dropdown/dropdown';
import { TOPICS } from '../../constants/options';
import { FRONTEND_STACK } from '../../constants/languages/frontend';
import { CategoryItems, Options } from '../../models/models';
import { DART_OPERATORS } from '../../constants/dart/operators';

@Component({
  selector: 'app-learn',
  imports: [Button, Card, Dropdown, FormsModule, SelectModule],
  templateUrl: './learn.html',
  styleUrl: './learn.scss',
})
export class Learn {
  selectedLanguage = signal<string>('');
  selectedFramework = signal<string>('');
  selectedTopic = signal<string>('');
  selectedSubtopic = signal<string>('');
  selectedItem = signal<string>('');

  cardData = signal<CategoryItems>({
    id: 'loose-equal',
    link: '',
    name: 'Equality',
    code: '',
    example: '',
    output: '',
    bullets: ['Dart does not support type coercion'],
  });

  languageOptions = signal(
    FRONTEND_STACK.map((language) => ({ code: language.id, name: language.name })),
  );

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

  topicOptions = TOPICS;

  subtopicOptions = computed(() => {
    const keys = Object.keys(DART_OPERATORS) as Array<keyof typeof DART_OPERATORS>;

    return (
      keys.map((key) => ({
        code: key.toLowerCase(),
        name: DART_OPERATORS[key].title,
      })) || []
    );
  });

  itemOptions = computed(() => {
    const subtopic = this.selectedSubtopic();

    // const itemsToDisplay = Object.values(DART_OPERATORS[subtopic].items).filter(
    //   (item) => item.code,
    // );

    const keys = Object.keys(DART_OPERATORS[subtopic].items) as Array<keyof typeof DART_OPERATORS>;

    return (
      keys.map((key) => ({
        code: key,
        name: DART_OPERATORS[subtopic].items[key].name,
      })) || []
    );
  });

  onSelectLanguage(event: string) {
    this.selectedLanguage.set(event);
    this.selectedTopic.set('');
    this.selectedSubtopic.set('');
  }

  onSelectFramework(event: string) {
    this.selectedFramework.set(event);
  }

  onSelectTopic(event: string) {
    this.selectedTopic.set(event);
  }

  onSelectSubtopic(event: string) {
    this.selectedSubtopic.set(event);
  }

  onSelectItem(event: string) {
    this.selectedItem.set(event);
    const item = DART_OPERATORS[this.selectedSubtopic()].items[this.selectedItem()];

    this.cardData.set(item);
  }
}
