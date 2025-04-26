import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SingnalsComponent } from './singnals/singnals.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SingnalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'Angular-control-value';
}
