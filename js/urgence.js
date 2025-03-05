window.onload = () => {
    // Vérifie si la pop-up a déjà été affichée
    if (!localStorage.getItem("popupShown")) {
        setTimeout(() => {
            // Affiche la popup après 3 secondes
            document.getElementById("urgentPopUp").style.display = "flex";
            document.querySelector(".overlay").classList.add("displayPopUp");
            // Marque la pop-up comme affichée
            localStorage.setItem("popupShown", "true");
        }, 3000); // Délai de 3 secondes
    }

    // Fermeture de la popup
    document.getElementById("closePopUp").addEventListener("click", () => {
        document.getElementById("urgentPopUp").style.display = "none";
        document.querySelector(".overlay").classList.remove("displayPopUp");
    });
};
