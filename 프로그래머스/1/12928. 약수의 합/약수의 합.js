function solution(n) {
    var answer = 0; // 결과를 저장할 변수
    for(let i = 0; i <= n; i++){
        if (n % i === 0){
            answer += i // i가 n의 약수라면 answer에 i를 더하는 코드
        }
    }
    
    return answer;
}