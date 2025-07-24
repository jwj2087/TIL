import { getColorSurveys, getColorSurvey, createColorSurvey } from "./api.js";

try {
    // GET /api/color-surveys
    // const data = await getColorSurveys();

    // GET Param
    // const data = await getColorSurveys({offset: 20, limit: 5});

    // GET id
    // const data = await getColorSurvey(10);

    // POST 
    const surveyData = {
        mbti: 'INTP',
        colorCode: '#45DAFF',
        password: '0101',
    };
    const data = await createColorSurvey(surveyData);
    console.log(data);

// 주의점: 리퀘스트 자체가 실패했을때만 오류코드 반환. 
// 400이나 500같은 에러 리스폰스가 돌아오면 promise가 fulfilled 상태라서 오류처리가 안됨
// export 함수에서 !res.ok 를 통해 오류처리 
} catch(e){ 
    console.log(e);
    console.log('error!!');
}
