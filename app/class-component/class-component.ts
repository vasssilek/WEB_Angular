import { Component } from '@angular/core';
import { Notebook } from '../Class/notebook';
import { GeneralNotebook } from '../Class/general_notebook';

@Component({
  selector: 'app-class-component',
  standalone: true,
  imports: [],
  templateUrl: './class-component.html',
  styleUrls: ['./class-component.css'],
})
export class ClassComponent {

  notebook_show: string = '';
  general_notebook_show: string = '';
  cover_material: string = '';

  // обчислення
  calcNotebooks(
    name1: string, k1: string,
    name2: string, k2: string,
    cover: string
  ) {
    try {
      const nb = new Notebook(name1, parseInt(k1));
      const gnb = new GeneralNotebook(name2, parseInt(k2), cover);

      this.notebook_show = 'Ціна = ' + nb.price() + ' грн';
      this.general_notebook_show = 'Ціна = ' + gnb.price() + ' грн';
      this.cover_material = cover;

    } catch {
      throw 'Помилка у вхідних даних!';
    }
  }
}
