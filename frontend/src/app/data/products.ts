export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  condition: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Skateboard Completo Vintage 8.0\"",
    price: 120,
    category: "Completos",
    condition: "Usado - Excelente",
    description: "Setup completo vintage con deck de maple de 7 capas, trucks independientes, ruedas Spitfire 52mm y bearings ABEC 7. Perfectamente montado y listo para rodar. Gráfico vintage auténtico de los 90s.",
    image: "https://images.unsplash.com/photo-1653300592820-ec7e64e411ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGV0ZSUyMHNrYXRlYm9hcmQlMjB2aW50YWdlJTIwd29vZHxlbnwxfHx8fDE3Njk3Nzk3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true,
  },
  {
    id: "2",
    name: "Completo Street Setup 8.25\"",
    price: 135,
    category: "Completos",
    condition: "Usado - Muy Bueno",
    description: "Setup completo optimizado para street skating. Incluye deck 8.25, trucks Thunder, ruedas Bones 53mm dureza 99A, bearings Swiss y grip nuevo. Configuración perfecta para trucos técnicos.",
    image: "https://images.unsplash.com/photo-1632757254102-da9db045b98a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwY29tcGxldGUlMjBzdHJlZXQlMjBzZXR1cHxlbnwxfHx8fDE3Njk3Nzk3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true,
  },
  {
    id: "3",
    name: "Set de Ruedas 52mm",
    price: 35,
    category: "Ruedas",
    condition: "Usado - Muy Bueno",
    description: "Set completo de 4 ruedas premium 52mm, dureza 101A. Perfectas para street skating con excelente agarre y velocidad. Mínimo desgaste, prácticamente como nuevas. Ideales para flip tricks y grinds.",
    image: "https://images.unsplash.com/photo-1686665255084-a109fbd1978a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwd2hlZWxzJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2OTc3OTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
  {
    id: "4",
    name: "Ejes Independent Stage 11",
    price: 55,
    category: "Ejes",
    condition: "Usado - Excelente",
    description: "Par de ejes Independent Stage 11. Los clásicos más confiables del mercado con años de calidad probada. Geometría perfecta para giros suaves y estabilidad. Bushings originales en buen estado.",
    image: "https://images.unsplash.com/photo-1763369520559-2040f464efd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwdHJ1Y2tzJTIwaW5kZXBlbmRlbnQlMjBtZXRhbHxlbnwxfHx8fDE3Njk3Nzk5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
];