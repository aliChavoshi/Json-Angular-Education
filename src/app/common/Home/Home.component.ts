import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-Home',
  imports: [RouterModule],
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  id = 5;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToStudent() {
    this.router.navigate(['/student'], {
      queryParams: {
        allowEdit: 1,
      },
      fragment: 'loading'
    });
  }
}
