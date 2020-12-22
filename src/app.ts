import { RefBook, Shelf } from './classes';
import { Category } from './enums';
import { Book, Magazine } from './intefaces';
import { BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
import { createCustomer, logSearchResults } from './functions';


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ----------------------------------------------


// Task 02.01. Basic Types
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// console.log(getBookTitlesByCategory(Category.JavaScript));
// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);
// console.log(getBookAuthorByIndex(3));
// console.log(calcTotalPages());


// Task 03.01. Function Type
// const createCustomerIDa: myFunc = (name: string, id: number): string => `${id} - ${name}`;
// const myID: string = createCustomerID('Ann', 10);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id} - ${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Ann', 29));


// Task 03.02. Optional, Default and Rest Parameters
// createCustomer('Tania', 22, 'Vinnytsia');
// createCustomer('Ann', null, 'Vinnytsia');
// сheckoutBooks('Ann', 1, 2, 4);


// Task 03.03. Function Overloading
// getTitles(1, true);
// getTitles('Evan');
// getTitles(false);


// Task 03.04. Assertion Functions
// let res = bookTitleTransform('Java Script');
// console.log(res);
// res = bookTitleTransform(123);
// console.log(res);


// Task 04.01. Defining an Interface
// в литерале только свойства интерфейса
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     markDamaged: (reason: string) => `Demaged: ${reason}`,
// };
// printBook(myBook);
// console.log(myBook.markDamaged('missing back cover'));


// Task 04.02. Defining an Interface for Function Types
// interface DamageLogger {
//     (reason: string): void;
// }
// const logDamage: Logger = (reason: string) => `Demaged: ${reason}`;
// console.log(logDamage('missing back cover'));
// Task 04.03. Extending Interface
// const favoriteAuthor: Author = {
//     email: 't.s@gmail.com',
//     name: 'Tania',
//     numBooksPublished: 5,
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Tania',
//     email: 't.s@gmail.com',
//     department: 'JS department',
//     assistCustomer: (customName: string) => logDamage(customName),
// };
// console.log(favoriteAuthor);
// console.log(favoriteLibrarian);


// Task 04.04. Optional Chaining
// const offer: any = {};
// console.log(offer.magazine);
// console.log(offer.magazine.getTitle());


// Task 04.05. Keyof Operator
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));


// Task 05.01. Creating and Using Classes
// const ref = new ReferenceItem(1,'TypeScript', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Random Publisher';
// console.log(ref.publisher);
// console.log(ref.getID());


// Task 05.02. Extending Classes
const refBook = new RefBook(1,'TypeScript', 2020, 3);
// console.log(refBook);
// refBook.printItem();


// Task 05.03. Creating Abstract Classes
// const refBook = new Encyclopedia(1,'TypeScript', 2020, 3);
// console.log(refBook);
// refBook.printCitation();


// Task 05.04. Interfaces for Class Types
// const myFavoriteLibrarian: Librarian = new UniversityLibrarian();
// myFavoriteLibrarian.name = 'Tania';
// myFavoriteLibrarian.assistCustomer('Boris');


// Task 05.05. Intersection and Union Types
// const personBook: PersonBook = {
//     name: 'Tania',
//     email: 'erger@com',
//     author: 'Boris',
//     available: false,
//     category: Category.TypeScript,
//     id: 1,
//     title: 'Mastering of TS',
//     markDamaged: null,
//     pages: 300,
// };
// console.log(personBook);

// Task 06.05. Dynamic Import Expression
// const flag = false;
// if (flag) {
//     import ('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             reader.name = 'Tania';
//             reader.take(getAllBooks()[0]);
//             console.log(reader);
//         });
// }

// Task 06.06. Type-Only Imports and Exports
// let lib: Library = new Library();
// let lib: Library = {
//     Id: 1,
//     name: 'Tania',
//     address: 'Vinnytsia'
// };
// console.log(lib);

// Task 07.01. Generic Functions
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// const result = purge<Book>(inventory);
// console.log(result);
// const result2 = purge([1,2,3]);
// console.log(result2);

// Task 07.02. Generic Interfaces and Classes
const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);
const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Task 07.03. Generic Constraints
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// Task 07.04. Utility Types
const obj: BookRequiredFields = {
    id: 1,
    author: 'Tania',
    available: false,
    category: Category.JavaScript,
    markDamaged: null,
    pages: 100,
    title: 'Unknown',
};
const updatedBook: UpdatedBook = {
    id: 1,
    title: 'Some text',
};
const params: Parameters<СreateCustomerFunctionType> = ['Tania', 22];
createCustomer(...params);

// Task 08.01. Class Decorators (sealed)
// const o = new UniversityLibrarian();
// console.log(o);
// UniversityLibrarian.a = 1;
// console.log(o.__proto__);
// Object.getPrototypeOf(o);

// Task 08.02. Class Decorators that replace constructor functions (logger)
// const o = new UniversityLibrarian();
// console.log(o);
// o.name = 'Tania';
// o['printLibrarian']();

// Task 08.03. Method Decorator (writable)
// const o = new UniversityLibrarian();
// o.assistCustomer = null;
// // o.teachCommunity = null;
// console.log(o);

// Task 08.04. Method Decorator (timeout)
// const encyclopedia = new RefBook(1, 'No title', 2020, 3);
// encyclopedia.printItem();

// Task 08.05. Parameter Decorator (logParameter)
// const o = new UniversityLibrarian();
// console.log(o);
// o.name = 'Tania';
// o.assistCustomer('Boris');

// Task 08.06. Property Decorator
// const o = new UniversityLibrarian();
// o.name = 'Tania';
// console.log(o);
// o.assistCustomer('Boris');

// Task 08.07. Accessor Decorator
// const enc = new RefBook(1, 'No title', 2020, 2);
// enc.copies = 10;
// enc.copies = -5;

// Task 09.01. Callback Functions
// console.log('msg before');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('msg after');

// Task 09.02. Promises
// console.log('msg before');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(num => console.log(num))
//     .catch(err => console.log(err));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(err => console.log(err));
// console.log('msg after');

// Task 09.03. Async Functions
// logSearchResults(Category.JavaScript)
//     .then(data => console.log('data', data))
//     .catch(error => console.log(error));
