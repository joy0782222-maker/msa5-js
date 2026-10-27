console.log(1);
console.log(2);
// console.log(test.name);

try {
  // 내가 실행할 처리 작성
  console.log("try문 시작");
  console.log(test.name);
  console.log("try문 끝");
} catch (error) {
  // try에서 에러나 에외가 발생했을때 처리할 로직
  console.log("error 발생");
  console.log(error.name); // 발생한 에러 명
  console.log(error.message); // 발생한 에러 내용
  console.log(error.stack); // 발생한 에러 상세 정보
}

console.log(4);
console.log(5);

//

try {
  console.log(1);
  // 강제 예외발생 시키키
  throw new Error("강제 예외발생시킴");

  console.log(2);
} catch (error) {
  console.log(error.stack);
}

// finally 예외 여부 상관없이 무조건 실행
try {
  console.log(test.name);
  console.log(1);
} catch (error) {
  console.log("error");
} finally {
  console.log("finally");
}

// 에러를 상세하게 처리하는 법
// 여러 종류의 예외를 처리하고싶을때 instanceof를 사용해 처리
// eval 쓰지마
try {
  throw new ReferenceError();
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("싱텍스 에러");
  } else if (error instanceof ReferenceError) {
    console.log("창조 에러");
  } else {
    console.log("에러 에러");
  }
}
