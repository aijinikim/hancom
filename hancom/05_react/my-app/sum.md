# my-app 투어 요약 — React + Vite 미니멀 스타터

> HMR과 ESLint 규칙이 기본 제공되는 최소 구성의 React 개발 환경

---

## 앱 부트업 프로세스 흐름

```
[브라우저 요청]
      │
      ▼
┌─────────────────────┐
│   index.html        │  ← 브라우저가 맨 처음 받는 파일
│   <div id="root">   │  ← React가 주입될 빈 컨테이너
│   <script type=     │
│    "module" ...>    │
└────────┬────────────┘
         │ 로드
         ▼
┌─────────────────────┐
│   vite.config.js    │  ← HMR·JSX변환 스위치
│   plugins:[react()] │  ← 이 한 줄이 모든 파일에 HMR 활성화
└────────┬────────────┘
         │ configures
         ▼
┌─────────────────────┐
│   src/main.jsx      │  ← React 진입점
│   createRoot(...)   │  ← HTML div#root 와 React 연결
│   <StrictMode>      │  ← 개발 전용 감시 모드
│     <App />         │
│   </StrictMode>     │
└────────┬────────────┘
         │ imports
         ├──────────────────────────┐
         ▼                          ▼
┌─────────────────┐      ┌─────────────────────┐
│  src/App.jsx    │      │  src/index.css       │
│  - useState     │      │  - 전역 CSS 변수     │
│  - 카운터 기능  │      │  - 폰트·색상·버튼    │
│  - 루트 컴포넌트│      │  - 기반 스타일       │
└────────┬────────┘      └─────────────────────┘
         │ imports
         ▼
┌─────────────────────┐
│  src/App.css        │
│  - logo 애니메이션  │
│  - 카드 레이아웃    │
│  - 카운터 버튼 스타일│
└─────────────────────┘
```

---

## 설정 레이어 (빌드·도구)

```
package.json          → 의존성 선언 (react, vite, eslint)
vite.config.js        → 빌드 설정 + HMR 활성화
eslint.config.js      → 코드 품질 규칙 (react-hooks, react-refresh)
index.html            → HTML 진입점
README.md             → 프로젝트 소개
```

---

## 투어 9단계 요약

| # | 파일 | 핵심 내용 |
|---|------|-----------|
| 1 | `README.md` | 스택 소개 — React + Vite, HMR, ESLint 기본 제공 |
| 2 | `package.json` | 의존성 선언 — `dependencies` vs `devDependencies` 구분 |
| 3 | `index.html` | HTML 셸 — `<div id="root">` 가 React 마운트 지점 |
| 4 | `vite.config.js` | HMR 스위치 — `react()` 플러그인 하나로 전체 활성화 |
| 5 | `src/main.jsx` | React 진입점 — `createRoot` + `StrictMode` 로 앱 시작 |
| 6 | `src/index.css` | 전역 스타일 — CSS 변수로 색상·폰트 전역 관리 |
| 7 | `src/App.jsx` | 루트 컴포넌트 — `useState` 로 카운터 상태 관리 |
| 8 | `src/App.css` | 컴포넌트 스타일 — logo 애니메이션, 버튼 모양 |
| 9 | `eslint.config.js` | 코드 감시 — hook 규칙 강제 + Fast Refresh 호환 검사 |

---

## 핵심 개념 정리

### HMR (Hot Module Replacement)
코드 저장 시 **바뀐 파일만** 브라우저에 즉시 교체.  
페이지 새로고침 없음 → 카운터 상태 유지됨.  
`vite.config.js`의 `react()` 플러그인이 스위치.

### StrictMode
`src/main.jsx`에서 `<App />`을 감싸는 **개발 전용 감시 도구**.  
컴포넌트를 두 번 렌더링해 부작용 조기 감지.  
프로덕션 빌드에서는 자동으로 제거됨.

### CSS 계층 구조
```
index.css (전역 기반)
    └── App.css (컴포넌트 전용)
```
전역 스타일이 먼저 쌓이고, 컴포넌트 스타일이 덮어씌워지는 구조.

### createRoot
React 18 API. `div#root`에 React 렌더 트리를 붙이는 역할.  
구버전 `ReactDOM.render` 대체 → Concurrent Mode 활성화.

---

## 아키텍처 레이어

```
┌─────────────────────────────────────────┐
│  UI 레이어                              │
│  main.jsx · App.jsx · App.css · index.css│
├─────────────────────────────────────────┤
│  설정 레이어                            │
│  vite.config.js · eslint.config.js      │
│  package.json · index.html · README.md  │
└─────────────────────────────────────────┘
```
