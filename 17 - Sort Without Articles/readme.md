## Day 17 Sort Without Articles [Demo](https://bbumjun.github.io/Javascript30/17%20-%20Sort%20Without%20Articles)

**What I Learned**

주어진 밴드리스트를 "A, An, The" 관사를 제외하고 알파벳순으로 정렬하고 unordered list에 삽입하는 과제다.

맨 앞에 붙어있는 관사를 추출하는 정규식은 다음과 같이 만들 수 있다.
`RegExp("^(a |the |an )", "i")`

replace 메서드에 의해 관사가 제거된 string끼리 비교하는 함수를 sort 의 compare 함수로 삽입한다.
