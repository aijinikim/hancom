// 자신의 반 이름으로 20명 학생 데이터 가져오기
fetch('http://192.168.10.28:5000/hancom/김대진입니다/users', {
  headers: { 'Authorization': 'HANCOM' }
})
  .then(res => res.json())
  .then(students => {
    console.log(students)  // 20명 배열
    // 이 students 배열로 HTML 배치도 만들기
  })