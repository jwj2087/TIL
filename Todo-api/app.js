import express from 'express';

const app = express(); 

// 첫번째 파라미터 : usl 경로
// 두번째 파라미터 : 실행할 콜백함수 (들어온 리퀘스트 객체, 돌려줄 리스폰스 객체)
app.get('/hello', (req, res) => {
  res.send('hello express');
});
// 3000 : 포트번호
app.listen(3000, () => console.log('Server start!'));