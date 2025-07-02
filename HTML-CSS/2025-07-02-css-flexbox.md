# css layout(flex)

작성일시: 2025년 7월 1일 오전 10:05
언어: css
키워드: #css #layout #flexbox
수업날짜: 2025년 7월 1일

## Flexbox

요소를 배치하는 방식. 요소의 크기가 불명확하거나 동적으로 변할 때에도 요소를 배치, 정렬, 분산할 수 있다.

- flex-direction : 배치할 방향
- justify-contnet, align-items : 정렬
- flex-wrap : 요소가 넘칠 때
- gap : 요소 간격
- flex-grow, flex-shrink, flex-basis : 요소의 크기를 늘이거나 줄이기

---

### 기본 축과 교차 축

![image.png](image.png)

## 기본 축 설정: flex-direction

기본 축 방향을 설정. 기본값은 row

![image.png](image%201.png)

이외에도 **오른쪽부터 정렬**되는 **row-reverse**와 **아래부터 정렬**되는 **column-reverse**도 있다. 

## 기본 축 정렬: justify-content

**기본 축 정렬 방식**을 설정. 기본값은 flex-start

### justify-content: flex-start; (default)

![image.png](image%202.png)

### justify-content: flex-end;

![image.png](image%203.png)

### justify-content: center;

![image.png](image%204.png)

### justify-content: space-between;

![space-between.png](space-between.png)

### justify-content: space-around;

![space=around.png](spacearound.png)

### justify-content: space-evenly;

![space-evenly.png](space-evenly.png)

## 교차 축 정렬: align-items

**교차 축 정렬 방식**을 설정. 기본값은 stretch

### align-items: stretch; (default)

![image.png](image%205.png)

### align-items: flex-start;

![image.png](image%206.png)

### align-items: center;

![image.png](image%207.png)

### align-items: flex-end;

![image.png](image%208.png)

### align-items: baseline;

요소들이 텍스트 베이스라인을 기준으로 정렬.

## 요소가 넘칠 때: flex-wrap

요소가 넘치는 경우 교차 축 방향으로 넘어가서 배치. 기본값은 nowrap

### flex-wrap: wrap;

![image.png](image%209.png)

### flex-wrap: wrap-reverse;

![image.png](image%2010.png)

## 여러행 정렬: align-content

flex-wrap: wrap; 이 설정된 상태에서, 요소들의 행이 2줄 이상일 때 교차축을 정렬. 속성들은 align-items와 동일하다.

## 간격: gap

요소들 사이의 간격을 한번에 줄 수 있다.

### gap: 간격;

![image.png](image%2011.png)

### gap: 세로간격 가로간격;

![image.png](image%2012.png)

## 요소의 기본 크기: flex-basis

flexbox 안의 요소들의 기본 크기를 설정. (flex-direction이 row일 때는 너비, column일 때는 높이)

기본값은 auto로 해당 요소의 width값을 사용

## 유연하게 늘이기: flex-grow

기본값은 0으로 flex-grow값이 클수록 많이 늘어난다. 

flex-grow: 0;인 경우, 요소들이 늘어나지 않고 주어진 값으로 존재

![image.png](image%2013.png)

flex-grow: 1;인 경우, 값을 가진 요소가  남아있는 flexbox를 채운다.

![image.png](image%2014.png)

flex-grow: 1; 값을 가진 요소가  여러개인 경우 남은 flexbox를 동등한 비율로 채운다.

![image.png](image%2015.png)

flex-grow값이 다를 경우 더 큰 값을 가진 요소가 남은 flexbox를 상대적으로 많이 채운다.

![image.png](image%2016.png)

## 유연하게 줄이기 : flex-shrink

요소의 크기가 커서 넘치는 경우, 요소의 크기를 줄여서 flexbox를 가득 채운다. 

**기본값은 1**이기 때문에 요소가 **넘친다면 기본적으로 요소의 크기를 줄인다**. 

![image.png](image%2017.png)

**flex-shrink: 0; 이라면 크기가 줄어들지 않는다**. 그러므로 나머지 요소들만 줄어들어 flexbox의 크기를 맞춘다. 

![image.png](image%2018.png)

flex-shrink의 값이 클수록 많이 줄어든다. 

![image.png](image%2019.png)

**flex-grow:1;** 이용하면 브라우저의 **크기에 따라 여백을 채울 수 있고**, 

**flex-shrink:0;** 을 이용하면 브라우저의 크기가 변해도 **고정된 크기의 요소**를 만들 수 있다. 

## position과 flexbox

요소의 원래 자리를 차지하는 relative와 sticky는 flex의 영향을 받지만,

요소의 원래 자리가 없어지는 **absolute와 fixed의 경우 flex의 영향을 받지 않는다**. 

---

## review.

### 오늘 배운 것 요약

- flexbox는 요소를 배치하기 위한 속성.
- 기본 축과 교차 축이 존재하며 flex-direction을 통해 설정할 수 있다.
- 기본 축과 교차 축을 정렬하는 다양한 방법들이 있다.
- flex-grow속성을 통해 flexbox의 남은 공간을 채울 수 있다.
- flex-shrink 속성을 통해 flexbox를 넘치는 요소들을 줄일 수 있다.

### 느낀 점

flex를 사용할 때 늘 브라우저에서 하나하나 눌러가며 위치를 파악했었는데 확실히 flex의 사용방법을 배웠다. 그리고 flex-grow와 flex-shrink라는 새로운 속성에 대해 알 수 있었는데 이를 통하면 훨씬 깔끔하게 flexbox를 구성하여 반응형 디자인을 손쉽게 할 수 있을 거라 예상된다.