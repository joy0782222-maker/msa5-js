// 원시형 (Primitive Type)
let num1 = 1;
let num2 = num1;
num2 = 99;
console.log(num1, num2);
// 1 99

// 참조형 (Reference Type)
let obj1 = {
  id: 1,
  name: "둘2",
  etc: { addr: "데굴", test: { key1: "val1" } },
};
// let obj2 = obj1;
// obj2.name = "ㄱㄷ";
// console.log(obj1.name, obj2.name);
// ㄱㄷ ㄱㄷ

//

// 얕은 복사 (shallow copy)
// 객체 최상위 계층만 값을 복사하고 그 이하 계층은 참조형 데이터일 경우 주소만 복사
let obj3 = { ...obj1 };
obj3.name = "토츼";
// 둘2 토츼

obj3.etc.addr = "서울";
console.log(obj1.name, obj3.name, obj1.etc.addr, obj3.etc.addr);
// 둘2 토츼 서울 서울

// 깊은 복사 (deep copy)
// 객체 모든 계층 값 복사
obj1 = { id: 1, name: "둘2", etc: { addr: "데굴" } };
let obj4 = JSON.parse(JSON.stringify(obj1));
