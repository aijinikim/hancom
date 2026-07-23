# 한컴 프로그래밍 교육 자료

웹 개발 기초부터 React, 백엔드, AI 연동, 배포, 데이터·컴퓨터비전(YOLO), 공공 API·LLM·NLP·OCR, 데이터앱(Streamlit)·데모 UI(Gradio)까지의 통합 교육 커리큘럼입니다.

## 📚 커리큘럼 구성

### 01_vscode
- VSCode 개발 환경 설정
- 필수 확장프로그램 소개

### 02_html
- HTML 기초 문법
- 시맨틱 마크업
- 폼(form) 및 입력 요소

### 03_css
- CSS 선택자 및 스타일링
- 레이아웃 (Flexbox, Grid)
- 반응형 웹 디자인

### 04_netlify
- 정적 사이트 무료 배포·호스팅
- 드래그&드롭 배포, 커스텀 도메인·HTTPS 자동
- Git 연동 자동 재배포(CI/CD)

### 05_js
- JavaScript 기초 문법
- DOM 조작
- 이벤트 핸들링
- 비동기 처리 (Promise, async/await)

### 06_react
- React 컴포넌트 기초
- State와 Props
- 함수형 컴포넌트
- React Hooks

### 07_node_express
- Node.js + Express 서버 기초
- REST API (GET / POST / PUT / DELETE)
- 미들웨어 (cors, 요청 로거)
- 프론트-서버 연동 (fetch 기반 CRUD)

### 08_groq
- Groq API 연동
- 환경변수 관리 (dotenv, .env)
- LLM 모델 호출 및 AI 응답 처리

### 09_vercel
- Vercel 웹 배포
- GitHub 저장소 연동 자동 배포
- Groq 챗봇 웹사이트 배포 실습

### 10_claude_web
- Claude Code 활용 웹사이트 제작 — 프롬프팅 전략별 결과 비교
- `01_no_plan` : 계획 없이 프롬프트
- `02_yes_plan` : 계획(Plan) 모드 활용
- `03_yes_plan_and_qna` : 계획 + Q&A 방식
- `04_fronted_design` : frontend-design 스킬 적용
- `05_frontend_design_md` : 디자인 명세(MD) 기반 제작
- `06_frontend_design_ko_md` : 한글 디자인 명세 기반 제작
- `07_haiku` : Haiku 모델 활용

### 11_anaconda
- Anaconda 설치 및 파이썬 개발 환경 구성
- 가상환경(conda) 생성·관리, 패키지 설치

### 12_python
- 파이썬 기초 문법 — 변수/자료형, 연산자, 리스트, f-string
- 제어문 — 조건문(if), 반복문(for / while), zip
- 함수 — def / return, 예외 처리(try / except)
- 파일 입출력(with), 클래스, 람다(lambda)
- 콘솔 출력 꾸미기 — pyfiglet, termcolor

### 13_data
- 데이터 다루기 & 이미지 전처리·증강(augmentation)
- 밝기 조정 / 회전 / 좌우반전, 로컬 데이터 수집
- 라벨·클래스 관리 (classes.txt)

### 14_yolo
- 실시간 객체 탐지(Object Detection) — YOLO
- 기초: 탐지·분류·세그멘테이션·포즈 추정
- 심화: SAHI 슬라이스 추론, FastSAM 등 고급 기법
- ※ 모델 가중치(.pt 등)는 용량 커서 저장소 제외

### 15_openapi
- 공공/외부 REST API 호출 (국가교통정보 ITS)
- 인증키·요청 URL, `urllib` → JSON → DataFrame 변환
- 실시간 CCTV 조회 + YOLO 객체탐지 결합

### 16_huggingface
- HuggingFace Inference API로 서버 없이 AI 호출
- `InferenceClient` — LLM 챗(DeepSeek), 텍스트→이미지 생성
- 토큰(HF_TOKEN) `.env` 관리, 401/429 대처

### 17_transformers
- `transformers` pipeline으로 NLP 태스크 실행
- 문장 유사도 / 감정 분석 / 텍스트 생성 / 요약·번역
- 태스크별 모델 선택, 언어 한계(영어 vs 한국어)

### 18_ocr
- 이미지 → 텍스트 추출 (OCR)
- Tesseract · PaddleOCR 비교, 전처리로 인식률 향상

### 19_streamlit
- 파이썬만으로 데이터 웹앱 제작 (Streamlit)
- 위젯·데이터프레임·차트 출력, 실시간 상호작용 UI
- `streamlit run` 으로 실행

### 20_gradio
- ML 데모 UI를 함수 하나로 생성 (Gradio)
- `gr.Interface`/`gr.Blocks`, 입력·출력 컴포넌트
- 이미지 처리·모델 추론 데모, 공유 링크

## 📖 학습 방법

각 폴더별 순차적 학습을 권장합니다.
폴더 내 번호 순서대로 진행하면서 예제를 실습합니다.

## 🛠️ 개발 환경

- Node.js 18+
- VSCode
- Claude Code (AI 코딩 도구)
- Python 3 / Anaconda
- 브라우저 (Chrome, Firefox 등)

---

*마지막 업데이트: 2026-07-23*
