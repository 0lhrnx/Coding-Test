function solution(num_list) {
    let a = 0;
    let m = 1;
    for(let i = 0; i < num_list.length; i++) {
         a += num_list[i]
         m *= num_list[i]        
    }
    
    return m < a * a ? 1 : 0
}