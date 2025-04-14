window.onload = () => {
    // Vérifie si la pop-up a déjà été affichée dans cette session
    if (!sessionStorage.getItem("popupShown")) {
        setTimeout(() => {
            // Affiche la popup après 3 secondes
            document.getElementById("urgentPopUp").style.display = "flex";
            document.querySelector(".overlay").classList.add("displayPopUp");
            // Marque la pop-up comme affichée pour cette session
            sessionStorage.setItem("popupShown", "true");
        }, 3000);
    }

    // Fermeture de la popup
    document.getElementById("closePopUp").addEventListener("click", () => {
        document.getElementById("urgentPopUp").style.display = "none";
        document.querySelector(".overlay").classList.remove("displayPopUp");
    });

    document.querySelector(".overlay").addEventListener("click", () => {
        document.getElementById("urgentPopUp").style.display = "none";
        document.querySelector(".overlay").classList.remove("displayPopUp");
    });
};