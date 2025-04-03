import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorsService } from '../services/authors/authors.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private readonly authorService: AuthorsService) {}

  async ngOnInit(): Promise<void> {
    const author = await this.authorService
      .getAuthor()
      .subscribe((value) => console.log(value));
  }
}
