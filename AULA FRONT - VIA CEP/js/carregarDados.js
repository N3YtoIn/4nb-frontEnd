// Importação do Arquivo de Dados com os dados a partir do CEP
import { dadosCep } from "./dados"

//Receber o botão de pesquisa no JS
const botaoPesquisar = document.getElementById('pesquisar')

//Função Tradicional
function validarDados(){
  let caixaCep = String(document.getElementById('input-cep').value)
  let status = false

    //Validação da Caixa em Branco  
    if(caixaCep == ''){
      alert('Não foi possível realizar a busca, pois a caixa está vazia.')
      status = true
    }

    //Validação da Quantidade de Caracteres
    else if(caixaCep.length != 9){
      alert('É obrigatório a entrada de 9 digitos para CEP.')
      status = true 
    }

    return status
}

//Função Anonima
const getDadosCep = function(){

}


botaoPesquisar.addEventListener('click', function(){
  if(!validarDados()){

  }

})
