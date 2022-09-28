//calculation of 1 + 2 is immediate
//x === 3

let x = 1 + 2

//calculation of 1 + 2 is delayed
//foo can be called later or perform the calculation
//foo is a thunk

let foo = () => 1 + 2