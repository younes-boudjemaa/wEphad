function genererPDF() {
  //   const element = document.getElementById("formulaire"); // Sélectionner l'élément à convertir en PDF

  const element = document.body; // Prendre tout le body (incluant le h1 et le formulaire)

  // Afficher temporairement les balises <p>
  const paragraphes = document.querySelectorAll("p");
  paragraphes.forEach((p) => (p.style.display = "block"));

  // Ne pas Afficher les button dans le pdf
  const button = document.querySelectorAll("button");
  button.forEach((button) => (button.style.display = "none"));

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

      // Rafraîchir la page après génération du PDF
      window.location.reload(); // Rafraîchir la page
    });

  //   // Fonction pour envoyer par email
  //   function envoyerEmail() {
  //     const mailtoLink = `mailto:recipient@example.com?subject=Dossier%20EHPAD&body=Veuillez%20trouver%20ci-joint%20le%20dossier%20EHPAD.%0A%0AN'oubliez%20pas%20de%20joindre%20le%20fichier%20PDF%20généré.`;
  //     window.location.href = mailtoLink;
  //   }
}
