import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css'],
})
export class ChildCComponent implements OnInit {
  id: string;
  idMap: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(tap((x) => console.log('ChildC component query params', x)))
      .subscribe((params) => {
        this.id = params['id'];
      });

    this.route.paramMap
      .pipe(tap((x) => console.log('ChildC component paramMap', x)))
      .subscribe((params) => (this.idMap = params.get('id')));
  }
}
