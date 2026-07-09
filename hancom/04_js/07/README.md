# 07 · 함수 — 재사용하는 명령 묶음

> 자주 쓰는 명령을 **하나로 묶어 이름 붙인 것**, 이름만 부르면 척척 해줘요

---

## 🧠 개념 — 이게 뭐예요?

함수는 자주 쓰는 명령을 **하나로 묶어 이름 붙인 것**이에요. 그래서 그 이름만 부르면(이걸 "호출"이라고 해요) 묶어둔 일을 척척 해줘요. 마치 **자판기 버튼** 하나만 누르면 음료가 나오는 것과 똑같아요. 버튼 안에서 무슨 일이 일어나는지 몰라도, 버튼만 누르면 결과가 나오죠. 함수도 이름만 부르면 안에 적어둔 일을 알아서 다 해준답니다.

## 📂 폴더 구조

아래처럼 파일을 정리해 두면 돼요. (`#`으로 시작하는 글자는 "이건 무슨 파일이야" 하고 알려주는 메모예요)

```text
07/
├─ index.html        # 화면 (입력 + 버튼)
├─ styles/
│  └─ main.css       # 꾸미기
└─ scripts/
   └─ main.js        # 함수 만들고 호출
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
  <input id="a" type="number" value="4">
  <span>×</span>
  <input id="b" type="number" value="7">
  <button id="calc">곱하기</button>
  <p id="out">곱하기 버튼을 눌러봐</p>
  <script src="scripts/main.js"></script>
</body>
</html>
```

이 파일은 화면(뼈대)을 만들어요. 숫자 두 개를 적는 칸과 "곱하기" 버튼, 그리고 답이 보일 자리를 준비해 둬요.

## 🎨 styles/main.css

```css
/* 계산 결과(id="out")를 크고 굵게 */
#out { font-size: 20px; font-weight: 700; margin-top: 12px; }

/* 숫자 입력칸은 좁게 */
input { width: 60px; padding: 6px; font-size: 14px; }

/* 버튼에 안쪽 여백 */
button { padding: 6px 14px; font-size: 14px; }
```

여기서 색·크기 같은 꾸미기를 해요. 결과 글자는 크고 굵게, 입력칸은 좁게, 버튼은 안쪽 여백을 줘서 보기 좋게 만들어요.

## ⚙️ scripts/main.js

```js
// 1. 두 숫자를 곱하는 화살표 함수 (num1, num2 = 받아올 재료=매개변수)
//    => 뒤가 한 줄이면 { return } 없이 그 값이 바로 반환됨
const multiply = (num1, num2) => num1 * num2;

// 2. 입력칸 두 개와 결과 칸을 찾아 담기
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const out = document.querySelector("#out");

// 3. "곱하기" 버튼을 누르면 함수를 불러서(호출) 답을 표시
document.querySelector("#calc").addEventListener("click", () => {
  // Number( ): 입력칸 글자를 숫자로 바꿔 곱하기, 템플릿 리터럴로 문장 조립
  out.textContent = `${a.value} × ${b.value} = ${multiply(Number(a.value), Number(b.value))}`;
});
```

여기가 진짜 움직임을 만드는 부분이에요. `multiply`라는 화살표 함수를 만들어 두고, 버튼을 누를 때마다 그 함수를 불러서 두 숫자를 곱한 답을 템플릿 리터럴로 조립해 화면에 보여줘요.

> 🖥️ 실행하면 — 두 숫자를 넣고 곱하기를 누르면 multiply 함수가 그대로 호출됨

## 🔑 핵심 포인트

- **(num1, num2) => ...** — 화살표 함수 만들기, 괄호 안 **num1, num2**는 받아올 재료(매개변수)
- **한 줄 화살표 함수** — `{ return }` 없이 `=>` 뒤 값이 바로 **돌려주기**(반환)됨
- **`${ }` 템플릿 리터럴** — `+`로 잇지 않고 백틱 문장 안에 값을 끼워 넣음
- **multiply(4, 7)** — 재료 4와 7을 넣고 함수 부르기, 답 28이 나옴

---

🔜 **다음 단계** → [08 · 이벤트](../08/README.md)
