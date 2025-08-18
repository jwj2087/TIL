// mongo DB 연결 필요
import mongoose from 'mogose';
// mongo DB의 경우 없는 필드가 들어왔을때는 그냥 무시해버린다.
const TaskSchema = new mongoose.Schema(
  {
    title: {
      typ: String,
      required: true, // 필수 필드라는 의미
      maxLength: 30,
      validate: { // 유효성 검사
        validator: function (title) { // 유효성 검사 함수
          return title.split(' ').length > 1;
        },
        message: 'Must contain at least 2 words.',
      }
    },
    description: {
      type: String,
    },
    isComplete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    // createAt과 updateAt을 자동 생성해준다. 
    timestapmps: true,
  }
)