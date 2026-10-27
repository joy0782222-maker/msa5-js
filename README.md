# 📒 msa5-js

> MSA 기반 자바 풀스택 과정 — **JavaScript 수업 기록**
> 배운 내용을 직접 코드로 따라 치면서 정리하는 저장소예요.

<br>

## 📂 목차

| 파일 | 주제 | 핵심 키워드 |
|---|---|---|
| [`13_exception.js`](./edu/13_exception.js) | 예외처리 | `try` · `catch` · `finally` · `throw` · `instanceof` |
| [`14_destructuring.js`](./edu/14_destructuring.js) | 구조분해 문법 | 배열/객체 구조분해 · 이름 바꾸기 · 기본값 |
| [`17_timer.js`](./edu/17_timer.js) | 타이머 함수 & 비동기 | `setTimeout` · `setInterval` · `clear~` |

<br>

## 🔄 이벤트 루프

![이벤트 루프](./캡처.PNG)

- **Heap** : 객체, 배열 같은 데이터를 저장하는 공간
- **Call Stack** : 지금 실행 중인 함수를 쌓아두는 곳 (JS는 딱 하나!)
- **Web API** : 타이머, AJAX, 이벤트처럼 기다려야 하는 일을 대신 처리
- **Queue** : 일이 끝난 콜백이 줄 서서 대기하는 곳
- **Event Loop** : 콜스택이 비면 큐에서 콜백을 꺼내 실행

<br>

## ✏️ 오늘의 한 줄 정리

**예외처리**
> 에러가 나는 순간 `try`의 남은 줄은 건너뛰고 `catch`로 점프!
> `finally`는 에러가 나든 안 나든 무조건 실행.

**구조분해**
> 배열은 **순서**대로, 객체는 **키 이름**으로 꺼낸다.
> `:` 는 이름 바꾸기, `=` 는 기본값.

**타이머 & 비동기**
> `setTimeout`은 시간이 0이어도 **일단 뒤로 보낸다.**
> 동기 코드가 다 끝난 뒤에 실행됨.

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// 결과: A → C → B
```

<br>

## 🗓️ 다음에 배울 것

- [ ] Promise
- [ ] async / await

<br>

---

<sub>💬 코드 속 "창조 에러"는 오타가 아니라 추억입니다. (참조 에러예요)</sub>
