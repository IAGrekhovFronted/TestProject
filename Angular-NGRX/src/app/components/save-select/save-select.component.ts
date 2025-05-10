import { Component, WritableSignal, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsernameChangeAction } from '../../state/save-select/save-select.action';
import { selectUsername } from '../../state/save-select/save-select.selector';

@Component({
  selector: 'app-save-select',
  imports: [],
  templateUrl: './save-select.component.html',
  styleUrl: './save-select.component.css',
  standalone: true,
})
export class SaveSelectComponent {
  readonly usernameSignal = this.store.selectSignal(selectUsername);

  constructor(private readonly store: Store) {}

  saveStateInput(event: Event) {
    const username = (event.target as HTMLInputElement).value;
    this.store.dispatch(UsernameChangeAction({ username }));
    console.log(username);
  }

  getStateInput() {
    console.log(this.usernameSignal());
  }
}
