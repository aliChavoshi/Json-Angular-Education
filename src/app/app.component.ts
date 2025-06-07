import { CommonModule } from '@angular/common';
import { Component, HostListener, Pipe } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/Header/Header.component';
import { FooterComponent } from './common/Footer/Footer.component';
import { routes } from './app.routes';
import { ElementsComponent } from "./elements/elements.component";
import { CollectionsComponent } from "./collections/collections.component";
import { UsersComponent } from "./users/users.component";

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
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    ElementsComponent,
    CollectionsComponent,
    UsersComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'New Title';
}
