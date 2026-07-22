# 15. OpenAPI

공공/외부 **REST API**를 파이썬으로 호출해 데이터 받아 쓰기. 국가교통정보(ITS) API 실습.

## 배우는 것
- API 인증키 발급·요청 URL 구성 (쿼리스트링)
- `urllib`로 요청 → 응답 흐름: `HTTPResponse → bytes → str(decode) → dict(json.loads)`
- `pandas.json_normalize`로 JSON → 표(DataFrame) 변환
- ITS 실시간 CCTV 정보 조회 + 영상 스트림 열기
- CCTV 영상에 **YOLO 객체탐지** 결합

## 코드
- `v15_01_its_apikey.md` : 인증키 발급 안내
- `v15_02_cctv_its.py` : CCTV 정보 조회 기본
- `v15_03_cctv_its_def.py` : 함수화 버전
- `v15_04_cctv_its_yolo.py` : CCTV + YOLO 탐지

## 참고
학습 허브 `guides/openapi.html` (OpenAPI — 학습 허브)
