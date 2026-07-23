from paddleocr import PaddleOCR

# 1. OCR 모델 준비 (3.x: use_textline_orientation)
ocr = PaddleOCR(use_textline_orientation=True, lang='korean')

# 2. 이미지에서 글자 추출 (3.x: predict, cls 없음)
result = ocr.predict("paddle.png")

# 3. 결과 방어
if not result:
    print("추출된 글자 없음")
else:
    print("=" * 40)
    print("[라인별 추출]")
    print("=" * 40)

    all_texts = []
    for res in result:
        texts = res['rec_texts']       # 글자 리스트
        scores = res['rec_scores']     # 신뢰도 리스트
        for text, conf in zip(texts, scores):
            all_texts.append(text)
            print(f"{text}   (신뢰도 {conf:.2f})")

# 4. 전체 문장 합쳐 출력
print("\n" + "=" * 40)
print("[전체 텍스트]")
print("=" * 40)
print(" ".join(all_texts))