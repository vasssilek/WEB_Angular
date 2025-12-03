import { Notebook } from './notebook';

export class GeneralNotebook extends Notebook {
  coverMaterial: string;

  constructor(name: string, k: number, coverMaterial: string) {
    super(name, k);
    this.coverMaterial = coverMaterial;
  }

  override price(): number {
    return super.price() + 50; // +50 грн за обкладинку
  }
}
