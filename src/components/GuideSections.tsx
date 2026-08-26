import { ReactNode, useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  ArrowDown,
  ArrowUpRight,
  Bath,
  BedDouble,
  Car,
  ChefHat,
  Clock3,
  ExternalLink,
  KeyRound,
  Leaf,
  MapPin,
  Navigation,
  ParkingCircle,
  ShowerHead,
  Sparkles,
  Trees,
  Users,
  Waves,
  Wifi,
} from "lucide-react";
import { propertyData } from "@/data/propertyData";

export function FadeIn({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[94svh] items-end overflow-hidden bg-forest text-white">
      <img
        src={propertyData.images.hero}
        alt="Fachada da Casa da Floresta com hidromassagem em meio à Mata Atlântica"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-forest/55" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-white/15" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
        <div className="max-w-4xl animate-hero-in">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.25em] text-white/80">
            <span className="h-px w-8 bg-clay" />
            {propertyData.location}
          </p>
          <h1 className="font-serif text-[clamp(3.4rem,12vw,8rem)] leading-[.83] tracking-[-.045em]">
            Casa da<br /><span className="italic text-cream">Floresta</span>
          </h1>
          <div className="mt-8 max-w-xl border-l border-white/35 pl-5 md:ml-[32%]">
            <p className="font-serif text-2xl leading-tight md:text-3xl">{propertyData.tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/75 md:text-base">{propertyData.intro}</p>
          </div>
          <button
            onClick={() => document.getElementById("estadia")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-cream px-6 text-sm font-semibold text-forest transition-transform hover:-translate-y-0.5 md:ml-[32%]"
          >
            Começar minha estadia <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function WelcomeSection() {
  return (
    <section id="estadia" className="overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.05fr_.95fr] md:px-8 lg:gap-20">
        <FadeIn>
          <p className="eyebrow">Sua estadia começa aqui</p>
          <h2 className="section-title">Seja bem-vindo à Casa da Floresta</h2>
          <p className="body-copy mt-6 max-w-xl">{propertyData.welcome}</p>
          <div className="mt-9 flex items-center gap-3 font-serif text-xl italic text-forest">
            <span className="h-px w-10 bg-terracotta" />Casa da Floresta <Leaf className="h-4 w-4 text-olive" />
          </div>
        </FadeIn>
        <FadeIn className="relative">
          <div className="relative ml-7 overflow-hidden rounded-t-[8rem] rounded-b-[2rem] md:ml-0">
            <img
              src={propertyData.images.welcome}
              alt="Letreiro da Casa da Floresta junto ao deck e à mata"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-4 rounded-t-[7rem] rounded-b-[1.3rem] border border-white/30" />
          </div>
          <div className="absolute -bottom-5 left-0 flex h-24 w-24 items-center justify-center rounded-full bg-terracotta text-center text-[10px] font-bold uppercase tracking-[.16em] text-white">
            Respire<br />fundo
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const quickItems = [
  { icon: Wifi, title: "Wi-Fi", main: "Comodidade", value: "Disponível na propriedade" },
  { icon: Clock3, title: "Check-in", main: "Horário", value: propertyData.checkIn },
  { icon: ArrowUpRight, title: "Check-out", main: "Horário", value: propertyData.checkOut },
  { icon: Car, title: "Estacionamento", main: "Na propriedade", value: propertyData.parking },
] as const;

export function QuickInfo() {
  return (
    <section className="bg-sand py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn className="mb-10">
          <p className="eyebrow">Informações rápidas</p>
          <h2 className="section-title max-w-2xl">O essencial, logo de início</h2>
        </FadeIn>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickItems.map((item, index) => (
            <FadeIn key={item.title} className="h-full">
              <article className={`flex h-full min-h-[210px] flex-col rounded-[1.6rem] p-6 ${index === 0 ? "bg-forest text-white" : "border border-forest/10 bg-cream text-forest"}`}>
                <item.icon className={`h-6 w-6 stroke-[1.4] ${index === 0 ? "text-clay" : "text-terracotta"}`} />
                <div className="mt-auto">
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className={`mt-3 text-[10px] font-semibold uppercase tracking-[.18em] ${index === 0 ? "text-white/50" : "text-forest/45"}`}>{item.main}</p>
                  <p className={`mt-1 text-sm leading-5 ${index === 0 ? "text-white/80" : "text-forest/70"}`}>{item.value}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-3">
          <div className="grid gap-3 md:grid-cols-2">
            <article className="flex items-center gap-4 rounded-[1.6rem] border border-forest/10 bg-cream p-5 md:px-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/15 text-forest"><KeyRound className="h-5 w-5" /></span>
              <div>
                <strong className="block font-serif text-xl font-normal text-forest">Self check-in</strong>
                <span className="text-sm text-forest/60">{propertyData.selfCheckIn}</span>
              </div>
            </article>
            <a
              href={propertyData.airbnbUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[1.6rem] bg-terracotta p-5 text-left text-white transition-transform hover:-translate-y-0.5 md:px-7"
            >
              <span>
                <strong className="block font-serif text-xl font-normal">Ver anúncio no Airbnb</strong>
                <span className="text-sm text-white/70">Confira as informações oficiais da reserva.</span>
              </span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const amenityIcons = [Wifi, ChefHat, ParkingCircle, Bath, KeyRound, Trees];

export function PropertyDetails() {
  return (
    <section id="a-casa" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <p className="eyebrow">A casa</p>
            <h2 className="section-title max-w-xl">Seu refúgio em meio à natureza</h2>
            <p className="body-copy mt-6 max-w-lg">{propertyData.description}</p>
            <p className="mt-4 text-sm text-forest/55">Quarto: {propertyData.bedDescription}.</p>
          </FadeIn>
          <FadeIn className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-forest/10 bg-forest/10">
            {[
              [Users, `${propertyData.guests} hóspedes`],
              [BedDouble, `${propertyData.bedrooms} quarto`],
              [BedDouble, `${propertyData.beds} cama`],
              [ShowerHead, `${propertyData.bathrooms} banheiro`],
            ].map(([Icon, label]) => {
              const IconComponent = Icon as typeof Users;
              return (
                <div key={String(label)} className="flex items-center gap-3 bg-sand p-5">
                  <IconComponent className="h-5 w-5 text-terracotta" />
                  <span className="text-sm font-medium text-forest">{String(label)}</span>
                </div>
              );
            })}
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_.7fr]">
          <FadeIn className="relative overflow-hidden rounded-[2rem]">
            <img src={propertyData.images.property} alt="Interior da Casa da Floresta com sala e cozinha" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-forest backdrop-blur">Integrada à natureza</span>
          </FadeIn>
          <FadeIn className="flex flex-col justify-center">
            <h3 className="font-serif text-3xl text-forest">Conforto essencial,<br />em meio à mata.</h3>
            <div className="mt-6 grid grid-cols-2 gap-x-4">
              {propertyData.amenities.map((amenity, index) => {
                const Icon = amenityIcons[index];
                return (
                  <div key={amenity} className="flex items-center gap-3 border-t border-forest/15 py-4 text-sm text-forest/75">
                    <Icon className="h-4 w-4 text-terracotta" />{amenity}
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ExperienceHighlight() {
  return (
    <section id="experiencia" className="relative min-h-[88svh] overflow-hidden bg-forest text-white">
      <img
        src={propertyData.images.hydro}
        alt="Hidromassagem da Casa da Floresta cercada pela Mata Atlântica"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-forest/58" />
      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-end px-5 py-16 md:px-8 md:py-24">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow !text-clay">Experiência</p>
          <h2 className="font-serif text-6xl leading-none tracking-[-.04em] md:text-8xl">Desacelere.</h2>
          <p className="mt-5 font-serif text-2xl italic text-cream md:text-3xl">Uma hidromassagem no meio da Mata Atlântica.</p>
          <p className="mt-5 max-w-xl leading-7 text-white/70">O deck e a hidromassagem são um dos principais destaques da hospedagem: um espaço pensado para relaxar e ouvir a natureza ao redor.</p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20">
                <Waves className="h-4 w-4" />Sobre a hidromassagem
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg rounded-[2rem] border-0 bg-cream p-7 text-forest sm:p-9">
              <DialogHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sage/15"><Waves className="h-5 w-5 text-olive" /></div>
                <DialogTitle className="font-serif text-3xl font-normal">Hidromassagem no deck</DialogTitle>
                <DialogDescription className="pt-3 text-base leading-7 text-forest/70">
                  A acomodação destaca uma hidromassagem integrada ao deck em meio à Mata Atlântica. As instruções específicas de funcionamento e cuidados são fornecidas aos hóspedes pelo anfitrião.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </FadeIn>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section id="como-chegar" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <FadeIn>
            <p className="eyebrow">Localização</p>
            <h2 className="section-title">Em Ubatuba, perto da Praia Dura</h2>
            <p className="body-copy mt-5">A Casa da Floresta fica em Ubatuba, rodeada por Mata Atlântica e próxima à Praia Dura.</p>
            <div className="mt-8 rounded-3xl border border-forest/10 bg-sand p-6">
              <MapPin className="h-6 w-6 text-terracotta" />
              <h3 className="mt-5 font-serif text-2xl">{propertyData.approximateLocation}</h3>
              <p className="mt-2 text-sm leading-6 text-forest/65">{propertyData.locationNote}</p>
              <a
                href={propertyData.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white"
              >
                <Navigation className="h-4 w-4" />Ver região no mapa
              </a>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="relative min-h-[380px] overflow-hidden rounded-[2rem]">
              <img src="/images/letreiro-hidro.webp" alt="Entrada e deck da Casa da Floresta cercados pela mata" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-forest/45" />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-forest/80 p-5 text-white backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-clay">Localização aproximada</p>
                <p className="mt-2 font-serif text-2xl">Natureza sem abrir mão do acesso</p>
                <p className="mt-2 text-sm leading-6 text-white/70">O anúncio informa asfalto na porta, a cerca de 1,6 km da Praia Dura e 1,5 km da Rodovia Santos-Rio.</p>
              </div>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {propertyData.directions.map((item, index) => (
                <div key={item} className="rounded-2xl border border-forest/10 p-4 text-sm leading-5 text-forest/65">
                  <span className="mb-2 block text-[10px] font-bold text-terracotta">0{index + 1}</span>{item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const localIcons = { Praia: Waves, Natureza: Trees, Acesso: Navigation };

export function LocalGuide() {
  return (
    <section id="explore" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <p className="eyebrow">Ao redor da casa</p>
          <h2 className="section-title">Natureza e localização</h2>
          <p className="body-copy mt-5">Alguns dos pontos destacados no próprio anúncio da hospedagem.</p>
        </FadeIn>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {propertyData.recommendations.map((item, index) => {
            const Icon = localIcons[item.category as keyof typeof localIcons];
            return (
              <FadeIn key={`${item.category}-${item.title}`}>
                <article className={`group flex h-full min-h-[260px] flex-col rounded-[1.7rem] border border-forest/10 p-6 ${index === 0 ? "bg-olive text-white" : "bg-cream text-forest"}`}>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${index === 0 ? "bg-white/10" : "bg-sage/15"}`}><Icon className="h-5 w-5" /></span>
                  <div className="mt-auto pt-10">
                    <p className={`text-[10px] font-semibold uppercase tracking-[.2em] ${index === 0 ? "text-clay" : "text-terracotta"}`}>{item.category}</p>
                    <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                    <p className={`mt-2 text-sm leading-6 ${index === 0 ? "text-white/65" : "text-forest/60"}`}>{item.text}</p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactHost() {
  const url = propertyData.contactUrl || propertyData.airbnbUrl;
  return (
    <a
      id="contato"
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-30 flex min-h-12 items-center gap-3 rounded-full bg-terracotta px-4 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(80,50,35,.2)] transition-transform hover:-translate-y-1 md:bottom-6 md:right-6 md:px-5"
    >
      <ExternalLink className="h-5 w-5" />
      <span>Ver no Airbnb</span>
    </a>
  );
}

export function FinalSection() {
  return (
    <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-forest px-5 py-24 text-center text-white">
      <img src={propertyData.images.finale} alt="Quarto da Casa da Floresta com vista para o deck e a mata" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-forest/65" />
      <FadeIn className="relative max-w-3xl">
        <Sparkles className="mx-auto h-7 w-7 text-clay" />
        <h2 className="mt-7 font-serif text-5xl leading-none tracking-[-.035em] md:text-7xl">Aproveite cada momento.</h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">Um refúgio para desacelerar, descansar e aproveitar a Mata Atlântica em Ubatuba.</p>
        <div className="mx-auto my-8 h-px w-16 bg-clay" />
        <p className="font-serif text-2xl italic">Casa da Floresta <Leaf className="ml-1 inline h-4 w-4" /></p>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[.24em] text-white/55">{propertyData.shortLocation}</p>
      </FadeIn>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#18392c] px-5 py-12 text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl">{propertyData.name}</p>
          <p className="mt-1 text-sm text-cream/55">Guia digital do hóspede.</p>
        </div>
        <div className="max-w-sm md:text-right">
          <p className="text-xs leading-5 text-cream/45">As informações oficiais e atualizadas da reserva permanecem no Airbnb.</p>
          <a href={propertyData.airbnbUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs text-cream/70 hover:text-cream">
            Abrir anúncio <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
