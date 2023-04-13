// 写法一
function print1(labelled: {label: string}) {
  console.log(labelled.label)
}
// 写法二
// 定义一个接口
interface LabelType {
  label: string
}
// 与其他语言不同，传进来的参数只要符合上述接口的样子就行，不需要extends之类的继承
function print2(labelled: LabelType) {
  console.log(labelled.label);
}

// 可选属性
interface SquareConfig {
  width: number
  height:number
  color?: string
}
// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    // newSquare.color = config.clor; // 好处之二体现了，config中没有clor这个属性
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// readonly
// readonly标注的属性只能在对象刚刚创建的时候修改其值
interface Point {
  readonly x: number
  readonly y: number
}
let area:Point = {
  x: 123,
  y: 43
}
// area.x = 12 //会报错

// ReadonlyArray<T>
let a: ReadonlyArray<number> = [1,2,3]
// a[0] = 3 //error!
// a.push(3) //error!
// 任何改变数组的方法都不能用，要用的话，使用断言之后再用
let r = a as number[]
r.pop()
