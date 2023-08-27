const produtos = []
const pessoas = []

function menu(){
    console.log('Menu de Opções:')
    console.log('1 - Cadastre um Produto;')
    console.log('2 - Cadastrar uma Pessoa;')
    console.log('3 - Realizar Sorteio;')
    console.log('4 - Sair.')
    return Number.parseInt(prompt('Digite uma das opções citadas acima:') )
}

function cadastroProduto() {
    var nomeProd = prompt('Digite o nome do produto: ')
    produtos.push(nomeProd)
    console.log('Pronto!')
}

function cadastroPessoa() {
    var nomePes = prompt('Digite o nome da pessoa: ')
    pessoas.push(nomePes)
    console.log('Pronto!')
}

function sorteio() {
    if (produtos.length === 0 || pessoas.length === 0){
        console.log('Cadastre pessoas e/ou produtos para que o sorteio possar ser realizado.')
        return
    }
    const sorteioNumero = Math.floor(Math.random()*produtos.length)
    const pessoaSorteada = Math.floor(Math.random()*pessoas.length)

    console.log(' A Pessoa sorteada é: ' + pessoas[pessoaSorteada])
    console.log('Prêmio: ' + produtos[sorteioNumero])
}

var entradaMenu = 0
while (entradaMenu !== 4){
    entradaMenu = menu()

    switch (entradaMenu) {
        case 1:
            cadastroProduto()
            break;
        case 2:
            cadastroPessoa()
            break;
        case 3:
            sorteio()
            break;
        case 4:
            console.log('Encerrando...\nVocê encerrou o programa.')
            break;
        default:
            console.log('Opção inválida. Escolha um número de 1 a 4.')
            break;
    }
}