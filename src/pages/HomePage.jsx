import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Loader2, Ruler, Cpu, Cog, Hand, ClipboardCheck, Truck, ShieldCheck, Leaf, Award, Phone, Mail, MapPin, PenTool, Factory } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import WhatsAppLogo from '@/components/WhatsAppLogo';
import logo from '@/assets/img/logocanale.webp';
import hero from '@/assets/img/hero.webp';
import pallets1 from '@/assets/img/productos/pallets-1.webp';
import pallets2 from '@/assets/img/productos/pallets-2.webp';
import pallets3 from '@/assets/img/productos/pallets-3.webp';
import cajones1 from '@/assets/img/productos/cajones-1.webp';
import cajones2 from '@/assets/img/productos/cajones-2.webp';
import cajones3 from '@/assets/img/productos/cajones-3.webp';
import pellets1 from '@/assets/img/productos/pellets-1.webp';
import pellets2 from '@/assets/img/productos/pellets-2.webp';
import pellets3 from '@/assets/img/productos/pellets-3.webp';
import remanufacturas1 from '@/assets/img/productos/remanufacturas-1.webp';
import remanufacturas2 from '@/assets/img/productos/remanufacturas-2.webp';
import remanufacturas3 from '@/assets/img/productos/remanufacturas-3.webp';
import cnc from '@/assets/img/cnc.webp';
import logistica from '@/assets/img/camiones.webp';
import historia from '@/assets/img/historia.webp'


