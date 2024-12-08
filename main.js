document.addEventListener("DOMContentLoaded", function () {
    const formSelect = document.getElementById("form-select");
    const calcForm = document.getElementById("calcForm");
    const sideForm = document.getElementById("side-form");
    const strana1 = document.getElementById("strana1");
    const strana2 = document.getElementById("strana2");
    const btnStrana = document.getElementById("btnStrana");
    const outputStrana = document.getElementById("vysledekStrana");

    formSelect.addEventListener("change", function () {
        sideForm.style.display = formSelect.value ? "block" : "none";
    });

    btnStrana.addEventListener("click", function (event) {
        event.preventDefault();

        const s1 = parseFloat(strana1.value);
        const s2 = parseFloat(strana2.value);
        const missing = formSelect.value;
        let result;

        if (isNaN(s1) || isNaN(s2) || !missing) {
            outputStrana.innerHTML = "Chyba: Zadejte platné hodnoty a vyberte chybějící stranu.";
            return;
        }

        if (missing === "a" || missing === "b") {
            result = Math.sqrt(Math.abs(s2 ** 2 - s1 ** 2));
        } else if (missing === "c") {
            result = Math.sqrt(s1 ** 2 + s2 ** 2);
        } else {
            outputStrana.innerHTML = "Chyba: Vyberte platnou možnost.";
            return;
        }

        if (isNaN(result)) {
            outputStrana.innerHTML = "Chyba: Zadané hodnoty nejsou platné pro pravoúhlý trojúhelník.";
        } else {
            outputStrana.innerHTML = `${result.toFixed(2)} cm`;
        }
    });
});
