# 05 · 연산자 & 주석

> 연산자는 값을 **더하고 비교하는 기호**, 주석은 사람만 읽는 메모

---

## 🧠 개념 — 이게 뭐예요?

연산자는 값을 **더하고 비교하는 기호**예요. `+`, `-`, `*`, `/` 같은 기호로 숫자를 계산하거나, 두 값이 같은지 다른지 비교할 수 있어요.

주석은 컴퓨터는 무시하고 **사람만 읽는 메모**예요. 코드 사이에 `// 이건 메모야` 처럼 적어두면, 컴퓨터는 그 줄을 실행하지 않고 건너뛰어요. 나중에 코드를 다시 볼 때 "여기서 뭘 했더라?" 하고 헷갈리지 않게 도와주는 친절한 쪽지라고 생각하면 돼요.

## 📂 폴더 구조

아래처럼 파일 3개가 한 폴더에 모여 하나의 작은 계산기를 만들어요.

```text
05/
├─ index.html        # 화면 (숫자 + 기호 + 버튼)
├─ styles/
│  └─ main.css       # 꾸미기
└─ scripts/
   └─ main.js        # 연산자로 계산
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
  <input id="a" type="number" value="6">
  <select id="op">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>
  <input id="b" type="number" value="9">
  <button id="calc">계산</button>
  <p id="out">두 숫자와 기호를 고르고 계산을 눌러봐</p>
  <script src="scripts/main.js"></script>
</body>
</html>
```

이 파일은 화면(뼈대)을 만들어요. 숫자 두 칸, 기호 고르는 칸, 계산 버튼, 결과 보여줄 자리를 놓아요.

## 🎨 styles/main.css

```css
/* 숫자 입력칸은 좁게 */
input { width: 60px; padding: 6px; font-size: 14px; }

/* 기호 선택과 버튼에 여백 */
select, button { padding: 6px 10px; font-size: 14px; }

/* 결과(id="out")를 크고 굵게 */
#out { font-size: 18px; font-weight: 700; margin-top: 12px; }
```

여기서 색·크기 같은 꾸미기를 해요.

## ⚙️ scripts/main.js

```js
// 1. 입력칸·기호 선택·결과 칸을 찾아 담기
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const op = document.querySelector("#op");
const out = document.querySelector("#out");

// 2. "계산" 버튼을 누르면 실행 (화살표 함수)
document.querySelector("#calc").addEventListener("click", () => {
  // Number( ): 입력칸 글자 "3"을 숫자 3으로 바꾸기
  const x = Number(a.value);
  const y = Number(b.value);
  let result;   // 결과는 나중에 정해지니 let
  // 3. 고른 기호(op)에 따라 다른 연산자로 계산 (=== 는 같은지 비교)
  if (op.value === "+") { result = x + y; }
  else if (op.value === "-") { result = x - y; }
  else if (op.value === "*") { result = x * y; }
  else { result = x / y; }
  // 템플릿 리터럴로 "3 + 5 = 8" 같은 문장 조립
  out.textContent = `${x} ${op.value} ${y} = ${result}`;
});
```

여기가 진짜 움직임을 만드는 부분이에요. 버튼 클릭은 **화살표 함수**(`() => {}`)로 처리하고, 결과 문장은 **템플릿 리터럴**(`` `${x} ${op.value} ${y} = ${result}` ``)로 조립해요.

> 🖥️ 실행하면 — 두 숫자와 기호를 고르고 계산을 누르면 연산자가 실제로 작동

## 🔣 연산자 한눈에 보기

| 기호 | 역할 | 예시 |
|------|------|------|
| `+` | 더하기 / 글자 잇기 | `6 + 9` → 15 |
| `- * /` | 빼기·곱하기·나누기 | `8 * 2` → 16 |
| `=` | 상자에 값 넣기 | `let x = 3;` |
| `===` | 같은지 비교 (참/거짓) | `x === 3` → true |
| `!==` | 다른지 비교 | `x !== 5` → true |

## 🔑 핵심 포인트

- **+**는 숫자끼리는 더하기, 글자끼리는 **이어 붙이기** — 문장 조립은 **템플릿 리터럴**(`` `${ }` ``)이 더 깔끔
- **=**는 넣기, **===**는 같은지 비교, 헷갈리지 않기
- 이벤트 처리는 **화살표 함수**(`() => {}`)로 짧게
- **//** 뒤는 주석 — 컴퓨터는 무시, 사람만 읽는 메모

---

🔜 **다음 단계** → [06 · 조건문](../06/README.md)
