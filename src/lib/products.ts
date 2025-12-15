
export type Product = {
  id: number;
  name: string;
  originalPrice?: number;
  currentPrice: number;
  imageSlug: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: '600W Shingled Solar Panel – High-Efficiency Mid-Cut Monofacial Double-Glass (N-Type, IP68)',
    originalPrice: 137000,
    currentPrice: 117000,
    imageSlug: 'jinko-615w-solar-panel',
  },
  {
    id: 2,
    name: 'Trina Solar 620W Bifacial Solar Panel – High Efficiency N-Type TOPCon Technology',
    originalPrice: 138000,
    currentPrice: 133000,
    imageSlug: '620w-bifacial-solar-panel-jinko',
  },
  {
    id: 3,
    name: 'Jinko Solar 615W N-Type Bifacial Solar Panel – Tiger Neo Series | High-Efficiency Dual Glass Module',
    originalPrice: 175000,
    currentPrice: 134000,
    imageSlug: 'jinko-solar-615w-bifacial-lagos',
  },
  {
    id: 4,
    name: 'Solar Energy Financing – Flexible Payment Plans for Homes & Businesses',
    currentPrice: 250000,
    imageSlug: 'solar-energy',
  },
  {
    id: 5,
    name: 'TORCHN 12V 150Ah GEL UPS Battery – Maintenance-Free, Long-Life Power Solution',
    originalPrice: 300000,
    currentPrice: 285000,
    imageSlug: '12v-150ah-ups-battery-lagos',
  },
  {
    id: 6,
    name: 'Torchn Gel 12V 250ah Battery',
    originalPrice: 450000,
    currentPrice: 380000,
    imageSlug: '12v-Battery-250ah-Deep-Cycle-battery',
  },
  {
    id: 7,
    name: 'Amaron Quanta 12V 200Ah Battery – Advanced Backup for UPS Systems',
    originalPrice: 410000,
    currentPrice: 395000,
    imageSlug: 'quanta-12v-200ah-battery-lagos',
  },
  {
    id: 8,
    name: 'JDS 2.0HP 1500W Solar Water Pump – DC110V Submersible | MPPT Controller | 200m Head | 5200 LPH',
    originalPrice: 550000,
    currentPrice: 436000,
    imageSlug: 'submersible-solar-water-pump-lagos',
  },
  {
    id: 9,
    name: 'Deka 12V 200Ah Gel Deep Cycle Battery – AGM VRLA for Solar & UPS',
    originalPrice: 640000,
    currentPrice: 485000,
    imageSlug: 'solar-battery-price',
  },
];
