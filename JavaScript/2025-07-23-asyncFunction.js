export async function printEmployees() { // async 함수 내에서만 작동이 된다
    const await_response = await fetch('https://learn.codeit.kr/api/employees'); // 오류시 top levels은 모듈이 처음 시작된 곳을 가리킨다
    const data = await await_response.json(); // json 메소드로 리스폰스를 파싱
    console.log(data);
}

export async function getEmployee(index) {
    const await_response = await fetch(`https://learn.codeit.kr/api/employees/${index}`);
    const data = await await_response.json();
    return data;
}