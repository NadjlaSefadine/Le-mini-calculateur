// Fonction de calcul de la marge
function calculerMarge(couts, vente) {
  return vente - couts;
}

// Récupération du formulaire
const formulaire = document.getElementById("margeForm");
const resultatDiv = document.getElementById("resultat");

// Gestion de l'événement submit
formulaire.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement

  const couts = parseFloat(document.getElementById("couts").value);
  const vente = parseFloat(document.getElementById("vente").value);

  if (isNaN(couts) || isNaN(vente)) {
    resultatDiv.innerHTML = "<p style='color: red;'>Veuillez entrer des valeurs valides.</p>";
    return;
  }

  const marge = calculerMarge(couts, vente);

  let message = "";
  if (marge > 0) {
    message = `Votre marge est de <strong>${marge.toFixed(2)} (FCFA)</strong>. Félicitations, vous êtes rentable !`;
  } else if (marge === 0) {
    message = ` Votre marge est de <strong>0 (FCFA)</strong>. Vous êtes à l'équilibre.`;
  } else {
    message = `Votre marge est de <strong>${marge.toFixed(2)}(FCFA)</strong>. Attention, vous êtes en perte.`;
  }

  resultatDiv.innerHTML = `<p>${message}</p>`;
});
console.log("Le script est chargé !");