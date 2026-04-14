// Type
type Order = {
    productId: string;
    price: number;
}

type User = {
    firsName: string
    age: number
    email: string
    password?: string
    orders: Order[]
    login(): string
};

const user: User = {
    firsName: 'weley',
    age: 32,
    email: 'wesley.xvier@gmail.com',
    // password: 'meupirutadesniper',
    orders: [{ productId: '1', price: 200 }],
    login() { return this.firsName }
}

const printLog = (msg: string) => { };

printLog(user.password!)

// Unions
type Author = {
    books: string[];
}

const author: Author & User = {
    age: 2,
    email: 'author@gmail.com',
    books: ['hentai', 'playboy'],
    firsName: 'josé toalha',
    orders: [],
    login() { return this.firsName }
}

// Interfaces
interface UserInterface {
    readonly firstName: string,
    email: string
};

interface AuthorInterface {
    books: string[]
};

const userEmail: UserInterface = {
    email: 'wesley.xvier@gmail.com',
    firstName: 'Wesley Xavier',
};

// userEmail.firstName = 'não da pra mudar';

const newAuthor: UserInterface & AuthorInterface = {
    email: 'author@gmail.com',
    firstName: 'joao jose joaquim',
    books: ['historia', 'geografia'],
};

type Grade = number | string;
const grade: Grade = 1


