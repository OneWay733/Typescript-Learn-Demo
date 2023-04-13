// 布尔类型
let isDone:boolean = true

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let namestr: string = 'Bob'
let introduce: string = `my name is ${namestr}`

// 数组
let list1: number[] = [1,2,3]
let list2: Array<number> = [2,3,4]

// 元组 (确定类型和个数)
let tmp: [string,number] = ['hello', 2]

// 枚举 (默认从0开始，也可指定从几开始)
enum Color {
  Green = 1,
  Red,
  Yellow
}
//也可以手动指定枚举的值
enum Brand {
  BMW = 1,
  Benz = 4,
  Toyota = 10
}

// any(避免类型检查，并且可以赋值任何类型的值)
let notSure: any = 4
notSure.isExist() //此方法不存在，但是在编译阶段compiler是不知道的，所以此时不会报错
notSure.toFixed(2) // 此方法是存在的，同样编译时编译器是不知道的

// null,undefined
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
// 也许在某处你想传入一个number或null或undefined，你可以使用联合类型number | null | undefined
let u: undefined = undefined
let n: null = null
let union: number | null = 1
union = null

// never
/**
 * never类型表示的是那些永不存在的值的类型。
 * 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式的返回值类型；
 * 变量也可能是never类型，当它们被永不为真的类型保护所约束时
 **/
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点 (死循环)
function infiniteLoop(): never {
  while (true) {
  }
}

// 类型断言
// 当你比ts更了解这个变量的类型时，你可以利用类型断言告诉编译器
let something: any = "let us go"
let size: number = (<string>something).length //方式一
let len: number = (something as string).length //方式二
