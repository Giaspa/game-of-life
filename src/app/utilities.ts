export class Utilities {
  static setGap(num: number): number {
    if (num <= 12) {
      return 3;
    } else if (num > 12 && num < 24) {
      return 2;
    } else if (num >= 24 && num < 36) {
      return 1;
    } else {
      return 0;
    }
  }

  static getMatrixNxN(n: number): number[][] {
    const MATRIX: number[][] = [];
    let count: number = 1;

    for (let i = 0; i < n; i++) {
      const ROW: number[] = [];

      for (let j = 0; j < n; j++) {
        ROW.push(count++)
      }

      MATRIX.push(ROW)
    }

    return MATRIX
  }
}