// Catálogo separado para que modelos, fotos y variantes puedan actualizarse fácilmente.
// audience y garment sostienen los filtros actuales y una futura migración a Shopify.
const products = [
  {
    "id": "SW-001",
    "name": "Sweater Oversize Canalé",
    "audience": "mujer",
    "garment": "chompas",
    "image": "IMG_3473.JPG",
    "images": [
      "IMG_3473.JPG",
      "4cfbc19f-15ef-40ff-a95d-61e066cfa4cf.JPG",
      "mujer/SW-001_sweater-oversize-canale-rojo.jpg",
      "mujer/SW-001_sweater-oversize-canale-blanco-crudo.jpg",
      "mujer/SW-001_sweater-oversize-canale-camel.jpg"
    ],
    "colors": [
      "Beige",
      "Rojo",
      "Blanco crudo",
      "Camel"
    ],
    "type": "Sweater",
    "knit": "Canalé",
    "details": "Cuello redondo · manga amplia · silueta oversize"
  },
  {
    "id": "CD-001",
    "name": "Cardigan Ondas",
    "audience": "mujer",
    "garment": "cardigans",
    "image": "AB31AE83-8204-4AB1-9046-5F95EEAA3CFF.JPG",
    "images": [
      "AB31AE83-8204-4AB1-9046-5F95EEAA3CFF.JPG"
    ],
    "colors": [
      "Taupe"
    ],
    "type": "Cardigan",
    "knit": "Trenzas y calado",
    "details": "Manga larga · botones · bordes ondulados"
  },
  {
    "id": "PL-001",
    "name": "Polo Calado",
    "audience": "mujer",
    "garment": "polo",
    "image": "IMG_3448.JPEG",
    "images": [
      "IMG_3448.JPEG",
      "mujer/PL-001_polo-calado-rojo.jpg",
      "mujer/PL-001_polo-calado-mostaza.jpg"
    ],
    "colors": [
      "Blanco crudo",
      "Rojo",
      "Mostaza"
    ],
    "type": "Polo",
    "knit": "Calado",
    "details": "Cuello polo · manga larga · textura geométrica"
  },
  {
    "id": "SW-003",
    "name": "Sweater V Trenzado",
    "audience": "mujer",
    "garment": "chompas",
    "image": "image00011.JPG",
    "images": [
      "image00011.JPG",
      "image00013.JPG"
    ],
    "colors": [
      "Azul acero"
    ],
    "type": "Sweater",
    "knit": "Trenzas",
    "details": "Escote V · manga amplia · trenzas verticales"
  },
  {
    "id": "CD-002",
    "name": "Cardigan Trenzado",
    "audience": "mujer",
    "garment": "cardigans",
    "image": "IMG_3445.JPEG",
    "images": [
      "IMG_3445.JPEG"
    ],
    "colors": [
      "Beige"
    ],
    "type": "Cardigan",
    "knit": "Trenzas",
    "details": "Silueta corta · frente abierto · manga con volumen"
  },
  {
    "id": "ST-001",
    "name": "Conjunto Calado",
    "audience": "mujer",
    "garment": "sets",
    "season": "verano",
    "image": "IMG_3438.JPEG",
    "images": [
      "IMG_3438.JPEG",
      "IMG_3447.JPEG",
      "mujer/ST-001_conjunto-calado-beige.jpg",
      "mujer/ST-001_conjunto-calado-negro.jpg"
    ],
    "colors": [
      "Crudo",
      "Beige",
      "Negro"
    ],
    "type": "Conjunto",
    "knit": "Calado",
    "details": "Top y falda · cintura ajustable · detalle calado"
  },
  {
    "id": "ST-004",
    "name": "Conjunto Crochet Cardigan",
    "audience": "mujer",
    "garment": "sets",
    "image": "mujer/ST-004_conjunto-crochet-cardigan-crudo.jpg",
    "images": [
      "mujer/ST-004_conjunto-crochet-cardigan-crudo.jpg"
    ],
    "colors": [
      "Crudo"
    ],
    "type": "Conjunto",
    "knit": "Crochet",
    "details": "Cardigan calado y short · tejido abierto"
  },
  {
    "id": "ST-005",
    "name": "Conjunto Crochet Maxi",
    "audience": "mujer",
    "garment": "sets",
    "image": "mujer/ST-005_conjunto-crochet-maxi-crudo.jpg",
    "images": [
      "mujer/ST-005_conjunto-crochet-maxi-crudo.jpg"
    ],
    "colors": [
      "Crudo"
    ],
    "type": "Conjunto",
    "knit": "Crochet",
    "details": "Top calado y falda maxi · amarre lateral"
  },
  {
    "id": "ST-002",
    "name": "Conjunto Lila",
    "audience": "mujer",
    "garment": "sets",
    "season": "verano",
    "image": "IMG_3446.JPEG",
    "images": [
      "IMG_3446.JPEG"
    ],
    "colors": [
      "Lila"
    ],
    "type": "Conjunto",
    "knit": "Trenzas",
    "details": "Cardigan corto y top · acabado en canalé"
  },
  {
    "id": "TP-001",
    "name": "Top Canalé",
    "audience": "mujer",
    "garment": "top",
    "season": "verano",
    "image": "mujer/TP-001_top-canale-menta.jpg",
    "images": [
      "mujer/TP-001_top-canale-menta.jpg",
      "mujer/TP-001_top-canale-camel.jpg"
    ],
    "colors": [
      "Celeste",
      "Menta",
      "Camel"
    ],
    "type": "Top",
    "knit": "Canalé",
    "details": "Tirantes · escote V · silueta corta"
  },
  {
    "id": "ST-003",
    "name": "Conjunto Azul Eléctrico",
    "audience": "mujer",
    "garment": "sets",
    "season": "verano",
    "image": "IMG_3449.JPEG",
    "images": [
      "IMG_3449.JPEG"
    ],
    "colors": [
      "Azul eléctrico"
    ],
    "type": "Conjunto",
    "knit": "Canalé",
    "details": "Top y cardigan de manga corta · botones"
  },
  {
    "id": "PL-002",
    "name": "Polo Trenzas",
    "audience": "mujer",
    "garment": "polo",
    "image": "10B0CB71-D14D-44AB-BBD6-0A034AC2894B.JPG",
    "images": [
      "10B0CB71-D14D-44AB-BBD6-0A034AC2894B.JPG"
    ],
    "colors": [
      "Celeste"
    ],
    "type": "Polo",
    "knit": "Trenzas y calado",
    "details": "Cuello polo · manga larga · textura integral"
  },
  {
    "id": "SW-004",
    "name": "Sweater Cuello Alto",
    "audience": "mujer",
    "garment": "chompas",
    "image": "IMG_2417.JPG",
    "images": [
      "IMG_2417.JPG"
    ],
    "colors": [
      "Verde olivo"
    ],
    "type": "Sweater",
    "knit": "Trenzas",
    "details": "Cuello alto · trenza integral · puño ancho"
  },
  {
    "id": "SW-014",
    "name": "Sweater Cuello Alto Waffle",
    "audience": "mujer",
    "garment": "chompas",
    "image": "mujer/SW-014_sweater-cuello-alto-waffle-cafe.jpg",
    "images": [
      "mujer/SW-014_sweater-cuello-alto-waffle-cafe.jpg"
    ],
    "colors": [
      "Café"
    ],
    "type": "Sweater",
    "knit": "Punto",
    "details": "Cuello alto · tejido waffle · manga amplia"
  },
  {
    "id": "CD-003",
    "name": "Cardigan Calado Manga Corta",
    "audience": "mujer",
    "garment": "cardigans",
    "season": "verano",
    "image": "IMG_3527.JPG",
    "images": [
      "IMG_3527.JPG",
      "IMG_3755.JPG",
      "IMG_3895.JPG",
      "IMG_3543.JPG",
      "mujer/CD-003_cardigan-calado-lila.jpg"
    ],
    "colors": [
      "Amarillo",
      "Rosa",
      "Celeste",
      "Lila"
    ],
    "type": "Cardigan",
    "knit": "Calado y trenzas",
    "details": "Manga corta · botones joya · silueta corta"
  },
  {
    "id": "CD-004",
    "name": "Cardigan Botones",
    "audience": "mujer",
    "garment": "cardigans",
    "image": "mujer/CD-004_cardigan-botones-blanco.jpg",
    "images": [
      "mujer/CD-004_cardigan-botones-blanco.jpg",
      "mujer/CD-004_cardigan-botones-celeste.jpg",
      "mujer/CD-004_cardigan-botones-rosa.jpg"
    ],
    "colors": [
      "Blanco",
      "Celeste",
      "Rosa",
      "Verde olivo"
    ],
    "type": "Cardigan",
    "knit": "Punto",
    "details": "Cuello V · botones · manga larga"
  },
  {
    "id": "HO-001",
    "name": "Chaleco de punto beige",
    "audience": "hombre",
    "garment": "chaleco",
    "image": "hombre/chaleco-beige.png",
    "images": [
      "hombre/chaleco-beige.png"
    ],
    "colors": [
      "Beige"
    ],
    "type": "Chaleco",
    "knit": "Textura clásica",
    "details": "Cuello V · botones · silueta de vestir"
  },
  {
    "id": "HO-004",
    "name": "Sweater con hombros contrastantes",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/sweater-hombros.png",
    "images": [
      "hombre/sweater-hombros.png"
    ],
    "colors": [
      "Crudo",
      "Marrón"
    ],
    "type": "Sweater",
    "knit": "Jersey y rib",
    "details": "Cuello redondo · hombros contrastantes · silueta clásica"
  },
  {
    "id": "NI-001",
    "name": "Conjunto bebé gris",
    "audience": "ninos",
    "garment": "conjuntos",
    "image": "ninos/IMG_0002.jpg",
    "images": [
      "ninos/IMG_0002.jpg"
    ],
    "colors": [
      "Gris",
      "Borgoña"
    ],
    "type": "Conjunto",
    "knit": "Jersey y trenzas",
    "details": "Cardigan, gorrito y pantalón · botones contrastantes"
  },
  {
    "id": "NI-004",
    "name": "Chompa infantil estampada",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/IMG_0011.jpg",
    "images": [
      "ninos/IMG_0011.jpg",
      "ninos/NI-018_cobalto.jpg"
    ],
    "colors": [
      "Gris",
      "Naranja",
      "Melange",
      "Celeste",
      "Cobalto"
    ],
    "type": "Chompa",
    "knit": "Jersey",
    "details": "Cuello redondo · gráfico tejido frontal · acabados en rib"
  },
  {
    "id": "NI-005",
    "name": "Conjunto Reyna",
    "audience": "ninos",
    "garment": "conjuntos",
    "image": "ninos/NI-005_conjunto-reyna.jpg",
    "images": [
      "ninos/NI-005_conjunto-reyna.jpg",
      "ninos/NI-005_palo-rosa.jpg"
    ],
    "colors": [
      "Palo rosa",
      "Rosado",
      "Blanco"
    ],
    "type": "Conjunto",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-006",
    "name": "Conjunto Patricia",
    "audience": "ninos",
    "garment": "conjuntos",
    "image": "ninos/NI-006_blanco-lila.jpg",
    "images": [
      "ninos/NI-006_blanco-lila.jpg"
    ],
    "colors": [
      "Rosado",
      "Blanco/lila"
    ],
    "type": "Conjunto",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-007",
    "name": "Conjunto Sophia",
    "audience": "ninos",
    "garment": "conjuntos",
    "image": "ninos/NI-007_conjunto-sophia.jpg",
    "images": [
      "ninos/NI-007_conjunto-sophia.jpg"
    ],
    "colors": [
      "Blanco",
      "Rosado",
      "Verde agua"
    ],
    "type": "Conjunto",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-008",
    "name": "Bolero Maya",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-008_bolero-maya.jpg",
    "images": [
      "ninos/NI-008_bolero-maya.jpg",
      "ninos/NI-008_palo-rosa.jpg"
    ],
    "colors": [
      "Palo rosa",
      "Hueso",
      "Blanco"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-009",
    "name": "Chompa Shaya",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-009_chompa-shaya.jpg",
    "images": [
      "ninos/NI-009_chompa-shaya.jpg"
    ],
    "colors": [
      "Rojo",
      "Fucsia",
      "Hueso"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-010",
    "name": "Chompa Complices",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-010_chompa-complices.jpg",
    "images": [
      "ninos/NI-010_chompa-complices.jpg",
      "ninos/NI-010_fucsia.jpg",
      "ninos/NI-010_rosado.jpg",
      "ninos/NI-010_verde-agua.jpg"
    ],
    "colors": [
      "Verde agua",
      "Fucsia",
      "Rosado"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-011",
    "name": "Chompa Lily con capucha",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-011_chompa-lily-con-capucha.jpg",
    "images": [
      "ninos/NI-011_chompa-lily-con-capucha.jpg"
    ],
    "colors": [
      "Lila",
      "Fucsia",
      "Rosado"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-012",
    "name": "Chompa Velero",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-012_chompa-velero.jpg",
    "images": [
      "ninos/NI-012_chompa-velero.jpg"
    ],
    "colors": [
      "Blanco/azul",
      "Beige/hueso"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-013",
    "name": "Chompa Benjamin",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-013_chompa-benjamin.jpg",
    "images": [
      "ninos/NI-013_chompa-benjamin.jpg",
      "ninos/NI-013_celeste.jpg"
    ],
    "colors": [
      "Celeste",
      "Blanco"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-014",
    "name": "Conjunto Bruno Tacto",
    "audience": "ninos",
    "garment": "conjuntos",
    "image": "ninos/NI-014_conjunto-bruno-tacto.jpg",
    "images": [
      "ninos/NI-014_conjunto-bruno-tacto.jpg",
      "ninos/NI-014_celeste-azul.jpg",
      "ninos/IMG_0007.jpg",
      "ninos/NI-015_verde-beige.jpg"
    ],
    "colors": [
      "Verde/beige",
      "Celeste/azul",
      "Celeste",
      "Beige",
      "Azul marino"
    ],
    "type": "Conjunto",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-016",
    "name": "Chompa Erick Tacto",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-016_chompa-erick-tacto.jpg",
    "images": [
      "ninos/NI-016_chompa-erick-tacto.jpg",
      "ninos/NI-016_celeste.jpg"
    ],
    "colors": [
      "Celeste",
      "Verde",
      "Beige"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-017",
    "name": "Chompa Erick Dralon",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-017_chompa-erick-dralon.jpg",
    "images": [
      "ninos/NI-017_chompa-erick-dralon.jpg",
      "ninos/NI-017_beige.jpg",
      "ninos/NI-017_verde.jpg"
    ],
    "colors": [
      "Celeste",
      "Verde",
      "Beige"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-019",
    "name": "Chompa Noel",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-019_chompa-noel.jpg",
    "images": [
      "ninos/NI-019_chompa-noel.jpg",
      "ninos/NI-019_azul-rojo-hueso.jpg",
      "ninos/NI-019_gris-rojo-hueso.jpg"
    ],
    "colors": [
      "Gris/rojo/hueso",
      "Azul/rojo/hueso"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-020",
    "name": "Chaleco Enzo",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-020_chaleco-enzo.jpg",
    "images": [
      "ninos/NI-020_chaleco-enzo.jpg",
      "ninos/NI-020_beige.jpg"
    ],
    "colors": [
      "Blanco",
      "Rosado",
      "Celeste",
      "Beige"
    ],
    "type": "Chaleco",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-021",
    "name": "Chompa Alex",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-021_chompa-alex.jpg",
    "images": [
      "ninos/NI-021_chompa-alex.jpg",
      "ninos/NI-021_celeste.jpg"
    ],
    "colors": [
      "Celeste",
      "Beige"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-022",
    "name": "Chompa Nando",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-022_chompa-nando.jpg",
    "images": [
      "ninos/NI-022_chompa-nando.jpg",
      "ninos/NI-022_beige-hueso.jpg",
      "ninos/NI-022_verde-hueso.jpg"
    ],
    "colors": [
      "Verde/hueso",
      "Beige/hueso"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-023",
    "name": "Chompa Cielo",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-023_chompa-cielo.jpg",
    "images": [
      "ninos/NI-023_chompa-cielo.jpg",
      "ninos/NI-023_alilado.jpg",
      "ninos/NI-023_hueso.jpg"
    ],
    "colors": [
      "Alilado",
      "Hueso"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-024",
    "name": "Chompa Jack",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-024_chompa-jack.jpg",
    "images": [
      "ninos/NI-024_chompa-jack.jpg",
      "ninos/NI-024_acero.jpg"
    ],
    "colors": [
      "Acero"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-025",
    "name": "Chompa Luna",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-025_chompa-luna.jpg",
    "images": [
      "ninos/NI-025_chompa-luna.jpg",
      "ninos/NI-025_rosado.jpg"
    ],
    "colors": [
      "Rosado",
      "Yogurt"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-026",
    "name": "Chompa Steffy",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-026_chompa-steffy.jpg",
    "images": [
      "ninos/NI-026_chompa-steffy.jpg"
    ],
    "colors": [
      "Fucsia",
      "Melange",
      "Rojo"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-027",
    "name": "Chompa Selene",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-027_chompa-selene.jpg",
    "images": [
      "ninos/NI-027_chompa-selene.jpg",
      "ninos/NI-027_rosado.jpg"
    ],
    "colors": [
      "Beige",
      "Rosado",
      "Fucsia"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-028",
    "name": "Chompa Sarai",
    "audience": "ninos",
    "garment": "chompas",
    "image": "ninos/NI-028_chompa-sarai.jpg",
    "images": [
      "ninos/NI-028_chompa-sarai.jpg",
      "ninos/NI-028_melange.jpg",
      "ninos/NI-028_vino.jpg"
    ],
    "colors": [
      "Melange",
      "Palo rosa",
      "Vino"
    ],
    "type": "Chompa",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "NI-029",
    "name": "Conjunto Charlie",
    "audience": "ninos",
    "garment": "conjuntos",
    "image": "ninos/NI-029_conjunto-charlie.jpg",
    "images": [
      "ninos/NI-029_conjunto-charlie.jpg"
    ],
    "colors": [
      "Celeste",
      "Verde",
      "Beige"
    ],
    "type": "Conjunto",
    "knit": "Punto",
    "details": "Tejido de punto para bebé · confirma tallas y colores"
  },
  {
    "id": "HO-005",
    "name": "Chaleco Rombos",
    "audience": "hombre",
    "garment": "chaleco",
    "image": "hombre/HO-005_chaleco-rombos-morado.jpg",
    "images": [
      "hombre/HO-005_chaleco-rombos-morado.jpg",
      "hombre/chaleco-rombos.png"
    ],
    "colors": [
      "Morado/gris",
      "Gris",
      "Azul marino"
    ],
    "type": "Chaleco",
    "knit": "Rombos",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-006",
    "name": "Chompa Cuello Redondo",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-006_chompa-cuello-redondo-negra.jpg",
    "images": [
      "hombre/HO-006_chompa-cuello-redondo-negra.jpg"
    ],
    "colors": [
      "Negro"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-007",
    "name": "Chompa Rayas Multicolor",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-007_chompa-rayas-multicolor.jpg",
    "images": [
      "hombre/HO-007_chompa-rayas-multicolor.jpg"
    ],
    "colors": [
      "Azul marino"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-009",
    "name": "Chaleco Liso",
    "audience": "hombre",
    "garment": "chaleco",
    "image": "hombre/HO-009_chaleco-liso-gris.jpg",
    "images": [
      "hombre/HO-009_chaleco-liso-gris.jpg"
    ],
    "colors": [
      "Gris"
    ],
    "type": "Chaleco",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-010",
    "name": "Chompa Cuello V",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-010_chompa-cuello-v-vino.jpg",
    "images": [
      "hombre/HO-010_chompa-cuello-v-vino.jpg"
    ],
    "colors": [
      "Vino"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-011",
    "name": "Chompa Jacquard Nórdico",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-011_chompa-jacquard-nordico-azul.jpg",
    "images": [
      "hombre/HO-011_chompa-jacquard-nordico-azul.jpg"
    ],
    "colors": [
      "Azul/celeste"
    ],
    "type": "Chompa",
    "knit": "Jacquard",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-012",
    "name": "Chompa Raglán Tejido",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-012_chompa-raglan-tejido.jpg",
    "images": [
      "hombre/HO-012_chompa-raglan-tejido.jpg"
    ],
    "colors": [
      "Gris/negro"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-013",
    "name": "Chompa Rayas Blanco y Negro",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-013_chompa-rayas-blanco-negro.jpg",
    "images": [
      "hombre/HO-013_chompa-rayas-blanco-negro.jpg"
    ],
    "colors": [
      "Blanco/negro"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-014",
    "name": "Chompa Cuello Redondo Vino",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-014_chompa-cuello-redondo-vino.jpg",
    "images": [
      "hombre/HO-014_chompa-cuello-redondo-vino.jpg"
    ],
    "colors": [
      "Vino"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-015",
    "name": "Chaleco Cuello V",
    "audience": "hombre",
    "garment": "chaleco",
    "image": "hombre/HO-015_chaleco-cuello-v-marino.jpg",
    "images": [
      "hombre/HO-015_chaleco-cuello-v-marino.jpg"
    ],
    "colors": [
      "Azul marino"
    ],
    "type": "Chaleco",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-016",
    "name": "Chaleco Trenzado",
    "audience": "hombre",
    "garment": "chaleco",
    "image": "hombre/HO-016_chaleco-trenzado-marino.jpg",
    "images": [
      "hombre/HO-016_chaleco-trenzado-marino.jpg"
    ],
    "colors": [
      "Azul marino"
    ],
    "type": "Chaleco",
    "knit": "Trenzas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-017",
    "name": "Chompa Parches en Hombros",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-017_chompa-parches-hombro.jpg",
    "images": [
      "hombre/HO-017_chompa-parches-hombro.jpg"
    ],
    "colors": [
      "Beige"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-018",
    "name": "Chompa Cuello Alto",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-018_chompa-cuello-alto-negra.jpg",
    "images": [
      "hombre/HO-018_chompa-cuello-alto-negra.jpg"
    ],
    "colors": [
      "Negro"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-019",
    "name": "Chompa Cuello Polo",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-019_chompa-cuello-polo-gris-oscuro.jpg",
    "images": [
      "hombre/HO-019_chompa-cuello-polo-gris-oscuro.jpg"
    ],
    "colors": [
      "Gris oscuro"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-020",
    "name": "Cardigan Trenzado",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-020_cardigan-trenzado-beige.jpg",
    "images": [
      "hombre/HO-020_cardigan-trenzado-beige.jpg"
    ],
    "colors": [
      "Beige",
      "Taupe"
    ],
    "type": "Cárdigan",
    "knit": "Trenzas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-021",
    "name": "Chaleco Rombos Azul",
    "audience": "hombre",
    "garment": "chaleco",
    "image": "hombre/HO-021_chaleco-rombos-azul.jpg",
    "images": [
      "hombre/HO-021_chaleco-rombos-azul.jpg"
    ],
    "colors": [
      "Azul"
    ],
    "type": "Chaleco",
    "knit": "Rombos",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-022",
    "name": "Chompa Cuello Henley",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-022_chompa-cuello-henley-verde.jpg",
    "images": [
      "hombre/HO-022_chompa-cuello-henley-verde.jpg"
    ],
    "colors": [
      "Verde oliva"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-023",
    "name": "Chompa Larga Melange",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-023_chompa-larga-melange.jpg",
    "images": [
      "hombre/HO-023_chompa-larga-melange.jpg"
    ],
    "colors": [
      "Negro/gris"
    ],
    "type": "Chompa",
    "knit": "Melange",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-024",
    "name": "Chompa Rayas Horizontales",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-024_chompa-rayas-horizontales.jpg",
    "images": [
      "hombre/HO-024_chompa-rayas-horizontales.jpg"
    ],
    "colors": [
      "Marino/blanco"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-025",
    "name": "Chompa Melange Mangas Rayadas",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-025_chompa-melange-mangas-rayadas.jpg",
    "images": [
      "hombre/HO-025_chompa-melange-mangas-rayadas.jpg"
    ],
    "colors": [
      "Gris melange/negro"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-026",
    "name": "Chompa Rayas Finas",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-026_chompa-rayas-finas.jpg",
    "images": [
      "hombre/HO-026_chompa-rayas-finas.jpg"
    ],
    "colors": [
      "Blanco/marino"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-027",
    "name": "Chompa Bloques de Color",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-027_chompa-bloques-azul-gris.jpg",
    "images": [
      "hombre/HO-027_chompa-bloques-azul-gris.jpg"
    ],
    "colors": [
      "Azul/gris"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-028",
    "name": "Chompa Cuello Redondo Gris",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-028_chompa-cuello-redondo-gris.jpg",
    "images": [
      "hombre/HO-028_chompa-cuello-redondo-gris.jpg"
    ],
    "colors": [
      "Gris"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-029",
    "name": "Chompa Cuello Zip Rombos",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-029_chompa-cuello-zip-rombos.jpg",
    "images": [
      "hombre/HO-029_chompa-cuello-zip-rombos.jpg"
    ],
    "colors": [
      "Azul marino"
    ],
    "type": "Chompa",
    "knit": "Rombos",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-030",
    "name": "Chompa Rayas Vino y Crudo",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-030_chompa-rayas-vino-crudo.jpg",
    "images": [
      "hombre/HO-030_chompa-rayas-vino-crudo.jpg"
    ],
    "colors": [
      "Vino/blanco"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-031",
    "name": "Chompa Zigzag",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-031_chompa-zigzag.jpg",
    "images": [
      "hombre/HO-031_chompa-zigzag.jpg"
    ],
    "colors": [
      "Negro/beige"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-032",
    "name": "Chompa Cuello V Liso",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-032_chompa-cuello-v-azul-rey.jpg",
    "images": [
      "hombre/HO-032_chompa-cuello-v-azul-rey.jpg"
    ],
    "colors": [
      "Azul rey"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-033",
    "name": "Chompa Trenzado Bloques",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-033_chompa-trenzado-bloques.jpg",
    "images": [
      "hombre/HO-033_chompa-trenzado-bloques.jpg"
    ],
    "colors": [
      "Vino/gris"
    ],
    "type": "Chompa",
    "knit": "Trenzas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-034",
    "name": "Chompa Cuello Redondo Gris Claro",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-034_chompa-cuello-redondo-gris-claro.jpg",
    "images": [
      "hombre/HO-034_chompa-cuello-redondo-gris-claro.jpg"
    ],
    "colors": [
      "Gris claro"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-035",
    "name": "Chompa Franjas Rojas",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-035_chompa-franjas-rojas.jpg",
    "images": [
      "hombre/HO-035_chompa-franjas-rojas.jpg"
    ],
    "colors": [
      "Marino/rojo"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-036",
    "name": "Chompa Jacquard Marino",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-036_chompa-jacquard-marino.jpg",
    "images": [
      "hombre/HO-036_chompa-jacquard-marino.jpg"
    ],
    "colors": [
      "Marino/rojo"
    ],
    "type": "Chompa",
    "knit": "Jacquard",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-037",
    "name": "Chompa Cuello V Melange",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-037_chompa-cuello-v-melange.jpg",
    "images": [
      "hombre/HO-037_chompa-cuello-v-melange.jpg"
    ],
    "colors": [
      "Gris"
    ],
    "type": "Chompa",
    "knit": "Melange",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-038",
    "name": "Chompa Rayas Crudo",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-038_chompa-rayas-crudo-marino.jpg",
    "images": [
      "hombre/HO-038_chompa-rayas-crudo-marino.jpg"
    ],
    "colors": [
      "Crudo/marino"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-039",
    "name": "Cardigan Largo",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-039_cardigan-largo-gris.jpg",
    "images": [
      "hombre/HO-039_cardigan-largo-gris.jpg"
    ],
    "colors": [
      "Gris melange"
    ],
    "type": "Cárdigan",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-040",
    "name": "Chompa Cuello Zip",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-040_chompa-cuello-zip-gris.jpg",
    "images": [
      "hombre/HO-040_chompa-cuello-zip-gris.jpg"
    ],
    "colors": [
      "Gris"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-041",
    "name": "Chompa Rayas Vino Marino",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-041_chompa-rayas-vino-marino.jpg",
    "images": [
      "hombre/HO-041_chompa-rayas-vino-marino.jpg"
    ],
    "colors": [
      "Marino/vino"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-042",
    "name": "Chompa Rayas Café",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-042_chompa-rayas-cafe.jpg",
    "images": [
      "hombre/HO-042_chompa-rayas-cafe.jpg"
    ],
    "colors": [
      "Café/beige"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-043",
    "name": "Chompa Bloques Azul",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-043_chompa-bloques-azul.jpg",
    "images": [
      "hombre/HO-043_chompa-bloques-azul.jpg"
    ],
    "colors": [
      "Azul marino"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-044",
    "name": "Chompa Bloques Naranja",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-044_chompa-bloques-naranja.jpg",
    "images": [
      "hombre/HO-044_chompa-bloques-naranja.jpg"
    ],
    "colors": [
      "Naranja/marino"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-045",
    "name": "Polo Rayas",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-045_polo-rayas-rojo-marino.jpg",
    "images": [
      "hombre/HO-045_polo-rayas-rojo-marino.jpg"
    ],
    "colors": [
      "Rojo/marino/crudo"
    ],
    "type": "Polo",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-046",
    "name": "Chompa Cuadros",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-046_chompa-cuadros-marino.jpg",
    "images": [
      "hombre/HO-046_chompa-cuadros-marino.jpg"
    ],
    "colors": [
      "Azul marino"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-047",
    "name": "Chompa Cuello Redondo Melange",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-047_chompa-cuello-redondo-melange.jpg",
    "images": [
      "hombre/HO-047_chompa-cuello-redondo-melange.jpg"
    ],
    "colors": [
      "Gris melange"
    ],
    "type": "Chompa",
    "knit": "Melange",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-048",
    "name": "Chompa Textura Jacquard",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-048_chompa-textura-jacquard.jpg",
    "images": [
      "hombre/HO-048_chompa-textura-jacquard.jpg"
    ],
    "colors": [
      "Negro/crudo"
    ],
    "type": "Chompa",
    "knit": "Jacquard",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-049",
    "name": "Chompa Rayas Marino",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-049_chompa-rayas-marino-blanco.jpg",
    "images": [
      "hombre/HO-049_chompa-rayas-marino-blanco.jpg"
    ],
    "colors": [
      "Marino/blanco"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-050",
    "name": "Chompa Negra Liso",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-050_chompa-negra-liso.jpg",
    "images": [
      "hombre/HO-050_chompa-negra-liso.jpg"
    ],
    "colors": [
      "Negro"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-051",
    "name": "Chompa Negra Bolsillo",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-051_chompa-negra-bolsillo.jpg",
    "images": [
      "hombre/HO-051_chompa-negra-bolsillo.jpg"
    ],
    "colors": [
      "Negro"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-052",
    "name": "Chompa Rayas Cuello Alto",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-052_chompa-rayas-cuello-alto.jpg",
    "images": [
      "hombre/HO-052_chompa-rayas-cuello-alto.jpg"
    ],
    "colors": [
      "Crudo/marino"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-053",
    "name": "Chompa Melange Verde",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-053_chompa-melange-verde.jpg",
    "images": [
      "hombre/HO-053_chompa-melange-verde.jpg"
    ],
    "colors": [
      "Verde oliva"
    ],
    "type": "Chompa",
    "knit": "Melange",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-054",
    "name": "Cardigan Rayas",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-054_cardigan-rayas-marino.jpg",
    "images": [
      "hombre/HO-054_cardigan-rayas-marino.jpg"
    ],
    "colors": [
      "Marino/beige"
    ],
    "type": "Cárdigan",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-055",
    "name": "Chompa Rayas Horizontales Marino",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-055_chompa-rayas-horizontales-marino.jpg",
    "images": [
      "hombre/HO-055_chompa-rayas-horizontales-marino.jpg"
    ],
    "colors": [
      "Marino/gris"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-056",
    "name": "Chompa Rayas Gruesas Vino",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-056_chompa-rayas-gruesas-vino.jpg",
    "images": [
      "hombre/HO-056_chompa-rayas-gruesas-vino.jpg"
    ],
    "colors": [
      "Vino/marino"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-057",
    "name": "Chompa Jacquard Azul Marino",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-057_chompa-jacquard-azul-marino.jpg",
    "images": [
      "hombre/HO-057_chompa-jacquard-azul-marino.jpg"
    ],
    "colors": [
      "Azul marino"
    ],
    "type": "Chompa",
    "knit": "Jacquard",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-058",
    "name": "Chompa Rayas Degradé",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-058_chompa-rayas-degrade.jpg",
    "images": [
      "hombre/HO-058_chompa-rayas-degrade.jpg"
    ],
    "colors": [
      "Marino/terracota"
    ],
    "type": "Chompa",
    "knit": "Rayas",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "HO-059",
    "name": "Chompa Cuello Zip Liso",
    "audience": "hombre",
    "garment": "chompas",
    "image": "hombre/HO-059_chompa-cuello-zip-liso.jpg",
    "images": [
      "hombre/HO-059_chompa-cuello-zip-liso.jpg"
    ],
    "colors": [
      "Marino"
    ],
    "type": "Chompa",
    "knit": "Punto liso",
    "details": "Tejido de punto · confirma tallas y colores"
  },
  {
    "id": "TP-002",
    "name": "Top Rayas",
    "audience": "mujer",
    "garment": "top",
    "image": "mujer/TP-002_top-rayas-blanco-negro.jpg",
    "images": [
      "mujer/TP-002_top-rayas-blanco-negro.jpg"
    ],
    "colors": [
      "Blanco/negro"
    ],
    "type": "Top",
    "knit": "Punto",
    "details": "Tirantes · rayas · acabado en canalé"
  },
  {
    "id": "SW-006",
    "name": "Sweater Oversize",
    "audience": "mujer",
    "garment": "chompas",
    "image": "mujer/SW-006_sweater-oversize-mostaza.jpg",
    "images": [
      "mujer/SW-006_sweater-oversize-mostaza.jpg"
    ],
    "colors": [
      "Mostaza"
    ],
    "type": "Sweater",
    "knit": "Punto",
    "details": "Cuello redondo · silueta oversize"
  },
  {
    "id": "CD-006",
    "name": "Cardigan Oversize",
    "audience": "mujer",
    "garment": "cardigans",
    "image": "mujer/CD-006_cardigan-oversize-vino.jpg",
    "images": [
      "mujer/CD-006_cardigan-oversize-vino.jpg",
      "mujer/CD-006_cardigan-oversize-verde-olivo.jpg"
    ],
    "colors": [
      "Vino",
      "Verde olivo"
    ],
    "type": "Cardigan",
    "knit": "Punto",
    "details": "Manga larga · silueta amplia"
  },
  {
    "id": "SW-008",
    "name": "Sweater Liso",
    "audience": "mujer",
    "garment": "chompas",
    "image": "mujer/SW-008_sweater-liso-verde-oscuro.jpg",
    "images": [
      "mujer/SW-008_sweater-liso-verde-oscuro.jpg",
      "mujer/SW-008_sweater-liso-beige.jpg"
    ],
    "colors": [
      "Verde oscuro",
      "Beige"
    ],
    "type": "Sweater",
    "knit": "Punto",
    "details": "Cuello redondo · punto liso"
  },
  {
    "id": "TP-004",
    "name": "Top Coral",
    "audience": "mujer",
    "garment": "top",
    "image": "mujer/TP-004_top-coral-coral.jpg",
    "images": [
      "mujer/TP-004_top-coral-coral.jpg"
    ],
    "colors": [
      "Coral"
    ],
    "type": "Top",
    "knit": "Punto",
    "details": "Tirantes · punto liso"
  },
  {
    "id": "SW-009",
    "name": "Sweater Trenzado",
    "audience": "mujer",
    "garment": "chompas",
    "image": "mujer/SW-009_sweater-trenzado-crudo.jpg",
    "images": [
      "mujer/SW-009_sweater-trenzado-crudo.jpg",
      "mujer/SW-011_sweater-v-blanco.jpg"
    ],
    "colors": [
      "Crudo",
      "Blanco"
    ],
    "type": "Sweater",
    "knit": "Punto",
    "details": "Escote V · trenzas · manga amplia"
  },
  {
    "id": "TP-005",
    "name": "Top Calado",
    "audience": "mujer",
    "garment": "top",
    "image": "mujer/TP-005_top-calado-celeste.jpg",
    "images": [
      "mujer/TP-005_top-calado-celeste.jpg",
      "mujer/TP-005_top-calado-rosa.jpg",
      "mujer/TP-005_top-calado-verde-olivo.jpg"
    ],
    "colors": [
      "Celeste",
      "Rosa",
      "Verde olivo"
    ],
    "type": "Top",
    "knit": "Punto",
    "details": "Cuello alto sin mangas · calado"
  },
  {
    "id": "SW-010",
    "name": "Sweater Trenzado",
    "audience": "mujer",
    "garment": "chompas",
    "image": "mujer/SW-010_sweater-trenzado-celeste.jpg",
    "images": [
      "mujer/SW-010_sweater-trenzado-celeste.jpg"
    ],
    "colors": [
      "Celeste"
    ],
    "type": "Sweater",
    "knit": "Punto",
    "details": "Cuello redondo · trenzas"
  },
  {
    "id": "SW-012",
    "name": "Sweater Oversize",
    "audience": "mujer",
    "garment": "chompas",
    "image": "mujer/SW-012_sweater-oversize-coral.jpg",
    "images": [
      "mujer/SW-012_sweater-oversize-coral.jpg"
    ],
    "colors": [
      "Coral"
    ],
    "type": "Sweater",
    "knit": "Punto",
    "details": "Cuello redondo · silueta oversize"
  },
  {
    "id": "SW-013",
    "name": "Sweater Negro",
    "audience": "mujer",
    "garment": "chompas",
    "image": "mujer/SW-013_sweater-negro-negro.jpg",
    "images": [
      "mujer/SW-013_sweater-negro-negro.jpg"
    ],
    "colors": [
      "Negro"
    ],
    "type": "Sweater",
    "knit": "Punto",
    "details": "Cuello redondo · manga amplia"
  }
];
