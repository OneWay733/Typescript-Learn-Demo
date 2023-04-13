// 写法一
function print1(labelled) {
    console.log(labelled.label);
}
// 与其他语言不同，传进来的参数只要符合上述接口的样子就行，不需要extends之类的继承
function print2(labelled) {
    console.log(labelled.label);
}
// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        // newSquare.color = config.clor; // 好处之二体现了，config中没有clor这个属性
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var area = {
    x: 123,
    y: 43
};
// area.x = 12 //会报错
// ReadonlyArray<T>
var a = [1, 2, 3];
// a[0] = 3 //error!
// a.push(3) //error!
// 任何改变数组的方法都不能用，要用的话，使用断言之后再用
var r = a;
r.pop();
