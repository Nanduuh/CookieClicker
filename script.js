const quantCookie = document.querySelector("#quant-cookies");
const imgCookie = document.querySelector("#img-cookie");

let valorQuantCookies = 0
quantCookie.value = valorQuantCookies;

imgCookie.addEventListener("click", atulizarQuantCookies)

function atulizarQuantCookies() {
    valorQuantCookies = valorQuantCookies + 1

    quantCookie.value = valorQuantCookies

    atualizarJogo();
}

function atualizarJogo() {
    if (valorQuantCookies >= 10) {
        const imgCursor = document.querySelector("#img-cursor");
        imgCursor.classList.add("cursor-liberado");
    }

   
    if (valorQuantCookies >= 50) {
        const imgVovo = document.querySelector("#img-vovo");
        imgVovo.classList.add("vovo-liberada");
    }



}