document.querySelectorAll(".adopt").forEach(chat => {
    const popUpId = chat.getAttribute("data-popup-id");
    const popUp = document.getElementById(popUpId);
    const overlay = document.querySelector(".overlay");
    const closePopUp = popUp.querySelector(".noticePopUp");

    // Event listener pour ouvrir la pop-up
    chat.addEventListener("click", (event) => {
        // On s'assure que la pop-up n'est pas déjà ouverte
        if (!popUp.classList.contains("displayPopUp")) {
            popUp.classList.add("displayPopUp");
            overlay.classList.add("displayPopUp");
        }
        event.stopPropagation(); // Empêche la propagation vers les autres événements
    });

    // Event listener pour fermer la pop-up en cliquant sur l'overlay
    overlay.addEventListener("click", (event) => {
        closePopUpFunction();
        event.stopPropagation(); // Empêche que l'overlay affecte d'autres éléments
    });

    // Event listener pour fermer la pop-up avec le bouton
    closePopUp.addEventListener("click", (event) => {
        closePopUpFunction();
        event.stopPropagation(); // Evite que l'événement se propage
    });

    // Fonction de fermeture de la pop-up
    function closePopUpFunction() {
        popUp.classList.remove("displayPopUp");
        overlay.classList.remove("displayPopUp");
    }
});