import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'customers',
    component: AppComponent,
    data: { text: 'Customers' }
  },
  {
    path: 'customers/:id',
    component: AppComponent,
    data: { text: 'Customer' }
  },
  {
    path: 'kanban',
    component: AppComponent,
    data: { text: 'kanban' }
  },
  {
    path: 'login',
    component: AppComponent,
    data: { text: 'login' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ]
})
export class AppRotingModule {}
