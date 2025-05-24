import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-edit-task',
  imports: [],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent implements OnInit {
  @Input({ required: true }) task: Task | undefined;

  constructor() {
  }
  ngOnInit(): void {
    console.log('🚀 ~ EditTaskComponent ~ task:', this.task);
    }
}
