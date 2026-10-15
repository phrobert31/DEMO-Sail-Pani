
/* =======================================================
   BUSINESS DETAILS
   ======================================================= */
const CONFIG = {
  owner: "Andrea Pani",
  phoneShow: "+39 351 753 8315",
  phoneIntl: "393517538315",
  email: "sailandclean@gmail.com",
  instagram: "sailandclean_",
  youtube: "SailClean-Official",        // CHECK: Instagram handles cannot contain "&"
  vat: "",                            // add the P. IVA when available
  base: "Sassari (SS), Sardegna",
  mapEmbed: "https://maps.google.com/maps?q=Sassari%20Sardegna&z=10&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Sassari%20Sardegna",
  video: "boAIo8BtNag",               // YouTube video shown on the home page (from youtube.com/shorts/<id>)
  // availability shown on the cleaning and delivery pages, by month (1 = January):
  // "ok" = available, "few" = few slots left, "full" = fully booked. Months not listed are "ok".
  avail: { 6: "few", 7: "few", 8: "few", 9: "few" }
};

;

/* =======================================================
   TEXTS: it, en, fr, de, es
   ======================================================= */
const NB="\u00a0";
const T={

es:{
 img:{"hero": "Costa del norte de Cerdeña desde el aire", "c1": "Lavado de la cubierta de un barco en el puerto", "c2": "Velero navegando", "clean": "Limpieza de detalles de un barco"},
 ui:{top:"Volver arriba",preview:"Vista previa del mensaje",quote:"Presupuesto",skip:"Ir al contenido",menu:"Abrir el menú",whatsapp:"Escríbenos por WhatsApp",contact:"Contacto"},
 calc:{title:"Calcula una estimación",sub:"Indica la distancia en millas. Si no la conoces, envíanos los dos puertos y la calculamos nosotros.",miles:"Distancia en millas",total:"Estimación del servicio",note:"Solo el servicio: combustible, amarres y gastos del patrón van aparte. El presupuesto definitivo llega tras la revisión.",btn:"Pedir presupuesto para esta ruta",msg:"Hola, quisiera un presupuesto para un traslado de unas {n} millas."},
 nav:{home:"Inicio",clean:"Limpieza",deliv:"Traslados",contact:"Contacto"},
 map:{capHome:"Norte de Cerdeña.",capClean:"Los puertos deportivos donde trabajamos habitualmente.",capRoutes:"Algunas rutas ya realizadas."},
 home:{eyebrow:"Limpieza y traslado de barcos · Cerdeña",h1a:"Tu barco,",h1b:"limpio y listo para zarpar.",
  lead:"Limpiamos barcos de hasta 30 metros en el norte de Cerdeña y trasladamos embarcaciones de hasta 20 metros por todo el Mediterráneo.",
  cta1:"Servicios de limpieza",cta2:"Traslados",
  t1:"eslora máxima, limpieza",t2:"eslora máxima, traslado",t3:"por milla, traslado",
  svcTitle:"Servicios",svcSub:"Trabajamos para armadores particulares, puertos deportivos y astilleros.",
  c1h:"Limpieza y cuidado",c1p:"Interiores, exteriores y pequeño mantenimiento, a flote o en seco. Tú eliges lo que necesitas.",
  c1:["Interiores: camarotes, salón, baños","Exteriores: cubierta, gel coat, fibra de vidrio, portillos","Lavado de neumáticas, decapado, encerado","Productos ecológicos, línea clásica o nanotecnología","Guardado de velas"],
  c1meta:["Hasta 30 m","Norte de Cerdeña","A flote o en seco"],c2meta:["Hasta 20 m","7 € por milla","También al extranjero"],
  c1btn:"Ver los servicios de limpieza",
  c2h:"Traslados y patrón",c2p:"Llevamos tu barco de un puerto a otro, más allá de las 12 millas y al extranjero.",
  c2:["Cualquier tipo de barco hasta 20 metros","7 € por milla","Revisión del barco en persona antes de salir","Recogida en astillero o bróker tras la compra","Patrón para puertos deportivos, astilleros y agencias"],
  c2btn:"Cómo funciona un traslado",
  roseCap:"La rosa de los vientos del Mediterráneo.",winds:["Tramontana, del norte", "Gregal, del nordeste", "Levante, del este", "Siroco, del sudeste", "Ostro, del sur", "Lebeche, del sudoeste", "Poniente, del oeste", "Mistral, del noroeste"],
  whyTitle:"Por qué Sail&Clean",
  why:[{t:"Productos ecológicos",d:"Línea clásica o nanotecnología, que cuesta más y protege durante más tiempo. Tú eliges."},
       {t:"Hablas con quien sube a bordo",d:"Cogemos nosotros el teléfono y trabajamos nosotros en tu barco. Sin intermediarios."},
       {t:"Precios claros",d:"Traslados a 7 € por milla. Limpieza con presupuesto según el barco y los servicios elegidos."}],
  ctaTitle:"Cuéntanos cómo es el barco",ctaText:"Envíanos modelo, eslora y puerto. Te respondemos con un presupuesto."},
 clean:{eyebrow:"Servicio 01",h1:"Limpieza y cuidado del barco",
  intro:"Veleros y barcos a motor de hasta 30 metros, a flote o en seco. Tú decides: solo interiores, solo exteriores o todo.",
  whatTitle:"Qué hacemos",whatSub:"Cada trabajo es a medida: nos dices qué necesitas y preparamos el presupuesto.",
  list:["Interiores: camarotes, salón, cocina","Baños y sanitarios","Cubierta y bañera","Gel coat","Fibra de vidrio","Portillos y cristales","Lavado de neumáticas","Decapado","Encerado","Pequeño mantenimiento","Guardado de velas","Limpieza tras el paso por astillero"],
  noHull:"No limpiamos la quilla bajo el agua. El resto lo hacemos tanto con el barco a flote como en seco.",
  prodTitle:"Productos",prodSub:"Usamos solo productos ecológicos. Puedes elegir entre dos líneas.",
  prod1h:"Línea clásica",prod1p:"Productos ecológicos para la limpieza habitual, con un coste más contenido.",
  prod2h:"Nanotecnología · recomendada",prod2p:"Cuesta más y da mejor resultado: la superficie queda protegida más tiempo y se ensucia menos. Es la línea que recomendamos.",
  groups:[{t:"Exteriores",items:["Cubierta y bañera","Gel coat y fibra de vidrio","Portillos y cristales","Encerado","Decapado"]},{t:"Interiores",items:["Camarotes, salón, cocina","Baños y sanitarios","Ventilación y orden a bordo"]},{t:"Otros servicios",items:["Lavado de neumáticas","Pequeño mantenimiento","Guardado de velas","Limpieza tras el paso por astillero"]}],badge:"Recomendada",
  areaTitle:"Dónde trabajamos",areaSub:"Norte de Cerdeña. Llegamos a los principales puertos deportivos de la costa.",
  ports:["Porto Torres","Alghero y Fertilia","Bosa","Cannigione","Costa Smeralda","Portisco","Olbia","San Teodoro"],
  trasferta:"El desplazamiento se paga aparte y siempre se indica en el presupuesto. Para puertos fuera de esta lista, pregúntanos.",
  quoteTitle:"Cómo pedir presupuesto",quoteSub:"El servicio funciona a petición, sin plazos de reserva. Los tiempos dependen del modelo del barco y de su estado.",
  steps:[{t:"Rellena el formulario",d:"Modelo, eslora, puerto y servicios que necesitas."},{t:"Envía fotos",d:"Por WhatsApp, así vemos enseguida el estado del barco."},{t:"Recibe el presupuesto",d:"Con los servicios elegidos, la línea de productos y el desplazamiento."},{t:"Fijamos la fecha",d:"Acordamos el día y subimos a bordo."}]},
 form:{title:"Pedir presupuesto",name:"Nombre",reach:"Email o teléfono",boat:"Modelo y eslora",boatPh:"p. ej. Bavaria 46, 14 m",
  port:"Puerto",portPh:"p. ej. Olbia",services:"Servicios que te interesan",msg:"Mensaje",msgPh:"Cuéntanos qué necesitas y cuándo.",
  chips:{int:"Interiores",ext:"Exteriores",gel:"Gel coat",wax:"Encerado",dec:"Decapado",gom:"Neumática",sails:"Guardado de velas",tr:"Traslado"},
  wa:"Enviar por WhatsApp",mail:"Enviar por email",
  photos:"Después de enviar el mensaje, adjunta algunas fotos del barco: nos ayuda a dar un presupuesto preciso.",
  err:"Indica al menos tu nombre y un mensaje.",hello:"Hola, soy",subject:"Solicitud de presupuesto desde la web",
  lBoat:"Barco",lPort:"Puerto",lServices:"Servicios",lReach:"Contacto"},
 deliv:{eyebrow:"Servicio 02",h1:"Traslados y patrón",
  intro:"Llevamos tu barco donde haga falta, también más allá de las 12 millas y fuera de Italia. Cualquier tipo de barco hasta 20 metros.",
  priceText:"por milla. El precio se calcula según la distancia en millas. Los demás gastos corren a cargo del armador.",
  priceBtn:"Pedir presupuesto",
  routesTitle:"Rutas ya realizadas",routesSub:"Algunos ejemplos de traslados completados.",
  routes:["Porto Torres → Marina di Andora","Alassio → Porto Torres","Fertilia → Porto Vecchio"],
  routesNote:"Navegamos a cualquier destino, en Italia y en el extranjero. Si tu ruta no está aquí, pregúntanos igualmente.",
  howTitle:"Cómo funciona",
  steps:[{t:"Nos escribes",d:"Puerto de salida y de llegada, fechas, modelo y eslora."},{t:"Revisión a bordo",d:"Vamos a ver el barco en persona: las fotos no bastan."},{t:"Salida",d:"Salimos con la ventana meteorológica adecuada y con las paradas de combustible necesarias."},{t:"Entrega",d:"El barco llega al puerto acordado."}],
  costTitle:"Costes y condiciones",costSub:"Todo queda por escrito en el presupuesto.",
  costs:[{t:"7 € por milla",d:"Es el precio del servicio, calculado sobre las millas de la ruta."},
   {t:"A cargo del armador",d:"Combustible, amarres durante la ruta, viaje, comidas y alojamiento del patrón."},
   {t:"Seguro",d:"El seguro del servicio corre de nuestra cuenta."},
   {t:"Revisión previa",d:"La revisión antes de salir se paga aunque después no se zarpe: es una jornada de trabajo."},
   {t:"Días de espera",d:"Si el barco no está listo, cada día de espera en tierra se cobra por jornada."},
   {t:"Documentación",d:"No nos ocupamos de documentos ni trámites portuarios: quedan a cargo del armador."}],
  costIncl:{t:"Incluido en el precio",items:[{b:"El traslado en sí",s:"7 € por milla recorrida."},{b:"Seguro",s:"Corre de nuestra cuenta."},{b:"Planificación de la ruta",s:"Ventana meteorológica y paradas de combustible."},{b:"Novedades durante el viaje",s:"Siempre sabes dónde está el barco."}]},costExcl:{t:"Aparte, a cargo del armador",items:[{b:"Combustible y amarres",s:"Durante la ruta."},{b:"Viaje, comidas y alojamiento del patrón",s:"Para llegar al barco y volver."},{b:"Revisión previa",s:"Una jornada de trabajo, aunque después no se zarpe."},{b:"Días de espera",s:"Si el barco no está listo, se cobra por día."},{b:"Documentos y trámites",s:"Quedan a cargo del armador."}]},moreTitle:"¿Más preguntas?",moreText:"Escríbenos por WhatsApp: respondemos todos los días, también fuera de horario.",
  faqTitle:"Preguntas frecuentes",
  faq:[{q:"¿Hasta dónde llegáis?",a:"A cualquier destino, también fuera de Italia. Las rutas más largas se organizan con unos días de antelación."},
   {q:"¿Navegáis solos?",a:"Por norma sí, el traslado es en solitario. Cuando la ruta o el barco lo requieren, buscamos tripulación adicional."},
   {q:"¿Aceptáis cualquier barco?",a:"Cualquier tipo hasta 20 metros, siempre que esté en buen estado. No nos hacemos cargo de barcos que no estén en orden."},
   {q:"Acabo de comprar un barco, ¿podéis ir a recogerlo?",a:"Sí. Lo recogemos en el astillero o en el bróker y lo llevamos a tu puerto."},
   {q:"¿Trabajáis con puertos deportivos y agencias?",a:"Sí, también hacemos de patrón para puertos deportivos, astilleros y agencias de alquiler."}],
  faqBtn:"Hablemos"},
 contact:{eyebrow:"Quiénes somos",h1:"Quiénes somos y contacto",intro:"Respondemos todos los días. Por WhatsApp, también fuera de horario.",
  avail:"Disponible todo el año",
  role:"Fundador y patrón",
  bio1:"Soy Andrea, de Sassari, y trabajo en los puertos del norte de Cerdeña. Empecé como marinero en un catamarán en la Asinara, y de ahí nació la pasión.",
  bio2:"Con Sail&Clean me encargo de la limpieza y el cuidado de los barcos y de los traslados por mar, junto con algunos colaboradores.",
  lic:"Titulación para más de 12 millas",licP:"Es la titulación italiana exigida para los traslados en mar abierto.",
  ins:"Servicio asegurado",insP:"El seguro del servicio corre de nuestra cuenta y está incluido en el precio.",
  detailsTitle:"Contacto",phone:"Teléfono y WhatsApp",email:"Email",ig:"Instagram",hours:"Horario",
  hoursV:"Todos los días, 9:00–18:00. Por WhatsApp respondemos también más tarde.",base:"Base",langs:"Idiomas",
  langsV:"Italiano, inglés, francés, alemán, español",
  pro:"¿Gestionas un puerto deportivo, un astillero o una agencia? Podemos atender directamente a tus clientes.",
  photoAlt:"Andrea Pani a bordo",photoCap:"Andrea Pani, fundador de Sail&Clean.",mapTitle:"Mapa del norte de Cerdeña"},
 cookie:{label:"Cookies",text:"Esta web no usa cookies de seguimiento. El mapa de la página de contacto usa Google Maps, que instala cookies de terceros: solo lo cargamos si lo aceptas.",
  accept:"Aceptar",reject:"Rechazar",privacy:"Aviso de privacidad",prefs:"Preferencias de cookies",
  mapOff:"El mapa usa Google Maps, que instala cookies de terceros. Solo se carga con tu consentimiento.",mapLoad:"Cargar el mapa",mapOpen:"Abrir en Google Maps"},
 privacy:{title:"Aviso de privacidad",close:"Cerrar",
  paras:["Responsable del tratamiento: {owner}, {base}. Contacto: {email}.",
   "Esta web está formada por páginas estáticas. El proveedor de alojamiento registra las direcciones IP de los visitantes por motivos técnicos y de seguridad.",
   "El formulario no nos envía datos directamente: abre WhatsApp o tu programa de correo con el mensaje ya escrito. Usamos lo que nos envías solo para responderte y prestar el servicio solicitado.",
   "Las tipografías están incluidas en la web y no se descargan de servicios externos. El mapa de Google Maps se carga solo tras tu consentimiento, y en ese caso Google trata los datos según su propia política.",
   "El vídeo de YouTube de la página de inicio solo se carga cuando pulsas play. A partir de ese momento, YouTube trata los datos según su propia política.",
   "Puedes solicitar acceso, rectificación o supresión de tus datos en cualquier momento escribiendo a {email}, y presentar una reclamación ante la autoridad italiana de protección de datos (Garante)."]},
 footer:{blurb:"Limpieza y cuidado de barcos en el norte de Cerdeña, traslados por todo el Mediterráneo.",pages:"Páginas",contact:"Contacto"}
}
};


