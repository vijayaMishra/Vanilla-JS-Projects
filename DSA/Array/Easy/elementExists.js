let array1 = [10, 9, 17, 22, 16];

let elementToBeSearched = 17;
let j = 0;
// check if an element exists inside an array
for(let i=0; i < array1.length; i++) {
    if(array1[i] === elementToBeSearched) {
        console.log(`Element ${elementToBeSearched} found in array`);
        break;
    } else {
        j++;
    }
}
if(j === array1.length) {
    console.log(`Element ${elementToBeSearched} does not exist.`)
}