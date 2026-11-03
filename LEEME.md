# Gastro Total — revisión dinámica
Sitio en español del Dr. Humberto Cordero, guardado sin publicación. Frontend HTML/CSS/JavaScript, sin compilación, cuentas, pagos ni base de datos.

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
