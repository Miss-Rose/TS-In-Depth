import { ReferenceItem } from './reference-item';
import { positiveInteger } from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private myCopies: number;
    @positiveInteger
    get copies(): number {
        return this.myCopies;
    }

    set copies(value: number) {
        this.myCopies = value;
    }

    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }
    printItem(){
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
        // Object.getPrototypeOf(this);
    }
    printCitation(): void {
        console.log(`${this.title} -${this.year}`);
    }
}

// class Encyclopedia extends ReferenceItem {
//     constructor(id: number, title: string, year: number, public edition: number) {
//         super(id, title, year);
//     }
//     printItem(){
//         super.printItem();
//         console.log(`Edition: ${this.edition} (${this.year})`);
//         // Object.getPrototypeOf(this);
//     }
//     printCitation(): void {
//         console.log(`${this.title} -${this.year}`);
//     }
// }

