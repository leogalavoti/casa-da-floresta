import { ReactNode, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  ArrowDown, ArrowUpRight, Bath, BedDouble, Car, ChefHat, Clock3, Coffee,
  Copy, ExternalLink, House, Leaf, MapPin, MessageCircle, Navigation, ParkingCircle,
  ShowerHead, Sparkles, Trees, Users, Waves, Wifi,
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

const placeholderAction = (message = "Informação fornecida pelo anfitrião após a reserva.") => toast(message, { description: "Consulte os detalhes da sua reserva no Airbnb." });

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[94svh] items-end overflow-hidden bg-forest text-white">
      <img src={propertyData.images.hero} alt="Ilustração da Casa da Floresta entre a Mata Atlântica" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-forest/55" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-white/15" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
        <div className="max-w-4xl animate-hero-in">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.25em] text-white/80"><span className="h-px w-8 bg-clay" />{propertyData.location}</p>
          <h1 className="font-serif text-[clamp(3.4rem,12vw,8rem)] leading-[.83] tracking-[-.045em]">Casa da<br /><span className="italic text-cream">Floresta</span></h1>
          <div className="mt-8 max-w-xl border-l border-white/35 pl-5 md:ml-[32%]">
            <p className="font-serif text-2xl leading-tight md:text-3xl">{propertyData.tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/75 md:text-base">{propertyData.intro}</p>
          </div>
          <button onClick={() => document.getElementById("estadia")?.scrollIntoView({ behavior: "smooth" })} className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-cream px-6 text-sm font-semibold text-forest transition-transform hover:-translate-y-0.5 md:ml-[32%]">
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
          <div className="mt-9 flex items-center gap-3 font-serif text-xl italic text-forest"><span className="h-px w-10 bg-terracotta" />Casa da Floresta <Leaf className="h-4 w-4 text-olive" /></div>
        </FadeIn>
        <FadeIn className="relative">
          <div className="relative ml-7 overflow-hidden rounded-t-[8rem] rounded-b-[2rem] md:ml-0"><img src={propertyData.images.welcome} alt="Ilustração da natureza em Ubatuba" className="aspect-[4/5] w-full object-cover" loading="lazy" /><div className="absolute inset-4 rounded-t-[7rem] rounded-b-[1.3rem] border border-white/30" /></div>
          <div className="absolute -bottom-5 left-0 flex h-24 w-24 items-center justify-center rounded-full bg-terracotta text-center text-[10px] font-bold uppercase tracking-[.16em] text-white">Respire<br />fundo</div>
        </FadeIn>
      </div>
    </section>
  );
}

const quickItems = [
  { icon: Wifi, title: "Wi-Fi", main: "Rede", value: propertyData.wifi.network, action: true },
  { icon: Clock3, title: "Check-in", main: "Horário", value: propertyData.checkIn },
  { icon: ArrowUpRight, title: "Check-out", main: "Horário", value: propertyData.checkOut },
  { icon: Car, title: "Estacionamento", main: "Na propriedade", value: propertyData.parking },
] as const;

export function QuickInfo() {
  return (
    <section className="bg-sand py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn className="mb-10"><p className="eyebrow">Informações rápidas</p><h2 className="section-title max-w-2xl">Tudo o que você precisa rapidamente</h2></FadeIn>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickItems.map((item, index) => <FadeIn key={item.title} className="h-full"><article className={`flex h-full min-h-[220px] flex-col rounded-[1.6rem] p-6 ${index === 0 ? "bg-forest text-white" : "border border-forest/10 bg-cream text-forest"}`}><item.icon className={`h-6 w-6 stroke-[1.4] ${index === 0 ? "text-clay" : "text-terracotta"}`} /><div className="mt-auto"><h3 className="font-serif text-2xl">{item.title}</h3><p className={`mt-3 text-[10px] font-semibold uppercase tracking-[.18em] ${index === 0 ? "text-white/50" : "text-forest/45"}`}>{item.main}</p><p className={`mt-1 text-sm leading-5 ${index === 0 ? "text-white/80" : "text-forest/70"}`}>{item.value}</p>{"action" in item && item.action && <button onClick={() => placeholderAction()} className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10"><Copy className="h-3.5 w-3.5" /> Copiar senha</button>}{item.title === "Check-in" && <p className="mt-3 text-xs leading-5 text-forest/50">Confira o horário confirmado no aplicativo do Airbnb.</p>}</div></article></FadeIn>)}
        </div>
        <FadeIn className="mt-3"><button onClick={() => placeholderAction("O contato será disponibilizado aos hóspedes.")} className="flex w-full items-center justify-between rounded-[1.6rem] bg-terracotta p-5 text-left text-white transition-transform hover:-translate-y-0.5 md:px-7"><span className="flex items-center gap-4"><MessageCircle className="h-6 w-6" /><span><strong className="block font-serif text-xl font-normal">Precisa falar com o anfitrião?</strong><span className="text-sm text-white/70">Estamos aqui para ajudar.</span></span></span><ArrowUpRight className="h-5 w-5" /></button></FadeIn>
      </div>
    </section>
  );
}

