import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NumericComponent } from './numeric/numeric.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'numeric',
    component: NumericComponent,
  },
];
