import { Category, Program, StudyCardData, WasteData } from './types';

export const STUDY_DATA: StudyCardData[] = [
  // =================================================================
  // LEAN MANUFACTURING DATA
  // =================================================================
  {
    id: 'heijunka',
    program: Program.LEAN,
    title: 'Heijunka',
    emoji: '📊',
    definition: 'Nivelación de la producción en tipo y cantidad para suavizar el flujo.',
    keyPoints: ['Suaviza el flujo', 'Mezcla de productos', 'Reduce inventario', 'Evita efecto látigo'],
    category: Category.FLOW,
    extendedContent: {
      deepDefinition: 'Heijunka (Nivelación) es la metodología Lean utilizada para reducir la desigualdad en un proceso de producción y minimizar la posibilidad de sobrecarga. A diferencia de la producción por lotes tradicionales que fabrica grandes volúmenes de un mismo producto (AAAAA BBBBB), Heijunka intercala la producción según la demanda del cliente (A B A B A), equilibrando el uso de materiales, mano de obra y maquinaria.',
      context: 'En un entorno de demanda fluctuante, tratar de seguir la demanda exacta día a día genera caos (Mura). Heijunka estabiliza la planta permitiendo operar a un ritmo constante (Takt Time) y reduciendo el stock de seguridad necesario aguas arriba.',
      methodology: [
        '1. Análisis de Demanda: Determinar el volumen promedio de pedidos en un periodo (ej. un mes).',
        '2. Cálculo del Takt Time: Tiempo disponible / Demanda promedio.',
        '3. Definición del Patrón de Nivelación: Establecer la secuencia óptima (ej. A-B-C-A-B-C) para minimizar cambios y estabilizar consumo de componentes.',
        '4. Caja Heijunka: Implementación visual mediante un casillero matricial que representa el tiempo (columnas) y el tipo de producto (filas), usando tarjetas Kanban para instruir la producción en intervalos cortos (Pitch).',
        '5. Reducción de SMED: Requisito indispensable para poder cambiar de modelo frecuentemente sin perder eficiencia.'
      ],
      example: 'Toyota no fabrica 1000 Corollas el lunes y 1000 Camrys el martes. Fabrica Corolla-Camry-Corolla-Camry en la misma línea. Esto asegura que el proveedor de llantas envíe un flujo constante de ambos tipos, en lugar de saturar el almacén con llantas de un solo modelo.'
    }
  },
  {
    id: 'kanban',
    program: Program.LEAN,
    title: 'Kanban',
    emoji: '🏷️',
    definition: 'Sistema de señalización visual para controlar el flujo de materiales (Pull).',
    keyPoints: ['Sistema Pull', 'Control visual', 'Límites WIP', 'Señal de reposición'],
    category: Category.FLOW,
    extendedContent: {
      deepDefinition: 'Kanban ("Tarjeta Visual") es un sistema de información que controla de modo armónico la fabricación de los productos necesarios en la cantidad y tiempo necesarios. Es el mecanismo físico que transforma un sistema "Push" (empujar basado en pronósticos) en un sistema "Pull" (jalar basado en consumo real). Funciona como una orden de trabajo autónoma y descentralizada.',
      context: 'El objetivo fundamental es limitar el Trabajo en Proceso (WIP). Sin Kanban, las áreas producen "por si acaso", ocultando ineficiencias. Con Kanban, si no hay tarjeta, no se produce, haciendo visibles los cuellos de botella y forzando la resolución de problemas.',
      methodology: [
        'Tipos Principales: Kanban de Producción (autoriza fabricar), Kanban de Retiro/Transporte (autoriza mover material), Kanban de Proveedor.',
        'Fórmula de Cálculo: N = (D x L x (1 + S)) / C. Donde N=Número de tarjetas, D=Demanda promedio, L=Lead Time, S=Stock de seguridad (%), C=Capacidad del contenedor.',
        'Reglas de Oro de Toyota:',
        '1. No se envía producto defectuoso al siguiente proceso.',
        '2. El proceso siguiente retira solo lo necesario.',
        '3. El proceso anterior produce solo lo retirado.',
        '4. Nada se produce o mueve sin Kanban.',
        '5. El Kanban debe estar adherido al producto real.'
      ],
      example: 'El sistema de "Supermercado": Cuando compras una caja de leche, el espacio vacío en el estante es la señal visual. El reponedor solo trae leche nueva cuando ve el hueco. No trae leche si el estante está lleno, evitando el sobre-stock.'
    }
  },
  {
    id: 'smed',
    program: Program.LEAN,
    title: 'SMED',
    emoji: '⏱️',
    definition: 'Single Minute Exchange of Die. Cambios de formato en menos de 10 min.',
    keyPoints: ['Separa interna/externa', 'Convierte interna a externa', 'Lotes pequeños'],
    category: Category.FLOW,
    extendedContent: {
      deepDefinition: 'SMED (Single-Minute Exchange of Die) es una teoría y conjunto de técnicas para realizar las operaciones de cambio de utillaje o preparación de máquinas en menos de 10 minutos ("un solo dígito"). Su propósito no es solo ganar tiempo productivo, sino habilitar la reducción del tamaño del lote (EOQ), lo que a su vez reduce drásticamente el inventario y mejora la flexibilidad.',
      context: 'Desarrollado por Shigeo Shingo. Antes del SMED, los cambios de prensa en Toyota tomaban 4 horas, obligando a producir lotes enormes. Shingo redujo ese tiempo a 3 minutos.',
      methodology: [
        'Fase Preliminar: Observar y registrar el proceso actual (video).',
        'Etapa 1: Separar Operaciones Internas (máquina parada) de Externas (máquina funcionando). El error común es hacer tareas externas (buscar llaves, traer moldes) con la máquina parada.',
        'Etapa 2: Convertir Operaciones Internas en Externas. Ej: Precalentar moldes fuera de línea, pre-ensamblar herramientas.',
        'Etapa 3: Optimizar Operaciones. Usar anclajes funcionales (palancas, cuñas) en lugar de tornillos. Eliminar ajustes mediante topes y guías estandarizadas.',
        'Etapa 4: Abolir el cambio. Diseñar productos o máquinas que no requieran cambios (Zero Changeover).'
      ],
      example: 'Los Pits de la Fórmula 1 son el ejemplo supremo de SMED. El auto (máquina) se detiene y 20 personas cambian 4 llantas en 2 segundos. Todo está preparado antes (externo), las herramientas son especializadas (pistolas neumáticas) y no hay ajustes (tuerca central única).'
    }
  },
  {
    id: 'tiempos-estandar',
    program: Program.LEAN,
    title: 'Tiempos Estándar',
    emoji: '⏳',
    definition: 'Tiempo requerido por un operario calificado a ritmo normal.',
    keyPoints: ['Cronometraje', 'Suplementos', 'Valoración ritmo', 'Base del costo'],
    category: Category.FLOW,
    extendedContent: {
      deepDefinition: 'El Tiempo Estándar es el tiempo que necesita un operario calificado y entrenado, trabajando a un ritmo normal, para realizar una tarea específica bajo condiciones preestablecidas, incluyendo tolerancias por fatiga, necesidades personales y demoras inevitables. No es el tiempo "mínimo" ni el "promedio simple".',
      context: 'Es la base fundamental de la ingeniería industrial para la planificación de la producción, cálculo de costos, balanceo de líneas y sistemas de incentivos. Sin un estándar, no se puede definir la eficiencia.',
      methodology: [
        '1. Estandarización del Método: Asegurar que la tarea se realice siempre igual antes de medir.',
        '2. Medición (Cronometraje): Dividir la tarea en elementos y tomar "n" muestras.',
        '3. Valoración del Ritmo (Rating Factor): El analista juzga la velocidad del operario comparada con un concepto de "ritmo normal" (100%). Tiempo Normal = Tiempo Observado x (Valoración / 100).',
        '4. Asignación de Suplementos (Allowances): Agregar % por fatiga física/mental, necesidades personales y contingencias del entorno.',
        '5. Cálculo Final: Tiempo Estándar = Tiempo Normal x (1 + % Suplementos).'
      ],
      example: 'Si un operario tarda 10 minutos (Observed Time) pero el ingeniero nota que trabaja un 20% más rápido de lo normal, el Tiempo Normal es 12 minutos. Si se agregan 15% de suplementos por fatiga y baño, el Tiempo Estándar final es 13.8 minutos.'
    }
  },
  {
    id: 'jidoka',
    program: Program.LEAN,
    title: 'Jidoka',
    emoji: '🤖',
    definition: 'Automatización con toque humano (Autonomación). Calidad en la fuente.',
    keyPoints: ['Parada automática', 'Separa hombre-máquina', 'Calidad origen', 'No pasar defectos'],
    category: Category.QUALITY,
    extendedContent: {
      deepDefinition: 'Jidoka, o "Autonomación", significa dotar a la maquinaria y a los operarios de la capacidad para detectar una anomalía y detener el trabajo inmediatamente. Transfiere "inteligencia humana" a la máquina para distinguir entre funcionamiento normal y anormal. Su principio es: "No aceptar defectos, no hacer defectos, no pasar defectos".',
      context: 'Permite la separación Hombre-Máquina. Un solo operario puede supervisar múltiples máquinas porque no necesita vigilarlas mientras funcionan bien, solo cuando se detienen. Esto multiplica la productividad laboral.',
      methodology: [
        '1. Detectar la anormalidad: Sensores, visión artificial, o detección manual del operario.',
        '2. Detener la línea/máquina: Parada automática inmediata para evitar producir una serie de defectos o dañar la herramienta.',
        '3. Corregir la condición inmediata: Solución rápida para reanudar el flujo.',
        '4. Investigar la Causa Raíz: Análisis post-evento para instalar contramedidas permanentes.',
        'Herramienta asociada: Andon (señalización de la parada).'
      ],
      example: 'El telar automático de Sakichi Toyoda (1902). Si un solo hilo se rompía, el telar se detenía automáticamente. Antes, un operario debía vigilar el telar constantemente. Con Jidoka, un operario podía cuidar 24 telares a la vez.'
    }
  },
  {
    id: 'pokayoke',
    program: Program.LEAN,
    title: 'Pokayoke',
    emoji: '🧩',
    definition: 'Dispositivo "A prueba de errores" para prevenir defectos.',
    keyPoints: ['Prevención física', 'Cero defectos', 'Seguridad', 'Bajo costo'],
    category: Category.QUALITY,
    extendedContent: {
      deepDefinition: 'Poka-Yoke ("a prueba de errores inadvertidos") es una técnica de control de calidad que utiliza dispositivos simples y mecanismos físicos para impedir que se produzcan errores humanos o, si ocurren, hacerlos obvios inmediatamente. Se basa en la premisa de que errar es humano, pero permitir que el error se convierta en defecto es un fallo del diseño del proceso.',
      context: 'El objetivo final es la inspección al 100% realizada por el propio proceso, eliminando la necesidad de inspectores de calidad al final de la línea (que no agregan valor).',
      methodology: [
        'Funciones de Regulación:',
        '- Método de Control (Forzoso): La máquina no arranca o la pieza no encaja si hay un error. (Más robusto).',
        '- Método de Advertencia: Suena una alarma o luz si hay un error.',
        'Tipos de Detección:',
        '- Método de Contacto: Detección por forma, tamaño o características físicas.',
        '- Método de Valor Fijo: Detección por número de movimientos o piezas (ej. contador).',
        '- Método de Paso-Movimiento: Detección de secuencia estándar.'
      ],
      example: 'Las conexiones USB o enchufes de tres patas. Su diseño físico asimétrico hace imposible conectarlos al revés. No requiere que el usuario "tenga cuidado" o lea un manual; el diseño garantiza la conexión correcta.'
    }
  },
  {
    id: 'andon',
    program: Program.LEAN,
    title: 'Andon',
    emoji: '🚨',
    definition: 'Sistema de control visual para indicar el estado de la planta en tiempo real.',
    keyPoints: ['Llamada de ayuda', 'Tablero luminoso', 'Empoderamiento', 'Transparencia'],
    category: Category.QUALITY,
    extendedContent: {
      deepDefinition: 'Andon es un sistema de gestión visual que muestra el estado actual de las operaciones (producción, alertas de calidad, necesidades de material) en tiempo real. Su función principal es alertar a supervisores y soporte cuando un operario detecta un problema y detiene la línea, facilitando una respuesta inmediata.',
      context: 'Es una herramienta de empoderamiento. En Toyota, cualquier operario tiene la autoridad y obligación de tirar del "Cordón Andon" para parar toda la fábrica si detecta un defecto, priorizando la calidad sobre la cantidad.',
      methodology: [
        'Código de Colores Estándar:',
        '- Verde: Operación normal.',
        '- Amarillo: Operario solicita ayuda (la línea sigue o baja velocidad).',
        '- Rojo: Línea detenida (problema crítico de calidad o seguridad).',
        'Protocolo de Respuesta: Define tiempos máximos de respuesta para líderes de equipo y mantenimiento. Si no se resuelve en "x" minutos, el problema escala al siguiente nivel gerencial.'
      ],
      example: 'El tablero electrónico en una línea de montaje de autos que muestra "Estación 4 - Parada - Falta Material". Todos en la planta pueden ver instantáneamente dónde está el problema sin necesidad de reportes o llamadas.'
    }
  },
  {
    id: 'pdca',
    program: Program.LEAN,
    title: 'PDCA',
    emoji: '🔄',
    definition: 'Ciclo de Deming: Plan-Do-Check-Act. El motor de la mejora continua.',
    keyPoints: ['Iterativo', 'Método científico', 'Base del Kaizen', 'Estandarización'],
    category: Category.STRATEGY,
    extendedContent: {
      deepDefinition: 'El ciclo PDCA (Plan-Do-Check-Act), también conocido como Ciclo de Deming o Shewhart, es el método iterativo de gestión utilizado para el control y la mejora continua de procesos y productos. Transforma la resolución de problemas en un método científico experimental.',
      context: 'Es el "motor" del Kaizen. Sin PDCA, las mejoras son aleatorias y a menudo regresan al estado anterior (entropía). El ciclo nunca termina; una vez que se alcanza un estándar, se convierte en la base para el siguiente ciclo de mejora.',
      methodology: [
        'PLAN (Planificar): Identificar el problema, analizar causas raíz (5 Porqués, Ishikawa), establecer objetivos SMART y definir el plan de acción.',
        'DO (Hacer): Ejecutar el plan, preferiblemente a pequeña escala (piloto) para minimizar riesgos.',
        'CHECK (Verificar): Medir los resultados del piloto. Comparar los datos "Después" contra el "Antes" y contra el objetivo esperado. ¿Fue efectiva la contramedida?',
        'ACT (Actuar/Ajustar): Si funcionó, Estandarizar el proceso (nuevo SOP) para sostener la ganancia. Si no funcionó, analizar por qué y reiniciar el ciclo.'
      ],
      example: 'Un equipo quiere reducir el desperdicio de papel. Plan: Instalar software de impresión segura. Do: Probar en el depto. de Finanzas. Check: El consumo bajó 15%, pero hubo quejas de lentitud. Act: Ajustar configuración de software y expandir a toda la empresa con las lecciones aprendidas.'
    }
  },
  {
    id: 'gemba',
    program: Program.LEAN,
    title: 'Recorrido Gemba',
    emoji: '👣',
    definition: '"Ir al lugar real" donde se crea el valor. Genchi Genbutsu.',
    keyPoints: ['Observación directa', 'No suposiciones', 'Respeto a la gente', 'Hechos reales'],
    category: Category.STRATEGY,
    extendedContent: {
      deepDefinition: 'Gemba es una palabra japonesa que significa "el lugar real". En Lean, se refiere al lugar donde se crea valor (el piso de producción, el quirófano, el sitio de construcción). El "Gemba Walk" es la práctica de que los gerentes e ingenieros dejen sus oficinas para observar los procesos reales, interactuar con los empleados y entender la realidad sin filtros.',
      context: 'Taiichi Ohno decía: "Los datos son importantes, pero pongo más énfasis en los hechos". Los reportes gerenciales a menudo esconden la verdad o llegan tarde. Ir al Gemba permite ver el desperdicio y la variabilidad en vivo.',
      methodology: [
        'Principios del Gemba Walk:',
        '1. Ve a ver (Go See): Observa el proceso, no solo el resultado.',
        '2. Pregunta "Por qué": Muestra curiosidad genuina, no busques culpables.',
        '3. Muestra Respeto: Reconoce que los operarios son los expertos de su área.',
        '4. Busca las 3 M: Muda (Desperdicio), Mura (Variabilidad), Muri (Sobrecarga).',
        '5. No arregles problemas en el momento: El objetivo es observar y entender para luego analizar sistémicamente.'
      ],
      example: 'Un director de hospital que camina por la sala de emergencias no para supervisar, sino para observar cuántos pasos tiene que dar una enfermera para buscar un medicamento. Al verlo en persona, entiende por qué hay retrasos, algo que una hoja de cálculo nunca mostraría.'
    }
  },
  {
    id: 'tpm',
    program: Program.LEAN,
    title: 'TPM',
    emoji: '🔧',
    definition: 'Mantenimiento Productivo Total. Cero averías, cero accidentes.',
    keyPoints: ['Mantenimiento autónomo', 'OEE', 'Cero paradas', 'Operario cuida máquina'],
    category: Category.STRATEGY,
    extendedContent: {
      deepDefinition: 'TPM (Total Productive Maintenance) es un sistema holístico de gestión de equipos que involucra a todos los empleados, desde la alta dirección hasta los operarios de planta, para maximizar la efectividad del equipo. Su meta es la "Producción Perfecta": Cero Averías, Cero Defectos, Cero Accidentes.',
      context: 'Rompe la mentalidad tradicional de silos ("Yo opero, tú reparas"). Transfiere tareas básicas de mantenimiento al operario, liberando a los técnicos para tareas complejas y predictivas.',
      methodology: [
        'Los 8 Pilares del TPM:',
        '1. Mantenimiento Autónomo (Jishu Hozen): El operario limpia, lubrica y aprieta pernos diariamente.',
        '2. Mejoras Enfocadas (Kobetsu Kaizen): Grupos para eliminar pérdidas específicas.',
        '3. Mantenimiento Planificado: Programas preventivos y predictivos por técnicos.',
        '4. Mantenimiento de Calidad: Condiciones de máquina que aseguran cero defectos.',
        '5. Control Inicial: Gestión temprana de nuevos equipos.',
        '6. Entrenamiento y Educación.',
        '7. TPM Administrativo.',
        '8. Seguridad y Medio Ambiente.',
        'Métrica Clave: OEE (Overall Equipment Effectiveness) = Disponibilidad x Rendimiento x Calidad.'
      ],
      example: 'Similar a ser dueño de un auto. Tú (operario) lavas el auto, revisas el aire y el aceite cada semana. No esperas a que el motor explote para ir al mecánico. El mecánico (técnico) hace los cambios de correa de distribución y frenos. Ambos cuidan el activo.'
    }
  },
  {
    id: 'gestion-visual',
    program: Program.LEAN,
    title: 'Gestión Visual',
    emoji: '👀',
    definition: 'El entorno "habla". Información crítica entendible de un vistazo.',
    keyPoints: ['Estándar vs Real', 'Autocontrol', '5S', 'Detección anomalías'],
    category: Category.ANALYSIS,
    extendedContent: {
      deepDefinition: 'La Gestión Visual es una estrategia de comunicación que utiliza elementos visuales intuitivos (colores, formas, luces, marcas en el piso) para transmitir información sobre estándares, desempeño y advertencias sin necesidad de palabras ni computadoras. El entorno de trabajo se vuelve "auto-explicativo".',
      context: 'La Regla de los 5 Segundos: Cualquier persona, incluso un visitante, debería ser capaz de entrar al área y entender en menos de 5 segundos: ¿Qué se hace aquí? ¿Cómo va el proceso (bien/mal)? ¿Dónde va cada cosa?',
      methodology: [
        'Niveles de Gestión Visual:',
        '1. Indicadores Visuales: Muestran información (ej. etiquetas de ubicación, líneas de pasillo).',
        '2. Señales Visuales: Llaman la atención sobre necesidades (ej. luces Andon, banderas de reabastecimiento).',
        '3. Controles Visuales: Limitan físicamente la acción o guían el comportamiento (ej. siluetas de herramientas, huellas en el piso, Kanban).',
        '4. Garantías Visuales: Hacen imposible el error (Poka-yokes visuales).'
      ],
      example: 'Los tableros de sombras (Shadow Boards) para herramientas. Si dibujas la silueta de un martillo en la pared, es evidente de inmediato si el martillo falta o si alguien intentó poner un destornillador en su lugar. No necesitas preguntar "¿Dónde está el martillo?".'
    }
  },
  {
    id: 'kpi',
    program: Program.LEAN,
    title: 'KPIs',
    emoji: '📈',
    definition: 'Indicadores Clave de Desempeño. Métricas que importan.',
    keyPoints: ['SMART', 'Leading vs Lagging', 'Alineación estratégica'],
    category: Category.ANALYSIS,
    extendedContent: {
      deepDefinition: 'Los KPI (Key Performance Indicators) son métricas cuantificables seleccionadas estratégicamente que reflejan el rendimiento crítico de una organización. No son simples números; son herramientas de navegación que indican si nos estamos acercando o alejando de los objetivos estratégicos.',
      context: 'Diferencia entre métrica y KPI: Todo dato medible es una métrica, pero solo es KPI si es clave para la toma de decisiones. "Parálisis por análisis" ocurre cuando se mide todo sin discriminar relevancia.',
      methodology: [
        'Características SMART: Específicos, Medibles, Alcanzables, Relevantes y Temporalizados.',
        'Tipos de Indicadores:',
        '- Lagging Indicators (Reactivos/Resultado): Miden lo que ya pasó. Ej: Ventas del mes, Accidentes reportados. Son fáciles de medir pero difíciles de influenciar directamente.',
        '- Leading Indicators (Inductores/Predictivos): Miden actividades que influyen en el resultado futuro. Ej: Número de llamadas a clientes, % de uso de EPP. Permiten corrección temprana.',
        'Gestión Diaria: Los KPIs deben revisarse en reuniones diarias de 5 minutos (Tier Meetings).'
      ],
      example: 'En seguridad industrial: El número de accidentes (Lagging) te dice cuánta gente se lastimó. El número de reportes de condiciones inseguras cerrados (Leading) predice y previene los accidentes futuros. Un buen sistema se enfoca en los Leading.'
    }
  },
  {
    id: '5w1h',
    program: Program.LEAN,
    title: '5 W\'s 1 H',
    emoji: '❓',
    definition: 'Herramienta de interrogación estructurada para definir problemas.',
    keyPoints: ['Definición completa', 'Contexto total', 'Sin ambigüedad'],
    category: Category.ANALYSIS,
    extendedContent: {
      deepDefinition: 'La técnica 5W1H es un marco metodológico para la recolección exhaustiva de información y la definición precisa de problemas. Se utiliza para asegurar que ningún aspecto del contexto se omita antes de intentar resolver una situación. Es esencial en la fase de "Definición" de cualquier proyecto de mejora.',
      context: 'A menudo confundido con los "5 Porqués" (que buscan causa raíz), el 5W1H busca la DESCRIPCIÓN completa del fenómeno. Una mala definición del problema lleva a soluciones irrelevantes.',
      methodology: [
        'Elementos:',
        '1. What (Qué): Descripción del objeto o defecto. ¿Qué pasó?',
        '2. Where (Dónde): Ubicación geográfica y en el objeto. ¿En qué parte de la pieza?',
        '3. When (Cuándo): Tiempo, frecuencia, secuencia. ¿En qué turno? ¿Al arranque?',
        '4. Who (Quién): Personas involucradas, afectadas o que detectaron. (No para culpar, sino para entender habilidad/entrenamiento).',
        '5. Why (Por qué - Preliminar): ¿Cuál es el impacto o justificación de la tarea?',
        '6. How (Cómo): Método o circunstancias en las que ocurre.',
        'Extra: How Much (Cuánto): Costo o cantidad.'
      ],
      example: 'Problema mal definido: "La máquina falla". Problema definido con 5W1H: "La prensa hidráulica #3 (Where) tiene una fuga de aceite (What) en el sello del pistón principal (Where exacto) durante el ciclo de alta presión (When), detectado por el operario del turno noche (Who), causando paradas de 15 min (How much)."'
    }
  },

  // =================================================================
  // SIX SIGMA DATA
  // =================================================================
  {
    id: 'six-sigma-def',
    program: Program.SIX_SIGMA,
    title: 'Fundamentos Six Sigma',
    emoji: '🎯',
    definition: 'Metodología estadística para reducir la variación a 3.4 DPMO.',
    keyPoints: ['3.4 DPMO', 'Y = f(x)', 'Reducción de variación', 'Enfoque financiero'],
    category: Category.FUNDAMENTALS,
    visualization: 'bell-curve',
    extendedContent: {
      deepDefinition: 'Six Sigma es una estrategia de gestión empresarial rigurosa y orientada a datos, diseñada para eliminar defectos en cualquier proceso. El término estadístico "Six Sigma" se refiere a un proceso que tiene 6 desviaciones estándar entre la media y el límite de especificación más cercano. Esto se traduce en un nivel de calidad del 99.99966%, o no más de 3.4 defectos por millón de oportunidades (DPMO).',
      context: 'Mientras Lean se enfoca en la velocidad y el desperdicio, Six Sigma se enfoca en la PRECISIÓN y la VARIACIÓN. Un proceso Six Sigma es tan robusto que es casi imposible generar un defecto. Es vital para industrias críticas (aeronáutica, médica).',
      methodology: [
        'Ecuación de Transferencia Y = f(x): Concepto central donde "Y" es la salida (variable dependiente/efecto) y "x" son las entradas (variables independientes/causas). Para controlar el resultado, debes controlar las entradas.',
        'El Desplazamiento de 1.5 Sigma: Motorola determinó empíricamente que los procesos tienden a desviarse 1.5 sigmas de su media a largo plazo. Por eso, el cálculo de 3.4 DPMO técnicamente corresponde a 4.5 sigmas en una distribución normal estándar, incluyendo este "colchón" de seguridad.',
        'Infraestructura: No es solo estadística, requiere liderazgo y roles definidos (Champions, Master Black Belts, Black Belts, Green Belts).'
      ],
      example: 'Si una aerolínea opera a nivel 3 Sigma (93.3% bueno), tendríamos cientos de accidentes diarios. A nivel 6 Sigma, habría un accidente cada varios años. La diferencia entre "bueno" y "perfecto" es exponencial en su impacto.',
      examTrap: 'Six Sigma busca reducir la VARIACIÓN. Lean busca reducir el DESPERDICIO. Six Sigma se centra en la eficacia (calidad), Lean en la eficiencia (flujo).'
    }
  },
  {
    id: 'limits-usl-ucl',
    program: Program.SIX_SIGMA,
    title: 'Límites: USL vs UCL',
    emoji: '📏',
    definition: 'Diferencia crítica entre lo que el cliente quiere y lo que el proceso da.',
    keyPoints: ['VOC vs VOP', 'USL/LSL son fijos', 'UCL/LCL son calculados', 'No confundir'],
    category: Category.FUNDAMENTALS,
    visualization: 'control-chart',
    extendedContent: {
      deepDefinition: 'Entender la diferencia entre Límites de Especificación y Límites de Control es la prueba de fuego de un Black Belt. Los Límites de Especificación (USL/LSL) son establecidos por el diseño o el cliente y representan la "Voz del Cliente" (VOC) - lo que DEBE ser. Los Límites de Control (UCL/LCL) son calculados estadísticamente a partir de los datos del proceso (+/- 3 sigmas) y representan la "Voz del Proceso" (VOP) - lo que el proceso ES capaz de hacer actualmente.',
      context: 'Un error gerencial catastrófico es tratar de "ajustar" la máquina basándose en los límites de especificación en lugar de los límites de control, o quejarse de que los límites de control son "demasiado anchos".',
      methodology: [
        'Reglas Inmutables:',
        '1. Los Límites de Especificación (USL/LSL) NO CAMBIAN a menos que el cliente cambie el requisito.',
        '2. Los Límites de Control (UCL/LCL) CAMBIAN cada vez que recalculas la variación del proceso.',
        '3. La Capacidad (Cp/Cpk) es la relación entre el ancho de Especificación y el ancho de Control.',
        '4. NUNCA pongas límites de especificación en una Gráfica de Control (X-Bar). La gráfica de control monitorea estabilidad, no capacidad.'
      ],
      example: 'Imagina un garaje (Especificación/Cliente) y un coche (Proceso). El garaje tiene paredes de concreto fijas. El coche tiene un ancho determinado. Los límites de control te dicen cuánto se bambolea el coche al entrar. Si el coche se bambolea mucho (Límites de control anchos), chocará con las paredes del garaje.',
      examTrap: '¡TRAMPA! Un proceso puede estar "Bajo Control Estadístico" (estable, predecible, dentro de UCL/LCL) y aun así producir 100% de basura (si está fuera de USL/LSL). Estabilidad no es lo mismo que Calidad.'
    }
  },
  {
    id: 'variation-types',
    program: Program.SIX_SIGMA,
    title: 'Tipos de Variación',
    emoji: '🎲',
    definition: 'Causas Comunes (Ruido del sistema) vs Causas Especiales (Señales).',
    keyPoints: ['Aleatorio vs Asignable', 'Sistema vs Evento', 'Estrategia de mejora distinta'],
    category: Category.FUNDAMENTALS,
    extendedContent: {
      deepDefinition: 'W. Edwards Deming enseñó que existen dos tipos fundamentales de variación. Las Causas Comunes son inherentes al sistema, aleatorias y predecibles dentro de límites (ruido de fondo). Las Causas Especiales (o Asignables) son eventos externos, esporádicos e impredecibles que sacan al proceso de control. Distinguirlas es vital porque requieren estrategias de solución opuestas.',
      context: 'El "Tampering" (Sobreajuste) ocurre cuando un operador trata de corregir una Causa Común como si fuera Especial (ajustando la máquina ante variaciones normales), lo cual matemáticamente aumenta la variación total del sistema.',
      methodology: [
        'Estrategia para Causas Especiales (Fuera de Control):',
        '- Acción inmediata y local.',
        '- Preguntar "¿Qué pasó hoy diferente?".',
        '- Objetivo: Eliminar la causa y volver a la estabilidad.',
        '- Responsable: Operador / Supervisor.',
        'Estrategia para Causas Comunes (Proceso estable pero con mucha variación):',
        '- Acción sistémica y de largo plazo.',
        '- Requiere inversión, cambio de tecnología, rediseño o cambio de materia prima.',
        '- Objetivo: Reducir la desviación estándar (estrechar la campana).',
        '- Responsable: Gerencia / Ingeniería (Black Belt).'
      ],
      example: 'Tiempo de viaje al trabajo. Causa Común: Semáforos, tráfico habitual (tardas entre 25-30 min). Causa Especial: Un choque, huelga de transporte, llanta ponchada (tardas 60 min). No puedes eliminar los semáforos saliendo antes (eso requiere rediseño de ruta/sistema), pero sí puedes arreglar la llanta (acción local).'
    }
  },
  {
    id: 'dmaic-overview',
    program: Program.SIX_SIGMA,
    title: 'DMAIC',
    emoji: '🔄',
    definition: 'El ciclo de vida estándar de un proyecto Six Sigma.',
    keyPoints: ['Define', 'Measure', 'Analyze', 'Improve', 'Control', 'Estructura lógica'],
    category: Category.DMAIC,
    extendedContent: {
      deepDefinition: 'DMAIC es la metodología estructurada de resolución de problemas de 5 fases utilizada en proyectos Six Sigma para mejorar procesos EXISTENTES. Proporciona una hoja de ruta estricta ("Roadmap") que obliga a no saltar a conclusiones y basar cada paso en evidencia estadística.',
      context: 'A diferencia del enfoque tradicional de "Prueba y Error", DMAIC asegura que identificamos la verdadera causa raíz antes de gastar dinero en soluciones.',
      methodology: [
        'DEFINE (Definir): Establecer el alcance, problema comercial, metas y equipo. Herramientas: Project Charter, SIPOC, Voz del Cliente (CTQ).',
        'MEASURE (Medir): Validar que podemos medir confiablemente (Gage R&R) y establecer la línea base del desempeño actual (Sigma Level). Recolectar datos de las Y\'s.',
        'ANALYZE (Analizar): Convertir el problema real en un problema estadístico. Identificar las causas raíz (X\'s) vitales que impactan la Y. Herramientas: Pruebas de Hipótesis, Regresión, ANOVA.',
        'IMPROVE (Mejorar): Desarrollar, probar e implementar soluciones para las causas raíz validadas. Optimizar el proceso (DOE).',
        'CONTROL (Controlar): Sostener las ganancias. Crear el Plan de Control, actualizar AMEF, estandarizar y cerrar el proyecto.'
      ],
      example: 'Problema: Facturas con errores. D: Definir error como "monto incorrecto". M: Medir que el 15% tienen error. A: Analizar y descubrir que el software falla con moneda extranjera (Causa Raíz). I: Parchear software. C: Auditoría automática mensual para asegurar que no vuelva a fallar.'
    }
  },
  {
    id: 'histogram-normal',
    program: Program.SIX_SIGMA,
    title: 'Histograma y Normal',
    emoji: '🔔',
    definition: 'Distribución de datos, Campana de Gauss y Propiedades.',
    keyPoints: ['Tendencia central (Media)', 'Dispersión (Desviación)', 'Simetría', 'Regla 68-95-99.7'],
    category: Category.STATS_TOOLS,
    visualization: 'bell-curve',
    extendedContent: {
      deepDefinition: 'El histograma es la representación gráfica de la frecuencia de los datos. En Six Sigma, el "Santo Grial" es la Distribución Normal (Campana de Gauss), un modelo matemático donde los datos se distribuyen simétricamente alrededor de la media. Entender la forma de los datos es el primer paso del análisis estadístico.',
      context: 'El Teorema del Límite Central indica que la suma de muchas variables aleatorias independientes tiende a una distribución normal. Esto valida el uso de muchas herramientas estadísticas paramétricas.',
      methodology: [
        'Parámetros Clave:',
        '- Media (μ): Ubicación central o promedio.',
        '- Desviación Estándar (σ): Medida de dispersión (ancho de la curva).',
        'Regla Empírica (68-95-99.7):',
        '- +/- 1σ contiene el 68.27% de los datos.',
        '- +/- 2σ contiene el 95.45% de los datos.',
        '- +/- 3σ contiene el 99.73% de los datos.',
        'Prueba de Normalidad (Anderson-Darling): Valor P > 0.05 indica que los datos son normales. Si P < 0.05, los datos no son normales y debes usar herramientas no paramétricas.'
      ],
      example: 'La altura de los varones adultos en un país sigue una curva normal. La mayoría está en el promedio (pico de la campana). Hay la misma cantidad de gente muy baja que muy alta (simetría). Es extremadamente raro encontrar a alguien de 2.5 metros (colas de la distribución, más allá de 3 sigmas).'
    }
  },
  {
    id: 'control-charts',
    program: Program.SIX_SIGMA,
    title: 'Gráficas de Control',
    emoji: '📉',
    definition: 'La voz del proceso a través del tiempo. Detección de inestabilidad.',
    keyPoints: ['Límites 3 Sigma', 'Reglas de Nelson', 'X-Bar R', 'Estabilidad vs Capacidad'],
    category: Category.STATS_TOOLS,
    visualization: 'control-chart',
    extendedContent: {
      deepDefinition: 'Las Gráficas de Control (SPC) son gráficos de series temporales con tres líneas clave: la Línea Central (Promedio) y los Límites de Control Superior e Inferior (UCL/LCL) calculados a +/- 3 desviaciones estándar. Su único propósito es responder: ¿Es el proceso estable y predecible a través del tiempo?',
      context: 'Fueron inventadas por Walter Shewhart en Bell Labs (1920s). Son el "electrocardiograma" del proceso.',
      methodology: [
        'Elección de Gráfica:',
        '- Datos Continuos (Subgrupos): X-Bar R (Promedios y Rangos) - La más potente.',
        '- Datos Continuos (Individuales): I-MR - Para procesos lentos o lotes unitarios.',
        '- Datos Atributos (Defectuosos): P-Chart (Proporción), NP-Chart (Cantidad).',
        '- Datos Atributos (Defectos): C-Chart, U-Chart.',
        'Interpretación (Reglas de Nelson/Western Electric):',
        '1. Un punto fuera de los límites de control (Causa Especial obvia).',
        '2. Tendencia: 6 puntos consecutivos subiendo o bajando.',
        '3. Racha: 9 puntos consecutivos del mismo lado de la media.'
      ],
      example: 'Imagina medir tu presión arterial cada mañana. Si oscila entre 110 y 130, es normal (causa común). Si un día amaneces en 180 (fuera de límite), algo grave pasó (causa especial, señal de alerta). Si sube 1 punto cada día por 2 semanas, hay una tendencia peligrosa de salud.'
    }
  },
  {
    id: 'pareto',
    program: Program.SIX_SIGMA,
    title: 'Diagrama de Pareto',
    emoji: '📊',
    definition: 'Principio 80/20. Pocos vitales, muchos triviales.',
    keyPoints: ['Priorización', 'Orden descendente', 'Frecuencia acumulada', 'Separar vitales'],
    category: Category.STATS_TOOLS,
    visualization: 'pareto',
    extendedContent: {
      deepDefinition: 'El Diagrama de Pareto es un gráfico de barras combinado con una línea de porcentaje acumulado, que ayuda a priorizar problemas o causas basándose en el principio de que el 80% de los efectos provienen del 20% de las causas (Ley de los Pocos Vitales). Es la herramienta principal para decidir "qué batalla pelear primero".',
      context: 'Joseph Juran aplicó el principio de Vilfredo Pareto a la calidad. En un proyecto Six Sigma, se usa en la fase Measure/Analyze para filtrar docenas de posibles X\'s a las pocas críticas que realmente mueven la aguja.',
      methodology: [
        'Construcción:',
        '1. Categorizar datos (ej. tipos de rechazo).',
        '2. Contar frecuencia y ordenar de mayor a menor (Barras).',
        '3. Calcular porcentaje individual y acumulado (Línea).',
        '4. Aplicar la regla del corte (usualmente al 80%).',
        'Niveles de Pareto: A menudo se requiere un "Segundo Nivel". Si la barra más alta es "Defectos de Pintura", haces un segundo Pareto solo de esos defectos para ver si es "Tono", "Rayas" o "Burbujas".'
      ],
      example: 'En un Call Center, las quejas son por: Tiempo de espera (500), No resolvió problema (300), Mala actitud (20), Audio bajo (5). Atacando solo "Tiempo de espera" y "No resolución" eliminas el 90% de las quejas. Gastar dinero en mejorar los micrófonos (Audio) no impactará la satisfacción general.'
    }
  },
  {
    id: 'fishbone',
    program: Program.SIX_SIGMA,
    title: 'Ishikawa (Pez)',
    emoji: '🐟',
    definition: 'Diagrama Causa-Efecto para estructurar la búsqueda de la raíz.',
    keyPoints: ['6 Ms', 'Lluvia de ideas', 'Causas potenciales', 'No soluciones'],
    category: Category.STATS_TOOLS,
    extendedContent: {
      deepDefinition: 'El Diagrama de Ishikawa (o Espina de Pescado) es una herramienta visual de lluvia de ideas que categoriza sistemáticamente las causas potenciales de un problema. No ofrece respuestas estadísticas, sino que estructura el conocimiento colectivo del equipo para generar hipótesis que luego serán validadas con datos.',
      context: 'Creado por Kaoru Ishikawa (1943). Evita la "visión de túnel" donde el equipo solo culpa al operario o al material, obligando a considerar todas las facetas del proceso.',
      methodology: [
        'Estructura (Las 6 M de Manufactura):',
        '1. Man (Mano de Obra): ¿Fatiga? ¿Entrenamiento? ¿Actitud?',
        '2. Machine (Maquinaria): ¿Calibración? ¿Desgaste? ¿Mantenimiento?',
        '3. Material: ¿Proveedor? ¿Cambio de lote? ¿Especificaciones?',
        '4. Method (Método): ¿SOP incorrecto? ¿Proceso inseguro?',
        '5. Measurement (Medición): ¿El instrumento sirve? ¿Error de lectura?',
        '6. Mother Nature (Medio Ambiente): ¿Humedad? ¿Temperatura? ¿Ruido?',
        'Técnica: Preguntar "¿Por qué?" repetidamente en cada rama para llegar a sub-causas más profundas.'
      ],
      example: 'Efecto: El café sabe mal. Ramas: Método (Temperatura del agua incorrecta), Material (Grano vencido), Maquinaria (Cafetera sucia), Hombre (Barista novato), Medio Ambiente (Humedad afectó el grano).'
    }
  },
  {
    id: 'capability-cp-cpk',
    program: Program.SIX_SIGMA,
    title: 'Capacidad (Cp vs Cpk)',
    emoji: '📐',
    definition: 'Métricas para saber si el proceso es capaz de cumplir con el cliente.',
    keyPoints: ['Cp = Potencial (Ancho)', 'Cpk = Realidad (Centrado)', 'Objetivo > 1.33'],
    category: Category.CAPABILITY,
    visualization: 'cp-cpk',
    extendedContent: {
      deepDefinition: 'El análisis de capacidad responde a la pregunta final: ¿Puede mi proceso cumplir consistentemente con las especificaciones del cliente? Compara la amplitud de la variación del proceso (6 sigmas) contra la amplitud de la tolerancia permitida (USL - LSL).',
      context: 'Es el lenguaje universal de la calidad en cadenas de suministro (ej. Automotriz requiere Cpk > 1.33 para aprobar una parte, Aeroespacial > 1.67). Un proceso bajo control estadístico NO necesariamente es capaz.',
      methodology: [
        'Cp (Capacidad Potencial): Mide qué tan bueno "podría" ser el proceso si estuviera perfectamente centrado. Fórmula: (USL - LSL) / 6σ. Solo mira el ancho de la campana vs el ancho de la meta.',
        'Cpk (Capacidad Real): Penaliza si el proceso no está centrado. Toma el peor escenario entre la media y el límite superior o inferior. Fórmula: Min [ (USL - μ)/3σ , (μ - LSL)/3σ ].',
        'Interpretación:',
        '- Cpk < 1.0: Malo. Genera defectos (Rechazar).',
        '- Cpk = 1.0: Justo en el límite (3 Sigma). Cualquier movimiento genera defectos.',
        '- Cpk = 1.33: Bueno (4 Sigma). Estándar industrial.',
        '- Cpk = 2.0: Excelencia Six Sigma (6 Sigma).'
      ],
      example: 'Estacionar en un garaje. Cp: ¿Es tu coche más angosto que la puerta? (Si Cp > 1, sí cabe). Cpk: ¿Eres buen conductor y lo metes al centro? Si tienes un coche pequeño (buen Cp) pero lo manejas pegado a la pared izquierda, rasparás el espejo (mal Cpk). Cpk nunca puede ser mayor que Cp.'
    }
  }
];

