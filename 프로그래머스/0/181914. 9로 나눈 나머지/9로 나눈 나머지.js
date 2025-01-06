function solution(number) {
   const arr = number.split("");
   var sum = 0;
   for(let i = 0; i<number.length; i++) {
        sum +=parseInt(arr[i])
   }
    return sum % 9
}