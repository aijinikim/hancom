# 04 · 데이터 타입 — 상자에 담는 값의 종류

> 상자에 담는 값에도 **종류**가 있어요

---

## 🧠 개념 — 이게 뭐예요?

상자(변수)에 담는 값에도 **종류**가 있어요. 글자·숫자·참거짓·여러 개 묶음 등 여러 가지가 있는데, 종류에 따라 쓰는 법이 조금씩 다릅니다.

예를 들어 글자는 따옴표로 감싸야 하지만, 숫자는 따옴표 없이 그냥 적어요. 그래서 "이 값이 어떤 종류인지" 아는 게 중요하고, 그때 `typeof`를 써요.

### 값의 종류 (7가지)

| 종류 | 설명 | 예시 |
|------|------|------|
| `String` | 글자 (따옴표로 감싸기) | `"Bob"` |
| `Number` | 숫자 (따옴표 없음) | `10` |
| `Boolean` | 참 또는 거짓 | `true`, `false` |
| `undefined` | 값을 아직 안 넣음 (선언만 한 변수) | `let x;` 한 뒤의 x |
| `null` | 의도적 "비어있음" 표시 | `null` |
| `Array` | 여러 값을 한 줄에 묶기 | `[1, "Bob", 10]` |
| `Object` | 거의 모든 것 (덩어리) | `{ name: "Bob" }` |

> ⚠️ `typeof null` 은 `"object"` 로 나와요 (JavaScript의 유명한 옛 버그). `Array`도 `typeof`로는 `"object"` 입니다.

> 🖥️ 실행하면 — 버튼 7개로 String·Number·Boolean·undefined·null·Array·Object 각각의 값과 typeof를 보여 줌

## 📂 폴더 구조

```text
04/
├─ index.html        # 화면 (버튼들)
├─ styles/
│  └─ main.css       # 꾸미기
└─ scripts/
   └─ main.js        # 값의 타입 알아내기
```

이 단계에서 만들 파일들이에요. `index.html`은 화면, `styles` 폴더는 꾸미기, `scripts` 폴더는 움직임을 담당해요.

## 📄 index.html

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>
  <button id="bStr">글자</button>
  <button id="bNum">숫자</button>
  <button id="bBool">참거짓</button>
  <button id="bUndef">undefined</button>
  <button id="bNull">null</button>
  <button id="bArr">배열</button>
  <button id="bObj">객체</button>
  <p id="out">버튼을 누르면 값과 타입을 보여줘</p>
  <script src="scripts/main.js"></script>
</body>
</html>
```

이 파일은 화면(뼈대)을 만들어요. 7가지 타입 버튼과 결과를 보여 줄 칸(`out`)이 들어 있어요.

## 🎨 styles/main.css

```css
/* 버튼들에 여백 + 사이 간격 */
button { padding: 8px 12px; font-size: 14px; margin: 2px; }

/* 결과(id="out")를 크고 굵게 */
#out { font-size: 16px; font-weight: 700; margin-top: 12px; }
```

여기서 색·크기 같은 꾸미기를 해요.

## ⚙️ scripts/main.js

```js
// 결과 칸을 찾아 담기
const out = document.querySelector("#out");

// 값을 받아 "값 (타입: ...)" 형태로 보여 주는 화살표 함수
const show = (value) => {
  // 객체·배열은 보기 좋게 JSON 글자로, 나머지는 그대로
  const shown = (typeof value === "object" && value !== null) ? JSON.stringify(value) : value;
  // 템플릿 리터럴 `${ }`로 값과 타입(typeof)을 한 문장에 끼워 넣기
  out.textContent = `${shown}  (타입: ${typeof value})`;
};

// 선언만 하고 값을 안 넣으면 그 변수는 undefined (← 실제 사용 예시)
let empty;

// 버튼마다 서로 다른 타입의 값을 넣어 호출 (7가지 타입 모두)
document.querySelector("#bStr").addEventListener("click", () => show("안녕"));          // String
document.querySelector("#bNum").addEventListener("click", () => show(10));              // Number
document.querySelector("#bBool").addEventListener("click", () => show(true));            // Boolean
document.querySelector("#bUndef").addEventListener("click", () => show(empty));           // undefined (값 미할당)
document.querySelector("#bNull").addEventListener("click", () => show(null));             // null → typeof는 "object" (유명한 버그)
document.querySelector("#bArr").addEventListener("click", () => show([1, "Bob", 10]));   // Array → object
document.querySelector("#bObj").addEventListener("click", () => show({ name: "Bob" }));  // Object
```

여기가 진짜 움직임을 만드는 부분이에요. `typeof`(타입을 알려 주는 단어)를 쓰면 그 값이 글자인지 숫자인지 알 수 있어요. `let empty;` 처럼 값을 안 넣은 변수는 `undefined`, 의도적으로 비울 땐 `null` 을 써요. 함수는 **화살표 함수**(`() => {}`)로, 결과 문장은 **템플릿 리터럴**(`` `${ }` ``)로 값과 타입을 끼워 넣어요.

## 🔑 핵심 포인트

- 글자는 꼭 **따옴표**로 감싸기, 숫자는 안 감싸기
- **typeof 값** — 그 값의 타입을 글자로 알려 줌 (`"string"`·`"number"`·`"object"` …)
- **undefined**(값 미할당) · **null**(의도적 비움) 도 타입의 하나
- ⚠️ `typeof null === "object"` (옛 버그), `Array`도 `typeof`로는 `"object"`
- 문자열 합치기는 `+` 대신 **템플릿 리터럴** `` `${값}` `` 로, 함수는 **화살표 함수** `() => {}` 로

---

🔜 **다음 단계** → [05 · 연산자 & 주석](../05/README.md)
