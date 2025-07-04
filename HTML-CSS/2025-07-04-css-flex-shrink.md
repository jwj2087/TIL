# flex-shrink와 고정값

작성일시: 2025년 7월 3일 오후 6:30
언어: css
키워드: #css #flexbox #고정값 #반응형
수업날짜: 2025년 7월 3일

## 문제

flexbox로 요소들을 배치하고 내부 content를 채운 후 flex-shrink:1; 을 주어 화면 비율에 따라 크기가 변하도록 설계. 그러나 flex-shrink가 적용되지 않고 내부 요소들의 크기가 고정됨.

## 원인

flexbox를 만든 가장 상위 부모 class의 크기가 width: 1120px로 고정폭으로 설정됨. 부모의 **크기가 고정되어 있으니** 자식 요소도 **줄어들 여지가 없음**. 결론적으로 flex-shrink가 작동하지 않음.

또한 <img>를 .svg로 사용할 경우 .**svg 자체에 크기가 정해져 있어서 flex-shrink가 작동하지 않을 수 있음**.

## 해결법

부모의 고정된 width: 1120px를 max-width:1120px로 최대크기를 제한하고 width:100%;를 주어 1120px 이하일때는 화면비율에 따라 변경될 수 있도록 설정. <img>태그도 동일하게 **원하는 크기를 max-width로 최대값을 설정**한 후, **width:100%를 주어 크기가 변할 수 있도록 함**. 

## 느낌 점

모든 요소에 flex-shrink를 넣고 알아서 줄어들길 바라지 말자! 고정값이 주어진 요소들은 줄어들지 않는다! 반응형 사이트를 만들기 위해서는 최댓값을 설정하고 기본적으로는 크기가 유동적으로 변할 수 있도록 해야한다는 것을 배울 수 있었다. 

---

## code.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>판다마켓</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@4.0.1/reset.min.css"/>
    <link rel="stylesheet" href="font/pretendard.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <main>
        <div class="wrap">
            <div class="main-txt">
                <h1 class="main-title">일상의 모든 물건을<br>거래해 보세요</h1>
                <a href="./items" class="items-button">구경하러 가기</a>
            </div>
            <img src="images/Img_home_top.svg" alt="img_home_top">
        </div>
    </main>    
</body>
</html>
```

```css

main{
  width: 100%;
  height: 610px;
  background: #CFE5FF;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 200px;
}
.wrap {
  max-width: 1120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 1;
}

.main-txt{
  display: flex;
  flex-direction: column;
  width: 356px;
}
.main-title{
  color: var(--Secondary-700, #374151);
  font-family: Pretendard;
  font-size: 2.0833vw;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 56px */
}
.items-button{
  display: flex;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: var(--brand-blue, #3692FF);
  margin: 32px 0 60px;

  color: var(--Secondary-50, #F9FAFB);
  text-align: center;
  /* pretendard/xl-20px-semibold */
  font-family: Pretendard;
  font-size: 1.0417vw;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 160% */
}
main img{ 
  flex-shrink: 1;
  max-width: 746px; /* 최대값 */
  width: 100%; /* 유동적 크기 */
  height: auto; /* 이미지 비율 유지 */
}
```