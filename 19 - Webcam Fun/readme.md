### Day 19 Webcam Fun [Demo](https://bbumjun.github.io/Javascript30/19%20-%20Webcam%20Fun/)

What I Learned

**video**

비디오 스트림 데이터는 navigator의 mediaDevices 객체에서 얻을 수 있다. getUserMedia를 호출해 유저에게 권한을 얻음으로써 비디오장치에 접근할 수 있다.

```javascript
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
```

유저의 권한을 얻어 프로미스에게 stream 객체를 받으면 video의 srcObject 속성에 넣어 화면에 연결할 수 있다.

```javascript
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
