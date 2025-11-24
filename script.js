const quantCookie = document.querySelector("#quant-cookies");
const imgCookie = document.querySelector("#img-cookie");
const imgCursor = document.querySelector("#img-cursor");
const imgVovo = document.querySelector("#img-vovo");

// Pega os <p class="preco"> ao lado das imagens (assumindo estrutura atual)
const precoCursorEl = imgCursor ? imgCursor.parentElement.querySelector(".preco") : null;
const precoVovoEl = imgVovo ? imgVovo.parentElement.querySelector(".preco") : null;

let valorQuantCookies = 0;
let cursores = 0; // quantidade de cursores comprados
let vovos = 0;    // vovós compradas

// PREÇOS DINÂMICOS
let precoCursor = 10; // começa em 10 e aumenta +5 por compra
let precoVovo = 50;   // mantive 50 (se quiser dinâmico, altere)

// Atribui os textos iniciais dos preços na tela (se elementos existirem)
if (precoCursorEl) precoCursorEl.innerText = precoCursor;
if (precoVovoEl) precoVovoEl.innerText = precoVovo;

// Atualiza a UI dos itens (borda, opacidade, preço)
function atualizarUIloja() {
    // Cursor: se tiver cookies suficientes, remove classe 'indisponivel'
    if (!imgCursor) return;

    if (valorQuantCookies >= precoCursor) {
        imgCursor.classList.add("item-disponivel");
        imgCursor.classList.remove("item-indisponivel");
    } else {
        imgCursor.classList.add("item-indisponivel");
        imgCursor.classList.remove("item-disponivel");
    }

    // Atualiza preço visível
    if (precoCursorEl) precoCursorEl.innerText = precoCursor;

    // Vovó
    if (imgVovo) {
        if (valorQuantCookies >= precoVovo) {
            imgVovo.classList.add("item-disponivel");
            imgVovo.classList.remove("item-indisponivel");
        } else {
            imgVovo.classList.add("item-indisponivel");
            imgVovo.classList.remove("item-disponivel");
        }
        if (precoVovoEl) precoVovoEl.innerText = precoVovo;
    }
}

// função para atualizar valores na tela (campo de cookies)
function atualizarTela() {
    quantCookie.value = valorQuantCookies;
    atualizarUIloja();
}

// CLIQUE NO COOKIE (principal)
imgCookie.addEventListener("click", () => {
    valorQuantCookies++;
    atualizarTela();
});

// Compra do cursor: listener atribuído uma vez
imgCursor.addEventListener("click", () => {
    // só compra se tiver recursos
    if (valorQuantCookies >= precoCursor) {
        valorQuantCookies -= precoCursor;
        cursores++; // adiciona 1 cursor comprado
        // aumenta o preço do cursor de 5 em 5
        precoCursor += 5;

        atualizarTela();
    } else {
        // opcional: som/feedback de "não tem dinheiro"
    }
});

// Compra da vovó (listener atribuído uma vez)
if (imgVovo) {
    imgVovo.addEventListener("click", () => {
        if (valorQuantCookies >= precoVovo) {
            valorQuantCookies -= precoVovo;
            vovos++;
            // se quiser que o preço da vovó aumente também, faça: precoVovo += X;

            atualizarTela();
        }
    });
}

// PRODUÇÃO AUTOMÁTICA A CADA 1 SEGUNDO
setInterval(() => {
    // cada cursor gera +1 por segundo (mude se quiser)
    // cada vovó gera +5 por segundo
    valorQuantCookies += (cursores * 1) + (vovos * 5);
    atualizarTela();
}, 1000);

// chama atualização inicial pra setar a UI corretamente
atualizarTela();