const NAV = [
    { label: 'Productos', href: '#productos' },
    { label: 'Industrias', href: '#industrias' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Empresa', href: '#empresa' },
    { label: 'Calidad', href: '#calidad' },
    { label: 'Contacto', href: '#contacto' },
];

const TELEFONO_E164 = '5493525530410';
const WHATSAPP_MENSAJE = 'Hola, quiero consultar sobre embalajes de madera';
const WHATSAPP_URL = `https://wa.me/${TELEFONO_E164}?text=${encodeURIComponent(WHATSAPP_MENSAJE)}`;

function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return undefined;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur">
            <div className="rail flex h-[72px] items-center justify-between gap-6">
                <a href="#inicio" className="flex items-center">
                    <img
                        src={logo}
                        alt="Canale SRL"
                        className="h-16 w-auto"
                    />
                </a>
                <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
                    {NAV.map((n) => (
                        <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <a href="#contacto" className="hidden items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:brightness-110 active:scale-[0.98] sm:inline-flex">
                        Solicitar asesoramiento
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={open}
                        aria-controls="menu-movil"
                        className="lg:hidden p-3 -mr-3 text-foreground"
                    >
                        {open ? <X className="h-6 w-6" strokeWidth={1.75} /> : <Menu className="h-6 w-6" strokeWidth={1.75} />}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="menu-movil-backdrop"
                        className="fixed inset-x-0 bottom-0 top-[72px] z-40 bg-neutral-950/20 lg:hidden"
                        onClick={() => setOpen(false)}
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {open && (
                    <motion.nav
                        id="menu-movil"
                        aria-label="Navegación móvil"
                        className="absolute inset-x-0 top-full z-50 border-t border-border/60 bg-white shadow-lg lg:hidden"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="rail flex flex-col py-2">
                            {NAV.map((n) => (
                                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-border/60 py-4 text-base font-medium text-foreground">{n.label}</a>
                            ))}
                            <a href="#contacto" onClick={() => setOpen(false)} className="mt-4 mb-4 bg-primary px-5 py-4 text-center text-base font-semibold text-primary-foreground">Solicitar asesoramiento</a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}

function Hero() {
    return (
        <section id="inicio" className="relative min-h-[100dvh] w-full overflow-hidden bg-neutral-950">
            <img src={hero} alt="Planta industrial de Canale SRL con pallets de madera y cajones para exportación en Córdoba, Argentina" className="absolute inset-0 h-full w-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/20" aria-hidden="true" />
            <div className="rail relative flex min-h-[100dvh] flex-col justify-center pt-24 pb-28 sm:pt-28 sm:pb-32">
                <Reveal>
                    <p className="mb-6 inline-flex items-center gap-3 border border-white/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85">
                        <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" /> 1976 — 2026 · más de 50 años de trayectoria
                    </p>
                </Reveal>
                <Reveal delay={0.08}>
                    <h1 className="font-display max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[4rem]">
                        Soluciones de embalaje de madera para proteger, almacenar y trasladar su producción.
                    </h1>
                </Reveal>
                <Reveal delay={0.16}>
                    <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                        Diseñamos y fabricamos pallets, tarimas, cajones y embalajes personalizados para empresas que necesitan calidad, respuesta y respaldo.
                    </p>
                </Reveal>
                <Reveal delay={0.24}>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="#contacto" className="inline-flex min-h-[52px] items-center gap-2 bg-primary px-7 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:brightness-110 active:scale-[0.98]">
                            Solicitar asesoramiento <ArrowRight className="h-4 w-4" strokeWidth={2} />
                        </a>
                        <a href="#productos" className="inline-flex min-h-[52px] items-center gap-2 border border-white/40 px-7 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-foreground">
                            Ver productos
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

const STATS = [
    { value: 50, prefix: '+', label: 'años de trayectoria' },
    { value: 100, prefix: '+', label: 'colaboradores' },
    { value: null, label: 'Diseño personalizado', icon: PenTool },
    { value: null, label: 'Capacidad productiva', icon: Factory },
    { value: null, label: 'Logística propia', icon: Truck },
];

function Autoridad() {
    return (
        <section className="border-b border-border bg-white py-20 lg:py-28">
            <div className="rail grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-end">
                <Reveal>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Quiénes somos</p>
                    <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                        50 años de experiencia<br /><span className="text-primary">al servicio de la industria</span>
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Desde Colonia Caroya, Córdoba, abastecemos con foco estratégico a empresas medianas y grandes de la región y provincias aledañas. Combinamos producción manual y automatizada, tecnología CNC y logística propia para resolver necesidades reales de embalaje industrial, almacenamiento y exportación.
                    </p>
                </Reveal>
            </div>
        <div className="rail mt-16 grid grid-cols-2 divide-border border-t border-border md:grid-cols-5 md:divide-x">
    {STATS.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
            <div className="border-b border-border px-1 py-8 md:border-b-0 md:px-6">
                {s.value ? (
                    <p className="font-display text-4xl font-extrabold text-foreground">
                        <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </p>
                ) : (
                    <>
                        <s.icon className="mb-3 h-8 w-8 text-primary" strokeWidth={1.5} aria-hidden="true" />
                        <span className="mb-3 block h-[3px] w-8 bg-primary" aria-hidden="true" />
                    </>
                )}
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">{s.label}</p>
            </div>
        </Reveal>
    ))}
</div>
        </section>
    );
}

const PRODUCTOS = [
    {
        id: 'pallets',
        title: 'Pallets y tarimas',
        images: [
            { src: pallets1, alt: 'Pallets de madera nuevos apilados en la planta de Canale SRL' },
            { src: pallets2, alt: 'Pallets de madera reforzados listos para despacho en Canale SRL' },
            { src: pallets3, alt: 'Operario de Canale SRL controlando la calidad de un pallet de madera' },
        ],
        text: 'Soluciones para la manipulación, el almacenamiento y el movimiento de mercadería dentro y fuera de planta. Medidas estándar o según su sistema logístico.',
        benefit: 'Económicos, reciclables y adaptables a su operación.',
        wide: true,
    },
    {
        id: 'cajones',
        title: 'Cajones y embalajes',
        images: [
            { src: cajones1, alt: 'Cajón de madera a medida para exportación en fabricación' },
            { src: cajones2, alt: 'Cajones de madera apilados en la planta de Canale SRL listos para exportación' },
            { src: cajones3, alt: 'Detalle de ensamblaje de un cajón de madera para embalaje industrial en Canale SRL' },
        ],
        text: 'Embalajes de madera diseñados a medida para proteger productos durante el almacenamiento, el traslado y la exportación, con distintos niveles de protección.',
        benefit: 'Diseño personalizado y aptos para exportación (NIMF 15).',
        wide: true,
    },
    {
        id: 'pellets',
        title: 'Pellets',
        images: [
            { src: pellets1, alt: 'Pellets de madera para calefacción y calderas industriales' },
            { src: pellets2, alt: 'Bolsas de pellets de madera apiladas para despacho en Canale SRL' },
            { src: pellets3, alt: 'Primer plano de pellets de madera producidos en la planta de Canale SRL' },
        ],
        text: 'Biocombustible de madera para calefacción doméstica, calderas industriales, industria alimenticia y aplicaciones animales.',
        benefit: 'Alto poder calórico y abastecimiento constante.',
        wide: false,
    },
    {
        id: 'remanufacturas',
        title: 'Remanufacturas de madera',
        images: [
            { src: remanufacturas1, alt: 'Listones de madera remanufacturada apilados en la planta de Canale SRL' },
            { src: remanufacturas2, alt: 'Machimbre de madera industrializada a medida producido por Canale SRL' },
            { src: remanufacturas3, alt: 'Detalle de terminación de madera remanufacturada a medida en Canale SRL' },
        ],
        text: 'Listones, machimbres y madera industrializada a medida, con la precisión dimensional y la variedad de terminaciones que cada proyecto necesita.',
        benefit: 'Medidas exactas, variedad de acabados y entrega puntual.',
        wide: false,
    },
];

function ProductoCarousel({ images }) {
    const [api, setApi] = useState(null);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if (!api) return undefined;

        const onSelect = () => setSelected(api.selectedScrollSnap());
        onSelect();
        api.on('select', onSelect);
        api.on('reInit', onSelect);

        return () => {
            api.off('select', onSelect);
            api.off('reInit', onSelect);
        };
    }, [api]);

    return (
        <Carousel setApi={setApi} opts={{ loop: true }} className="relative h-64 w-full lg:h-full lg:min-h-[280px]">
            <CarouselContent className="ml-0 h-full">
                {images.map((image) => (
                    <CarouselItem key={image.src} className="h-full pl-0">
                        <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-none border-border bg-white text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-white hover:text-primary lg:flex" />
            <CarouselNext className="right-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-none border-border bg-white text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-white hover:text-primary lg:flex" />
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
                {images.map((image, i) => (
                    <button
                        key={image.src}
                        type="button"
                        onClick={() => api?.scrollTo(i)}
                        aria-label={`Ver imagen ${i + 1} de ${images.length}`}
                        aria-current={i === selected}
                        className={`h-1.5 w-1.5 transition-colors ${i === selected ? 'bg-white' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </Carousel>
    );
}

function Productos() {
    return (
        <section id="productos" className="bg-[hsl(var(--muted))] py-20 lg:py-28">
            <div className="rail">
                <Reveal>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Productos</p>
                    <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold leading-tight text-foreground sm:text-4xl">Tres familias de producto, una misma exigencia industrial</h2>
                </Reveal>
                <div className="mt-14 grid gap-8 lg:grid-cols-2">
                    {PRODUCTOS.map((p, i) => (
                        <Reveal key={p.id} delay={i * 0.08}>
                            <article className="flex h-full flex-col overflow-hidden border border-border bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                                <div className="overflow-hidden">
                                    <ProductoCarousel images={p.images} />
                                </div>
                                <div className="group flex flex-1 flex-col p-8">
                                    <h3 className="font-display text-2xl font-bold text-foreground">{p.title}</h3>
                                    <p className="mt-4 leading-relaxed text-muted-foreground">{p.text}</p>
                                    <p className="mt-5 border-l-2 border-primary pl-4 text-sm font-semibold text-foreground">{p.benefit}</p>
                                    <a href="#contacto" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                                        Consultar {p.title.split(' ')[0].toLowerCase()} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                                    </a>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

const VARIABLES = ['Producto', 'Peso', 'Volumen', 'Nivel de protección', 'Almacenamiento', 'Traslado', 'Destino final'];

function ProblemaSolucion() {
    return (
        <section id="soluciones" className="bg-neutral-950 py-20 text-white lg:py-28">
            <div className="rail grid gap-14 lg:grid-cols-2 lg:gap-20">
                <Reveal>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">Problema / Solución</p>
                    <h2 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">Cada producto necesita una solución de embalaje diferente</h2>
                    <p className="mt-6 text-lg leading-relaxed text-white/70">
                        No fabricamos un catálogo cerrado: desarrollamos la solución que su producción necesita. Analizamos cada caso y adaptamos el diseño, los materiales y el nivel de protección al recorrido real de la mercadería.
                    </p>
                    <a href="#contacto" className="mt-9 inline-flex min-h-[52px] items-center gap-2 bg-primary px-7 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform active:scale-[0.98]">
                        Contanos qué necesitás <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </a>
                </Reveal>
                <Reveal delay={0.1}>
                    <ul className="divide-y divide-white/10 border-y border-white/10">
                        {VARIABLES.map((v, i) => (
                            <li key={v} className="flex items-center gap-5 py-5">
                                <span className="font-display text-sm font-bold text-red-400">{String(i + 1).padStart(2, '0')}</span>
                                <span className="text-lg font-medium">{v}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}

const PROCESO = [
    { icon: Ruler, title: 'Diseño a medida', text: 'Definimos geometría, materiales y refuerzos según su producto.' },
    { icon: Cpu, title: 'Tecnología CNC', text: 'Corte de precisión para piezas repetibles y encastres exactos.' },
    { icon: Cog, title: 'Producción automatizada', text: 'Maquinaria automática para grandes volúmenes y plazos firmes.' },
    { icon: Hand, title: 'Producción manual', text: 'Armado especializado para embalajes complejos o únicos.' },
    { icon: ClipboardCheck, title: 'Control de calidad', text: 'Verificación dimensional y de resistencia antes del despacho.' },
];

function Personalizacion() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="rail">
                <Reveal>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Cómo trabajamos</p>
                    <h2 className="font-display mt-4 max-w-3xl text-3xl font-bold leading-tight text-foreground sm:text-4xl">Diseñamos la solución que necesita su producto.</h2>
                </Reveal>
                <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
                    {PROCESO.map((p, i) => (
                        <Reveal key={p.title} delay={i * 0.06}>
                            <div className="group h-full bg-white p-7 transition-colors hover:bg-[hsl(var(--muted))]">
                                <p.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                                <h3 className="font-display mt-6 text-base font-bold uppercase tracking-wide text-foreground">{p.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

const INDUSTRIAS = ['Automotriz', 'Metalúrgica', 'Agro', 'Alimenticia', 'Construcción', 'Textil', 'Química', 'Logística / Exportación'];

function Industrias() {
    return (
        <section id="industrias" className="bg-[hsl(var(--secondary))] py-20 lg:py-28">
            <div className="rail">
                <Reveal>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Industrias</p>
                    <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold leading-tight text-foreground sm:text-4xl">Trabajamos con la industria argentina</h2>
                </Reveal>
                <div className="mt-12 flex flex-wrap gap-3">
                    {INDUSTRIAS.map((ind, i) => (
                        <Reveal key={ind} delay={i * 0.04}>
                            <a href="#contacto" className="inline-flex min-h-[52px] items-center gap-3 border border-foreground/15 bg-white px-6 text-base font-medium text-foreground transition-all hover:border-primary hover:text-primary">
                                <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />{ind}
                            </a>
                        </Reveal>
                    ))}
                </div>
                <div className="mt-10 overflow-hidden border-y border-foreground/10 py-4">
                    <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.22em] text-foreground/40">
                        {[...INDUSTRIAS, ...INDUSTRIAS, ...INDUSTRIAS, ...INDUSTRIAS].map((ind, i) => (
                            <span key={`${ind}-${i}`}>{ind} ·</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Capacidad() {
    return (
        <section id="empresa" className="bg-white py-20 lg:py-28">
            <div className="rail grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                <Reveal>
                    <img src={cnc} alt="Máquina CNC de corte de madera operando en la planta de Canale SRL" className="h-[360px] w-full object-cover lg:h-[460px]" />
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Capacidad y tecnología</p>
                    <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">Una planta preparada para responder a grandes clientes</h2>
                    <p className="mt-6 leading-relaxed text-muted-foreground">
                        Más de 100 colaboradores, maquinaria automática, corte CNC y líneas de producción manual conviven para sostener volumen, precisión y plazos. Nuestra logística propia asegura entregas programadas en planta.
                    </p>
                    <dl className="mt-8 grid grid-cols-2 gap-6">
                        {[['Maquinaria automática', 'Alto volumen con calidad constante'], ['Tecnología CNC', 'Precisión milimétrica en cada pieza'], ['Capacidad de respuesta', 'Plazos comprometidos y sostenidos'], ['Logística propia', 'Entregas coordinadas con su operación']].map(([t, d]) => (
                            <div key={t} className="border-t border-border pt-4">
                                <dt className="font-display text-sm font-bold uppercase tracking-wide text-foreground">{t}</dt>
                                <dd className="mt-2 text-sm text-muted-foreground">{d}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
            </div>
            <div className="rail mt-16">
                <Reveal>
                    <div className="relative overflow-hidden">
                        <img src={logistica} alt="Camiones propios de Canale SRL cargados con pallets de madera en el predio logístico" className="h-[300px] w-full object-cover lg:h-[420px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 to-transparent" aria-hidden="true" />
                        <div className="absolute bottom-0 left-0 p-8 lg:p-12">
                            <p className="font-display max-w-xl text-2xl font-bold text-white lg:text-3xl">Logística propia: control real sobre la entrega.</p>
                            <p className="mt-3 flex items-center gap-2 text-sm text-white/70"><Truck className="h-4 w-4" strokeWidth={1.75} /> Entregas programadas en todo el país</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

const NORMAS = [
    { icon: Award, tag: 'ISO 9001:2015', title: 'Sistema de gestión de calidad', text: 'Certifica que nuestros procesos de producción, control y mejora continua están documentados y auditados. Para el cliente significa entregas consistentes y trazabilidad.' },
    { icon: ShieldCheck, tag: 'NIMF 15', title: 'Tratamiento fitosanitario para exportación', text: 'Norma internacional que exige tratamiento térmico del embalaje de madera. Sin ella, la carga puede ser rechazada en aduana. Nuestros embalajes cumplen y se marcan según la norma.' },
    { icon: Leaf, tag: 'FSC', title: 'Madera de origen responsable', text: 'Trabajamos con proveedores certificados FSC, garantizando madera de bosques gestionados de forma sostenible: un requisito creciente en cadenas de suministro exigentes.' },
];

function Calidad() {
    return (
        <section id="calidad" className="bg-[hsl(var(--muted))] py-20 lg:py-28">
            <div className="rail">
                <Reveal>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Calidad y normativas</p>
                    <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold leading-tight text-foreground sm:text-4xl">Qué respaldan nuestras certificaciones</h2>
                </Reveal>
                <div className="mt-14 space-y-px bg-border">
                    {NORMAS.map((n, i) => (
                        <Reveal key={n.tag} delay={i * 0.08}>
                            <div className="grid gap-5 bg-white p-8 md:grid-cols-[220px_1fr] md:items-start md:gap-10 lg:p-10">
                                <div className="flex items-center gap-4">
                                    <n.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                                    <span className="font-display text-xl font-extrabold uppercase tracking-tight text-foreground">{n.tag}</span>
                                </div>
                                <div>
                                    <h3 className="font-display text-lg font-bold text-foreground">{n.title}</h3>
                                    <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{n.text}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

const HITOS = [
    ['1976', 'Nace el taller familiar Canale, con producción íntegramente manual.'],
    ['1990', 'Primeras líneas dedicadas a pallets para la industria metalúrgica y agro.'],
    ['2005', 'Incorporación de maquinaria automática y embalajes para exportación.'],
    ['2015', 'Certificación ISO 9001 y desarrollo del área de diseño a medida.'],
    ['2026', 'Más de 100 colaboradores, tecnología CNC, pellets y logística propia.'],
];

function Historia() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="rail grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <Reveal>
                    <img src={historia} alt="Fotografía histórica de fábrica original de Canale en la década de 1970" className="w-full object-cover grayscale" />
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Fábrica inicial · década de 1970</p>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Nuestra historia</p>
                    <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">50 años construyendo confianza.</h2>
                    <p className="mt-5 leading-relaxed text-muted-foreground">
                        Empezamos como un taller familiar de madera. Hoy somos una organización industrial con más de 100 personas que acompaña a empresas líderes en cada envío. Cambió la escala; no cambió el compromiso con cada pedido.
                    </p>
                    <ol className="mt-10 border-l border-border pl-6">
                        {HITOS.map(([year, text]) => (
                            <li key={year} className="relative pb-8 last:pb-0">
                                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 bg-primary" aria-hidden="true" />
                                <p className="font-display text-lg font-extrabold text-foreground">{year}</p>
                                <p className="mt-1 text-muted-foreground">{text}</p>
                            </li>
                        ))}
                    </ol>
                    <a href="#contacto" className="mt-4 inline-flex min-h-[52px] items-center gap-2 bg-primary px-7 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform active:scale-[0.98]">
                        Solicitar asesoramiento <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

const TIPOS = ['Pallets / Tarimas', 'Cajones / Embalajes', 'Embalaje para exportación', 'Pellets', 'Otra necesidad'];

const DIRECCION = 'Pedro Patat (N) 1500, Colonia Caroya, Córdoba, Argentina';
// Stable link to the business's own Google Maps listing — an address-search
// URL can resolve to a neighboring business instead of Canale SRL.
const MAPS_URL = 'https://maps.app.goo.gl/6fmCW1guPV7323iSA';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbgjojpv';
const ERROR_GENERICO = 'No pudimos enviar tu consulta. Probá de nuevo o escribinos directamente a canaleventas@canalesrl.com.ar.';

function Contacto() {
    const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', tipo: TIPOS[0], mensaje: '' });
    // 'idle' | 'submitting' | 'sent' | 'error'
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!form.nombre || !form.empresa || !form.email) {
            setError('Completá nombre, empresa y email para que podamos responderte.');
            return;
        }

        setError('');
        setStatus('submitting');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setStatus('sent');
                return;
            }

            const data = await response.json().catch(() => null);
            setError(data?.errors?.map((e) => e.message).filter(Boolean).join(' ') || ERROR_GENERICO);
            setStatus('error');
        } catch {
            setError(ERROR_GENERICO);
            setStatus('error');
        }
    };

    const isSubmitting = status === 'submitting';
    const field = 'mt-2 w-full border border-input bg-white px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary disabled:opacity-60';

    return (
        <section id="contacto" className="bg-neutral-950 py-20 text-white lg:py-28">
            <div className="rail grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400">Contacto</p>
                    <h2 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">Solicitar asesoramiento</h2>
                    <p className="mt-5 leading-relaxed text-white/70">Contanos qué necesitás proteger, almacenar o trasladar. Un asesor técnico analiza su caso y propone la solución de embalaje adecuada.</p>
                    <ul className="mt-10 space-y-4 text-white/75">
                        <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" strokeWidth={1.75} /> <a href="tel:+5493525530410" className="hover:text-primary">+54 9 3525 53-0410</a></li>
                        <li className="flex items-center gap-3">
                            <WhatsAppIcon className="h-4 w-4 text-primary" />
                            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary">Escribinos por WhatsApp</a>
                        </li>
                        <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" strokeWidth={1.75} /> <a href="mailto:canaleventas@canalesrl.com.ar" className="hover:text-primary">canaleventas@canalesrl.com.ar</a></li>
                        <li className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-primary">{DIRECCION}</a>
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-7 text-foreground lg:p-10">
                    {status === 'sent' ? (
                        <div className="flex h-full flex-col items-start justify-center py-10">
                            <ClipboardCheck className="h-10 w-10 text-primary" strokeWidth={1.5} />
                            <h3 className="font-display mt-5 text-2xl font-bold">Gracias por su consulta</h3>
                            <p className="mt-3 text-muted-foreground">Recibimos tu mensaje. Un asesor técnico se va a comunicar a la brevedad.</p>
                            <button type="button" onClick={() => setStatus('idle')} className="mt-7 text-sm font-semibold uppercase tracking-wide text-primary">Enviar otra consulta</button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} noValidate>
                            <fieldset disabled={isSubmitting} className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="nombre" className="text-sm font-semibold">Nombre</label>
                                    <input id="nombre" className={field} value={form.nombre} onChange={set('nombre')} placeholder="Nombre y apellido" />
                                </div>
                                <div>
                                    <label htmlFor="empresa" className="text-sm font-semibold">Empresa</label>
                                    <input id="empresa" className={field} value={form.empresa} onChange={set('empresa')} placeholder="Razón social" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-sm font-semibold">Email</label>
                                    <input id="email" type="email" className={field} value={form.email} onChange={set('email')} placeholder="nombre@empresa.com" />
                                </div>
                                <div>
                                    <label htmlFor="telefono" className="text-sm font-semibold">Teléfono / WhatsApp</label>
                                    <input id="telefono" className={field} value={form.telefono} onChange={set('telefono')} placeholder="+54 351 ..." />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="tipo" className="text-sm font-semibold">Tipo de solución</label>
                                    <select id="tipo" className={field} value={form.tipo} onChange={set('tipo')}>
                                        {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="mensaje" className="text-sm font-semibold">Mensaje / necesidad</label>
                                    <textarea id="mensaje" rows={4} className={field} value={form.mensaje} onChange={set('mensaje')} placeholder="Producto, medidas, volumen estimado, destino..." />
                                </div>
                            </fieldset>
                            <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                                <WhatsAppIcon className="h-4 w-4 shrink-0 text-primary" />
                                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
                                    ¿Tenés un plano, foto o ficha técnica para compartir? Enviánoslo directo por WhatsApp
                                </a>
                            </div>
                            {error && <p role="alert" className="mt-4 text-sm font-medium text-primary">{error}</p>}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-2 bg-primary px-7 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                            >
                                {isSubmitting ? (
                                    <>Enviando <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} /></>
                                ) : (
                                    <>Enviar consulta <ArrowRight className="h-4 w-4" strokeWidth={2} /></>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

function WhatsAppFloating() {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center"
        >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-ring" aria-hidden="true" />
            <WhatsAppLogo className="relative h-14 w-14 drop-shadow-lg transition-transform animate-whatsapp-pulse hover:scale-110" />
        </a>
    );
}

function Footer() {
    return (
        <footer className="border-t border-border bg-white py-14">
            <div className="rail grid gap-10 md:grid-cols-3">
                <div>
                    <p className="font-display text-xl font-extrabold uppercase tracking-tight text-foreground">Canale SRL</p>
                    <p className="mt-3 max-w-xs text-sm text-muted-foreground">50 años resolviendo cómo proteger, almacenar y trasladar lo que las empresas producen.</p>
                </div>
                <nav aria-label="Enlaces del sitio" className="flex flex-col gap-2 text-sm text-muted-foreground">
                    {NAV.map((n) => <a key={n.href} href={n.href} className="hover:text-primary">{n.label}</a>)}
                </nav>
                <div className="text-sm text-muted-foreground">
                    <p>Pedro Patat (N) 1500 - (5223) Colonia Caroya - Córdoba, Argentina</p>
                    <p className="mt-2"><a href="mailto:canaleventas@canalesrl.com.ar" className="hover:text-primary">canaleventas@canalesrl.com.ar</a></p>
                    <p className="mt-2"><a href="tel:+5493525530410" className="hover:text-primary">+54 9 3525 53-0410</a></p>
                </div>
            </div>
            <div className="rail mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
                © {new Date().getFullYear()} Canale SRL. Pallets, tarimas, cajones y embalajes de madera industriales.
            </div>
        </footer>
    );
}

const SITE_URL = 'https://canale.com.ar';

const ORGANIZATION_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Canale SRL',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}${logo}`,
    image: `${SITE_URL}${hero}`,
    description: 'Fabricante industrial de pallets, tarimas, cajones, embalajes personalizados y pellets de madera para la industria argentina.',
    telephone: `+${TELEFONO_E164}`,
    email: 'canaleventas@canalesrl.com.ar',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pedro Patat (N) 1500',
        addressLocality: 'Colonia Caroya',
        addressRegion: 'Córdoba',
        postalCode: '5223',
        addressCountry: 'AR',
    },
};

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Canale SRL | Pallets, tarimas y embalajes de madera industriales</title>
                <meta name="description" content="Canale SRL: 50 años fabricando pallets, tarimas, cajones y embalajes de madera personalizados para la industria argentina. Diseño a medida, CNC, NIMF 15 e ISO 9001. Colonia Caroya - Córdoba, Argentina." />
                <html lang="es" />
                <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
            </Helmet>
            <Seo title="Canale SRL | Embalajes de madera industriales" description="Pallets, tarimas, cajones y embalajes personalizados para empresas. 50 años de trayectoria en Colonia Caroya - Córdoba, Argentina." image={hero} siteName="Canale SRL" url="https://canale.com.ar/" />
            <Header />
            <main>
                <Hero />
                <Autoridad />
                <Productos />
                <ProblemaSolucion />
                <Personalizacion />
                <Industrias />
                <Capacidad />
                <Calidad />
                <Historia />
                <Contacto />
            </main>
            <Footer />
            <WhatsAppFloating />
        </>
    );
}
