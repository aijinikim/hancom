# 16. HuggingFace

HuggingFace **Inference API**로 서버 없이 AI 모델 호출. LLM 대화 + 이미지 생성 실습.

## 배우는 것
- `InferenceClient`로 모델 호출 (`huggingface_hub`)
- 토큰(`HF_TOKEN`) 발급·`.env` 관리, 401/429 대처
- LLM 챗 완성(chat.completions) — DeepSeek 등
- 텍스트→이미지 생성(Text-to-Image)

## 코드
- `v16_01_key.md` : 토큰 발급·환경변수 설정
- `v16_02_deepseek.py` : LLM 챗 호출
- `v16_03_tti.py` : 텍스트→이미지 생성

## 참고
- 토큰: HF → Settings → Access Tokens (Inference 권한)
- 학습 허브 `guides/huggingface.html` (HuggingFace — 학습 허브)
- ※ 토큰은 코드에 넣지 말고 `.env`에만
