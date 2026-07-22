# <이미지에서 한글 추출>
from paddleocr import PaddleOCR

# 1. OCR 모델 준비 (한국어, 기울기 자동보정)
ocr = PaddleOCR(use_angle_cls=True, lang='korean')

# 2. 이미지에서 글자 추출
result = ocr.predict("paddle.png")

# 3. 결과 방어 (글자 못 찾으면 None 나옴)
if not result or result[0] is None:
    print("추출된 글자 없음")
else:
    lines = result[0]

    print("=" * 40)
    print("[라인별 추출]")
    print("=" * 40)

    texts = []
    for line in lines:
        text, conf = line[1]          # line = [좌표, (글자, 신뢰도)]
        texts.append(text)
        print(f"{text}   (신뢰도 {conf:.2f})")

    # 4. 전체 문장 합쳐서 출력
    print("\n" + "=" * 40)
    print("[전체 텍스트]")
    print("=" * 40)
    print(" ".join(texts))