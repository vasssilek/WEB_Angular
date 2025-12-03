export class Notebook {
  name: string;
  k: number;

  constructor(name: string, k: number) {
    this.name = name;
    this.k = k > 0 ? k : 1;
  }

  price(): number {
    return 15 * this.k;
  }
}
