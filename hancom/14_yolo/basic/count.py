from ultralytics import YOLO   # YOLO 객체 탐지 모델
import cv2                     # OpenCV — 영상 처리·그리기 라이브러리

# 1. CCTV 스트리밍 URL 설정
stream_url = "http://210.99.70.120:1935/live/cctv009.stream/playlist.m3u8"

cap = cv2.VideoCapture(stream_url)

# 2. YOLO 모델 로드 (레포 공통 모델)
model = YOLO("yolo11n.pt")

# 3. 위험 판단 기준 (탐지 객체 수) — 필요 시 조절
WARNING_THRESHOLD = 5

# 4. 실시간 프레임 처리
while cap.isOpened():                          # 스트림이 열려 있는 동안 반복
    success, frame = cap.read()                # 프레임 한 장 읽기
    if not success:
        print("웹캠을 못 읽었습니다.")
        break                                  # 읽기 실패 → 루프 종료

    # 4-1. YOLO 추론 (verbose=False로 프레임마다 로그 억제)
    results = model(frame, verbose=False)

    # 4-2. 탐지 박스 그린 프레임 생성
    annotated_frame = results[0].plot()

    # 4-3. 실제 탐지 객체 수
    count = len(results[0].boxes)              # 이번 프레임에서 탐지된 전체 객체 수

    # 4-4. 개수 기준 상태·색 결정
    if count >= WARNING_THRESHOLD:
        status = "Warning"
        color = (0, 0, 255)                    # 빨강 (BGR)
    else:
        status = "Safe"
        color = (255, 0, 0)                    # 파랑 (BGR)

    # 4-5. 탐지 객체 수 및 상태 화면에 표시
    cv2.putText(
        annotated_frame,                        # ① 글자를 그릴 영상(박스 그린 프레임)
        f"Detected : {count}, {status}",        # ② 출력할 문자열
        (10, 30),                               # ③ 좌측 상단 시작 좌표
        cv2.FONT_HERSHEY_SIMPLEX,               # ④ 폰트 스타일
        1,                                      # ⑤ 폰트 크기 배율
        color,                                  # ⑥ 글자색 (B, G, R)
        2,                                      # ⑦ 글자 두께
        cv2.LINE_AA                             # 안티앨리어싱
    )

    # 4-6. OpenCV 윈도우 출력
    cv2.imshow("CCTV Detection", annotated_frame)

    # 4-7. q 키를 누르면 종료
    if cv2.waitKey(1) & 0xFF == ord('q'):
        print('q 키를 눌러서 종료합니다.')
        break

# 5. 자원 해제
cap.release()              # 스트림 해제
cv2.destroyAllWindows()    # 모든 OpenCV 창 닫기