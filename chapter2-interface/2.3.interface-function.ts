interface SearchFunc {
  (source: string, subString: string): boolean
}

// 定义了函数，参数可以不指定类型，编译器会推断出具体的类型
let search: SearchFunc = function(src,sub) {
  return false
}
