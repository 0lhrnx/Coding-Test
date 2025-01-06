function solution(number) {
   const arr = number.split("") // 문자열을 배열로 변환
   var sum = 0;
   for(let i = 0; i<number.length; i++) {
        sum +=parseInt(arr[i]) // parseInt = 숫자로 변환 
   }
    return sum % 9
}