import { Component } from '@angular/core';
import { NumericDirective } from '../directives/numeric.directive';

@Component({
  selector: 'app-numeric',
  imports: [NumericDirective],
  templateUrl: './numeric.component.html',
  styleUrl: './numeric.component.css',
  standalone: true,
})
export class NumericComponent {}
