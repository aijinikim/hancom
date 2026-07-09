# 06 · 조건문 — 만약 ~라면

> "만약 이렇다면 이것을 하고, 아니면 저것을 해" 라고 컴퓨터에게 시키는 갈림길

---

## 🧠 개념 — 이게 뭐예요?

"**만약** 이렇다면 이것을 하고, **아니면** 저것을 해" 라고 컴퓨터에게 시키는 갈림길, **if**(만약)와 **else**(아니면)로 길을 나누기

우리도 매일 갈림길에서 결정을 해요. "만약 비가 오면 우산을 가져가고, 아니면 그냥 나간다" 처럼요. 컴퓨터도 똑같아요. `if`(만약)라는 단어로 "이 조건이 맞으면 이걸 해" 라고 알려주고, `else`(아니면)라는 단어로 "그게 아니면 저걸 해" 라고 알려주는 거예요.

> 🖥️ 실행하면 — 아이스크림을 고르고 확인을 누르면 if/else 코드가 그대로 작동

## 📂 폴더 구조

아래처럼 파일 3개가 모여서 하나의 작은 프로그램이 돼요.

```text
06/
├─ index.html        # 화면 (선택 + 버튼)
├─ styles/
│  └─ main.css       # 꾸미기
└─ scripts/
   └─ main.js        # 조건 판단
```

## 📄 index.html

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>
  <select id="flavor">
    <option value="chocolate">chocolate</option>
    <option value="vanilla">vanilla</option>
    <option value="strawberry">strawberry</option>
  </select>
  <button id="check">확인</button>
  <p id="result">아이스크림을 고르고 확인을 눌러봐</p>
  <script src="scripts/main.js"></script>
</body>
</html>
```

이 파일은 화면(뼈대)을 만들어요. 아이스크림을 고르는 목록과 확인 버튼, 그리고 결과를 보여줄 문장 자리가 들어 있어요.

## 🎨 styles/main.css

```css
/* 결과 문장(id="result")을 크고 굵게 */
#result { font-size: 18px; font-weight: 700; margin-top: 12px; }

/* 선택 목록과 버튼에 안쪽 여백 */
select, button { padding: 8px 12px; font-size: 14px; }
```

여기서 색·크기 같은 꾸미기를 해요. 결과 문장은 크고 굵게, 선택 목록과 버튼은 보기 좋게 여백을 넣었어요.

## ⚙️ scripts/main.js

```js
// 1. 선택 목록(flavor)과 결과 문장(result)을 찾아 담기
const flavor = document.querySelector("#flavor");
const result = document.querySelector("#result");

// 2. "확인" 버튼을 클릭하면 조건을 판단 (화살표 함수)
document.querySelector("#check").addEventListener("click", () => {
  // 3. 만약(if) 고른 값이 "chocolate"와 같으면(===) 이 문장
  if (flavor.value === "chocolate") {
    result.textContent = "와! 초코 아이스크림 좋아! 🍫";
  } else if (flavor.value === "vanilla") {
    // 4. 첫 조건이 거짓이면 다음 조건(else if)을 검사
    result.textContent = "바닐라도 깔끔하니 좋지! 🍦";
  } else {
    // 5. 위 조건이 모두 거짓이면(else) 이 문장
    result.textContent = "음... 그래도 초코가 최고인데...";
  }
});
```

여기가 진짜 움직임을 만드는 부분이에요. 확인 버튼을 누르면, 고른 아이스크림이 초코(chocolate)인지 먼저 보고, 아니면 바닐라(vanilla)인지 다시 보고, 그것도 아니면 마지막 문장을 보여줘요.

## 🔑 핵심 포인트

- **if (조건)** — 괄호 안 조건이 **참(true)**이면 바로 아래 중괄호 실행
- **else if (조건)** — 앞 조건이 거짓일 때 다음 조건을 검사 (갈림길 여러 개)
- **else** — 위 조건이 모두 거짓이면 이쪽 실행
- **===** — 두 값이 같은지 비교, 결과는 참 또는 거짓
- **() => {}** — 화살표 함수로 클릭 시 실행할 동작 전달

---

🔜 **다음 단계** → [07 · 함수](../07/README.md)
