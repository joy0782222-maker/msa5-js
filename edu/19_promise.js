// setTimeout(() => {
//   console.log("a");
// }, 1500);
// setTimeout(() => {
//   console.log("b");
// }, 1000);
// setTimeout(() => {
//   console.log("c");
// }, 500);

// //

// setTimeout(() => {
//   console.log("a");
//   setTimeout(() => {
//     console.log("b");
//     setTimeout(() => {
//       console.log("c");
//     }, 500);
//   }, 1000);
// }, 1500);

// // 느려지고 가독성이 떨어짐
// // 콜백 지옥 회피를 위해 promise 기반 변경

//   // 표현식
//   function test() {}
//   // 정의식
//   const test2 = ()=>{}

//   // 파라미터,매개변수(name)
//   // 아큐먼트,인수(a)
//   function greet(name) {
//       console.log(name);
//   }
//   greet("a");

// //

const timer = (str, ms = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);
      if (str === "a" || str === "b" || str === "c") {
        resolve({ code: "허용", word: str });
      } else {
        reject(new Error("허용하지 않은 문자"));
      }
    }, ms);
  });
};

timer("a", 300)
  .then((result) => {
    // resolve일때 실행되는 코드 작성
    console.log(result.code, result.word);
    return timer("b", 1000);
    // 동기처리를 위한 방볍
  })
  .then((result) => {
    console.log(result.code, result.word);
    return timer("c", 1500);
  })
  .then((result) => {
    console.log(result.code, result.word);
  })
  .catch((error) => {
    // reject일때 실행되는 코드 작성

    console.log(error.message);
  })
  .finally(() => {
    //  실행되는 코드 작성

    console.log("final");
  });
