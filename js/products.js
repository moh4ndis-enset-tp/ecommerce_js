// Product categories
const categories = [
  {
    id: 1,
    name: "Électronique",
    image:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Mode",
    image:
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Maison",
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Sports",
    image:
      "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Alimentation",
    image:
      "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Beauté",
    image:
      "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// Products data
const products = [
  {
    id: 1,
    name: "Smartphone Premium",
    price: 799.99,
    oldPrice: 899.99,
    discount: 11,
    image:
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 1,
    categoryName: "Électronique",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    isNew: true,
    isFeatured: true,
    description:
      "Ce smartphone haut de gamme offre les dernières innovations technologiques avec un écran AMOLED 6,7 pouces, un processeur ultra-rapide, et un système de caméra professionnelle. Idéal pour la photographie, les jeux et le multitâche.",
    specifications: [
      { name: "Écran", value: "AMOLED 6,7 pouces, 120Hz" },
      { name: "Processeur", value: "Octa-core 2.8GHz" },
      { name: "RAM", value: "8GB" },
      { name: "Stockage", value: "256GB" },
      { name: "Caméra", value: "Triple caméra 50MP + 12MP + 10MP" },
      { name: "Batterie", value: "4500mAh, charge rapide 45W" },
    ],
    reviews: [
      {
        name: "Sophie Martin",
        rating: 5,
        comment:
          "Excellent smartphone, rapide et avec une belle qualité d'image !",
        date: "2025-03-15",
      },
      {
        name: "Thomas Durand",
        rating: 4,
        comment: "Très bon appareil, mais l'autonomie pourrait être meilleure.",
        date: "2025-02-28",
      },
    ],
  },
  {
    id: 2,
    name: "Casque Sans Fil à Réduction de Bruit",
    price: 249.99,
    oldPrice: 299.99,
    discount: 17,
    image:
      "https://images.pexels.com/photos/3394654/pexels-photo-3394654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 1,
    categoryName: "Électronique",
    rating: 4.7,
    reviewCount: 86,
    inStock: true,
    isNew: false,
    isFeatured: true,
    description:
      "Ce casque sans fil haut de gamme offre une qualité sonore exceptionnelle et une réduction de bruit active qui vous isole complètement de votre environnement. Avec une autonomie de 30 heures et un confort optimal, c'est le compagnon idéal pour vos voyages et votre quotidien.",
    specifications: [
      { name: "Type", value: "Circum-aural fermé" },
      { name: "Connectivité", value: "Bluetooth 5.2, jack 3.5mm" },
      { name: "Autonomie", value: "30 heures avec ANC" },
      { name: "Microphone", value: "Intégré avec réduction de bruit" },
      { name: "Poids", value: "250g" },
    ],
    reviews: [
      {
        name: "Julie Petit",
        rating: 5,
        comment:
          "La réduction de bruit est impressionnante, je ne peux plus m'en passer !",
        date: "2025-04-02",
      },
      {
        name: "Pierre Lemoine",
        rating: 4,
        comment: "Son de qualité, confortable pour les longues sessions.",
        date: "2025-03-20",
      },
    ],
  },
  {
    id: 3,
    name: "Montre Connectée Sport",
    price: 199.99,
    oldPrice: null,
    discount: 0,
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 1,
    categoryName: "Électronique",
    rating: 4.5,
    reviewCount: 62,
    inStock: true,
    isNew: true,
    isFeatured: false,
    description:
      "Cette montre connectée est conçue pour les sportifs avec un suivi précis de plus de 30 activités, GPS intégré, mesure de la fréquence cardiaque et de l'oxygène sanguin. Résistante à l'eau jusqu'à 50m, elle vous accompagnera dans toutes vos aventures.",
    specifications: [
      { name: "Écran", value: "AMOLED 1.4 pouces" },
      { name: "Capteurs", value: "FC, SpO2, GPS, Accéléromètre" },
      { name: "Autonomie", value: "14 jours en mode basique" },
      { name: "Résistance", value: "5 ATM (50m)" },
      { name: "Compatibilité", value: "iOS 12+ / Android 7+" },
    ],
    reviews: [
      {
        name: "Marie Dupont",
        rating: 5,
        comment: "Exactement ce qu'il me fallait pour mon triathlon !",
        date: "2025-03-10",
      },
      {
        name: "Lucas Moreau",
        rating: 4,
        comment: "Bonne montre, l'autonomie est impressionnante.",
        date: "2025-02-15",
      },
    ],
  },
  {
    id: 4,
    name: "Tablette Ultra HD",
    price: 399.99,
    oldPrice: 449.99,
    discount: 11,
    image:
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 1,
    categoryName: "Électronique",
    rating: 4.6,
    reviewCount: 48,
    inStock: true,
    isNew: false,
    isFeatured: true,
    description:
      "Cette tablette ultra-fine combine puissance et élégance avec son écran 2K de 11 pouces. Parfaite pour le travail, les études ou le divertissement, elle offre une expérience visuelle immersive et des performances fluides grâce à son processeur de dernière génération.",
    specifications: [
      { name: "Écran", value: "11 pouces 2K (2560x1600)" },
      { name: "Processeur", value: "Octa-core 2.4GHz" },
      { name: "RAM", value: "6GB" },
      { name: "Stockage", value: "128GB extensible" },
      { name: "Batterie", value: "8000mAh" },
      { name: "Caméras", value: "8MP avant, 13MP arrière" },
    ],
    reviews: [
      {
        name: "Camille Leroy",
        rating: 5,
        comment: "L'écran est magnifique, parfait pour regarder des films !",
        date: "2025-03-25",
      },
      {
        name: "Antoine Dubois",
        rating: 4,
        comment: "Bonne tablette polyvalente, rapport qualité-prix excellent.",
        date: "2025-03-05",
      },
    ],
  },
  {
    id: 5,
    name: "Appareil Photo Mirrorless",
    price: 899.99,
    oldPrice: 999.99,
    discount: 10,
    image:
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 1,
    categoryName: "Électronique",
    rating: 4.9,
    reviewCount: 37,
    inStock: true,
    isNew: false,
    isFeatured: true,
    description:
      "Cet appareil photo mirrorless offre une qualité d'image professionnelle dans un boîtier compact. Avec son capteur full-frame de 24.2MP, sa stabilisation d'image 5 axes et sa capacité à filmer en 4K, c'est l'outil idéal pour les photographes et vidéastes exigeants.",
    specifications: [
      { name: "Capteur", value: "CMOS Full-frame 24.2MP" },
      { name: "Processeur", value: "X-Processor Pro 5" },
      { name: "ISO", value: "100-51200 (ext. 50-204800)" },
      { name: "Stabilisation", value: "5 axes, 7 stops" },
      { name: "Vidéo", value: "4K/60fps, 1080p/120fps" },
      { name: "Écran", value: "LCD tactile 3.2 pouces, orientable" },
    ],
    reviews: [
      {
        name: "François Leclerc",
        rating: 5,
        comment:
          "La qualité d'image est exceptionnelle, même en basse lumière.",
        date: "2025-04-05",
      },
      {
        name: "Élodie Blanc",
        rating: 5,
        comment: "Léger, compact et performant, que demander de plus ?",
        date: "2025-03-12",
      },
    ],
  },
  {
    id: 6,
    name: "Veste en Cuir Classique",
    price: 249.99,
    oldPrice: null,
    discount: 0,
    image:
      "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 2,
    categoryName: "Mode",
    rating: 4.7,
    reviewCount: 42,
    inStock: true,
    isNew: false,
    isFeatured: false,
    description:
      "Cette veste en cuir véritable allie style intemporel et qualité exceptionnelle. Fabriquée à partir de cuir souple et résistant, elle est dotée d'une doublure en satin et de plusieurs poches pratiques. Un classique du vestiaire qui se bonifie avec le temps.",
    specifications: [
      { name: "Matière", value: "Cuir véritable premium" },
      { name: "Doublure", value: "Satin" },
      { name: "Fermeture", value: "Zip YKK" },
      { name: "Poches", value: "2 extérieures, 3 intérieures" },
      { name: "Entretien", value: "Nettoyage à sec professionnel" },
    ],
    reviews: [
      {
        name: "Nicolas Renard",
        rating: 5,
        comment: "Superbe qualité, le cuir est souple et sent bon !",
        date: "2025-02-20",
      },
      {
        name: "Charlotte Mercier",
        rating: 4,
        comment: "Belle coupe, taille parfaitement.",
        date: "2025-01-15",
      },
    ],
  },
  {
    id: 7,
    name: "Baskets Running Performance",
    price: 129.99,
    oldPrice: 149.99,
    discount: 13,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 2,
    categoryName: "Mode",
    rating: 4.6,
    reviewCount: 56,
    inStock: true,
    isNew: true,
    isFeatured: true,
    description:
      "Ces baskets de running combinent technologie avancée et confort optimal. La semelle intermédiaire réactive offre un retour d'énergie exceptionnel, tandis que la tige respirante assure une excellente ventilation. Idéales pour les coureurs réguliers cherchant performance et durabilité.",
    specifications: [
      { name: "Type", value: "Running neutre" },
      { name: "Drop", value: "8mm" },
      { name: "Poids", value: "290g (taille 42)" },
      { name: "Amorti", value: "ReactFoam" },
      { name: "Semelle", value: "Caoutchouc haute résistance" },
      { name: "Respirabilité", value: "Tissu mesh aéré" },
    ],
    reviews: [
      {
        name: "David Bernard",
        rating: 5,
        comment:
          "Confortables dès la première utilisation, parfaites pour mes marathons !",
        date: "2025-03-28",
      },
      {
        name: "Aurélie Roux",
        rating: 4,
        comment: "Bon amorti, mes genoux vous remercient.",
        date: "2025-03-15",
      },
    ],
  },
  {
    id: 8,
    name: "Sac à Main Designer",
    price: 199.99,
    oldPrice: 249.99,
    discount: 20,
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 2,
    categoryName: "Mode",
    rating: 4.8,
    reviewCount: 31,
    inStock: true,
    isNew: false,
    isFeatured: true,
    description:
      "Ce sac à main designer conjugue élégance et praticité. Fabriqué en cuir grainé de haute qualité, il arbore une finition soignée et des détails métalliques raffinés. Son format polyvalent et ses nombreux compartiments en font l'accessoire parfait pour le quotidien comme pour les occasions spéciales.",
    specifications: [
      { name: "Matière", value: "Cuir de veau grainé" },
      { name: "Dimensions", value: "30 x 20 x 12 cm" },
      { name: "Fermeture", value: "Zip et fermoir magnétique" },
      { name: "Compartiments", value: "3 principaux, 2 poches zippées" },
      { name: "Bandoulière", value: "Ajustable et amovible" },
    ],
    reviews: [
      {
        name: "Émilie Faure",
        rating: 5,
        comment: "Magnifique sac, très bien conçu avec plein de rangements !",
        date: "2025-02-28",
      },
      {
        name: "Sarah Legrand",
        rating: 4,
        comment: "Élégant et pratique, je l'adore.",
        date: "2025-02-10",
      },
    ],
  },
  {
    id: 9,
    name: "Fauteuil Scandinave",
    price: 299.99,
    oldPrice: null,
    discount: 0,
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 3,
    categoryName: "Maison",
    rating: 4.7,
    reviewCount: 29,
    inStock: true,
    isNew: false,
    isFeatured: true,
    description:
      "Ce fauteuil au design scandinave apportera une touche d'élégance à votre intérieur. Son assise profonde et ses accoudoirs rembourrés offrent un confort optimal, tandis que sa structure en bois massif garantit solidité et durabilité. Un meuble à la fois esthétique et fonctionnel.",
    specifications: [
      { name: "Structure", value: "Bois de chêne massif" },
      { name: "Revêtement", value: "Tissu polyester haute résistance" },
      { name: "Rembourrage", value: "Mousse haute densité" },
      { name: "Dimensions", value: "76 x 82 x 87 cm (L x P x H)" },
      { name: "Pieds", value: "Bois naturel, hauteur 15 cm" },
      { name: "Entretien", value: "Housse déhoussable et lavable" },
    ],
    reviews: [
      {
        name: "Jean-Pierre Moreau",
        rating: 5,
        comment: "Superbe fauteuil, très confortable et robuste.",
        date: "2025-03-20",
      },
      {
        name: "Isabelle Lambert",
        rating: 4,
        comment: "Design élégant qui s'intègre parfaitement à mon salon.",
        date: "2025-02-28",
      },
    ],
  },
  {
    id: 10,
    name: "Plante d'Intérieur Décorative",
    price: 39.99,
    oldPrice: null,
    discount: 0,
    image:
      "https://images.pexels.com/photos/6913841/pexels-photo-6913841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 3,
    categoryName: "Maison",
    rating: 4.5,
    reviewCount: 38,
    inStock: true,
    isNew: true,
    isFeatured: false,
    description:
      "Cette plante d'intérieur apportera une touche de verdure et de sérénité à votre espace de vie. Facile d'entretien et purificatrice d'air, elle est livrée dans un pot élégant qui s'harmonisera avec tous les styles de décoration. Un élément naturel parfait pour égayer votre intérieur.",
    specifications: [
      { name: "Type", value: "Monstera Deliciosa" },
      { name: "Hauteur", value: "60-80 cm (pot inclus)" },
      { name: "Pot", value: "Céramique blanche Ø 20 cm" },
      { name: "Entretien", value: "Arrosage modéré, lumière indirecte" },
      { name: "Purification", value: "Élimine les toxines de l'air" },
    ],
    reviews: [
      {
        name: "Nathalie Dumont",
        rating: 5,
        comment: "Magnifique plante, livrée en parfait état !",
        date: "2025-04-02",
      },
      {
        name: "Olivier Martin",
        rating: 4,
        comment: "Belle plante, le pot est de bonne qualité.",
        date: "2025-03-15",
      },
    ],
  },
  {
    id: 11,
    name: "Cafetière Italienne",
    price: 29.99,
    oldPrice: 39.99,
    discount: 25,
    image:
      "https://images.pexels.com/photos/6501751/pexels-photo-6501751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 3,
    categoryName: "Maison",
    rating: 4.6,
    reviewCount: 45,
    inStock: true,
    isNew: false,
    isFeatured: false,
    description:
      "Cette cafetière italienne traditionnelle vous permettra de préparer un café riche et aromatique. Fabriquée en aluminium de haute qualité, elle est conçue pour une utilisation quotidienne et durable. Compatible avec tous types de cuisinières (sauf induction), elle est le choix parfait pour les amateurs de café authentique.",
    specifications: [
      { name: "Matériau", value: "Aluminium poli" },
      { name: "Capacité", value: "6 tasses" },
      { name: "Compatibilité", value: "Gaz, électrique, vitrocéramique" },
      { name: "Dimensions", value: "16 x 10 x 20 cm" },
      { name: "Entretien", value: "Lavage à la main recommandé" },
    ],
    reviews: [
      {
        name: "Stéphane Roche",
        rating: 5,
        comment: "Le café a un goût incomparable avec cette cafetière !",
        date: "2025-03-25",
      },
      {
        name: "Claire Benoit",
        rating: 4,
        comment: "Simple et efficace, comme en Italie.",
        date: "2025-03-02",
      },
    ],
  },
  {
    id: 12,
    name: "Raquette de Tennis Pro",
    price: 179.99,
    oldPrice: 199.99,
    discount: 10,
    image:
      "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 4,
    categoryName: "Sports",
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    isNew: true,
    isFeatured: true,
    description:
      "Cette raquette de tennis professionnelle combine puissance et contrôle. Son cadre en graphite haute résistance et sa technologie d'amortissement des vibrations offrent des sensations exceptionnelles à chaque frappe. Idéale pour les joueurs de niveau intermédiaire à avancé cherchant à améliorer leurs performances.",
    specifications: [
      { name: "Poids", value: "300g (non cordée)" },
      { name: "Taille de tamis", value: "645 cm²" },
      { name: "Équilibre", value: "320mm (légèrement en tête)" },
      { name: "Rigidité", value: "RA 67" },
      { name: "Plan de cordage", value: "16x19" },
      { name: "Matériau", value: "Graphite composite" },
    ],
    reviews: [
      {
        name: "Julien Dupont",
        rating: 5,
        comment: "Excellente raquette, mon jeu s'est nettement amélioré !",
        date: "2025-04-05",
      },
      {
        name: "Marion Petit",
        rating: 4,
        comment: "Bon équilibre entre puissance et contrôle.",
        date: "2025-03-20",
      },
    ],
  },
  {
    id: 13,
    name: "Tapis de Yoga Antidérapant",
    price: 49.99,
    oldPrice: 59.99,
    discount: 17,
    image:
      "https://images.pexels.com/photos/4498575/pexels-photo-4498575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 4,
    categoryName: "Sports",
    rating: 4.6,
    reviewCount: 52,
    inStock: true,
    isNew: false,
    isFeatured: false,
    description:
      "Ce tapis de yoga premium offre une adhérence exceptionnelle et un confort optimal pour votre pratique. Sa surface antidérapante assure une stabilité parfaite dans toutes les postures, tandis que son épaisseur de 6mm protège vos articulations. Fabriqué en matériaux écologiques et non toxiques, il est l'allié idéal pour une pratique respectueuse de l'environnement.",
    specifications: [
      { name: "Dimensions", value: "183 x 61 cm" },
      { name: "Épaisseur", value: "6mm" },
      { name: "Matériau", value: "TPE écologique (sans PVC)" },
      { name: "Poids", value: "1.8kg" },
      { name: "Entretien", value: "Lavable à l'eau savonneuse" },
      { name: "Transport", value: "Sangle de transport incluse" },
    ],
    reviews: [
      {
        name: "Sophie Martel",
        rating: 5,
        comment: "Excellent grip, ne glisse pas même en transpiration !",
        date: "2025-03-28",
      },
      {
        name: "Léa Fontaine",
        rating: 4,
        comment: "Confortable et de bonne qualité, je recommande.",
        date: "2025-03-10",
      },
    ],
  },
  {
    id: 14,
    name: "Gourde Isotherme Sport",
    price: 24.99,
    oldPrice: null,
    discount: 0,
    image:
      "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 4,
    categoryName: "Sports",
    rating: 4.7,
    reviewCount: 36,
    inStock: true,
    isNew: false,
    isFeatured: false,
    description:
      "Cette gourde isotherme de qualité professionnelle maintient vos boissons froides pendant 24h ou chaudes pendant 12h. Fabriquée en acier inoxydable double paroi et sans BPA, elle est résistante aux chocs et aux fuites. Son bouchon sport pratique et sa grande contenance en font l'accessoire indispensable pour toutes vos activités.",
    specifications: [
      { name: "Capacité", value: "750ml" },
      { name: "Matériau", value: "Acier inoxydable 18/8" },
      { name: "Isolation", value: "Double paroi sous vide" },
      { name: "Performance", value: "Froid 24h / Chaud 12h" },
      { name: "Bouchon", value: "Sport étanche anti-fuites" },
      { name: "Dimensions", value: "Ø 7.5 x 27 cm" },
    ],
    reviews: [
      {
        name: "Mathieu Robert",
        rating: 5,
        comment:
          "Excellente isolation, mon eau reste fraîche toute la journée !",
        date: "2025-03-15",
      },
      {
        name: "Laura Simon",
        rating: 4,
        comment: "Très pratique et solide, je l'emporte partout.",
        date: "2025-02-28",
      },
    ],
  },
  {
    id: 15,
    name: "Coffret Thés Premium",
    price: 34.99,
    oldPrice: 39.99,
    discount: 13,
    image:
      "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 5,
    categoryName: "Alimentation",
    rating: 4.9,
    reviewCount: 27,
    inStock: true,
    isNew: true,
    isFeatured: true,
    description:
      "Ce coffret de thés premium réunit une sélection des meilleurs thés du monde. Composé de 6 variétés différentes (noir, vert, blanc, oolong, rooibos et infusion), il permet de découvrir des saveurs uniques et raffinées. Présenté dans un écrin élégant, c'est également une idée cadeau parfaite pour les amateurs de thé.",
    specifications: [
      { name: "Contenu", value: "6 boîtes de 50g" },
      {
        name: "Variétés",
        value:
          "Thé noir Darjeeling, thé vert Sencha, thé blanc Bai Mu Dan, Oolong de Formose, Rooibos d'Afrique du Sud, Infusion fruits rouges",
      },
      { name: "Origine", value: "Inde, Japon, Chine, Taïwan, Afrique du Sud" },
      { name: "Conservation", value: "18 mois dans un endroit sec" },
      { name: "Packaging", value: "Coffret bois avec fermeture aimantée" },
    ],
    reviews: [
      {
        name: "Patricia Legrand",
        rating: 5,
        comment: "Des thés d'exception, un vrai moment de plaisir !",
        date: "2025-04-02",
      },
      {
        name: "Michel Bertrand",
        rating: 5,
        comment:
          "Excellente sélection, parfait pour découvrir différentes variétés.",
        date: "2025-03-20",
      },
    ],
  },
  {
    id: 16,
    name: "Huile d'Olive Extra Vierge",
    price: 19.99,
    oldPrice: null,
    discount: 0,
    image:
      "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 5,
    categoryName: "Alimentation",
    rating: 4.8,
    reviewCount: 42,
    inStock: true,
    isNew: false,
    isFeatured: false,
    description:
      "Cette huile d'olive extra vierge premium est pressée à froid à partir d'olives sélectionnées à maturité optimale. Son goût fruité et sa légère note poivrée en fin de bouche en font un condiment d'exception pour sublimer vos salades et plats méditerranéens. Issue d'une production artisanale et durable, elle incarne l'excellence de la gastronomie méditerranéenne.",
    specifications: [
      { name: "Volume", value: "500ml" },
      { name: "Variété", value: "Olives Arbequina" },
      { name: "Origine", value: "Espagne (Andalousie)" },
      { name: "Production", value: "Première pression à froid" },
      { name: "Acidité", value: "<0.3%" },
      {
        name: "Conditionnement",
        value: "Bouteille en verre teinté avec bouchon verseur",
      },
    ],
    reviews: [
      {
        name: "Christine Dubois",
        rating: 5,
        comment: "Une huile d'olive exceptionnelle, goût fruité parfait !",
        date: "2025-03-25",
      },
      {
        name: "Philippe Martin",
        rating: 5,
        comment: "Qualité remarquable, idéale pour les salades.",
        date: "2025-03-05",
      },
    ],
  },
  {
    id: 17,
    name: "Assortiment de Chocolats Fins",
    price: 24.99,
    oldPrice: 29.99,
    discount: 17,
    image:
      "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 5,
    categoryName: "Alimentation",
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    isNew: false,
    isFeatured: true,
    description:
      "Cet assortiment de chocolats fins ravira les palais les plus exigeants. Élaboré par un maître chocolatier, il propose une sélection variée de ganaches, pralinés et truffes aux saveurs subtiles et originales. Présenté dans un écrin élégant, c'est une invitation à un voyage gustatif d'exception.",
    specifications: [
      { name: "Contenu", value: "24 chocolats assortis" },
      { name: "Poids", value: "250g" },
      { name: "Variétés", value: "Ganache, praliné, truffe, gianduja" },
      { name: "Origine du cacao", value: "Équateur, Madagascar, Venezuela" },
      { name: "Ingrédients", value: "Cacao min. 70%, sans huile de palme" },
      { name: "Conservation", value: "1 mois à température ambiante" },
    ],
    reviews: [
      {
        name: "Céline Durand",
        rating: 5,
        comment: "Des chocolats divins, un vrai moment de plaisir !",
        date: "2025-04-02",
      },
      {
        name: "Mathieu Lefèvre",
        rating: 5,
        comment: "Excellent assortiment, parfait équilibre des saveurs.",
        date: "2025-03-15",
      },
    ],
  },
  {
    id: 18,
    name: "Crème Hydratante Visage",
    price: 29.99,
    oldPrice: 34.99,
    discount: 14,
    image:
      "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 6,
    categoryName: "Beauté",
    rating: 4.7,
    reviewCount: 56,
    inStock: true,
    isNew: true,
    isFeatured: true,
    description:
      "Cette crème hydratante premium nourrit intensément votre peau tout en la protégeant des agressions extérieures. Sa formule enrichie en acide hyaluronique et en vitamines procure une hydratation longue durée et un effet lissant immédiat. Non grasse et rapidement absorbée, elle convient à tous les types de peau.",
    specifications: [
      { name: "Contenance", value: "50ml" },
      { name: "Type de peau", value: "Tous types, même sensibles" },
      {
        name: "Ingrédients clés",
        value: "Acide hyaluronique, Vitamine E, Beurre de karité",
      },
      { name: "Sans", value: "Parabènes, silicones, parfum artificiel" },
      { name: "Testé", value: "Dermatologiquement approuvé" },
      { name: "Production", value: "Fabriqué en France" },
    ],
    reviews: [
      {
        name: "Sandrine Leroy",
        rating: 5,
        comment: "Ma peau est transformée, hydratée et éclatante !",
        date: "2025-04-05",
      },
      {
        name: "Aurélie Morel",
        rating: 4,
        comment: "Texture légère et parfum agréable, bonne hydratation.",
        date: "2025-03-20",
      },
    ],
  },
  {
    id: 19,
    name: "Coffret Soins Homme",
    price: 49.99,
    oldPrice: 59.99,
    discount: 17,
    image:
      "https://images.pexels.com/photos/1493319/pexels-photo-1493319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 6,
    categoryName: "Beauté",
    rating: 4.6,
    reviewCount: 28,
    inStock: true,
    isNew: false,
    isFeatured: false,
    description:
      "Ce coffret de soins premium pour homme comprend tout le nécessaire pour une routine beauté complète. Élaboré avec des ingrédients naturels et des formulations adaptées à la peau masculine, il offre hydratation, protection et confort au quotidien. Présenté dans un packaging élégant, c'est également un cadeau idéal.",
    specifications: [
      {
        name: "Contenu",
        value:
          "Gel nettoyant 100ml, Crème hydratante 50ml, Baume après-rasage 75ml, Gel douche 200ml",
      },
      { name: "Fragrance", value: "Notes boisées et agrumes" },
      { name: "Ingrédients", value: "Aloe vera, Huile d'argan, Vitamine E" },
      { name: "Type de peau", value: "Tous types" },
      { name: "Sans", value: "Parabènes, sulfates, colorants" },
    ],
    reviews: [
      {
        name: "Thomas Garcia",
        rating: 5,
        comment:
          "Excellents produits, ma peau est moins irritée après le rasage.",
        date: "2025-03-28",
      },
      {
        name: "Vincent Dupuis",
        rating: 4,
        comment: "Bon rapport qualité-prix, parfum agréable et discret.",
        date: "2025-03-10",
      },
    ],
  },
  {
    id: 20,
    name: "Palette Maquillage Professionnelle",
    price: 45.99,
    oldPrice: 59.99,
    discount: 23,
    image:
      "https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: 6,
    categoryName: "Beauté",
    rating: 4.8,
    reviewCount: 47,
    inStock: true,
    isNew: false,
    isFeatured: true,
    description:
      "Cette palette de maquillage professionnelle offre une sélection complète de couleurs hautement pigmentées pour créer une infinité de looks. Ses fards à paupières veloutés, ses blushes soyeux et ses enlumineurs scintillants garantissent un résultat impeccable et une tenue longue durée. Un must-have pour les passionnés de maquillage.",
    specifications: [
      {
        name: "Contenu",
        value:
          "24 fards à paupières, 4 blushes, 2 enlumineurs, 2 poudres à sourcils",
      },
      { name: "Finis", value: "Mat, satiné, métallisé, pailleté" },
      { name: "Pigmentation", value: "Haute intensité" },
      { name: "Tenue", value: "Longue durée (12h+)" },
      { name: "Miroir", value: "Intégré" },
      { name: "Applicateurs", value: "2 pinceaux double-embout inclus" },
    ],
    reviews: [
      {
        name: "Julie Mercier",
        rating: 5,
        comment: "Pigmentation incroyable, les couleurs sont magnifiques !",
        date: "2025-04-02",
      },
      {
        name: "Emma Rousseau",
        rating: 4,
        comment: "Excellente palette, bonne variété de teintes.",
        date: "2025-03-15",
      },
    ],
  },
];

// Generate a few more products to have more data
/*
for (let i = 21; i <= 50; i++) {
  // Create a clone of a random product and modify it
  const originalProduct = products[Math.floor(Math.random() * 20)];
  const clone = { ...originalProduct };

  clone.id = i;
  clone.name = `${originalProduct.name} - Variante ${i - 20}`;
  clone.price = parseFloat(
    (originalProduct.price * (0.9 + Math.random() * 0.3)).toFixed(2)
  );
  clone.oldPrice =
    Math.random() > 0.5 ? parseFloat((clone.price * 1.2).toFixed(2)) : null;
  clone.discount = clone.oldPrice
    ? Math.round((1 - clone.price / clone.oldPrice) * 100)
    : 0;
  clone.rating =
    parseFloat((4 + Math.random()).toFixed(1)) > 5
      ? 5
      : parseFloat((4 + Math.random()).toFixed(1));
  clone.reviewCount = Math.floor(Math.random() * 50) + 10;
  clone.isNew = Math.random() > 0.8;
  clone.isFeatured = Math.random() > 0.7;

  products.push(clone);
}
  */

// Function to get all products
function getAllProducts() {
  return products;
}

// Function to get categories
function getCategories() {
  return categories;
}

// Function to get a product by ID
function getProductById(id) {
  return products.find((product) => product.id === parseInt(id)) || null;
}

// Function to get products by category
function getProductsByCategory(categoryId) {
  return products.filter(
    (product) => product.category === parseInt(categoryId)
  );
}

// Function to get featured products
function getFeaturedProducts(limit = 8) {
  return products
    .filter((product) => product.isFeatured)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}

// Function to get new products
function getNewProducts(limit = 8) {
  return products
    .filter((product) => product.isNew)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}

// Function to search products
function searchProducts(query) {
  const searchTerm = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.categoryName.toLowerCase().includes(searchTerm)
  );
}

// Function to get related products
function getRelatedProducts(productId, limit = 4) {
  const product = getProductById(productId);
  if (!product) return [];

  return products
    .filter(
      (p) => p.category === product.category && p.id !== parseInt(productId)
    )
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}

// Function to filter and sort products
function filterProducts(options = {}) {
  let filteredProducts = [...products];

  // Filter by category
  if (options.category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === parseInt(options.category)
    );
  }

  // Filter by price range
  if (options.minPrice !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= parseFloat(options.minPrice)
    );
  }

  if (options.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseFloat(options.maxPrice)
    );
  }

  // Filter by availability
  if (options.inStock !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product) => product.inStock === options.inStock
    );
  }

  // Filter by new products
  if (options.isNew !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product) => product.isNew === options.isNew
    );
  }

  // Sort products
  if (options.sort) {
    switch (options.sort) {
      case "priceAsc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "nameAsc":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sort by id
        filteredProducts.sort((a, b) => a.id - b.id);
    }
  }

  return filteredProducts;
}

// Export functions
window.productService = {
  getAllProducts,
  getCategories,
  getProductById,
  getProductsByCategory,
  getFeaturedProducts,
  getNewProducts,
  searchProducts,
  getRelatedProducts,
  filterProducts,
};
