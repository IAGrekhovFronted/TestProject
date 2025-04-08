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
  /**
   * Надпись на кнопке
   */
  @Input() label: string = 'Default';
  /**
   * Цвет кнопки
   */
  @Input() isPrimary: boolean = false;
}
