showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ----------------------------------------------
enum Category {JavaScript, CSS, HTML, TypeScript, Angular}

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

function getBookByID(id: number): any{
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
