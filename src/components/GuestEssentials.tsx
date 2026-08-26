import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Clock3,
  CookingPot,
  KeyRound,
  ShieldCheck,
  Navigation,
  Users,
  Waves,
  Wifi,
} from "lucide-react";
import { propertyData } from "@/data/propertyData";

const instructionIcons = { Waves, CookingPot, Wifi, KeyRound };
const ruleIcons = [Clock3, Clock3, Users, Navigation];

export function HouseGuide() {
  if (!propertyData.instructions.length) return null;

  return (
    <section id="guia" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">Informações da hospedagem</p>
          <h2 className="section-title">Guia da Casa</h2>
          <p className="body-copy mt-5">O que já é possível saber sobre a estadia a partir das informações públicas do anúncio.</p>
        </div>
        <Accordion type="single" collapsible className="border-t border-forest/15">
          {propertyData.instructions.map((item, index) => {
            const Icon = instructionIcons[item.icon as keyof typeof instructionIcons];
            return (
              <AccordionItem value={`item-${index}`} key={item.title} className="border-forest/15">
                <AccordionTrigger className="py-6 text-left hover:no-underline [&>svg]:text-terracotta">
                  <span className="flex items-center gap-4 font-serif text-xl text-forest md:text-2xl">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/15">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </span>
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
          <p className="mt-5 max-w-md leading-7 text-cream/70">O anúncio informa checkout antes das 11:00. Use esta lista rápida como lembrete no fim da estadia.</p>
          <div className="mt-8 flex items-center gap-3 text-sm">
            <span className="font-serif text-3xl text-clay">{completed}/{propertyData.checkout.length}</span>
            <span className="text-cream/60">itens concluídos</span>
          </div>
        </div>
        <div className="space-y-3">
          {propertyData.checkout.map((item, index) => (
            <label key={item} className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-colors ${checked[index] ? "border-clay/50 bg-white/10" : "border-white/15 bg-white/[.04] hover:bg-white/[.07]"}`}>
              <Checkbox
                checked={checked[index]}
                onCheckedChange={(value) => setChecked((current) => current.map((state, i) => i === index ? Boolean(value) : state))}
                className="h-6 w-6 rounded-md border-cream/50 data-[state=checked]:border-clay data-[state=checked]:bg-clay"
              />
              <span className={`text-[15px] transition-opacity ${checked[index] ? "opacity-55 line-through" : ""}`}>{item}</span>
            </label>
          ))}
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4 text-xs leading-5 text-cream/55">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
            As instruções oficiais enviadas pelo anfitrião e pelo Airbnb sempre têm prioridade.
          </div>
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
          <div>
            <p className="eyebrow">O que você deve saber</p>
            <h2 className="section-title max-w-lg">Informações da reserva</h2>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-forest/60 md:mt-0">Resumo das condições que aparecem publicamente no anúncio.</p>
        </div>
        <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {propertyData.rules.map((rule, index) => {
            const Icon = ruleIcons[index] ?? ShieldCheck;
            return (
              <article key={rule.title} className="flex gap-4 border-t border-forest/15 py-6">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <h3 className="font-serif text-xl text-forest">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-forest/60">{rule.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