/* texts added for the about block, video, route planner and availability (merged into T) */
const TX={
es:{about:{title:"Quién sube a bordo",more:"Más sobre Andrea"},
 video:{title:"Ver el vídeo",sub:"De nuestro canal de YouTube",play:"Ver el vídeo de Sail&Clean",note:"El vídeo solo se carga desde YouTube al pulsar play.",frame:"Vídeo de Sail&Clean en YouTube"},
 plan:{otherPh:"Escribe el nombre del puerto",otherHint:"Puerto fuera de la lista: introduce las millas si las conoces; si no, las calculamos nosotros.",msgNoMiles:"Hola, quisiera un presupuesto para un traslado de {a} a {b}.",
  title:"Calcula tu ruta",sub:"Elige los puertos de salida y llegada: calculamos las millas y un precio orientativo.",from:"Salida",to:"Llegada",swap:"Invertir salida y llegada",
  other:"Otro puerto",est:"estimación por mar",manual:"introducidas a mano",cap:"Ruta orientativa por mar. Discontinuas: rutas ya realizadas.",
  msg:"Hola, quisiera un presupuesto para un traslado de {a} a {b} (unas {n} millas).",
  groups:{s:"Cerdeña",c:"Córcega",l:"Liguria y Costa Azul",t:"Toscana"},names:{genova:"Génova",nizza:"Niza",livorno:"Livorno",monaco:"Mónaco",portoferraio:"Portoferraio (Elba)",santaTeresa:"Santa Teresa Gallura"}},
 av:{title:"Disponibilidad en los próximos meses",sub:"En verano las plazas vuelan: escríbenos con tiempo.",ok:"Disponible",few:"Pocas plazas",full:"Completo"}}
};
for(const l in TX) if(T[l]) Object.assign(T[l],TX[l]);

/* =======================================================
   MAPS (coastlines projected from public-domain Natural Earth data)
   ======================================================= */
