document.addEventListener("DOMContentLoaded", function() {
    const texto = document.querySelector("[data-texto]");
    const botao = document.querySelector("[data-botao]");
    const paragrafo = document.querySelector("[data-p]")

    botao.addEventListener("click", () => {
        const textoSemEspacos = texto.value.replace(/\s/g, ''); // Remove espaços em branco
        const numeroDeLetras = textoSemEspacos.length; // Calcula o comprimento da string sem espaços
        paragrafo.innerHTML = `   Encontramos ${numeroDeLetras} caracteres (sem espaço) <br> Encontramos ${texto.value.length} caracteres (contando os espaços)`;
    });
});


