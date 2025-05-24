import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-studunt',
  imports: [],
  templateUrl: './studunt.component.html',
  styleUrl: './studunt.component.css',
})
export class StuduntComponent {
  @Input({ required: true }) student!: any;
  @Output() newStudent = new EventEmitter<any>(); //event
  onChange(newName: string) {
    // this.student.name = value;
    this.newStudent.emit({ id: this.student.id, name: newName });
  }
}
