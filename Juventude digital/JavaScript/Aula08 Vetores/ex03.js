let num = [2, 3, 5, 6, 8, 9]
let total = []

for(let i = 0; i < num.length; i++){
    let val = num[i] % 2
    if(val == 0){
        total.push(num[i])
    }
}
console.log(total)