const GEO = {"routes":{"paths":["M465.6,607.4L469.8,610.4L471.0,611.3L471.0,612.8L469.2,615.3L468.6,616.7L468.0,619.9L466.8,622.1L463.2,626.3L460.2,631.5L458.4,633.4L454.8,634.2L451.8,635.1L450.0,637.1L447.0,641.3L445.2,643.0L441.0,645.2L439.2,647.1L437.4,650.1L437.4,652.3L438.0,658.4L438.6,659.9L442.2,667.2L444.0,669.1L446.4,669.9L448.2,670.6L451.8,674.3L455.4,676.0L454.8,678.2L448.8,689.1L447.6,693.8L449.4,697.7L450.6,697.2L451.8,696.7L453.0,697.7L452.4,698.9L451.2,699.4L450.0,699.4L448.2,701.6L447.6,703.3L447.0,705.0L448.2,706.7L447.0,706.7L448.2,707.9L448.8,708.4L449.4,709.3L447.6,711.3L445.8,714.2L445.2,717.8L444.6,721.2L445.2,723.2L445.8,726.6L445.8,728.8L445.8,730.2L444.0,732.7L444.0,734.6L443.4,735.6L442.8,736.5L441.6,738.2L441.6,740.2L442.8,746.5L442.2,750.4L438.0,759.8L441.0,762.2L439.8,766.8L435.6,774.3L434.8,777.2L229.4,777.2L229.8,776.0L232.8,773.8L233.4,772.6L234.0,770.4L234.0,769.2L231.6,765.4L231.0,764.9L232.2,762.7L237.0,758.8L239.4,756.4L241.8,751.6L243.6,748.9L242.4,747.9L244.2,746.0L243.6,743.1L241.8,737.3L241.2,730.7L240.6,729.3L240.6,728.3L241.2,726.8L240.6,723.2L241.2,722.2L243.0,722.7L244.8,723.4L250.2,729.0L252.6,731.0L256.2,731.9L261.0,731.2L252.6,729.3L250.8,728.3L250.8,725.9L253.2,723.4L255.6,721.0L257.4,719.3L256.2,719.3L255.6,720.3L255.0,721.2L254.4,721.7L253.2,722.2L255.0,720.8L256.8,718.6L258.0,715.9L258.6,714.0L259.2,709.3L258.6,707.6L257.4,705.7L253.8,702.8L249.0,700.8L243.6,700.6L239.4,702.8L240.6,703.5L241.8,702.5L243.6,702.8L241.8,703.5L240.6,705.0L239.4,708.6L238.2,707.4L239.4,705.9L238.2,704.7L236.4,703.7L234.0,702.0L232.8,701.8L232.2,700.6L232.2,699.6L232.8,698.6L233.4,697.7L233.4,696.7L232.2,691.3L232.2,689.9L234.6,686.7L234.6,685.0L232.2,682.8L229.8,683.8L229.2,683.3L231.0,682.1L233.4,680.8L238.8,680.8L241.8,680.1L243.0,679.9L244.8,679.1L246.6,677.4L247.8,675.2L248.4,673.0L247.2,671.1L244.8,667.2L243.6,664.5L243.0,656.9L246.0,650.1L246.0,645.9L243.6,642.5L240.0,640.0L235.8,638.1L234.6,639.3L231.0,637.1L230.4,634.4L232.2,626.8L231.6,624.1L229.8,620.2L227.4,616.7L225.0,615.3L222.0,614.0L220.8,611.1L219.6,607.7L218.4,604.2L215.4,601.8L211.2,602.0L202.8,605.4L199.2,604.2L201.0,601.5L202.8,599.3L198.6,598.6L196.2,600.3L194.4,603.0L193.8,606.4L192.0,604.5L191.4,602.0L190.2,598.3L193.2,596.3L195.6,595.1L197.4,592.9L198.0,589.5L199.2,588.7L199.8,587.7L198.6,587.5L196.2,587.2L194.4,586.3L192.0,583.8L190.8,582.8L189.0,582.3L201.6,562.3L202.8,560.1L202.8,557.4L201.6,555.2L198.6,554.4L196.2,553.2L196.8,550.7L198.6,548.0L200.4,546.3L201.6,546.3L202.2,548.0L203.4,548.3L204.6,548.3L205.8,549.2L205.8,550.5L205.2,552.2L204.6,554.2L205.2,555.9L213.0,562.3L218.4,564.6L237.0,566.3L246.0,568.0L250.2,568.3L253.2,568.0L266.4,564.3L269.4,562.3L272.4,560.1L273.6,557.9L285.0,554.4L289.2,554.2L291.6,554.4L294.0,555.4L303.6,550.5L306.6,548.3L312.6,541.6L314.4,540.3L313.2,539.4L318.6,537.9L320.4,537.4L321.6,536.4L323.4,533.7L324.6,533.2L326.4,532.4L329.4,530.7L331.8,528.5L334.2,524.7L337.2,523.7L348.6,522.8L351.0,522.3L355.8,519.3L357.0,520.3L359.4,518.0L360.6,515.6L360.6,509.6L361.8,507.1L364.8,505.9L368.4,505.1L372.0,504.1L372.0,505.4L373.2,506.1L374.4,506.4L376.2,506.1L378.0,507.9L378.0,513.1L379.8,514.1L379.2,513.3L378.6,512.6L379.2,511.6L379.8,510.1L381.0,510.1L381.6,512.1L381.0,513.1L381.0,514.1L383.4,513.8L385.2,513.1L385.8,513.8L388.8,515.1L389.4,511.6L391.8,512.3L397.8,516.3L397.8,515.1L399.6,515.8L400.8,516.1L402.0,516.3L403.8,516.3L402.6,517.5L402.0,518.5L401.4,519.3L403.2,519.8L404.4,520.8L405.6,522.0L406.8,523.3L406.2,524.2L406.2,525.7L406.8,529.2L409.2,526.2L409.8,525.0L411.6,524.2L411.0,523.5L410.4,522.5L409.2,522.0L411.6,521.3L413.4,521.3L415.8,521.8L418.2,522.0L419.4,520.8L420.6,520.8L421.8,522.0L420.6,523.3L422.4,524.0L423.6,524.7L425.4,524.2L426.6,524.2L427.2,525.0L427.2,527.0L427.2,528.5L426.0,529.9L424.2,531.4L423.6,529.9L423.0,529.2L420.0,538.1L418.8,540.3L421.8,540.3L420.6,538.1L423.6,537.4L425.4,537.6L426.0,539.1L425.4,541.3L426.6,541.1L427.8,541.1L429.0,541.3L431.4,539.6L436.2,539.8L440.4,541.1L444.0,542.3L441.6,544.1L439.2,543.8L436.8,542.8L433.8,542.3L431.4,543.3L430.2,545.5L429.6,548.3L427.8,550.2L428.4,552.2L426.0,552.7L418.8,552.2L418.2,553.0L417.6,553.4L418.8,555.2L420.0,555.2L421.2,554.4L423.0,554.4L424.8,554.9L427.8,556.2L429.0,556.4L432.0,555.9L434.4,554.7L436.8,553.9L440.4,554.4L439.2,555.7L438.6,556.7L437.4,557.2L435.6,557.4L435.6,558.4L441.6,560.4L442.8,560.9L442.8,562.6L444.0,563.3L445.2,563.3L447.0,562.3L448.2,563.8L450.0,564.6L451.8,565.1L454.2,565.3L448.2,566.8L447.0,567.5L448.2,569.5L448.2,570.5L445.8,570.0L443.4,570.7L442.8,572.0L444.6,573.4L445.2,571.7L445.8,573.7L450.6,577.9L451.8,579.8L452.4,582.6L457.2,589.5L457.8,591.4L459.0,600.3L459.6,601.8L460.2,603.0L461.4,603.5L463.8,603.7L464.4,604.7L464.4,605.9L465.6,607.4Z","M261.0,364.0L262.2,362.3L261.0,361.5L258.6,361.0L257.4,360.3L258.0,359.0L259.8,358.7L264.6,358.7L265.8,358.2L267.0,357.7L268.2,357.2L275.4,356.2L277.2,355.5L279.0,354.7L280.2,354.5L281.4,354.5L281.4,353.2L279.0,351.9L272.4,349.7L271.8,349.2L271.8,348.2L270.6,347.4L268.2,348.9L267.0,348.2L266.4,347.1L267.6,346.6L272.4,344.6L268.8,342.6L265.2,342.6L258.6,344.6L259.8,343.4L258.6,342.1L258.0,340.6L258.0,338.8L258.6,337.3L259.8,338.0L261.6,338.0L263.4,337.5L264.6,336.5L266.4,337.3L267.0,336.5L267.0,335.3L267.6,334.3L268.8,333.5L270.0,332.5L275.4,332.0L276.6,331.0L276.6,329.5L276.6,327.7L278.4,325.7L279.6,324.6L278.4,323.9L276.6,323.9L276.0,323.4L276.6,322.6L277.8,318.8L280.2,317.3L282.6,316.3L286.2,315.8L285.0,314.3L286.2,311.0L285.0,309.7L285.0,308.4L286.2,308.9L287.4,310.5L289.8,309.4L291.6,310.0L293.4,311.2L295.2,311.7L297.6,311.0L300.0,309.7L301.2,307.7L301.8,305.4L300.6,304.4L307.2,304.1L318.0,300.6L336.6,297.8L341.4,296.0L342.0,293.2L351.0,286.3L352.8,285.6L357.0,285.1L360.6,285.1L362.4,285.3L364.2,285.3L372.6,286.9L376.2,288.4L377.4,289.1L378.6,289.9L379.2,291.2L381.0,294.2L382.2,294.2L388.2,287.4L390.6,283.0L388.8,279.7L390.0,276.7L389.4,274.1L387.0,271.6L384.0,269.3L388.8,265.2L388.8,264.0L387.6,262.4L387.6,261.2L388.2,259.6L389.4,258.6L393.6,255.8L393.0,255.0L393.0,254.0L393.6,252.7L391.8,251.5L390.6,249.2L390.0,246.6L391.2,244.6L393.6,243.3L400.8,243.3L403.8,242.5L405.6,244.6L407.4,245.3L410.4,246.6L410.4,247.6L409.2,248.9L409.2,250.7L409.8,252.2L411.6,253.8L411.0,256.6L414.0,270.3L414.0,274.9L408.6,289.1L408.6,290.9L408.0,293.0L408.6,297.3L408.0,297.8L407.4,298.5L406.8,299.3L407.4,299.8L409.2,300.3L409.8,301.6L410.4,302.3L410.4,303.1L409.2,304.4L411.0,305.1L411.0,306.1L411.6,307.4L412.8,308.4L414.0,309.2L418.8,310.5L418.2,308.4L417.6,307.4L414.6,303.6L420.0,308.2L421.2,311.0L421.8,313.8L421.8,322.4L422.4,326.9L424.2,330.2L423.0,332.0L422.4,334.3L421.8,336.5L421.8,339.3L423.0,342.3L426.0,348.2L426.6,351.2L425.4,369.8L426.6,373.4L426.0,374.4L426.0,377.1L425.4,378.1L424.2,379.7L420.0,382.4L418.2,384.4L415.2,388.0L403.8,399.0L401.4,400.8L400.2,402.0L400.2,407.3L399.0,417.6L400.2,427.8L400.2,438.6L399.6,439.4L398.4,439.9L396.6,440.6L395.4,442.1L394.2,443.4L396.6,443.4L396.0,446.1L395.4,447.6L393.6,448.4L392.4,448.4L390.6,448.4L390.6,449.4L391.2,451.6L388.8,450.9L386.4,450.4L384.0,450.4L382.2,450.6L382.2,451.9L380.4,453.3L379.8,454.6L382.2,455.6L387.6,454.1L390.6,453.8L392.4,455.1L391.8,457.1L390.0,458.8L387.6,460.1L384.6,460.6L383.4,461.3L382.2,462.8L380.4,464.3L377.4,464.6L378.0,465.6L378.0,466.6L378.0,467.8L377.4,468.8L379.2,469.3L379.8,470.3L379.2,471.8L377.4,472.8L378.6,473.8L375.6,474.5L371.4,476.5L368.4,476.8L368.4,477.8L370.2,478.8L370.8,479.8L370.2,481.0L368.4,482.0L370.2,482.3L373.2,480.5L375.0,479.8L374.4,482.0L373.2,484.5L371.4,486.7L370.2,488.0L367.8,489.0L365.4,488.5L361.2,486.0L358.8,485.3L353.4,484.8L349.2,483.5L351.0,479.5L352.2,479.0L353.4,478.8L351.0,477.3L346.8,476.0L344.4,474.8L346.8,472.8L346.8,471.8L344.4,472.3L339.6,474.8L338.4,473.8L339.0,473.3L339.6,472.8L337.8,473.1L336.6,473.8L335.4,472.8L333.6,471.6L329.4,470.8L325.2,470.3L322.8,470.8L321.0,469.8L319.2,468.8L318.0,468.1L313.8,467.6L313.2,467.1L312.0,465.8L310.8,465.3L309.6,465.3L307.8,465.3L306.6,464.6L309.0,463.6L309.0,462.6L306.6,462.1L305.4,461.6L304.2,461.8L301.8,461.3L299.4,460.8L298.8,460.1L299.4,457.3L298.8,456.3L296.4,455.6L297.6,453.6L298.8,450.6L300.0,448.6L303.0,449.6L312.0,446.9L313.2,445.9L314.4,443.9L316.2,442.9L318.6,442.1L320.4,440.4L316.2,440.4L306.0,438.4L301.8,438.1L298.2,437.9L295.8,436.4L297.6,433.4L293.4,433.4L286.2,435.1L282.6,435.4L283.2,434.6L283.8,433.4L281.4,433.4L279.6,433.1L277.8,432.6L276.0,432.1L277.8,431.4L282.6,431.1L285.0,430.1L286.2,428.8L286.8,427.3L286.8,426.1L285.0,425.3L285.0,424.1L288.6,424.1L292.2,423.3L297.6,421.1L296.4,419.8L295.2,418.8L293.4,418.3L291.6,418.1L297.0,416.8L298.8,416.1L298.2,415.6L297.6,414.6L297.0,413.8L298.2,411.8L298.8,411.1L300.6,409.8L300.6,408.8L298.8,407.8L297.6,406.5L297.0,405.5L295.8,405.0L294.0,404.8L290.4,405.0L285.0,407.0L281.4,407.8L274.8,408.3L271.8,408.6L268.8,409.8L267.6,407.8L270.0,405.3L268.8,403.3L264.6,399.8L272.4,399.3L276.0,398.3L277.8,395.5L276.0,394.7L277.2,393.0L280.8,391.2L284.4,390.5L289.8,388.5L291.0,386.7L289.8,385.7L287.4,384.4L284.4,380.2L283.2,378.9L281.4,378.4L276.6,379.4L276.0,378.9L274.8,376.9L271.8,375.6L267.6,375.1L264.6,375.1L265.2,373.9L265.8,373.4L264.6,372.6L262.8,372.1L261.6,372.1L259.8,372.1L261.6,371.9L262.8,371.4L265.8,370.1L265.8,369.1L261.0,369.1L261.0,368.1L262.8,367.6L263.4,366.1L262.8,364.5L261.0,364.0Z","M620.0,-18.7L620.0,777.2L620.0,254.7L613.9,252.7L605.5,251.5L597.1,251.2L589.9,252.7L590.5,254.3L591.1,255.0L586.3,256.3L583.3,254.0L579.7,246.6L583.9,244.3L586.3,241.5L589.9,233.1L589.3,231.3L589.3,228.0L589.9,224.9L591.1,222.9L589.9,220.3L589.3,217.0L588.7,210.8L588.1,207.7L586.3,204.7L573.1,186.2L562.3,176.4L559.9,174.6L554.5,172.8L552.7,170.2L549.1,158.7L544.3,122.0L541.9,116.3L535.3,104.9L529.9,99.5L522.7,96.1L517.9,90.1L514.9,88.8L511.9,88.0L505.9,85.4L502.3,84.7L499.8,83.9L498.0,83.4L497.4,84.1L496.8,84.9L495.6,85.7L493.8,85.7L492.0,85.2L489.6,83.4L484.2,80.5L481.2,78.4L479.4,79.2L474.0,76.1L471.0,76.1L472.2,77.4L470.4,78.2L470.4,79.7L471.6,80.5L472.8,81.3L474.6,81.6L474.6,82.6L473.4,82.9L472.8,83.4L472.2,84.7L474.6,85.4L474.0,86.5L472.2,86.2L471.0,84.1L469.8,82.9L462.0,80.5L453.6,75.3L451.8,74.5L447.0,71.7L445.2,70.9L440.4,70.9L438.6,70.4L436.8,69.9L430.8,65.4L429.0,63.1L426.0,61.8L418.2,59.4L416.4,58.7L415.2,57.1L414.0,55.0L412.2,55.8L409.2,56.1L406.2,55.8L405.0,54.5L403.8,53.2L396.0,50.8L394.8,47.4L376.8,40.9L372.0,38.1L370.2,39.6L369.0,41.2L368.4,43.3L368.4,45.6L360.6,43.5L357.6,42.0L358.2,40.4L355.2,36.7L350.4,34.9L333.6,33.1L325.2,31.0L320.4,29.2L319.2,29.7L311.4,29.4L307.8,28.9L306.0,28.4L304.2,26.6L293.4,26.0L289.2,26.6L287.4,27.3L282.6,30.0L280.8,31.3L279.6,31.8L278.4,31.8L277.2,31.8L276.0,31.8L265.8,36.7L262.8,37.0L261.0,37.5L256.8,40.4L244.2,45.9L240.6,49.0L241.8,51.9L240.0,53.7L239.4,54.5L239.4,55.8L236.4,57.1L235.2,57.6L234.6,59.7L234.6,61.3L234.6,62.8L232.2,64.6L228.0,65.9L219.0,68.0L214.2,69.9L211.8,71.4L209.4,73.0L205.2,76.9L205.2,77.9L205.2,80.3L205.2,81.6L204.0,83.9L202.8,85.7L195.0,91.7L192.0,95.3L194.4,98.4L194.4,99.5L190.8,100.0L186.0,103.9L181.2,104.9L180.0,105.7L179.4,106.5L178.8,107.2L178.2,108.5L175.8,109.3L171.6,110.1L160.2,115.3L130.8,119.9L123.0,123.5L115.8,124.8L95.4,124.6L90.6,125.9L88.2,125.9L87.0,125.1L85.2,124.6L83.4,124.6L81.6,125.6L79.8,125.6L79.2,126.4L79.8,128.2L79.2,128.7L78.0,129.2L76.8,129.2L75.6,130.0L74.4,131.0L72.0,132.6L69.6,133.9L67.2,136.0L63.6,135.7L61.2,135.2L58.8,136.2L57.0,137.5L56.4,139.1L55.2,140.9L53.4,140.9L50.4,140.6L46.8,139.8L42.6,140.1L40.2,141.1L37.8,142.7L38.4,144.2L35.4,146.5L34.2,147.3L33.0,145.3L29.4,144.7L27.6,145.5L25.2,145.5L24.0,147.1L22.8,147.6L22.2,148.9L21.0,153.0L22.2,157.1L22.2,157.9L22.8,159.7L23.4,161.0L21.0,162.0L18.6,159.4L17.4,158.9L14.4,158.7L12.0,159.9L9.6,161.5L7.2,162.8L6.0,163.8L4.8,162.0L2.4,162.0L-1.2,161.8L-4.2,162.0L-6.6,163.0L-9.0,165.1L-9.6,167.4L-8.4,167.9L-7.8,168.4L-7.8,169.2L-12.6,173.3L-13.2,176.9L-16.8,178.7L-18.0,180.3L-20.0,180.4L-20.0,-18.7Z","M573.7,268.5L572.5,269.6L571.9,271.1L571.9,272.9L573.1,274.6L571.9,277.2L570.1,279.0L567.7,280.0L564.7,280.8L568.3,281.8L570.7,284.3L571.9,287.1L569.5,289.1L568.3,287.6L567.1,287.6L565.3,287.6L563.5,286.9L562.9,286.1L561.1,283.6L560.5,282.8L558.7,282.0L556.3,280.5L554.5,280.5L552.1,283.8L550.9,281.3L544.3,283.6L540.7,281.8L540.1,284.1L539.5,285.1L538.3,285.1L524.5,284.8L520.9,283.8L517.9,281.8L516.7,277.7L518.5,275.2L522.1,273.4L526.3,272.6L529.9,272.4L531.7,272.9L535.3,274.1L537.7,274.6L540.7,274.9L544.3,274.6L544.3,273.9L543.1,273.4L545.5,272.4L545.5,271.3L548.5,271.3L554.5,271.3L553.9,273.6L555.7,274.4L558.1,274.4L559.3,274.1L559.9,272.6L561.1,271.8L562.3,271.3L563.5,270.3L565.3,266.5L566.5,265.0L568.9,264.2L570.1,264.7L571.9,265.5L573.1,267.0L573.7,268.5Z","M212.4,534.4L208.2,536.4L208.2,540.3L207.6,543.6L201.6,543.3L202.8,542.1L203.4,540.6L204.0,539.1L204.0,537.9L204.6,536.6L207.0,535.1L210.0,533.2L212.4,532.4L213.0,530.7L212.4,528.7L213.0,527.2L214.2,527.0L217.2,527.2L217.8,526.7L219.0,525.2L220.8,524.2L220.8,525.2L221.4,526.2L222.0,527.2L223.8,528.5L223.8,529.9L223.8,531.9L222.0,533.2L212.4,534.4Z","M412.2,508.1L412.8,509.1L413.4,509.9L413.4,510.9L411.6,514.8L412.2,515.6L411.6,517.5L410.4,517.3L409.2,516.3L408.0,515.6L406.8,515.8L406.2,515.3L408.0,512.6L407.4,511.6L407.4,510.4L409.2,508.4L409.8,507.1L411.0,507.4L412.2,508.1Z","M405.0,509.6L405.6,510.4L399.0,511.8L396.0,511.3L395.4,510.1L395.4,508.9L396.0,508.4L397.2,507.9L398.4,507.4L399.6,506.4L399.6,505.1L401.4,504.9L402.6,504.1L403.8,504.4L404.4,505.4L405.0,506.6L405.0,507.9L405.0,509.1Z","M515.5,305.9L516.1,306.7L516.1,307.9L516.1,308.9L514.3,309.4L511.9,309.4L510.1,308.9L508.3,308.2L508.9,306.9L510.7,306.7L511.9,305.4L513.1,303.4L514.3,303.1L514.9,304.9L515.5,305.9Z","M473.4,235.4L474.0,235.9L475.8,238.4L473.4,241.3L470.4,243.8L466.8,243.8L463.8,240.7L468.0,235.1L471.0,233.8L473.4,235.4Z","M549.7,343.6L550.9,342.6L552.7,344.4L552.1,346.6L549.1,346.1L549.7,343.6Z","M409.2,298.3L413.4,302.3L409.2,298.3Z"],"pts":{"portoTorres":[233.7,566.4],"fertilia":[215,596.5],"portoVecchio":[379.8,455.7],"alassio":[195.3,91.6],"andora":[190.5,99.8],"olbia":[417.2,554]}},"sard":{"paths":["M456.6,228.0L462.8,233.1L464.6,234.8L464.6,237.4L461.9,241.7L461.0,244.2L460.2,249.8L458.4,253.6L453.0,260.9L448.6,269.9L445.9,273.3L440.5,274.6L436.1,276.3L433.4,279.7L428.9,286.9L426.3,289.9L420.0,293.8L417.4,297.2L414.7,302.3L414.7,306.1L415.6,316.8L416.5,319.3L421.8,332.1L424.5,335.5L428.1,336.8L430.7,338.0L436.1,344.4L441.4,347.4L440.5,351.2L431.6,370.3L429.8,378.4L432.5,385.2L434.3,384.3L436.1,383.5L437.0,383.5L437.9,385.2L437.0,387.3L435.2,388.2L433.4,388.2L432.5,388.6L430.7,392.0L429.8,394.9L428.9,397.9L430.7,400.9L428.9,400.9L428.9,402.1L430.7,403.0L431.6,403.8L432.5,404.3L432.5,405.5L429.8,408.9L427.2,414.0L426.3,420.4L425.4,426.3L426.3,429.7L427.2,435.6L427.2,439.4L427.2,441.9L424.5,446.2L424.5,449.5L423.6,451.2L422.7,452.9L420.9,455.9L420.9,459.3L422.7,470.2L421.8,477.0L415.6,493.4L420.0,497.6L418.3,505.6L412.0,518.7L409.3,529.6L408.4,533.4L409.3,537.2L411.1,539.3L417.4,542.7L417.4,544.4L410.2,546.5L404.0,551.9L400.4,559.1L402.2,564.9L400.4,567.5L400.4,568.7L402.2,570.0L404.0,571.7L403.1,573.7L400.4,578.8L400.4,581.3L397.7,583.4L393.3,585.1L389.7,587.2L388.8,592.2L386.2,591.4L385.3,590.5L385.3,589.3L387.1,587.2L382.6,585.1L379.0,584.7L375.5,585.5L371.9,587.2L369.2,587.2L368.3,585.1L366.5,583.8L361.2,581.7L355.0,576.3L353.2,575.4L351.4,574.2L345.2,569.6L343.4,568.3L340.7,567.9L337.1,566.6L334.5,564.9L332.7,563.3L330.9,564.9L327.3,563.3L322.9,562.4L314.0,561.6L308.6,563.3L305.0,566.6L302.4,570.0L301.5,571.7L294.3,570.0L288.1,565.8L278.3,556.5L275.6,557.8L273.8,556.5L272.1,554.4L269.4,553.2L265.8,552.3L263.1,552.8L263.1,553.6L266.7,554.4L266.7,556.5L264.9,558.6L266.7,559.5L268.5,560.3L269.4,561.6L272.1,562.0L278.3,561.2L280.1,562.4L280.1,564.5L279.2,565.4L269.4,573.7L266.7,577.1L264.9,581.7L264.0,587.6L264.9,592.2L265.8,596.8L267.6,601.0L269.4,602.3L271.2,603.5L271.2,605.6L267.6,610.6L264.9,619.4L266.7,619.4L264.0,620.7L263.1,620.3L261.4,619.4L258.7,622.4L233.7,642.4L231.9,642.8L229.3,643.3L228.4,644.1L225.7,647.4L223.9,648.3L220.4,647.9L217.7,645.8L211.4,641.6L211.4,646.6L207.9,642.0L202.5,637.8L195.4,635.3L190.0,634.9L184.7,636.6L177.6,640.3L174.0,644.9L174.9,649.9L171.3,651.6L169.5,649.9L171.3,645.3L169.5,644.1L165.1,644.1L160.6,643.3L160.6,641.6L165.1,637.4L165.1,631.1L161.5,627.0L156.2,627.8L154.4,614.8L150.8,603.9L149.0,603.9L147.3,605.6L141.0,603.1L137.4,602.7L138.3,601.4L141.0,597.6L137.4,595.6L132.1,598.1L132.1,597.2L130.3,595.6L129.4,591.4L127.6,588.4L125.0,587.2L122.3,588.8L120.5,586.3L121.4,580.0L120.5,577.1L118.7,575.0L116.1,574.2L114.3,574.6L115.2,577.1L113.4,576.3L112.5,575.0L111.6,573.3L111.6,570.8L110.7,568.3L109.8,567.5L108.0,567.5L106.2,566.6L104.5,562.8L104.5,560.7L105.4,559.1L117.8,547.7L119.6,543.1L115.2,537.6L116.1,533.8L107.1,528.8L105.4,524.2L106.2,521.6L110.7,517.9L111.6,515.8L112.5,512.0L112.5,509.9L108.9,503.1L108.0,502.3L108.0,501.4L109.8,498.5L116.9,491.7L120.5,487.5L124.1,479.1L126.8,474.5L125.0,472.8L127.6,469.4L126.8,464.3L124.1,454.2L123.2,442.8L122.3,440.2L122.3,438.6L123.2,436.0L122.3,429.7L123.2,428.0L125.9,428.8L128.5,430.1L136.6,439.8L140.1,443.2L145.5,444.9L152.6,443.6L140.1,440.2L137.4,438.6L137.4,434.3L141.0,430.1L144.6,425.9L147.3,422.9L145.5,422.9L144.6,424.6L143.7,426.3L142.8,427.1L141.0,428.0L143.7,425.4L146.4,421.6L148.1,417.0L149.0,413.6L149.9,405.5L149.0,402.6L147.3,399.2L141.9,394.1L134.8,390.7L126.8,390.3L120.5,394.1L122.3,395.4L122.3,394.1L124.1,393.7L125.0,394.1L126.8,394.1L124.1,395.4L122.3,397.9L120.5,404.3L118.7,402.1L120.5,399.6L118.7,397.5L116.1,395.8L112.5,392.8L111.6,392.8L110.7,392.4L109.8,390.3L109.8,388.6L110.7,386.9L111.6,385.2L111.6,383.5L109.8,374.2L109.8,371.6L113.4,366.1L113.4,363.1L109.8,359.3L106.2,361.0L105.4,360.1L108.0,358.0L111.6,355.9L112.5,355.9L119.6,355.9L124.1,354.6L125.9,354.2L128.5,352.9L131.2,350.0L133.0,346.1L133.9,342.3L132.1,338.9L128.5,332.1L126.8,327.4L125.9,314.2L130.3,302.3L130.3,295.0L126.8,289.1L121.4,284.8L115.2,281.4L113.4,283.5L108.0,279.7L107.1,275.0L109.8,261.7L108.9,257.0L106.2,250.2L102.7,244.2L99.1,241.7L94.7,239.5L92.9,234.4L91.1,228.4L89.3,222.4L84.9,218.1L78.6,218.5L66.1,224.5L60.8,222.4L63.5,217.7L66.1,213.8L59.9,212.5L56.3,215.5L53.7,220.3L52.8,226.3L50.1,222.8L49.2,218.5L47.4,212.1L47.4,210.8L51.9,208.7L55.4,206.5L58.1,202.7L59.0,196.7L59.9,196.7L60.8,195.4L61.7,193.7L59.9,193.3L56.3,192.8L55.4,192.4L53.7,191.1L50.1,186.8L48.3,185.1L45.6,184.2L64.4,149.4L66.1,145.6L66.1,140.8L64.4,137.0L59.9,135.7L56.3,133.5L57.2,129.2L59.9,124.5L62.6,121.5L64.4,121.5L65.2,124.5L67.0,124.9L68.8,124.9L70.6,126.6L70.6,128.8L69.7,131.8L68.8,135.2L69.7,138.3L81.3,149.4L89.3,153.3L116.9,156.3L130.3,159.3L136.6,159.8L141.0,159.3L160.6,152.9L165.1,149.4L169.5,145.6L171.3,141.7L188.3,135.7L194.5,135.2L198.1,135.7L201.6,137.4L215.9,128.8L220.4,124.9L229.3,113.3L231.9,111.1L231.9,110.3L230.2,109.4L238.2,106.8L240.9,106.0L242.6,104.2L245.3,99.5L247.1,98.6L249.8,97.3L254.2,94.3L257.8,90.4L261.4,84.0L265.8,82.2L282.8,80.5L286.3,79.6L293.5,74.4L295.2,76.2L298.8,72.3L300.6,68.0L300.6,57.6L302.4,53.3L306.8,51.1L312.2,49.8L317.5,48.1L317.5,50.2L319.3,51.5L321.1,52.0L323.8,51.5L326.4,54.6L326.4,63.6L329.1,65.4L328.2,64.1L327.3,62.8L328.2,61.1L329.1,58.5L330.9,58.5L331.8,61.9L331.8,62.8L330.9,63.6L330.9,65.4L334.5,64.9L335.3,64.5L337.1,63.6L338.0,64.9L342.5,67.1L343.4,61.1L346.9,62.3L355.9,69.3L355.9,67.1L358.5,68.4L360.3,68.8L362.1,69.3L364.8,69.3L364.8,70.6L363.0,71.4L363.0,72.3L362.1,73.2L361.2,74.4L363.9,75.3L365.7,77.0L367.4,79.2L369.2,81.4L368.3,83.1L368.3,85.7L369.2,91.7L372.8,86.5L373.7,84.4L376.4,83.1L375.5,81.8L375.5,80.9L374.6,80.1L372.8,79.2L376.4,77.9L379.0,77.9L382.6,78.8L386.2,79.2L387.1,78.8L387.9,77.0L389.7,77.0L391.5,79.2L389.7,81.4L392.4,82.7L394.2,84.0L395.1,84.4L396.9,83.1L398.6,83.1L398.6,84.0L399.5,84.4L400.4,84.8L399.5,87.8L399.5,90.4L397.7,93.0L395.1,95.6L395.1,94.3L394.2,93.0L393.3,91.7L388.8,107.2L387.1,111.1L391.5,111.1L389.7,107.2L394.2,106.0L396.9,106.4L397.7,109.0L396.9,112.9L397.7,112.9L398.6,112.4L398.6,111.6L400.4,112.4L402.2,112.9L405.8,109.8L412.9,110.3L419.1,112.4L424.5,114.6L420.9,117.6L417.4,117.2L413.8,115.4L409.3,114.6L405.8,116.3L404.0,120.2L403.1,124.9L400.4,128.4L401.3,131.8L397.7,132.7L387.1,131.8L386.2,133.1L387.1,133.5L385.3,134.0L387.1,137.0L388.8,137.0L390.6,135.7L393.3,135.7L396.0,136.5L400.4,138.7L402.2,139.1L406.7,138.3L410.2,136.1L413.8,134.8L419.1,135.7L417.4,137.8L416.5,139.6L414.7,140.4L412.0,140.8L412.0,142.6L420.9,146.0L422.7,146.9L422.7,149.9L424.5,151.2L426.3,151.2L428.9,149.4L430.7,152.0L433.4,153.3L436.1,154.2L439.6,154.6L430.7,157.2L428.9,158.5L430.7,161.9L430.7,163.6L427.2,162.8L423.6,164.1L422.7,166.2L425.4,168.8L426.3,165.8L427.2,169.2L434.3,176.5L436.1,180.0L437.0,184.7L444.1,196.7L445.0,200.1L446.8,215.5L447.7,218.1L448.6,220.3L450.3,221.1L453.9,221.5L454.8,223.3L454.8,225.4L456.6,228.0Z","M344.3,-30.9L340.7,-28.7L336.2,-27.8L334.5,-26.5L332.7,-23.9L330.0,-21.3L325.5,-20.9L326.4,-19.1L326.4,-17.4L326.4,-15.2L325.5,-13.5L328.2,-12.6L329.1,-10.9L328.2,-8.3L325.5,-6.5L327.3,-4.8L322.9,-3.5L316.6,-0.0L312.2,0.4L312.2,2.2L314.8,3.9L315.7,5.6L314.8,7.8L312.2,9.5L312.2,10.8L314.8,10.0L319.3,6.9L322.0,5.6L321.1,9.5L319.3,13.9L316.6,17.8L314.8,19.9L311.3,21.7L307.7,20.8L301.5,16.5L297.9,15.2L289.9,14.3L283.6,12.1L286.3,5.2L288.1,4.3L289.9,3.9L286.3,1.3L280.1,-0.9L276.5,-3.1L280.1,-6.5L280.1,-8.3L276.5,-7.4L269.4,-3.1L267.6,-4.8L268.5,-5.2L269.4,-5.7L269.4,-6.5L266.7,-6.1L265.8,-5.7L264.9,-4.8L263.1,-6.5L260.5,-8.7L254.2,-10.0L248.0,-10.9L244.4,-10.0L241.7,-11.7L239.1,-13.5L237.3,-14.8L231.1,-15.6L230.2,-16.5L230.2,-17.8L228.4,-18.7L226.6,-19.6L224.8,-19.6L222.1,-19.6L220.4,-20.9L223.9,-22.6L223.9,-24.3L220.4,-25.2L218.6,-26.1L216.8,-25.6L213.2,-26.5L209.7,-27.4L208.8,-28.7L209.2,-30.9Z","M125.0,599.7L125.9,601.4L126.8,601.8L128.5,601.8L130.3,601.0L131.2,600.2L132.1,601.0L127.6,603.9L125.9,605.6L126.8,607.7L125.0,611.1L123.2,619.4L120.5,626.1L119.6,627.4L116.9,627.8L114.3,627.8L112.5,626.5L112.5,624.4L111.6,622.8L102.7,611.1L99.1,602.7L100.0,597.6L100.0,595.6L98.2,595.6L98.2,593.9L101.8,588.8L108.0,592.2L116.1,591.8L122.3,592.6L125.0,599.7Z","M80.4,100.8L74.2,104.2L74.2,111.1L73.3,116.7L64.4,116.3L66.1,114.1L67.0,111.6L67.9,109.0L67.9,106.8L68.8,104.7L72.4,102.1L76.8,98.6L80.4,97.3L81.3,94.3L80.4,90.9L81.3,88.3L83.1,87.8L87.5,88.3L88.4,87.4L88.4,86.1L90.2,84.8L92.9,83.1L92.9,84.8L93.8,86.5L94.7,88.3L97.3,90.4L97.3,93.0L97.3,96.5L94.7,98.6L80.4,100.8Z","M366.5,57.6L367.4,58.9L367.4,59.8L357.6,61.5L353.2,60.6L352.3,58.5L352.3,56.3L353.2,55.4L355.0,54.6L356.7,53.7L358.5,52.0L358.5,49.8L359.4,49.4L361.2,49.4L363.0,48.1L364.8,48.5L365.7,50.2L366.5,52.4L366.5,54.6L366.5,56.7L366.5,57.6Z","M377.2,55.0L378.1,56.7L379.0,58.0L379.0,59.8L376.4,66.7L377.2,68.0L377.2,69.3L376.4,71.4L374.6,71.0L372.8,69.3L371.0,68.0L369.2,68.4L368.3,67.5L371.0,62.8L370.1,61.1L370.1,58.9L372.8,55.4L373.7,53.3L375.5,53.7L377.2,55.0Z","M88.4,570.0L88.4,578.4L89.3,588.4L88.4,592.2L84.0,593.5L79.5,593.5L75.0,591.8L75.9,588.8L75.9,587.2L69.7,582.6L67.9,579.2L69.7,575.4L73.3,573.3L84.0,571.2L88.4,570.0Z","M549.7,-30.9L549.7,709.6L549.7,-30.9Z"],"pts":{"portoTorres":[111.9,156.5],"fertilia":[84.2,208.9],"bosa":[135.4,294],"olbia":[384.6,134.9],"cannigione":[369.7,87.7],"portisco":[389.3,110.1],"sanTeodoro":[425.9,172.1],"costaSmeralda":[392.5,82],"sassari":[150.8,184.8],"alghero":[90.9,227.2]}}};

