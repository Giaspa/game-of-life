export class Utilities {
    static setGap (num: number): number {
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
}