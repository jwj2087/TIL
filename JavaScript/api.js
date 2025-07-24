export async function getColorSurveys(params = {}) { // GET 함수
    const url = new URL('https://learn.codeit.kr/api/color-surveys');
    Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
    );

    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function getColorSurvey(id) {
    const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);
    const data = await res.json();

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
    const data = await res.json();
    return data;
}