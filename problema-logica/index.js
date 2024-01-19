const numbersArray = [12,8,4,79,1,3,0,27,56,5]

const maxNumberByReduce = ( numbers ) => {
    if ( numbers.length > 0 )
        return numbers.reduce((a,b) => Math.max(a,b))
    return numbers
}

const maxNumber = ( numbers ) => {
    if ( numbers.length > 0 )
        return Math.max(...numbers)
    return numbers
}

console.log(maxNumber(numbersArray))
console.log(maxNumberByReduce(numbersArray))

// Para ver el resultado en console entrar a la carpeta y ejecutar node index.js