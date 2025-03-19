document.querySelector('.btn-criar').addEventListener('click', function(event){
    event.preventDefault();

    let caixaDeImagens = document.querySelector('.img-container');

    //pega imagem e conta quantas tem
let imagens = caixaDeImagens.querySelectorAll('img');

console.log(imagens);

if (imagens.length === 0) {
    let cxAlerta = document.getElementById('cx-alerta');
    cxAlerta.style.display = 'block'; //mostrar o alera
}
}) 



/* event.prevemtDefault() ele evita reiniciar a tela, enviando e tudo e sumindo as informações
 
/* document. querySelector ('classe') buscar classes/div que fizemos no html */
//.addEventListener  ele espera algum evento que iremos decidir