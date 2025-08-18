import express from "express";
import tasks from "./data/mock.js";

const app = express();

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

// 3000 : 포트번호
app.listen(3000, () => console.log("Server start!"));
