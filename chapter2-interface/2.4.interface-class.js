/**
 * 实现了接口的类必须要实现对应的方法
 */
var Clock = /** @class */ (function () {
    // 私有方法接口是管不了的
    function Clock() {
    }
    // 共有方法实现
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
