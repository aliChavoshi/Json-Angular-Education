import { CommonModule } from '@angular/common';
import { Component, HostListener, Pipe } from '@angular/core';
import { StuduntComponent } from './studunt/studunt.component';
import { NumericComponent } from './numeric/numeric.component';
import { PriorityPipe } from './pipes/priority.pipe';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterOutlet } from '@angular/router';

export interface Student {
  id: number;
  name: string;
  age: number;
  degree: string;
  lastName: string;
  image: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'New Title';
}
