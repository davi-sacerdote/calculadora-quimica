const rl = require("readline-sync");
// criei um obejito com as informacoes quimicas de 10 elementos, so para teste por qnaunto 
const elementos = {
    1: {nome: "H",grupo: 1,tipo: "ametal"},
    6: {nome: "C",grupo: 14,tipo: "ametal"},
    7: {nome: "N",grupo: 15,tipo: "ametal"},
    8: { nome: "O",grupo: 16,tipo: "ametal" },
    9: {nome: "F",grupo: 17, tipo: "ametal" },
    11: {nome: "Na",grupo: 1, tipo: "metal"},
    12: {nome: "Mg",grupo: 2,tipo: "metal"},
    17: {nome: "Cl",grupo: 17,tipo: "ametal" },
    19: {nome: "K",grupo: 1,tipo: "metal" },
    20: { nome: "Ca", grupo: 2, tipo: "metal"},
  };
// recebe o N atomico de dois dos 10 elementos e dps eu coloco numa variavel que vai usar 
// o N atomico para buscar dentro dos elementos, as respectivas informacoes daquele N atomico  
const Numero1 = parseInt(rl.question("Digite o N atomico do primeiro elemento: "));
const Numero2 = parseInt(rl.question("Digite o N atomico do segundo elemento: "));
const verificacao1 = elementos[Numero1];
const verificacao2 = elementos[Numero2];
 
function verificarseExiste (verificacao1, verificacao2){
  if(!verificacao1){
      return "nao existe"
    }
  if (!verificacao2) {
    return "nao existe"
    }
    return "existe"
  }
// verifica o return da funcao de cima e se nao existir vai parar o programa 
if (verificarseExiste(verificacao1,verificacao2) === "nao existe") {
    console.log("Um ou dois dos elementos nao foram cadastrados ainda! ");
    process.exit() // pra parar o programa
  }
  
function DescobrirION (elemento){
  if(elemento.grupo === 1) {
      return +1
    }
  if(elemento.grupo === 2) {
      return +2
    }
  if(elemento.grupo === 14) {
      return "forma ligações covalentes";
    }
  if(elemento.grupo === 13) {
      return +3
    }
  if(elemento.grupo === 15) {
      return -3
    }
  if(elemento.grupo === 16) {
      return -2
    }
  if(elemento.grupo === 17) {
      return -1
    }
  if(elemento.grupo === 18) {
      return "gás nobre"
    }
}

function descobrirFormula (e1,e2){
   const Carga1 = DescobrirION(e1)
  const Carga2 = DescobrirION(e2)
}
descobrirFormula(verificacao1,verificacao2)
// usei essa funcao para verificar os tipos de ligacao que poderia ser, usando a teoria das ligacoes quimicas
function descobrirAligacao (verificacao1,verificacao2) {
  if (!verificacao1 || !verificacao2) {
        return "elemento não cadastrado"
    };
  if (verificacao1.tipo === "metal" && verificacao2.tipo === "ametal" ) {
        return "é Ionica"
    };
  if (verificacao1.tipo === "ametal" && verificacao2.tipo === "metal" ) {
        return "é Ionica"
    };
    
  if (verificacao1.tipo === "ametal" && verificacao2.tipo === "ametal" ) {
        return "é Covalente"
    }
  if (verificacao1.tipo === "metal" && verificacao2.tipo === "metal") {
        return "é Metálica";

    }
        return "é outro tipo";

}
// usei verificacao1/2.nome para acessar as informacoes dos Numetos atomicos que foram digitados 
console.log(`${verificacao1.nome}: ${DescobrirION(verificacao1)}`)
console.log(`${verificacao2.nome}: ${DescobrirION(verificacao2)}`)
console.log(`A ligacao é: ${descobrirAligacao(verificacao2, verificacao1)}`)


// FUTURAS MELHORIAS:
//Adicionar os outros elementos da tabela periódica,
//ou futuramente utilizar uma biblioteca com os 118 elementos.
//
//Criar uma função para descobrir a fórmula química
//resultante dos dois elementos.
//
//Fazer o balanceamento das cargas para descobrir
//quantos átomos de cada elemento são necessários.
//
//Simplificar as proporções da fórmula quando necessário.
//Exemplo: Mg2O2 → MgO.
//
//Adicionar mais tipos de elementos e situações químicas
//conforme o programa for ficando mais completo.