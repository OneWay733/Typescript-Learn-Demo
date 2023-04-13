interface Counter {
  (start: number): string;
  (end: boolean): number;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  // let counter = <Counter>function (start: number) {
  //   console.log('start',start)
  // };
  let counter: Counter = function (end: number) {
    console.log('end',end)
    this.interval = 123
    this.reset = function() {}
    let a = function() {}
  };
  // counter.interval = 123;
  // counter.reset = function () { };
  console.log('counter',counter)
  return counter;
}

let c = getCounter();
c(10)
c.reset();
c.interval = 5.0;
