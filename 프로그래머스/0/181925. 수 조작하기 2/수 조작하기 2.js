function solution(numLog) {
    var answer = '';
    for (let i = 1; i < numLog.length; i++) {
        const a = numLog[i] - numLog[i - 1];
        
        if (a === 1) answer += "w";
        else if (a === -1) answer += "s";
        else if (a === 10) answer += "d";
        else if (a === -10) answer += "a";
    }
    return answer;
}


