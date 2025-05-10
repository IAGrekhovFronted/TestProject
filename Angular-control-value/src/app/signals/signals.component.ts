import {
  Component,
  OnInit,
  OnDestroy,
  WritableSignal,
  signal,
  effect,
} from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signals',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
})
export class SignalsComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  valueInput: WritableSignal<string> = signal('');
  ngValue: string = '';
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  private subscriptions: Subscription[] = [];

  constructor() {
    effect(() => {
      console.log('Изменено:', this.valueInput());
    });
  }

  ngOnInit(): void {
    const formSubscribation = this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });

    const passwordSubscribation = this.form
      .get('password')
      ?.valueChanges.subscribe((value) => console.log(value));

    this.subscriptions.push(formSubscribation);
    if (passwordSubscribation) this.subscriptions.push(passwordSubscribation);
  }

  infocusChangeInput(event: Event) {
    const value: string = (event.target as HTMLInputElement).value;
    console.log(value);
  }
  reactivChangeInput(event: Event) {
    const value: string = (event.target as HTMLInputElement).value;
    console.log(value);
  }
  onModelChange(newValue: string) {
    console.log(newValue);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
