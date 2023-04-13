function getCounter() {
    // let counter = <Counter>function (start: number) {
    //   console.log('start',start)
    // };
    var counter = function (end) {
        console.log('end', end);
        this.interval = 123;
        this.reset = function () { };
        var a = function () { };
    };
    // counter.interval = 123;
    // counter.reset = function () { };
    console.log('counter', counter);
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
