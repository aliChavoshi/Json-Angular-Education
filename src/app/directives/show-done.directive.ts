import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Task } from '../models/task';

@Directive({
  selector: '[appShowDone]',
})
export class ShowDoneDirective implements OnChanges {
  @Input('appShowDone') task!: Task;
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') OnMouseEnter() {
    if (this.task.done) {
      alert('this is done');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
