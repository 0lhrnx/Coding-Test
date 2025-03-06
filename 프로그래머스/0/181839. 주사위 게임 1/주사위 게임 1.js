function solution(a, b) {
    if(a % 2 !== 0 && b % 2 !== 0) 
        return (a * a) + (b * b);
    else if(a % 2 !== 0 || b % 2 !== 0) 
        return 2 * (a + b);
    else {
        if(b > a) 
           return -(a - b)  ;
        return (a - b);
    }
    
}