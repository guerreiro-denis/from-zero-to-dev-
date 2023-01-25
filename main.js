const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento)=>{
    elemento.addEventListener('click', (evento)=>{
        manipulaDados(evento.target.textContent);
        console.log(evento.target.parentNode);
    })
}) 

//somar.addEventListener('click', () => {manipulaDados ("somar")});

//subtrair.addEventListener('click', () => {manipulaDados ("subtrair")});

function manipulaDados (operacao) {
    if (operacao === "-") { //era a class subtrair mas devido ao usar o forEach() pode ser usado o conteúdo
        braco.value = parseInt(braco.value) - 1;
    }
    else {
        braco.value = parseInt(braco.value) + 1;
    }
}
