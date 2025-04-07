import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-custom-button',
  imports: [NgClass],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
  standalone: true,
})
export class CustomButtonComponent {
  @Input() label: string = 'Default';
  @Input() isPrimary: boolean = false;
}
