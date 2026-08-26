import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Expand, X } from "lucide-react";
import { GalleryItem, propertyData } from "@/data/propertyData";

const categories = ["Todos", "Quarto", "Deck", "Hidromassagem", "Cozinha", "Área externa", "Natureza"];

export function PremiumGallery() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const visible = filter === "Todos" ? propertyData.gallery : propertyData.gallery.filter((item) => item.category === filter);

  return (
    <section id="galeria" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 md:flex md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Um olhar por dentro</p>
            <h2 className="section-title max-w-xl">Descubra cada espaço</h2>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-forest/65 md:mt-0">As imagens atuais são ilustrações editoriais. As fotografias da propriedade poderão ser adicionadas sem alterar o layout.</p>
        </div>

        <div className="-mx-5 mb-9 flex gap-2 overflow-x-auto px-5 pb-2 scrollbar-none md:mx-0 md:px-0" role="tablist" aria-label="Filtrar galeria">
          {categories.map((category) => (
            <button key={category} onClick={() => setFilter(category)} className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${filter === category ? "border-forest bg-forest text-white" : "border-forest/20 bg-transparent text-forest hover:border-forest/50"}`} role="tab" aria-selected={filter === category}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[230px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]">
          {visible.map((item, index) => (
            <button key={item.id} onClick={() => setSelected(item)} className={`group relative overflow-hidden rounded-[1.5rem] text-left ${item.shape === "tall" ? "sm:row-span-2" : item.shape === "wide" ? "lg:col-span-2" : ""}`}>
              <img src={item.src} alt={item.label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading={index > 1 ? "lazy" : "eager"} />
              <div className="absolute inset-0 bg-forest/25 transition-colors group-hover:bg-forest/35" />
              <div className="absolute inset-x-3 bottom-3 flex items-end justify-between rounded-2xl bg-forest/75 p-4 text-white backdrop-blur-sm">
                <div><span className="text-[10px] uppercase tracking-[.2em] text-white/70">{item.category}</span><p className="mt-1 font-serif text-xl">{item.label}</p></div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur"><Expand className="h-4 w-4" /></span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-5xl overflow-hidden border-0 bg-forest p-0 text-white sm:rounded-[2rem] [&>button]:hidden">
          <DialogTitle className="sr-only">{selected?.label}</DialogTitle>
          {selected && <img src={selected.src} alt={selected.label} className="max-h-[80vh] min-h-[55vh] w-full object-cover" />}
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between rounded-2xl bg-forest/85 p-5 backdrop-blur-sm">
            <div><p className="text-xs uppercase tracking-[.2em] text-white/70">{selected?.category}</p><p className="mt-1 font-serif text-2xl">{selected?.label}</p></div>
            <button onClick={() => setSelected(null)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10" aria-label="Fechar imagem"><X className="h-5 w-5" /></button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
