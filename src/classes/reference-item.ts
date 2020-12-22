import { timeout } from '../decorators';

export abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    private publisheR: string;
    #id: number;
    static department: string = 'Classical Literature';

    get publisher(): string{
        return this.publisheR.toUpperCase();
    }

    set publisher(newPublisher: string){
        this.publisheR = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    getID(): number {
        return this.#id;
    }
    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }
    abstract printCitation(): void;
}
