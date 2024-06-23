// function suma(a,b){
//     return a + b
// }



// var arreglo1 = [1241224, 123453, 123456, " texto1, texto2, texto3", true, false, suma(2,2), suma]
// //  console.log( suma, arreglo1)

// console.log( [0] )
// console.log( [1] )
// console.log( [2] )
// console.log( [12])
// console.log( [13])

function suma(a,b){
    return a + b
}


var arreglo1 = [ "texto1", "texto2", [ 1,2,3,4,5,6,] ]//undefined
//                   0          1           3

for(var i=0; i <= arreglo1.length - 1 ; i++){
    if(Array.isArray(arreglo1[i])){
        for (var j = 0; j < arreglo1[i].length; j++)
            console.log(arreglo1[i][j] )
    }
}

