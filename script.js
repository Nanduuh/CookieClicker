// PEGANDO ELEMENTOS
const quantCookie = document.querySelector("#quant-cookies");
const imgCookie = document.querySelector("#img-cookie");

let valorQuantCookies = 0;
let cursores = 0; // +1 por segundo
let vovos = 0;    // +5 por segundo

// CLIQUE NO COOKIE
imgCookie.addEventListener("click", () => {
    valorQuantCookies++;
    quantCookie.value = valorQuantCookies;
    atualizarJogo();
});

// FUNÇÃO QUE ATUALIZA LIBERAÇÕES DO JOGO
function atualizarJogo() {

    // LIBERA CURSOR QUANDO TIVER 10 COOKIES
    if (valorQuantCookies >= 10) {
        const imgCursor = document.querySelector("#img-cursor");
        imgCursor.classList.add("cursor-liberado");

        imgCursor.onclick = () => {
            if (valorQuantCookies >= 10) {
                valorQuantCookies -= 10;
                cursores++; // adiciona +1 cookie por segundo
                quantCookie.value = valorQuantCookies;
            }
        };
    }

    // LIBERA VOVÓ QUANDO TIVER 50 COOKIES
    if (valorQuantCookies >= 50) {
        const imgVovo = document.querySelector("#img-vovo");
        imgVovo.classList.add("vovo-liberada");

        imgVovo.onclick = () => {
            if (valorQuantCookies >= 50) {
                valorQuantCookies -= 50;
                vovos++; // adiciona produção da vovó
                quantCookie.value = valorQuantCookies;
            }
        };
    }
}

// PRODUÇÃO AUTOMÁTICA A CADA 1 SEGUNDO
setInterval(() => {
    // Cursor -> +1 por segundo cada
    // Vovó -> +5 por segundo cada
    valorQuantCookies += (cursores * 1) + (vovos * 5);
    quantCookie.value = valorQuantCookies;
}, 1000);