export const WASTES_DATA: WasteData[] = [
  { 
    name: 'Sobreproducción', 
    emoji: '📦',
    desc: 'Producir más o antes de lo necesario.', 
    details: 'Considerado el "Padre de todos los desperdicios" porque esconde los problemas y genera los otros 6 desperdicios. Rompe el flujo y estanca capital.',
    consequences: 'Aumenta stock, requiere más espacio, esconde averías y falta de calidad, consume materia prima antes de tiempo.'
  },
  { 
    name: 'Espera', 
    emoji: '⌛',
    desc: 'Tiempo inactivo de personas o máquinas.', 
    details: 'Operarios esperando material, esperando que la máquina termine el ciclo, esperando instrucciones, o esperando mantenimiento. Es tiempo pagado sin valor.',
    consequences: 'Cuellos de botella, flujo interrumpido, frustración del empleado, baja productividad laboral.'
  },
  { 
    name: 'Transporte', 
    emoji: '🚚',
    desc: 'Movimiento innecesario de materiales.', 
    details: 'Mover el producto de un almacén a otro, o entre procesos lejanos. El cliente no paga porque pasees el producto por la planta. Agrega riesgo de daño.',
    consequences: 'Daño al producto (golpes), costo de combustible/energía, necesidad de montacargas y pasillos anchos.'
  },
  { 
    name: 'Sobre-procesamiento', 
    emoji: '🔨',
    desc: 'Hacer más trabajo o de mayor calidad de lo requerido.', 
    details: 'Procesos ineficientes, tolerancias demasiado ajustadas que no afectan la función, pintar zonas que no se ven, limpiar piezas dos veces.',
    consequences: 'Desgaste prematuro de herramientas, tiempo de ciclo elevado, uso excesivo de energía y consumibles.'
  },
  { 
    name: 'Inventario', 
    emoji: '🏭',
    desc: 'Exceso de materia prima, WIP o producto terminado.', 
    details: 'Cualquier material que no se está transformando activamente. El inventario cubre los problemas del proceso (como el agua cubre las rocas).',
    consequences: 'Costo financiero (dinero parado), obsolescencia (se daña o pasa de moda), requiere almacenes y gestión compleja.'
  },
  { 
    name: 'Movimientos', 
    emoji: '🚶',
    desc: 'Movimiento humano innecesario (Ergonomía).', 
    details: 'Operario caminando para buscar herramientas, agachándose, estirándose o girando excesivamente. Diferente a transporte (que es de materiales).',
    consequences: 'Fatiga física, lesiones musculoesqueléticas, tiempo perdido dentro del ciclo de trabajo, inconsistencia.'
  },
  { 
    name: 'Defectos', 
    emoji: '❌',
    desc: 'Productos que no cumplen y requieren retrabajo o chatarra.', 
    details: 'El desperdicio más obvio. Incluye el material perdido, el tiempo usado para hacerlo mal, y el tiempo usado para arreglarlo o inspeccionarlo.',
    consequences: 'Costos de garantía, pérdida de clientes, reprogramación de producción, costos de disposición de residuos.'
  }
];