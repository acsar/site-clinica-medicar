# Paleta de Cores - Clínica Medicar Fátima

## Cores Principais (Brand)

| Cor | Hex | Uso |
|------|-----|-----|
| **Primary (Graphite)** | `#2D3134` | Estrutura principal, menus, títulos |
| Primary Light | `#4A4F53` | Hover em elementos escuros, badges sóbrias |
| Primary Dark | `#1B1E20` | Títulos principais de alto contraste, backgrounds fortes |
| **Secondary (Red/Logo)** | `#C22026` | CTAs principais, botões de agendamento, destaques |
| Secondary Light | `#DE3B42` | Hover nos botões de conversão e CTAs |
| Accent (Red Muted/Tint) | `#FDF2F2` | Backgrounds de alertas, badges de destaque sutil |

## Escala de Cinza (Clinical Gray)

| Classe | Hex | Uso |
|--------|-----|-----|
| gray-50 | `#F5F7F8` | Background de seções alternadas, fundo geral do site |
| gray-100 | `#EAEFF1` | Bordas padrão, fundos de inputs, hover backgrounds claros |
| gray-200 | `#DCE3E6` | Bordas em foco/hover |
| gray-400 | `#939CA3` | Texto de apoio (muted), ícones secundários |
| gray-500 | `#69737A` | Texto de descrição secundária, subtítulos de seções |
| gray-600 | `#4A545A` | Texto padrão para leitura de corpo de texto longo |
| gray-800 | `#2D3134` | Equivalente ao primary, usado para máxima legibilidade de texto |
| gray-900 | `#1B1E20` | Background de seções escuras que exijam alto contraste |
| gray-950 | `#0F1112` | Footer (Rodapé corporativo) |

## Cores Extras

| Classe | Hex | Uso |
|--------|-----|-----|
| white | `#FFFFFF` | Backgrounds de cards, blocos de conteúdo principais |
| yellow-400 | `#FACC15` | Avaliações (Star ratings) |

## Exemplos de Uso

### Botões

**Primário (Foco em Agendamento/Conversão):**
- Background: `bg-secondary` (#C22026)
- Texto: `text-white`
- Hover: `hover:bg-secondary-light` (#DE3B42)

**Secundário (Institucional/Sóbrio):**
- Background: `bg-primary` (#2D3134)
- Texto: `text-white`
- Hover: `hover:bg-primary-light` (#4A4F53)

**Outline:**
- Borda: `border-secondary` (#C22026)
- Texto: `text-secondary`
- Hover: preenchimento suave `bg-secondary/5`

### Textos

- **Títulos:** `text-primary` (#2D3134) ou `text-gray-900` para destaque máximo
- **Subtítulos/Labels:** `text-gray-500` (#69737A)
- **Texto corpo:** `text-gray-600` (#4A545A) — Garante leitura confortável sem o peso do preto puro
- **Texto de Destaque Pontual:** `text-secondary` (#C22026) para pequenas ênfases de saúde/cardiologia

### Backgrounds

- **Principal (Cards e Áreas de Leitura):** `bg-white`
- **Seções alternadas (Limpeza visual):** `bg-gray-50` (#F5F7F8)
- **Seções dark / Footer:** `bg-gray-900` (#1B1E20) ou `bg-gray-950` (#0F1112)

### Gradientes e Efeitos

- `from-secondary/5 to-transparent` - Hero section sutil (evita saturação do vermelho)
- `bg-secondary/5` - Tints sutis para boxes de depoimentos ou avisos
- `bg-white/80 backdrop-blur-xl` - Efeito de vidro para a barra de navegação superior fixa
