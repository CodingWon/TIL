# ZeroCho Tv HTML / CSS 를

- 네이버 홈, 검색어, 쇼핑, 뉴스 등 중요한 키워드를 머리말(h1~h6) 으로 만든다.
- 웹접근성을 위해서 화면에서 보이지 않는 내용도 적절히 담아야 한다.
  - 모든 사람이 웹접근해서 사용할 수 있게 해야한다.

## 📘 레이아웃 잡기

- 가로의 영역을 먼저 확인 한 다음 세로로 나눠서 생각해본다.
- 시멘틱 태그로 등의 목적에 맞게 태그를 잡아준다.

```
<header> , <nav>, <main>, <footer>
```

## 📘 컨텐츠 가운데 정렬

```
<header>
     <div style="margin: 0 auto; width: 1080px;">
```

- 부모 header 아래 div를 두어서 컨텐츠가 가운데 정렬 될 수 있게 조절한다.

## 📘 block , inline , inline-block

- block

  - 너비 100%를 차지한다.

- inline

  - 컨텐츠 너비 높이만 차지한다.

- inline-block
  - 너비 높이를 지정할 수 있다.

## 📘 vertical-align

- 형제 태그끼리 height가 다를 경우 정렬을 맞을 때 사용
- display 가 inline, inline-block 이어야만 적용된다.
```
<div id="header-search">
    <a href="www.naver.com">
       <h1>
          네이버
        </h1>
        </a>
     <h2 class="blind">검색창</h2>
     <fieldset>
        <legend class="blind">검색</legend>
           <input type="text">
           <button class="blind">검색</button>
     </fieldset>
  </div>
```