import express from "express";
import tasks from "./data/mock.js";

const app = express();
// Express는 req body로 전달되는 json 데이터를 자동으로 JS 객체로 변환시켜주지 않는다. 
// json 데이터 -> js 객체 : 파싱 과정 필요
app.use(express.json()); 
// app.use() : app 전체에서 사용하겠다는 의미
// express.json() : request가 Content-Type: application/json 이면 바디를 파싱해서 JS 객체로 만들고 request의 바디 프로퍼티에 담아준다. 

// 첫번째 파라미터 : usl 경로
// 두번째 파라미터 : 실행할 콜백함수 (들어온 리퀘스트 객체, 돌려줄 리스폰스 객체)
app.get("/tasks", (req, res) => {
  /**
   * 쿼리 파라미터
   * - sort: 'oldest'인 경우 오래된 태스크 기준, default는 새로운 태스트 기준
   * - count: 태스크 개수
   *
   * 쿼리 파라미터는 쿼리 객체에 전달 - 문자열로 전달됨
   */
  const sort = req.query.sort;
  const count = Number(req.query.count);

  // 정렬 비교함수
  const compareFn =
    sort === "oldest"
      ? (a, b) => a.createdAt - b.createdAt
      : (a, b) => b.createdAt - a.createdAt;
  let newTasks = tasks.sort(compareFn);
  // count가 있으면 count만큼 task 잘라주기
  if (count) {
    newTasks = newTasks.slice(0, count);
  }

  res.send(newTasks); // JS 객체를 받으면 자동으로 JSON으로 변환해서 돌려준다.
});

app.get("/tasks/:id", (req, res) => {
  // 주소에서 동적인 부분을 : 으로 표시하고 url 파라미터라고 부른다.
  // url 파라미터는 params 객체로 전달 - 문자열로 전달됨
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (task) {
    res.send(task);
  } else {
    // status 메소드를 이용해서 status 코드 설정가능
    res.status(404).send({ message: "Cannot find given id" });
  }
});

app.post("/tasks", (req, res) => {
  // 위에서 파싱을 해둬서 그냥 body 프로퍼티로 접근 가능
  const newTask = req.body;

  // 진짜 하나하나 정보값 넣어주기 -> 나중에 DB 쓰면 이럴 필요 x
  const ids = tasks.map((task) => task.id);
  newTask.id = Math.max(...ids) + 1;
  newTask.isComplete = false;
  newTask.createdAt = new Date();
  newTask.updatedAt = new Date();
  
  tasks.push(newTask);
  res.status(201).send(newTask);
});

app.patch("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (task) {
    // task가 있다면 req로 들어온 body의 정보로 덮어씌워야함
    Object.keys(req.body).forEach((key) => {
      task[key] = req.body[key]; // 기존의 task 값을 body 값으로 변경
    });
    task.updatedAt = new Date(); // 업데이트 시간을 현재 시간으로 변경 
    res.send(task);
  } else {
    res.status(404).send({ message: "Cannot find given id" });
  }
});

// 3000 : 포트번호
app.listen(3000, () => console.log("Server start!"));
