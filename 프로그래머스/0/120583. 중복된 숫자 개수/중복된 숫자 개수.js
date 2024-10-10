function solution(array, n) {
    var answer = 0; // 중복된 숫자 개수를 저장할 변수, 초기값은 0

    // 배열의 길이만큼 반복문을 실행하여 모든 요소를 순회
    for (let i = 0; i < array.length; i++) {
        // 배열의 i번째 요소가 n과 같으면
        if (array[i] === n) {
            answer++; // answer 값을 1 증가 (중복된 숫자를 발견한 경우)
        }
    }

    return answer; // 중복된 숫자의 최종 개수를 반환
}