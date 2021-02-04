## Day 16 Mouse Move Shadow [Demo](https://bbumjun.github.io/Javascript30/16%20-%20Mouse%20Move%20Shadow)

**What I Learned**

마우스의 위치에 따라 텍스트에 동적인 그림자 효과를 주는 과제이다. 텍스트의 중앙을 기준으로 잡고 마우스 좌표와의 거리비율을 계산해 해결할 수 있다. element의 위치,크기를 의미하는 속성을 알아야한다.

`offsetTop, offsetLeft` : 현재 요소의 border와 부모노드의 border 사이의 가로,세로 거리

`offsetWidth, offsetHeight` : 현재요소의 너비, 높이 값

CSS `textShadow ` 속성 : ` text-shadow: 10*px* 10*px* 0 rgba(0,0,0,1);`
왼쪽부터 x축 거리, y축 거리, blur 세기, 그림자 색
