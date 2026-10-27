// 타이머 함수
// setTimeout(cd, ms, [args..([]안 함수는 생략가능)]): number
// 설정한 일정시간 후 콜백함수 실행
// 콜백함수에 피라미터가 필요한 경우에만 ...args추가
// return = timeoutId 정수값(해당 타이머 고유 식별값)

console.log("A");
const timeoutId = setTimeout(() => {
  console.log("B");
}, 1000);
console.log("C");

// 해당 ID의 setTimeout을 취소
clearTimeout(timeoutId);

// setInterval(cd, ms, [args..([]안 함수는 생략가능)]): number
// 설정한 일정 시간마다 콜백함수 실행
// return = intervalId 정수값(해당 인터벌 고유 식별값)
const intervalId = setInterval(() => {
  console.log("인터벌");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 6000);
