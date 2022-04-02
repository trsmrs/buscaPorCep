const labelCep = document.querySelector('.labelCep')
const cep = document.querySelector('.cep')
const rua = document.querySelector('.rua')
const bairro = document.querySelector('.bairro')
const cidade = document.querySelector('.cidade')
const estado = document.querySelector('.estado')
const ibge = document.querySelector('.ibge')
const botao = document.querySelector('.botao')
const textoHead = document.querySelector('.textHeader')

 function jsonTransform(response){
   return response.json()
}


function alerta(){
  textoHead.style.color ="red"
  labelCep.style.color = "red"
 
}
function limpaAlert(){
  textoHead.style.color=('rgb(226, 217, 217')
  labelCep.style.color = 'black'
}

function exibeDados(dados){
  rua.value = dados.logradouro
  bairro.value = dados.bairro
  cidade.value = dados.localidade
  estado.value = dados.uf
  ibge.value = dados.ibge
}

function erro(){
  alerta()
  textoHead.innerHTML = ('Erro ao buscar o Cep, Digite um formato de Cep válido.')
  rua.value = ''
  bairro.value = ''
  cidade.value = ''
  estado.value = ''
  ibge.value = ''

  const error = setTimeout(()=>{
      textoHead.innerHTML = 'Digite o cep e aperte enter'
      clearTimeout(error)
      limpaAlert()
  },3000)
  
}

cep.onchange = buscaCep

function buscaCep(){
  let _cep = cep.value
 
    if(_cep.length == 8){
      fetch(`https://viacep.com.br/ws/${_cep}/json/`)
      .then(jsonTransform)
      .then(exibeDados)
      .catch(erro) 
    }

    else{
      erro()
    }
}


