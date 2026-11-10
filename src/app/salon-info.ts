// =====================================================================
//  INFORMATIONS DU SALON : c'est le SEUL fichier à modifier
//  pour mettre tes vraies coordonnées, tes prix et ton équipe.
//  (les valeurs ci-dessous sont des EXEMPLES)
// =====================================================================

export const SALON = {
  nom: 'NappyCare',
  telephone: '+225 00 00 00 00 00',
  // numéro WhatsApp : indicatif + numéro, sans « + » ni espaces (ex. 2250102030405)
  whatsapp: '2250000000000',
  email: 'contact@exemple.com',
  adresse: 'Adresse du salon',
  pays: "Côte d'Ivoire",
  horaires: 'Lundi - Samedi : 8h - 19h',
};

/** Lien pour appeler directement depuis un téléphone. */
export const TEL_HREF = 'tel:' + SALON.telephone.replace(/\s/g, '');

/** Lien WhatsApp, avec un message déjà écrit (facultatif). */
export function waHref(texte = ''): string {
  return 'https://wa.me/' + SALON.whatsapp + (texte ? '?text=' + encodeURIComponent(texte) : '');
}

// Tarifs (prix en FCFA) : une fiche par formule
export const OFFRES = [
  {
    titre: 'Coupe',
    image: 'img/basic.svg',
    populaire: false,
    prix: '3 000',
    prestations: [
      'Consultation personnalisée',
      'Shampoing et soin',
      'Coupe ou entretien',
      'Coiffage',
      'Produits de qualité',
      "Conseils d'entretien",
    ],
  },
  {
    titre: 'Tresses',
    image: 'img/standard.svg',
    populaire: true,
    prix: '10 000',
    prestations: [
      'Choix du modèle avec vous',
      'Shampoing et préparation',
      'Tresses, nattes ou tissage',
      'Finitions soignées',
      'Produits de qualité',
      "Conseils d'entretien",
    ],
  },
  {
    titre: 'Coloration & soins',
    image: 'img/unlimited.svg',
    populaire: false,
    prix: '15 000',
    prestations: [
      'Diagnostic des cheveux',
      'Coloration ou décoloration',
      'Soin réparateur',
      'Shampoing et séchage',
      'Coiffage',
      "Conseils d'entretien",
    ],
  },
];

// Équipe : une fiche par personne (les photos sont dans public/img)
export const EQUIPE = [
  { nom: 'Awa', role: 'Coiffeuse', photo: 'img/team-4.jpg' },
  { nom: 'Mariam', role: 'Spécialiste tresses', photo: 'img/team-1.jpg' },
  { nom: 'Yao', role: 'Barbier', photo: 'img/team-2.jpg' },
  { nom: 'Fanta', role: 'Coloriste', photo: 'img/team-3.jpg' },
];