const amenityIcons = [Wifi, ChefHat, ParkingCircle, Bath, Trees, Leaf];

export function PropertyDetails() {
  return (
    <section id="a-casa" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-20">
          <FadeIn><p className="eyebrow">A casa</p><h2 className="section-title max-w-xl">Seu refúgio em meio à natureza</h2><p className="body-copy mt-6 max-w-lg">{propertyData.description}</p></FadeIn>
          <FadeIn className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-forest/10 bg-forest/10">
            {[[Users, `${propertyData.guests} hóspedes`], [BedDouble, `${propertyData.bedrooms} quarto`], [BedDouble, `${propertyData.beds} cama`], [ShowerHead, `${propertyData.bathrooms} banheiro`]].map(([Icon, label]) => { const IconComponent = Icon as typeof Users; return <div key={String(label)} className="flex items-center gap-3 bg-sand p-5"><IconComponent className="h-5 w-5 text-terracotta" /><span className="text-sm font-medium text-forest">{String(label)}</span></div>; })}
          </FadeIn>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_.7fr]">
          <FadeIn className="relative overflow-hidden rounded-[2rem]"><img src={propertyData.images.hero} alt="Atmosfera da Casa da Floresta" className="aspect-[4/3] w-full object-cover" loading="lazy" /><span className="absolute left-5 top-5 rounded-full bg-cream/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-forest backdrop-blur">Integrada à natureza</span></FadeIn>
          <FadeIn className="flex flex-col justify-center"><h3 className="font-serif text-3xl text-forest">Conforto essencial,<br />sem excessos.</h3><div className="mt-6 grid grid-cols-2 gap-x-4">{propertyData.amenities.map((amenity, index) => { const Icon = amenityIcons[index]; return <div key={amenity} className="flex items-center gap-3 border-t border-forest/15 py-4 text-sm text-forest/75"><Icon className="h-4 w-4 text-terracotta" />{amenity}</div>; })}</div></FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ExperienceHighlight() {
  return (
    <section id="experiencia" className="relative min-h-[88svh] overflow-hidden bg-forest text-white">
      <img src={propertyData.images.hydro} alt="Ilustração do deck com hidromassagem cercado pela floresta" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-forest/60" />
      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-end px-5 py-16 md:px-8 md:py-24">
        <FadeIn className="max-w-3xl"><p className="eyebrow !text-clay">Experiência</p><h2 className="font-serif text-6xl leading-none tracking-[-.04em] md:text-8xl">Desacelere.</h2><p className="mt-5 font-serif text-2xl italic text-cream md:text-3xl">Uma experiência cercada pela Mata Atlântica.</p><p className="mt-5 max-w-xl leading-7 text-white/70">A hidromassagem integrada ao deck é um convite para relaxar e aproveitar o silêncio e a natureza ao redor.</p>
          <Dialog><DialogTrigger asChild><button className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"><Waves className="h-4 w-4" />Ver orientações de uso</button></DialogTrigger><DialogContent className="max-w-lg rounded-[2rem] border-0 bg-cream p-7 text-forest sm:p-9"><DialogHeader><div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sage/15"><Waves className="h-5 w-5 text-olive" /></div><DialogTitle className="font-serif text-3xl font-normal">Como utilizar a hidromassagem</DialogTitle><DialogDescription className="pt-3 text-base leading-7 text-forest/70">Esta área receberá as instruções fornecidas pelo anfitrião sobre funcionamento, cuidados e boas práticas.</DialogDescription></DialogHeader><p className="mt-4 rounded-2xl bg-sand p-4 text-sm leading-6"><strong>Importante:</strong> siga sempre as orientações fornecidas pela propriedade.</p></DialogContent></Dialog>
        </FadeIn>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section id="como-chegar" className="bg-cream py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><FadeIn><p className="eyebrow">Como chegar</p><h2 className="section-title">Chegando à Casa da Floresta</h2><p className="body-copy mt-5">A propriedade está localizada em Ubatuba, próxima à região da Praia Dura.</p><div className="mt-8 rounded-3xl border border-forest/10 bg-sand p-6"><MapPin className="h-6 w-6 text-terracotta" /><h3 className="mt-5 font-serif text-2xl">Endereço completo</h3><p className="mt-2 text-sm leading-6 text-forest/65">{propertyData.address}</p><button onClick={() => placeholderAction("Localização disponível para hóspedes confirmados.")} className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white"><Navigation className="h-4 w-4" />Abrir localização</button></div></FadeIn><FadeIn><div className="flex min-h-[380px] items-center justify-center rounded-[2rem] border border-forest/10 bg-sand text-center"><div><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest text-cream"><MapPin className="h-6 w-6" /></div><p className="mt-5 font-serif text-2xl text-forest">Mapa disponível para hóspedes</p><p className="mt-2 text-sm text-forest/55">A localização exata é compartilhada após a confirmação.</p></div></div><div className="mt-5 grid gap-2 sm:grid-cols-3">{propertyData.directions.map((item, index) => <div key={item} className="rounded-2xl border border-forest/10 p-4 text-sm leading-5 text-forest/65"><span className="mb-2 block text-[10px] font-bold text-terracotta">0{index + 1}</span>{item}</div>)}</div></FadeIn></div></div></section>
  );
}

const localIcons = { Praias: Waves, Gastronomia: Coffee, Mercado: House, Passeios: Trees };
export function LocalGuide() {
  return (
    <section id="explore" className="bg-sand py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-8"><FadeIn><p className="eyebrow">Perto daqui</p><h2 className="section-title">Explore Ubatuba</h2><p className="body-copy mt-5">Alguns lugares para aproveitar durante sua estadia.</p></FadeIn><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{propertyData.recommendations.map((item, index) => { const Icon = localIcons[item.category as keyof typeof localIcons]; return <FadeIn key={`${item.category}-${item.title}`} className={index === 0 ? "lg:row-span-2" : ""}><article className={`group flex h-full min-h-[230px] flex-col rounded-[1.7rem] border border-forest/10 p-6 transition-colors hover:border-forest/25 ${index === 0 ? "bg-olive text-white lg:min-h-full" : "bg-cream text-forest"}`}><div className="flex items-center justify-between"><span className={`flex h-11 w-11 items-center justify-center rounded-full ${index === 0 ? "bg-white/10" : "bg-sage/15"}`}><Icon className="h-5 w-5" /></span><ExternalLink className="h-4 w-4 opacity-40" /></div><div className="mt-auto pt-10"><p className={`text-[10px] font-semibold uppercase tracking-[.2em] ${index === 0 ? "text-clay" : "text-terracotta"}`}>{item.category}</p><h3 className="mt-2 font-serif text-2xl">{item.title}</h3><p className={`mt-2 text-sm leading-6 ${index === 0 ? "text-white/65" : "text-forest/60"}`}>{item.text}</p></div></article></FadeIn>; })}</div></div></section>
  );
}

export function ContactHost() {
  return <button id="contato" onClick={() => placeholderAction("O contato do anfitrião será configurado antes da publicação.")} className="fixed bottom-4 right-4 z-30 flex min-h-12 items-center gap-3 rounded-full bg-terracotta px-4 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(80,50,35,.2)] transition-transform hover:-translate-y-1 md:bottom-6 md:right-6 md:px-5"><MessageCircle className="h-5 w-5" /><span>Precisa de ajuda?</span></button>;
}

export function FinalSection() {
  return <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-forest px-5 py-24 text-center text-white"><img src={propertyData.images.finale} alt="Mata Atlântica" className="absolute inset-0 h-full w-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-forest/70" /><FadeIn className="relative max-w-3xl"><Sparkles className="mx-auto h-7 w-7 text-clay" /><h2 className="mt-7 font-serif text-5xl leading-none tracking-[-.035em] md:text-7xl">Aproveite cada momento.</h2><p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">Esperamos que sua estadia na Casa da Floresta seja inesquecível.</p><div className="mx-auto my-8 h-px w-16 bg-clay" /><p className="font-serif text-2xl italic">Casa da Floresta <Leaf className="ml-1 inline h-4 w-4" /></p><p className="mt-2 text-[10px] font-semibold uppercase tracking-[.24em] text-white/55">{propertyData.shortLocation}</p></FadeIn></section>;
}

export function Footer() {
  return <footer className="bg-[#18392c] px-5 py-12 text-cream"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="font-serif text-2xl">{propertyData.name}</p><p className="mt-1 text-sm text-cream/55">Guia digital do hóspede.</p></div><p className="max-w-sm text-xs leading-5 text-cream/45">Informações oficiais da reserva estão disponíveis no Airbnb.</p></div></footer>;
}
