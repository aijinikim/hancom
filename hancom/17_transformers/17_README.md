# 17. Transformers

HuggingFace `transformers`의 **pipeline**으로 NLP 태스크를 한 줄에 실행. 모델 로컬 다운로드·추론.

## 배우는 것
- `pipeline("태스크명")` = 모델+토크나이저 자동 결합
- 문장 유사도(임베딩)
- 감정 분석(sentiment) — 2분류/3분류
- 텍스트 생성(GPT-2 등)
- 요약(summarization, T5) + 번역 연계
- 태스크별 모델 선택·언어 한계(영어 vs 한국어)

## 코드
- `v17_01_sen_en_similar.py` : 문장 유사도
- `v17_02_sen_en_senti.py` : 감정 분석
- `v17_03_sen_en_gener.py` : 텍스트 생성
- `v17_04_sen_en_sum.py` : 요약
- `v17_05_sen_en_sum_trans.py` : 요약 + 번역

## 참고
학습 허브 `guides/transformers.html` (Transformers — 학습 허브)
※ 모델 가중치는 자동 캐시(`~/.cache/huggingface`), 저장소 제외
