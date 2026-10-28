/* =========================================================
   Espacio Libre — Catálogo (demo con productos ilustrativos)
   ========================================================= */

window.SITE = {
  name: "Espacio Libre",
  whatsapp: "5493794000000",          // número de demostración
  whatsappText: "Hola Espacio Libre! Quería hacer una consulta.",
  shippingNote: "Envío a todo el país. Retiro sin cargo coordinando por WhatsApp.",
  freeShipFrom: 60000
};

window.CATEGORIES = {
  conjuntos: "Conjuntos",
  tops: "Tops",
  calzas: "Calzas"
};

/* Colores reutilizables para los swatches */
const C = {
  negro:   { name: "Negro",          hex: "#1b1b1d" },
  violeta: { name: "Violeta",        hex: "#7A2EB0" },
  rosa:    { name: "Rosa viejo",     hex: "#b06a7f" },
  magenta: { name: "Magenta",        hex: "#b5277f" },
  gris:    { name: "Gris jaspeado",  hex: "#9a9aa2" },
  petroleo:{ name: "Verde petróleo", hex: "#2f6f73" },
  naranja: { name: "Naranja",        hex: "#d97a3b" },
  vino:    { name: "Vino",           hex: "#7a2340" }
};

window.PRODUCTS = [
  {
    id: "conjunto-deportivo",
    name: "Conjunto deportivo",
    category: "conjuntos",
    price: 49900,
    img: "img/conjunto-deportivo.jpg",
    colors: [C.negro, C.violeta, C.vino],
    featured: true,
    desc: "Top con soporte medio y short calza a tono. Tela suave, elástica y con buena recuperación para entrenar cómoda todo el día.",
    details: ["Tela: 88% poliéster · 12% elastano", "Secado rápido y transpirable", "Costuras planas que no marcan"]
  },
  {
    id: "top-deportivo",
    name: "Top deportivo",
    category: "tops",
    price: 26900,
    img: "img/top-deportivo.jpg",
    colors: [C.negro, C.magenta, C.violeta],
    featured: true,
    desc: "Top de entrenamiento con espalda nadadora y soporte medio. Ideal para training, funcional o para combinar con tu calza preferida.",
    details: ["Soporte medio", "Espalda nadadora", "Tela liviana y elástica"]
  },
  {
    id: "conjunto-rosa",
    name: "Conjunto short y top",
    category: "conjuntos",
    price: 42900,
    img: "img/conjunto-rosa.jpg",
    colors: [C.rosa, C.negro, C.gris],
    featured: true,
    desc: "Conjunto de top y calza larga en rosa viejo. Cintura alta que acompaña y sostiene, pensado para moverte en libertad.",
    details: ["Cintura alta", "Conjunto coordinado", "Tela de compresión suave"]
  },
  {
    id: "calza-deportiva",
    name: "Calza deportiva",
    category: "calzas",
    price: 32900,
    img: "img/calza-deportiva.jpg",
    colors: [C.gris, C.negro, C.violeta],
    featured: true,
    desc: "Calza larga de uso diario con cintura alta y tela que no transparenta. Se adapta al cuerpo y acompaña cada movimiento.",
    details: ["Cintura alta", "No transparenta", "Tela con compresión media"]
  },
  {
    id: "conjunto-training",
    name: "Conjunto training",
    category: "conjuntos",
    price: 54900,
    img: "img/conjunto-training.jpg",
    colors: [C.negro, C.petroleo],
    desc: "Conjunto de top y calza larga pensado para entrenamientos intensos. Soporte firme y tela de alta compresión.",
    details: ["Soporte firme", "Alta compresión", "Costuras reforzadas"]
  },
  {
    id: "top-essential",
    name: "Top essential",
    category: "tops",
    price: 24900,
    img: "img/top-essential.jpg",
    colors: [C.gris, C.negro, C.rosa],
    desc: "Top básico de uso diario, liviano y versátil. El que no puede faltar para combinar con todo.",
    details: ["Soporte liviano", "Uso diario", "Tela suave al tacto"]
  },
  {
    id: "calza-tiro-alto",
    name: "Calza tiro alto",
    category: "calzas",
    price: 34900,
    img: "img/calza-tiro-alto.jpg",
    colors: [C.petroleo, C.negro, C.violeta],
    desc: "Calza de tiro alto con cintura ancha que sostiene y estiliza. Tela firme ideal para training y uso diario.",
    details: ["Tiro alto", "Cintura ancha de sostén", "Tela firme"]
  },
  {
    id: "calza-training",
    name: "Calza training",
    category: "calzas",
    price: 36900,
    img: "img/calza-training.jpg",
    colors: [C.naranja, C.negro, C.gris],
    desc: "Calza larga con bolsillos laterales para llevar el celular mientras entrenás. Compresión media y cintura alta.",
    details: ["Bolsillos laterales", "Compresión media", "Cintura alta"]
  }
];

window.SIZES = ["XS", "S", "M", "L", "XL"];

/* Utilidades de catálogo */
window.getProduct = (id) => window.PRODUCTS.find(p => p.id === id);
window.catLabel = (c) => window.CATEGORIES[c] || c;
window.formatPrice = (n) =>
  "$ " + Number(n).toLocaleString("es-AR", { maximumFractionDigits: 0 });
