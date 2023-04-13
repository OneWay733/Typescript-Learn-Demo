// 接口中定义的方法是共有方法
interface ClockInterface {
  currentTime:Date
  setTime(d: Date)
}

/**
 * 实现了接口的类必须要实现对应的方法
 */
class Clock implements ClockInterface {
  currentTime: Date
  // 共有方法实现
  setTime(d: Date) {
    this.currentTime = d
  }
  // 私有方法接口是管不了的
  constructor() {
  }
}
