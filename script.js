console.log("hallo wereld")

var naamveld = document.querySelector("#naamveld");

function groet(naam) {
    console.log("groet persoon");
    naamveld.textContent = naam;
}

groet("Bente");


function showHint() {
    hint.textContent = "Sleep de versiering naar de cupcake"
    setTimeout(hideHint, 4000)
}

function hideHint() {
    hint.textContent = ""
}

showHint()


const hoofdCupcake = document.querySelector("#leeg_vormpje")
const hoofdVanille = document.querySelector("#vanille_groot")
const hoofdChocolade = document.querySelector("#chocolade_groot")

const vanilleToevoegen = document.querySelector("#vanille_basis")
const chocoladeToevoegen = document.querySelector("#chocolade_basis")

function onderkantVeranderen() {
    hoofdVanille.classList.add("zichtbaar")
    hoofdVanille.classList.remove("onzichtbaar")
    hoofdCupcake.classList.add("onzichtbaar")
}

vanilleToevoegen.addEventListener("click", onderkantVeranderen)

function onderkantVeranderen2() {
    hoofdChocolade.classList.add("zichtbaar")
    hoofdChocolade.classList.remove("onzichtbaar")
    hoofdCupcake.classList.add("onzichtbaar")
}

chocoladeToevoegen.addEventListener("click", onderkantVeranderen2)

function onderkantVeranderen3() {
    hoofdVanille.classList.add("zichtbaar")
    hoofdVanille.classList.remove("onzichtbaar")
    hoofdChocolade.classList.add("onzichtbaar")
}

vanilleToevoegen.addEventListener("click", onderkantVeranderen3)

function onderkantVeranderen4() {
    hoofdChocolade.classList.add("zichtbaar")
    hoofdChocolade.classList.remove("onzichtbaar")
    hoofdVanille.classList.add("onzichtbaar")
}

chocoladeToevoegen.addEventListener("click", onderkantVeranderen4)


const veranderCafe = document.querySelector("#cafe_knop")
const veranderBakkerij = document.querySelector("#bakkerij_knop")
const veranderKeuken = document.querySelector("#keuken_knop")
const achtergrondKnop = document.querySelector("#achtergrond_knop")

/*https://www.pexels.com/nl-nl/foto/lege-bar-gevuld-met-lichten-260922/*/
veranderCafe.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(images/achtergrond_cafe.png)"
})

/*https://www.pexels.com/nl-nl/foto/zak-op-hout-naast-gekookt-brood-2007350/*/
veranderBakkerij.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(images/achtergrond_bakkerij.png)"
})

/*https://www.pexels.com/nl-nl/foto/handen-mensen-tafel-keuken-7489005/*/
veranderKeuken.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(images/achtergrond_keuken.png)"
})

achtergrondKnop.addEventListener("click", () => {
    document.body.style.backgroundImage = "url(images/achtergrond_normaal.png)"
})


