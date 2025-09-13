// === CONFIGURAÇÕES FINAIS ===

// WhatsApp fixo (link de envio do pedido)
export const WHATS_DISPLAY = "(81) 99479-8426";
export const WHATS_NUM = "5581994798426"; // wa.me usa com DDI 55

// PIX (aparece SOMENTE se o cliente escolher PIX)
export const PIX = {
  key: "032.552.024-00",
  bank: "Stone",
  name: "Cássia Bezerra dos Santos"
};

// Bairros e taxas (fixas)
export const BAIRROS = [
  { bairro: "Mustardinha", taxa: "3,00" },
  { bairro: "Mangueira", taxa: "4,00" },
  { bairro: "Afogados", taxa: "4,00" },
  { bairro: "Bongi", taxa: "4,00" },
  { bairro: "San Martins", taxa: "5,00" }
];

// Horário de funcionamento: APENAS sábados e domingos, 11:00–15:00
export const TIMEZONE = "America/Recife";
// 0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sáb
export const BUSINESS_HOURS = {
  0: ["11:00-15:00"], // Domingo
  1: [], 2: [], 3: [], 4: [], 5: [],
  6: ["11:00-15:00"]  // Sábado
};

// Fechado: bloquear pedido e mostrar banner
export const CLOSE_BEHAVIOR = {
  blockCheckout: true,
  showBanner: true
};
