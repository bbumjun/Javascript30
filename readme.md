![](https://javascript30.com/images/JS3-social-share.png)

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



