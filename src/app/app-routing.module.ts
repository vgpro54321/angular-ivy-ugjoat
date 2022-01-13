import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildCComponent } from './child-c/child-c.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ],
  },
  { path: 'second-component', component: SecondComponent },

  { path: 'third-component', component: ThirdComponent },

  {
    path: 'second-component/:id',
    component: SecondComponent,
    children: [
      {
        path: 'child-c', // child route path
        component: ChildCComponent, // child route component that the router renders
      },
      {
        path: 'child-c/:id', // child route path
        component: ChildCComponent, // child route component that the router renders
      },
    ],
  },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
