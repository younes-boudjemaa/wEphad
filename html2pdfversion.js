function genererPDF() {
  const element = document.getElementById("formulaire"); // Sélectionner l'élément à convertir en PDF

  // Afficher temporairement les balises <p>
  const paragraphes = document.querySelectorAll("p");
  paragraphes.forEach((p) => (p.style.display = "block"));

  // Options pour le PDF (personnalisation de la mise en page)
  const options = {
    margin: 0.5, // Marges du PDF
    filename: "dossier_demande_EHPAD.pdf", // Nom du fichier
    image: { type: "jpeg", quality: 0.98 }, // Format et qualité de l'image
    html2canvas: { scale: 2 }, // Améliorer la résolution
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }, // Paramètres du PDF
  };

  // Générer et télécharger le PDF
  html2pdf()
    .from(element)
    .set(options)
    .save()
    .then(() => {
      // Réinitialiser le formulaire après génération du PDF
      document.getElementById("formulaire").reset();
    });
}
