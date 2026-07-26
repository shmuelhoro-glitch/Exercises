

export function isEven(n){
    return n %2 == 0;
}

export function max(a, b){
    if (a > b) return a
    return b
}

export function average(numbers){
    if (numbers.length == 0) throw new Error("empty array")
    const sumi = numbers.reduce((sum, i) => sum + i ,0)
    return sumi/numbers.length
}



export function toTitleCase(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}



export function filterEven(numbers){
    if (numbers.length == 0) throw new Error("empty array")
    const onlyEven = numbers.filter(num => num %2 == 0)
    if (onlyEven.length == 0) throw new Error("only odd numbers")
    return onlyEven
}


