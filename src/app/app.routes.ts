import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NumericComponent } from './numeric/numeric.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './task-list/edit-task/edit-task.component';

export const routes: Routes = [
  {
    path: 'tasks',
    component: TaskListComponent,
    children: [
      {
        path: 'edit',
        component: EditTaskComponent,
      },
    ],
  },
];
