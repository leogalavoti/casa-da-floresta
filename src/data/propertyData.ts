export const propertyData = {
  name: "Casa da Floresta",
  location: "Ubatuba • São Paulo",
  shortLocation: "Ubatuba • SP",
  tagline: "Seu refúgio particular na Mata Atlântica",
  intro:
    "Bem-vindo à sua estadia em Ubatuba. Neste guia, você encontra as principais informações públicas da Casa da Floresta em um só lugar.",
  welcome:
    "A Casa da Floresta foi criada para quem busca desacelerar, se conectar com a natureza e aproveitar uma estadia tranquila em meio à Mata Atlântica.",
  description:
    "Uma cabana inteira para duas pessoas, rodeada por Mata Atlântica, com hidromassagem no deck, cozinha, Wi-Fi e estacionamento gratuito no local.",
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  bedDescription: "1 cama queen e 1 sofá",
  wifi: {
    available: true,
    network: "",
    password: "",
  },
  checkIn: "Após 14:00",
  checkOut: "Antes das 11:00",
  parking: "Estacionamento gratuito no local",
  selfCheckIn: "Self check-in com cofre de chaves",
  contactUrl: "",
  airbnbUrl: "https://www.airbnb.com.br/rooms/1689110478975401158",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Praia+Dura+Ubatuba+SP",
  approximateLocation: "Região da Praia Dura, Ubatuba — SP",
  locationNote:
    "O endereço exato e as instruções de entrada são compartilhados pelo Airbnb com hóspedes confirmados.",
  images: {
    hero: "/images/fachada-hidromassagem.webp",
    welcome: "/images/letreiro-hidro.webp",
    property: "/images/interior-cozinha-sala.webp",
    hydro: "/images/hidromassagem-close.webp",
    finale: "/images/quarto-vista-deck.webp",
  },
  gallery: [
    { id: 1, src: "/images/fachada-hidromassagem.webp", category: "Fachada", label: "Casa integrada à floresta", shape: "wide" },
    { id: 2, src: "/images/hidromassagem-close.webp", category: "Hidromassagem", label: "Hidromassagem no deck", shape: "tall" },
    { id: 3, src: "/images/quarto-vista-deck.webp", category: "Quarto", label: "Quarto com vista para o deck", shape: "wide" },
    { id: 4, src: "/images/interior-quarto-sala.webp", category: "Interior", label: "Quarto e sala integrados", shape: "square" },
    { id: 5, src: "/images/interior-cozinha-sala.webp", category: "Cozinha", label: "Cozinha e estar", shape: "wide" },
    { id: 6, src: "/images/deck-quarto.webp", category: "Deck", label: "Deck conectado ao quarto", shape: "wide" },
    { id: 7, src: "/images/sala-cozinha.webp", category: "Interior", label: "Sala com vista para a mata", shape: "square" },
    { id: 8, src: "/images/letreiro-hidro.webp", category: "Natureza", label: "Casa da Floresta, Ubatuba", shape: "tall" },
  ],
  amenities: [
    "Wi-Fi",
    "Cozinha",
    "Estacionamento gratuito",
    "Hidromassagem",
    "Self check-in",
    "Mata Atlântica",
  ],
  instructions: [
    {
      title: "Self check-in",
      text: "O anúncio informa self check-in com cofre de chaves. Os detalhes de acesso ficam disponíveis pela reserva confirmada no Airbnb.",
      icon: "KeyRound",
    },
    {
      title: "Hidromassagem",
      text: "A hidromassagem fica integrada ao deck, cercada pela Mata Atlântica. As orientações específicas de uso são fornecidas pelo anfitrião aos hóspedes.",
      icon: "Waves",
    },
    {
      title: "Cozinha",
      text: "A propriedade oferece cozinha e refrigerador para uso durante a estadia.",
      icon: "CookingPot",
    },
    {
      title: "Wi-Fi",
      text: "Wi-Fi está listado entre as comodidades da propriedade. Rede e senha são informações de uso do hóspede.",
      icon: "Wifi",
    },
  ],
  checkout: [
    "Confira seus pertences antes de sair",
    "Finalize a saída até 11:00 e siga as orientações da reserva",
  ],
  rules: [
    { title: "Check-in", text: "Check-in após 14:00." },
    { title: "Check-out", text: "Checkout antes das 11:00." },
    { title: "Capacidade", text: "Máximo de 2 hóspedes." },
    { title: "Acesso", text: "O anúncio informa que é necessário subir escadas." },
  ],
  directions: [
    "Aproximadamente 1,6 km da Praia Dura",
    "Aproximadamente 1,5 km da Rodovia Santos-Rio",
    "A propriedade informa acesso com asfalto na porta",
  ],
  recommendations: [
    {
      category: "Praia",
      title: "Praia Dura",
      text: "O anúncio informa que a Casa da Floresta fica a aproximadamente 1,6 km da Praia Dura.",
    },
    {
      category: "Natureza",
      title: "Mata Atlântica",
      text: "A casa é rodeada por um trecho de Mata Atlântica, parte central da experiência proposta pela hospedagem.",
    },
    {
      category: "Acesso",
      title: "Chegada prática",
      text: "Mesmo cercada de natureza, a propriedade informa ter asfalto na porta e ficar próxima à Rodovia Santos-Rio.",
    },
  ],
} as const;

export type GalleryItem = (typeof propertyData.gallery)[number];