/* sea routing for the delivery planner: ports and offshore waypoints [lat, lon], edges that stay at sea */
const SEA={
 ports:{
  portoTorres:[40.840,8.400,"s"],stintino:[40.940,8.230,"s"],castelsardo:[40.915,8.705,"s"],alghero:[40.562,8.312,"s"],fertilia:[40.598,8.290,"s"],bosa:[40.287,8.467,"s"],
  santaTeresa:[41.240,9.193,"s"],palau:[41.180,9.385,"s"],laMaddalena:[41.212,9.408,"s"],cannigione:[41.107,9.443,"s"],portoCervo:[41.135,9.537,"s"],portisco:[41.032,9.524,"s"],olbia:[40.923,9.510,"s"],sanTeodoro:[40.808,9.690,"s"],
  bonifacio:[41.388,9.160,"c"],portoVecchio:[41.590,9.285,"c"],ajaccio:[41.918,8.740,"c"],calvi:[42.567,8.758,"c"],bastia:[42.698,9.452,"c"],
  genova:[44.405,8.920,"l"],laSpezia:[44.100,9.830,"l"],alassio:[44.005,8.172,"l"],andora:[43.955,8.150,"l"],sanremo:[43.815,7.785,"l"],monaco:[43.735,7.425,"l"],nizza:[43.695,7.285,"l"],antibes:[43.585,7.128,"l"],
  livorno:[43.545,10.300,"t"],portoferraio:[42.815,10.330,"t"]},
 wp:{GA:[41.07,8.45],ASN:[41.22,8.40],ASW:[41.00,7.96],CAC:[40.56,8.02],ALG:[40.57,8.20],BOS:[40.30,8.38],
  BON:[41.36,9.13],BW:[41.30,8.95],BM:[41.33,9.20],BE:[41.38,9.45],NE:[41.16,9.62],FIG:[41.02,9.70],OLB:[40.955,9.66],TAV:[40.92,9.85],
  PV:[41.60,9.42],CE:[42.10,9.65],BAS:[42.70,9.60],CC:[43.08,9.42],ELB:[42.88,10.20],LIV:[43.50,10.15],LC:[43.70,8.90],LW:[43.55,7.90],
  CNW:[42.65,8.55],CW:[41.85,8.50],CSW:[41.50,8.72]},
 edges:"portoTorres-GA castelsardo-GA stintino-GA GA-BW GA-ASN ASN-ASW ASW-CAC CAC-ALG alghero-ALG fertilia-ALG ALG-BOS bosa-BOS "+
  "santaTeresa-BM santaTeresa-BW bonifacio-BON BON-BW BON-BM BW-BM BM-BE palau-BE laMaddalena-BE BE-NE cannigione-NE portoCervo-NE NE-FIG portisco-FIG FIG-OLB olbia-OLB OLB-TAV FIG-TAV NE-TAV sanTeodoro-TAV "+
  "portoVecchio-PV PV-BE PV-NE PV-CE CE-BAS bastia-BAS BAS-CC BAS-ELB portoferraio-ELB ELB-LIV livorno-LIV ELB-CC LIV-laSpezia LIV-LC CC-LC LC-genova LC-laSpezia LC-alassio LC-andora LC-LW "+
  "LW-sanremo LW-monaco LW-nizza LW-antibes LW-alassio LW-andora LW-genova calvi-CNW CNW-LW CNW-LC CNW-CC ajaccio-CW CW-CNW CW-CSW CSW-BW CW-ASN ASN-LW ASN-CNW"
};

