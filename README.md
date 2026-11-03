# Gastro Total — revisión dinámica
Sitio web informativo del Dr. Humberto Cordero, desarrollado con HTML, CSS y JavaScript y publicado mediante GitHub Pages.

## Abrir
- `Gastro_Total.html` es la entrega autónoma: descargar y abrir con Chrome. Incluye los estilos, el código y las imágenes en el mismo archivo.
- En el ZIP, abrir `Gastro_Total/index.html` manteniendo junto a él style.css, app.js, motion.js y assets.
- Internet se necesita para insertar Instagram, cargar Google Fonts o abrir WhatsApp, Maps y redes. La tipografía tiene respaldo de sistema. Abrir WhatsApp prepara el mensaje; no confirma la cita ni envía automáticamente.

## Cambios implementados
- “Busco atención digestiva” lleva a una explicación de la consulta por enfermedades digestivas, con motivos frecuentes y botón que preselecciona Atención digestiva.
- Nueve ilustraciones conceptuales 3D, distintas para los nueve procedimientos, en una misma lámina optimizada como sprite. Flotación discreta y bordes integrados mediante máscara. Son imágenes decorativas, no diagramas de una técnica quirúrgica exacta.
- Aparición de textos, tarjetas e imágenes al desplazarse. Se ejecuta una vez por elemento y el contenido permanece disponible sin animaciones.
- Botones de Instagram y Facebook con sus glifos reconocibles y colores de marca. SVG obtenidos de Simple Icons: https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg y facebook.svg. Enlaces a las cuentas proporcionadas y nombres accesibles.
- Galería del doctor con siete fotografías proporcionadas, reproducción automática cada 5 segundos al estar visible, fundido entre imágenes, flechas, indicadores, Pausar/Reanudar y deslizamiento táctil.
- Bordes exteriores de fotografías de presentación desvanecidos mediante máscaras CSS. Centros, rostros, manos y textos se mantienen nítidos. Las comparaciones antes/después permanecen intactas, completas, sin máscara ni retoque.
- Trayectoria automática cada 5 segundos cuando está visible. Destaca el año y muestra sus datos en un panel estable; permite pausa y selección manual. Solo desplaza horizontalmente su propio contenedor, sin mover el foco o la página.
- Carrusel de siete casos antes/después con avance cada 6 segundos, dos casos en escritorio y uno en celular, flechas, indicadores, pausa y visor accesible. Se corrigió el bloqueo de Reanudar por foco/hover; mantener el cursor encima ya no detiene el carrusel. Interacción manual y visor lo pausan hasta pulsar Reanudar.
- Con preferencia de movimiento reducido, las secuencias comienzan pausadas y las entradas/flotación se omiten. Pausa automática cuando la pestaña está oculta.
- Se conservan precios, tratamientos, FAQ, sedes, formulario, cédulas y aviso COFEPRIS.

## Recursos
- Fotos originales de comparación copiadas sin cambios (verificadas por SHA-256).
- Las nuevas fotos de presentación se optimizaron a WebP sin pérdida; se verificó igualdad píxel a píxel con los PNG. Originales conservados en los archivos suministrados.
- El logo del encabezado y pie es un PNG blanco sobre negro compuesto con CSS screen, sin recuadro azul. No es un PNG con alfa nativo. La bienvenida conserva el logo oficial azul y cierre automático a los 2 segundos, con Omitir y Escape.
- Los iconos 3D fueron creados con la herramienta de imágenes. Brief: una lámina 3×3 con manga, bypass, balón con cápsula, balón ajustable con catéter, endoscopio, funduplicatura, vesícula, hernia inguinal y umbilical; estilo 3D coral/cian, fondo azul oscuro, sin textos, modelos conceptuales y sin sangre.

## Validación
- Sintaxis de app.js y motion.js comprobada con Node.
- Navegador: nueve modelos 3D, siete fotos en la galería, cuatro botones sociales y enlace correcto a consulta digestiva.
- Trayectoria avanzó de 2016 a 2018 automáticamente; pausa y reanudación verificadas.
- Galería avanzó automáticamente de 1 a 6; flecha manual y Reanudar verificados.
- Catálogo, detalle de manga y cierre, fotos originales completas, visor de comparación y controles verificados.
- Vistas de 360, 390, 768 y 1440 px sin desbordamiento horizontal (anchos útiles 345, 375, 753 y 1425 px).
- Versión autónoma cargada en navegador con 25 imágenes embebidas y nueve modelos. Los reels dependen de Instagram y conservan enlaces alternativos.
- Carrusel de casos: registro observado 1 → 2 → 3 → 4 → 5 → 6 → 7 → 1, con pausa tras avance manual y Reanudar.
- No se enviaron mensajes ni se publicó el sitio.

