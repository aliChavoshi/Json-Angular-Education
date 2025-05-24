import { Component } from '@angular/core';
import { Task } from '../models/task';
import { TaskItemComponent } from './task-item/task-item.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

//SOLID
@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent, EditTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  isEdit = false;
  editTask!: Task | undefined;
  tasks: Task[] = [
    { title: 'نوشتن مقاله', priority: 1, done: false, id: 1 },
    { title: 'نوشتن', priority: 2, done: true, id: 2 },
    { title: 'یادداشت مقاله', priority: 3, done: false, id: 3 },
    { title: ' مقاله', priority: 4, done: true, id: 4 },
    { title: 'خرید میوه', priority: 1, done: false, id: 5 },
  ];
  taskSelected(task: Task) {
    this.isEdit = true;
    this.editTask = this.tasks.find((x) => x.id == task.id);
  }
}
