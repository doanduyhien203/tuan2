let john = 'John';
let someString: string;// string , char
let someNumber: number; // double, int
let someBoolean: boolean;
let something: any; // có thể gán sang cho bất kỳ kiểu dữ liệu nào khác
let someStringArray: string[]; // tương tự cho number[], boolean[], any[]
let someObject: object;
let someNull: null;
let someUndefined: undefined;
let someUnknown: unknown;
let someNever: never; // ví dụ như một hàm throw exception
let someTuple: [string, number];
let someVoidFunction: () => void; // một hàm không trả về giá trị gì sau khi thực thi
let someFunction: () => string; // một hàm trả về giá trị có type "string" sau khi thực thi

interface User {
    firstName : string; // k the thieu
    lastName : string; // k the thieu
    age ?: number; // co the thieu
}
// ex generic
export abstract class BaseGeneric<T>{
    protected model : T;
    find(): T[]{
        return [this.model];
    }
    findOne(): T{
        return this.model;
    }
}
interface Dog {
    bark(): void;
}
interface Cat{
    meow():void;
}
export class DogService extends BaseGeneric<Dog>{}
export class CatService extends BaseGeneric<Cat>{}
const dogService = new DogService();
const catService = new CatService();
dogService.findOne().bark()
catService.findOne().meow()

typeof 'string'; // string
typeof 123; // number
typeof true; // boolean
typeof {}; // object
typeof []; // object
typeof (() => {}); // function
typeof null; // object
typeof undefined; // undefined
typeof new Date(); // object
typeof String; // function
typeof Boolean; // function
typeof NaN; // number
typeof typeof 123; // string
function listen(port: unknown) {
  if (typeof port === 'string') {
    port = parseInt(port, 10);
  }
}
listen('3000'); // ok
listen(3000); // ok
listen(true); // TypeError: Argument of type true is not assignable to parameter type string | number
// listen (); TypeError: Invalid number of arguments, expected 1

 function merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
    return { ...o1, ...o2 };
  }
  merge({ foo: 'bar' }, { bar: 'foo' });

  type ObjectDictionary<T> = { [key: string]: T }; //{foo: T, bar: T}
  type ArrayDictionary<T> = { [key: string]: T[] };//{foo: T[], bar: T[]}
  export type Dictionary<T> = T extends []
    ? ArrayDictionary<T[number]>
    : ObjectDictionary<T>;
  //file khac
  type StringDictionary = Dictionary<string>; // {[key: string]: string}{foo: '123', bar: '123'}
  type NumberArrayDictionary = Dictionary<number[]>; // {[key: string]: number[]}
  type UserEntity = Dictionary<User>; // {[key: string]: User}



// Exclude/Extract
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;
interface Users{
    firstName: string;
    lastName: string;
    password: string;
}
// Exclude: Loại bỏ những types ở T nếu như những types này gán được cho U
type SomeDiff = Exclude<'a' | 'b' | 'c', 'c' | 'd'>; // 'a' | 'b'. 'c' đã bị removed.
type SomeUser = Exclude<keyof Users, 'password'>;
// Extract: Loại bỏ những types ở T nếu như những types này KHÔNG gán được cho U
type SomeFilter = Extract<'a' | 'b' | 'c', 'c' | 'd'>; // 'c'. 'a' và 'b' đã bị removed.

// hoặc có thể dùng Exclude để tạo type alias NonNullable
type NonNullable<T> = Exclude<T, null | undefined>; // loại bỏ null và undefined từ T

type Readonly<T> = { readonly [P in keyof T]: T[P] }; // làm tất cả các props trong type thành readonly. Eg: Rất có lợi khi dùng cho Redux State.
type Partial<T> = { [P in keyof T]?: T[P] }; // làm tất cả các props trong type thành optional. Eg: Rất có lợi cho việc type 1 tham số khi cần truyền vào 1 type nào đó mà ko bắt buộc.
type Nullable<T> = { [P in keyof T]: T[P] | null }; // cái này tương tự như Partial, Partial sẽ trả về T[P] | undefined. Còn Nullable sẽ trả về T[P] | null

const readonlyUser: Readonly<Users> = {
    firstName: 'hien',
    lastName: 'doan',
    password: '123'
}
const Nullable: Nullable<Users> = {
    firstName: null,
    lastName: null,
    password: null
}

type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Record<K extends keyof any, T> = { [P in K]: T };

// Pick: Pick từ trong T những type có key là K
type Person = {
  firstName: string;
  lastName: string;
  password: string;
};

type PersonWithNames = Pick<Person, 'firstName' | 'lastName'>; // {firstName: string, lastName: string}
// Record: Gán type T cho lần lượt từng key P trong K

type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;
// { prop1: string, prop2: string, prop3: string }

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
// ReturnType: trả về type của giá trị mà function T trả về.

type Result = ReturnType<() => string>; // string

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// Omit: loại bỏ type có key là K trong T

type PersonWithoutPassword = Omit<Person, 'password'>; // {firstName: string, lastName: string}