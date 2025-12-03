export class ArrayTwo {
  numbers: number[][] = [
    [ 2.5,  -1.8,  0.0],
    [ 4.1,   3.7, -2.2],
    [-0.9,   5.5,  1.1],
    [-3.3,    2.0,  4.4],
    [ 6.6,  -0.5,  3.9]
  ];

  getNegativeIndices(): string[] {
    const result: string[] = [];

    for (let i = 0; i < this.numbers.length; i++) {
      for (let j = 0; j < this.numbers[i].length; j++) {
        if (this.numbers[i][j] < 0) {
          result.push(`A[${i + 1},${j + 1}] = ${this.numbers[i][j]}`);
        }
      }
    }

    return result.length > 0 ? result : ['Від’ємних елементів немає'];
  }
}
