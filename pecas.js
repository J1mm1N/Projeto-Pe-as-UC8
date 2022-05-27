let listaDePecas = ["Filtro de Ar", "Motor", "Disco de Freio"]

if (listaDePecas.length < 10)
{
console.log("È possivel cadastrar mais peças!!!")
}
else
{
    console.log("Capacidade insuficiente, não é possivel cadastrar")
}

let peso = 50

if (peso < 100)
{
    console.log("A peça deve pesar no minimo 100g")
}
else
{
    console.log("A peça possui o peso adequado.")
}

let nomePeca = "Disco de Freio"

/*
if(nomePeca.length >= 3)
{
    console.log("Nome da peça adequado para o cadastro")
}
else if(nomePeca.length == 0)
{
console.Log ("Nome da peça não pode ser vazio")
}

else
{
    console.Log ("O nome deve ter ao menos 3 caracteres para ser cadastrado.")
}
*/
// = atribuição de valor
// == Verificar se os valores sao iguais
//=== Verificar se os valores sao identicos (tem q ser do mesmo tipo)

switch (nomePeca.length) {
    case 0:
        console.log("o Nome da peça não pode ser vazio.")
        break;
case 1:
case 2:
console.log ("O Nome da peça deve ter mais de 3 caracteres.")
break;
    default:
        console.log("Nome da peça adequado para o cadastro.")
        break;
}




