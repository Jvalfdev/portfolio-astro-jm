/**
 * Datos del portafolio — alineados con LinkedIn (perfil público jvalf).
 * Email de contacto: completá `contact.email` con el que quieras mostrar.
 */

export const siteMeta = {
	lang: "es",
	title: "Jose Vallejo — Software Engineer | Java Spring · C# · Angular",
	description:
		"Ingeniero de software en entornos ágiles (Java Spring, C#, Angular). Madrid. Capgemini. Experiencia previa en PlusNet, Accenture y liderazgo técnico en el Ministerio de Defensa.",
};

export const identity = {
	name: "Jose Vallejo",
	tagline: "Software Engineer · Java Spring · C# · Angular · Agile",
	roleShort: "Java Spring · C# · Angular · Entornos ágiles",
	heroLead:
		"Ingeniero de software con experiencia sólida en Java Spring, C# y Angular. Trabajo en equipos ágiles: colaboración, entrega iterativa y foco en calidad. Mi trayectoria previa en gestión técnica (Defensa) refuerza disciplina y rigor en cada proyecto.",
	heroTags: [
		"Spring Boot",
		"Java",
		"C#",
		".NET",
		"Angular",
		"AWS",
		"Agile",
	],
};

export const about = {
	sectionLabel: "01 — Sobre mí",
	headline: "Código claro, equipos alineados, impacto medible.",
	stats: [
		{ value: "4+", label: "Años en desarrollo software" },
		{ value: "4+", label: "Java & Spring (producción)" },
		{ value: "7+", label: "Años liderando equipos técnicos" },
	],
	timelineHint: [
		{ year: "2014–2022", role: "Gestión técnica (Defensa)" },
		{ year: "2020–2022", role: "DAM · UAX" },
		{ year: "2022–2024", role: "Java Developer" },
		{ year: "2024–hoy", role: "Software Engineer" },
	],
	paragraphs: [
		"Soy desarrollador de software con foco en Java Spring, C# y Angular, y experiencia en entornos ágiles: colaboración, iteración y mejora continua.",
		"Mi etapa en el Ministerio de Defensa como responsable de equipo técnico marcó mi forma de trabajar: orden, responsabilidad y claridad. La transición al desarrollo profesional (DAM, prácticas y primeros roles) encaja con ese mismo enfoque estructurado.",
		"Sigo formándome (APIs REST, OpenAPI, MongoDB, AWS…). En paralelo comparto proyectos y código en GitHub con herramientas del ecosistema JavaScript cuando aplica.",
	],
	testimonial: {
		quote:
			"Además de su sólida formación técnica, José destaca por sus excepcionales habilidades de liderazgo y gestión de equipos. Es un profesional generoso y colaborativo, siempre dispuesto a compartir su conocimiento y brindar apoyo a sus compañeros. Su enfoque proactivo y orientado a la resolución de problemas lo convierte en un gran referente dentro de cualquier equipo.",
		author: "Adriano Díaz Benítez",
		context: "Software Engineer · Java · Spring · Microservices · Jul 2025",
	},
};

export type Job = {
	from: string;
	to: string;
	title: string;
	company: string;
	location?: string;
	summary: string;
	tags: string[];
};

export const experience: Job[] = [
	{
		from: "Jul 2024",
		to: "Presente",
		title: "Software Engineer",
		company: "Capgemini",
		location: "Madrid, España · Jornada completa",
		summary:
			"Desarrollo de software en entorno de consultoría: soluciones enterprise, trabajo en equipo ágil y stack alineado con Java/Spring y ecosistema corporativo.",
		tags: ["Java", "Spring Boot", "Angular", "Agile", "Enterprise"],
	},
	{
		from: "Ago 2022",
		to: "Jul 2024",
		title: "Java Developer",
		company: "PlusNet Solutions",
		location: "Jornada completa",
		summary:
			"Desarrollo backend y full stack con Java y Spring Boot, participación en proyectos de producto y entrega continua en contexto ágil.",
		tags: ["Java", "Spring Boot", "Angular", "Agile"],
	},
	{
		from: "Jul 2022",
		to: "Ago 2022",
		title: "C# Developer",
		company: "Accenture España",
		location: "Jornada completa",
		summary:
			"Desarrollo con C# y .NET en proyectos de cliente, integración en equipos de consultoría.",
		tags: ["C#", ".NET", "Consultoría"],
	},
	{
		from: "Mar 2022",
		to: "Jul 2022",
		title: "Software Developer (prácticas)",
		company: "Grupo Epelsa · soluciones de pesaje y etiquetado (retail e industrial)",
		location: "Madrid, España",
		summary:
			"Prácticas del ciclo formativo: desarrollo de software en entorno industrial/retail, aportación a equipos técnicos y aprendizaje aplicado.",
		tags: ["Desarrollo", "Prácticas"],
	},
	{
		from: "Sep 2014",
		to: "Mar 2022",
		title: "Responsable de equipo técnico",
		company: "Ministerio de Defensa Español",
		location: "Madrid, España · Funcionario de carrera",
		summary:
			"Dirección y coordinación de equipo técnico (43.ª promoción AGBS). Gestión de personas y procesos, planificación y entrega bajo exigencia operativa. Base del perfil disciplinado que aplico hoy en ingeniería de software.",
		tags: ["Liderazgo", "Gestión de equipos", "Planificación"],
	},
];

export type EducationItem = {
	kind: "cert" | "degree";
	title: string;
	issuer: string;
	year: string;
};

export const education: EducationItem[] = [
	{
		kind: "degree",
		title: "DAM — Desarrollo de aplicaciones multiplataforma",
		issuer: "Universidad Alfonso X el Sabio (UAX)",
		year: "2020 – 2022",
	},
	{
		kind: "degree",
		title: "Grado en Logística, materiales y cadena de suministro",
		issuer: "Logistic Academy",
		year: "2014 – 2018",
	},
	{
		kind: "cert",
		title: "Diseño, mock y test de APIs RESTful con Apicurio y Microcks",
		issuer: "Udemy · OpenAPI & API First",
		year: "Dic 2024",
	},
	{
		kind: "cert",
		title: "MongoDB SI Associate Certification",
		issuer: "MongoDB",
		year: "Oct 2024",
	},
];

export const projects = {
	sectionLabel: "04 — Proyectos y código",
	intro:
		"Repositorios y experimentos en GitHub (C#, proyectos personales, aprendizaje). Complementa el perfil profesional con código público.",
	items: [
		{
			name: "GitHub — Jvalfdev",
			description: "Código público: proyectos, ejercicios y repos activos.",
			href: "https://github.com/Jvalfdev",
			stack: ["GitHub", "Varios lenguajes"],
		},
		{
			name: "Perfil profesional en LinkedIn",
			description: "Trayectoria detallada, recomendaciones y certificaciones.",
			href: "https://www.linkedin.com/in/jvalf/",
			stack: ["LinkedIn"],
		},
	],
};

export const social = {
	linkedin: "https://www.linkedin.com/in/jvalf/",
	github: "https://github.com/Jvalfdev",
};

export const contact = {
	sectionLabel: "05 — Contacto",
	headline: "¿Hablamos?",
	sub:
		"Abierto a oportunidades de desarrollo Java/JavaScript/.NET y colaboración en equipos ágiles. Escribime o conectá por LinkedIn. Sustituí el email de ejemplo cuando quieras publicarlo.",
	email: "tu-email@ejemplo.com",
	calendarUrl: "",
};
