import { Routes } from '@angular/router';
import { ClassComponent } from './class-component/class-component';
import { ArrayOneComponent } from './array-one/array-one';
import { ArrayTwoComponent } from './array-two/array-two';

export const routes: Routes = [
  { path: '', redirectTo: 'class', pathMatch: 'full' },

  { path: 'class', component: ClassComponent },
  { path: 'array-one', component: ArrayOneComponent },
  { path: 'array-two', component: ArrayTwoComponent}
];
