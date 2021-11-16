// A pretenção é trocar as variáveis.
let a = 7;
let b = 94;

let temp = a; // esse a é o numero 7 que será "protegido" na variável temp.
a = b; // esse b é igual a 94, então a agora é igual a b, ou seja, 94.
b = temp; // a temp que foi guardada que é igual a 7 entra agora.

// depois da troca ... a = 94 e b = 7

console.log(a);
console.log(b);