import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Header } from './header/header';
import { ClassComponent } from './class-component/class-component';
import { ArrayOneComponent } from './array-one/array-one';
import { ArrayTwoComponent } from './array-two/array-two';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, ClassComponent, RouterLink, RouterLinkActive, ArrayOneComponent, ArrayTwoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  tittle = 'lab9-10'
}
