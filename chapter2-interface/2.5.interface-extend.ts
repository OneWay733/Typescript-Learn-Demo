interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}
// 接口可以多继承
interface Square extends Shape,PenStroke {
  sideLength: number;
}

let square = <Square>{} //跳过类型检查了
let s = {} as Square //和上面一样，跳过了类型检查
// let sq: Square = {} //这样初始化，就会进行类型检查
square.color = 'red'
square.sideLength = 2
square.penWidth = 1