const PAST_ROUTES=[["portoTorres","andora"],["alassio","portoTorres"],["fertilia","portoVecchio"]];
const PORT_NAMES={portoTorres:"Porto Torres",stintino:"Stintino",castelsardo:"Castelsardo",alghero:"Alghero",fertilia:"Fertilia",bosa:"Bosa",
  santaTeresa:"Santa Teresa di Gallura",palau:"Palau",laMaddalena:"La Maddalena",cannigione:"Cannigione",portoCervo:"Porto Cervo",portisco:"Portisco",olbia:"Olbia",sanTeodoro:"San Teodoro",
  bonifacio:"Bonifacio",portoVecchio:"Porto Vecchio",ajaccio:"Ajaccio",calvi:"Calvi",bastia:"Bastia",
  genova:"Genova",laSpezia:"La Spezia",alassio:"Alassio",andora:"Marina di Andora",sanremo:"Sanremo",monaco:"Monaco",nizza:"Nizza",antibes:"Antibes",
  livorno:"Livorno",portoferraio:"Portoferraio (Elba)"};
const portName=k=>(T[lang].plan.names||{})[k]||PORT_NAMES[k]||k;
// Mercator fit of the routes map (viewBox 600 x 760)
const geoXY=([la,lo])=>[167.05*lo-1170.18,-110.10*Math.log(Math.tan(Math.PI/4+la*Math.PI/360))*180/Math.PI+5498.51];
function seaRoute(a,b){
  if(a===b) return null;
  const N=Object.assign({},SEA.ports,SEA.wp), adj={};
  const R=Math.PI/180, nm=(p,q)=>{const dl=(q[0]-p[0])*R, dn=(q[1]-p[1])*R, h=Math.sin(dl/2)**2+Math.cos(p[0]*R)*Math.cos(q[0]*R)*Math.sin(dn/2)**2; return 3440.065*2*Math.asin(Math.sqrt(h));};
  SEA.edges.split(/\s+/).forEach(e=>{const [u,v]=e.split("-"); const d=nm(N[u],N[v]); (adj[u]=adj[u]||[]).push([v,d]); (adj[v]=adj[v]||[]).push([u,d]);});
  const dist={[a]:0}, prev={}, todo=new Set(Object.keys(N));
  while(todo.size){ let u=null; todo.forEach(k=>{ if(dist[k]!=null&&(u==null||dist[k]<dist[u])) u=k; }); if(u==null||u===b) break; todo.delete(u);
    (adj[u]||[]).forEach(([v,d])=>{ if(SEA.ports[v]&&v!==b) return; const nd=dist[u]+d; if(dist[v]==null||nd<dist[v]){dist[v]=nd;prev[v]=u;} }); }
  if(dist[b]==null) return null;
  const path=[b]; while(path[0]!==a) path.unshift(prev[path[0]]);
  return {nm:dist[b], pts:path.map(k=>N[k])};
}
function smoothPath(P){ // Catmull-Rom through the points
  let d=`M${P[0][0].toFixed(1)},${P[0][1].toFixed(1)}`;
  for(let i=0;i<P.length-1;i++){
    const p0=P[i-1]||P[i], p1=P[i], p2=P[i+1], p3=P[i+2]||p2, k=.18;
    d+=` C${(p1[0]+(p2[0]-p0[0])*k).toFixed(1)},${(p1[1]+(p2[1]-p0[1])*k).toFixed(1)} ${(p2[0]-(p3[0]-p1[0])*k).toFixed(1)},${(p2[1]-(p3[1]-p1[1])*k).toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

function mapSVG(kind){
  const g = kind==="routes" ? GEO.routes : GEO.sard;
  const x0 = kind==="routes" ? 0 : -140, w = kind==="routes" ? 600 : 800, h = kind==="routes" ? 760 : 680;
  let s = `<svg viewBox="${x0} 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid meet">`;
  s += `<rect x="${x0}" width="${w}" height="${h}" class="m-sea"/>`;
  if(kind==="sard") s += `<text x="640" y="655" class="m-region" text-anchor="end">SARDEGNA</text>`;
  const big = g.paths[0];
  g.paths.forEach((d,i)=>{ s += `<path d="${d}" class="${kind==="sard"&&i===0?"m-land-hi":"m-land"}"/>`; });
  const dot=(x,y,r,cls)=>`<circle cx="${x}" cy="${y}" r="${r}" class="${cls}"/>`;
  if(kind==="sard"){
    const P=g.pts;
    const ports=[["portoTorres","Porto Torres",1,0],["alghero","Alghero e Fertilia",-1,0],["bosa","Bosa",-1,0],
      ["cannigione","Cannigione",-1,-6],["costaSmeralda","Costa Smeralda",1,-8],["portisco","Portisco",1,6],
      ["olbia","Olbia",1,2],["sanTeodoro","San Teodoro",1,0]];
    ports.forEach(([k,label,side,dy])=>{
      const [x,y]=P[k];
      s += `<circle cx="${x}" cy="${y}" r="5.5" fill="#3F6E9C" stroke="#fff" stroke-width="2" class="m-port" data-port="${k}"><title>${label}</title></circle>`;
      s += `<text x="${x+(side>0?12:-12)}" y="${y+4+dy}" class="m-label" text-anchor="${side>0?"start":"end"}">${label}</text>`;
    });
  } else {
    PAST_ROUTES.forEach(([a,b],i)=>{ const r=seaRoute(a,b); if(r) s += `<path d="${smoothPath(r.pts.map(geoXY))}" class="m-past" data-i="${i}"/>`; });
    Object.keys(SEA.ports).forEach(k=>{ const [x,y]=geoXY(SEA.ports[k]); s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" class="m-pt" data-k="${k}"/>`; });
    s += `<g id="plan-g"></g>`;
    s += `<text x="72" y="52" class="m-region">LIGURIA</text>`;
    s += `<text x="300" y="424" class="m-region" text-anchor="middle">CORSICA</text>`;
    s += `<text x="300" y="714" class="m-region" text-anchor="middle">SARDEGNA</text>`;
  }
  s += `</svg>`;
  return s;
}

/* =======================================================
   APP
   ======================================================= */
const LANGS=["it","en","fr","de","es"];
const LANG_NAMES={it:"Italiano",en:"English",fr:"Français",de:"Deutsch",es:"Español"};
const PAGES=["home","pulizia","trasferimenti","contatti"];
const $=q=>document.querySelector(q), $$=q=>document.querySelectorAll(q);
/* Built multi-page site: each page carries its language, page id and path to the site root.
   The single-file source (src/index.html) has none of these and keeps hash routing. */
const ROOT=document.documentElement, MPA=!!ROOT.dataset.page, BASE=ROOT.dataset.base||"";
const A=u=>/^(data:|https?:)/.test(u)?u:BASE+u;            // asset URL relative to this page
const $h=q=>document.querySelector(q)||document.createElement("input"); // write target that may be absent on this page
const navHref=p=>{const a=$(`#nav a[data-p="${p}"]`);return MPA&&a?a.getAttribute("href"):"#"+p;};
const altHref=l=>{const a=$(`link[rel="alternate"][hreflang="${l}"]`);return a?(a.dataset.rel||a.getAttribute("href")):null;};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

const qs=new URLSearchParams(location.search);
let lang=MPA?ROOT.lang:qs.get("lang");
if(!LANGS.includes(lang)){ const n=(navigator.language||"it").slice(0,2).toLowerCase(); lang=LANGS.includes(n)?n:"it"; }
let page=MPA?ROOT.dataset.page:"home", mapOK=false;

const t=p=>p.split(".").reduce((o,k)=>o==null?o:o[k],T[lang])??"";
const fill=s=>String(s).replaceAll("{owner}",CONFIG.owner).replaceAll("{email}",CONFIG.email).replaceAll("{base}",CONFIG.base);

function applyConfig(){
  const show=Object.assign({},CONFIG,{
    igShow:"@"+CONFIG.instagram,
    ytShow:"@"+CONFIG.youtube,
    vatLabel: CONFIG.vat ? "P. IVA "+CONFIG.vat : CONFIG.owner
  });
  $$("[data-c]").forEach(el=>el.textContent=show[el.dataset.c]||"");
  const H={tel:"tel:+"+CONFIG.phoneIntl,mail:"mailto:"+CONFIG.email,
    wa:"https://wa.me/"+CONFIG.phoneIntl,ig:"https://instagram.com/"+CONFIG.instagram,yt:"https://www.youtube.com/@"+CONFIG.youtube,gmaps:CONFIG.mapLink};
  $$("[data-h]").forEach(el=>el.setAttribute("href",H[el.dataset.h]));
  $h("#yr").textContent=new Date().getFullYear();
}

