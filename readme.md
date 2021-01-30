> This is a JavaScript practice with [JavaScript30](https://javascript30.com/) by [Wes Bos](https://github.com/wesbos) without any frameworks, no compilers, no boilerplate, and no libraries.

# JavaScript30

Starter Files + Completed solutions for the JavaScript 30 Day Challenge.

## Logs

----

### Day 1 : 2021-01-20

01 - Javascript Drum Kit [Demo](https://bbumjun.github.io/Javascript30/01%20-%20JavaScript%20Drum%20Kit/)

What I Learned:

- CSS transition의 종료를 감지하는 `transitionend` event가 있다.

- querySelector 에서 element의 특정 attribute값을 이용해 element를 찾을 수 있다. 

  ```javascript
  document.querySelector(`div[data-key="${event.keyCode}"]`)
  ```

### Day 2 : JS + CSS Clock [Demo](https://bbumjun.github.io/Javascript30/02%20-%20JS%20and%20CSS%20Clock/)

What I Learned

CSS

- transform 속성에 rotate(value)를 줘서 element를 회전시킬 수 있음
- transform-origin 속성값을 변경해 회전축의 위치를 변경할 수 있음
- transition 속성에 `all 0.05s` 와 같이 주면 해당 element의 모든 css 변화를 설정해준 시간에 걸쳐서 변화하도록 할 수 있음

### Day 3: CSS Variables [Demo](https://bbumjun.github.io/Javascript30/03%20-%20CSS%20Variables/)

What I Learned

- html element에 data-* 속성을 사용해 데이터를 저장할 수 있다. (3장을 진행하는 동안 계속 나옴)
- CSS 에서 custom 속성을 선언해서 javascript에서 컨트롤할 수 있는 css 변수를 만들 수 있다.
- 위 방법들을 통해서 각 element마다 필요한 핸들러 함수를 일일이 만들지 않고도 하나로 일반화할 수 있었다.


### Day 5: Flex Panel Gallery [Demo](https://bbumjun.github.io/Javascript30/05%20-%20Flex%20Panel%20Gallery/)

What I Learned

- `:nth-child(n)` 이라는 pseudo class를 사용해 선택자의 n번째 element에 접근할 수 있다.

  ```css
       .panel p:nth-child(1) {
          transform: translateY(-100%);
        }
  ```

- element에 이벤트 핸들러로 class를 추가,제거하고자 할 때 classList객체에서  add,remove 대신 toggle 메서드를 사용하면 두가지 기능을 한번에 해결할 수 있다.

- flex layout 에서 잘 몰랐던 부분에 대해서 이해했다.

  - flex item에서 flex-grow , flow-shrink 속성은 display의 크기가 변할 때 각각 증가, 감소 너비의 비율을 설정할 수 있다. 본 문제에서는 이미지를 클릭했을 때 해당 이미지를 하이라이팅하기 위해 flex-grow를 조절했다.
  - flex-basis 는 item의 기본 size설정할 수 있는데, 해당 item 은 화면을 줄여도 이 size보다는 작아지지 않는다.

### Day 6: Type Ahead [Demo](https://bbumjun.github.io/Javascript30/06%20-%20Type%20Ahead)

What I learned

- 검색어 필터링에 필요한 정규식을 간단한 패턴을 만들어 사용하는 방법을 알았다.
- 몇가지 플래그와 정규식 메소드의 사용방법을 공부했다.


### Day 8: Fun With HTML5 Canvas [Demo](https://bbumjun.github.io/Javascript30/08%20-%20Fun%20with%20HTML5%20Canvas/)

What I learned

- HTML5 에 내장된 Canvas API를 사용해 마우스 이벤트에 반응해 화면에 그림을 그릴수 있다.

- 변수와 함수들을 클로저 내부에서 선언해 외부에서 변수를 조작하지 않고 기능만 동작하도록 할 수 있다.

  
### Day 9 - Dev Tools Domination

What I Learned

- 개발자도구에서 특정 Element에 break를 걸어  attribute의 변화 또는 subtree의 변화가 발생했을 때 break point를 발생시킨 라인을 하이라이팅 한다.
- `console.dir(DOMElement)` 을 사용하면  element 객체가 가진 property들을 tree형태로 살펴볼 수 있다.



### Day 10 - Hold Shift and Check Check Boxes [Demo](https://bbumjun.github.io/Javascript30/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/)

What I Learned

- 유사배열에서 배열 메서드를 사용하기 위해 Array.from 메서드를 사용할 수 있다.
- 키보드 이벤트와 마우스 이벤트를 동시에 처리할 수 있다.

  

