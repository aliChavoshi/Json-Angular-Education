import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { PriorityPipe } from '../../pipes/priority.pipe';
import { PriorityColorDirective } from '../../directives/priority-color.directive';
import { ShowDoneDirective } from '../../directives/show-done.directive';

@Component({
  selector: 'app-task-item',
  imports: [PriorityPipe, PriorityColorDirective, ShowDoneDirective],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input({ required: true }) task!: Task;
  @Output() taskSelected = new EventEmitter<Task>();
  onSelectedTask() {
    this.taskSelected.emit(this.task);
  }
}