function lists(){
  const L=T[lang];
  const li=a=>a.map(x=>`<li>${esc(x)}</li>`).join("");
  $h("#home-c1").innerHTML=li(L.home.c1);
  $h("#home-c2").innerHTML=li(L.home.c2);
  const icons=['<path d="M12 3c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z"/>',
               '<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',
               '<path d="M4 7h16M4 12h10M4 17h7"/><circle cx="18" cy="16" r="3"/>'];
  $h("#home-why").innerHTML=L.home.why.map((w,i)=>
    `<div><h3>${esc(w.t)}</h3><p>${esc(w.d)}</p></div>`).join("");
  $h("#clean-groups").innerHTML=L.clean.groups.map(g=>`<div class="group"><h3>${esc(g.t)}</h3><ul class="checks">${li(g.items)}</ul></div>`).join("");
  $h("#meta-c1").innerHTML=L.home.c1meta.map(m=>`<span>${esc(m)}</span>`).join("");
  $h("#meta-c2").innerHTML=L.home.c2meta.map(m=>`<span>${esc(m)}</span>`).join("");
  $h("#clean-ports").innerHTML=li(L.clean.ports);
  const steps=a=>a.map(s=>`<li><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></li>`).join("");
  $h("#clean-steps").innerHTML=steps(L.clean.steps);
  $h("#deliv-steps").innerHTML=steps(L.deliv.steps);
  $h("#deliv-routes").innerHTML=L.deliv.routes.map((r,i)=>{
    const [a,b]=r.split("→");
    return `<li><button type="button" data-i="${i}"><span>${esc(a.trim())}</span><span class="arw" aria-hidden="true"></span><span>${esc(b.trim())}</span><span class="nm"></span></button></li>`;
  }).join("");
  const col=(c,cls,k)=>`<div class="${cls}"><h3><span class="k" aria-hidden="true">${k}</span>${esc(c.t)}</h3><ul>${c.items.map(i=>`<li><b>${esc(i.b)}</b><span>${esc(i.s)}</span></li>`).join("")}</ul></div>`;
  $h("#deliv-costs").innerHTML=col(L.deliv.costIncl,"incl","")+col(L.deliv.costExcl,"excl","");
  $h("#deliv-faq").innerHTML=L.deliv.faq.map(f=>`<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");
  $h("#pv-body").innerHTML=L.privacy.paras.map(p=>`<p>${esc(fill(p))}</p>`).join("");
  const checked=new Set([...$$("#f-chips input:checked")].map(i=>i.value));
  $h("#f-chips").innerHTML=Object.entries(L.form.chips).map(([k,v])=>
    `<input type="checkbox" id="wo-w-${k}" value="${k}"${checked.has(k)?" checked":""}><label for="wo-w-${k}">${esc(v)}</label>`).join("");
  $h("#lang-menu").innerHTML=LANGS.map(l=>MPA&&altHref(l)
    ? `<li><a href="${altHref(l)}" hreflang="${l}" lang="${l}"${l===lang?' aria-current="true"':""}>${LANG_NAMES[l]}</a></li>`
    : `<li><button type="button" data-lang="${l}" aria-pressed="${l===lang}">${LANG_NAMES[l]}</button></li>`).join("");
}

/* =======================================================
   WORK ORDER (scheda lavoro) quote form
   ======================================================= */
const WO={
es:{modeIntro:"Cuantos más detalles nos des, más preciso será el presupuesto. Pero basta con un mensaje: nosotros te contactamos.",modeLabel:"Cómo quieres escribirnos",modeFull:"Formulario detallado",modeQuick:"Solo un mensaje",optional:"opcional",msgLbl:"Mensaje",msgPh:"Cuéntanos qué necesitas: barco, puerto, trabajos, fechas…",errMsg:"Escribe un par de líneas sobre lo que necesitas.",toSet:"por indicar",s1:"El barco",s1h:"Tipo y eslora total.",typeLabel:"Tipo de barco",t0:"Vela",t1:"Motor",t2:"Catamarán",full:["Velero","Barco a motor","Catamarán"],
  planLabel:"Plano del barco: toca las zonas que limpiar",lenLabel:"Eslora en metros",meters:"metros",both:"limpieza y traslado",cleanOnly:"solo limpieza (traslados hasta 20 m)",
  zones:{gom:"Neumática",ext:"Exterior y cubierta",gel:"Gel coat y casco",int:"Interior",sails:"Guardado de velas"},
  s2:"Qué hay que hacer",s2h:"Toca las zonas en el plano, o elige aquí.",s3:"¿Dónde está el barco?",s3h:"Puerto donde hacemos el trabajo.",other:"Otro",otherLbl:"¿Qué puerto?",otherPh:"p. ej. Olbia, Portisco, Cannigione…",
  s4:"¿A quién respondemos?",s4h:"Te escribimos con el presupuesto.",model:"Modelo",modelPh:"p. ej. Bavaria 46",note:"Notas para nosotros",notePh:"Fechas, acceso al barco, cosas que saber…",
  tkTitle:"Orden de trabajo",tkBoat:"Barco",tkLen:"Eslora",tkPort:"Puerto",tkWorks:"Trabajos",toChoose:"por elegir",noneYet:"ninguno aún",
  send:"Enviar la orden por WhatsApp",sent:"Orden lista, abriendo WhatsApp…",mail:"¿Prefieres el correo?",mailSent:"Abriendo tu correo con la orden ya escrita.",
  waHelp:"Si WhatsApp no se abre, usa el correo.",errName:"Escribe tu nombre: lo necesitamos para responderte.",intro:"Orden de trabajo"}
};
const w=k=>(WO[lang]||WO.it)[k];
const WO_ZONES=["gom","ext","gel","int","sails"];
const woTouched={type:false,len:false};
const woMode=()=>(($("input[name=wo-mode]:checked")||{}).value==="quick"?"quick":"full");

function woRender(){
  const L=T[lang];
  $$("[data-w]").forEach(el=>el.textContent=w(el.dataset.w));
  $$("[data-wa]").forEach(el=>el.setAttribute("aria-label",w(el.dataset.wa)));
  $$("[data-wp]").forEach(el=>el.placeholder=w(el.dataset.wp));
  $$(".wo-z").forEach(z=>{ const n=w("zones")[z.dataset.k]; z.setAttribute("aria-label",n); z.querySelector("title").textContent=n; });
  $h("#wo-date").textContent=new Date().toLocaleDateString(lang,{day:"2-digit",month:"short",year:"numeric"});
  woSync();
}
function woFlash(id){ const el=$(id); el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash"); }
function woPort(){ return $h("#f-port").value.trim(); }
function woSync(){
  const type=+($("input[name=wo-type]:checked")||{value:0}).value;
  $h("#wo-plan").dataset.type=type;
  const mode=woMode(); $h("#wo-log").dataset.mode=mode; $h(".wo").dataset.mode=mode;
  $h("#wo-ln-msg label").textContent=w(mode==="quick"?"msgLbl":"note"); $h("#f-msg").placeholder=w(mode==="quick"?"msgPh":"notePh");
  const len=+$h("#wo-len").value, p=(len-5)/25*100;
  $h("#wo-len").style.setProperty("--p",p+"%"); $h("#wo-len").setAttribute("aria-valuetext",len+" "+w("meters"));
  $h("#wo-len-out").textContent=len+" m";
  $h("#wo-hull").style.transform=`scale(${(0.62+p/100*0.38).toFixed(3)})`;
  WO_ZONES.forEach(k=>{ const cb=$(`#f-chips input[value="${k}"]`), on=!!(cb&&cb.checked);
    $$(`.wo-z[data-k="${k}"]`).forEach(z=>{ z.classList.toggle("on",on); z.setAttribute("aria-checked",on); }); });
  $$(".wo-rig").forEach(g=>g.classList.toggle("on",!!($('#f-chips input[value="sails"]')||{}).checked));
  const model=$h("#f-boat").value.trim();
  const boatTxt=[woTouched.type?w("full")[type]:"",model].filter(Boolean).join(" · ");
  $h("#wo-o-boat").textContent=boatTxt||w("toSet"); $h("#wo-o-boat").classList.toggle("empty",!boatTxt);
  $h("#wo-o-len").textContent=woTouched.len?len+" m":w("toSet"); $h("#wo-o-len").classList.toggle("empty",!woTouched.len);
  const port=woPort(); $h("#wo-o-port").textContent=port||w("toChoose"); $h("#wo-o-port").classList.toggle("empty",!port);
  const picked=[...$$("#f-chips input:checked")].map(i=>T[lang].form.chips[i.value]);
  $h("#wo-o-works").innerHTML=picked.length?picked.map(x=>`<span class="pill">${esc(x)}</span>`).join(""):esc(w("noneYet"));
  $h("#wo-o-works").classList.toggle("empty",!picked.length);
  const n=$h("#f-name").value.trim(); $h("#wo-o-name").textContent=n||"—"; $h("#wo-o-name").classList.toggle("empty",!n);
}
(function woWire(){
  const toggle=z=>{ const cb=$(`#f-chips input[value="${z.dataset.k}"]`); if(!cb) return; cb.checked=!cb.checked; woSync(); woFlash("#wo-o-works"); };
  $$(".wo-z").forEach(z=>{ z.addEventListener("click",()=>toggle(z));
    z.addEventListener("keydown",e=>{ if(e.key===" "||e.key==="Enter"){ e.preventDefault(); toggle(z); } }); });
  $h(".wo").addEventListener("change",e=>{ if(e.target.name==="wo-type") woTouched.type=true; woSync();
    if(e.target.closest("#f-chips")) woFlash("#wo-o-works");
    else if(e.target.name==="wo-type") woFlash("#wo-o-boat"); });
  $h(".wo").addEventListener("input",e=>{ if(e.target.id==="f-name"){ $h("#wo-ln-name").classList.remove("err"); $h("#f-err").textContent=""; }
    if(e.target.id==="f-msg"){ $h("#wo-ln-msg").classList.remove("err"); $h("#f-err2").textContent=""; }
    if(e.target.id==="wo-len") woTouched.len=true; woSync(); if(e.target.id==="f-port") woFlash("#wo-o-port"); });
})();

function applyLang(){
  document.documentElement.lang=lang;
  $$("[data-t]").forEach(el=>el.textContent=t(el.dataset.t));
  $$("[data-tp]").forEach(el=>el.placeholder=t(el.dataset.tp));
  $$("[data-ta]").forEach(el=>{const v=t(el.dataset.ta);el.setAttribute("aria-label",v);if(el.tagName==="IMG")el.alt=v;});
  $$("[data-tt]").forEach(el=>el.title=t(el.dataset.tt));
  $$(".mapfig svg").forEach(s=>s.setAttribute("aria-label",t("map.capHome")));
  $h("#lang-cur").textContent=lang.toUpperCase();
  lists(); woRender();
  $h("#f-err").textContent="";
  wireMaps(); wireFaq(); wireCalc(); wirePreview(); wireRose(); renderAvail(); wireVideo();
  $h("#mbar-q").textContent=t("ui.quote"); $h("#mbar-wa").textContent="WhatsApp";
  $h(".wa").setAttribute("data-tip",t("ui.whatsapp")); toTop.setAttribute("aria-label",t("ui.top"));
  $h("#mbar-wa").href="https://wa.me/"+CONFIG.phoneIntl;
  primeReveal(); movePill();
  title();
  if(!MPA) history.replaceState(null,"","?lang="+lang+location.hash);
}

function title(){
  const n=t("nav."+({home:"home",pulizia:"clean",trasferimenti:"deliv",contatti:"contact"}[page]));
  document.title=(page==="home"?"":n+" · ")+"Sail&Clean, "+t("footer.blurb").replace(/\.$/,"");
}

function route(first){
  if(MPA){ document.body.dataset.page=page; title(); movePill(); primeReveal(); revealVisible(); onScroll();
    if(page==="home") $$(".trust b").forEach(countUp); return; }
  const id=location.hash.slice(1);
  if(!PAGES.includes(id)&&!first) return;
  page=PAGES.includes(id)?id:"home";
  const swap=()=>{ document.body.dataset.page=page; $$(".page").forEach(p=>p.hidden=p.dataset.p!==page); if(!first) window.scrollTo(0,0); };
  const finish=()=>{ movePill(); primeReveal(); revealVisible(); onScroll(); if(page==="home") $$(".trust b").forEach(countUp);
    if(!first){ const h=$(`.page[data-p="${page}"] h1`); if(h) h.focus({preventScroll:true}); } };
  if(first||RM){ swap(); } else { $h("#main").classList.add("fade"); setTimeout(()=>{ swap(); finish(); requestAnimationFrame(()=>$h("#main").classList.remove("fade")); },200); }
  $$("#nav a, footer nav a").forEach(a=>{
    a.getAttribute("href")==="#"+page?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current");
  });
  $h("#nav").classList.remove("open");
  $h(".burger").setAttribute("aria-expanded","false");
  title();
  if(first||RM){ movePill(); primeReveal(); revealVisible(); onScroll(); if(page==="home") $$(".trust b").forEach(countUp); }
}
function revealVisible(){
  $$(`.page[data-p="${page}"] .rv:not(.in)`).forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.top<innerHeight*1.05){ el.style.transitionDelay="0ms"; el.classList.add("in"); io.unobserve(el); }
  });
}

