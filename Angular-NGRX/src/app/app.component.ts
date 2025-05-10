import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaveSelectComponent } from './components/save-select/save-select.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SaveSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {}
