const form = document.querySelector("form");
const selector = document.getElementById("demande");

form.addEventListener("submit", (e) => {
    const honeypot = document.getElementById("honeyPot");

    if (honeypot.value !== "") {
        e.preventDefault(); // Stoppe l’envoi
        console.warn("Tentative de spam détectée 🚫🐀");
    }
    if (selector.value === "default") {
        e.preventDefault();
        document.getElementById("select_warning").style.display = "block";
    }
});

selector.addEventListener("change", displayForm);
document.addEventListener("DOMContentLoaded", displayForm);

function displayForm() {
    document.getElementById("select_warning").style.display = "none";
    const benevForm = document.querySelectorAll(".contact_benevolat");
    const sauvForm = document.querySelectorAll(".contact_sauvetage");
    const adoptForm = document.querySelectorAll(".contact_adoption");
    const abandonForm = document.querySelectorAll(".contact_abandon");

    benevForm.forEach(item => {
        item.style.display = "none";
        item.removeAttribute("required");
    });
    sauvForm.forEach(item => {
        item.style.display = "none";
        item.removeAttribute("required");
    });
    adoptForm.forEach(item => {
        item.style.display = "none";
        item.removeAttribute("required");
    });
    abandonForm.forEach(item => {
        item.style.display = "none";
        item.removeAttribute("required");
    });

    const allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
        radio.removeAttribute("required")
    });

    if (selector.value === "benevolat") {
        benevForm.forEach(item => {
            item.style.display = "block";
            item.setAttribute("required", "true");
        });
        let radios = document.querySelectorAll(".radio_benevolat");
        activateRadios(radios);
    } else if (selector.value === "sauvetage") {
        sauvForm.forEach(item => {
            item.style.display = "block";
            item.setAttribute("required", "true");
        });
        let radios = document.querySelectorAll(".radio_sauvetage");
        activateRadios(radios);
    } else if (selector.value === "adoption") {
        adoptForm.forEach(item => {
            item.style.display = "block";
            if (!item.classList.contains("not_required")) item.setAttribute("required", "true");
        });
        let radios = document.querySelectorAll(".radio_adoption");
        activateRadios(radios);
    } else if (selector.value === "abandon") {
        abandonForm.forEach(item => {
            item.style.display = "block";
        });
        let radios = document.querySelectorAll(".radio_abandon");
        activateRadios(radios);
    }
}

function activateRadios(items) {
    items.forEach(item => {
        item.setAttribute("required", "true");
    });
}