const quantCookies = document.querySelector("#quant-Cookies")
const Imgcookie = document.querySelector("#Img-cookie")

quantCookie.value = 0;
quantCookie.value = valorquantCookies;

Imgcookie.addEventListenner("Click", atulizarQuantCookies)

function atulizarQuantCookies() {
    valorquantCookies = valorquantCookies + 1

    quantCookie.value = valorquantCookies
}