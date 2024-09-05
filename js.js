// function genererPDF() {
//   const { jsPDF } = window.jspdf;
//   const doc = new jsPDF();

//   // Récupération des données du formulaire
//   const form = document.getElementById("formulaire");
//   const formData = new FormData(form);
//   let y = 20;

//   // Ajout du titre
//   doc.setFontSize(18);
//   doc.text(20, y, "Dossier de Demande EHPAD");
//   y += 10;

//   // Ajout des balises <p> dans le PDF
//   const paragraphes = document.querySelectorAll("p");
//   paragraphes.forEach((p) => {
//     doc.setFontSize(12);
//     doc.text(20, y, p.textContent);
//     y += 10;
//     if (y > 270) {
//       doc.addPage();
//       y = 20;
//     }
//   });

//   // Parcourir les données du formulaire et les ajouter au PDF
//   formData.forEach((value, key) => {
//     doc.setFontSize(12);
//     doc.text(20, y, `${key.replace(/_/g, " ")} : ${value}`);
//     y += 10;
//     if (y > 270) {
//       doc.addPage();
//       y = 20;
//     }
//   });

//   // Téléchargement du fichier PDF
//   doc.save("dossier_demande_EHPAD.pdf");
// }

// v2
// window.onload = function () {
//   // Votre script JavaScript pour générer le PDF
//   function genererPDF() {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();

//     const form = document.getElementById("formulaire");
//     const formData = new FormData(form);
//     let y = 20;

//     // Ajout du titre
//     doc.setFontSize(18);
//     doc.text(20, y, "Dossier de Demande EHPAD");
//     y += 10;

//     // Ajout des balises <p>
//     const paragraphes = document.querySelectorAll("p");
//     paragraphes.forEach((p) => {
//       doc.setFontSize(12);
//       doc.text(20, y, p.textContent);
//       y += 10;
//       if (y > 270) {
//         doc.addPage();
//         y = 20;
//       }
//     });

//     // Parcourir les données du formulaire
//     formData.forEach((value, key) => {
//       doc.setFontSize(12);
//       doc.text(20, y, `${key.replace(/_/g, " ")} : ${value}`);
//       y += 10;
//       if (y > 270) {
//         doc.addPage();
//         y = 20;
//       }
//     });

//     // Téléchargement du fichier PDF
//     doc.save("dossier_demande_EHPAD.pdf");
//   }

//   document.querySelector("button").onclick = genererPDF;
// };

// v3

function genererPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Récupération des données du formulaire
  const form = document.getElementById("formulaire");
  const formData = new FormData(form);
  let y = 20;

  // Ajout du titre
  doc.setFontSize(18);
  doc.text(20, y, "Dossier de Demande EHPAD");
  y += 10;

  // Ajout des balises <p> dans le PDF
  const paragraphes = document.querySelectorAll("p");
  paragraphes.forEach((p) => {
    doc.setFontSize(12);
    doc.text(20, y, p.textContent);
    y += 10;
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  // Parcourir les données du formulaire et les ajouter au PDF
  formData.forEach((value, key) => {
    doc.setFontSize(12);
    doc.text(20, y, `${key.replace(/_/g, " ")} : ${value}`);
    y += 10;
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  // Téléchargement du fichier PDF
  doc.save("dossier_demande_EHPAD.pdf");

  // Réinitialiser le formulaire après génération du PDF
  form.reset();
}
