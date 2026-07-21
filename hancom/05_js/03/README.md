# 03 · 변수 — 값을 담는 상자

> 변수는 이름표 붙은 **상자**, 그 안에 값을 넣어두고 필요할 때 꺼내 쓰기

---

## 🧠 개념 — 이게 뭐예요?

변수는 이름표 붙은 **상자**예요. 그 안에 숫자나 글자 같은 값을 넣어두고, 필요할 때 꺼내 씁니다. 상자 이름만 부르면 안에 든 값이 따라 나와요.

예를 들어 "내이름" 이라는 상자에 `홍길동` 이라는 글자를 넣어두면, 나중에 "내이름" 이라고만 부르면 `홍길동` 이 튀어나오는 거예요. 한 번 담아두면 같은 값을 여러 번 꺼내 쓸 수 있어서 아주 편리합니다.

> 🖥️ 실행하면 — 이름을 넣고 버튼을 누르면, 입력값이 변수에 담겨 인사로 나옴

---

## 📂 폴더 구조

아래처럼 파일 3개가 한 폴더 안에 있어요. 각자 맡은 일이 다릅니다.

```text
03/
├─ index.html        # 화면 (입력 + 버튼)
├─ styles/
│  └─ main.css       # 꾸미기
└─ scripts/
   └─ main.js        # 변수에 담고 꺼내기
```

---

## 📄 index.html

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>
  <input id="name" placeholder="이름 입력">
  <button id="greet">인사하기</button>
  <p id="out">이름을 넣고 버튼을 눌러봐</p>
  <script src="scripts/main.js"></script>
</body>
</html>
```

이 파일은 화면(뼈대)을 만들어요. 이름을 적는 칸과 버튼, 그리고 결과가 나올 글자 자리를 놓습니다.

---

## 🎨 styles/main.css

```css
/* 결과 문장(id="out")을 크고 굵게 */
#out { font-size: 18px; font-weight: 700; margin-top: 12px; }

/* 입력칸과 버튼에 안쪽 여백 */
input, button { padding: 8px 12px; font-size: 14px; }
```

여기서 색·크기 같은 꾸미기를 해요.

---

## ⚙️ scripts/main.js

```js
// 1. 입력칸과 결과 칸을 찾아 상자에 담기
const nameInput = document.querySelector("#name");
const out = document.querySelector("#out");

// 2. "인사하기" 버튼을 누르면 실행 (화살표 함수)
document.querySelector("#greet").addEventListener("click", () => {
  // 3. 입력한 글자를 myName 변수(상자)에 담기 (.value = 입력칸 글자)
  let myName = nameInput.value;
  // 4. 템플릿 리터럴 `${ }`로 값을 문장에 끼워 넣기
  out.textContent = `안녕, ${myName}!`;
});
```

여기가 진짜 움직임을 만드는 부분이에요. 버튼 클릭은 **화살표 함수** `() => {}`로 처리하고, 입력한 이름을 상자에 담았다가 **템플릿 리터럴** `` `${myName}` ``로 인사 문장에 끼워 넣습니다.

---

## 🔑 핵심 포인트

- **let** — "새 상자 만들게" 하는 마법 단어
- **=** — "이 값을 상자에 넣어" 라는 뜻, 같다는 비교가 아님
- 상자에 든 값은 나중에 **바꿀 수도** 있음
- **템플릿 리터럴** `` `${myName}` `` — `+`로 잇지 않고 백틱 안에 값을 바로 끼워 넣기

---

🔜 **다음 단계** → [04 · 데이터 타입](../04/README.md)
