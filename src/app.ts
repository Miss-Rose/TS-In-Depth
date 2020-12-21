showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ----------------------------------------------
enum Category {JavaScript, CSS, HTML, TypeScript, Angular};
type BookOrUndefined = Book | undefined;
// Task 02.01. Basic Types
function getAllBooks(): ReadonlyArray<object> {
    const books = <const>[
        {
            id: 1,
            category: Category.JavaScript,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            category: Category.JavaScript,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        {
            id: 3,
            category: Category.CSS,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
        },
        {
            id: 4,
            category: Category.HTML,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];
    return books;
}

console.log(getAllBooks());

function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
    const numbersOfBooks: number = books.length;
    let firstAvailable: string = books
        .find(book => book['available'])['title'];
    console.log(numbersOfBooks);
    console.log(firstAvailable);
}

logFirstAvailable(getAllBooks());

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    let titles: string[];
    titles = books
        .filter(book => book['category'] === category)
        .map(i => i['title']);
    return titles;
}

console.log(getBookTitlesByCategory(Category.JavaScript));

function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log('title', title));
}

const titles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(titles);

function getBookAuthorByIndex(indx: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[indx] as { title: string; author: string };
    return [title, author];
}

console.log(getBookAuthorByIndex(3));

function calcTotalPages(): bigint {
    const data = <const>[
        {
            lib: 'libName1',
            books: 1_000_000_000,
            avgPagesPerBook: 250,
        },
        {
            lib: 'libName2',
            books: 5_000_000_000,
            avgPagesPerBook: 300,
        },
        {
            lib: 'libName3',
            books: 3_000_000_000,
            avgPagesPerBook: 280,
        },
    ];

    return data.reduce((acc, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
}

console.log(calcTotalPages());
// Task 03.01. Function Type
function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}

// type myFunc = (name: string, id: number) => string;
// const createCustomerIDa: myFunc = (name: string, id: number): string => `${id} - ${name}`;

const myID: string = createCustomerID('Ann', 10);
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id} - ${name}`;
idGenerator = createCustomerID;
console.log(idGenerator('Ann', 29));

// Task 03.02. Optional, Default and Rest Parameters
function createCustomer(name: string, age?: number, city?: string): void{
    console.log(`name = ${name}`);
    if(age) console.log(`age = ${age}`);
    if(city) console.log(`city = ${city}`);
}
createCustomer('Tania', 22, 'Vinnytsia');
createCustomer('Ann', null, 'Vinnytsia');

function getBookByID(id: number): BookOrUndefined{
    const books = getAllBooks();
    return books.find((book: {id: number}) => book.id ===id);
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`name= ${customer}`);
    const titles: string[] = [];

    bookIDs.forEach(id => {
        let book = getBookByID(id);

        if(book && book.available){
            titles.push(book.title);
        }
    });
    return titles;
}
сheckoutBooks('Ann', 1, 2, 4);

// Task 03.03. Function Overloading
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: (string | number | boolean)[]): string[] {
    const books = getAllBooks();
    if(args.length === 1) {
        const [arg] = args;

        if(typeof arg === 'string') {
            return books
                .filter((book: any) => book.author === arg)
                .map((i: any) => i.title);
        }else if (typeof arg === 'boolean'){
            return books
                .filter((book: any) => book.available === arg)
                .map((i: any) => i.title);
        }
    }else if (args.length === 2) {
        const [id, available] = args;
        if(typeof id === 'number' && typeof available === 'boolean'){
            return books
                .filter((book: any) => book.id === id && book.available === available)
                .map((i: any) => i.title);
        }
    }
    return [];
}
getTitles(1, true);
getTitles('Evan');
getTitles(false);

// Task 03.04. Assertion Functions
function assertStringValue(value: any): asserts value is string {
    if(typeof value !== 'string'){
        throw new Error('value should have been a string');
    }
}
function bookTitleTransform(title: any): string | never {
    assertStringValue(title);
    return [...title].reverse().join();
}
let res = bookTitleTransform('Java Script');
console.log(res);
res = bookTitleTransform(123);
console.log(res);

// Task 04.01. Defining an Interface
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    markDamaged: DamageLogger;
}
function getAllBooks1(): ReadonlyArray<Book> {
    const books: readonly Book[] = <const>[
        {
            id: 1,
            category: Category.JavaScript,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            category: Category.JavaScript,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        {
            id: 3,
            category: Category.CSS,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
        },
        {
            id: 4,
            category: Category.HTML,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];
    return books;
}
function getBookByID1(id: number): Book | any{
    const books = getAllBooks();
    return books.find((book: {id: number}) => book.id ===id);
}
function printBook(book: Book): void {
    console.log(`${book.title} + by + ${book.author}`);
}
// в литерале только свойства интерфейса
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3
    pages: 200,
    markDamaged: (reason: string) => `Demaged: ${reason}`,
};
// printBook(myBook);
// console.log(myBook.markDamaged('missing back cover'));

// Task 04.02. Defining an Interface for Function Types
interface DamageLogger {
    (reason: string): void;
}
const logDamage: DamageLogger = (reason: string) => `Demaged: ${reason}`;
// console.log(logDamage('missing back cover'));

// Task 04.03. Extending Interface
interface Person {
    name: string;
    email: string;
}
interface Author extends Person {
    numBooksPublished: number;
}
interface Librarian extends Person {
    department: string;
    assistCustomer: (customName: string) => void;
}
const favoriteAuthor: Author = {
    email: 't.s@gmail.com',
    name: 'Tania',
    numBooksPublished: 5,
};
const favoriteLibrarian: Librarian = {
    name: 'Tania',
    email: 't.s@gmail.com',
    department: 'JS department',
    assistCustomer: (customName: string) => logDamage(customName),
};
// console.log(favoriteAuthor);
// console.log(favoriteLibrarian);

// Task 04.04. Optional Chaining
const offer: any = {};
// console.log(offer.magazine);
// console.log(offer.magazine.getTitle());

// Task 04.05. Keyof Operator
type BookProperties = keyof Book;
function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function'){
        return book[prop][name];
    }
    return book[prop];
}
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

// Task 05.01. Creating and Using Classes
abstract class ReferenceItem {
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

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }
    abstract printCitation(): void;
}
// const ref = new ReferenceItem(1,'TypeScript', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Random Publisher';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02. Extending Classes
class Encyclopedia extends ReferenceItem {
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
// const refBook = new Encyclopedia(1,'TypeScript', 2020, 3);
// console.log(refBook);
// refBook.printItem();

// Task 05.03. Creating Abstract Classes

// const refBook = new Encyclopedia(1,'TypeScript', 2020, 3);
// console.log(refBook);
// refBook.printCitation();

// Task 05.04. Interfaces for Class Types
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
// const myFavoriteLibrarian: Librarian = new UniversityLibrarian();
// myFavoriteLibrarian.name = 'Tania';
// myFavoriteLibrarian.assistCustomer('Boris');

// Task 05.05. Intersection and Union Types
type PersonBook = Person & Book;
const personBook: PersonBook = {
    name: 'Tania',
    email: 'erger@com',
    author: 'Boris',
    available: false,
    category: Category.TypeScript,
    id: 1,
    title: 'Mastering of TS',
    markDamaged: null,
    pages: 300,
};
console.log(personBook);

// Task 06.01. Using Namespaces

