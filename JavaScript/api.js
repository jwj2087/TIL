export async function getColorSurveys(params = {}) { // GET 함수
    const url = new URL('https://learn.codeit.kr/api/color-surveys');
    Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
    );

    const res = await fetch(url);

    if(!res.ok){
        throw new Error('데이터를 불러오는데 실패했습니다');
    }
    
    const data = await res.json();
    return data;
}

export async function getColorSurvey(id) {
    const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);
    const data = await res.json();

    if(!res.ok){
        throw new Error('데이터를 불러오는데 실패했습니다');
    }

    return data;
}

export async function createColorSurvey(surveyData) {
    const res = await fetch('https://learn.codeit.kr/api/color-surveys', {
        method: 'POST',
        body: JSON.stringify(surveyData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if(!res.ok){
        throw new Error('데이터를 불러오는데 실패했습니다');
    }

    const data = await res.json();
    return data;
}