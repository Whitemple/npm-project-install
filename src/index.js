function consecutive(array) {
    let count = 0;
    for (let i = Math.min(...array); i<Math.max(...array); i++){
        if(!array.includes(i)) count += 1
    }
    return count;
}

function high(string){
    const intengerArray = [];
    const tempArr = [];
    const arr = string.split(' ');
    arr.forEach(insideArray => {
        insideArray.split('').forEach(word => {
            tempArr.push(word.charCodeAt(0) - 96)
        });
        intengerArray.push(tempArr.reduce((acc, cur)=>acc + cur, 0))
        tempArr.length = 0;
    });
    return arr[intengerArray.indexOf(Math.max(...intengerArray))]
}
function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

export { consecutive, high, createPhoneNumber };