function consent(v){
  mapOK=v;
  try{ localStorage.setItem("sc-consent",v?"1":"0"); }catch(e){}
  const f=$h("#gmap");
  if(v){ if(!f.src) f.src=CONFIG.mapEmbed; f.hidden=false; $h("#gmap-ph").hidden=true; }
  else { f.removeAttribute("src"); f.hidden=true; $h("#gmap-ph").hidden=false; }
  banner(false);
}
function banner(show){ $h("#ck").hidden=!show; document.body.classList.toggle("ck-on",show); }

function compose(){
  const L=T[lang];
  const v=id=>$h(id).value.trim();
  const name=v("#f-name"), mode=woMode(), msg=v("#f-msg");
  $h("#f-err").textContent=""; $h("#f-err2").textContent="";
  if(!name){ $h("#f-err").textContent=w("errName"); $h("#wo-ln-name").classList.add("err"); $h("#f-name").focus(); return null; }
  if(mode==="quick"&&!msg){ $h("#f-err2").textContent=w("errMsg"); $h("#wo-ln-msg").classList.add("err"); $h("#f-msg").focus(); return null; }
  const lines=[`${L.form.hello} ${name}.`];
  if(mode==="full"){
    lines[0]+=` ${w("intro")}:`;
    const type=+($("input[name=wo-type]:checked")||{value:0}).value;
    const boat=[woTouched.type?w("full")[type]:"",v("#f-boat"),woTouched.len?$h("#wo-len").value+" m":""].filter(Boolean).join(", ");
    if(boat) lines.push(`${L.form.lBoat}: ${boat}`);
    const port=woPort(); if(port) lines.push(`${L.form.lPort}: ${port}`);
    const picked=[...$$("#f-chips input:checked")].map(i=>L.form.chips[i.value]).join(", ");
    if(picked) lines.push(`${L.form.lServices}: ${picked}`);
  }
  if(lines.length===1){ lines[0]=`${L.form.hello} ${name}.`;   // no details picked: then a message is needed
    if(!msg){ $h("#f-err2").textContent=w("errMsg"); $h("#wo-ln-msg").classList.add("err"); $h("#f-msg").focus(); return null; } }
  if(v("#f-reach")) lines.push(`${L.form.lReach}: ${v("#f-reach")}`);
  return lines.join("\n")+(msg?"\n\n"+msg:"");
}


/* =======================================================
   MOTION & INTERACTION
   ======================================================= */
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --- reveal on scroll --- */
const io = new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
},{threshold:.12,rootMargin:"0px 0px -6% 0px"});
function primeReveal(){
  const sel=[".sec-head",".card",".blk",".why>div",".group",".steps li",".routes li",".faq",".more",".formcard",".photo:not(.hero-photo)",".mapfig",".price",".note",".calc",".cost2>div",".bio>*",".ccards",".mapbox"];
  $$(sel.join(",")).forEach(el=>{
    if(el.classList.contains("rv")||el.closest(".hero")) return;
    el.classList.add("rv");
    if(el.matches(".photo,.mapfig")) el.classList.add("rv-s");
    const sib=[...el.parentElement.children].filter(c=>c.classList.contains("rv"));
    el.style.transitionDelay=Math.min(sib.indexOf(el),6)*60+"ms";
    io.observe(el);
  });
}


