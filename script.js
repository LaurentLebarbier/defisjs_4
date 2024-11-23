let total = 0
const resultat = document.querySelector("#resultat")
const button = document.querySelector("button");
button.addEventListener('click', function () {
    const entrez = document.querySelector("#sum").value;
    if (entrez <= 10) {
        total = entrez * 0.10;
    }
    else if (entrez <= 30) {
        total = (entrez - 10) * 0.09 + 1;
    }
    else {
        total = 1 + 1.80 + (entrez - 30) * 0.08;
    }
    resultat.innerHTML = total
})


