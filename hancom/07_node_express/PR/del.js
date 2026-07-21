const express = require("express") // 1. 꺼내기
const app = express() // 2. 만들기

// 3. 규칙만들기
app.delete('/api/users/:id', (req, res) => {
    users = users.filter(u => u.id !== Number(req.params.id))
    res.json({ok: true, 남은: users})
})

// 4. 문열기
app.listen(3000, async () => {
    const res = await fetch("http://192.168.10.28:5000/hancom/김대진입니다/users/24", {
        headers: { 'Authorization': 'HANCOM' },
        method: "DELETE"
    })
    console.log(await res.json())
})