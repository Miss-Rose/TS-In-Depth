import { Book, LibMgrCallback } from './intefaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties } from './types';

export function getAllBooks(): ReadonlyArray<object> {
    // const books = <const>[
    const books = [
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
export function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
    const numbersOfBooks: number = books.length;
    let firstAvailable: string = books
        .find(book => book['available'])['title'];
    console.log(numbersOfBooks);
    console.log(firstAvailable);
}
export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    let titles: string[];
    titles = books
        .filter(book => book['category'] === category)
        .map(i => i['title']);
    return titles;
}
export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log('title', title));
}
export function getBookAuthorByIndex(indx: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[indx] as { title: string; author: string };
    return [title, author];
}
export function calcTotalPages(): bigint {
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
export function createCustomerID(name: string, id: number): string {
    return `${id} - ${name}`;
}
export function createCustomer(name: string, age?: number, city?: string): void{
    console.log(`name = ${name}`);
    if(age) console.log(`age = ${age}`);
    if(city) console.log(`city = ${city}`);
}
export function getBookByID(id: number): BookOrUndefined{
    const books = getAllBooks();
    return <Book | undefined>books.find((book: { id: number }) => book.id === id);
}
export function сheckotBooks(customer: string, ...bookIDs: number[]): string[] {
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

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: (string | number | boolean)[]): string[] {
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

export function assertStringValue(value: any): asserts value is string {
    if(typeof value !== 'string'){
        throw new Error('value should have been a string');
    }
}
export function bookTitleTransform(title: any): string | never {
    assertStringValue(title);
    return [...title].reverse().join();
}
// function getAllBooks1(): ReadonlyArray<Book> {
//     const books: readonly Book[] = <const>[
//         {
//             id: 1,
//             category: Category.JavaScript,
//             title: 'Refactoring JavaScript',
//             author: 'Evan Burchard',
//             available: true,
//             markDamaged: 2,
//         },
//         {
//             id: 2,
//             category: Category.JavaScript,
//             title: 'JavaScript Testing',
//             author: 'Liang Yuxian Eugene',
//             available: false,
//             markDamaged: 2,
//         },
//         {
//             id: 3,
//             category: Category.CSS,
//             title: 'CSS Secrets',
//             author: 'Lea Verou',
//             available: true,
//             markDamaged: 2,
//         },
//         {
//             id: 4,
//             category: Category.HTML,
//             title: 'Mastering JavaScript Object-Oriented Programming',
//             author: 'Andrea Chiarelli',
//             available: true,
//             markDamaged: 2,
//         },
//     ];
//     return books;
// }
export function getBookByID1(id: number): Book | any{
    const books = getAllBooks();
    return books.find((book: {id: number}) => book.id ===id);
}
export function printBook(book: Book): void {
    console.log(`${book.title} + by + ${book.author}`);
}
export function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function'){
        return book[prop][name];
    }
    return book[prop];
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0){
                callback(null, titles);
            } else throw new Error('No books found.');
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}
export function logCategorySearch(error: Error, titles: string[]): void {
    if (error) {
        console.log(`${error.message}`);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length){
                resolve(titles);
            } else reject('No books found.');
        }, 2000);
    });
}

export async function logSearchResults(category: Category): Promise<string[]> {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles);
    return titles;
}
