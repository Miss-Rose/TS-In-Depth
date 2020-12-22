import { Author, Book, Person } from './intefaces';

type DamageLogger2 = (reason: string) => void;
type myFunc = (name: string, id: number) => string;
export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type СreateCustomerFunctionType = (name: string, age: number, city?: string) => void;
