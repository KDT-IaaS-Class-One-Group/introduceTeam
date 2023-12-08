const express = require('express')
const app = express()
const port = 3001
const path = require('path')

app.use(express.static(path.join(__dirname, './public')))

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`)
})