## Pendientes de contenido
Cotejar documentos, denominaciones y vigencias de certificaciones; inclusiones, condiciones y sedes donde aplican precios; aviso de privacidad. Las piezas gráficas proporcionadas conservan sus textos originales. No se inventaron documentos legales ni resultados.

## Nueva sección bariátrica
Sección colocada antes de consulta digestiva, con texto aprobado a la izquierda y carrusel de cuatro piezas proporcionadas a la derecha. Incluye manga, bypass y opciones sin cirugía: balón y medicamentos peptídicos, según valoración y supervisión médica. Fotos optimizadas sin pérdida y bordes exteriores integrados mediante máscara. Carrusel reutiliza el controlador automático de 5 segundos ya validado; controles de pausa, flechas, indicadores y gesto táctil. No se trasladaron porcentajes de las imágenes al texto. Sintaxis y orden estructural verificados. No fue posible una nueva revisión visual del navegador por restricción del entorno.


## Actualización de pagos y aseguradoras
Sección #pagos antes de preguntas frecuentes: efectivo, transferencia, débito, crédito y Mercado Pago. Iconos decorativos 3D originales; Mercado Pago usa el glifo SVG de Simple Icons con fondo transparente. Logos de GNP, AXA, MetLife, Seguros Monterrey, MAPFRE y Allianz obtenidos de sus sitios oficiales, conservando proporciones y colores. GNP utiliza el recurso estacional publicado por la marca.
Se preservan meses sin intereses con tarjetas participantes y financiamiento Mend. La afirmación de convenios con todas las aseguradoras fue confirmada por la clínica; incluye condición de cobertura y autorización. Botones de consulta enlazan a WhatsApp; la página no procesa pagos.
Validación: sintaxis JavaScript, IDs únicos, siete recursos de marca cargados y sin desbordamiento horizontal en vistas de 360, 390, 768 y 1440 px.
Fuentes: gnp.com.mx, axa.mx, metlife.com.mx, mnyl.com.mx, mapfre.com.mx, allianz.com.mx; glifo Mercado Pago: cdn.jsdelivr.net/npm/simple-icons@latest/icons/mercadopago.svg.


Actualización 3 de noviembre de 2026: sección completa #pagos reubicada después de Cómo podemos ayudarte y antes de cirugía bariátrica. Acceso breve en portada debajo de los botones principales.


## Herramientas utilizadas

- ChatGPT y Codex: apoyo para planificar el sitio, generar y modificar código, redactar contenido y revisar el funcionamiento.
- Generación de imágenes con IA: creación de ilustraciones conceptuales e iconos decorativos 3D.
- HTML5: estructura y contenido.
- CSS3: diseño visual, adaptación a pantallas y animaciones.
- JavaScript: filtros, ventanas de detalle, carruseles, trayectoria automática y preparación de mensajes para WhatsApp.
- GitHub: almacenamiento del código y control de versiones.
- GitHub Pages: publicación del sitio.
- Google Fonts: tipografías.
- Instagram: publicaciones insertadas y enlaces alternativos.
- Simple Icons: glifos reconocibles de redes sociales y Mercado Pago.

## Prompt completo consolidado

El siguiente prompt reúne las instrucciones principales y las modificaciones aprobadas durante el desarrollo iterativo del proyecto.

