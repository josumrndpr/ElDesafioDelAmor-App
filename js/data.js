/* ============================================
   data.js — Los 40 días del desafío
   Fuente: "El Desafío del Amor" — Stephen Kendrick
   ============================================ */

const BOOK_DATA = (() => {
  'use strict';

  const DAYS = [
    {
      id: 1,
      title: 'El amor es paciente',
      verse: 'Proverbios 14:29',
      verseText: 'El que es paciente muestra gran discernimiento; el que es impaciente muestra mucha necedad.',
      summary: 'El amor comienza con la paciencia. Es la capacidad de soportar las molestias, los defectos y las diferencias de tu cónyuge sin reaccionar con enojo. La paciencia nos permite responder positivamente en situaciones negativas, ser lentos para airarnos y extender misericordia. La impaciencia, en cambio, conduce a reacciones que generan más problemas, convirtiendo el amor en una cuestión de control emocional sabio.',
      challenge: 'Evita decir cualquier palabra negativa a tu cónyuge durante todo el día. Si surge la tentación de quejarte o criticar, guarda silencio. Reflexiona sobre las situaciones que te causan ira y cómo manejar esos sentimientos.',
      reflectionQuestions: [
        '¿Qué situaciones específicas de tu relación te hacen perder la paciencia?',
        '¿Cómo reaccionas normalmente cuando tu cónyuge te frustra?',
        '¿Qué cambiaría en tu hogar si practicaras la paciencia deliberadamente?',
        '¿Puedes identificar una ocasión en la que la paciencia evitó un conflicto innecesario?'
      ],
      icon: '⏳',
      color: '#E53935',
      bgGradient: 'linear-gradient(135deg, #FFCDD2, #E57373)'
    },
    {
      id: 2,
      title: 'El amor es amable',
      verse: 'Proverbios 3:3-4',
      verseText: 'Nunca te aparten la bondad y la verdad; átalas a tu cuello, escríbelas en la tabla de tu corazón. Así gozarás de favor y buena reputación ante los ojos de Dios y de los hombres.',
      summary: 'La amabilidad es el amor en acción. Es tomar la iniciativa de ser suave, servicial y considerado. Mientras que la paciencia evita problemas, la amabilidad crea circunstancias positivas. La amabilidad hace que seas agradable y atrae a los demás hacia ti. Es el arte de tratar a tu cónyuge con cuidado y sensibilidad, incluso al transmitir verdades difíciles.',
      challenge: 'Realiza un acto de bondad inesperado para tu cónyuge. Prepara su café favorito, deja una nota de amor en su almohada o haz una tarea que normalmente él o ella hace. Hazlo en secreto, sin buscar reconocimiento.',
      reflectionQuestions: [
        '¿Cuándo fue la última vez que hiciste algo bondadoso sin esperar nada a cambio?',
        '¿Qué gesto de amabilidad significaría más para tu cónyuge hoy?',
        '¿La falta de amabilidad ha afectado tu relación? ¿Cómo?',
        '¿De qué manera la bondad de Dios hacia ti puede inspirarte a ser más amable?'
      ],
      icon: '💝',
      color: '#FF7043',
      bgGradient: 'linear-gradient(135deg, #FFE0B2, #FFAB91)'
    },
    {
      id: 3,
      title: 'El amor no es egoísta',
      verse: 'Filipenses 2:3-4',
      verseText: 'No hagan nada por egoísmo o vanidad; más bien, con humildad consideren a los demás como superiores a ustedes mismos. Cada uno debe velar no solo por sus propios intereses, sino también por los intereses de los demás.',
      summary: 'El amor pone las necesidades del otro por encima de las propias. El egoísmo es la raíz de la mayoría de los conflictos matrimoniales. Cuando ambos cónyuges buscan servir al otro primero, ambos terminan siendo servidos. El amor genuino requiere sacrificio de nuestros propios deseos, tiempo y comodidad para bendecir a nuestra pareja.',
      challenge: 'Haz algo hoy que ponga las necesidades de tu cónyuge por encima de las tuyas. Dile que sí a algo que normalmente rechazarías por tu propia comodidad o conveniencia. Cede tu tiempo, tu espacio o tu preferencia.',
      reflectionQuestions: [
        '¿En qué áreas de tu vida eres más propenso al egoísmo?',
        '¿Cómo se ha manifestado el egoísmo en tu matrimonio?',
        '¿Qué podrías hacer hoy para poner a tu cónyuge primero?',
        '¿Cómo sería tu matrimonio si ambos compitieran por servir al otro?'
      ],
      icon: '🤲',
      color: '#AB47BC',
      bgGradient: 'linear-gradient(135deg, #E1BEE7, #CE93D8)'
    },
    {
      id: 4,
      title: 'El amor es considerado',
      verse: 'Filipenses 2:4',
      verseText: 'Cada uno debe velar no solo por sus propios intereses, sino también por los intereses de los demás.',
      summary: 'El amor es considerado, lo que significa estar atento a las necesidades, deseos y sentimientos de tu cónyuge. Es la práctica de pensar en cómo tus palabras y acciones afectan a tu pareja. La consideración es la habilidad de notar los pequeños detalles que hacen que tu cónyuge se sienta amado y valorado. Implica anticiparse a sus necesidades antes de que las exprese.',
      challenge: 'Hoy, contacta a tu cónyuge durante el día solo para preguntarle cómo está o si necesita algo. Enfócate en escuchar realmente su respuesta sin interrumpir ni desviar la conversación hacia ti.',
      reflectionQuestions: [
        '¿Qué tan bien conoces las necesidades actuales de tu cónyuge?',
        '¿Hay algo que sabes que le molestaría pero que sigues haciendo?',
        '¿Qué gesto de consideración significaría mucho para tu pareja hoy?',
        '¿Cómo puedes mostrar mejor que valoras sus sentimientos?'
      ],
      icon: '💭',
      color: '#7E57C2',
      bgGradient: 'linear-gradient(135deg, #D1C4E9, #B39DDB)'
    },
    {
      id: 5,
      title: 'El amor no es descortés',
      verse: 'Proverbios 15:1',
      verseText: 'La respuesta amable calma el enojo, pero la respuesta grosera lo enciende aún más.',
      summary: 'El amor no es grosero ni descortés. Los modales importan, especialmente en el hogar. A menudo tratamos a los extraños con más cortesía que a nuestro cónyuge. La descortesía crea incomodidad y negatividad en las relaciones. El amor nos llama a mantener un comportamiento agradable, modales amables y autocontrol, reforzando el vínculo matrimonial en lugar de desgastarlo.',
      challenge: 'Durante todo el día, habla con tu cónyuge con la misma cortesía y respeto que usarías con un colega o un invitado. Usa "por favor", "gracias" y "lo siento" con sinceridad.',
      reflectionQuestions: [
        '¿Eres más cortés con los extraños que con tu cónyuge? ¿Por qué?',
        '¿Qué hábitos descorteses has dejado entrar en tu matrimonio?',
        '¿Cómo se siente tu cónyuge cuando eres grosero(a)?',
        '¿Qué palabra amable puedes decir hoy para marcar la diferencia?'
      ],
      icon: '🙇',
      color: '#5C6BC0',
      bgGradient: 'linear-gradient(135deg, #C5CAE9, #9FA8DA)'
    },
    {
      id: 6,
      title: 'El amor no es irritable',
      verse: 'Proverbios 19:11',
      verseText: 'La cordura del hombre domina su ira, y su gloria es pasar por alto la ofensa.',
      summary: 'El amor no se irrita fácilmente. La irritabilidad es una reacción exagerada a pequeñas molestias. El amor nos llama a desarrollar un umbral más alto para la incomodidad y a escoger nuestras batallas sabiamente. Cuando el amor gobierna nuestro corazón, podemos pasar por alto las ofensas menores y responder con gracia en lugar de frustración.',
      challenge: 'Elige hoy no quejarte ni frustrarte por nada que haga tu cónyuge. Cuando sientas que la irritación surge, detente, respira profundo y elige responder con calma y gracia.',
      reflectionQuestions: [
        '¿Qué cosas pequeñas te irritan de tu cónyuge?',
        '¿Por qué permites que cosas insignificantes afecten tu actitud?',
        '¿Qué hay debajo de tu irritación: estrés, orgullo, expectativas no cumplidas?',
        '¿Cómo responderías si decidieras no irritarte hoy?'
      ],
      icon: '🧘',
      color: '#26A69A',
      bgGradient: 'linear-gradient(135deg, #B2DFDB, #80CBC4)'
    },
    {
      id: 7,
      title: 'El amor cree en lo mejor',
      verse: '1 Corintios 13:7',
      verseText: 'Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta.',
      summary: 'El amor cree lo mejor de tu cónyuge. Esto significa dar el beneficio de la duda, asumir buenas intenciones y no guardar registro de los errores pasados. En lugar de sospechar o asumir lo peor, el amor elige creer que tu pareja tiene motivos positivos. Esta confianza crea un ambiente seguro donde el amor puede florecer.',
      challenge: 'Hoy, piensa en lo mejor de tu cónyuge. Si surge una situación dudosa, asume una intención positiva. No saques conclusiones negativas ni le atribuyas malas motivaciones a sus acciones.',
      reflectionQuestions: [
        '¿Tiendes a asumir lo mejor o lo peor de tu cónyuge?',
        '¿Cómo cambiaría tu relación si siempre le dieras el beneficio de la duda?',
        '¿Qué experiencias pasadas te han hecho desconfiar?',
        '¿Puedes recordar una ocasión en la que una suposición negativa resultó ser incorrecta?'
      ],
      icon: '🌟',
      color: '#43A047',
      bgGradient: 'linear-gradient(135deg, #C8E6C9, #A5D6A7)'
    },
    {
      id: 8,
      title: 'El amor no es celoso',
      verse: 'Proverbios 14:30',
      verseText: 'El corazón tranquilo da vida al cuerpo, pero la envidia carcome los huesos.',
      summary: 'El amor no siente envidia. Los celos surgen de la inseguridad y de la comparación. El amor celebra los éxitos, talentos y bendiciones de tu cónyuge en lugar de resentirlos. Los celos destruyen la confianza y dañan la intimidad. Alegrarse genuinamente por tu pareja fortalece el vínculo y crea un ambiente de apoyo mutuo.',
      challenge: 'Identifica un área en la que hayas sentido envidia de tu cónyuge (talento, logro, atención). Decide alegrarte activamente por él o ella en esa área. Exprésale tu orgullo y admiración.',
      reflectionQuestions: [
        '¿Hay áreas donde sientes celos de tu cónyuge?',
        '¿Cómo afectan los celos tu relación?',
        '¿Qué inseguridades tuyas alimentan esos celos?',
        '¿Cómo puedes aprender a celebrar genuinamente a tu pareja?'
      ],
      icon: '🦋',
      color: '#FDD835',
      bgGradient: 'linear-gradient(135deg, #FFF9C4, #FFF176)'
    },
    {
      id: 9,
      title: 'El amor deja buenas impresiones',
      verse: 'Romanos 13:8',
      verseText: 'No tengan deuda pendiente con nadie, a no ser la de amarse unos a otros. Porque el que ama al prójimo ha cumplido la ley.',
      summary: 'El amor construye un legado de buenas impresiones. Cada interacción deja una huella. Las palabras y acciones negativas graban recuerdos dolorosos, mientras que las positivas construyen un depósito de buenos recuerdos. Sé intencional en crear momentos que tu cónyuge recuerde con cariño. El saludo y la despedida son momentos clave para dejar una buena impresión.',
      challenge: 'Saluda a tu cónyuge hoy con un beso genuino y una sonrisa. Despídete con una palabra de aliento. Asegúrate de que cada interacción deje una impresión positiva.',
      reflectionQuestions: [
        '¿Qué impresión crees que dejas en tu cónyuge cada día?',
        '¿Cómo te gustaría que te recordara tu pareja?',
        '¿Qué pequeño gesto podría alegrarle el día hoy?',
        '¿Hay algo que necesites disculparte para borrar una mala impresión pasada?'
      ],
      icon: '✨',
      color: '#FF8F00',
      bgGradient: 'linear-gradient(135deg, #FFF3CD, #FFE082)'
    },
    {
      id: 10,
      title: 'El amor es incondicional',
      verse: 'Romanos 5:8',
      verseText: 'Pero Dios demuestra su amor por nosotros en esto: en que cuando todavía éramos pecadores, Cristo murió por nosotros.',
      summary: 'El amor incondicional es la esencia del amor ágape: no se basa en méritos ni en el desempeño. Dios nos amó primero sin condiciones, y nosotros estamos llamados a amar igual. El amor verdadero se basa en el compromiso, no solo en la atracción. Es desinteresado e independiente de las circunstancias. El amor puede reconstruirse al enfocarse en el amor ágape.',
      challenge: 'Haz algo hoy por tu cónyuge que sea completamente inmerecido. Un regalo sorpresa, un favor especial o un sacrificio que no esperaba. Hazlo sin esperar nada a cambio, solo porque lo amas incondicionalmente.',
      reflectionQuestions: [
        '¿Tu amor por tu cónyuge es condicional o incondicional?',
        '¿Qué condiciones pones a tu amor?',
        '¿Cómo refleja tu amor el amor incondicional de Dios?',
        '¿Qué necesitas cambiar para amar sin condiciones?'
      ],
      icon: '💎',
      color: '#D32F2F',
      bgGradient: 'linear-gradient(135deg, #FFCDD2, #EF9A9A)'
    },
    {
      id: 11,
      title: 'El amor aprecia',
      verse: '1 Tesalonicenses 5:18',
      verseText: 'Den gracias a Dios en toda situación, porque esta es su voluntad para ustedes en Cristo Jesús.',
      summary: 'El amor se expresa a través del agradecimiento genuino y la apreciación. Dar gracias por tu cónyuge y expresar gratitud por lo que hace fortalece el vínculo matrimonial. La gratitud transforma el enfoque de lo que falta a lo que tenemos. Apreciar a tu cónyuge verbalmente crea un ambiente de valoración y respeto mutuo.',
      challenge: 'Escribe una lista de al menos 10 cosas por las que agradeces a Dios por tu cónyuge. Léele la lista en voz alta o déjasela en un lugar donde la encuentre.',
      reflectionQuestions: [
        '¿Expresas gratitud a tu cónyuge regularmente?',
        '¿Qué cualidades de tu pareja das por sentado?',
        '¿Cómo te hace sentir cuando te agradecen?',
        '¿De qué manera el agradecimiento puede transformar tu matrimonio?'
      ],
      icon: '🙏',
      color: '#EC407A',
      bgGradient: 'linear-gradient(135deg, #F8BBD0, #F48FB1)'
    },
    {
      id: 12,
      title: 'El amor deja ganar al otro',
      verse: '1 Corintios 6:7',
      verseText: 'El solo hecho de tener pleitos entre ustedes ya es una derrota para ustedes. ¿Por qué no más bien sufrir el agravio? ¿Por qué no más bien soportar el fraude?',
      summary: 'El amor no insiste en tener la razón. En el matrimonio, ganar una discusión significa perder intimidad. El amor está dispuesto a ceder, a dejar que el otro "gane" en lugar de defender el orgullo propio. Elegir la paz sobre tener la razón fortalece la conexión emocional y demuestra humildad y respeto.',
      challenge: 'En cualquier desacuerdo hoy, elige dejar que tu cónyuge tenga la última palabra o gane el debate. No insistas en tener la razón. Si no hay desacuerdo, crea una oportunidad para ceder en algo.',
      reflectionQuestions: [
        '¿Por qué es tan importante para ti tener la razón?',
        '¿Qué has ganado cuando insistes en ganar una discusión?',
        '¿Qué pasaría si dejaras de llevar la cuenta de quién gana?',
        '¿Cómo se siente tu cónyuge cuando siempre quieres tener la última palabra?'
      ],
      icon: '🕊️',
      color: '#66BB6A',
      bgGradient: 'linear-gradient(135deg, #DCEDC8, #C5E1A5)'
    },
    {
      id: 13,
      title: 'El amor lucha limpio',
      verse: 'Efesios 4:26-27',
      verseText: 'Si se enojan, no pequen. No permitan que el sol se ponga mientras estén enojados, ni den cabida al diablo.',
      summary: 'El amor no evita los conflictos, pero los enfrenta de manera justa y constructiva. Pelear limpio significa no usar insultos, no sacar el pasado, no atacar el carácter del otro. Establezcan reglas para los desacuerdos: sin gritos, sin insultos, sin salir huyendo. El objetivo no es ganar, sino entenderse y resolver juntos.',
      challenge: 'Establece con tu cónyuge (o reafirma) reglas básicas para discutir. Por ejemplo: sin interrumpir, sin gritar, sin insultos. Hoy, si surge un conflicto, aplica estas reglas rigurosamente.',
      reflectionQuestions: [
        '¿Cómo sueles manejar los conflictos? ¿Huyes o atacas?',
        '¿Qué reglas harían que sus peleas sean más constructivas?',
        '¿Hay heridas pasadas que sigues sacando en las discusiones?',
        '¿Cómo puedes asegurarte de que el enojo no se convierta en pecado?'
      ],
      icon: '⚖️',
      color: '#8D6E63',
      bgGradient: 'linear-gradient(135deg, #D7CCC8, #BCAAA4)'
    },
    {
      id: 14,
      title: 'El amor se deleita',
      verse: 'Proverbios 5:18-19',
      verseText: 'Sea bendita tu fuente, y regocíjate con la esposa de tu juventud. Como cierva amada y graciosa gacela, sus senos te satisfagan en todo tiempo; y en su amor recréate siempre.',
      summary: 'El amor celebra y se deleita en la relación. No es solo deber u obligación, sino gozo y alegría. Recordar por qué te enamoraste de tu cónyuge, disfrutar su compañía y cultivar momentos de alegría juntos. El deleite es el ingrediente que hace que el matrimonio sea dulce y deseable, no solo soportable.',
      challenge: 'Hoy, dedica tiempo a hacer algo que ambos disfruten. Planea una cita sencilla en casa o salgan a algún lugar que les guste. El enfoque es disfrutar la compañía del otro sin distracciones.',
      reflectionQuestions: [
        '¿Cuándo fue la última vez que realmente disfrutaron juntos?',
        '¿Qué actividades solían hacer juntos que han dejado de hacer?',
        '¿Cómo puedes traer más alegría y diversión a tu matrimonio?',
        '¿Qué impide que se deleiten el uno en el otro?'
      ],
      icon: '🎉',
      color: '#F06292',
      bgGradient: 'linear-gradient(135deg, #FCE4EC, #F8BBD0)'
    },
    {
      id: 15,
      title: 'El amor es honorable',
      verse: 'Romanos 12:10',
      verseText: 'Ámense los unos a los otros con amor fraternal, prefiriendo en honor al otro.',
      summary: 'El amor honra a tu cónyuge públicamente y en privado. El honor es reconocer el valor y la importancia de tu pareja. Significa hablar bien de él o ella a otros, defenderlo cuando no está presente y tratarlo como a alguien valioso. El honor genera una cultura de respeto y dignidad en el matrimonio.',
      challenge: 'Habla bien de tu cónyuge a otra persona hoy. Podría ser un amigo, familiar o compañero de trabajo. Comparte sinceramente algo que admires o respetes de tu pareja.',
      reflectionQuestions: [
        '¿Cómo hablas de tu cónyuge cuando no está presente?',
        '¿Sientes que honras a tu pareja adecuadamente?',
        '¿Qué cambios podrías hacer para mostrar más honor?',
        '¿Cómo se siente tu cónyuge cuando lo honras públicamente?'
      ],
      icon: '👑',
      color: '#FFB300',
      bgGradient: 'linear-gradient(135deg, #FFF8E1, #FFE082)'
    },
    {
      id: 16,
      title: 'El amor intercede',
      verse: 'Santiago 5:16',
      verseText: 'Confiesen sus pecados unos a otros, y oren unos por otros, para que sean sanados. La oración del justo es poderosa y eficaz.',
      summary: 'El amor ora por su cónyuge. La intercesión es una de las expresiones más poderosas del amor. Orar por tu pareja te conecta con Dios y alinea tu corazón con el de él o ella. La oración te da perspectiva, ablanda tu corazón y trae la intervención divina a tus problemas matrimoniales.',
      challenge: 'Ora por tu cónyuge hoy más de lo que hablas de él o ella a otros. Dedica tiempo específico para interceder por sus necesidades, sueños, luchas y áreas de crecimiento.',
      reflectionQuestions: [
        '¿Con qué frecuencia oras por tu cónyuge?',
        '¿Qué necesidades específicas de tu pareja puedes presentar hoy a Dios?',
        '¿Cómo puede la oración cambiar tu actitud hacia tu esposo(a)?',
        '¿Qué pasaría si oraran juntos regularmente?'
      ],
      icon: '🙌',
      color: '#7B1FA2',
      bgGradient: 'linear-gradient(135deg, #E1BEE7, #CE93D8)'
    },
    {
      id: 17,
      title: 'El amor fomenta la intimidad',
      verse: 'Génesis 2:24',
      verseText: 'Por tanto, dejará el hombre a su padre y a su madre, se unirá a su mujer, y serán una sola carne.',
      summary: 'El amor busca la intimidad emocional y espiritual. La intimidad no ocurre por accidente; requiere tiempo, vulnerabilidad y esfuerzo intencional. Compartir pensamientos profundos, miedos, sueños y sentimientos crea un vínculo que va más allá de lo físico. La verdadera intimidad florece en un ambiente de confianza y seguridad.',
      challenge: 'Busca un momento hoy para tener una conversación profunda con tu cónyuge. Pregúntale cómo está realmente, comparte algo que normalmente no dices. El objetivo es conectar a nivel del corazón.',
      reflectionQuestions: [
        '¿Qué tan profunda es tu conexión emocional con tu cónyuge?',
        '¿Qué miedos te impiden ser vulnerable con tu pareja?',
        '¿Cómo puedes crear un espacio seguro para la intimidad?',
        '¿Qué necesitas compartir que no has compartido?'
      ],
      icon: '🔗',
      color: '#E91E63',
      bgGradient: 'linear-gradient(135deg, #F48FB1, #F06292)'
    },
    {
      id: 18,
      title: 'El amor busca entender',
      verse: 'Proverbios 4:7',
      verseText: 'La sabiduría es la principal; adquiere sabiduría. Y sobre todas tus posesiones, adquiere inteligencia.',
      summary: 'El amor busca entender a tu cónyuge antes de buscar ser entendido. Escuchar con atención, hacer preguntas y buscar comprender su perspectiva, incluso cuando no estás de acuerdo. El entendimiento construye puentes donde los juicios construyen muros. Amar es esforzarse por ver el mundo a través de los ojos de tu pareja.',
      challenge: 'Hoy, antes de responder a algo que tu cónyuge dice o hace, detente y pregúntale: "¿Puedes ayudarme a entender cómo te sientes?" Escucha sin interrumpir ni defenderte.',
      reflectionQuestions: [
        '¿Escuchas para entender o para responder?',
        '¿Qué áreas de tu cónyuge no comprendes bien?',
        '¿Cómo puedes conocer mejor a tu pareja?',
        '¿Qué te impide ponerte en su lugar?'
      ],
      icon: '👂',
      color: '#00ACC1',
      bgGradient: 'linear-gradient(135deg, #B2EBF2, #80DEEA)'
    },
    {
      id: 19,
      title: 'El amor es imposible (sin Dios)',
      verse: 'Jeremías 17:9',
      verseText: 'Engañoso es el corazón más que todas las cosas, y perverso; ¿quién lo conocerá?',
      summary: 'Sin Dios, el amor que el desafío describe es humanamente imposible. Nuestro corazón es egoísta por naturaleza. Amar incondicionalmente, perdonar siempre y servir constantemente no está en nuestras capacidades naturales. Pero con Dios, todo es posible. El amor verdadero comienza cuando reconocemos nuestra necesidad de la ayuda divina para amar como debemos.',
      challenge: 'Hoy, reconoce ante Dios que no puedes amar a tu cónyuge con tus propias fuerzas. Pídele que llene tu corazón con su amor para que puedas amar a tu pareja como Él ama.',
      reflectionQuestions: [
        '¿Has intentado amar con tus propias fuerzas? ¿Cómo te ha ido?',
        '¿Qué áreas de tu matrimonio necesitan la intervención de Dios?',
        '¿Estás dispuesto a depender de Dios para amar a tu cónyuge?',
        '¿Cómo sería tu matrimonio si Dios estuviera verdaderamente en el centro?'
      ],
      icon: '💪',
      color: '#1E88E5',
      bgGradient: 'linear-gradient(135deg, #BBDEFB, #90CAF9)'
    },
    {
      id: 20,
      title: 'El amor es Jesucristo',
      verse: 'Romanos 5:8',
      verseText: 'Pero Dios demuestra su amor por nosotros en esto: en que cuando todavía éramos pecadores, Cristo murió por nosotros.',
      summary: 'Jesucristo es la definición perfecta del amor. Su vida, muerte y resurrección son la máxima demostración de amor incondicional y sacrificial. Jesús vino a buscar y salvar a los perdidos, ofreciendo perdón y nueva vida. El amor verdadero no es un concepto abstracto; es una persona: Jesucristo. Conocerlo es conocer el amor.',
      challenge: 'Tómate tiempo hoy para meditar en el sacrificio de Jesús por ti. Lee Romanos 5:6-11 y escribe una oración agradeciendo a Dios por su amor demostrado en Cristo.',
      reflectionQuestions: [
        '¿Qué significa para ti personalmente que Cristo murió por ti?',
        '¿Cómo cambia tu capacidad de amar cuando entiendes el amor de Dios?',
        '¿De qué manera Jesús redefine lo que significa amar?',
        '¿Estás dispuesto a seguir su ejemplo?'
      ],
      icon: '✝️',
      color: '#D32F2F',
      bgGradient: 'linear-gradient(135deg, #FFCDD2, #EF9A9A)'
    },
    {
      id: 21,
      title: 'El amor se satisface en Dios',
      verse: 'Salmo 37:4',
      verseText: 'Deléitate en Jehová, y él te concederá las peticiones de tu corazón.',
      summary: 'El amor encuentra su satisfacción última en Dios, no en tu cónyuge. Cuando pones la expectativa de que tu pareja te haga feliz, la estás cargando con un peso que no puede llevar. Solo Dios puede llenar tu alma plenamente. Cuando encuentras tu satisfacción en Él, puedes amar a tu cónyuge sin condiciones ni demandas.',
      challenge: 'Pasa tiempo a solas con Dios hoy. Lee un Salmo, medita en su bondad y permite que Él llene tu corazón. No le pidas nada a Dios por tu cónyuge hoy; solo disfruta de su presencia.',
      reflectionQuestions: [
        '¿Estás poniendo expectativas en tu cónyuge que solo Dios puede cumplir?',
        '¿Qué porcentaje de tu felicidad depende de tu pareja?',
        '¿Cómo cambiaría tu relación si Dios fuera tu fuente principal de satisfacción?',
        '¿Qué significa para ti deleitarte en Dios?'
      ],
      icon: '☀️',
      color: '#F9A825',
      bgGradient: 'linear-gradient(135deg, #FFE082, #FFD54F)'
    },
    {
      id: 22,
      title: 'El amor es fiel',
      verse: 'Proverbios 20:6',
      verseText: 'Muchos se jactan de su lealtad, pero ¿quién hallará a alguien verdaderamente fiel?',
      summary: 'El amor es fiel. La fidelidad no es solo ausencia de infidelidad, sino presencia de lealtad constante. Es cumplir tus promesas, mantener tu palabra y estar presente en las buenas y en las malas. La fidelidad construye confianza, que es la base de todo matrimonio saludable.',
      challenge: 'Hoy, haz una promesa a tu cónyuge y cúmplela. Puede ser algo pequeño como llegar temprano a casa o hacer una tarea pendiente. Demuestra que eres digno de confianza en las cosas pequeñas.',
      reflectionQuestions: [
        '¿Eres tan fiel en las pequeñas promesas como en las grandes?',
        '¿En qué áreas tu cónyuge podría dudar de tu fidelidad?',
        '¿Cómo te hace sentir saber que Dios es siempre fiel?',
        '¿Qué compromiso necesitas renovar hoy?'
      ],
      icon: '🤝',
      color: '#2E7D32',
      bgGradient: 'linear-gradient(135deg, #C8E6C9, #A5D6A7)'
    },
    {
      id: 23,
      title: 'El amor siempre protege',
      verse: 'Proverbios 4:23',
      verseText: 'Sobre toda cosa guardada, guarda tu corazón, porque de él mana la vida.',
      summary: 'El amor protege. Protege la reputación, el corazón y la dignidad de tu cónyuge. No expones sus debilidades, no compartes sus secretos y no permites que otros hablen mal de él o ella. El amor crea un ambiente seguro donde tu pareja puede ser vulnerable sin miedo a ser herida o expuesta.',
      challenge: 'Hoy, defiende a tu cónyuge si alguien habla mal de él o ella. Si no hay oportunidad, asegúrate de no compartir información que podría avergonzar a tu pareja. Sé el guardián de su reputación.',
      reflectionQuestions: [
        '¿Compartes demasiado sobre tu cónyuge con otros?',
        '¿Defiendes a tu pareja cuando no está presente?',
        '¿Has expuesto alguna vez sus debilidades sin permiso?',
        '¿Cómo puedes hacer que tu cónyuge se sienta más seguro(a) contigo?'
      ],
      icon: '🛡️',
      color: '#37474F',
      bgGradient: 'linear-gradient(135deg, #CFD8DC, #B0BEC5)'
    },
    {
      id: 24,
      title: 'El amor es deseo',
      verse: 'Proverbios 5:18-19',
      verseText: 'Sea bendita tu fuente, y regocíjate con la esposa de tu juventud. En su amor recréate siempre.',
      summary: 'El amor incluye el deseo físico y la intimidad sexual. Dios diseñó el sexo dentro del matrimonio como una expresión de amor, unidad y placer mutuo. El amor celebra la sexualidad como un regalo de Dios, no como algo vergonzoso. La intimidad física es una parte importante del vínculo matrimonial y debe ser cuidada con ternura y consideración.',
      challenge: 'Hoy, inicia un gesto de afecto físico con tu cónyuge sin esperar nada a cambio. Un abrazo prolongado, tomarse de las manos, masaje en los hombros. El objetivo es conectarse físicamente sin presión.',
      reflectionQuestions: [
        '¿Cómo es la intimidad física en tu matrimonio?',
        '¿Hay algún aspecto que necesite ser sanado o mejorado?',
        '¿Consideras el sexo como un regalo de Dios?',
        '¿Cómo puedes ser más considerado(a) con las necesidades físicas de tu cónyuge?'
      ],
      icon: '❤️',
      color: '#E91E63',
      bgGradient: 'linear-gradient(135deg, #FCE4EC, #F48FB1)'
    },
    {
      id: 25,
      title: 'El amor perdona',
      verse: 'Colosenses 3:13',
      verseText: 'Sopórtense unos a otros y perdónense si alguno tiene queja contra otro. Así como el Señor los perdonó, perdonen también ustedes.',
      summary: 'El amor perdona. No guarda rencor ni lleva registro de los errores. El perdón es la columna vertebral de un matrimonio saludable. Perdonar significa liberar a tu cónyuge de la deuda que contrajo cuando te lastimó. El perdón no es olvidar, es soltar el derecho a vengarte. Así como Cristo nos perdonó, estamos llamados a perdonar.',
      challenge: 'Identifica algo por lo que todavía guardas rencor a tu cónyuge. Escríbelo en un papel y luego destrúyelo como símbolo de que lo sueltas. Dile a tu cónyuge: "Te perdono por [eso] y elijo no mencionarlo más".',
      reflectionQuestions: [
        '¿Qué heridas del pasado sigues cargando?',
        '¿Cómo te afecta guardar rencor?',
        '¿Qué significa perdonar como Cristo te perdonó?',
        '¿Hay algún perdón que necesites pedir o conceder hoy?'
      ],
      icon: '🕊️',
      color: '#66BB6A',
      bgGradient: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)'
    },
    {
      id: 26,
      title: 'El amor es responsable',
      verse: 'Gálatas 6:5',
      verseText: 'Porque cada cual llevará su propia carga.',
      summary: 'El amor asume responsabilidad. No culpa al otro ni pone excusas. Reconoce los errores, pide disculpas sinceramente y busca reparar el daño causado. Una persona amorosa no dice "tú me haces sentir" sino "yo soy responsable de mis reacciones". La responsabilidad personal es el fundamento de la madurez emocional y espiritual.',
      challenge: 'Identifica un área donde hayas estado culpando a tu cónyuge por tus propios problemas o reacciones. Hoy, asume toda la responsabilidad por tu actitud y comportamiento en esa área.',
      reflectionQuestions: [
        '¿En qué áreas culpas a tu cónyuge por tus reacciones?',
        '¿Cómo sería tu matrimonio si asumieras toda tu responsabilidad?',
        '¿Qué necesitas dejar de justificar?',
        '¿A qué te comprometes a responder mejor?'
      ],
      icon: '🎯',
      color: '#1565C0',
      bgGradient: 'linear-gradient(135deg, #BBDEFB, #90CAF9)'
    },
    {
      id: 27,
      title: 'El amor anima',
      verse: '1 Tesalonicenses 5:11',
      verseText: 'Por eso, anímense y edifíquense unos a otros, tal como lo vienen haciendo.',
      summary: 'El amor anima y edifica. Tus palabras tienen el poder de construir o destruir. El amor elige ser una fuente de aliento, afirmación y esperanza para tu cónyuge. En un mundo que ya es crítico, tu hogar debe ser un refugio donde tu pareja encuentre apoyo incondicional para perseguir sus sueños y superar sus desafíos.',
      challenge: 'Hoy, anima activamente a tu cónyuge en un área específica. Dile algo como: "Creo en ti porque..." o "Admiro cómo tú...". Afirma una cualidad o habilidad que valoras en él o ella.',
      reflectionQuestions: [
        '¿Tus palabras construyen o derriban a tu cónyuge?',
        '¿Cuándo fue la última vez que animaste genuinamente a tu pareja?',
        '¿Qué sueño o meta de tu cónyuge puedes apoyar hoy?',
        '¿Cómo te sientes cuando alguien te anima?'
      ],
      icon: '🎺',
      color: '#FF6F00',
      bgGradient: 'linear-gradient(135deg, #FFF3E0, #FFCC80)'
    },
    {
      id: 28,
      title: 'El amor hace sacrificios',
      verse: 'Juan 15:13',
      verseText: 'Nadie tiene mayor amor que este, que uno ponga su vida por sus amigos.',
      summary: 'El amor se demuestra en el sacrificio. No son las palabras bonitas sino las acciones costosas las que prueban el amor verdadero. El sacrificio puede ser grande o pequeño: tiempo, sueño, comodidad, orgullo, dinero. Cada vez que eliges el bienestar de tu cónyuge por encima de tu propia conveniencia, estás demostrando amor sacrificial.',
      challenge: 'Hoy, haz un sacrificio significativo por tu cónyuge. Puede ser algo que requiera tiempo, dinero o comodidad personal. Elige algo que sepas que le hará sentir amado, aunque te cueste.',
      reflectionQuestions: [
        '¿Qué has sacrificado últimamente por tu cónyuge?',
        '¿De qué manera el sacrificio de Jesús te inspira a amar?',
        '¿Qué te cuesta más dar: tiempo, dinero, orgullo o comodidad?',
        '¿Qué sacrificio significaría más para tu pareja hoy?'
      ],
      icon: '🔥',
      color: '#BF360C',
      bgGradient: 'linear-gradient(135deg, #FFCCBC, #FFAB91)'
    },
    {
      id: 29,
      title: 'La motivación del amor',
      verse: '1 Corintios 10:31',
      verseText: 'Entonces, ya sea que coman o beban o hagan cualquier otra cosa, háganlo todo para la gloria de Dios.',
      summary: 'La motivación del amor importa. Amar por obligación o culpa no es amor verdadero. El amor genuino fluye de un corazón agradecido que ha experimentado el amor de Dios. Cuando amas para la gloria de Dios, tu amor se vuelve desinteresado, constante y profundo. La motivación correcta transforma el deber en deleite.',
      challenge: 'Examina tus motivaciones hoy. Pregúntate: "¿Estoy haciendo esto por amor genuino o por obligación, culpa o miedo?" Elige hacer al menos una cosa hoy con la motivación correcta: para glorificar a Dios y bendecir a tu cónyuge.',
      reflectionQuestions: [
        '¿Cuál es tu motivación principal para amar a tu cónyuge?',
        '¿Haces cosas por obligación o por amor genuino?',
        '¿Cómo cambia el amor cuando lo haces para Dios?',
        '¿Qué necesitas ajustar en tus motivaciones?'
      ],
      icon: '💡',
      color: '#FFC107',
      bgGradient: 'linear-gradient(135deg, #FFF8E1, #FFE082)'
    },
    {
      id: 30,
      title: 'El amor alza la unidad',
      verse: 'Génesis 2:24',
      verseText: 'Por tanto, dejará el hombre a su padre y a su madre, se unirá a su mujer, y serán una sola carne.',
      summary: 'El amor busca y protege la unidad en el matrimonio. La unidad no significa uniformidad, sino trabajar juntos en armonía hacia metas comunes. La Trinidad misma es un modelo perfecto de unidad en diversidad. El esposo y la esposa están llamados a ser "una sola carne", reflejando la relación de Cristo con la iglesia. La unidad requiere humildad, comunicación y compromiso.',
      challenge: 'Hoy, identifica un área donde ustedes no estén unidos como equipo. Hablen sobre cómo pueden alinearse en esa área. Comprométete a buscar unidad, no victoria.',
      reflectionQuestions: [
        '¿En qué áreas no están unidos como pareja?',
        '¿Qué pasos pueden dar hoy para fortalecer su unidad?',
        '¿Cómo refleja la unidad en tu matrimonio la relación de Cristo con la iglesia?',
        '¿Estás dispuesto a ceder por el bien de la unidad?'
      ],
      icon: '🤗',
      color: '#AD1457',
      bgGradient: 'linear-gradient(135deg, #F8BBD0, #F48FB1)'
    },
    {
      id: 31,
      title: 'Amor y matrimonio',
      verse: 'Efesios 5:31-32',
      verseText: 'Por esto dejará el hombre a su padre y a su madre, se unirá a su mujer, y los dos serán una sola carne. Grande es este misterio; mas yo digo esto respecto a Cristo y la iglesia.',
      summary: 'El matrimonio es un misterio sagrado que refleja el amor de Cristo por su iglesia. El esposo es llamado a amar a su esposa como Cristo amó a la iglesia y se entregó por ella. No es un contrato condicional, sino un pacto de amor incondicional. Comprender esta dimensión espiritual del matrimonio transforma la manera en que nos relacionamos.',
      challenge: 'Reflexiona hoy en la dimensión espiritual de tu matrimonio. Si estás casado(a), escribe una carta a tu cónyuge hablando de tu compromiso y lo que significa para ti estar unidos en pacto.',
      reflectionQuestions: [
        '¿Ves tu matrimonio como un pacto o un contrato?',
        '¿Cómo refleja tu relación el amor de Cristo?',
        '¿Qué significa para ti que tu matrimonio sea un "misterio" espiritual?',
        '¿Cómo honrarías más a Dios en tu matrimonio?'
      ],
      icon: '💒',
      color: '#D32F2F',
      bgGradient: 'linear-gradient(135deg, #FFCDD2, #EF9A9A)'
    },
    {
      id: 32,
      title: 'El amor satisface las necesidades sexuales',
      verse: '1 Corintios 7:3-5',
      verseText: 'El marido cumpla con su deber conyugal para con su esposa, e igualmente la esposa para con su marido. La esposa no tiene autoridad sobre su propio cuerpo, sino el marido. Tampoco el marido tiene autoridad sobre su propio cuerpo, sino la esposa.',
      summary: 'El amor incluye la responsabilidad de satisfacer las necesidades sexuales del cónyuge. El diseño de Dios para el sexo en el matrimonio incluye el compañerismo, el placer mutuo, la protección contra la tentación y la procreación. Es un acto de entrega mutua donde cada cónyuge se pertenece al otro. La intimidad sexual debe ser celebrada como un regalo de Dios.',
      challenge: 'Hoy, inicia una conversación sobre la intimidad física con tu cónyuge. Pregúntale cómo se siente acerca de su vida sexual y qué podría mejorar. Escucha sin defensas y con la disposición de entender.',
      reflectionQuestions: [
        '¿Cómo es la comunicación sobre el sexo en tu matrimonio?',
        '¿Te sientes libre de expresar tus necesidades a tu cónyuge?',
        '¿Qué significa para ti que tu cuerpo no te pertenece?',
        '¿Cómo puedes ser más generoso(a) en esta área?'
      ],
      icon: '💕',
      color: '#C62828',
      bgGradient: 'linear-gradient(135deg, #FFCDD2, #E57373)'
    },
    {
      id: 33,
      title: 'El amor completa a los demás',
      verse: 'Efesios 4:16',
      verseText: 'Todo el cuerpo, bien concertado y unido entre sí por todas las coyunturas que se ayudan mutuamente, según la actividad propia de cada miembro, recibe su crecimiento para ir edificándose en amor.',
      summary: 'El amor busca completar y complementar a tu cónyuge. No eres su salvador, pero sí su compañero y apoyo. Ayudar a tu pareja a crecer, madurar y alcanzar su potencial es una expresión de amor. Se trata de caminar juntos, no de controlar ni de competir, sino de complementarse mutuamente.',
      challenge: 'Hoy, ayuda a tu cónyuge en un área donde sabes que necesita apoyo. Puede ser una tarea doméstica, un proyecto, un consejo o simplemente escuchar. Pregúntale: "¿En qué puedo ayudarte hoy?"',
      reflectionQuestions: [
        '¿Cómo complementas a tu cónyuge?',
        '¿En qué áreas puede tu pareja contar con tu apoyo?',
        '¿Estás ayudando a tu cónyuge a crecer o lo estás limitando?',
        '¿Qué necesita hoy de ti tu pareja?'
      ],
      icon: '🧩',
      color: '#00897B',
      bgGradient: 'linear-gradient(135deg, #B2DFDB, #80CBC4)'
    },
    {
      id: 34,
      title: 'El amor celebra la piedad',
      verse: 'Proverbios 31:28-30',
      verseText: 'Se levantan sus hijos y la llaman bienaventurada; también su marido, y la alaba: Muchas mujeres han hecho el bien, mas tú las superas a todas. Engañosa es la gracia y vana la hermosura, pero la mujer que teme a Jehová, esa será alabada.',
      summary: 'El amor celebra el carácter piadoso de tu cónyuge. Valora más su integridad, su fe y su carácter que su apariencia externa o sus logros. La verdadera belleza y el valor de una persona están en su relación con Dios. Reconocer y celebrar la piedad en tu cónyuge fortalece su fe y honra a Dios.',
      challenge: 'Hoy, identifica una forma en que tu cónyuge ha demostrado piedad o carácter cristiano. Dile específicamente cómo has visto a Dios obrar en su vida y por qué admiras su fe.',
      reflectionQuestions: [
        '¿Valoras más la apariencia o el carácter de tu cónyuge?',
        '¿Cuándo fue la última vez que celebraste su fe?',
        '¿Cómo puedes animar su crecimiento espiritual?',
        '¿Qué cualidades de carácter cristiano ves en tu pareja?'
      ],
      icon: '🙏',
      color: '#6A1B9A',
      bgGradient: 'linear-gradient(135deg, #E1BEE7, #CE93D8)'
    },
    {
      id: 35,
      title: 'El amor es responsable',
      verse: 'Lucas 12:48',
      verseText: 'A todo el que se le ha dado mucho, mucho se le demandará; y al que mucho se le ha confiado, más se le pedirá.',
      summary: 'El amor rinde cuentas. El matrimonio es una mayordomía que Dios te ha confiado. Eres responsable ante Dios de cómo amas, cuidas y tratas a tu cónyuge. Tener personas que te acompañen, que oren por ti y a quienes rindas cuentas fortalece tu compromiso y te ayuda a perseverar.',
      challenge: 'Comparte hoy con alguien de confianza (amigo, pastor, mentor) un área de tu matrimonio en la que necesitas apoyo u oración. Permítele preguntarte cómo estás progresando en tu compromiso de amar a tu cónyuge.',
      reflectionQuestions: [
        '¿Tienes a alguien a quien rindas cuentas sobre tu matrimonio?',
        '¿Cómo puedes ser mejor mayordomo del amor que Dios te ha dado?',
        '¿Qué área de tu matrimonio necesita más atención?',
        '¿A quién puedes pedir que ore por tu matrimonio?'
      ],
      icon: '📋',
      color: '#455A64',
      bgGradient: 'linear-gradient(135deg, #CFD8DC, #B0BEC5)'
    },
    {
      id: 36,
      title: 'El amor es la Palabra de Dios',
      verse: 'Salmo 119:105',
      verseText: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.',
      summary: 'El amor se fundamenta en la Palabra de Dios. La Biblia es la guía autorizada para el matrimonio y las relaciones. No puedes amar como Dios manda si no conoces lo que Él ha dicho. La Palabra ilumina el camino, corrige, enseña y equipa para toda buena obra, incluyendo amar bien a tu cónyuge.',
      challenge: 'Lee juntos un pasaje bíblico hoy. Elige un Salmo, un capítulo de Proverbios o el pasaje de 1 Corintios 13. Hablen de lo que Dios les muestra a través de su Palabra sobre el amor.',
      reflectionQuestions: [
        '¿Con qué frecuencia lees la Biblia?',
        '¿Cómo influye la Palabra de Dios en tu matrimonio?',
        '¿Qué pasaje bíblico sobre el amor necesitas aplicar hoy?',
        '¿Cómo puede la Biblia guiar mejor tu relación?'
      ],
      icon: '📖',
      color: '#1565C0',
      bgGradient: 'linear-gradient(135deg, #BBDEFB, #64B5F6)'
    },
    {
      id: 37,
      title: 'El amor se acuerda en oración',
      verse: 'Filipenses 1:3-4',
      verseText: 'Doy gracias a mi Dios siempre que me acuerdo de ustedes, siempre en todas mis oraciones rogando con gozo por todos ustedes.',
      summary: 'El amor ora siempre por su cónyuge. La oración diaria por tu pareja te conecta con Dios y transforma tu corazón hacia él o ella. Orar juntos fortalece la unidad espiritual y trae la presencia de Dios al centro del matrimonio. No hay mejor manera de amar a tu cónyuge que llevarlo continuamente ante el trono de Dios.',
      challenge: 'Hoy, ora en voz alta con tu cónyuge. Si no tienen el hábito de orar juntos, comienza con una oración breve antes de dormir o al comenzar el día. Dale gracias a Dios por tu pareja.',
      reflectionQuestions: [
        '¿Oras regularmente con tu cónyuge?',
        '¿Qué te impide orar juntos?',
        '¿Cómo puede la oración transformar tu matrimonio?',
        '¿Por qué es importante orar por tu cónyuge específicamente?'
      ],
      icon: '🙌',
      color: '#7B1FA2',
      bgGradient: 'linear-gradient(135deg, #E1BEE7, #CE93D8)'
    },
    {
      id: 38,
      title: 'Sueños de amor y delicia',
      verse: 'Salmo 20:4',
      verseText: 'Te conceda lo que tu corazón desea, y cumpla todos tus planes.',
      summary: 'El amor se interesa en los sueños de tu cónyuge. Dios pone deseos y aspiraciones en cada corazón. Amar a tu pareja es apoyar sus sueños, animarlo a perseguirlos y caminar junto a él o ella en el proceso. No hay mayor regalo que creer en los sueños de tu cónyuge y ayudarlos a hacerse realidad.',
      challenge: 'Hoy, pregúntale a tu cónyuge: "Si no tuvieras límites, ¿qué te gustaría hacer o lograr?" Escucha atentamente y anímale a perseguir ese sueño. Ofrece tu apoyo de manera concreta.',
      reflectionQuestions: [
        '¿Conoces los sueños de tu cónyuge?',
        '¿Cómo puedes apoyar esos sueños de manera práctica?',
        '¿Alguna vez has desalentado los sueños de tu pareja?',
        '¿Qué sueño pueden perseguir juntos?'
      ],
      icon: '⭐',
      color: '#F9A825',
      bgGradient: 'linear-gradient(135deg, #FFF9C4, #FFE082)'
    },
    {
      id: 39,
      title: 'La eternidad del amor',
      verse: 'Cantar de los Cantares 8:7',
      verseText: 'Las muchas aguas no podrán apagar el amor, ni lo ahogarán los ríos. Si alguien ofreciera todas las riquezas de su casa por el amor, de cierto lo menospreciarían.',
      summary: 'El amor trasciende esta vida. El amor que cultivas en tu matrimonio tiene resonancia eterna. El amor verdadero no se apaga con las dificultades ni con el tiempo. Invertir en tu matrimonio es invertir en algo que perdura más allá de esta vida. El amor es la cosa más parecida al cielo en la tierra.',
      challenge: 'Hoy, haz algo que tenga un impacto eterno en tu matrimonio. Puede ser compartir el evangelio con tu cónyuge, orar juntos por primera vez, iniciar un devocional familiar o simplemente hablar de lo que esperan para su relación en el futuro.',
      reflectionQuestions: [
        '¿Estás invirtiendo en algo eterno?',
        '¿Qué legado espiritual quieres dejar en tu matrimonio?',
        'Si murieras hoy, ¿qué te gustaría que tu cónyuge recordara?',
        '¿Cómo puede tu amor reflejar la eternidad de Dios?'
      ],
      icon: '🌍',
      color: '#4A148C',
      bgGradient: 'linear-gradient(135deg, #E1BEE7, #CE93D8)'
    },
    {
      id: 40,
      title: 'El amor es un convenio',
      verse: 'Deuteronomio 7:9',
      verseText: 'Reconoce, pues, que Jehová tu Dios es el verdadero Dios, el Dios fiel, que guarda el pacto y la misericordia a los que le aman y guardan sus mandamientos, hasta mil generaciones.',
      summary: 'El amor es un convenio, no un contrato. Un contrato es condicional: "Te amo si...". Un convenio es incondicional: "Te amo para siempre". Dios estableció convenios con su pueblo, y el matrimonio es un reflejo de ese amor de pacto. No importa lo que pase, el amor del convenio permanece. ¡Felicidades por completar los 40 días! Pero el viaje apenas comienza.',
      challenge: 'Renueva tus votos de amor hoy, no necesariamente en una ceremonia, sino de corazón a corazón. Dile a tu cónyuge que tu compromiso es incondicional y eterno. Escribe una carta de agradecimiento celebrando este viaje de 40 días.',
      reflectionQuestions: [
        '¿Entiendes la diferencia entre contrato y convenio?',
        '¿Tu matrimonio está basado en condiciones o en compromiso incondicional?',
        '¿Cómo refleja tu amor la fidelidad de Dios a su pacto?',
        '¿Qué promesa le harás a tu cónyuge hoy para el futuro?'
      ],
      icon: '💍',
      color: '#D32F2F',
      bgGradient: 'linear-gradient(135deg, #FFCDD2, #EF9A9A)'
    }
  ];

  const ICONS_BY_MOOD = ['😊', '😐', '😢', '😡', '🙏', '❤️'];

  function getDay(id) {
    return DAYS.find(d => d.id === id) || DAYS[0];
  }

  function getTotalDays() {
    return DAYS.length;
  }

  return { DAYS, ICONS_BY_MOOD, getDay, getTotalDays };
})();
