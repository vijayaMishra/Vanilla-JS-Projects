let array1 = [1 , 20, 0, 9, 17];

let minimum = array1[0];
let maximum = array1[0];
for(let i=0; i < array1.length; i++) {
    if(minimum < array1[i]) {
        minimum = array1[i];
    }
    if(maximum > array1[i]) {
        maximum = array1[i];
    }
}
console.log("Minimum no. in array is: ", minimum);
console.log("Maximum no. in array is: ", maximum);