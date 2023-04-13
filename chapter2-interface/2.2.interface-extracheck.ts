interface userConfig {
  name: string,
  age?: number,
  // [extra: string]: any //表示还有其他额外的我们并不是很关心的属性
}

let config1: userConfig = {
  name: 'Kobe',
  //sex:'male' // 如果上面接口没有定义extra，那么此处会报错
}
function createUser(config:userConfig) {

}

// createUser({ name: 'Kobe', sex:'male'}) // error!
// 绕开类型检查的方法1： 使用断言
createUser({ name: 'Kobe', sex:'male'} as userConfig)
// 绕开类型检查的方法2： 将参数赋值给另一个变量
let config2 = { name: 'Kobe', sex:'male'}
createUser(config2)
// 注意，我们一遍不推荐绕开类型检查，最好的方法就是在定义接口的时候，添加extra
