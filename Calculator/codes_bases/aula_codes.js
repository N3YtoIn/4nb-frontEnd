//Escopo Global
var contador = 1
var nome = document.getElementById('nome')
var email = document.getElementById('email') 
/*
    Variaveis e Contantes

    var -> Permite criar um espaço em memória que pode ser alterado devendo ser utilizado apenas no escopo global da aplicação 

    let -> Permite criar um espaço em memória que pode ser alterado devendo ser utilizado somente no escopo local da aplicação

    const -> Permite criar um espaço em memória que NÃO será alterado e pode ser tanto no escopo global como no escopo local
*/

function getDados(){
    //Permite exibir uma mensagem na tela do navegador
  //alert('Bem-vindo ao site de Cadastro de Clientes!')
  
  //Permite a confirmação da mensagem por (sim/não)
  //confirm('Realmente deseja salvar os dados??!')
  
  //Permite exibir a mensagem com entrada para dados
  //prompt("Digite seu nome:")
  
  //Permite enviar dados para o console do navegador
  //console.log('Testando uma logica do sistema')


  //Recebe dados digitados nas caixas de texto
  //getElementById() = Pega as informações inseridas pela Identificação do objeto
   
    console.log(nome)
    /*
        Operadores de Comparação
        == Verifica a igualdade entre dois conteúdos
        < Menor
        > Maior
        <= Menor ou igual
        >= Maior ou igual
        != Verifica a diferença entre dois conteúdos
        === Verifica a igualdade entre dois conteúdos e se os tipos d dados são iguais
        ==! Verifica a igualdade entre dois conteúdos e se os tipos de dados são diferentes
        !== Verifica a diferença entre dois conteúdos e se os tipos de dados são iguais
        !=! Verifica a diferença entre dois conteúdos e se os tipos de dados são diferentes
        
        var valor1 = 10
        var valor2 = "10"

        if(valor 1 === valor2)

        Operadores Lógicos

        And = &&
        Or = ||
        Not = !
    */

    //Validação de entrada de dados vazios
    if(nome.value == '' || email.value == ''){
        alert("Insira os dados:")
        //Faz estilização para identificar o erro na caixa
        if(nome.value == ''){
            nome.style.backgroundColor = '#f7dcdc'
        }
        //Validação de cima só que para o e-mail
            if(email.value == ''){
            email.style.backgroundColor = '#f7dcdc'
        }
    }
    else{
        if(contador <= 4){
            //Recebe os elementos HTML das colunas da tabaela (TD)
            let colunaNome = document.getElementById('nome'+contador)
            let colunaEmail = document.getElementById('email'+contador)

            //A tabela do HTML está recebendo o valor da caixa de texto do form
            colunaNome.innerText = nome.value
            colunaEmail.innerText = email.value
            
            contador++
            //contador = contador + 1
            //contador +=1
        }
    }
}

function setBlockNumber(tecla){
    console.log(tecla)
    if(tecla.keyCode >=48 && tecla.keyCode <=57){
    return false
    }
}

function setClearDados(){
    //Limpando as caixas de texto do formulário
    nome.value = ''
    email.value = ''
    setClearColorText()


    contador = 1
    while(contador <= 4){
        let colunaNome = document.getElementsById('nome'+contador)
        let colunaEmail = document.getElementsById('email'+contador)
        colunaNome.innerText = ''
        colunaEmail.innerText = ''
        contador++
    }
    //Inicia o contador em 1 para inserir na tabela
    contador = 1 
}

function setClearColorText(){
    //Limpando o fundo das caixas de texto
    nome.style.backgroundColor('#ffffff')
    email.style.backgroundColor('#ffffff')
}