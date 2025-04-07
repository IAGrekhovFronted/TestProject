import { Component } from '@angular/core';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@Component({
  selector: 'app-root',
  imports: [CustomButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'story';
}
