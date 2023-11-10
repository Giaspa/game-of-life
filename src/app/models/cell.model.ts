export class Cell {
    id!: number;
    isAlive: boolean = false;
    siblings: number[] = []

    constructor(id: number, max: number) {
        this.id = id;
        this.siblings = this.setSiblings(id, max);
    }

    private setSiblings(id: number, max: number): number[] {
        /**
         *  P_1 | P_2 | P_3
         *  P_4 |  X  | P_5
         *  P_6 | P_7 | P_8
         */
        const [P_1, P_2, P_3, P_4, P_5, P_6, P_7, P_8] = [id - 13, id - 12, id - 11, id - 1, id + 1, id + 11, id + 12, id + 13,]
        const MAX_SQRT = Math.sqrt(max);
        const DX_LIMIT: number[] = [];
        const SX_LIMIT: number[] = [1];
        let siglings: number[] = [P_1, P_2, P_3, P_4, P_5, P_6, P_7, P_8]

        for (let i = 1; i <= max; i++) {
            if (i % MAX_SQRT === 0) {
                DX_LIMIT.push(i);
                SX_LIMIT.push(i + 1);
            }
        }

        if (SX_LIMIT.includes(id)) {
            siglings = [0, P_2, P_3, 0, P_5, 0, P_7, P_8]
        } else if (DX_LIMIT.includes(id)) {
            siglings = [P_1, P_2, 0, P_4, 0, P_6, P_7, 0]
        }

        return siglings.filter(sibling => sibling > 0 && sibling < max);
    }
}