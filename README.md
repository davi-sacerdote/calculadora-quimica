# ⚗️ Calculadora Química

Projeto desenvolvido em **JavaScript** para praticar programação utilizando conceitos de objetos, funções, condicionais e entrada de dados.

A ideia do projeto é receber o **número atômico de dois elementos químicos**, encontrar suas informações e analisar algumas características da ligação entre eles.

> 🚧 Projeto em desenvolvimento

## 🧪 Funcionamento atual

O programa possui informações de 10 elementos químicos cadastrados manualmente:

* Hidrogênio (H)
* Carbono (C)
* Nitrogênio (N)
* Oxigênio (O)
* Flúor (F)
* Sódio (Na)
* Magnésio (Mg)
* Cloro (Cl)
* Potássio (K)
* Cálcio (Ca)

O usuário informa o número atômico de dois elementos e o programa:

1. Busca os elementos no objeto `elementos`.
2. Identifica o grupo de cada elemento.
3. Determina se o elemento tende a formar um cátion ou ânion.
4. Indica uma carga iônica simplificada.
5. Analisa o tipo de ligação entre os elementos.

### Exemplo

```text
Digite o N atomico do primeiro elemento: 20
Digite o N atomico do segundo elemento: 17

Ca: é um cation +2
Cl: é um anion -1
A ligacao é: é Ionica
```

## 🛠️ Tecnologias

* JavaScript
* Node.js
* readline-sync

## 📚 Conceitos praticados

Este projeto está sendo utilizado para praticar:

* Objetos
* Propriedades de objetos
* Arrays/objetos com acesso por chave
* Funções
* Parâmetros
* `return`
* `if`
* Operadores lógicos (`&&`)
* Entrada de dados com `readline-sync`
* Conversão de `string` para `number` com `parseInt()`
* Organização e reutilização de código

## 📂 Estrutura atual

```text
calculadora-quimica/
├── index.js
├── package.json
└── package-lock.json
```

## 🚀 Próximas melhorias

* [ ] Criar uma função que retorne a carga numérica do íon em vez de apenas uma descrição.
* [ ] Criar uma função para descobrir a fórmula química resultante.
* [ ] Fazer o balanceamento das cargas dos íons.
* [ ] Simplificar as proporções da fórmula quando necessário.
* [ ] Melhorar o tratamento de elementos não cadastrados.
* [ ] Adicionar mais elementos químicos.
* [ ] Futuramente utilizar os 118 elementos da tabela periódica.
* [ ] Melhorar a organização das funções.
* [ ] Adicionar novas propriedades químicas aos elementos.
* [ ] Avaliar a utilização de uma biblioteca com os dados da tabela periódica.

## 🎯 Objetivo

O principal objetivo é utilizar um problema de **química** como forma de praticar e desenvolver conhecimentos em **JavaScript**.

O projeto também servirá como prática para trabalhar com dados estruturados e transformar informações químicas em lógica de programação.

## 👨‍💻 Autor

**Davi Sacerdote**

Projeto desenvolvido durante os estudos de JavaScript.
