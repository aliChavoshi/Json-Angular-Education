import { Component } from '@angular/core';
import { AppClassDirective } from '../directives/app-class.directive';

@Component({
  selector: 'app-numeric',
  imports: [AppClassDirective],
  templateUrl: './numeric.component.html',
  styleUrl: './numeric.component.css',
  standalone: true,
})
export class NumericComponent {}
