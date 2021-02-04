## Day 15 - LocalStorage and Event Delegation [Demo](https://bbumjun.github.io/Javascript30/15%20-%20LocalStorage/)

### What I Learned

이번 과제는 form요소로 사용자에게 음식을 입력받아 화면에 나타내고, `localStorage` 를 사용해 웹페이지에 데이터를 유지하는 것이다.

`addItem`, `populateList`, `toggleDone` 이 3개의 함수를 정의해 로직을 구현했다. **addItem(event)**

- `event.preventDefault()`를 사용해 form submit 이벤트의 새로고침을 취소함
- localStorage에 `JSON.stringfy()`에 의해 문자열로 변환된 item 객체 배열을 저장함
- `formElement.reset()` 으로 form 내부의 모든 element의 value를 초기화

**populateList**

- `items instanceof Array` 를 사용해 전달받은 파라미터인 items의 Array 프로토타입이 items 객체의 프로토타입 체인에 존재하는지 확인한다.
- map 함수를 사용해 배열을 적절한 형태의 html 로 itemList element에 삽입한다.

**toggleDone**

- 이벤트를 위임받았기 때문에 실제 해당되는 element를 찾기 위해 `e.target.matches(selector)` 함수를 사용한다

웹페이지가 새로 실행될때마다 호출되어야 하는 populateList함수를 document.onload에 전달한다.
