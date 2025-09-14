l// === CONFIG FINAIS ===
export const WHATS_DISPLAY = "(81) 99479-8426";
export const WHATS_NUM = "5581994798426";

export const PIX = {
  key: "032.552.024-00",
  bank: "Stone",
  name: "Cássia Bezerra dos Santos"
};

export const BAIRROS = [
  { bairro: "Mustardinha", taxa: "3,00" },
  { bairro: "Mangueira",   taxa: "4,00" },
  { bairro: "Afogados",    taxa: "4,00" },
  { bairro: "Bongi",       taxa: "4,00" },
  { bairro: "San Martins", taxa: "5,00" }
];

// Itens esgotados — escreva EXACTAMENTE como no site (caixa alta)
export const ESGOTADOS = [
  "LASANHA",
  "COCA-COLA PET 2 L",
  "ESCONDIDINHO DE CHARQUE"
];

// Fuso e horários (0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sáb)
export const TIMEZONE = "America/Recife";
export const BUSINESS_HOURS = {
  0: ["11:00-15:00"], // Domingo
  1: [],              // Segunda (fechado)
  2: [],              // Terça
  3: [],              // Quarta
  4: [],              // Quinta
  5: [],              // Sexta
  6: ["11:00-15:00"]  // Sábado
};

export const CLOSE_BEHAVIOR = {
  blockCheckout: true,
  showBanner: true
};

// Mantém compatível com o index
window.ESGOTADOS = ESGOTADOS;