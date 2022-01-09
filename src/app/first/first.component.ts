import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(tap((x) => console.log(x))).subscribe((x) => {
      this.name = x['name'];
    });
  }

  navigateSecondComponent(): void {
    this.router.navigate(['/second-component'], { queryParams: { id: '10' } });
    //this.router.navigate(['/second-component', '10']);
  }
}
