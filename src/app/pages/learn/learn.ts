import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Button } from '../../components/button/button';
import { Card } from '../../components/card/card';
import { Dropdown } from '../../components/dropdown/dropdown';
import { TOPICS } from '../../constants/options';
import { FRONTEND_STACK } from '../../constants/languages/frontend';
import { TopicItems, Options } from '../../models/models';
import { LANGUAGE_DATA, ProgrammingLanguage } from '../../constants';

@Component({
  selector: 'app-learn',
  imports: [Button, Card, Dropdown, FormsModule, SelectModule],
  templateUrl: './learn.html',
  styleUrl: './learn.scss',
})
export class Learn {
  selectedLanguage = signal<ProgrammingLanguage | null>(null);
  selectedFramework = signal<string>('');
  selectedTopic = signal<string>('');
  selectedSubTopic = signal<string>('');
  selectedItem = signal<string>('');

  cardData = signal<TopicItems>({
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

  subTopicOptions = computed(() => {
    const selectedLanguage = this.selectedLanguage();
    const selectedTopic = this.selectedTopic();
    if (!selectedLanguage) return null;

    const languageData = LANGUAGE_DATA[selectedLanguage].operators;

    const keys = Object.keys(languageData);

    return (
      keys.map((key) => ({
        code: key.toLowerCase(),
        name: languageData[key].title,
      })) || []
    );
  });

  itemOptions = computed(() => {
    const subTopic = this.selectedSubTopic();
    console.log('selectedTopic', this.selectedTopic());

    // const itemsToDisplay = Object.values(DART_OPERATORS[subTopic].items).filter(
    //   (item) => item.code,
    // );
    const selectedLanguage = this.selectedLanguage();
    if (!selectedLanguage) return null;

    const keys = Object.keys(LANGUAGE_DATA[selectedLanguage].operators[subTopic].items);

    return (
      keys.map((key) => ({
        code: key,
        name: LANGUAGE_DATA[selectedLanguage].operators[subTopic].items[key].name,
      })) || []
    );
  });

  onSelectLanguage(event: ProgrammingLanguage) {
    this.selectedLanguage.set(event);
    this.selectedTopic.set('');
    this.selectedSubTopic.set('');
  }

  onSelectFramework(event: string) {
    this.selectedFramework.set(event);
  }

  onSelectTopic(event: string) {
    this.selectedTopic.set(event);
  }

  onSelectSubTopic(event: string) {
    this.selectedSubTopic.set(event);
  }

  onSelectItem(event: string): void {
    this.selectedItem.set(event);
    const selectedLanguage = this.selectedLanguage();
    const subTopic = this.selectedSubTopic();
    if (!selectedLanguage || !subTopic) return;

    const item = LANGUAGE_DATA[selectedLanguage].operators[subTopic].items[this.selectedItem()];

    this.cardData.set(item);
  }
}
