import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-label',
  imports: [],
  templateUrl: './custom-label.component.html',
  styleUrl: './custom-label.component.css',
  standalone: true,
})
export class CustomLabelComponent {
  @Input() label: string = 'Default';
}