> Actúa como especialista en diseño UI/UX y desarrollo frontend. Crea un sitio web en español para Gastro Total y el Dr. Humberto Cordero, enfocado en cirugía bariátrica, control de peso y atención de enfermedades digestivas.
>
> El objetivo es explicar las opciones de atención de manera comprensible, presentar la experiencia del especialista y facilitar que los pacientes soliciten una valoración por WhatsApp.
>
> Desarrolla el proyecto con HTML, CSS y JavaScript. Organiza los archivos en index.html, style.css, app.js, motion.js y una carpeta assets para imágenes y recursos. Debe funcionar como sitio estático y poder publicarse mediante GitHub Pages.
>
> DISEÑO GENERAL
>
> Utiliza un diseño moderno con fondo oscuro, tonos azules y acentos cian, coherente con la identidad de Gastro Total. Mantén contraste legible, espacios amplios, botones visibles y adaptación a celulares, tabletas y computadoras.
>
> Integra el logo proporcionado con el fondo de la página. Utiliza imágenes optimizadas y conserva las proporciones originales. Difumina suavemente los bordes de las fotografías de presentación para integrarlas con el fondo, manteniendo nítidos los rostros y el contenido central.
>
> Utiliza textos claros para pacientes. Evita promesas de resultados garantizados y explica que la elección del tratamiento requiere valoración médica.
>
> BIENVENIDA TEMPORAL
>
> Antes del contenido, muestra brevemente el logo oficial de Gastro Total sobre fondo azul, con una animación de aparición. La bienvenida debe cerrarse automáticamente aproximadamente a los dos segundos y permitir omitirla. Nunca debe bloquear el acceso al sitio.
>
> PORTADA
>
> Presenta al Dr. Humberto Cordero con la fotografía proporcionada y el mensaje “Tu salud merece un plan personalizado”.
>
> Explica que se ofrece cirugía bariátrica, control de peso y atención digestiva en Guadalajara y Chiapas. Incluye botones para agendar valoración y explorar tratamientos.
>
> Debajo de los botones principales, agrega una franja compacta que anuncie tarjetas, transferencia, Mercado Pago y convenios con aseguradoras. Incluye el enlace “Conoce tus opciones de pago”, que lleve a la sección completa de pagos.
>
> EXPERIENCIA
>
> Presenta los datos proporcionados:
> - Más de 10 años de experiencia.
> - Más de 1,300 cirugías generales.
> - Más de 3,500 endoscopias digestivas.
> - Más de 2,000 cirugías bariátricas.
>
> CÓMO PODEMOS AYUDARTE
>
> Incluye accesos para quienes quieren bajar de peso, conocer la cirugía bariátrica o buscar atención digestiva.
>
> “Busco atención digestiva” debe llevar a una sección que explique en lenguaje sencillo qué es una consulta por enfermedades digestivas.
>
> PAGOS Y ASEGURADORAS
>
> Coloca esta sección inmediatamente después de “¿Cómo podemos ayudarte?” y antes de cirugía bariátrica, para que se encuentre entre las primeras secciones.
>
> Muestra efectivo, transferencia, tarjeta de débito, tarjeta de crédito y Mercado Pago. Utiliza iconos decorativos 3D para los métodos de pago y el glifo reconocible de Mercado Pago sin fondo.
>
> Incluye meses sin intereses con tarjetas participantes y financiamiento con Mend. No inventes tasas, plazos ni condiciones.
>
> Coloca el texto “Contamos con convenios con todas las aseguradoras”, confirmado por la clínica. Presenta logos reconocibles de GNP, AXA, MetLife, Seguros Monterrey New York Life, MAPFRE y Allianz, conservando sus proporciones y colores.
>
> Añade la aclaración: “La atención está sujeta a la cobertura de tu póliza y autorización de la aseguradora”.
>
> Incluye botones para consultar opciones de pago y cobertura por WhatsApp. La página será informativa y no procesará pagos.
>
> CIRUGÍA BARIÁTRICA Y CONTROL DE PESO
>
> Antes de la sección digestiva, coloca una sección destacada con texto a la izquierda y carrusel automático a la derecha.
>
> Explica que la cirugía bariátrica es una alternativa para pacientes seleccionados y que la valoración permite determinar el procedimiento adecuado.
>
> Presenta manga gástrica, bypass gástrico y opciones sin cirugía. En estas últimas incluye balón intragástrico y tratamiento médico con medicamentos peptídicos, según valoración y bajo supervisión médica.
>
> Usa las cuatro piezas proporcionadas, con bordes exteriores suavemente integrados al fondo. Conserva controles manuales y de pausa.
>
> CONSULTA POR ENFERMEDADES DIGESTIVAS
>
> Coloca la imagen de presentación a la izquierda y el texto a la derecha para alternar la distribución con la sección anterior.
>
> Explica que la consulta evalúa molestias del esófago, estómago e intestino mediante revisión de síntomas y antecedentes, y permite orientar el tratamiento o los estudios necesarios.
>
> Menciona motivos de consulta como acidez, reflujo, dolor o distensión abdominal, molestias por gastritis, diarrea persistente, cambios al evacuar y colon irritable. Aclara que no todas las molestias requieren cirugía.
>
> OPCIONES DE ATENCIÓN
>
> Presenta nueve servicios con filtros, descripción breve, ilustración conceptual 3D y acceso a mayor información:
> - Manga gástrica: $85,000 MXN.
> - Bypass gástrico: según valoración.
> - Balón intragástrico Allurion: $51,000 MXN.
> - Balón intragástrico SPATZ3: $45,000 MXN.
> - Endoscopia digestiva alta: consultar costo.
> - Funduplicatura: consultar costo.
> - Colecistectomía: consultar costo.
> - Cirugía de hernia inguinal: consultar costo.
> - Cirugía de hernia umbilical: consultar costo.
>
> Las imágenes 3D deben ser diferentes para cada servicio y presentarse como ilustraciones conceptuales, no como representaciones quirúrgicas exactas. No inventes inclusiones ni condiciones de los precios.
>
> CONOCE AL DOCTOR
>
> Presenta la información profesional proporcionada, sus cédulas y formación. Utiliza las siete fotografías suministradas en un carrusel automático con transición suave, flechas, indicadores, pausa y navegación táctil.
>
> En “Experiencia que construye confianza”, muestra automáticamente cada año y su información correspondiente aproximadamente cada cinco segundos. Permite también selección manual y pausa. Conserva los datos proporcionados sin inventar certificaciones.
>
> TESTIMONIOS Y VIDEOS
>
> Incluye “El doctor te explica” con las publicaciones de Instagram proporcionadas sobre manga gástrica y opciones para el control de peso.
>
> Añade testimonios, incluyendo el de Eloisa, mediante las publicaciones suministradas. Conserva enlaces alternativos para abrirlos en Instagram.
>
> Crea un carrusel automático con los siete casos de antes y después, con avance aproximado cada seis segundos, controles manuales, pausa y visor para ampliar. Muestra dos casos en escritorio y uno en celular.
>
> Conserva las comparaciones originales completas, sin retoques corporales ni recortes que alteren su interpretación. Aclara que son experiencias individuales y los resultados pueden variar.
>
> CONSULTAS Y SEDES
>
> Muestra consulta presencial de $1,000 MXN y consulta en línea de $800 MXN.
>
> Presenta Guadalajara y las ciudades de Chiapas: Tuxtla Gutiérrez, San Cristóbal de Las Casas, Tapachula y Ocosingo. Utiliza la información y los enlaces de ubicación proporcionados; permite consultar disponibilidad por ciudad.
>
> CONTACTO Y PREGUNTAS FRECUENTES
>
> Incluye preguntas frecuentes sobre valoración, consultas, sedes, procedimientos, seguimiento y pagos.
>
> Agrega un formulario que solicite nombre, modalidad, ciudad y área de interés. Al continuar, prepara un mensaje para WhatsApp al número +52 33 1572 2352.
>
> El usuario debe poder revisar y enviar el mensaje. Abrir WhatsApp no debe enviar mensajes automáticamente ni confirmar una cita.
>
> Coloca botones de Instagram y Facebook con sus logos reconocibles y enlaces proporcionados.
>
> ANIMACIÓN Y ACCESIBILIDAD
>
> Haz que los textos, tarjetas e imágenes aparezcan suavemente al desplazarse. Mantén el contenido accesible si las animaciones no se ejecutan.
>
> Respeta la preferencia de movimiento reducido. Incluye nombres accesibles, navegación por teclado y controles para pausar las secuencias automáticas. Pausa la reproducción cuando la pestaña esté oculta.
>
> VALIDACIÓN Y ENTREGA
>
> Comprueba la navegación, los botones, las imágenes, los filtros, las ventanas de detalle y los carruseles. Revisa que no exista desbordamiento horizontal en pantallas pequeñas.
>
> Conserva los recursos y datos aprobados. No inventes documentos legales, certificaciones ni resultados clínicos.
>
> Entrega el código completo y documenta el proyecto en README.md, incluyendo descripción, herramientas utilizadas, prompts, instrucciones de uso y URL pública.

## URL pública

Pega aquí el enlace exacto que aparece en:
[Settings → Pages → Visit site.](https://susanacruzsz.github.io/Gastro_Total-_Pagina_web/)

## Ejecución local

1. Descarga el repositorio mediante Code → Download ZIP.
2. Descomprime el archivo.
3. Abre index.html en un navegador.
4. Conserva en la misma ubicación style.css, app.js, motion.js y la carpeta assets.

Se requiere conexión a internet para cargar servicios externos como Google Fonts e Instagram y para abrir WhatsApp, Maps y redes sociales.
