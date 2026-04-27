document.addEventListener("DOMContentLoaded", () => {

    const informacion04Enero = document.getElementById('Question_04Enero');
    if(informacion04Enero){
        informacion04Enero.addEventListener("click", () => {
            Swal.fire({
                title: 'Ubicación y Extensión',
                html:'<li>El parque abarca territorios en los estados de Veracruz y Puebla.</li><br>' + 
                     '<li>Tiene una superficie de aproximadamente 19,750 hectáreas.</li><br>' + 
                     '<li>Protege la zona que rodea al Citlaltépetl, el volcán más alto de México.</li>',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }


    const informacion12Enero = document.getElementById('Question_12Enero');
    if(informacion12Enero){
        informacion12Enero.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad Excepcional<br>',
                html:
                'Es una de las zonas con mayor biodiversidad del país y del continente americano. Alberga:<br><br>'+
                '<li>Más de 3,400 especies de plantas</li>'+
                '<li>Más de 500 especies de mariposas</li>'+
                '<li>Alrededor de 114 especies de mamíferos</li>'+
                '<li>Más de 340 especies de aves</li>', 
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion14Enero = document.getElementById('Question_14Enero');
    if(informacion14Enero){
        informacion14Enero.addEventListener("click", () => {
            Swal.fire({
                title: 'Santuario de Ballenas',
                html: 
                'Es uno de los principales santuarios de reproducción y crianza de la ballena gris (Eschrichtius robustus).<br><br>'+
                'Cada invierno, cientos de ballenas grises migran desde el Ártico para dar a luz en estas aguas cálidas y protegidas.<br>',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion20Enero = document.getElementById('Question_20Enero');
    if(informacion20Enero){
        informacion20Enero.addEventListener("click", () => {
            Swal.fire({
                title: 'Significado del Nombre',
                html: 
                "Sian Ka'an significa en lengua maya “Puerta del Cielo” o “Lugar donde nace el cielo”.<br><br>"+
                "Refleja el profundo vínculo espiritual y cultural del territorio con los pueblos mayas.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion22Enero = document.getElementById('Question_22Enero');
    if(informacion22Enero){
        informacion22Enero.addEventListener("click", () => {
            Swal.fire({
                title: 'Zona Arqueológica del Tepozteco',
                html: 
                "En la cima del cerro se encuentra un templo prehispánico dedicado a Ometochtli-Tepoztécatl, dios del pulque, la fertilidad y el viento.<br><br>"+
                "Fue un sitio ceremonial de gran importancia para los pueblos nahuas y xochimilcas.<br>",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion25Enero = document.getElementById('Question_25Enero');
    if(informacion25Enero){
        informacion25Enero.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué se celebra el 25 de enero?',
                html: `
                La fecha fue establecida en 1961, cuando se fundó el Colegio de Biólogos de México, con el objetivo de impulsar la profesión, fortalecer la ética científica y promover la conservación del patrimonio natural del país.`,
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion26Enero = document.getElementById('Question_26Enero');
    if(informacion26Enero){
        informacion26Enero.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué se conmemora este día?',
                html:
                "Esta fecha conmemora la Declaración de la Conferencia de Belgrado, realizada en 1975 bajo auspicio de la UNESCO.<br><br>"+
                "En esta conferencia se establecieron las bases de la Educación Ambiental a nivel global, como parte del programa internacional “El Hombre y la Biosfera”.<br>",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion28Enero = document.getElementById('Question_28Enero');
    if(informacion28Enero){
        informacion28Enero.addEventListener("click", () => {
            Swal.fire({
                title: 'Datos relevantes sobre CO₂',
                html:
                "La concentración de CO₂ en la atmósfera ha superado las 420 partes por millón (ppm), el nivel más alto en al menos 800,000 años.<br><br>"+
                "Se estima que para evitar un calentamiento global superior a 1.5 °C, se deben reducir las emisiones globales de CO₂ en al menos un 45% para 2030, según el IPCC.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion28Enero02 = document.getElementById('Question_28Enero02');
    if(informacion28Enero02){
        informacion28Enero02.addEventListener("click", () => {
            Swal.fire({
                title: 'Volcán Tacaná: un gigante binacional',
                html:
                "Es el segundo volcán más alto de México, con 4,092 metros sobre el nivel del mar.<br><br>"+
                "Es un volcán activo y se comparte con Guatemala, donde también está protegido como Reserva de la Biosfera.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion29Enero = document.getElementById('Question_29Enero');
    if(informacion29Enero){
        informacion29Enero.addEventListener("click", () => {
            Swal.fire({
                title: 'Fauna relevante',
                html:
                "Alberga especies importantes y en peligro como:<br><br>"+
                "<li>Oso negro americano (Ursus americanus)</li>"+
                "<li>Jaguar (Panthera onca)</li>"+
                "<li>Puma</li>"+
                "<li>Pecarí de collar</li>"+
                "<li>Águila real</li>",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    /* ---- FEBRERO ---- */

    const informacion02Febrero01 = document.getElementById('Question_02Febrero01');
    if(informacion02Febrero01){
        informacion02Febrero01.addEventListener("click", () => {
            Swal.fire({
                title: 'Enfocado en Fauna Nacional:',
                html:
                "A diferencia de otros zoológicos que albergan especies exóticas, Los Coyotes se enfoca exclusivamente en especies nativas de México.<br><br>"+
                "Su objetivo principal es la educación ambiental y la conservación de fauna mexicana.<br>",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion02Febrero02 = document.getElementById('Question_02Febrero02');
    if(informacion02Febrero02){
        informacion02Febrero02.addEventListener("click", () => {
            Swal.fire({
                title: 'Cascada de Basaseachic:<h6>"Majestuosa caída de agua"</h6>',
                html:
                "Altura impresionante: Con una caída libre de 246 metros, la Cascada de Basaseachic es la segunda más alta de México y la quinta más alta de América.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion02Febrero03 = document.getElementById('Question_02Febrero03');
    if(informacion02Febrero03){
        informacion02Febrero03.addEventListener("click", () => {
            Swal.fire({
                title: 'Parte del Gran Arrecife Maya:',
                html:"Forma parte del Sistema Arrecifal Mesoamericano, también conocido como el Gran Arrecife Maya, considerado la segunda barrera arrecifal más grande del mundo.  <br><br>"+
                '<b><h3>Biodiversidad:</h3> </b>'+
                "El parque alberga más de 1,300 especies de plantas y animales, incluyendo especies en peligro de extinción como el coral cuerno de alce, la tortuga carey y la tortuga caguama.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion02Febrero04 = document.getElementById('Question_02Febrero04');
    if(informacion02Febrero04){
        informacion02Febrero04.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica: ',
                html:
                "La isla es un santuario para más de 150 especies de aves marinas tropicales, como fragatas, pelícanos cafés, cormoranes y golondrinas de mar. También es un sitio de anidación para tortugas marinas como la tortuga carey, la tortuga verde y la caguama.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion02Febrero05 = document.getElementById('Question_02Febrero05');
    if(informacion02Febrero05){
        informacion02Febrero05.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad: ',
                html: 
                "Se han registrado más de 2,874 especies, de las cuales 1,534 son plantas, 803 animales y 537 hongos. Entre la fauna destacan especies como el jaguar, guacamaya verde, puma y diversas especies de reptiles y anfibios.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion02Febrero06 = document.getElementById('Question_02Febrero06');
    if(informacion02Febrero06){
        informacion02Febrero06.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica y ambiental',
                html: "Son hábitats clave para más del 40% de las especies del planeta, incluyendo peces, anfibios, reptiles, aves migratorias y mamíferos.<br><br>"+
                "Funcionan como “riñones del planeta”, filtrando contaminantes, recargando acuíferos y reduciendo el impacto de inundaciones y sequías.<br><br>"+
                "Almacenan grandes cantidades de carbono, ayudando a mitigar el cambio climático.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion13Febrero = document.getElementById('Question_13Febrero');
    if(informacion13Febrero){
        informacion13Febrero.addEventListener("click", () => {
            Swal.fire({
                title: 'Características del Águila Real (Aquila chrysaetos)',
                html:"<b>Tamaño y envergadura:</b> Es una de las aves rapaces más grandes, alcanzando hasta 1 metro de longitud y una envergadura de 2.3 metros .<br><br>"+
                "<b>Plumaje distintivo:</b> Presenta un plumaje de color café oscuro con tonalidades doradas en la cabeza y los hombros, razón por la cual también se le conoce como águila dorada. <b>Longevidad:</b> En estado salvaje, puede vivir hasta 30 años, aunque el promedio es de 20 años .",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion14Febrero = document.getElementById('Question_14Febrero');
    if(informacion14Febrero){
        informacion14Febrero.addEventListener("click", () => {
            Swal.fire({
                title: 'Datos relevantes a nivel global',
                html:"Aproximadamente el 80% de la energía mundial aún proviene de combustibles fósiles.<br>"+
                "El sector energético es responsable de alrededor del 73% de las emisiones globales de gases de efecto invernadero (según el IPCC).",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }



    const informacion18Febrero = document.getElementById('Question_18Febrero');
    if(informacion18Febrero){
        informacion18Febrero.addEventListener("click", () => {
            Swal.fire({
                title: "Aspectos Geográficos",
                html: 
                "<b>Extensión original:</b> Aproximadamente 1,500 hectáreas.<br><br>"+
                "<b>Elevaciones principales:</b> Incluye el Cerro del Tepeyac, el Cerro del Guerrero y el Cerro de Santa Isabel, con altitudes que oscilan entre los 2,450 y 2,500 metros sobre el nivel del mar",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion22Febrero = document.getElementById('Question_22Febrero');
    if(informacion22Febrero){
        informacion22Febrero.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html:
                "<b>Flora:</b> Predominan especies como el pino real (Pinus montezumae), cedro de San Juan (Cupressus lusitanica) y encino (Quercus rugosa).<br><br>"+
                "<b>Fauna:</b> Habitan especies como el águila real (Aquila chrysaetos), zopilote (Cathartes aura), conejo cola de algodón mexicano (Sylvilagus cunicularius), coatí, tejón (Nasua narica), zorra gris, coyote (Canis latrans) y venado cola blanca (Odocoileus virginianus), entre otros.<br><br>"+
                "<b>Especies en riesgo:</b> Según la CONABIO, se han registrado más de 760 especies de plantas y animales, de las cuales 42 están en alguna categoría de riesgo según la NOM-059, y 12 son exóticas.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion26Febrero = document.getElementById('Question_26Febrero');
    if(informacion26Febrero){
        informacion26Febrero.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ',
                html:
                "Los Manglares de Nichupté fueron designados como Sitio Ramsar el 2 de febrero de 2008, reconociéndolos como un humedal de importancia internacional.<br><br>"+
                "A pesar de su ubicación en una zona urbana, este ecosistema mantiene una alta biodiversidad y es crucial para la resiliencia ambiental de Cancún.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    /*----- MARZO ----*/

    const informacion03Marzo = document.getElementById('Question_03Marzo');
    if(informacion03Marzo){
        informacion03Marzo.addEventListener("click", () => {
            Swal.fire({
                title: 'Objetivo del Día',
                html: 
                "Concienciar sobre el valor de la fauna y flora silvestres. Promover acciones de conservación, uso sostenible y lucha contra el tráfico ilegal de especies.<br><br>Celebrar la belleza y diversidad de la vida silvestre y su importancia ecológica, económica, científica, cultural y recreativa.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion05Marzo = document.getElementById('Question_05Marzo');
    if(informacion05Marzo){
        informacion05Marzo.addEventListener("click", () => {
            Swal.fire({
                title: ' ',
                html:"Más del 70% de la energía mundial todavía proviene de fuentes fósiles (carbón, petróleo y gas), que emiten gases de efecto invernadero.<br><br>"+
                "En una vivienda, hasta el 40% del consumo energético puede reducirse con medidas de eficiencia (aislamiento térmico, iluminación eficiente, electrodomésticos eficientes, etc.).",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion08Marzo = document.getElementById('Question_08Marzo');
    if(informacion08Marzo){
        informacion08Marzo.addEventListener("click", () => {
            Swal.fire({
                title: 'Significado Cultural',
                html:
                '<b>Toponimia:</b> "Camécuaro" proviene del purépecha y se interpreta comúnmente como "lugar de baño".<br><br>'+
                '<b>Leyenda:</b> Existe una leyenda purépecha que narra la historia de la princesa Huanita y su amor por Tangáxhuan, cuyo trágico desenlace dio origen al lago, conocido como "el lago de lágrimas". ',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion13Marzo = document.getElementById('Question_13Marzo');
    if(informacion13Marzo){
        informacion13Marzo.addEventListener("click", () => {
            Swal.fire({
                title: 'Ecosistemas y Biodiversidad',
                html:
                "<b>Bosque de niebla:</b> El Triunfo alberga uno de los bosques mesófilos de montaña más extensos y diversos de México, considerado uno de los ecosistemas más amenazados a nivel mundial.<br><br>"+
                "<b>Vegetación:</b> Protege 10 de los 19 tipos de vegetación presentes en Chiapas, incluyendo bosques de niebla y selvas húmedas.<br><br>"+
                "<b>Flora:</b> Se han registrado más de 2,000 especies de plantas, destacando orquídeas, bromelias, helechos arborescentes y árboles que alcanzan hasta 70 metros de altura.<br><br>"+
                "<b>Fauna:</b> La reserva es hogar de 378 especies de aves (representando el 40% de las aves de México), 112 especies de mamíferos, 55 reptiles y 22 anfibios.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion14Marzo = document.getElementById('Question_14Marzo');
    if(informacion14Marzo){
        informacion14Marzo.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué se celebra este día?',
                html:
                "Fue instaurado en 1997 durante el Primer Encuentro Internacional de Afectados por Represas, celebrado en Curitiba, Brasil.<br><br>"+
                "Su objetivo es visibilizar las consecuencias sociales, ambientales y culturales de los grandes proyectos hidroeléctricos, especialmente las represas, y defender los derechos de las comunidades afectadas.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion21Marzo = document.getElementById('Question_21Marzo');
    if(informacion21Marzo){
        informacion21Marzo.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia de los bosques',
                html:
                "Cubren más del 30% de la superficie terrestre.<br><br>"+
                "Albergan más del 80% de las especies terrestres de animales, plantas y hongos.<br><br>"+
                "Son esenciales para el ciclo del agua, el control del clima y la lucha contra el cambio climático.<br><br>"+
                "Proveen alimentos, medicinas, madera, combustible y medios de vida a millones de personas, incluyendo muchas comunidades indígenas.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion22Marzo = document.getElementById('Question_22Marzo');
    if(informacion22Marzo){
        informacion22Marzo.addEventListener("click", () => {
            Swal.fire({
                title: 'Objetivo del Día Mundial del Agua',
                html:"Concienciar sobre la crisis mundial del agua y la necesidad de buscar soluciones para que todos tengan acceso a agua potable, segura y asequible.<br><br>"+
                "Recordar que el agua es un derecho humano, no un privilegio. Se estima que una de cada cuatro personas vivirá en un país afectado por escasez crónica de agua para 2050.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion22Marzo02 = document.getElementById('Question_22Marzo02');
    if(informacion22Marzo02){
        informacion22Marzo02.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica',
                html: 
                "Protege parte de la cuenca alta del río Blanco, una zona clave para el suministro de agua en la región.<br><br>"+
                "Sirve como corredor biológico entre ecosistemas de selva baja y bosque mesófilo de montaña.<br><br>"+
                "Alberga una gran diversidad de flora y fauna, incluyendo especies endémicas y amenazadas.<br><br>"+
                "El área es importante para la observación de aves y estudios de biodiversidad.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion23Marzo = document.getElementById('Question_23Marzo');
    if(informacion23Marzo){
        informacion23Marzo.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia de la meteorología',
                html:
                "Permite predecir fenómenos naturales como huracanes, tormentas, olas de calor o heladas.<br><br>"+
                "Ayuda a proteger vidas y bienes mediante sistemas de alerta temprana.<br><br>"+
                "Es clave para la agricultura, pesca, aviación, navegación, salud pública y más.<br><br>"+
                "Apoya la planificación urbana y la gestión de recursos hídricos.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion23Marzo02 = document.getElementById('Question_23Marzo02');
    if(informacion23Marzo02){
        informacion23Marzo02.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad destacada',
                html: 
                "Se han registrado más de 2,900 especies de plantas vasculares.<br><br>"+
                "Alberga más de 110 especies de mamíferos, como el jaguar, tigrillo, ocelote, venado cola blanca y murciélagos polinizadores.<br><br>"+
                "Más de 330 especies de aves, incluyendo águilas, búhos, tucanes y pájaros carpinteros.<br><br>"+
                "También se encuentran anfibios y reptiles endémicos que no habitan en ningún otro lugar del mundo.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }
    
    /* ABRIL */

    const informacion14Abril = document.getElementById('Question_14Abril');
    if(informacion14Abril){
        informacion14Abril.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia histórica y cultural',
                html: 
                'Dzibilchaltún es un antiguo asentamiento maya cuyo nombre significa “donde hay escritura en las piedras”.<br><br>'+'Contiene el famoso Templo de las Siete Muñecas, conocido por su alineación con el sol durante los equinoccios.<br><br>'+
                'En la zona también se encuentra un cenote sagrado: el Cenote Xlacah, que fue un importante sitio ritual y fuente de agua para los mayas.<br><br>'+
                'Además, alberga un museo de sitio con piezas arqueológicas relevantes de la región.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion14Abril02 = document.getElementById('Question_14Abril02');
    if(informacion14Abril02){
        informacion14Abril02.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica',
                html:
                "La Laguna Madre es la laguna hipersalina más grande del continente americano y una de las más grandes del mundo.<br><br>"+
                "Es un sistema costero poco profundo, único por su alta salinidad, con humedales, dunas costeras, islas barrera y marismas.<br><br>"+
                "Protege hábitats clave para aves acuáticas migratorias, peces, crustáceos, y especies endémicas.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion15Abril = document.getElementById('Question_15Abril');
    if(informacion15Abril){
        informacion15Abril.addEventListener("click", () => {
            Swal.fire({
                title: 'Amenazas y retos actuales',
                html:
                "<li>Presión por crecimiento urbano e inmobiliario.</li><br>"+
                "<li>Basura y vandalismo.</li><br>"+
                "<li>Falta de recursos para vigilancia y mantenimiento.</li><br>"+
                "<li>Necesidad de fortalecer el involucramiento de la comunidad local.</li>",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion19Abril = document.getElementById('Question_19Abril');
    if(informacion19Abril){
        informacion19Abril.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica ',
                html: 
                "El suelo es un recurso no renovable, ya que se necesitan 500 años para que se formen de manera natural 2 cm de tierra vegetal fértil.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion22Abril = document.getElementById('Question_22Abril');
    if(informacion22Abril){
        informacion22Abril.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué se llama “Madre Tierra”?',
                html:
                "El término “Madre Tierra” refleja la visión ancestral de muchos pueblos originarios, que consideran al planeta como un ser vivo y sagrado, que nutre, sostiene y conecta toda la vida.<br><br>"+
                "Reconoce la interdependencia entre los seres humanos, los ecosistemas y el planeta como un todo.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion25Abril01 = document.getElementById('Question_25Abril01');
    if(informacion25Abril01){
        informacion25Abril01.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad destacada',
                html:
                "<li>Más de 100 especies de peces, anfípodos, corales, moluscos y crustáceos.</li><br>"+
                "<li>Aves marinas residentes y migratorias.</li><br>"+
                "<li>Ballenas jorobadas avistadas en temporadas de diciembre a marzo.</li>",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion25Abril02 = document.getElementById('Question_25Abril02');
    if(informacion25Abril02){
        informacion25Abril02.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad destacada',
                html: 
                "<li>Aves marinas como el bobo de patas azules, pelícanos, fragatas y gaviotas.</li><br>"+
                "<li><b>Mamíferos marinos:</b> delfines, lobos marinos y ocasionalmente ballenas.</li><br>"+
                "<li>Reptiles y flora endémica en las zonas rocosas.</li><br>"+
                "<li>Riqueza ictiológica (peces) y zonas de crianza de especies comerciales.</li>",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion25Abril03 = document.getElementById('Question_25Abril03');
    if(informacion25Abril03){
        informacion25Abril03.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué se declaró Reserva de la Biosfera?',
                html: 
                "Por su altísima biodiversidad y endemismo, tanto terrestre como marino.<br><br>"+
                "Para proteger especies únicas como el lobo fino de Guadalupe, foca elefante, y numerosas plantas y aves endémicas.<br><br>"+
                "Es uno de los pocos lugares del mundo donde se puede observar al gran tiburón blanco en estado natural.", 
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion25Abril04 = document.getElementById('Question_25Abril04');
    if(informacion25Abril04){
        informacion25Abril04.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad destacada',
                html:
                "<b>Flora:</b> bosque de encino, matorral submontano, orquídeas silvestres.<br><br>"+
                "<b>Fauna:</b> halcones, zorros, serpientes, murciélagos, venados cola blanca.<br><br>"+
                "Es un corredor biológico importante dentro de la Sierra Madre Oriental.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion25Abril05 = document.getElementById('Question_25Abril05');
    if(informacion25Abril05){
        informacion25Abril05.addEventListener("click", () => {
            Swal.fire({
                title: 'Datos curiosos',
                html:
                "Existen 18 especies de pingüinos, y la mayoría vive en el hemisferio sur, desde la Antártida hasta Sudáfrica, Sudamérica, Australia y Nueva Zelanda.<br><br>"+
                "Los pingüinos no vuelan, pero son excelentes nadadores: pueden alcanzar hasta 36 km/h bajo el agua.<br><br>"+
                "El pingüino emperador es el más grande (hasta 1.2 m de altura); el más pequeño es el pingüino azul (30 cm).<br><br>"+
                "Son animales muy sociales y suelen vivir en grandes colonias.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion26Abril = document.getElementById('Question_26Abril');
    if(informacion26Abril){
        informacion26Abril.addEventListener("click", () => {
            Swal.fire({
                title: '¿Qué lo hace especial?',
                html:
                "Es una de las zonas más altas del noroeste de México, hogar del Pico del Diablo<br> (3,095 m), el punto más alto de la península.<br><br>"+
                "Tiene paisajes montañosos, bosques de coníferas, cañones profundos y cielos limpios únicos.<br><br>"+
                "Es una frontera ecológica entre el desierto y los ecosistemas alpinos.  <br><br>"+
                "Hogar del cóndor de California (Gymnogyps californianus), especie en peligro crítico que ha sido reintroducida con éxito en esta región.<br><br>"+
                "Aquí se encuentra el Observatorio Astronómico Nacional del Instituto de Astronomía de la UNAM, considerado uno de los mejores sitios en el hemisferio norte por sus cielos despejados y oscuros.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion27Abril = document.getElementById('Question_27Abril');
    if(informacion27Abril){
        informacion27Abril.addEventListener("click", () => {
            Swal.fire({
                title: 'Características del ecosistema',
                html: 
                "Su nombre rinde homenaje a un momento clave en la historia política de México: la promulgación de la Constitución Liberal de 1857.<br><br>"+
                "Este parque protege un ecosistema montañoso de bosques templados, lagunas de montaña, arroyos y rocas graníticas.<br><br>"+
                "<b>Altitud promedio:</b> entre 1,600 y 2,000 msnm.<br><br>"+
                "Posee una laguna estacional llamada Laguna Hanson, hábitat para aves migratorias y residentes.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion28Abril = document.getElementById('Question_28Abril');
    if(informacion28Abril){
        informacion28Abril.addEventListener("click", () => {
            Swal.fire({
                title: 'Especies mexicanas destacadas',
                html:
                "México es uno de los países con mayor diversidad de anfibios en el mundo (más de 400 especies registradas), muchas endémicas, como:<br><br>"+
                "<li>Ajolote mexicano (Ambystoma mexicanum)</li>"+
                "<li>Rana arborícola de ojos rojos</li>"+
                "<li>Salamandra de la Sierra Madre Oriental</li>", 
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    /* MAYO */

    const informacion02Mayo = document.getElementById('Question_02Mayo');
    if(informacion02Mayo){
        informacion02Mayo.addEventListener("click", () => {
            Swal.fire({
                title: '¿Quién lo declaró y por qué?',
                html:
                "Fue proclamado oficialmente por la Asamblea General de las Naciones Unidas en 2016, y comenzó a celebrarse a partir de 2017.<br><br>"+
                "<b>Objetivo:</b> sensibilizar sobre la importancia del atún para la seguridad alimentaria, la economía global y la conservación marina.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion03Mayo = document.getElementById('Question_03Mayo');
    if(informacion03Mayo){
        informacion03Mayo.addEventListener("click", () => {
            Swal.fire({
                title: 'Significado del nombre',
                html:
                '"Bala’an K’aax" significa en lengua maya “Selva Escondida”.<br><br>'+
                'Hace referencia tanto a su ubicación remota como a su valor como santuario natural poco alterado por actividades humanas.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion04Mayo = document.getElementById('Question_04Mayo');
    if(informacion04Mayo){
        informacion04Mayo.addEventListener("click", () => {
            Swal.fire({
                title: 'México cuenta con brigadas como:',
                html:
                "<li>CONAFOR (Comisión Nacional Forestal)</li>"+
                "<li>CONANP (en Áreas Naturales Protegidas)</li>"+
                "<li>Brigadas comunitarias y rurales.</li><br>"+
                "En 2023 se reportaron más de 7,000 incendios forestales en el país.<br><br>"+
                "Estados como Chiapas, Durango, Oaxaca y Jalisco son los más afectados.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion04Mayo02 = document.getElementById('Question_04Mayo02');
    if(informacion04Mayo02){
        informacion04Mayo02.addEventListener("click", () => {
            Swal.fire({
                title: '¿Qué es el Cofre de Perote?',
                html:
                'Es un volcán extinto con una característica formación rocosa en forma de cofre en la cima, que le da su nombre.<br><br>'+
                '<b>Nombre náhuatl:</b> Nauhcampatépetl, que significa “montaña cuadrada” o “cerro en forma de caja”.<br><br>'+
                '<b>Altura:</b> 4,282 metros sobre el nivel del mar — es la octava montaña más alta de México.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion10Mayo = document.getElementById('Question_10Mayo');
    if(informacion10Mayo){
        informacion10Mayo.addEventListener("click", () => {
            Swal.fire({
                title: '¿Qué lo hace especial?',
                html:
                "Es un archipiélago volcánico de extraordinaria belleza y valor ecológico.<br><br>"+
                "Fue adquirido por la conservación con ayuda de la sociedad civil en los años 90, para evitar su privatización.<br><br>"+
                "Su riqueza biológica lo convierte en uno de los ecosistemas marinos más diversos del planeta.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion11Mayo = document.getElementById('Question_11Mayo');
    if(informacion11Mayo){
        informacion11Mayo.addEventListener("click", () => {
            Swal.fire({
                title: 'México y las aves migratorias',
                html:
                "México es crucial para las aves migratorias del continente americano, ya que:<br><br>"+
                "Es puente entre América del Norte y América del Sur.<br><br>"+
                "Alberga rutas migratorias como la del Pacífico, Central y del Golfo.<br><br>"+
                "Más de 1,100 especies de aves se encuentran en México, y muchas de ellas son migratorias (como el halcón peregrino o la cigüeña americana).",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion12Mayo = document.getElementById('Question_12Mayo');
    if(informacion12Mayo){
        informacion12Mayo.addEventListener("click", () => {
            Swal.fire({
                title: 'Dato curioso',
                html:"Durante el invierno, más de 80,000 aves migratorias llegan a las Marismas, convirtiéndolo en uno de los espectáculos naturales más impresionantes del occidente de México.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion19Mayo = document.getElementById('Question_19Mayo');
    if(informacion19Mayo){
        informacion19Mayo.addEventListener("click", () => {
            Swal.fire({
                title: '¿Qué la hace única?',
                html:
                "Ocupa el 30% del territorio de Querétaro.<br><br>"+
                "Es la reserva más biodiversa del centro de México.<br><br>"+
                "Su geografía abarca desde bosques templados y selvas tropicales, hasta desiertos y pastizales.<br><br>"+
                "Es una zona de transición biogeográfica entre el norte árido y el sur tropical del país.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion21Mayo = document.getElementById('Question_21Mayo');
    if(informacion21Mayo){
        informacion21Mayo.addEventListener("click", () => {
            Swal.fire({
                title: '¿Qué la hace única?',
                html:
                "Es uno de los humedales costeros más importantes de México.<br><br>"+
                "Su sistema de ría (una especie de estuario alargado) permite la mezcla de agua dulce y salada, lo que genera ecosistemas altamente productivos.<br><br>"+
                "Alberga una gran población de flamencos rosados (Phoenicopterus ruber), símbolo de la región.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion22Mayo = document.getElementById('Question_22Mayo');
    if(informacion22Mayo){
        informacion22Mayo.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad en México',
                html:
                "México es considerado país megadiverso:<br><br>"+
                "<li>Ocupa el 5.º lugar mundial en biodiversidad.</li>"+
                "<li>Tiene más de 200,000 especies registradas.</li>"+
                "<li>Es hogar de miles de especies endémicas.</li>"+
                "<li>Cuenta con más de 180 Áreas Naturales Protegidas federales.</li>",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion23Mayo = document.getElementById('Question_23Mayo');
    if(informacion23Mayo){
        informacion23Mayo.addEventListener("click", () => {
            Swal.fire({
                title: '¿Qué la hace única?',
                html:
                'Calakmul en lengua maya significa “Ciudad de las dos pirámides adyacentes”<br><br>'+
                'Es la segunda área protegida más grande de México (solo detrás de El Vizcaíno, en Baja California Sur).<br><br>'+
                'Forma parte de la Selva Maya, la selva tropical más extensa de América después del Amazonas.<br><br>'+
                'Es una de las pocas reservas con doble patrimonio (natural y cultural) en el mundo.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion24Mayo = document.getElementById('Question_24Mayo');
    if(informacion24Mayo){
        informacion24Mayo.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica',
                html:
                "Los petenes solo se encuentran en Cuba, Belice y México, y en México esta reserva es la más importante por su extensión y estado de conservación.<br><br>"+
                "Algunos petenes tienen más de 30 metros de altura y están conectados por aguas subterráneas.<br><br>"+
                "Los petenes son ecosistemas únicos en el planeta, raros y extremadamente ricos en biodiversidad.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion24Mayo02 = document.getElementById('Question_24Mayo02');
    if(informacion24Mayo02){
        informacion24Mayo02.addEventListener("click", () => {
            Swal.fire({
                title: 'Valor cultural y arqueológico',
                html:"Contiene la Zona Arqueológica de Yagul, un antiguo centro zapoteca.<br>"+
                "Entre sus estructuras destacan:<br><br>"+
                "<li>El Palacio de los Seis Patios</li>"+
                "<li>La tumba doble más grande de Mesoamérica</li>"+
                "<li>El juego de pelota</li>"+
                "<li>Amplias terrazas, calles, plazas y habitaciones nobles.</li><br>"+
                "En las cuevas cercanas se hallaron los restos más antiguos de calabazas, frijoles y maíz domesticado conocidos hasta hoy.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion27Mayo = document.getElementById('Question_27Mayo');
    if(informacion27Mayo){
        informacion27Mayo.addEventListener("click", () => {
            Swal.fire({
                title: 'Valor cultural e histórico',
                html:
                "En la zona arqueológica destacan:<br><br>"+
                "<li>Los Atlantes de Tula: esculturas monumentales de guerreros toltecas, de casi 5 metros de altura.</li>"+
                "<li>Pirámide B: templo principal con los atlantes sobre la plataforma.</li>"+
                "<li>Juegos de pelota, palacios, altares y basamentos piramidales.</li><br>"+
                "Tula fue una ciudad clave entre los siglos IX y XIII d.C., reconocida por su influencia cultural, arquitectónica y militar.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion30Mayo = document.getElementById('Question_30Mayo');
    if(informacion30Mayo){
        informacion30Mayo.addEventListener("click", () => {
            Swal.fire({
                title: 'Valor histórico',
                html:
                "El parque honra a Juan N. Álvarez, originario de Atoyac de Álvarez (Guerrero), quien luchó en la Independencia de México y encabezó el movimiento liberal tras la caída de Santa Anna.<br><br>"+
                "Fue uno de los promotores del Plan de Ayutla y precursor de las Leyes de Reforma.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    /* JUNIO */

    const informacion02Junio = document.getElementById('Question_02Junio');
    if(informacion02Junio){
        informacion02Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Datos curiosos',
                html: 
                'Es una de las zonas desérticas más espectaculares del mundo por su geología, flora y cielos despejados.<br><br>'+
                'Es hogar del 80% de los cirios del planeta.<br><br>'+
                'Muchos la llaman el “jardín surrealista del desierto” por su apariencia única, casi de otro planeta.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion05Junio = document.getElementById('Question_05Junio');
    if(informacion05Junio){
        informacion05Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Impacto',
                html:
                "Es celebrado en más de 150 países.<br><br>"+
                "Ha inspirado acciones ciudadanas y políticas públicas.<br><br>"+
                "El Día Mundial del Medio Ambiente es considerado el evento anual más importante de la ONU en favor del planeta.<br><br>"+
                "Cada año moviliza a más personas que el Día de la Tierra o el Día del Agua, especialmente en redes sociales.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion05Junio02 = document.getElementById('Question_05Junio02');
    if(informacion05Junio02){
        informacion05Junio02.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica',
                html:
                "Es una de las últimas áreas con selva mediana subperennifolia bien conservada en la Península de Yucatán.<br><br>"+
                "Hábitat clave para especies emblemáticas como:<br><br>"+
                "<li>El mono araña (Ateles geoffroyi) – especie en peligro.</li>"+
                "<li>El jaguar (Panthera onca) – especie amenazada.</li><br>"+
                "Contiene cenotes y aguadas, esenciales para la biodiversidad y el equilibrio hídrico de la región.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion05Junio03 = document.getElementById('Question_05Junio03');
    if(informacion05Junio03){
        informacion05Junio03.addEventListener("click", () => {
            Swal.fire({
                title: 'Fauna destacada',
                html:
                "Ballena azul, ballena jorobada, rorcual común (uso de canales marinos para migración).<br><br>"+
                "Tiburón ballena, delfines, lobos marinos, mantarrayas gigantes, tortugas marinas (4 especies).<br><br>"+
                "Importante hábitat para aves marinas y rapaces, como el águila pescadora y el halcón peregrino.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion05Junio04 = document.getElementById('Question_05Junio04');
    if(informacion05Junio04){
        informacion05Junio04.addEventListener("click", () => {
            Swal.fire({
                title: 'Valor ecológico',
                html:
                "Es uno de los mejores ejemplos de dunas activas en América del Norte.<br><br>"+
                "Funciona como corredor biológico entre zonas áridas del norte y otras regiones de Chihuahua.<br><br>"+
                "Algunas especies que habitan ahí no existen en ninguna otra parte del mundo.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion05Junio05 = document.getElementById('Question_05Junio05');
    if(informacion05Junio05){
        informacion05Junio05.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica',
                html:
                "Es una de las áreas protegidas más grandes del norte de México.<br><br>"+
                "Forma parte del corredor biológico Binacional junto con el Parque Nacional Big Bend (EE. UU.) y otras Áreas Naturales Protegidas mexicanas como Maderas del Carmen y Cañón de Santa Elena.<br><br>"+
                "Ocampo es uno de los pocos lugares en México donde aún se pueden observar poblaciones silvestres de oso negro y donde existen esfuerzos exitosos de conservación binacional de esta especie.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion05Junio06 = document.getElementById('Question_05Junio06');
    if(informacion05Junio06){
        informacion05Junio06.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica',
                html:
                "Protege uno de los sistemas arrecifales más importantes del Golfo de México.<br><br>"+
                "Contiene arrecifes barrera, de parche y plataforma formados principalmente por corales pétreos.<br><br>"+
                "Sirve como hábitat, zona de alimentación y reproducción de cientos de especies marinas.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion05Junio07 = document.getElementById('Question_05Junio07');
    if(informacion05Junio07){
        informacion05Junio07.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica',
                html:
                "Protege una de las zonas de alimentación más importantes del mundo para el tiburón ballena (Rhincodon typus), el pez más grande del planeta.<br><br>"+
                "El área funciona como un corredor biológico marino, clave para la conservación de especies migratorias.<br><br>"+
                "Cada tiburón ballena tiene un patrón único de manchas, como una huella digital, que permite a científicos identificarlos individualmente a lo largo de los años.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion05Junio08 = document.getElementById('Question_05Junio08');
    if(informacion05Junio08){
        informacion05Junio08.addEventListener("click", () => {
            Swal.fire({
                title: '¿Qué son las ventilas hidrotermales?',
                html:
                "Son fisuras en el fondo marino donde el agua de mar penetra en la corteza terrestre, se calienta con el magma y emerge cargada de minerales a temperaturas de hasta 400 °C.<br><br>"+
                "Forman ecosistemas extremos con condiciones de alta presión, oscuridad total y presencia de compuestos tóxicos como sulfuro de hidrógeno… ¡y aún así hay vida!<br><br>"+
                "Este sitio fue la primera área protegida en México enfocada exclusivamente en ecosistemas de aguas profundas.<br><br>"+
                "Las especies aquí descubiertas no se encuentran en ninguna otra parte del planeta.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion06Junio = document.getElementById('Question_06Junio');
    if(informacion06Junio){
        informacion06Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Dato curioso',
                html:
                "Su nombre, “Sierra La Laguna”, proviene de una laguna estacional que se forma en la parte alta de la sierra, considerada sagrada por comunidades locales.<br><br>"+
                "Es uno de los pocos lugares en México donde coexisten pinos, encinos y cactus en un mismo sistema.<br><br>"+
                "Considerada una isla biológica por su aislamiento geográfico.<br><br>"+
                "Es un sitio clave para el estudio de la evolución, adaptación y biodiversidad en ecosistemas insulares y montañosos.<br><br>"+
                "Su conservación es fundamental para la resiliencia ecológica del sur de Baja California ante el cambio climático.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion06Junio02 = document.getElementById('Question_06Junio02');
    if(informacion06Junio02){
        informacion06Junio02.addEventListener("click", () => {
            Swal.fire({
                title: 'Dato curioso',
                html:
                'La Sierra del Abra Tanchipa es uno de los pocos lugares del centro-norte de México donde aún se conserva en buen estado la selva baja caducifolia, un ecosistema sumamente amenazado.<br><br>'+
                'Su nombre “Tanchipa” proviene del náhuatl y se interpreta como “Lugar del Abra” (paso entre montañas).',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion06Junio03 = document.getElementById('Question_06Junio03');
    if(informacion06Junio03){
        informacion06Junio03.addEventListener("click", () => {
            Swal.fire({
                title: 'Descripción general',
                html:
                "El archipiélago está formado por cuatro islas volcánicas:<br><br>"+
                "<li>Isla Socorro (la más grande)</li>"+
                "<li>Isla San Benedicto</li>"+
                "<li>Isla Clarión</li>"+
                "<li>Isla Roca Partida</li><br>"+
                "Todas las islas son de origen volcánico y emergen abruptamente desde las profundidades del océano.<br><br>"+
                "Consideradas como las “Galápagos mexicanas” por su nivel de endemismo y aislamiento.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion06Junio04 = document.getElementById('Question_06Junio04');
    if(informacion06Junio04){
        informacion06Junio04.addEventListener("click", () => {
            Swal.fire({
                title: 'Descripción general',
                html:
                "Es el mayor arrecife coralino del Golfo de México.<br><br>"+
                "Conformado por un sistema de bancos arenosos y formaciones coralinas, e incluye cinco islas principales:<br><br>"+
                "<li>Isla Pérez (la única habitada, con un faro y una estación naval)</li>"+
                "<li>Isla Blanca</li>"+
                "<li>Isla Muertos</li>"+
                "<li>Isla Pájaros</li>"+
                "<li>Isla Desterrada</li>",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion06Junio05 = document.getElementById('Question_06Junio05');
    if(informacion06Junio05){
        informacion06Junio05.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica',
                html:
                'Su nombre en lengua maya significa "Señor Jaguar" (Yum Balam)<br><br>'+
                'Es un corredor biológico clave para el jaguar en el Caribe mexicano<br><br>'+
                'Proporciona hábitats de anidación, alimentación y reproducción para numerosas especies protegidas<br><br>'+
                'Las lagunas costeras y manglares funcionan como criaderos de peces y crustáceos, fundamentales para la pesca local<br><br>'+
                'Protege una parte del Arrecife Mesoamericano, el segundo más grande del mundo',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion06Junio06 = document.getElementById('Question_06Junio06');
    if(informacion06Junio06){
        informacion06Junio06.addEventListener("click", () => {
            Swal.fire({
                title: 'Reconocimientos',
                html:
                "Sitio Ramsar (Humedal de Importancia Internacional) desde 2004<br><br>"+
                "Considerada una de las reservas de humedales más grandes y valiosas de Mesoamérica<br><br>"+
                "Referente nacional en cuanto a manglares, productividad pesquera y resiliencia ecológica<br><br>"+
                "La Laguna de Términos fue refugio de piratas en la época colonial, y hoy es refugio de biodiversidad. Su nombre proviene del hecho de que marcaba el “término” del dominio español en esa parte del Golfo.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion06Junio07 = document.getElementById('Question_06Junio07');
    if(informacion06Junio07){
        informacion06Junio07.addEventListener("click", () => {
            Swal.fire({
                title: 'Éxito de conservación',
                html:
                'En los años 90, el arrecife estaba severamente deteriorado por la pesca.<br><br>'+
                'Gracias al impulso de la comunidad local de Cabo Pulmo, que decidió dejar de pescar para proteger el arrecife, se logró su recuperación.<br><br>'+
                'De 1999 a 2009, se documentó un aumento del 463% en la biomasa de peces, uno de los mayores logros de restauración marina a nivel mundial (según National Geographic y PNAS).<br><br>'+
                'Hoy es considerado un modelo de conservación comunitaria efectiva.<br><br>'+
                'En Cabo Pulmo puede observarse uno de los fenómenos marinos más espectaculares: los "tornados de jureles", enormes cardúmenes que giran en espiral, formando columnas plateadas bajo el agua.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion06Junio08 = document.getElementById('Question_06Junio08');
    if(informacion06Junio08){
        informacion06Junio08.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica',
                html: 
                "La Sepultura protege una zona de recarga hídrica clave para la costa de Chiapas y parte de Oaxaca.<br><br>"+
                "Es una de las regiones más importantes para la conservación del jaguar y el tapir en Mesoamérica.<br><br>"+
                "Sirve como puente ecológico entre selvas tropicales y bosques templados.<br><br>"+
                "Alberga especies en peligro de extinción y endemismos únicos del sur de México.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion07Junio = document.getElementById('Question_07Junio');
    if(informacion07Junio){
        informacion07Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad destacada',
                html:
                "Alberga una de las floras más ricas del país: se han identificado más de 1,400 especies de plantas vasculares.<br><br>"+
                "Predominan los bosques de encino, pino-encino y selvas bajas caducifolias, además de pastizales y matorral xerófilo.<br><br>"+
                "Hay al menos 40 especies endémicas de plantas en la región.<br><br>"+
                "Muchas especies botánicas que habitan la Sierra de Álvarez no se encuentran en ningún otro lugar del mundo, lo que la convierte en una joya natural y un laboratorio vivo para la ciencia.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion07Junio02 = document.getElementById('Question_07Junio02');
    if(informacion07Junio02){
        informacion07Junio02.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ',
                html:
                'Su nombre proviene del náhuatl "miztli", que significa “puma” o “felino grande”, en referencia a la presencia histórica de grandes depredadores en la zona.<br><br>'+
                'Es un corredor biológico natural para especies de gran movilidad como el puma y el venado.<br><br>'+
                'Zona clave para la conectividad ecológica entre ecosistemas del norte y centro del país.<br><br>'+
                'Sus bosques son esenciales para la recarga de acuíferos y regulación del clima local.<br><br>'+
                'Es un área de alto valor científico y se ha utilizado para monitoreo ambiental y estudios ecológicos desde hace décadas.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion07Junio03 = document.getElementById('Question_07Junio03');
    if(informacion07Junio03){
        informacion07Junio03.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica',
                html:
                "Actúa como corredor biológico que conecta zonas naturales del norte con el centro del país.<br><br>"+
                "Zona crítica para la captación de agua, recarga de acuíferos y control de erosión.<br><br>"+
                "Conserva hábitats representativos del desierto chihuahuense y matorrales del altiplano",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion07Junio04 = document.getElementById('Question_07Junio04');
    if(informacion07Junio04){
        informacion07Junio04.addEventListener("click", () => {
            Swal.fire({
                title: 'Descripción general',
                html:
                "El nombre “El Jabalí” hace referencia a los antiguos avistamientos del pecarí de collar en la región. Aunque su presencia ha disminuido, el área aún conserva condiciones óptimas para su recuperación.<br><br>"+
                "La Sierra El Jabalí forma parte del Eje Neovolcánico y está situada cerca del Volcán de Colima, uno de los volcanes más activos de México.<br><br>"+
                "Su relieve montañoso, su cercanía al Pacífico y su elevación le otorgan una gran diversidad de climas y ecosistemas, desde selva baja hasta bosques templados.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion07Junio05 = document.getElementById('Question_07Junio05');
    if(informacion07Junio05){
        informacion07Junio05.addEventListener("click", () => {
            Swal.fire({
                title: 'Descripción general',
                html:
                'Es uno de los paisajes naturales más representativos del país<br><br>'+
                'El Arco de Cabo San Lucas, ubicado dentro del APFF, es conocido como “el fin de la tierra”, ya que es el último punto de tierra firme de América del Norte antes del océano abierto. ¡Es un ícono natural de México reconocido mundialmente!<br><br>'+
                'Su ubicación, donde se unen el Golfo de California y el Océano Pacífico, genera un área de altísima productividad marina y rica biodiversidad.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion08Junio = document.getElementById('Question_08Junio');
    if(informacion08Junio){
        informacion08Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html:
                'Los océanos sostienen la vida en la Tierra, regulan el clima, son fuente de alimentos, empleo y transporte. <br><br>'+
                'Se enfrentan a amenazas graves como: sobrepesca, contaminación por plásticos e hidrocarburos, acidificación y pérdida de ecosistemas clave<br><br>'+
                'Los océanos producen más del 50 % del oxígeno que respiramos, ¡Gracias al fitoplancton marino, los océanos son los “pulmones azules” del planeta!',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion10Junio = document.getElementById('Question_10Junio');
    if(informacion10Junio){
        informacion10Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Paisajes y geología sorprendentes',
                html:
                'El Escudo volcánico de El Pinacate presenta flujos de lava negra y roja, más de 10 enormes cráteres tipo maar, conos cineríticos y formaciones geológicas únicas <br><br>'+
                'El Gran Desierto de Altar, al oeste, contiene dunas activas que alcanzan hasta 200 m de altura, con formas lineales, estrelladas y de cúpula <br><br>'+
                'Masivos graníticos de hasta 650 m emergen como “islas” entre la arena, generando microhábitats diversos<br><br>'+
                'El cráter El Elegante es el más monumental del área: tiene unos 1,500 m de diámetro y entre 200–250 m de profundidad. Fue formado por explosiones que ocurrieron hace decenas de miles de años',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion13Junio = document.getElementById('Question_13Junio');
    if(informacion13Junio){
        informacion13Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Ecosistemas y biodiversidad',
                html:
                "<b>Vegetación terrestre:</b> Bosque de cactus columnares (Pachycereus pringlei) y vegetación desértica muy bien conservada, con unas 24 especies de plantas registradas <br><br>"+
                "<b>Fauna terrestre: </b>Dos reptiles endémicos del desierto de Sonora: la lagartija cola de látigo (Aspidoscelis martyris) y la lagartija de costados manchados (Uta palmeri) <br><br>"+
                "<b>Aves marinas:</b> Es uno de los santuarios aviares más importantes del Golfo de California. Alberga las mayores colonias del mundo de piqueros de patas azules (~110,000 parejas) y piqueros café (~74,000 parejas), además de pelícanos pardos, pardelas y fragatas <br><br>"+
                "<b>Mamíferos marinos:</b> Punta de reproducción para lobos marinos de California con la cuarta colonia más importante del golfo (~2,500 ejemplares)",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion15Junio = document.getElementById('Question_15Junio');
    if(informacion15Junio){
        informacion15Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Ecosistemas y vegetación',
                html:
                "Alberga el único bosque de zapotón acuático (Pachira aquatica) en México: árboles de hasta 20 m sobre suelos pantanosos orgánicos flotantes<br><br>"+
                "Sus manglares almacenan hasta 700 toneladas de carbono por hectárea, contribuyendo a la mitigación del cambio climático<br><br>"+
                "Es hogar del único bosque flotante de zapotón acuático en toda Mesoamérica",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion16Junio = document.getElementById('Question_16Junio');
    if(informacion16Junio){
        informacion16Junio.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué es importante?',
                html:
                "Las tortugas marinas habitan los océanos desde hace más de 100 millones de años, pero hoy 6 de las 7 especies están amenazadas <br><br>"+
                "Cumplen un papel clave en los ecosistemas: regulan poblaciones de medusas, esponjas y pastos marinos, y son bioindicadores de la salud oceánica",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion17Junio = document.getElementById('Question_17Junio');
    if(informacion17Junio){
        informacion17Junio.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué es relevante?',
                html:
                "Cerca del 40 % de la superficie terrestre mundial está degradada, afectando a más de 3 mil millones de personas, especialmente en zonas rurales vulnerables <br><br>"+
                "Cada segundo se degradan tierras equivalentes a cuatro campos de fútbol, lo que suma alrededor de 100 millones de hectáreas anuales <br><br>"+
                "Se estima que si se logra restaurar 1,5 mil millones de hectáreas para 2030, se podrá generar una economía de gran valor ambiental y social",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion18Junio = document.getElementById('Question_18Junio');
    if(informacion18Junio){
        informacion18Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Paisaje y clima',
                html:
                "Constituye un oasis boscosa en medio de un valle semidesértico, rodeado por lomeríos bajos de la Sierra Madre Oriental <br><br>"+
                "Presenta clima semidesértico con veranos templados, escasas lluvias y nevadas ocasionales en invierno", 
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion23Junio = document.getElementById('Question_23Junio');
    if(informacion23Junio){
        informacion23Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad representativa',
                html:
                "Especies animales registradas incluyen:<br><br>"+
                "<li>Iguana verde (Iguana iguana) y negra (Ctenosaura pectinata)</li>"+
                "<li>Reptiles emblemáticos como la boa constrictor y la víbora cantil (Agkistrodon bilineatus)</li>"+
                "<li>Tortuga casquito (Kinosternon integrum), el anfibio amaleón cornudo y el pele-quítate de sangre (Phrynosoma asio)</li><br>"+
                "El área protege huertas tradicionales con especies frutales como tamarindo, mamey, café y higuera que forman parte del paisaje cultural de Comala, y a la vez resguardan biodiversidad local ligada a ecosistemas de bosque tropical y de galería ",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion25Junio = document.getElementById('Question_25Junio');
    if(informacion25Junio){
        informacion25Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia global',
                html:
                'Más del 80 % del comercio mundial se transporta por mar.<br><br>'+
                'Existen más de 2 millones de personas consideradas "gente de mar" que trabajan en alta mar durante semanas o meses seguidos.<br><br>'+
                'Sin ellos, no habría transporte de alimentos, medicinas, combustibles, tecnología, etc.<br><br>'+
                'Durante la pandemia de COVID-19, muchos marinos pasaron más de 6 meses sin poder desembarcar debido a restricciones sanitarias, generando una crisis silenciosa reconocida por la ONU.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion26Junio = document.getElementById('Question_26Junio');
    if(informacion26Junio){
        informacion26Junio.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué es importante?',
                html:
                "Los bosques tropicales representan aproximadamente el 45 % de los bosques del planeta, y son esenciales para la biodiversidad, el clima global y los medios de subsistencia de millones de personas.<br><br>"+
                "En 2019 se perdieron cerca de 11.9 millones de hectáreas de bosque tropical, con un tercio de esa pérdida en bosques primarios",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion28Junio = document.getElementById('Question_28Junio');
    if(informacion28Junio){
        informacion28Junio.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué es importante?',
                html:
                "Los árboles absorben CO₂ y liberan oxígeno, ayudando a mitigar el cambio climático<br><br>"+ 
                "Un árbol maduro puede producir suficiente oxígeno al día para que respiren 2 a 10 personas.<br><br>"+
                "Cada año se pierden más de 10 millones de hectáreas de bosques en el mundo, el equivalente a una cancha de fútbol cada 6 segundos.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion29Junio = document.getElementById('Question_29Junio');
    if(informacion29Junio){
        informacion29Junio.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia de los Trópicos',
                html: 
                "Esta franja ecuatorial cubre el 40 % de la superficie terrestre y alberga cerca del 80 % de la biodiversidad global <br><br>"+ 
                "En su interior se concentran grandes reservas de agua dulce (≈ 54 %) y ecosistemas vitales como selvas tropicales, manglares, sabanas y arrecifes",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    /*------------ JULIO ------------*/

    const informacion01Julio = document.getElementById('Question_01Julio');
    if(informacion01Julio){
        informacion01Julio.addEventListener("click", () => {
            Swal.fire({
                title: ' Enfoque ambiental ',
                html:
                "En 1959, en México, se estableció la Fiesta del Bosque como una celebración ambiental que se extendía durante todo el mes de julio, no solo un día.<br><br>"+ 
                "Surge en un periodo en el que México comenzaba a reconocer los efectos de la deforestación, la tala inmoderada y el deterioro de cuencas hidrológicas.<br><br>"+ 
                "Forma parte de los primeros esfuerzos institucionales de educación ambiental en el país, previos a la creación de muchas políticas ambientales modernas.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion03Julio = document.getElementById('Question_03Julio');
    if(informacion03Julio){
        informacion03Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'Impactante',
                html:
                "Una bolsa de plástico se usa en promedio solo unos minutos, pero puede tardar más de 100 años en degradarse. Durante ese tiempo contamina suelos, ríos y océanos, y pone en riesgo a miles de especies.<br><br>"+ 
                "Recuerda decir no al plástico de un solo uso y sí a alternativas reutilizables.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion06Julio = document.getElementById('Question_06Julio');
    if(informacion06Julio){
        informacion06Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'Más de un siglo protegiendo la riqueza natural de México',
                html:
                "Es importante destacar que su origen histórico se remonta a 1898, cuando fue declarado Monte Vedado del Mineral del Chico, lo que lo convierte en uno de los primeros espacios naturales protegidos de México.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion07Julio = document.getElementById('Question_07Julio');
    if(informacion07Julio){
        informacion07Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'El suelo: la base invisible que sostiene la vida',
                html: 
                "La formación de solo un centímetro de suelo fértil puede tardar cientos de años.<br><br>"+
                "Sin embargo, puede perderse en muy poco tiempo por malas prácticas.<br><br>"+
                "Los suelos saludables retienen agua, reducen inundaciones y recargan acuíferos.<br><br>"+
                "La erosión provoca pérdida de fertilidad y arrastre de contaminantes hacia ríos y lagos.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion07Julio02 = document.getElementById('Question_07Julio02');
    if(informacion07Julio02){
        informacion07Julio02.addEventListener("click", () => {
            Swal.fire({
                title: 'Entre campanas y memoria: Historia viva en Querétaro',
                html:
                "Es uno de los sitios históricos más emblemáticos de la ciudad de Querétaro, por haber sido el lugar en que fue fusilado el emperador Maximiliano de Habsburgo y los generales Miguel Miramón y Tomás Mejía.<br><br>"+ 
                "Alberga actualmente el Museo Cerro de las Campanas, la Capilla de Maximiliano y el monumento a Benito Juárez. Su nombre se deriva de unas piedras en el cerro que al golpearlas recuerdan el tañer de las campanas.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion09Julio = document.getElementById('Question_09Julio');
    if(informacion09Julio){
        informacion09Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'Reserva natural: Protección de tortugas y riqueza biológica',
                html:
                "Se protege sitios de desove de dos especies de tortugas marinas: la golfina y la laúd; existe un criadero de cocodrilos. Es una bella reserva natural que alberga una gran variedad de flora y fauna; forma parte del complejo lagunar La Pastoría – Chacahua - Las Salinas.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion09Julio02 = document.getElementById('Question_09Julio02');
    if(informacion09Julio02){
        informacion09Julio02.addEventListener("click", () => {
            Swal.fire({
                title: '  ',
                html:
                "Cuidar los árboles es cuidar la vida, el agua y el futuro.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion10Julio = document.getElementById('Question_10Julio');
    if(informacion10Julio){
        informacion10Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'Cerro Mohinora: Altitud, frío y paisaje único',
                html:
                "El Cerro Mohinora es el punto más alto del estado de Chihuahua, con aproximadamente 3,300 metros sobre el nivel del mar.<br><br>"+ 
                "Debido a su altitud, presenta condiciones climáticas extremas, con presencia ocasional de nieve en invierno, algo poco común en la región.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion11Julio = document.getElementById('Question_11Julio');
    if(informacion11Julio){
        informacion11Julio.addEventListener("click", () => {
            Swal.fire({
                title: '  ',
                html:
                "Proteger los bosques también significa reconocer a quienes los defienden con valentía, conocimiento y compromiso.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion16Julio = document.getElementById('Question_16Julio');
    if(informacion16Julio){
        informacion16Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'Playas santuario',
                html:
                "Mediante decreto federal, México declaró diversas playas del país como Santuarios para la Protección de la Tortuga Marina, con el objetivo de proteger los principales sitios de anidación de estas especies, muchas de ellas en peligro de extinción.<br><br>"+ 
                "Esta acción consolidó a México como líder internacional en la conservación de tortugas marinas.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion17Julio = document.getElementById('Question_17Julio');
    if(informacion17Julio){
        informacion17Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'El escudo natural de Acapulco',
                html:
                "El Parque Nacional El Veladero, decretado en 1980, funciona como el escudo natural de Acapulco: sus montañas y selvas ayudan a prevenir deslaves e inundaciones, además de captar agua y regular el clima de la ciudad, protegiendo tanto a la naturaleza como a miles de habitantes.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion19Julio = document.getElementById('Question_19Julio');
    if(informacion19Julio){
        informacion19Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'Conservación marina desde 1996',
                html: 
                'El Parque Nacional Bahía de Loreto, decretado en 1996, forma parte del Golfo de California conocido como el “Acuario del Mundo”, y es hogar de ballenas, delfines, tortugas marinas y más de 800 especies marinas, lo que lo convierte en una de las zonas más biodiversas de México.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion19Julio02 = document.getElementById('Question_19Julio02');
    if(informacion19Julio02){
        informacion19Julio02.addEventListener("click", () => {
            Swal.fire({
                title: 'El gigante arrecifal del Caribe',
                html:
                'Banco Chinchorro es uno de los arrecifes mexicano con mayor número de especies de coral, es considerado el atolón más grande de México: mide 46 kilómetros de largo y 28 de ancho.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion19Julio03 = document.getElementById('Question_19Julio03');
    if(informacion19Julio03){
        informacion19Julio03.addEventListener("click", () => {
            Swal.fire({
                title: 'Contrastes que generan vida',
                html: 
                'El Área de Protección de Flora y Fauna Sierra de Álamos–Río Cuchujaqui, en Sonora, es uno de los pocos lugares del norte de México donde conviven ecosistemas desérticos y selvas tropicales, lo que la convierte en una de las regiones con mayor biodiversidad del país.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion19Julio04 = document.getElementById('Question_19Julio04');
    if(informacion19Julio04){
        informacion19Julio04.addEventListener("click", () => {
            Swal.fire({
                title: 'Barrera natural contra el cambio climático',
                html:
                'Protege una parte del Sistema Arrecifal Mesoamericano, el segundo arrecife más grande del mundo, y es hogar de corales, tortugas marinas, peces tropicales y pastos marinos que ayudan a mantener el mar limpio y las costas protegidas',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion19Julio05 = document.getElementById('Question_19Julio05');
    if(informacion19Julio05){
        informacion19Julio05.addEventListener("click", () => {
            Swal.fire({
                title: 'Colores, vida y arrecifes',
                html: 
                'Es uno de los tres arrecifes más hermosos del mundo, se le conoce también como “El Gran Cinturón de Arrecifes del Atlántico Occidental” o “Gran Arrecife Maya”. Es un lugar donde se pueden observar especies como: delfines, tortugas como la carey, blanca o verde, la famosa caguama, manatís, peces de todos los colores, esponjas, estrellas de mar, erizos negros y diferentes tipos de corales, además está rodeado de espectaculares playas.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion20Julio = document.getElementById('Question_20Julio');
    if(informacion20Julio){
        informacion20Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'Donde la grandeza maya y la selva se encuentran',
                html:
                "Protege uno de los sitios arqueológicos mayas más importantes del mundo, donde arquitectura y naturaleza conviven en un mismo espacio.<br><br>" +
                "Es hogar de jaguares, monos aulladores, monos araña, tucanes y guacamayas, especies emblemáticas de la selva mexicana.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion21Julio = document.getElementById('Question_21Julio');
    if(informacion21Julio){
        informacion21Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'Huella de un antiguo volcán',
                html:
                "El Cimatario se ubica en lo que alguna vez, hace cerca de 5 millones de años, existió un volcán, el cual ha permanecido inactivo y no muestra signos de actividad.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion24Julio = document.getElementById('Question_24Julio');
    if(informacion24Julio){
        informacion24Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'Ruta vital para aves migratorias',
                html:
                "Forma parte de un corredor biológico que permite la migración de especies de aves y reptiles , por ejemplo, las águilas pescadoras, patos migratorios de distintas especies, pelícanos blancos, espátulas rosadas y cigüeñas.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion26Julio = document.getElementById('Question_26Julio');
    if(informacion26Julio){
        informacion26Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'La importancia de los manglares',
                html:
                "Los manglares son uno de los ecosistemas más productivos del planeta, fundamentales para la vida marina y costera.<br><br>" +
                "Capturan y almacenan grandes cantidades de carbono azul, ayudando a mitigar el cambio climático.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion31Julio = document.getElementById('Question_31Julio');
    if(informacion31Julio){
        informacion31Julio.addEventListener("click", () => {
            Swal.fire({
                title: 'Protección diaria para la vida silvestre',
                html:
                "Las y los guardaparques son quienes cuidan día a día las Áreas Naturales Protegidas, protegiendo la biodiversidad, previniendo incendios y defendiendo los ecosistemas que nos brindan agua, aire limpio y equilibrio ambiental. Su labor es clave para conservar la naturaleza para las futuras generaciones.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }
    /*--------------- AGOSTO ------------*/

    const informacion01Agosto = document.getElementById('Question_01Agosto');
    if(informacion01Agosto){
        informacion01Agosto.addEventListener("click", () => {
            Swal.fire({
                title: 'Geografía y ecosistemas',
                html:
                "Se ubica en la Cordillera Neovolcánica Transversal, una cadena montañosa de gran importancia ecológica en el centro de México.<br><br>" +
                "El parque tiene dos lagunas de origen pluvial conocidas como Laguna Verde y Laguna Seca, que sirven de hábitat para aves acuáticas migratorias.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion06Agosto = document.getElementById('Question_06Agosto');
    if(informacion06Agosto){
        informacion06Agosto.addEventListener("click", () => {
            Swal.fire({
                title: 'Humedal más extenso de Mesoamérica:',
                html:
                "Es considerado uno de los humedales más grandes de Norteamérica y uno de los 15 humedales más importantes del mundo por su extensión, biodiversidad y funciones ecológicas.<br><br>" +
                "Desde 1995 está inscrita en la Convención de Ramsar como humedal de importancia internacional",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion19Agosto = document.getElementById('Question_19Agosto');
    if(informacion19Agosto){
        informacion19Agosto.addEventListener("click", () => {
            Swal.fire({
                title: 'El guardián volcánico de Michoacán',
                html: 'El área protege el Pico de Tancítaro, el punto más alto de Michoacán con aproximadamente 3,840 m.s.n.m., formando parte de la cadena volcánica del Occidente de México.',
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion21Agosto = document.getElementById('Question_21Agosto');
    if(informacion21Agosto){
        informacion21Agosto.addEventListener("click", () => {
            Swal.fire({
                title: 'Conexión ecológica:',
                html:
                "Funciona como puente ecológico entre la selva chiapaneca y los bosques tropicales de Guatemala y áreas protegidas cercanas como las reservas de biosfera Montes Azules y Lacan-Tún, integrándose al gran complejo selvático conocido como El Gran Petén.",                
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion23Agosto = document.getElementById('Question_23Agosto');
    if(informacion23Agosto){
        informacion23Agosto.addEventListener("click", () => {
            Swal.fire({
                title: 'Tres especies, un legado prehistórico',
                html:
                "Los cocodrilos son reptiles que han existido más de 200 millones de años, sobreviviendo a grandes cambios ambientales. Su presencia indica ecosistemas sanos y equilibrados.<br><br>" +
                "En México habitan 3 de las 23 especies de cocodrilos del mundo:<br><br>" +
                "<li>Cocodrilo de río o cocodrilo americano (Crocodylus acutus)</li>" +
                "<li>Cocodrilo de pantano (Crocodylus moreletii)</li>" +
                "<li>Caimán (Caiman crocodilus)</li>",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion24Agosto = document.getElementById('Question_24Agosto');
    if(informacion24Agosto){
        informacion24Agosto.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html:
                "Se han registrado:<br><br>" +
                "<li>Más de 2,000 especies de flora y fauna marina y costera.</li>" +
                "<li>Alrededor de 100 especies de coral.</li>" +
                "<li>Más de 400 especies de peces.</li><br>" +
                "Entre las especies destacadas:<br><br>" +
                "<li>Tortugas marinas</li>" +
                "<li>Tiburones y rayas</li>" +
                "<li>Peces loro, ángeles y meros</li>" +
                "<li>Corales cerebro y cuerno de alce</li><br>" +
                "Muchas están protegidas por la NOM-059 por estar en riesgo.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion24Agosto02 = document.getElementById('Question_24Agosto02');
    if(informacion24Agosto02){
        informacion24Agosto02.addEventListener("click", () => {
            Swal.fire({
                title: 'Donde renacía el fuego del mundo',
                html: "El Cerro de la Estrella era conocido en época prehispánica como Huizachtépetl, que significa “Cerro del Huizache”.<br><br>" +
                "En este cerro se realizaba la ceremonia del Fuego Nuevo, un ritual mexica que ocurría cada 52 años para marcar el inicio de un nuevo ciclo del tiempo.<br><br>" +
                "Se apagaban todos los fuegos del imperio.<br><br>" +
                "Se encendía uno nuevo en la cima del cerro y desde ahí se distribuía a los pueblos.<br><br>" +
                "Este ritual simbolizaba la renovación del mundo.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion25Agosto = document.getElementById('Question_25Agosto');
    if(informacion25Agosto){
        informacion25Agosto.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué se llama “El Sabinal”?',
                html:
                "El nombre proviene de los sabinos o ahuehuetes (Taxodium mucronatum):<br><br>" +
                "Son árboles longevos, considerados símbolos de fuerza y resiliencia en México.<br><br>" +
                "Los sabinos en esta área pueden tener edades centenarias y son protagonistas del paisaje.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion29Agosto = document.getElementById('Question_29Agosto');
    if(informacion29Agosto){
        informacion29Agosto.addEventListener("click", () => {
            Swal.fire({
                title: 'Refugio de Vida y Memoria Nacional',
                html:
                "Este Parque Nacional, fue nombrado en honor a los hermanos López Rayón, héroes insurgentes de la independencia de México. Se ubica en el municipio de Tlalpujahua, Michoacán. Protege a cerca de 98 especies de aves silvestres. ",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

    const informacion29Agosto02 = document.getElementById('Question_29Agosto02');
    if(informacion29Agosto02){
        informacion29Agosto02.addEventListener("click", () => {
            Swal.fire({
                title: 'Entre Encinos y Volcanes Eternos',
                html:
                "Área Natural Protegida de gran valor histórico, cultural y paisajístico.<br><br>" +
                "Protege un bosque templado con especies como encino, fresno, cedro y eucalipto.<br><br>" +
                "Forma parte del paisaje del Valle de Amecameca, con vistas al Popocatépetl e Iztaccíhuatl.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }
    
    const informacion30Agosto = document.getElementById('Question_30Agosto');
    if(informacion30Agosto){
        informacion30Agosto.addEventListener("click", () => {
            Swal.fire({
                title: 'Gigante de Puntos y Misterio',
                html: 
                "El tiburón ballena es el pez vivo más grande del mundo. Puede medir hasta 18 – 20 m de largo y pesar más de 20 toneladas.<br><br>" +
                "Cada tiburón ballena tiene un patrón de puntos y rayas único, parecido a una huella digital, lo que permite identificar individuos en estudios científicos.",
                confirmButtonText: 'Cerrar',
                customClass: { 
                    title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion01Septiembre = document.getElementById('Question_01Septiembre');
    if(informacion01Septiembre){
        informacion01Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Paisaje y geología',
                html: 
                'Destaca por grandes formaciones rocosas volcánicas erosionadas (bloques y pilas de rocas con formas caprichosas), mesetas y cerros modestos que forman la Sierra de Majalca. Es un paisaje muy característico, casi “extraterrestre” para muchos visitantes.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion05Septiembre = document.getElementById('Question_05Septiembre');
    if(informacion05Septiembre){
        informacion05Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Paisaje',
                html: 
                'Alberga tanto al imponente Volcán de Fuego, como al majestuoso Nevado de Colima. '+
                'Ambos se ubican en la frontera entre los Estados de Jalisco y Colima. El Volcán de Fuego es actualmente el volcán más activo de México.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion05Septiembre02 = document.getElementById('Question_05Septiembre02');
    if(informacion05Septiembre02){
        informacion05Septiembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Fauna representativa',
                html: 
                'El parque es hogar de diversas especies silvestres típicas de bosques templados, entre ellas:<br><br>'+
                '<b>Mamíferos:</b> venado cola blanca, coyote, cacomixtle o cacomisel, armadillo, zorro gris, entre otros.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion06Septiembre = document.getElementById('Question_06Septiembre');
    if(informacion06Septiembre){
        informacion06Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Playero rojizo',
                html: 
                "<li>Uno de los migrantes más impresionantes del planeta.</li><br>"+
                "<li>Viaja desde el Ártico hasta Sudamérica.</li><br>"+
                "<li>Puede recorrer más de 15,000 km en una migración.</li><br>"+
                "<li>Depende muchísimo de sitios de descanso en México.</li>",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion07Septiembre = document.getElementById('Question_07Septiembre');
    if(informacion07Septiembre){
        informacion07Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: '¿De qué se alimentan?',
                html: 
                "Los manatíes son herbívoros:<br><br>"+
                "<li>Pastos marinos</li>"+
                "<li>Plantas acuáticas</li>"+
                "<li>Vegetación de manglar</li><br>"+
                "Un manatí adulto puede comer hasta:<br>"+
                "10% de su peso corporal al día",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion08Septiembre = document.getElementById('Question_08Septiembre');
    if(informacion08Septiembre){
        informacion08Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html: 
                '<b>Alta diversidad:</b> registros de más de 880 especies de plantas y animales; varias especies están en alguna categoría de riesgo según la NOM-059. Se registran especies exóticas también.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion08Septiembre02 = document.getElementById('Question_08Septiembre02');
    if(informacion08Septiembre02){
        informacion08Septiembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html: 
                "La Sierra de Huautla conserva una de las extensiones más representativas de selva baja caducifolia en el centro de México, un tipo de vegetación declarada prioritaria para conservación.<br><br>"+
                "La reserva es valorada tanto por su riqueza biológica como por los conocimientos tradicionales de las comunidades locales sobre el manejo de recursos naturales.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion09Septiembre = document.getElementById('Question_09Septiembre');
    if(informacion09Septiembre){
        informacion09Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Riqueza hídrica',
                html: 
                'Destaca por sus impresionantes cascadas; sus aguas son aprovechadas en presas hidroeléctricas que proporcionan el alumbrado de la Ciudad de México y otras grandes poblaciones, así como la energía para diversas industrias en la región.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion15Septiembre = document.getElementById('Question_15Septiembre');
    if(informacion15Septiembre){
        informacion15Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Proteccón',
                html: 
                "Su objetivo histórico fue conservar permanentemente la fauna, flora y recursos naturales de los terrenos conocidos como Cañada Grande.<br><br>"+
                "La superficie protegida es de aproximadamente 2,000 hectáreas (20 km²).",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }
    
            const informacion17Septiembre = document.getElementById('Question_17Septiembre');
    if(informacion17Septiembre){
        informacion17Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: '¿Qué es y por qué existe?',
                html: 
                "Este día es una iniciativa global de acción ambiental para enfrentar la contaminación marina causada por desechos sólidos que llegan a playas, riberas y cuerpos de agua.<br><br>"+
                "La jornada busca sensibilizar y movilizar a personas, comunidades, ONG y gobiernos sobre el impacto del plástico y otros residuos en los ecosistemas marinos, y alentar conductas sostenibles.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }
    
            const informacion18Septiembre = document.getElementById('Question_18Septiembre');
    if(informacion18Septiembre){
        informacion18Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia arqueológica y cultural',
                html: 
                "El valle de Tehuacán-Cuicatlán ha sido clave para entender la historia de la agricultura en Mesoamérica.<br><br>"+
                "Se han hallado vestigios de domesticación de plantas como maíz, frijol y calabaza, y sistemas antiguos de irrigación, lo que le da un valor histórico extraordinario.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }
    
            const informacion18Septiembre02 = document.getElementById('Question_18Septiembre02');
    if(informacion18Septiembre02){
        informacion18Septiembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Dato curioso',
                html: 
                'A pesar de ser un parque histórico y natural establecido desde 1936, muchas personas solo lo conocen como La Marquesa por su tradicional uso recreativo.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion22Septiembre = document.getElementById('Question_22Septiembre');
    if(informacion22Septiembre){
        informacion22Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html: 
                'Es un impresionante cañón con paredes de cerca de 100 metros de altura, y a lo largo corre el río Mixteco, conocido en la zona como Río Salado. Aquí se podrán encontrar especies como la biznaga de Tonalá, el palo santo, el tigrillo, la serpiente mazacuata, el leoncillo y la iguana negra, así como el venado cola blanca.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion22Septiembre02 = document.getElementById('Question_22Septiembre02');
    if(informacion22Septiembre02){
        informacion22Septiembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Ubicación y extensión',
                html: 
                "Cubre una superficie de aproximadamente 46,128 hectáreas (461.28 km²) de selvas y riberas ligadas al río Usumacinta.<br><br>"+
                "El área colinda al sur con los límites de Guatemala y con zonas de selva tropical de Chiapas, formando un importante corredor biológico binacional.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion22Septiembre03 = document.getElementById('Question_22Septiembre03');
    if(informacion22Septiembre03){
        informacion22Septiembre03.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia Ambiental',
                html: 
                "El parque tiene una superficie de aproximadamente 38 010 hectáreas en el municipio de Villa de Reyes, al sur de la ciudad de San Luis Potosí.<br><br>"+
                "El parque alberga más de 420 especies de plantas y animales, con al menos 22 especies bajo alguna categoría de riesgo según la NOM-059.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion23Septiembre = document.getElementById('Question_23Septiembre');
    if(informacion23Septiembre){
        informacion23Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Significado',
                html: 
                "Cumbres del Ajusco es en realidad un volcán extinto de domo de lava, de gran importancia geológica.<br><br>"+
                "El nombre Ajusco proviene del náhuatl axōchco, que significa “floresta de agua” o bosque de aguas, reflejando su papel como zona de captación de agua y regulación hídrica para la región.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion23Septiembre02 = document.getElementById('Question_23Septiembre02');
    if(informacion23Septiembre02){
        informacion23Septiembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Valor Cultural',
                html: 
                'La zona forma parte del territorio tradicional de comunidades indígenas de la Selva Lacandona, como los mayas lacandones, tzeltales y choles, quienes tienen una relación ancestral con estos bosques y lagunas.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion23Septiembre03 = document.getElementById('Question_23Septiembre03');
    if(informacion23Septiembre03){
        informacion23Septiembre03.addEventListener("click", () => {
            Swal.fire({
                title: 'Valor Cultural',
                html: 
                "Colinda ecológicamente con la reserva Metzabok, compartiendo procesos naturales y conectividad biológica.<br><br>"+
                "En el área vive la comunidad indígena lacandona, parte de los pueblos mayas Lacandones, quienes mantienen formas de vida tradicionales estrechamente ligadas a la selva.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion25Septiembre = document.getElementById('Question_25Septiembre');
    if(informacion25Septiembre){
        informacion25Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Extensión',
                html: 
                "La superficie total protegida es de aproximadamente 37,829 ha, incluyendo territorios terrestres y marinos.<br><br>"+
                "Resguarda zonas costeras, marinas y terrestres que no cuentan con asentamientos humanos en su interior, lo que favorece la conservación de procesos naturales.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion26Septiembre = document.getElementById('Question_26Septiembre');
    if(informacion26Septiembre){
        informacion26Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: '¿Qué es y cuándo se creó?',
                html: 
                "El Parque Nacional “El Histórico Coyoacán” fue declarado Parque Nacional el 26 de septiembre de 1938 por el presidente Lázaro Cárdenas del Río, incluyendo el Vivero de Coyoacán y el poblado de Coyoacán como parte del área protegida.<br><br>"+
                "Esta designación lo convirtió en uno de los primeros parques nacionales urbanizados en México, con un enfoque tanto en conservación como en recreación pública.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion27Septiembre = document.getElementById('Question_27Septiembre');
    if(informacion27Septiembre){
        informacion27Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué se estableció?',
                html: 
                "Se instituyó en memoria de las víctimas del derrame de residuos tóxicos ocurrido el 27 de septiembre de 1993 en Avellaneda, provincia de Buenos Aires, Argentina, donde murieron varias personas por la inhalación de gases tóxicos liberados ilegalmente por una empresa.<br><br>"+
                "Este hecho marcó un precedente en América Latina sobre la importancia de la regulación ambiental y la responsabilidad industrial.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion28Septiembre = document.getElementById('Question_28Septiembre');
    if(informacion28Septiembre){
        informacion28Septiembre.addEventListener("click", () => {
            Swal.fire({
                title: '¿Por qué es importante?',
                html: 
                "Aproximadamente más del 80 % del comercio mundial se transporta por vía marítima.<br><br>"+
                "Sin el transporte marítimo, el comercio internacional de alimentos, energía, materias primas y productos manufacturados sería inviable.<br><br>"+
                "Los océanos son clave para la regulación climática global y la biodiversidad.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

            const informacion28Septiembre02 = document.getElementById('Question_28Septiembre02');
    if(informacion28Septiembre02){
        informacion28Septiembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Ecosistema y características',
                html: 
                "<b>Superficie aproximada:</b> 23 hectáreas.<br><br>"+
                "<b>Vegetación dominante:</b> Ahuehuetes, Fresnos, Eucaliptos<br><br>"+
                "Funciona como regulador microclimático y refugio para fauna urbana.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }
        
        const informacion01Octubre = document.getElementById('Question_01Octubre');
    if(informacion01Octubre){
        informacion01Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Paisaje',
                html: 
                'Dentro del cráter del Nevado de Toluca existen dos cuerpos de agua conocidos localmente como lagunas del Sol y de la Luna que se forman por la acumulación del agua de lluvia o de deshielo, y presentan una temperatura que oscila entre 2 y 7 °C',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

            const informacion02Octubre = document.getElementById('Question_02Octubre');
    if(informacion02Octubre){
        informacion02Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Objetivo',
                html: 
                "Se celebra el primer lunes de octubre y fue establecido por ONU-Hábitat en 1985.<br><br>"+
                "Busca reflexionar sobre el derecho de todas las personas a una vivienda digna y ciudades sostenibles.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion04Octubre = document.getElementById('Question_04Octubre');
    if(informacion04Octubre){
        informacion04Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Objetivo',
                html: 
                "Busca fomentar el respeto, bienestar y protección de todos los animales, domésticos y silvestres.<br><br>"+
                "También se utiliza para crear conciencia sobre especies en peligro de extinción y tráfico ilegal de fauna.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion06Octubre = document.getElementById('Question_06Octubre');
    if(informacion06Octubre){
        informacion06Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Valor Cultural',
                html: 
                'Protege el volcán La Malinche (Matlacuéyatl), con una altitud aproximada de 4,461 metros sobre el nivel del mar.<br><br>'+
                'El nombre indígena Matlacuéyatl significa “mujer con falda azul”.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion07Octubre = document.getElementById('Question_07Octubre');
    if(informacion07Octubre){
        informacion07Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Objetivo',
                html: 
                "Se celebra el primer sábado de octubre desde 1993.<br><br>"+
                "Busca generar conciencia sobre la importancia del agua para la vida, la salud y el desarrollo sostenible.<br><br>"+
                "Promueve el uso responsable del agua, la protección de cuencas y la educación hídrica.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion10Octubre = document.getElementById('Question_10Octubre');
    if(informacion10Octubre){
        informacion10Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                "México es uno de los países con mayor diversidad de cactáceas en el mundo, con más de 600 especies registradas.<br><br>"+
                "Muchas especies son endémicas.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion10Octubre02 = document.getElementById('Question_10Octubre02');
    if(informacion10Octubre02){
        informacion10Octubre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Valor Cultural',
                html: 
                'Este lugar fue llamado desierto por ser un lugar de retiro, ya que alberga las instalaciones del Convento del Carmen, construido por la orden de los Carmelitas Descalzos en el siglo XVIII.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion13Octubre = document.getElementById('Question_13Octubre');
    if(informacion13Octubre){
        informacion13Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Objetivo',
                html: 
                "Busca fomentar la prevención, preparación y resiliencia frente a desastres como terremotos, huracanes, inundaciones o incendios.<br><br>"+
                "Promueve la gestión integral de riesgos, la educación comunitaria y el desarrollo de ciudades más seguras.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion15Octubre = document.getElementById('Question_15Octubre');
    if(informacion15Octubre){
        informacion15Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Objetivo',
                html: 
                'Promueve el desarrollo de leyes y políticas de protección animal en distintos países.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion18Octubre = document.getElementById('Question_18Octubre');
    if(informacion18Octubre){
        informacion18Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                "Se asocia con el legado del naturalista y explorador Alexander von Humboldt, quien contribuyó al estudio científico de la naturaleza.<br><br>"+
                "Este día invita a reflexionar sobre la relación entre sociedad y medio ambiente y la importancia del uso responsable de los recursos.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion20Octubre = document.getElementById('Question_20Octubre');
    if(informacion20Octubre){
        informacion20Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html: 
                "Su importancia principal radica en proteger los bosques que regulan el ciclo del agua y abastecen a comunidades de la región.<br><br>"+
                "Alberga ecosistemas de bosque mesófilo de montaña, uno de los más biodiversos y amenazados del país.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion21Octubre = document.getElementById('Question_21Octubre');
    if(informacion21Octubre){
        informacion21Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                'Alberga uno de los cañones más impresionantes de México: el cañón de Boquillas, el cual se ubica sobre el río Bravo justo en la frontera con EUA. Sus elevadas y verticales paredes son impresionantes.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion28Octubre = document.getElementById('Question_28Octubre');
    if(informacion28Octubre){
        informacion28Octubre.addEventListener("click", () => {
            Swal.fire({
                title: 'Objetivo',
                html: 
                "Fue aprobada por la Asamblea General de la ONU en 1982.<br><br>"+
                "Establece que toda forma de vida merece respeto, independientemente de su utilidad para el ser humano.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }   
    
        const informacion01Noviembre = document.getElementById('Question_01Noviembre');
    if(informacion01Noviembre){
        informacion01Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                "Los ecólogos han demostrado que si desaparecen los polinizadores como abejas, mariposas y murciélagos, más del 75% de los cultivos alimentarios del mundo podrían verse afectados, poniendo en riesgo alimentos como frutas, verduras, café y cacao.<br><br>"+
                "Esto significa que especies pequeñas, muchas veces ignoradas, sostienen gran parte de la alimentación humana y del equilibrio natural.<br><br>"+
                "Por eso, el trabajo de los ecólogos es crucial: ellos detectan estos riesgos antes de que los daños sean irreversibles.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion02Noviembre = document.getElementById('Question_02Noviembre');
    if(informacion02Noviembre){
        informacion02Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Significado',
                html: 
                'Este parque resguarda uno de los nacimientos de agua más importantes de Michoacán: el río Río Cupatitzio, cuyo nombre en purépecha significa “río que canta”, debido al sonido constante del agua entre rocas, cascadas y manantiales.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion05Noviembre = document.getElementById('Question_05Noviembre');
    if(informacion05Noviembre){
        informacion05Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Dato interesante',
                html: 
                "Un tsunami no siempre llega en una sola ola: pueden presentarse varias olas consecutivas durante horas, y muchas veces la segunda o tercera ola es más destructiva que la primera.<br><br>"+
                "En algunos eventos extremos, las olas han alcanzado más de 30 metros de altura, capaces de arrastrar edificios, vehículos y modificar completamente la línea costera.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion05Noviembre02 = document.getElementById('Question_05Noviembre02');
    if(informacion05Noviembre02){
        informacion05Noviembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Valor histórico',
                html: 
                "Antes de convertirse en parque nacional en 1937, este lugar fue una hacienda colonial dedicada a la producción de harina y pulque, y todavía conserva ruinas arquitectónicas de molinos, capillas y patios que muestran cómo funcionaba una gran propiedad agrícola de siglos pasados.<br><br>"+
                "Su nombre “Molino de Flores” se relaciona con los antiguos molinos hidráulicos que aprovechaban el agua de manantiales de la zona para mover maquinaria.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion06Noviembre = document.getElementById('Question_06Noviembre');
    if(informacion06Noviembre){
        informacion06Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                "Entre enero y febrero de 1991, al retirarse de Kuwait, fuerzas iraquíes incendiaron alrededor de 600 pozos petroleros, generando una de las mayores catástrofes ambientales causadas por un conflicto armado.<br><br>"+
                "Provocando contaminación del aire, lluvia ácida y graves daños a ecosistemas terrestres y marinos.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion07Noviembre = document.getElementById('Question_07Noviembre');
    if(informacion07Noviembre){
        informacion07Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ',
                html: 
                "Este lugar protege uno de los cañones más impresionantes del norte de México, donde paredes rocosas alcanzan hasta 500 metros de altura, formadas durante millones de años por la erosión del agua.<br><br>"+
                "Además, forma parte de un corredor ecológico binacional junto con áreas protegidas de Estados Unidos, permitiendo el desplazamiento de especies como osos negros, pumas y águilas.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion07Noviembre02 = document.getElementById('Question_07Noviembre02');
    if(informacion07Noviembre02){
        informacion07Noviembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia Ambiental',
                html: 
                "Área de Protección de Flora y Fauna Cuatrociénegas es considerado uno de los ecosistemas más extraordinarios del mundo porque sus pozas contienen microorganismos muy antiguos, similares a formas de vida que existieron hace millones de años en la Tierra primitiva.<br><br>"+
                "Por eso científicos de distintos países lo estudian como un “laboratorio natural”, ya que ayuda a entender cómo pudo surgir la vida en el planeta.<br><br>"+
                "Además, muchas de sus especies de peces, tortugas y plantas solo existen ahí, lo que lo convierte en un sitio único de biodiversidad.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion07Noviembre03 = document.getElementById('Question_07Noviembre03');
    if(informacion07Noviembre03){
        informacion07Noviembre03.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html: 
                "Este lugar es uno de los pocos sitios de México donde el Oso negro americano ha logrado mantenerse de forma natural, gracias a la gran extensión de montañas aisladas y casi intactas.<br><br>"+
                "Lo impactante es que esta zona protege más de 200 mil hectáreas, convirtiéndose en uno de los refugios de vida silvestre más extensos del norte del país.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion08Noviembre = document.getElementById('Question_08Noviembre');
    if(informacion08Noviembre){
        informacion08Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Valor cultural',
                html: 
                "El Volcán Iztaccíhuatl representa a una princesa dormida, mientras que el Volcán Popocatépetl es el guerrero que permanece a su lado vigilándola eternamente con su antorcha encendida.<br><br>"+
                "En sus bosques viven especies como el Zacatuche, uno de los conejos más pequeños y raros del mundo, que solo habita en montañas altas del centro de México.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }

        const informacion10Noviembre = document.getElementById('Question_10Noviembre');
    if(informacion10Noviembre){
        informacion10Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Dato interesante',
                html: 
                "Las Mariposa monarca pesan menos de un gramo, pero aun así realizan una de las migraciones más largas del reino animal: recorren miles de kilómetros guiándose por la posición del sol y su reloj biológico interno.<br><br>"+
                "Lo más sorprendente es que durante el invierno pueden cubrir por completo los árboles, formando capas tan densas que las ramas cambian de color y parecen moverse cuando millones de alas se abren al mismo tiempo.<br><br>"+
                "Un solo bosque puede albergar millones de mariposas concentradas en pocas hectáreas, creando uno de los espectáculos naturales más impresionantes del planeta.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    


        const informacion17Noviembre = document.getElementById('Question_17Noviembre');
    if(informacion17Noviembre){
        informacion17Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Significado',
                html: 
                "El nombre Uaymil proviene del maya y significa “lugar donde abundan las palmas”, y esta área protege ecosistemas costeros esenciales como manglares, selvas y humedales que sirven de refugio para especies en riesgo.<br><br>"+
                "Además, sus playas forman parte de zonas de anidación de tortugas marinas como la Tortuga carey y la Tortuga blanca, que llegan cada año a depositar sus huevos.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion17Noviembre02 = document.getElementById('Question_17Noviembre02');
    if(informacion17Noviembre02){
        informacion17Noviembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ',
                html: 
                "Este parque protege más de 170 mil hectáreas, lo que lo convierte en una de las áreas naturales protegidas más extensas del norte de México.<br><br>"+
                "Lo más impresionante es que de sus montañas nacen ríos y manantiales que abastecen a gran parte de Monterrey, por lo que sin este ecosistema la disponibilidad de agua en la ciudad sería mucho más crítica.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion21Noviembre = document.getElementById('Question_21Noviembre');
    if(informacion21Noviembre){
        informacion21Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Origen',
                html: 
                "Aunque se conoce como “Lagunas de Zempoala”, originalmente el sistema natural estaba formado por varias lagunas de origen volcánico, rodeadas por bosques de pino, oyamel y encino que crean uno de los paisajes más frescos del centro de México.<br><br>"+
                "Su nombre proviene del náhuatl “Tzompanco” o “Zempoala”, relacionado con la idea de “muchas aguas” o “veinte lagunas”.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion23Noviembre = document.getElementById('Question_23Noviembre');
    if(informacion23Noviembre){
        informacion23Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html: 
                "Resguarda una de las últimas grandes extensiones de selva tropical húmeda del Golfo de México, en una región donde también existen volcanes, lagunas y manglares.<br><br>"+
                "Lo sorprendente es que ahí habitan especies emblemáticas como el Mono aullador de manto, cuyo sonido puede escucharse a varios kilómetros dentro de la selva.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion24Noviembre = document.getElementById('Question_24Noviembre');
    if(informacion24Noviembre){
        informacion24Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                "Uno de los periodos más importantes para la creación de parques nacionales en México ocurrió durante el gobierno de Lázaro Cárdenas, quien decretó decenas de parques nacionales en pocos años, convirtiendo al país en pionero en conservación ambiental en América Latina.<br><br>"+
                "Gracias a esa visión, hoy existen áreas protegidas históricas como volcanes, bosques y lagunas que siguen abasteciendo agua y conservando biodiversidad.", 
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion27Noviembre = document.getElementById('Question_27Noviembre');
    if(informacion27Noviembre){
        informacion27Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                "Conservar un ecosistema no significa solo proteger plantas y animales: también implica mantener servicios naturales esenciales como la producción de oxígeno, la captura de carbono, la filtración de agua y la fertilidad del suelo.<br><br>"+
                "Se estima que los ecosistemas sanos ayudan a reducir el impacto de fenómenos extremos como inundaciones, sequías y olas de calor.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }    

        const informacion27Noviembre02 = document.getElementById('Question_27Noviembre02');
    if(informacion27Noviembre02){
        informacion27Noviembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                "Fue el primer parque nacional decretado en México, en 1917, y su protección tuvo como objetivo principal conservar los bosques que abastecían de agua a la entonces creciente Ciudad de México.<br><br>"+
                "Además, dentro del parque se encuentra un antiguo convento carmelita del siglo XVII, lo que lo convierte en un sitio donde se unen naturaleza, historia y arquitectura.<br><br>"+
                "Aunque se llama “desierto”, en realidad nunca fue un desierto: el término hacía referencia a un lugar aislado usado para retiro espiritual.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }   

        const informacion27Noviembre03 = document.getElementById('Question_27Noviembre03');
    if(informacion27Noviembre03){
        informacion27Noviembre03.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html: 
                "Las Ciénegas de Lerma son uno de los últimos vestigios del gran sistema de humedales que antiguamente cubría extensas zonas del centro de México y que estaba conectado con antiguos cuerpos de agua del altiplano.<br><br>"+
                "Lo sorprendente es que, a pesar de la transformación urbana y agrícola de la región, este sitio sigue siendo refugio temporal para numerosas aves migratorias que recorren miles de kilómetros cada año.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }   

        const informacion27Noviembre04 = document.getElementById('Question_27Noviembre04');
    if(informacion27Noviembre04){
        informacion27Noviembre04.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                "En esta área protegida coinciden especies propias de bosques templados y de selvas tropicales, algo poco común en un mismo territorio, lo que genera una biodiversidad especialmente rica.<br><br>"+
                "Además, sus zonas altas capturan humedad de las nubes, ayudando a mantener manantiales y pequeños ríos incluso en temporadas secas.<br><br>"+
                "Por esa mezcla de altitud, clima y vegetación, La Frailescana funciona como un puente ecológico natural entre distintas regiones biológicas del sur de México.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }   

        const informacion30Noviembre = document.getElementById('Question_30Noviembre');
    if(informacion30Noviembre){
        informacion30Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html: 
                "Esta reserva se ubica en una de las regiones más cálidas del occidente de México, donde en temporada seca las temperaturas pueden ser extremas, pero aun así alberga una biodiversidad sorprendente adaptada a condiciones severas.<br><br>"+
                "Muchas especies sobreviven gracias a estrategias como actividad nocturna, almacenamiento de agua o pérdida temporal de hojas.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }   

        const informacionJueves_Noviembre = document.getElementById('Question_Jueves_Noviembre');
    if(informacionJueves_Noviembre){
        informacionJueves_Noviembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Dato interesante',
                html: 
                "Aunque no siempre se vea, el aire puede transportar partículas microscópicas capaces de recorrer grandes distancias, incluso de un continente a otro.<br><br>"+
                "Por eso, la calidad del aire no depende solo de una ciudad o país: incendios forestales, polvo del desierto o emisiones industriales pueden influir en regiones lejanas.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }   

        const informacion03Diciembre = document.getElementById('Question_03Diciembre');
    if(informacion03Diciembre){
        informacion03Diciembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia Ambiental',
                html: 
                'La fecha surge en memoria de la tragedia de Bhopal, ocurrida en Desastre de Bhopal, considerada uno de los peores accidentes industriales del mundo: una fuga de gas tóxico en una planta de pesticidas causó miles de muertes inmediatas y afectó a más de 500 mil personas.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }     

        const informacion05Diciembre = document.getElementById('Question_05Diciembre');
    if(informacion05Diciembre){
        informacion05Diciembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Objetivo',
                html: 
                "El lema de esta fecha busca recordar que sin suelo sano no hay alimentos, agua limpia ni ecosistemas equilibrados.<br><br>"+
                "Se estima que el 95% de los alimentos que consumimos dependen directa o indirectamente del suelo.<br><br>"+
                "Formar apenas 1 centímetro de suelo fértil puede tardar cientos de años, por eso se considera un recurso prácticamente no renovable a escala humana.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }  

        const informacion07Diciembre = document.getElementById('Question_07Diciembre');
    if(informacion07Diciembre){
        informacion07Diciembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html: 
                'En México existen reservas de la biosfera donde conviven arrecifes coralinos, islas con especies únicas, montañas submarinas y bosques que resguardan ecosistemas difíciles de encontrar en otras partes del mundo.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }  

        const informacion08Diciembre = document.getElementById('Question_08Diciembre');
    if(informacion08Diciembre){
        informacion08Diciembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                'En 1980 se fortaleció la conservación ambiental en México con la protección de espacios naturales emblemáticos como el Parque Nacional Cañón del Sumidero, famoso por sus paredes de hasta 1,000 metros de altura.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }  

        const informacion08Diciembre02 = document.getElementById('Question_08Diciembre02');
    if(informacion08Diciembre02){
        informacion08Diciembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia ecológica ',
                html: 
                'La Reserva de la Biosfera Janos resguarda uno de los ecosistemas de pastizal mejor conservados de México, fundamentales para aves migratorias y mamíferos del desierto.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }  

        const informacion11Diciembre = document.getElementById('Question_11Diciembre');
    if(informacion11Diciembre){
        informacion11Diciembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Dato curioso',
                html: 
                'Las montañas cubren cerca del 27% de la superficie terrestre y son fuente de agua dulce para millones de personas en el mundo.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }  

        const informacion11Diciembre02 = document.getElementById('Question_11Diciembre02');
    if(informacion11Diciembre02){
        informacion11Diciembre02.addEventListener("click", () => {
            Swal.fire({
                title: 'Significado',
                html: 
                "Sian Ka'an significa “puerta del cielo” en lengua maya y resguarda selvas, manglares, arrecifes y una enorme diversidad de especies.",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }  

        const informacion11Diciembre03 = document.getElementById('Question_11Diciembre03');
    if(informacion11Diciembre03){
        informacion11Diciembre03.addEventListener("click", () => {
            Swal.fire({
                title: 'Biodiversidad',
                html: 
                "Se considera una de las áreas naturales protegidas más grandes de México, con una enorme extensión de desierto, lagunas costeras y humedales.<br><br>"+
                "Sus dos zonas más importantes son Laguna Ojo de Liebre y Laguna San Ignacio, donde cada invierno llegan miles de ballenas grises después de recorrer aproximadamente 10,000 kilómetros desde Alaska",
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }  

        const informacion16Diciembre = document.getElementById('Question_16Diciembre');
    if(informacion16Diciembre){
        informacion16Diciembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Importancia',
                html: 
                'El Parque Nacional Lagunas de Montebello alberga más de 50 lagunas, famosas por sus tonalidades azul turquesa, verde esmeralda y violeta, que cambian según la luz, profundidad y minerales presentes en el agua.',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }  

        const informacion30Diciembre = document.getElementById('Question_30Diciembre');
    if(informacion30Diciembre){
        informacion30Diciembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Dato curioso',
                html: 
                'Los bosques del Parque Nacional Benito Juárez actúan como una esponja natural: retienen agua, protegen el suelo y regulan el clima de la región',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }  

        const informacion31Diciembre = document.getElementById('Question_31Diciembre');
    if(informacion31Diciembre){
        informacion31Diciembre.addEventListener("click", () => {
            Swal.fire({
                title: 'Dato curioso',
                html: 
                'En la Reserva de la Biosfera Chamela-Cuixmala, durante la temporada seca muchos árboles pierden sus hojas por completo para conservar agua, transformando el paisaje natural',
                confirmButtonText: 'Cerrar',
                customClass: { title: 'titulo-grande', 
                    confirmButton: 'boton-personalizado',
                    popup: 'ventana-amplia',
                    htmlContainer: 'texto-justificado'
                }
            })
        });
    }  











});