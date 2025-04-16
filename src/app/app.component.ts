import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppClassDirective } from './directives/app-class.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AppClassDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered!'); // referer to my app-root
  }
  currentPage = 3;
  showJson = false;
  students: any = [
    {
      id: 1,
      name: 'John Doe',
      age: 20,
      degree: 'Computer Science',
      lastName: 'Doe',
      image: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 22,
      degree: 'Mathematics',
      lastName: 'Smith',
      image: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      age: 21,
      degree: 'Physics',
      lastName: 'Johnson',
      image: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 4,
      name: 'Michael Brown',
      age: 23,
      degree: 'Chemistry',
      lastName: 'Brown',
      image: 'https://picsum.photos/id/237/200/300',
    },
  ];

  toggleJson() {
    this.showJson = !this.showJson;
  }

  getClass(index: number) {
    if (index === this.currentPage) {
      return 'active';
    }
    return '';
  }
}
