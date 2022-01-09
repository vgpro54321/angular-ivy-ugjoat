import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  id: string;
  idMap: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(tap((x) => console.log('second component query params', x)))
      .subscribe((params) => {
        this.id = params['id'];
      });

    this.route.paramMap
      .pipe(tap((x) => console.log('second component paramMap', x)))
      .subscribe((params) => (this.idMap = params.get('id')));
  }
}
