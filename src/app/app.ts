import { Component, signal } from '@angular/core';
import { Learn } from './pages/learn/learn';

@Component({
  selector: 'app-root',
  imports: [Learn],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('coding-app');
}
