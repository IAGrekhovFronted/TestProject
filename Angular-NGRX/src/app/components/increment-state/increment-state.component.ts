import { Component, OnInit } from '@angular/core';
import { IncrementGroupAction } from '../../state/counter/count.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-increment-state',
  imports: [],
  templateUrl: './increment-state.component.html',
  styleUrl: './increment-state.component.css',
  standalone: true,
})
export class IncrementStateComponent implements OnInit {
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
