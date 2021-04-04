//Imprime los números enteros entre 1 y x. Si x es menor que 1, retorna false.

function imprimir(x){
    if (x>=1){
        for (var i=0;i<=x;i++){
            console.log("Numero ",i);
        }
    }
    else{
        console.log("False");
    }
}

imprimir(5);
imprimir(0);

//Imprime todos los enteros desde el 0 hasta el 255. Al imprimir cada entero, debes imprimir la suma que se lleva. Retorna la suma final.

function suma(x){
    var sum = 0;
    for (var i=0;i<=x;i++){
        console.log(i);
        sum = sum+i;
    }
    return sum;
}
console.log(suma(10));


//Debes imprimir la suma de todos los valores en el arreglo dado:

function arreglo(x){
    var sum = 0;
    for (var i=0;i<x.length;i++){
        num = x[i];
        sum = sum+num;
    }
    return sum;
}
console.log( arreglo([1,2,3]) );

//Escribe una función que retorne el mayor elemento del arreglo dado:

function mayor(x){
    var mayor = 0;
    for (var i=0;i<x.length;i++){
        var num = x[i];
        if (num>mayor){
            mayor = num;
        }
        
    }
    return mayor;
}
console.log( mayor([8,3,11,2,-8]) ); // debe imprimir 11