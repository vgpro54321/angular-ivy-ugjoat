import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  id: any;
  idMap: any;

  ngOnInit() {
    console.log('on init');

    this.route.queryParams
      .pipe(tap((x) => console.log('third component query params', x)))
      .subscribe((params) => {
        console.log('route change');

        if (!params['id']) {
          console.log('Third component: no id');

          this.router.navigate(['/third-component'], {
            queryParams: { id: -1 },
          });
        }

        this.id = params['id'];
      });

    this.route.paramMap
      .pipe(tap((x) => console.log('third component paramMap', x)))
      .subscribe((params) => (this.idMap = params.get('id')));
  }
}
