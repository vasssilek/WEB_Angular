export class ArrayOne {

  surnames: string[] = [];

  constructor() {
    this.surnames = [
    "Франко",
    "Шевченко",
    "Симоненко",
    "Кобилянська",
    "Приймаченко"
  ];
  }

  // масив у зворотному порядку
  getReversed(): string[] {
    return [...this.surnames].reverse();
  }
}