/* --- count up --- */
function countUp(el){
  const raw=el.dataset.target||el.textContent; el.dataset.target=raw;
  const m=raw.match(/(\d+)/); if(!m||RM) return;
  const n=+m[1], t0=performance.now(), dur=1100;
  const step=now=>{ const p=Math.min(1,(now-t0)/dur), e=1-Math.pow(1-p,3);
    el.textContent=raw.replace(m[1],String(Math.round(n*e))); if(p<1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

/* --- nav pill --- */
function movePill(){
  const pill=$("#nav .nav-pill")||(()=>{const p=document.createElement("span");p.className="nav-pill";$h("#nav").prepend(p);return p;})();
  const a=$("#nav a[aria-current=page]"); if(!a||innerWidth<=980){pill.classList.remove("on");return;}
  pill.style.left=a.offsetLeft+"px"; pill.style.width=a.offsetWidth+"px"; pill.classList.add("on");
}
addEventListener("resize",movePill);

/* --- header shadow, floating buttons, mobile bar --- */
const toTop=document.createElement("button"); toTop.className="totop"; toTop.type="button";
toTop.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
document.body.append(toTop);
toTop.addEventListener("click",()=>scrollTo({top:0,behavior:RM?"auto":"smooth"}));
const mbar=document.createElement("div"); mbar.className="mbar"; mbar.innerHTML=
  `<a class="btn btn-2" href="${navHref("pulizia")}" id="mbar-q"></a><a class="btn" data-h="wa" target="_blank" rel="noopener" id="mbar-wa"></a>`;
document.body.append(mbar);
function onScroll(){
  const y=scrollY;
  $h(".hdr").classList.toggle("scrolled",y>8);
  toTop.classList.toggle("show",y>700);
  const showBar=y>420 && innerWidth<=760;
  mbar.classList.toggle("show",showBar); document.body.classList.toggle("mbar-on",showBar);
}
addEventListener("scroll",onScroll,{passive:true}); addEventListener("resize",onScroll);


/* =======================================================
   ROSA DEI VENTI
   ======================================================= */
const WIND_PTS=[["N",0],["NE",45],["E",90],["SE",135],["S",180],["SO",225],["O",270],["NO",315]];
function roseSVG(){
  const C=200, R=150;
  const pt=(a,r)=>[C+r*Math.sin(a*Math.PI/180), C-r*Math.cos(a*Math.PI/180)];
  const f=n=>n.toFixed(1);
  let s=`<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rosa dei venti">`;
  s+=`<g class="idle">`;
  s+=`<circle cx="${C}" cy="${C}" r="${R}" fill="none" stroke="#D2E3EA"/>`;
  s+=`<circle cx="${C}" cy="${C}" r="${R-16}" fill="none" stroke="#D2E3EA"/>`;
  s+=`<circle cx="${C}" cy="${C}" r="${R-60}" fill="none" stroke="#D2E3EA" stroke-dasharray="2 5"/>`;
  for(let a=0;a<360;a+=5){
    const major=a%45===0, mid=a%15===0;
    const [x1,y1]=pt(a,R), [x2,y2]=pt(a,R-(major?16:mid?10:5));
    s+=`<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" class="tick${major?" major":""}" stroke-width="${major?1.6:1}"/>`;
    if(a%45===0&&a%90!==0){ const [tx,ty]=pt(a,R-28); s+=`<text x="${f(tx)}" y="${f(ty+3)}" class="deg" text-anchor="middle">${a}\u00b0</text>`; }
  }
  s+=`</g><g class="card-g">`;
  const star=(a,len,w,dark)=>{
    const [tx,ty]=pt(a,len), [lx,ly]=pt(a-90,w), [rx,ry]=pt(a+90,w);
    return `<path d="M${f(tx)},${f(ty)} L${f(lx)},${f(ly)} L${C},${C} Z" fill="${dark?"#102E50":"#3F6E9C"}" class="pt pt-d"/>`+
           `<path d="M${f(tx)},${f(ty)} L${f(rx)},${f(ry)} L${C},${C} Z" fill="${dark?"#2F5D8A":"#A3BED6"}" class="pt"/>`;
  };
  WIND_PTS.forEach(([k,a],i)=>{
    const card=a%90===0, len=card?R-34:R-74;
    s+=`<g class="wind" data-i="${i}" tabindex="0" role="button">`;
    s+=star(a,len,card?16:11,card);
    const [lx,ly]=pt(a,R+22);
    s+=`<text x="${f(lx)}" y="${f(ly+4)}" text-anchor="middle">${k}</text>`;
    const [hx,hy]=pt(a,len-18);
    s+=`<circle cx="${f(hx)}" cy="${f(hy)}" r="34" fill="transparent"/>`;
    s+=`</g>`;
  });
  s+=`<circle cx="${C}" cy="${C}" r="13" fill="#fff" stroke="#102E50" stroke-width="2" class="hub"/>`;
  s+=`<circle cx="${C}" cy="${C}" r="4" fill="#102E50" class="hub"/>`;
  s+=`</g></svg>`;
  return s;
}
function wireRose(){
  const box=$("#rose"); if(!box) return;
  if(!box.dataset.built){ $h("#rose-svg").innerHTML=roseSVG(); box.dataset.built=1; box.classList.add("rv"); io.observe(box); }
  const out=$("#rose-wind");
  const show=i=>{ out.textContent=T[lang].home.winds[i]; $$("#rose .wind").forEach(g=>g.classList.toggle("on",+g.dataset.i===i)); };
  show(7);
  $$("#rose .wind").forEach(g=>{
    const i=+g.dataset.i;
    ["mouseenter","focus","click"].forEach(ev=>g.addEventListener(ev,()=>show(i)));
  });
}

/* --- map interactions --- */
const PORT_KEYS=["portoTorres","alghero","bosa","cannigione","costaSmeralda","portisco","olbia","sanTeodoro"];
function wireMaps(){
  // ports <-> list
  const dots=$$("#map-clean .m-port"), items=$$("#clean-ports li");
  items.forEach((li,i)=>{ li.dataset.port=PORT_KEYS[i];
    li.addEventListener("mouseenter",()=>dots[i]&&dots[i].classList.add("hot"));
    li.addEventListener("mouseleave",()=>dots[i]&&dots[i].classList.remove("hot")); });
  dots.forEach((d,i)=>{ d.addEventListener("mouseenter",()=>items[i]&&items[i].classList.add("hot"));
    d.addEventListener("mouseleave",()=>items[i]&&items[i].classList.remove("hot")); });
  const pick=i=>{ const f=$("#f-port"); if(f){ f.value=T[lang].clean.ports[i]; f.dispatchEvent(new Event("input",{bubbles:true})); }
    $h(".formcard").scrollIntoView({behavior:RM?"auto":"smooth",block:"start"}); setTimeout(()=>($("#f-port")||$("#f-name")).focus({preventScroll:true}),RM?0:500); };
  items.forEach((li,i)=>{ li.style.cursor="pointer"; li.title=""; li.addEventListener("click",()=>pick(i)); });
  dots.forEach((d,i)=>d.addEventListener("click",()=>pick(i)));
}

/* --- faq height animation --- */
function wireFaq(){
  $$(".faq details").forEach(d=>{
    if(d.dataset.wired) return; d.dataset.wired=1;
    const s=d.querySelector("summary"), p=d.querySelector("p");
    const body=document.createElement("div"); body.className="fq-body"; p.replaceWith(body); body.append(p);
    s.addEventListener("click",e=>{
      e.preventDefault();
      if(body.getAnimations().length) return;
      if(RM){ d.open=!d.open; body.style.height=d.open?"auto":"0"; return; }
      const E="cubic-bezier(.2,.7,.2,1)";
      if(d.open){
        const from=body.getBoundingClientRect().height;
        body.animate([{height:from+"px",opacity:1},{height:"0px",opacity:.4}],{duration:280,easing:E}).onfinish=()=>{ d.open=false; body.style.height="0"; };
      } else {
        d.open=true; body.style.height="auto"; const to=body.getBoundingClientRect().height; body.style.height="0";
        body.animate([{height:"0px",opacity:.4},{height:to+"px",opacity:1}],{duration:320,easing:E}).onfinish=()=>{ body.style.height="auto"; };
      }
    });
  });
}

/* --- delivery route planner + price calculator --- */
const RATE=7;
let plan={a:"portoTorres",b:"andora",manual:false,drawn:"",seen:false};
function wireCalc(){
  const c=$("#calc"); if(!c) return;
  const rng=$("#calc-range"), num=$("#calc-num"), out=$("#calc-out"), A_=$("#plan-a"), B_=$("#plan-b"), est=$("#plan-est");
  const L=T[lang].plan, fmt=n=>new Intl.NumberFormat(LOCALE[lang],{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(n);
  const opts=Object.entries(L.groups).map(([g,gl])=>`<optgroup label="${esc(gl)}">`+
    Object.keys(SEA.ports).filter(k=>SEA.ports[k][2]===g).sort((x,y)=>portName(x).localeCompare(portName(y),LOCALE[lang]))
      .map(k=>`<option value="${k}">${esc(portName(k))}</option>`).join("")+`</optgroup>`).join("")+`<option value="">${esc(L.other)}</option>`;
  A_.innerHTML=opts; B_.innerHTML=opts;
  const AX=$("#plan-a-x"), BX=$("#plan-b-x"), hint=$("#plan-hint");
  AX.placeholder=BX.placeholder=L.otherPh; hint.textContent=L.otherHint;
  const price=v=>{ out.textContent=v>0?fmt(v*RATE):"—"; c.dataset.miles=v; };
  const setMiles=(v,fromRoute)=>{ v=Math.max(0,Math.min(2000,Math.round(+v||0))); rng.value=v; num.value=v; price(v);
    plan.manual=!fromRoute; est.textContent=fromRoute?"≈ "+L.est:(plan.a&&plan.b?L.manual:""); c.classList.toggle("is-manual",!fromRoute); };
  const go=(animate)=>{
    A_.value=plan.a; B_.value=plan.b;
    const other=!plan.a||!plan.b; AX.hidden=!!plan.a; BX.hidden=!!plan.b; hint.hidden=!other; c.classList.toggle("is-other",other);
    const r=plan.a&&plan.b?seaRoute(plan.a,plan.b):null;
    if(r){ setMiles(Math.round(r.nm/5)*5,true); drawPlan(r,animate); }
    else { drawPlan(null); if(other){ rng.value=0; num.value=""; price(0); est.textContent=""; plan.manual=true; } }
    $$("#deliv-routes button").forEach((bt,i)=>bt.setAttribute("aria-pressed",String(PAST_ROUTES[i][0]===plan.a&&PAST_ROUTES[i][1]===plan.b)));
  };
  A_.onchange=()=>{ plan.a=A_.value; go(true); if(!plan.a) AX.focus(); }; B_.onchange=()=>{ plan.b=B_.value; go(true); if(!plan.b) BX.focus(); };
  $h("#plan-swap").onclick=()=>{ [plan.a,plan.b]=[plan.b,plan.a]; [AX.value,BX.value]=[BX.value,AX.value]; go(true); };
  rng.oninput=()=>setMiles(rng.value,false); num.oninput=()=>setMiles(num.value,false);
  $$("#deliv-routes button").forEach((bt,i)=>{
    const r=seaRoute(...PAST_ROUTES[i]); if(r) bt.querySelector(".nm").textContent="≈ "+Math.round(r.nm/5)*5+" NM";
    bt.onclick=()=>{ [plan.a,plan.b]=PAST_ROUTES[i]; go(true); if(innerWidth<=880) $h("#map-routes").scrollIntoView({behavior:RM?"auto":"smooth",block:"center"}); };
  });
  plan.drawn=""; go(plan.seen);
  if(!plan.seen && "IntersectionObserver" in window){
    const ob=new IntersectionObserver(es=>{ if(es.some(e=>e.isIntersecting)){ ob.disconnect(); plan.seen=true; plan.drawn=""; go(true); } },{threshold:.35});
    ob.observe($h("#map-routes"));
  }
  $h("#calc-btn").onclick=()=>{
    const nameOf=(k,x)=>k?portName(k):x.value.trim(), na=nameOf(plan.a,AX), nb=nameOf(plan.b,BX), n=+c.dataset.miles||0;
    const m=na&&nb ? (n>0?L.msg:L.msgNoMiles).replace("{a}",na).replace("{b}",nb).replace("{n}",n) : t("calc.msg").replace("{n}",n);
    open("https://wa.me/"+CONFIG.phoneIntl+"?text="+encodeURIComponent(m),"_blank","noopener"); };
}
let planAnim=0;
function drawPlan(r,animate){
  const g=$("#plan-g"); if(!g) return;
  const key=r?plan.a+">"+plan.b+lang:"";
  $$("#map-routes .m-pt").forEach(p=>p.classList.toggle("on",!!r&&(p.dataset.k===plan.a||p.dataset.k===plan.b)));
  $$("#map-routes .m-past").forEach(p=>p.classList.toggle("on",!!r&&PAST_ROUTES[+p.dataset.i][0]===plan.a&&PAST_ROUTES[+p.dataset.i][1]===plan.b));
  if(!r){ g.innerHTML=""; plan.drawn=""; return; }
  if(key===plan.drawn) return; plan.drawn=key;
  const P=r.pts.map(geoXY), [ax,ay]=P[0], [bx,by]=P[P.length-1];
  const svgW=g.closest("svg").getBoundingClientRect().width, k=svgW?Math.max(1,600/svgW*.8):1; // keep labels readable on small maps
  const lab=(x,y,txt,other)=>{ const left=x>430||(x>other[0]&&x>300); return `<text x="${(x+(left?-12:12)*k).toFixed(1)}" y="${(y+5*k).toFixed(1)}" class="m-label-d" style="font-size:${(15*k).toFixed(1)}px;stroke-width:${(4*k).toFixed(1)}" text-anchor="${left?"end":"start"}">${esc(txt)}</text>`; };
  const nm=Math.round(r.nm/5)*5;
  g.innerHTML=`<path d="${smoothPath(P)}" class="m-plan" id="m-plan" pathLength="1"/>`+
    `<circle cx="${ax}" cy="${ay}" r="6" class="m-end"/><circle cx="${bx}" cy="${by}" r="6" class="m-end m-end-b"/>`+
    lab(ax,ay,portName(plan.a),[bx,by])+lab(bx,by,portName(plan.b),[ax,ay])+
    `<g class="m-boat" id="m-boat"><path d="M0-15V3H-9zM2-11 8 3H2z" class="m-sail"/><path d="M-11 5H11L7 10H-7z" class="m-hull"/></g>`+
    `<g class="m-chip" id="m-chip"><rect rx="${15*k}" height="${30*k}" y="${-15*k}"/><text y="${5*k}" text-anchor="middle" style="font-size:${(15*k).toFixed(1)}px">${nm} NM · ${new Intl.NumberFormat(LOCALE[lang],{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(nm*RATE)}</text></g>`;
  const path=$("#m-plan"), boat=$("#m-boat"), chip=$("#m-chip"), len=path.getTotalLength();
  const tx=chip.querySelector("text"), tw=tx.getComputedTextLength()||tx.textContent.length*15*k*.55;
  if(!svgW||!(g.closest("svg").getBoundingClientRect().width)) plan.drawn=""; // hidden page: redraw when shown
  const rect=chip.querySelector("rect"); rect.setAttribute("width",tw+28*k); rect.setAttribute("x",-(tw+28*k)/2);
  const mid=path.getPointAtLength(len*.5);
  chip.setAttribute("transform",`translate(${Math.min(600-tw/2-20*k,Math.max(tw/2+20*k,mid.x)).toFixed(1)},${(mid.y-24*k).toFixed(1)})`);
  const place=p=>{ const a=path.getPointAtLength(Math.max(0,p*len-1)), b=path.getPointAtLength(Math.min(len,p*len+1));
    const pt=path.getPointAtLength(p*len), flip=b.x<a.x?-1:1;
    boat.setAttribute("transform",`translate(${pt.x.toFixed(1)},${pt.y.toFixed(1)}) scale(${1.35*k*flip},${1.35*k})`); };
  cancelAnimationFrame(planAnim);
  if(!animate||RM){ path.style.strokeDashoffset=0; place(1); chip.classList.add("in"); return; }
  const dur=Math.min(3200,900+len*4), t0=performance.now();
  path.style.strokeDasharray=1; path.style.strokeDashoffset=1;
  const step=now=>{ const k=Math.min(1,(now-t0)/dur), e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
    path.style.strokeDashoffset=1-e; place(e); if(k<1) planAnim=requestAnimationFrame(step); else chip.classList.add("in"); };
  planAnim=requestAnimationFrame(step);
}

/* --- availability by month --- */
function renderAvail(){
  const L=T[lang].av, now=new Date(); let cells="";
  for(let i=0;i<12;i++){
    const d=new Date(now.getFullYear(),now.getMonth()+i,1), st=(CONFIG.avail||{})[d.getMonth()+1]||"ok";
    const mon=new Intl.DateTimeFormat(LOCALE[lang],{month:"short"}).format(d).replace(".","");
    cells+=`<li class="av-${st}"><b>${esc(mon)}</b>${i===0||d.getMonth()===0?`<i>${d.getFullYear()}</i>`:""}<span>${esc(L[st])}</span></li>`;
  }
  const used=new Set(Array.from({length:12},(_,i)=>(CONFIG.avail||{})[(now.getMonth()+i)%12+1]||"ok"));
  const legend=["ok","few","full"].filter(k=>used.has(k)).map(k=>`<span class="av-k av-${k}">${esc(L[k])}</span>`).join("");
  $$("[data-av]").forEach(el=>{ el.innerHTML=`<div class="av-head"><h3>${esc(L.title)}</h3><p>${esc(L.sub)}</p></div><ol class="av-m">${cells}</ol><p class="av-lg">${legend}</p>`; });
}

/* --- YouTube video, loaded only on click --- */
function wireVideo(){
  const b=$("#vid-play"); if(!b||b.dataset.wired) return; b.dataset.wired=1;
  b.addEventListener("click",()=>{
    const f=document.createElement("iframe");
    f.src="https://www.youtube-nocookie.com/embed/"+CONFIG.video+"?autoplay=1&playsinline=1&rel=0&modestbranding=1";
    f.title=t("video.frame"); f.allow="autoplay; encrypted-media; picture-in-picture; fullscreen"; f.allowFullscreen=true;
    b.replaceWith(f); f.focus();
  });
}
const LOCALE={it:"it-IT",en:"en-GB",fr:"fr-FR",de:"de-DE",es:"es-ES"};

/* --- live message preview --- */
function wirePreview(){
  const pre=$("#preview pre"); if(!pre) return;
  const render=()=>{
    const L=T[lang], v=id=>$(id).value.trim();
    const picked=[...$$("#f-chips input:checked")].map(i=>L.form.chips[i.value]).join(", ");
    const lines=[];
    if(v("#f-name")) lines.push(`${L.form.hello} ${v("#f-name")}.`);
    if(v("#f-boat")) lines.push(`${L.form.lBoat}: ${v("#f-boat")}`);
    if(v("#f-port")) lines.push(`${L.form.lPort}: ${v("#f-port")}`);
    if(picked) lines.push(`${L.form.lServices}: ${picked}`);
    if(v("#f-reach")) lines.push(`${L.form.lReach}: ${v("#f-reach")}`);
    if(v("#f-msg")) lines.push("",v("#f-msg"));
    pre.textContent=lines.join("\n");
  };
  $h(".formcard").addEventListener("input",render); $h(".formcard").addEventListener("change",render);
  render();
}

/* --- keyboard --- */
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){ $h("#lang-menu").hidden=true; $h("#lang-btn").setAttribute("aria-expanded","false"); $h("#nav").classList.remove("open"); $h(".burger").setAttribute("aria-expanded","false"); }
});

/* init */
$h("#map-clean").innerHTML=mapSVG("sard");
$h("#map-routes").innerHTML=mapSVG("routes");
const FACE="assets/img/face.webp", IMG={hero:"assets/img/hero.webp",c1:"assets/img/c1.webp",c2:"assets/img/c2.webp",clean:"assets/img/clean.webp",alghero:"assets/img/alghero.webp",heel:"assets/img/heel.webp",anchor:"assets/img/anchor.webp"};
$h("#face").src=A(FACE);$h("#face-sm").src=A(FACE);$h("#face-ab").src=A(FACE);
$h("#img-hero").src=A(IMG.hero);$h("#img-vid").src=A(IMG.heel);
$$(".phead .bg").forEach(b=>b.style.backgroundImage=`url(${A(IMG[b.dataset.bg])})`);
$h("#map-bg").innerHTML=mapSVG("sard");$h("#img-c1").src=A(IMG.c1);$h("#img-c2").src=A(IMG.c2);$h("#img-clean").src=A(IMG.clean);
if(MPA && page==="home" && lang==="it"){
  const want=qs.get("lang"), hash=location.hash.slice(1);
  if(PAGES.includes(hash)&&hash!=="home"){ const ln=$(`#nav a[data-p="${hash}"]`); if(ln) location.replace(ln.href); }
  else if(LANGS.includes(want)&&want!=="it"&&altHref(want)){ location.replace(altHref(want)); }
}
applyConfig();
applyLang();
route(true);
{ let saved=null; try{ saved=localStorage.getItem("sc-consent"); }catch(e){}
  if(saved===null) banner(true); else consent(saved==="1"); }
setTimeout(()=>$h(".wa").classList.add("show"),900);

if(!MPA) addEventListener("hashchange",()=>route(false));
$h("#lang-btn").addEventListener("click",()=>{
  const open=$h("#lang-menu").hidden;
  $h("#lang-menu").hidden=!open;
  $h("#lang-btn").setAttribute("aria-expanded",String(open));
});
$h("#lang-menu").addEventListener("click",e=>{
  const b=e.target.closest("[data-lang]"); if(!b) return;
  lang=b.dataset.lang; applyLang();
  $h("#lang-menu").hidden=true; $h("#lang-btn").setAttribute("aria-expanded","false"); $h("#lang-btn").focus();
});
function closeNav(){ $h("#nav").classList.remove("open"); $h(".burger").setAttribute("aria-expanded","false"); }
document.addEventListener("click",e=>{
  if(!e.target.closest(".lang")){ $h("#lang-menu").hidden=true; $h("#lang-btn").setAttribute("aria-expanded","false"); }
  if(!e.target.closest("#nav") && !e.target.closest(".burger")) closeNav();
});
addEventListener("scroll",()=>{ if($h("#nav").classList.contains("open")) closeNav(); },{passive:true});
$h(".burger").addEventListener("click",()=>{
  const o=$h("#nav").classList.toggle("open");
  $h(".burger").setAttribute("aria-expanded",String(o));
});
$h("#skip").addEventListener("click",e=>{e.preventDefault();$h("#main").focus();});
$h("#ck-yes").addEventListener("click",()=>consent(true));
$h("#ck-no").addEventListener("click",()=>consent(false));
$h("#map-load").addEventListener("click",()=>consent(true));
$h("#ck-prefs").addEventListener("click",()=>{banner(true);$h("#ck-yes").focus();});

$$("[data-privacy]").forEach(b=>b.addEventListener("click",()=>$h("#privacy").showModal()));
$h("#pv-close").addEventListener("click",()=>$h("#privacy").close());
$h("#send-wa").addEventListener("click",()=>{
  const m=compose(); if(!m) return;
  $h("#send-wa").classList.add("sent"); $h("#wo-send-lbl").textContent=w("sent"); $h("#wo-status").textContent=w("waHelp");
  setTimeout(()=>{ $h("#send-wa").classList.remove("sent"); $h("#wo-send-lbl").textContent=w("send"); },4000);
  window.open("https://wa.me/"+CONFIG.phoneIntl+"?text="+encodeURIComponent(m),"_blank","noopener");
});
$h("#send-mail").addEventListener("click",()=>{
  const m=compose(); if(m) $h("#wo-status").textContent=w("mailSent"); if(m) location.href="mailto:"+CONFIG.email+"?subject="+encodeURIComponent(t("form.subject"))+"&body="+encodeURIComponent(m);
});

