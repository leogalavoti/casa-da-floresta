import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { CookingPot, ShieldCheck, Trash2, Tv, Waves, Wifi, Zap, Leaf, Volume2, Users, PawPrint, Home } from "lucide-react";
import { propertyData } from "@/data/propertyData";

const instructionIcons = { Waves, CookingPot, Wifi, Tv, Trash2, Zap, ShieldCheck };
const ruleIcons = [Leaf, Volume2, Users, PawPrint, Home];

export function HouseGuide() {
  return (
    <section id="guia" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">Informações essenciais</p>
          <h2 className="section-title">Guia da Casa</h2>
          <p className="body-copy mt-5">Tudo o que você precisa saber para usar os espaços com tranquilidade.</p>
        </div>
        <Accordion type="single" collapsible className="border-t border-forest/15">
          {propertyData.instructions.map((item, index) => {
            const Icon = instructionIcons[item.icon as keyof typeof instructionIcons];
            return (
              <AccordionItem value={`item-${index}`} key={item.title} className="border-forest/15">
                <AccordionTrigger className="py-6 text-left hover:no-underline [&>svg]:text-terracotta">
                  <span className="flex items-center gap-4 font-serif text-xl text-forest md:text-2xl">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/15"><Icon className="h-5 w-5 stroke-[1.5]" /></span>
                    {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-[3.75rem] text-base leading-7 text-forest/70">{item.text}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

export function CheckoutChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() => propertyData.checkout.map(() => false));
  const completed = checked.filter(Boolean).length;

  return (
    <section id="checkout" className="bg-forest py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[.8fr_1.2fr] md:px-8">
        <div>
          <p className="eyebrow !text-clay">Check-out</p>
          <h2 className="section-title !text-cream">Antes de ir embora</h2>
          <p className="mt-5 max-w-md leading-7 text-cream/70">Alguns pequenos cuidados nos ajudam a preparar a casa para os próximos hóspedes.</p>
          <div className="mt-8 flex items-center gap-3 text-sm"><span className="font-serif text-3xl text-clay">{completed}/{propertyData.checkout.length}</span><span className="text-cream/60">itens concluídos</span></div>
        </div>
        <div className="space-y-3">
          {propertyData.checkout.map((item, index) => (
            <label key={item} className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-colors ${checked[index] ? "border-clay/50 bg-white/10" : "border-white/15 bg-white/[.04] hover:bg-white/[.07]"}`}>
              <Checkbox checked={checked[index]} onCheckedChange={(value) => setChecked((current) => current.map((state, i) => i === index ? Boolean(value) : state))} className="h-6 w-6 rounded-md border-cream/50 data-[state=checked]:border-clay data-[state=checked]:bg-clay" />
              <span className={`text-[15px] transition-opacity ${checked[index] ? "opacity-55 line-through" : ""}`}>{item}</span>
            </label>
          ))}
          <p className="pt-5 text-xs leading-5 text-cream/50">Estas orientações são demonstrativas e serão personalizadas pelo anfitrião.</p>
        </div>
      </div>
    </section>
  );
}

export function Rules() {
  return (
    <section id="regras" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 md:flex md:items-end md:justify-between">
          <div><p className="eyebrow">Regras da casa</p><h2 className="section-title max-w-lg">Para uma estadia tranquila</h2></div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-forest/60 md:mt-0">Cuidar deste lugar também é parte da experiência.</p>
        </div>
        <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {propertyData.rules.map((rule, index) => {
            const Icon = ruleIcons[index];
            return <article key={rule.title} className="flex gap-4 border-t border-forest/15 py-6"><Icon className="mt-1 h-5 w-5 shrink-0 text-terracotta" /><div><h3 className="font-serif text-xl text-forest">{rule.title}</h3><p className="mt-2 text-sm leading-6 text-forest/65">{rule.text}</p></div></article>;
          })}
        </div>
        <p className="mt-8 rounded-2xl bg-white/60 px-5 py-4 text-sm text-forest/65">As regras oficiais da reserva no Airbnb prevalecem sobre este guia.</p>
      </div>
    </section>
  );
}
