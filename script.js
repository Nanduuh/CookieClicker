const quantCookie = document.querySelector("#quant-cookies");
const imgCookie = document.querySelector("#img-cookie");
const imgCursor = document.querySelector("#img-cursor");
const imgVovo = document.querySelector("#img-vovo");

// Pega os <p class="preco"> ao lado das imagens
const precoCursorEl = imgCursor ? imgCursor.parentElement.querySelector(".preco") : null;
const precoVovoEl   = imgVovo   ? imgVovo.parentElement.querySelector(".preco")   : null;

let valorQuantCookies = 0;
let cursores = 0;
let vovos = 0;

// PREÇOS DINÂMICOS
let precoCursor = 10; // sobe +5 por compra
let precoVovo   = 50; // agora sobe +25 por compra

// mostra os preços iniciais
if (precoCursorEl) precoCursorEl.innerText = precoCursor;
if (precoVovoEl)   precoVovoEl.innerText   = precoVovo;

// Atualiza a UI (bordas e preços)
function atualizarUIloja() {

    // Cursor
    if (valorQuantCookies >= precoCursor) {
        imgCursor.classList.add("item-disponivel");
        imgCursor.classList.remove("item-indisponivel");
    } else {
        imgCursor.classList.add("item-indisponivel");
        imgCursor.classList.remove("item-disponivel");
    }
    precoCursorEl.innerText = precoCursor;

    // Vovó
    if (valorQuantCookies >= precoVovo) {
        imgVovo.classList.add("item-disponivel");
        imgVovo.classList.remove("item-indisponivel");
    } else {
        imgVovo.classList.add("item-indisponivel");
        imgVovo.classList.remove("item-disponivel");
    }
    precoVovoEl.innerText = precoVovo;
}

function atualizarTela() {
    quantCookie.value = valorQuantCookies;
    atualizarUIloja();
}

// Clique no cookie
imgCookie.addEventListener("click", () => {
    valorQuantCookies++;
    atualizarTela();
});

// Compra do cursor
imgCursor.addEventListener("click", () => {
    if (valorQuantCookies >= precoCursor) {
        valorQuantCookies -= precoCursor;
        cursores++;

        // sobe +5 por compra
        precoCursor += 5;

        atualizarTela();
    }
});

// Compra da vovó
imgVovo.addEventListener("click", () => {
    if (valorQuantCookies >= precoVovo) {
        valorQuantCookies -= precoVovo;
        vovos++;

        // sobe +25 por compra
        precoVovo += 25;

        atualizarTela();
    }
});

// Produção automática (1x por segundo)
setInterval(() => {
    valorQuantCookies += (cursores * 1) + (vovos * 5);
    atualizarTela();
}, 1000);

atualizarTela();