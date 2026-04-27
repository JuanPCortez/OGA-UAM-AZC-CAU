/* ══════════════════════════════
   DATOS
══════════════════════════════ */
const LABELS = ["Tronco","Árbol","Hojas","Flor","Fruto","Cono"];
 
const data = {
  ahuehuete: {
    titulo: "Ahuehuete",
    nombre_cientifico: "Taxodium mucronatum",
    familia: "Cupressaceae",
    etimologia: "Del náhuatl atl 'agua' y huehuetl 'viejo'",
    lugar_origen: "Estados Unidos, México y Guatemala",
    tamanio: "Superior, alcanza los 30 m.",
    follaje: "Subperennifolio",
    hojas: "Compuestas",
    conos: "Subglobosos de 2 cm de diámetro con un color verde azulado",
    imagenes: [
      "../images/paisajismo/arboles/especies/ahuehuete/ahuehuetetronco.webp",
      "../images/paisajismo/arboles/especies/ahuehuete/ahuehuetearbol.webp",
      "../images/paisajismo/arboles/especies/ahuehuete/ahuehuetehoja.webp",
      "../images/paisajismo/arboles/especies/ahuehuete/ahuehuetecono.webp",
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/ahuehuete.png"
  },
  aile: {
    titulo: "Aile",
    nombre_cientifico: "Alnus acuminata",
    familia: "Betulaceae",
    etimologia: "Del náhuatl atl 'agua' e ilitl 'aliso'",
    lugar_origen: "Norteamérica, Europa y Asia",
    tamanio: "Muy alto, alcanza los 20 m.",
    follaje: "Caducifolio",
    hojas: "Simples, alternas",
    flores: "Aparecen entre noviembre y mayo.",
    frutos: "Semejantes a un cono leñoso, mide de 1 a 4 cm.",
    imagenes: [
      "../images/paisajismo/arboles/ahuehuete/ahuehueteArbol.jpeg",
      "../images/paisajismo/arboles/ahuehuete/ahuehueteRama.jpeg",
      "../images/paisajismo/arboles/ahuehuete/ahuehueteHojas.jpeg",
      "../images/paisajismo/arboles/ahuehuete/ahuehueteFruto.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/aile.png"
  },
  alamo_sicomoro: {
    titulo: "Álamo Sicomoro",
    nombre_cientifico: "Platanus mexicana",
    familia: "Platanaceae",
    etimologia: "Platanus deriva del griego platys 'ancho', por el tamaño de sus hojas.",
    lugar_origen: "México",
    tamanio: "Muy alto, alcanza los 40 m.",
    follaje: "Caducifolio o perennifolio; si pierde sus hojas lo hace de diciembre a febrero.",
    hojas: "Grandes y aromáticas. Las hojas jóvenes presentan tonos anaranjados y rosas.",
    flores: "De color crema verdoso, se presentan de diciembre a mayo.",
    frutos: "Secos, de color marrón; fructifica de abril a agosto.",
    imagenes: [
      "../images/paisajismo/arboles/especies/alamosicomoro/alamotronco.webp",
      "../images/paisajismo/arboles/especies/alamosicomoro/alamoarbol.webp",
      "../images/paisajismo/arboles/especies/alamosicomoro/alamohoja.webp",
      "../images/paisajismo/arboles/especies/alamosicomoro/alamofruto.webp"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/Álamo-Sicomoro.png"
  },
  araucaria: {
    titulo: "Araucaria",
    nombre_cientifico: "Araucaria heterophylla",
    familia: "Araucariaceae",
    etimologia: "Proviene del nombre de la tribu indígena Araucaranos del sur de Chile.",
    lugar_origen: "Isla Norfolk y noreste de Australia",
    tamanio: "Muy alto, supera los 30 m.",
    follaje: "Perennifolio",
    hojas: "Triangulares sobrepuestas",
    conos: "Grandes y globosos con numerosas escamas.",
    imagenes: [
      "../images/paisajismo/arboles/especies/araucaria/araucariatronco.webp",
      "../images/paisajismo/arboles/especies/araucaria/araucariaarbol.webp",
      "../images/paisajismo/arboles/especies/araucaria/araucariahoja.webp",
      "../images/paisajismo/arboles/especies/araucaria/araucariacono.webp"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/araucaria.png"
  },
  arce: {
    titulo: "Arce",
    nombre_cientifico: "Acer negundo",
    familia: "Sapindaceae",
    etimologia: "Acer viene de una palabra celta usada para nombrar a este género de árboles.",
    lugar_origen: "Norteamérica",
    tamanio: "Muy alto, alcanza los 20 m.",
    follaje: "Caducifolio",
    hojas: "Compuestas, opuestas",
    flores: "Pequeñas y verdosas, se presentan en racimos colgantes.",
    frutos: "Crecen en racimos colgantes de hasta 20 cm.",
    notas: "Sujeta a Protección Especial (Pr) — NOM-059-SEMARNAT-2010.",
    imagenes: [
      "../images/paisajismo/arboles/especies/arce/arcetronco.webp",
      "../images/paisajismo/arboles/especies/arce/arcearbol.webp",
      "../images/paisajismo/arboles/especies/arce/arcehoja.webp",
      "../images/paisajismo/arboles/especies/arce/arcefruto.webp"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/arce.png"
  },
  astronomica: {
    titulo: "Astronómica",
    nombre_cientifico: "Lagerstroemia indica",
    familia: "Lythraceae",
    etimologia: "En honor a Magnus Von Lagerstrom.",
    lugar_origen: "China",
    tamanio: "Bajo, alcanza los 6 m.",
    follaje: "Caducifolio",
    hojas: "Simples, opuestas y ovaladas",
    flores: "Pequeñas y llamativas, miden de 2.5 a 4 cm y aparecen en mayo.",
    frutos: "Cápsulas globosas de 1 cm de largo color café.",
    imagenes: [
      "../images/paisajismo/arboles/especies/astronomica/astronomicatronco.webp",
      "../images/paisajismo/arboles/especies/astronomica/astronomicaarbol.webp",
      "../images/paisajismo/arboles/especies/astronomica/astronomicahoja.webp",
      "../images/paisajismo/arboles/especies/astronomica/astronomicaflor.webp",
      "../images/paisajismo/arboles/especies/astronomica/astronomicafruto.webp"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/astronómica.png"
  },
  cazahuate: {
    titulo: "Cazahuate",
    nombre_cientifico: "Ipomoea murucoides",
    familia: "Convolvulaceae",
    etimologia: "Ipomoea viene del latín 'Ips', nombre de Convolvulus.",
    lugar_origen: "Del Valle de México hasta Guatemala",
    tamanio: "Bajo, alcanza los 8 m.",
    follaje: "Caducifolio o perennifolio",
    hojas: "Simples, con margen liso, miden de 8 a 17 cm de largo.",
    flores: "Blancas o cremosas, en forma de campana. Diciembre a febrero.",
    frutos: "Cápsulas de color café oscuro.",
    imagenes: [
      "../images/paisajismo/arboles/especies/cazahuate/cazahuatetronco.webp",
      "../images/paisajismo/arboles/especies/cazahuate/cazahuatearbol.webp",
      "../images/paisajismo/arboles/especies/cazahuate/cazahuatehoja.webp",
      "../images/paisajismo/arboles/especies/cazahuate/cazahuateflor.webp",
      "../images/paisajismo/arboles/especies/cazahuate/cazahuatefruto.webp"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/cazahuate.png"
  },
  cedro_blanco: {
    titulo: "Cedro Blanco",
    nombre_cientifico: "Cupressus lusitanica",
    familia: "Cupressaceae",
    etimologia: "Proviene de 'Kuparissos', a quien Apolo transformó en un ciprés.",
    lugar_origen: "Desde México hasta Guatemala",
    tamanio: "Superior, alcanza los 30 m.",
    follaje: "Perennifolio",
    hojas: "En forma de escamas, miden 2 mm de alto por 1 mm de ancho.",
    conos: "Masculinos pequeños en la punta; femeninos esféricos y leñosos.",
    notas: "Sujeta a Protección Especial (Pr) — NOM-059-SEMARNAT-2010.",
    imagenes: [
      "../images/paisajismo/arboles/cedro_blanco/cedro_blancoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/cedro-blanco.png"
  },
  cedro_guadalupano: {
    titulo: "Cedro Guadalupano",
    nombre_cientifico: "Cupressus guadalupensis",
    familia: "Cupressaceae",
    etimologia: "Alude a su localización en la Isla Guadalupe.",
    lugar_origen: "Isla Guadalupe, Baja California",
    tamanio: "Mediano, de 12 a 15 m de altura.",
    follaje: "Perennifolio",
    hojas: "Opuestas en forma de escamas.",
    conos: "Globosos, miden de 1.2 a 1.8 cm de diámetro.",
    notas: "En peligro de extinción (P) — NOM-059-SEMARNAT-2010.",
    imagenes: [
      "../images/paisajismo/arboles/cedro_guadalupano/cedro_guadalupanoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/cedro-guadalupano.png"
  },
  cedro_limon: {
    titulo: "Cedro Limón",
    nombre_cientifico: "Cupressus macrocarpa",
    familia: "Cupressaceae",
    etimologia: "Proviene de 'Kuparissos', a quien Apolo transformó en un ciprés.",
    lugar_origen: "California, Norteamérica",
    tamanio: "Chico, alcanza los 5 m.",
    follaje: "Perennifolio",
    hojas: "En forma de escamas, con color y olor a limón.",
    conos: "Redondos, con escamas leñosas y espinas; color rojizo que al madurar se torna gris.",
    imagenes: [
      "../images/paisajismo/arboles/cedro_limon/cedro_limonArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/cedro-limón.png"
  },
  cipres_italiano: {
    titulo: "Ciprés Italiano",
    nombre_cientifico: "Cupressus sempervirens",
    familia: "Cupressaceae",
    etimologia: "Sempervirens indica la persistencia del follaje verde oscuro.",
    lugar_origen: "Creta, Chipre, Suiza, Rusia e Irán",
    tamanio: "Grande, alcanza más de 30 m.",
    follaje: "Perennifolio",
    hojas: "En forma de escamas.",
    conos: "Masculinos cilíndricos; femeninos globosos.",
    imagenes: [
      "../images/paisajismo/arboles/cipres_italiano/cipres_italianoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/ciprés-italiano.png"
  },
  ciruelo: {
    titulo: "Ciruelo",
    nombre_cientifico: "Prunus domestica",
    familia: "Rosaceae",
    etimologia: "'Prunus' es el antiguo nombre latino para el ciruelo.",
    lugar_origen: "Oeste de Asia y el Cáucaso",
    tamanio: "Mediano, mide hasta 10 m.",
    follaje: "Caducifolio",
    hojas: "Alternas, verde oscuro por el haz y púrpura por el envés.",
    flores: "Pequeñas de color grisáceo. Aparecen de marzo a abril.",
    frutos: "Drupas de color amarillo a violeta. Comestibles. Maduran de mayo a junio.",
    imagenes: [
      "../images/paisajismo/arboles/ciruelo/cirueloArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/ciruelo.png"
  },
  colorin: {
    titulo: "Colorín",
    nombre_cientifico: "Erythrina coralloides",
    familia: "Fabaceae",
    etimologia: "Del griego 'erythrós', rojo.",
    lugar_origen: "México",
    tamanio: "Chico, de 7 a 10 m de altura.",
    follaje: "Caducifolio",
    hojas: "Compuestas trifoliadas, de 7 a 8 cm de largo.",
    flores: "Tubulares en forma de espiga de color rojo. Florece en invierno.",
    frutos: "Vainas con semillas color rojo. Aparecen en verano.",
    observaciones: "Flores comestibles; semilla y corteza contienen veneno paralizante.",
    notas: "Amenazada (A) — NOM-059-SEMARNAT-2010.",
    imagenes: [
      "../images/paisajismo/arboles/especies/colorin/colorintronco.webp",
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/colorín.png"
  },
  copalme_liquidambar: {
    titulo: "Copalme / Liquidámbar",
    nombre_cientifico: "Liquidambar styraciflua",
    familia: "Altingiaceae",
    etimologia: "Liquidambar refiere a la savia color ámbar que produce.",
    lugar_origen: "Norteamérica",
    tamanio: "Grande, alcanza los 25 m.",
    follaje: "Caducifolio",
    hojas: "Simples, alternas, miden desde 8 hasta 23 cm de ancho.",
    flores: "Aparecen en primavera y verano.",
    frutos: "Globosos, miden de 2.5 a 4 cm. Aparecen en otoño e invierno.",
    imagenes: [
      "../images/paisajismo/arboles/copalme_liquidambar/copalme_liquidambarArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/liquidámbar.png"
  },
  durazno: {
    titulo: "Durazno",
    nombre_cientifico: "Prunus persica",
    familia: "Rosaceae",
    etimologia: "'Persica' refiere a Persia, pues erróneamente se creía que era originario de allí.",
    lugar_origen: "China",
    tamanio: "Bajo, alcanza los 6 m.",
    follaje: "Caducifolio",
    hojas: "Simples, perfumadas.",
    flores: "Rosas y fragantes. Aparecen de marzo a mayo, antes que las hojas.",
    frutos: "Maduran entre julio y octubre. Tienen cubierta aterciopelada y son acanalados sobre un lado.",
    imagenes: [
      "../images/paisajismo/arboles/durazno/duraznoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/durazno.png"
  },
  encino: {
    titulo: "Encino",
    nombre_cientifico: "Quercus urbanii Trel",
    familia: "Fagaceae",
    etimologia: "Quercus, antiguo nombre latino usado para todos los encinos.",
    lugar_origen: "Sierra Madre Occidental",
    tamanio: "Bajo, alcanza los 10 m.",
    follaje: "Perennifolio",
    hojas: "Rígidas, gruesas, ovaladas y cuchareadas. Miden hasta 30 cm de largo y 17 cm de ancho.",
    flores: "Aparecen en diciembre.",
    frutos: "Bellotas pequeñas de color amarillento; se ennegrecen antes de caer.",
    imagenes: [
      "../images/paisajismo/arboles/encino/encinoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/Encino-Urbanii.png"
  },
  encino_roble: {
    titulo: "Encino Roble",
    nombre_cientifico: "Quercus virginiana",
    familia: "Fagaceae",
    etimologia: "Quercus, antiguo nombre latino usado para todos los encinos.",
    lugar_origen: "Estados Unidos",
    tamanio: "Superior, alcanza los 20 m.",
    follaje: "Perennifolio",
    hojas: "Alternas, simples. Miden de 5 a 12 cm de largo y 1 a 5 cm de ancho.",
    flores: "Aparecen de abril a mayo.",
    frutos: "Bellotas de 3 cm de largo.",
    imagenes: [
      "../images/paisajismo/arboles/encino_roble/encino_robleArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/encino-roble.png"
  },
  eucalipto: {
    titulo: "Eucalipto",
    nombre_cientifico: "Eucalyptus camaldulensis",
    familia: "Myrtaceae",
    etimologia: "Del griego 'eu' bien y 'kalyptus' cubierto.",
    lugar_origen: "Australia",
    tamanio: "Superior, alcanza los 30 m.",
    follaje: "Perennifolio",
    hojas: "Simples, aromáticas. Con dimorfismo foliar; pueden ser opuestas o alternas.",
    flores: "Pequeñas y blancas.",
    frutos: "Pequeños, de 5 a 7 mm de diámetro.",
    imagenes: [
      "../images/paisajismo/arboles/eucalipto/eucaliptoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/eucalipto.png"
  },
  ficus: {
    titulo: "Ficus",
    nombre_cientifico: "Ficus benjamina",
    familia: "Moraceae",
    etimologia: "Ficus es el nombre con que los romanos nombraban a la higuera, otro árbol de la misma familia.",
    lugar_origen: "Desde la India hasta las islas Filipinas",
    tamanio: "Superior, alcanza los 25 m.",
    follaje: "Subperennifolio",
    hojas: "Simples, con varias tonalidades de verde. Miden de 3 a 5 cm.",
    flores: "Síconos.",
    frutos: "Pequeños, redondos, de color anaranjado.",
    imagenes: [
      "../images/paisajismo/arboles/ficus/ficusArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/ficus.png"
  },
  fresno: {
    titulo: "Fresno",
    nombre_cientifico: "Fraxinus uhdei",
    familia: "Oleaceae",
    etimologia: "Fraxinus derivado del griego 'phraxo', cercado.",
    lugar_origen: "México",
    tamanio: "Superior, alcanza los 30 m.",
    follaje: "Caducifolio",
    hojas: "Compuestas, opuestas, de 20 a 30 cm de longitud.",
    flores: "Aparecen entre abril y mayo; diminutas, verdes o rojas.",
    frutos: "Racimos de sámaras que aparecen de agosto a septiembre; delgadas, lisas, amarillas y cafés.",
    imagenes: [
      "../images/paisajismo/arboles/fresno/fresnoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/fresno.png"
  },
  granado: {
    titulo: "Granado",
    nombre_cientifico: "Punica granatum",
    familia: "Lythraceae",
    etimologia: "Púnica, del latín 'puniceus', rojo escarlata.",
    lugar_origen: "Sur de Asia Menor",
    tamanio: "Bajo, alcanza los 7 m.",
    follaje: "Caducifolio o perennifolio",
    hojas: "Simples, de color verde amarillento. Miden de 2 a 8 cm.",
    flores: "De color rojo escarlata a anaranjadas, miden 3 cm de ancho.",
    frutos: "Bayas de cáscara dura, rojas o amarillas, con semillas envueltas en pulpa dulce. Fructifica a los 5 años.",
    imagenes: [
      "../images/paisajismo/arboles/granado/granadoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/granado.png"
  },
  gravilia: {
    titulo: "Gravília",
    nombre_cientifico: "Grevillea robusta",
    familia: "Proteaceae",
    etimologia: "Nombrado en honor a Charles Francis Greville.",
    lugar_origen: "Australia",
    tamanio: "Superior, alcanza los 20 m.",
    follaje: "Perennifolio",
    hojas: "Compuestas, miden de 15 a 30 cm; pueden caerse con heladas fuertes.",
    flores: "Florece de julio a septiembre; de color naranja o amarillo, sin pétalos.",
    frutos: "Parecido a una vaina, mide hasta 9 mm. Aparecen entre septiembre y octubre.",
    imagenes: [
      "../images/paisajismo/arboles/grevilea/grevileaArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/grevilea.png"
  },
  guayabo: {
    titulo: "Guayabo",
    nombre_cientifico: "Psidium guajava",
    familia: "Myrtaceae",
    etimologia: "Psidium, del griego 'psidion', nombre dado al granado por su semejanza.",
    lugar_origen: "Mesoamérica",
    tamanio: "Bajo, alcanza los 10 m.",
    follaje: "Caducifolio",
    hojas: "Opuestas, simples, decusadas y fragantes.",
    flores: "Blancas, de cinco pétalos. Aparecen de abril a noviembre.",
    frutos: "Baya comestible, de 8 cm de diámetro, carnosa y de olor fragante.",
    imagenes: [
      "../images/paisajismo/arboles/guayabo/guayaboArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/guayabo.png"
  },
  higuera: {
    titulo: "Higuera",
    nombre_cientifico: "Ficus carica",
    familia: "Moraceae",
    etimologia: "'Carica', de Caria, lugar de Asia menor.",
    lugar_origen: "Asia Sudoccidental",
    tamanio: "Bajo, alcanza los 9 m.",
    follaje: "Caducifolio",
    hojas: "Simples, alternas. Miden de 10 a 20 cm de largo.",
    frutos: "Comestibles, miden de 5 a 10 cm y tienen sabor dulce. Aparecen en primavera y otoño.",
    imagenes: [
      "../images/paisajismo/arboles/higuera/higueraArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/higuera.png"
  },
  izote: {
    titulo: "Izote",
    nombre_cientifico: "Yucca gigantea",
    familia: "Asparagaceae",
    etimologia: "Yucca es el nombre nativo en Haití.",
    lugar_origen: "Suroriente de México",
    tamanio: "Bajo, alcanza los 8 m.",
    follaje: "Perennifolio",
    hojas: "Lineares, miden hasta 1 m de largo y de 5 a 7 cm de ancho.",
    flores: "Blancas, con forma de globo. Aparecen en primavera.",
    frutos: "Grupos de bayas colgantes con semillas pequeñas.",
    imagenes: [
      "../images/paisajismo/arboles/izote/izoteArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/yuca.png"
  },
  jacaranda: {
    titulo: "Jacaranda",
    nombre_cientifico: "Jacaranda momosaefolia",
    familia: "Bignoniaceae",
    etimologia: "Del guaraní 'fragante'; mimosifolia significa 'de hojas parecidas a las de una mimosa'.",
    lugar_origen: "Brasil, Uruguay y Argentina",
    tamanio: "Superior, alcanza los 20 m.",
    follaje: "Caducifolio",
    hojas: "Compuestas, opuestas. Miden de 15 a 30 cm.",
    flores: "Moradas, de 4 a 8 cm. Florecen durante el invierno.",
    frutos: "Cápsulas aplanadas, de 6 a 7 cm de diámetro. Aparecen a finales de junio.",
    imagenes: [
      "../images/paisajismo/arboles/jacaranda/jacarandaArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/jacaranda.png"
  },
  laurel_india: {
    titulo: "Laurel de la India",
    nombre_cientifico: "Ficus microcarpa",
    familia: "Moraceae",
    etimologia: "Ficus es el nombre con que los romanos nombraban a la higuera, otro árbol de la misma familia.",
    lugar_origen: "India",
    tamanio: "Superior, alcanza los 30 m.",
    follaje: "Perennifolio",
    hojas: "Simples y alternas, ovaladas. Miden de 5 a 12 cm de largo.",
    flores: "Síconos.",
    frutos: "Globosos, pequeños, de 8 a 10 mm de diámetro, de color púrpura.",
    imagenes: [
      "../images/paisajismo/arboles/laurel_india/laurel_indiaArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/laurel-de-la-india.png"
  },
  limonero: {
    titulo: "Limonero",
    nombre_cientifico: "Citrus aurantifolia",
    familia: "Rutaceae",
    etimologia: "Citrus, nombre latino del citrón (Citrus medica).",
    lugar_origen: "Asia",
    tamanio: "Bajo, alcanza los 6 m.",
    follaje: "Perennifolio",
    hojas: "Simples, alternas, lustrosas y fragantes al estrujarlas.",
    flores: "Blancas de 5 pétalos; aparecen al inicio y fin de la primavera. Atrae abejas y colibríes.",
    frutos: "Redondos de color amarillo, con alto contenido de vitamina C.",
    imagenes: [
      "../images/paisajismo/arboles/limonero/limoneroArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/limonero.png"
  },
  magnolia: {
    titulo: "Magnolia",
    nombre_cientifico: "Magnolia grandiflora",
    familia: "Magnoliaceae",
    etimologia: "Nombrada en honor a Pierre Magnol.",
    lugar_origen: "Estados Unidos",
    tamanio: "Superior, alcanza los 25 m.",
    follaje: "Perennifolio",
    hojas: "Simples, miden de 7 a 12 cm de largo.",
    flores: "Grandes de color blanco; aparecen a finales de primavera.",
    frutos: "Se presentan en otoño.",
    imagenes: [
      "../images/paisajismo/arboles/magnolia/magnoliaArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/magnolia.png"
  },
  mandarina: {
    titulo: "Mandarina",
    nombre_cientifico: "Citrus reticulata",
    familia: "Rutaceae",
    etimologia: "Citrus deriva del nombre de la fragancia africana de la madera del 'citrón'.",
    lugar_origen: "Asia",
    tamanio: "Inferior, alcanza los 4 m.",
    follaje: "Perennifolio",
    hojas: "Simples, alternas.",
    flores: "Grandes, blancas, de cinco pétalos; solitarias o en pequeños grupos. Aparecen entre abril y mayo.",
    frutos: "Globosos, de color naranja con cáscara gruesa y pulpa dulce. Alto contenido de vitaminas A, B y C.",
    imagenes: [
      "../images/paisajismo/arboles/mandarina/mandarinaArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/mandarina.png"
  },
  membrillo: {
    titulo: "Membrillo",
    nombre_cientifico: "Cydonia oblonga",
    familia: "Rosaceae",
    etimologia: "Cydonia alude a la ciudad de Cydon en la isla de Creta.",
    lugar_origen: "Asia central",
    tamanio: "Bajo, alcanza los 6 m.",
    follaje: "Caducifolio",
    hojas: "Simples, alternas, de 5 a 10 cm de longitud. En otoño se tornan amarillas.",
    flores: "Aromáticas de color blanco o rosa; aparecen de abril a mayo.",
    frutos: "Pomos comestibles de color amarillo-dorado, muy aromáticos.",
    imagenes: [
      "../images/paisajismo/arboles/membrillo/membrilloArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/membrillo.png"
  },
  naranja_agrio: {
    titulo: "Naranja Agrio",
    nombre_cientifico: "Citrus aurantium",
    familia: "Rutaceae",
    etimologia: "Citrus, nombre latino del citrón (Citrus medica).",
    lugar_origen: "Asia",
    tamanio: "Bajo, alcanza los 10 m.",
    follaje: "Perennifolio",
    hojas: "Simples, de 6 a 15 cm de largo.",
    flores: "Blancas; aparecen de diciembre a febrero.",
    frutos: "Globosos, del verde oscuro al anaranjado.",
    imagenes: [
      "../images/paisajismo/arboles/naranja_agrio/naranja_agrioArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/naranjo-agrio.png"
  },
  palma_canaria: {
    titulo: "Palma Canaria",
    nombre_cientifico: "Phoenix canariensis",
    familia: "Arecaceae",
    etimologia: "Canariensis refiere a las Islas Canarias.",
    lugar_origen: "Las Islas Canarias",
    tamanio: "Alto, alcanza los 30 m.",
    follaje: "Perennifolio",
    hojas: "Pinnaticompuestas.",
    flores: "Globosas y amarillas; florecen entre marzo y mayo.",
    frutos: "Dátiles naranjas en racimos de hasta 2 m. Tienen mal sabor; aparecen en verano y otoño.",
    imagenes: [
      "../images/paisajismo/arboles/palma_canaria/palma_canariaArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/palma-canaria.png"
  },
  palma_mexicana: {
    titulo: "Palma Mexicana",
    nombre_cientifico: "Washingtonia robusta",
    familia: "Palmaceae",
    etimologia: "En honor al presidente George Washington de los EUA.",
    lugar_origen: "Baja California y Sonora",
    tamanio: "Mediano, alcanza los 15 m.",
    follaje: "Perennifolio",
    hojas: "En forma de abanico; miden hasta 1.5 m.",
    flores: "Blancas, fragantes y diminutas de 1 cm de largo. Aparecen de marzo a mayo.",
    frutos: "Bayas negras que miden de 2 a 3 cm de largo.",
    imagenes: [
      "../images/paisajismo/arboles/palma_mexicana/palma_mexicanaArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/palma-mexicana.png"
  },
  palo_verde: {
    titulo: "Palo Verde",
    nombre_cientifico: "Parkinsonia aculeata",
    familia: "Fabaceae",
    etimologia: "En honor al botánico inglés John Parkinson.",
    lugar_origen: "América tropical",
    tamanio: "Bajo, alcanza los 10 m.",
    follaje: "Caducifolio",
    hojas: "Alternas, compuestas, de 20 a 30 cm de largo.",
    flores: "Amarillas; aparecen al inicio de la primavera.",
    frutos: "Vainas de hasta 8 cm de largo.",
    imagenes: [
      "../images/paisajismo/arboles/palo_verde/palo_verdeArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/pala-verde.png"
  },
  pata_de_vaca: {
    titulo: "Pata de Vaca",
    nombre_cientifico: "Bauhinia purpurea",
    familia: "Fabaceae",
    etimologia: "Bauhinia, en honor a los botánicos suizos Caspar (1560-1624) y Johann Bauhin (1541-1613).",
    lugar_origen: "Sur de Asia",
    tamanio: "Bajo, alcanza los 9 m.",
    follaje: "Caducifolio",
    hojas: "Simples, alternas, de 5 a 15 cm de ancho.",
    flores: "Fragantes y llamativas, semejantes a una orquídea; de color lavanda a magenta o blanco. Presentes casi todo el año.",
    frutos: "Vainas alargadas y aplanadas de 12 a 30 cm de largo.",
    imagenes: [
      "../images/paisajismo/arboles/pata_de_vaca/pata_de_vacaArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/pata-de-vaca.png"
  },
  pino_australiano: {
    titulo: "Pino Australiano / Falsa Casuarina",
    nombre_cientifico: "Casuarina cunninghamiana",
    familia: "Casuarinaceae",
    etimologia: "En relación al ave 'casuario', cuyas plumas se asemejan a las ramas del árbol.",
    lugar_origen: "Australia",
    tamanio: "Alto, alcanza los 40 m.",
    follaje: "Perennifolio",
    hojas: "Ramillas en espiral, semejantes a agujas quebradizas.",
    flores: "Aparecen en primavera.",
    frutos: "Espiga esférica y leñosa; mide entre 1 y 2 cm de diámetro.",
    imagenes: [
      "../images/paisajismo/arboles/pino_australiano/pino_australianoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/pino-australiano.png"
  },
  pino_azul: {
    titulo: "Pino Azul",
    nombre_cientifico: "Pinus maximartinezii",
    familia: "Pinaceae",
    etimologia: "Maximartinezii, dedicado al botánico Maximino Martínez Martínez.",
    lugar_origen: "México",
    tamanio: "Mediano, alcanza los 15 m.",
    follaje: "Perennifolio",
    hojas: "Acículas triangulares, flexibles y de color verde azulado. De 7 a 11 cm de largo.",
    conos: "Colgantes por su gran peso, de hasta 1.5 kg. Maduran en agosto.",
    notas: "En peligro de extinción (P) — NOM-059-SEMARNAT-2010.",
    imagenes: [
      "../images/paisajismo/arboles/pino_azul/pino_azulArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/pino-azul.png"
  },
  pino_blanco: {
    titulo: "Pino Blanco",
    nombre_cientifico: "Pinus pseudostrobus",
    familia: "Pinaceae",
    etimologia: "Del latín 'pseudo', falso, y 'strobus', nombre de los conos con escamas en disposición elíptica.",
    lugar_origen: "México, Guatemala y Honduras",
    tamanio: "Alto, alcanza los 40 m.",
    follaje: "Perennifolio",
    hojas: "Acículas rectas y rígidas, en grupos de 5. Miden de 20 a 30 cm de largo.",
    conos: "Solitarios o en pares; maduran de noviembre a diciembre.",
    imagenes: [
      "../images/paisajismo/arboles/pino_blanco/pino_blancoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/pino-blanco.png"
  },
  pino_pionero: {
    titulo: "Pino Piñonero",
    nombre_cientifico: "Pinus cembroides",
    familia: "Pinaceae",
    etimologia: "Cembroides es el nombre italiano de Pinus cembra, especie suiza a la que se parece.",
    lugar_origen: "México y sur de Estados Unidos",
    tamanio: "Mediano, alcanza los 15 m.",
    follaje: "Perennifolio",
    hojas: "Acículas en grupos de 2 a 3; miden entre 2.5 y 10 cm.",
    conos: "Subglobosos, de 5 a 6 cm de ancho. Maduran de noviembre a diciembre.",
    imagenes: [
      "../images/paisajismo/arboles/pino_pionero/pino_pioneroArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/pino-piñonero.png"
  },
  pino_prieto: {
    titulo: "Pino Prieto",
    nombre_cientifico: "Pinus greggii",
    familia: "Pinaceae",
    etimologia: "Greggii, dedicado a Josiah Gregg (1806-1850).",
    lugar_origen: "Sierra Madre Oriental, México",
    tamanio: "Superior, alcanza los 25 m.",
    follaje: "Perennifolio",
    hojas: "Acículas triangulares y rectas de hasta 14 cm, en grupos de 3.",
    conos: "Color ocre, en grupos de 3 o 5; miden hasta 12 cm. Maduran de noviembre a marzo.",
    imagenes: [
      "../images/paisajismo/arboles/pino_prieto/pino_prietoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/pino-prieto.png"
  },
  pino_real: {
    titulo: "Pino Real",
    nombre_cientifico: "Pinus engelmannii",
    familia: "Pinaceae",
    etimologia: "Engelmannii, en honor al botánico alemán George Engelmann.",
    lugar_origen: "Sierra Madre Occidental",
    tamanio: "Alto, alcanza los 25 m.",
    follaje: "Perennifolio",
    hojas: "Rígidas, en fascículos de 3 y 4; miden hasta 35 cm de largo y 1.5 mm de ancho.",
    conos: "Asimétricos, de 10 a 15 cm de largo; color café amarillento. Maduran en invierno.",
    imagenes: [
      "../images/paisajismo/arboles/pino_real/pino_realArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/pino-real.png"
  },
  pirul: {
    titulo: "Pirul",
    nombre_cientifico: "Schinus molle",
    familia: "Anacardiaceae",
    etimologia: "'Schinus', palabra griega relacionada con la característica resinosa del árbol.",
    lugar_origen: "Sudamérica",
    tamanio: "Mediano, alcanza los 15 m.",
    follaje: "Perennifolio",
    hojas: "Compuestas, alternas y aromáticas. Miden de 15 a 30 cm.",
    flores: "Pequeñas y numerosas, de 6 mm. Aparecen en primavera.",
    frutos: "Globosos, en racimos colgantes, rosados o rojizos. Cada fruto mide entre 5 y 9 mm.",
    imagenes: [
      "../images/paisajismo/arboles/pirul/pirulArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/pirul.png"
  },
  platano: {
    titulo: "Plátano",
    nombre_cientifico: "Musa x paradisiaca",
    familia: "Musaceae",
    etimologia: "Musa, derivado del árabe; retomado por Linneo en honor de Antonio Musa, médico de Octavio Augusto.",
    lugar_origen: "Abisinia, África",
    tamanio: "Bajo, alcanza los 8 m.",
    follaje: "Perennifolio",
    hojas: "Grandes, de 2 a 3 m de largo y de 50 a 80 cm de ancho. Se rompen con el viento.",
    flores: "Aparecen en verano tras producir unas 30 hojas; femeninas primero, luego masculinas, en racimos de 20.",
    frutos: "En racimos, miden de 5 a 8 cm de largo.",
    imagenes: [
      "../images/paisajismo/arboles/platano/platanoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/plátano.png"
  },
  sangre_de_cristo: {
    titulo: "Sangre de Cristo",
    nombre_cientifico: "Euphorbia cotinifolia",
    familia: "Euphorbiaceae",
    etimologia: "Euphorbia, en honor a Euphorbus, médico del rey Juba II de Mauritania.",
    lugar_origen: "México, Brasil y Perú",
    tamanio: "Inferior, alcanza los 5 m.",
    follaje: "Semicaducifolio",
    hojas: "Simples, opuestas. De color marrón rojizo a púrpura.",
    flores: "Muy pequeñas, de 0.3 a 0.4 cm. Aparecen de abril a octubre.",
    frutos: "Cápsulas pequeñas de 0.5 cm de largo y 0.6 cm de ancho.",
    imagenes: [
      "../images/paisajismo/arboles/sangre_de_cristo/sangre_de_cristoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/sangre-de-cristo.png"
  },
  tejocote: {
    titulo: "Tejocote",
    nombre_cientifico: "Crataegus mexicana",
    familia: "Rosaceae",
    etimologia: "Del náhuatl 'tetl' piedra y 'xocotl' fruto ácido: 'fruto ácido de piedra'.",
    lugar_origen: "México y Ecuador",
    tamanio: "Bajo, alcanza los 10 m.",
    follaje: "Caducifolio",
    hojas: "Simples, alternas.",
    flores: "Blancas; aparecen de enero a marzo.",
    frutos: "Semejante a una pequeña manzana amarilla o anaranjada, de 1 a 2 cm de diámetro. Maduran entre noviembre y diciembre.",
    observaciones: "Tiene espinas a lo largo de las ramas de aproximadamente 5 cm.",
    imagenes: [
      "../images/paisajismo/arboles/tejocote/tejocoteArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/tejocote.png"
  },
  tepozan: {
    titulo: "Tepozán",
    nombre_cientifico: "Buddleja cordata",
    familia: "Scrophulariaceae",
    etimologia: "'Buddleia' en referencia a Adam Buddle.",
    lugar_origen: "México",
    tamanio: "Mediano, alcanza los 15 m.",
    follaje: "Perennifolio",
    hojas: "Simples y opuestas.",
    flores: "Blancas o amarillentas, en forma de campana y muy pequeñas. Aparecen entre julio y octubre.",
    frutos: "Cápsulas pequeñas.",
    imagenes: [
      "../images/paisajismo/arboles/tepozan/tepozanArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/tepozán.png"
  },
  trueno: {
    titulo: "Trueno",
    nombre_cientifico: "Ligustrum lucidum",
    familia: "Oleaceae",
    etimologia: "'Lucidum' refiere a la superficie lustrosa de la hoja.",
    lugar_origen: "China, Corea y Japón",
    tamanio: "Bajo, alcanza los 10 m.",
    follaje: "Perennifolio",
    hojas: "Simples y opuestas.",
    flores: "Blancas y muy pequeñas; aparecen en verano.",
    frutos: "Semejante a una baya de color azul/negro. Aparece en otoño.",
    imagenes: [
      "../images/paisajismo/arboles/trueno/truenoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/trueno.png"
  },
  tulia: {
    titulo: "Tulia",
    nombre_cientifico: "Thuja occidentalis",
    familia: "Cupressaceae",
    etimologia: "Del griego 'thyon' o 'this', árbol productor de resina o incienso para ceremonias religiosas.",
    lugar_origen: "China, Japón, Manchuria y Corea",
    tamanio: "Inferior, alcanza los 5 m.",
    follaje: "Perennifolio",
    hojas: "En forma de escamas sobrepuestas con olor afrutado.",
    conos: "De color azulado; se encuentran en el extremo de las ramas.",
    imagenes: [
      "../images/paisajismo/arboles/tulia/tuliaArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/tulia.png"
  },
  tulipan_africano: {
    titulo: "Tulipán Africano",
    nombre_cientifico: "Spathodea campanulata",
    familia: "Bignoniaceae",
    etimologia: "Del griego 'Spathe', espada, y del latín 'campanulata', con forma de campánula.",
    lugar_origen: "Madagascar, África",
    tamanio: "Mediano, alcanza los 15 m.",
    follaje: "Perennifolio",
    hojas: "Compuestas, medianas, de color verde oscuro.",
    flores: "Naranjas; presentes casi todo el año, principalmente en diciembre y enero.",
    frutos: "Cápsulas alargadas y leñosas con semillas aladas.",
    imagenes: [
      "../images/paisajismo/arboles/tulipan_africano/tulipan_africanoArbol.jpeg"
    ],
    overlay: "../images/paisajismo/arboles/ubicaciones/tulipán-africano.png"
  }
};
 
const propiedades = {
  familia: "Familia",
  etimologia: "Etimología",
  lugar_origen: "Lugar de origen",
  tamanio: "Tamaño",
  follaje: "Follaje",
  hojas: "Hojas",
  flores: "Flores",
  frutos: "Frutos",
  conos: "Conos",
  observaciones: "Observaciones",
  notas: "Notas"
};
 
/* ══════════════════════════════
   ESTADO
══════════════════════════════ */
let arbolActual = null;
let lbIndex = 0;
let lbImagenes = [];
let lbLabels = [];
 
/* ══════════════════════════════
   DROPDOWN — poblar y ordenar
══════════════════════════════ */
const dropdown = document.getElementById("tree-dropdown");
const searchBar = document.getElementById("search-bar");
 
const sortedKeys = Object.keys(data).sort((a, b) =>
  data[a].titulo.localeCompare(data[b].titulo, 'es')
);
 
sortedKeys.forEach(key => {
  const item = document.createElement("div");
  item.className = "drop-item";
  item.innerHTML = `
    <span class="drop-nombre">${data[key].titulo}</span>
    <span class="drop-cientifico">(${data[key].nombre_cientifico})</span>
  `;
  item.addEventListener("click", () => seleccionarArbol(key));
  dropdown.appendChild(item);
});
 
/* ABRIR / CERRAR dropdown */
searchBar.addEventListener("click", () => {
  dropdown.classList.toggle("activo");
  document.getElementById("map-dimmer").classList.toggle("activo");
  searchBar.classList.toggle("abierto");
});
 
document.getElementById("map-dimmer").addEventListener("click", cerrarDropdown);
 
function cerrarDropdown() {
  dropdown.classList.remove("activo");
  document.getElementById("map-dimmer").classList.remove("activo");
  searchBar.classList.remove("abierto");
}
 
/* ══════════════════════════════
   SELECCIONAR ÁRBOL
══════════════════════════════ */
function seleccionarArbol(key) {
  arbolActual = key;
  const arbol = data[key];
 
  // Actualizar barra
  searchBar.value = `${arbol.titulo}  (${arbol.nombre_cientifico})`;
  cerrarDropdown();
 
  // Marcar activo en el listado
  dropdown.querySelectorAll(".drop-item").forEach((el, i) => {
    el.classList.toggle("activo-item", sortedKeys[i] === key);
  });
 
  // GALERÍA
  mostrarGaleria(key);
 
  // INFO
  mostrarInfo(key);
 
  // MAPA overlay
  const overlay = document.getElementById("mapOverlay");
  overlay.classList.remove("show");
  void overlay.offsetWidth;
  overlay.src = arbol.overlay;
  overlay.classList.add("show");
}
 
/* ══════════════════════════════
   GALERÍA
══════════════════════════════ */
/* ══════════════════════════════
   GALERÍA / CARRUSEL MÓVIL
══════════════════════════════ */
let carruselTimer = null;
let carruselIndex = 0;

function mostrarGaleria(key) {
  const arbol = data[key];
  const imgs = arbol.imagenes;
  const galeriaEl = document.getElementById("galeria-imagenes");
  const placeholder = document.getElementById("gal-placeholder");
  const section = document.getElementById("galeria-section");

  galeriaEl.innerHTML = "";
  lbImagenes = [];
  lbLabels = [];

  imgs.forEach((src, i) => {
    const label = LABELS[i] || `Imagen ${i+1}`;
    lbImagenes.push(src);
    lbLabels.push(label);

    const div = document.createElement("div");
    div.className = "gal-item";
    div.innerHTML = `
      <img src="${src}" alt="${label}" onerror="this.parentElement.style.display='none'">
      <div class="gal-label">${label}</div>
    `;
    div.addEventListener("click", () => abrirLightbox(i));
    galeriaEl.appendChild(div);
  });

  placeholder.style.display = "none";
  galeriaEl.style.display = "flex";
  section.classList.remove("vacia");

  // Si es móvil, activar carrusel
  if (window.innerWidth <= 600) {
    iniciarCarrusel();
  } else {
    detenerCarrusel();
  }
}

function iniciarCarrusel() {
  detenerCarrusel(); // limpia timer anterior
  carruselIndex = 0;
  actualizarCarrusel();
  carruselTimer = setInterval(() => {
    const items = document.querySelectorAll(".gal-item");
    if (items.length === 0) return;
    carruselIndex = (carruselIndex + 1) % items.length;
    actualizarCarrusel();
  }, 2000);
}

function detenerCarrusel() {
  if (carruselTimer) {
    clearInterval(carruselTimer);
    carruselTimer = null;
  }
  // Mostrar todos los items en desktop
  document.querySelectorAll(".gal-item").forEach(el => {
    el.style.display = "";
  });
}

function actualizarCarrusel() {
  const items = document.querySelectorAll(".gal-item");
  items.forEach((el, i) => {
    el.style.display = i === carruselIndex ? "block" : "none";
  });
}

// Reiniciar carrusel si el usuario cambia el tamaño de ventana
window.addEventListener("resize", () => {
  if (lbImagenes.length === 0) return; // sin árbol cargado aún
  if (window.innerWidth <= 600) {
    iniciarCarrusel();
  } else {
    detenerCarrusel();
  }
});
 
/* ══════════════════════════════
   INFO
══════════════════════════════ */
function mostrarInfo(key) {
  const arbol = data[key];
  const infoEl = document.getElementById("info-arbol");
  const placeholder = document.getElementById("info-placeholder");
 
  let filas = "";
  Object.keys(propiedades).forEach(prop => {
    if (arbol[prop] !== undefined) {
      filas += `
        <div class="info-label">${propiedades[prop]}:</div>
        <div class="info-valor">${arbol[prop]}</div>
      `;
    }
  });
 
  infoEl.innerHTML = `
    <div style="width:100%">
      <div class="info-header">
        <h1 class="info-titulo">${arbol.titulo}</h1>
        <span class="info-cientifico">${arbol.nombre_cientifico}</span>
      </div>
      <div class="info-divider"></div>
      <div class="info-grid">${filas}</div>
    </div>
  `;
 
  placeholder.style.display = "none";
  infoEl.style.display = "flex";
}
 
/* ══════════════════════════════
   LIGHTBOX
══════════════════════════════ */
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCap = document.getElementById("lb-cap");
 
function abrirLightbox(index) {
  lbIndex = index;
  actualizarLightbox();
  lightbox.classList.add("activo");
}
 
function actualizarLightbox() {
  lbImg.src = lbImagenes[lbIndex];
  lbCap.textContent = lbLabels[lbIndex];
}
 
document.getElementById("lb-prev").addEventListener("click", (e) => {
  e.stopPropagation();
  lbIndex = (lbIndex - 1 + lbImagenes.length) % lbImagenes.length;
  actualizarLightbox();
});
 
document.getElementById("lb-next").addEventListener("click", (e) => {
  e.stopPropagation();
  lbIndex = (lbIndex + 1) % lbImagenes.length;
  actualizarLightbox();
});
 
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === lbImg) {
    lightbox.classList.remove("activo");
  }
});
 
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("activo")) return;
  if (e.key === "ArrowLeft") { lbIndex = (lbIndex - 1 + lbImagenes.length) % lbImagenes.length; actualizarLightbox(); }
  if (e.key === "ArrowRight") { lbIndex = (lbIndex + 1) % lbImagenes.length; actualizarLightbox(); }
  if (e.key === "Escape") lightbox.classList.remove("activo");
});
 
/* ══════════════════════════════
   LUPA EN EL MAPA
══════════════════════════════ */
document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.querySelector(".contenedor");
  const mapaImg    = document.querySelector(".contenedor .img-1");
  const overlay    = document.getElementById("mapOverlay");
 
  const lupa = document.createElement("div");
  lupa.className = "lupa";
  contenedor.appendChild(lupa);
 
  const ZOOM = 2.5;
  const LUPA_RADIO = 80;
 
  function actualizarLupa(e) {
    const rect = contenedor.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
 
    lupa.style.left = x + "px";
    lupa.style.top  = y + "px";
 
    const bgW = rect.width  * ZOOM;
    const bgH = rect.height * ZOOM;
    const bgX = -(x * ZOOM - LUPA_RADIO);
    const bgY = -(y * ZOOM - LUPA_RADIO);
 
    if (overlay && overlay.src && overlay.src !== window.location.href) {
      lupa.style.backgroundImage = `url('${overlay.src}'), url('${mapaImg.src}')`;
      lupa.style.backgroundSize = `${bgW}px ${bgH}px, ${bgW}px ${bgH}px`;
      lupa.style.backgroundPosition = `${bgX}px ${bgY}px, ${bgX}px ${bgY}px`;
    } else {
      lupa.style.backgroundImage = `url('${mapaImg.src}')`;
      lupa.style.backgroundSize = `${bgW}px ${bgH}px`;
      lupa.style.backgroundPosition = `${bgX}px ${bgY}px`;
    }
  }
 
  contenedor.addEventListener("mouseenter", () => { lupa.style.display = "block"; });
  contenedor.addEventListener("mousemove", actualizarLupa);
  contenedor.addEventListener("mouseleave", () => { lupa.style.display = "none"; });

  seleccionarArbol(sortedKeys[0]);
});


  /* ── PDF ── */
  function abrirPDF() {
    const modal = document.getElementById("pdf-modal");
    const frame = document.getElementById("pdf-frame");
    // Carga diferida: solo asigna src al abrir
    if (!frame.src || frame.src === window.location.href) {
      frame.src = frame.dataset.src;
    }
    modal.classList.add("activo");
    document.getElementById("dimmer").classList.add("activo");
    document.body.style.overflow = "hidden";
  }
 
  function cerrarPDF() {
    document.getElementById("pdf-modal").classList.remove("activo");
    document.getElementById("dimmer").classList.remove("activo");
    document.body.style.overflow = "";
  }
 
  /* ── FICHA ── */
  function abrirFicha() {
    document.getElementById("ficha-modal").classList.add("activo");
    document.getElementById("dimmer").classList.add("activo");
    document.body.style.overflow = "hidden";
  }
 
  function cerrarFicha() {
    document.getElementById("ficha-modal").classList.remove("activo");
    document.getElementById("dimmer").classList.remove("activo");
    document.body.style.overflow = "";
  }
 
  /* ── Cerrar al hacer clic en el dimmer ── */
  document.getElementById("dimmer").addEventListener("click", function() {
    cerrarPDF();
    cerrarFicha();
  });
 
  /* ── Cerrar con Escape ── */
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      cerrarPDF();
      cerrarFicha();
    }
  });
 
  /* ── Clic fuera de la ficha (en el overlay del modal) cierra ── */
  document.getElementById("ficha-modal").addEventListener("click", function(e) {
    if (e.target === this) cerrarFicha();
  });
 
  document.getElementById("pdf-modal").addEventListener("click", function(e) {
    if (e.target === this) cerrarPDF();
  });

  // Al final del JS, después de todo lo demás
