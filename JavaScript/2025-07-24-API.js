import { getColorSurveys, getColorSurvey, createColorSurvey } from "./api.js";


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