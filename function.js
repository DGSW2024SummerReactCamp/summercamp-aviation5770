const obj = {
    name: 'haewon',
    hello: function() {
      console.log(this.name);
    }
};
  
obj.hello(); // 매서드를 호출한 객체인 haewon을 가르킨다.

const obj2 = {
    name: 'haewon',
    hello: () => {
      console.log(this.name);
    }
};
  
obj2.hello(); // 매서드를 호출한 객체보다 한 단계 위의 스코프의 this를 사용한다. 즉 undefined 타입을 가르킨다.