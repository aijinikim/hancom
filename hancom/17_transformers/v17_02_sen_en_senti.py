from transformers import pipeline
# pipeline : 텍스트, 이미지 등 다양한 AI 테스크를 쉽게 실행할 수 있는 도구

# 1. 감정 분석 파이프라인 생성
classifier = pipeline(
    "sentiment-analysis",
    model="cardiffnlp/twitter-roberta-base-sentiment-latest"
    )

# 2. 감정 분석할 문장 입력
# text = "I'm feeling really gerat today"
# 감정 분석 결과 : POSITIVE
# 감정 분석 점수 : 0.9808

# text = "I'm having a hard time today"
# 감정 분석 결과 : NEGATIVE
# 감정 분석 점수 : 0.9988

text = "The book is on the table."
# 감정 분석 결과 : neutral
# 감정 분석 점수 : 0.8806
results = classifier(text)

# 3. 결과 확인
print(f"감정 분석 결과 : {results[0]['label']}")    # negative | positive 
print(f"감정 분석 점수 : {results[0]['score']:.4f}")    # 확률 값 0 ~ 1