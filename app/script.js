

async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";
    try{
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaCEPJSON = await consultaCEP.json();
    if (consultaCEPJSON.erro){
        throw Error('CEP não existente')
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco')
    var estado = document.getElementById('estado');

    cidade.value = consultaCEPJSON.localidade;
    logradouro.value = consultaCEPJSON.logradouro;
    estado.value = consultaCEPJSON.uf;
    console.log(consultaCEPJSON)
    
    return consultaCEPJSON
} catch(erro){
    mensagemErro.innerHTML = "<p>CEP inválido, tente novamente</p>";
}
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

