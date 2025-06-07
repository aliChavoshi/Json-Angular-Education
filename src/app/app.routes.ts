import { Routes } from '@angular/router';
import { NotFoundComponent } from './common/NotFound/NotFound.component';
import { HomeComponent } from './common/Home/Home.component';

export const routes: Routes = [
  {
    //Eager Loading
    path: '', //active
    component: HomeComponent,
    pathMatch: 'full',
  },
  //Lazy Loading => Preloading
  {
    path: 'elements',
    //component: ElementsComponent,
    loadComponent: () =>
      import('./elements/elements.component').then((x) => x.ElementsComponent),
    pathMatch: 'full',
    data: { preload: true }, //preloading
  },
  {
    path: 'collections',
    //component: CollectionsComponent,
    loadComponent: () =>
      import('./collections/collections.component').then(
        (x) => x.CollectionsComponent
      ), //Response up 3s 4s 5s
    pathMatch: 'full',
    data: { preload: false }, //lazy load
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
  // {
  //   path: '', //http://localhost:4200/
  //   component: HomeComponent,
  // },
  // {
  //   path: 'tasks',
  //   component: TaskListComponent,
  //   children: [
  //     {
  //       path: 'edit',
  //       component: EditTaskComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'student',
  //   component: StuduntComponent,
  // },
  // {
  //   //Parent
  //   path: 'users', //http://localhost:4200/users
  //   component: UsersComponent,
  //   // RouterOutlet
  //   children: [
  //     {
  //       path : '',//http://localhost:4200/users
  //       component : UsersComponent
  //     },
  //     {
  //       path: 'new',
  //       component: AddNewUserComponent,
  //     },
  //     {
  //       path: ':id',
  //       component: EditUserComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'users/:id', //http://localhost:4200/new
  //   component: EditUserComponent,
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];
