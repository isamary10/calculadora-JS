let listaTeclas = document.querySelectorAll('.teclas');
let conteudoVisor = document.querySelector('.visor div');
let buttonResultado = document.querySelector('#resultado');
let buttonLimpar = document.querySelector('#limpar')


listaTeclas.forEach(tecla => {
    if(tecla.textContent == "=" || tecla.textContent == "CE") {
        return
    }
    tecla.onclick = () => {
        conteudoVisor.innerHTML += tecla.textContent
        //conteudoVisor.append(tecla.textContent)
    }
    
})

buttonResultado.onclick = ()=> {
    if(conteudoVisor.textContent.indexOf('%') >= 0){
        let conteudo = conteudoVisor.textContent.split('%')
        return conteudoVisor.innerHTML = conteudo[0]*conteudo[1]/100
    }
    let resultadoOperacao = eval(conteudoVisor.textContent)
    conteudoVisor.innerHTML = resultadoOperacao
}

buttonLimpar.onclick =()=>{
    conteudoVisor.innerHTML = ""
}


//DESAFIO 1: SE TIVER DOIS OPERADORES, NÃO DEIXAR COLOCAR O SEGUNDO OPERADOR, OU SEJA, NÃO REPETIR O OPERADOR
//DESAFIO 2: CRIAR UM BOTÃO AC QUE APAGA O ÚLTIMO NÚMERO QUE FOI DIGITADO 
