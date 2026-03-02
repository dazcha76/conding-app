import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-learn',
  imports: [MatSelectModule],
  templateUrl: './learn.html',
  styleUrl: './learn.scss',
})
export class Learn {
  frameworks = [{ value: 'flutter', viewValue: 'Flutter' }];
  categories = [
    { value: 'requirements', viewValue: 'Requirements' },
    { value: 'commands', viewValue: 'Commands' },
    { value: 'functions', viewValue: 'Functions' },
    { value: 'variables', viewValue: 'Variables' },
  ];
}
