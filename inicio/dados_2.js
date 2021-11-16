 let preco = 19.90;
 let desconto = 0.4;
 console.log(19.90 * 0.6);
 //ou
 console.log(19.90 * (1 - desconto));
 //ou
 let precoComDesconto = preco * (1- desconto);
 console.log(precoComDesconto);

let nome = "Caderno"; // String (Texto) -> sequencia de símbolos;
let categoria = "papelaria";
console.log("Produto: " + nome 
    + ", Categoria: " + categoria
    +", Preço: " + preco 
    + ", Desconto: " + desconto);
console.log(1+1) // isso é diferente de:
console.log("1" + 1)