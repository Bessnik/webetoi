// Écoute l'événement qui indique que le DOM est complètement chargé
document.addEventListener("DOMContentLoaded", function() {
    
    // Récupère l'élément modal qui affichera l'image agrandie
    const modal = document.getElementById("img-modal");
    
    // Récupère l'image à l'intérieur du modal pour changer sa source
    const modalImg = document.getElementById("img-modal-img");
    
    // Pour chaque image avec la classe .img-realisation dans la page
    document.querySelectorAll(".img-realisation").forEach(img => {
        
        // Ajoute un gestionnaire d'événement au clic sur chaque image
        img.onclick = () => {
            // Remplace la source de l'image du modal par celle de l'image cliquée
            modalImg.src = img.src;
            // Affiche le modal en mode flex (visible et centré)
            modal.style.display = "flex";
        };
    });
    
    // Lorsque l'on clique sur le modal (en dehors de l'image), on le cache
    modal.onclick = () => modal.style.display = "none";
});
