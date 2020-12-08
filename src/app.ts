showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ----------------------------------------------
enum Category {JavaScript, CSS, HTML, TypeScript, Angular}

function getAllBooks(): Array<object> {
    return [
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
}

console.log(getAllBooks());

function logFirstAvailable(books: object[]): void {
    const numbersOfBooks: number = books.length;
    let firstAvailable: string = books
        .find(book => book['available'])['title'];
    console.log(numbersOfBooks);
    console.log(firstAvailable);
}

logFirstAvailable(getAllBooks());

function getBookTitlesByCategory(category: Category): Array<string> {
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
    const data = [
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
