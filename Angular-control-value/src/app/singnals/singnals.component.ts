import {
  Component,
  OnInit,
  signal,
  WritableSignal,
  Signal,
  computed,
  effect,
} from '@angular/core';

@Component({
  selector: 'app-singnals',
  imports: [],
  templateUrl: './singnals.component.html',
  styleUrl: './singnals.component.css',
  standalone: true,
})
export class SingnalsComponent implements OnInit {
  count: WritableSignal<number> = signal<number>(0);
  countComputed: Signal<number> = computed(() => {
    console.log('computed');
    return this.count() * 2;
  });

  constructor() {
    effect(() => {
      console.log(
        `The current count is: ${this.count()}. The current countComputed is: ${this.countComputed()}`
      );
    });
  }

  ngOnInit(): void {
    console.log('===', this.count);
    console.log('===WritableSignal', this.count());
    console.log('===Signal', this.countComputed());
    this.count.set(this.count() + 1);
    console.log('===WritableSignal', this.count());
    console.log('===Signal', this.countComputed());
    this.count.update((value) => value + 2);
    console.log('===WritableSignal', this.count());
    console.log('===Signal', this.countComputed());
  }

  increment() {
    this.count.update((value) => {
      console.log('increment');
      return value + 2;
    });
  }
}
