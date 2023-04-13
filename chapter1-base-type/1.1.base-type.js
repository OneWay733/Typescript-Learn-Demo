// 布尔类型
var isDone = true;
// 数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var namestr = 'Bob';
var introduce = "my name is ".concat(namestr);
// 数组
var list1 = [1, 2, 3];
var list2 = [2, 3, 4];
// 元组 (确定类型和个数)
var tmp = ['hello', 2];
// 枚举 (默认从0开始，也可指定从几开始)
var Color;
(function (Color) {
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
//也可以手动指定枚举的值
var Brand;
(function (Brand) {
    Brand[Brand["BMW"] = 1] = "BMW";
    Brand[Brand["Benz"] = 4] = "Benz";
    Brand[Brand["Toyota"] = 10] = "Toyota";
})(Brand || (Brand = {}));
// any(避免类型检查，并且可以赋值任何类型的值)
var notSure = 4;
notSure.isExist(); //此方法不存在，但是在编译阶段compiler是不知道的，所以此时不会报错
notSure.toFixed(2); // 此方法是存在的，同样编译时编译器是不知道的
// null,undefined
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
// 也许在某处你想传入一个number或null或undefined，你可以使用联合类型number | null | undefined
var u = undefined;
var n = null;
var union = 1;
union = null;
// never
/**
 * never类型表示的是那些永不存在的值的类型。
 * 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式的返回值类型；
 * 变量也可能是never类型，当它们被永不为真的类型保护所约束时
 **/
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点 (死循环)
function infiniteLoop() {
    while (true) {
    }
}
// 类型断言
// 当你比ts更了解这个变量的类型时，你可以利用类型断言告诉编译器
var something = "let us go";
var size = something.length; //方式一
var len = something.length; //方式二
