import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncrementGroupAction, DecrementAction } from './state/count.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    console.log('OnInit');
    this.store.dispatch(IncrementGroupAction.incrementEvent({ count: 5 }));
  }

  ngAfterViewInit() {
    this.store.dispatch(IncrementGroupAction.incrementEvent({ count: 10 }));
  }

  increment() {
    this.store.dispatch(IncrementGroupAction.incrementEvent({ count: 1 }));
  }
}
