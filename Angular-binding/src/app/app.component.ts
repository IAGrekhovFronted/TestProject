import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title: string = 'Initial value';

  updateInitialValue() {
    this.title = 'Updated value';
  }

  changeInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.title = value;
    console.log(value);
  }

  changeForm(event: Event) {
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const values: Record<string, any> = {};
    formData.forEach((value, key) => {
      values[key] = value;
    });

    console.log(values);
  }

  formGrouo = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    this.formGrouo.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
