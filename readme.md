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
- 키보드 이벤트와 마우스 이벤트를 동시에 처리해 체크박스 여러개를 한번에 체크할 수 있다.

### Day 11 - Custom Video Player [demo](https://bbumjun.github.io/Javascript30/11%20-%20Custom%20Video%20Player/)

What I Learned

- HTML5 Video element의 동작을 위한 event, method, property 들을 배웠다. 
  - progress bar를 실시간으로 업데이트 하기 위한 `timeupdate `이벤트
  - video.duration : 영상 전체 길이
  - div element의 `offsetWidth`와 event의 `offsetX` 를 사용해 재생 위치를 드래그로 이동할 수 있다.

- textContext , innerText 차이
  - 둘다 해당 element의 text 값을 반환하고 수정할 수 있다는 공통점이 있다. 차이점은 innerText는 불필요한 공백을 제거하여 반환하고, textContext는 텍스트를 그대로 반환한다.



### Day 13 - Slide in on Scroll [Demo](https://bbumjun.github.io/Javascript30/13%20-%20Slide%20in%20on%20Scroll/)

**What I Learned**

스크롤 이동에 따라 화면 안에 이미지가 들어오거나 벗어나면 active class를 추가/제거 하는 로직을 구현하는 과제이다. 마우스 휠의 한번의 움직임으로 수백번의 스크롤 이벤트가 발생하기 때문에 매번 이벤트 핸들러가 실행되면 성능이 엄청나게 저하될 수 있다.

따라서 본문에서 잦은 이벤트 핸들러의 실행을 방지하기 위한 디바운스 함수가 구현되어 있다. 이벤트에 의한 함수 호출을 제어하는 기술은 디바운스, 스로틀링이 대표적이다. 둘의 차이점은 디바운스는 이벤트가 발생한 시점이후 일정시간 동안 같은 이벤트가 다시 발생하지 않을 때 해당 이벤트 핸들러가 호출 된다. 반면 스로틀링은 정해진 주기안에 이벤트 핸들러의 실행을 1번으로 제한하는 것이다.

이미지가 화면 안에 들어왔는지 판단하는 로직은 3가지 변수를 정의해서 구현했다. 웹페이지의 전제 height 중 현재 보여지는 화면의 top, bottom의 위치, 그리고 각 이미지의 중심의 위치이다. window 객체의 `scrollY`(현재 스크롤의 위치), `innerHeight`(현재 창의 높이) 속성과 이미지의 `offsetTop`(부모요소의 top과 현재 요소의 top 사이 거리), `clientHeight`(요소의 높이)를 이용해 세 변수 값을 계산했다.

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

## Day 16 Mouse Move Shadow [Demo](https://bbumjun.github.io/Javascript30/16 - Mouse Move Shadow)

**What I Learned**

마우스의 위치에 따라 텍스트에 동적인 그림자 효과를 주는 과제이다. 텍스트의 중앙을 기준으로 잡고 마우스 좌표와의 거리비율을 계산해 해결할 수 있다. element의 위치,크기를 의미하는 속성을 알아야한다.

`offsetTop, offsetLeft` : 현재 요소의 border와 부모노드의 border 사이의 가로,세로 거리

`offsetWidth, offsetHeight` : 현재요소의 너비, 높이 값

CSS `textShadow `속성 : `text-shadow: 10*px* 10*px* 0 rgba(0,0,0,1);` 왼쪽부터 x축 거리, y축 거리, blur 세기, 그림자 색

## Day 17 Sort Without Articles [Demo](https://bbumjun.github.io/Javascript30/17 - Sort Without Articles)

**What I Learned**

주어진 밴드리스트를 "A, An, The" 관사를 제외하고 알파벳순으로 정렬하고 unordered list에 삽입하는 과제다.

맨 앞에 붙어있는 관사를 추출하는 정규식은 다음과 같이 만들 수 있다. `RegExp("^(a |the |an )", "i")`

replace 메서드에 의해 관사가 제거된 string끼리 비교하는 함수를 sort 의 compare 함수로 삽입한다.

## Day 19 Webcam Fun [Demo](https://bbumjun.github.io/Javascript30/19 - Webcam Fun/)

What I Learned

**video**

비디오 스트림 데이터는 navigator의 mediaDevices 객체에서 얻을 수 있다. getUserMedia를 호출해 유저에게 권한을 얻음으로써 비디오장치에 접근할 수 있다.

```
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
```

유저의 권한을 얻어 프로미스에게 stream 객체를 받으면 video의 srcObject 속성에 넣어 화면에 연결할 수 있다.

```
    .then((stream) => {
      video.srcObject = stream
      video.play()
    })
```

**pixels**

브라우저는 이미지를 거대한 2중배열의 rgba 값을 가진 일련의 픽셀로 해석한다. 즉 가로가 100픽셀인 이미지 파일이라면 배열의 한 행에는 400개의 값이 r,g,b,a 순으로 들어있는 것이다.

**download attribute**

a 태그에 download 라는 속성은 클릭했을때 link가 가리키는 파일을 다운로드 할 수 있게 해준다.

**insertBefore()**

DOM에서 부모노드를 기준으로 원하는 위치에 노드를 삽입할 수 있다. 기존에 DOM에 부착되어 있던 노드라면 자동으로 삭제되고 이동된다.


  

