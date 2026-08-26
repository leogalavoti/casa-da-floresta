import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { propertyData } from "@/data/propertyData";

const links = [
  ["Início", "inicio"],
  ["Sua estadia", "estadia"],
  ["A casa", "a-casa"],
  ["Experiência", "experiencia"],
  ["Galeria", "galeria"],
  ["Guia da casa", "guia"],
  ["Regras", "regras"],
  ["Localização", "como-chegar"],
  ["Ao redor", "explore"],
] as const;

export function GuideNavigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-cream/95 text-forest shadow-[0_1px_0_rgba(33,76,58,.12)] backdrop-blur-md" : "text-white"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <button onClick={() => goTo("inicio")} className="group flex items-center gap-3 text-left" aria-label="Voltar ao início">
            <Leaf className="h-6 w-6 stroke-[1.4] transition-transform group-hover:-rotate-12" />
            <span className="font-serif text-xl tracking-wide">{propertyData.name}</span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {links.slice(0, 7).map(([label, id]) => (
              <button key={id} onClick={() => goTo(id)} className="text-[12px] font-medium uppercase tracking-[.14em] opacity-85 transition-opacity hover:opacity-100">
                {label}
              </button>
            ))}
          </nav>

          <button onClick={() => setOpen((value) => !value)} className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition-colors hover:bg-white/10 lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-cream transition-all duration-500 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="flex min-h-full flex-col justify-center px-8 pb-10 pt-24">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[.24em] text-terracotta">Guia do hóspede</p>
          <nav className="space-y-1" aria-label="Menu mobile">
            {links.map(([label, id], index) => (
              <button key={id} onClick={() => goTo(id)} className="group flex w-full items-center gap-4 border-b border-forest/10 py-3.5 text-left font-serif text-2xl text-forest">
                <span className="w-5 font-sans text-[10px] text-olive/70">{String(index + 1).padStart(2, "0")}</span>
                <span className="transition-transform group-hover:translate-x-1">{label}</span>
              </button>
            ))}
          </nav>
          <p className="mt-8 text-sm text-forest/60">{propertyData.location}</p>
        </div>
      </div>
    </>
  );
}
