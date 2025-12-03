import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ArrayOne } from '../Class/arrayOne';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-one.html',
  styleUrl: './array-one.css',
})
export class ArrayOneComponent {

  arrayOne: ArrayOne = new ArrayOne();

  reversedList: string[] = [];

  showReversed() {
    this.reversedList = this.arrayOne.getReversed();
  }
}
