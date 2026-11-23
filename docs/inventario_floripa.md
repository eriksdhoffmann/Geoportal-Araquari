# Inventário de Referência — GeoPortal de Florianópolis

**Fonte inspecionada:** `https://geoportal.pmf.sc.gov.br/map` e páginas vinculadas (`/`, `/downloads`, `/services`)  
**Data da consulta:** 23/11/2026 (inspeção direta no navegador)  
**Resumo quantitativo em Florianópolis:** **27 grupos principais** e **185 camadas** no *Controle de Camadas* (sendo **158 camadas vetoriais/temáticas** nos 26 primeiros grupos e **27 camadas de imagens/mapas base** no grupo `Mapas Base`).

> **Finalidade deste documento:** Servir exclusivamente como **lista de verificação estrutural e temática** para identificar o que faz sentido pesquisar e incorporar para **Araquari — SC**. Nenhuma camada de Florianópolis será copiada com dados de Florianópolis. A coluna *"Equivalente em Araquari?"* será preenchida progressivamente nas Fases 2 a 8.

---

## 1. Estrutura Funcional e Abas do GeoPortal de Florianópolis

1. **Início (`/`)**: Termo de uso de dados geoespaciais; buscador central integrado à Rede de Planejamento (`redeplanejamento.pmf.sc.gov.br`); **14 cards de acesso rápido** (Mapa Interativo, Emissão de Documentos, Viabilidades de Instalação e Construção, Consulta Ambiental, Geoserviços, Downloads, Mapa Físico Político, Certidões de Endereço e Confrontantes, Indicadores Urbanos, SMIU).
2. **Mapas Interativos (`/map`)**:
   - Controle de Camadas em árvore com **legendas WMS (`GetLegendGraphic`) visíveis logo abaixo de cada camada** e menu `...` (Separar camada, Mover para cima/baixo, Agrupar com..., Identificar feição).
   - Consulta espacial ativada pelo botão **`i` (Informações)** na barra lateral direita, abrindo painel flutuante à esquerda com todas as feições e atributos tabulados camada por camada (incluindo parâmetros urbanísticos completos no Zoneamento).
3. **Download (`/downloads`)**: Menu lateral esquerdo com **10 categorias** (*Camadas em SIG do mapa* com **158 camadas** em `SHP` e `METADADOS` XML do GeoServer, *Tutoriais PDF/MP4*, *Notas Técnicas PDF*, *Mapa Físico e Político*, *Mapoteca Digital*, *Coleção Especial*, *Mapas de Bairros*, *Mapas Históricos*, *Plantas de Quadra*, *Sugira-nos um mapa*). **Limitação observada:** não há campo de busca/filtro na página de downloads de Florianópolis (funcionalidade que será adicionada no Geoportal de Araquari).
4. **Emissão de Documentos (`/services`)**: 6 formulários automatizados vinculados à `Inscrição Imobiliária` (Consulta de Viabilidade para Instalação/CNAE, Consulta para Fins de Construção, Consulta Ambiental, Certidão de Endereço, Certidão de Confrontantes, Certidão para Água e Luz).

---

## 2. Legendas Detalhadas de Referência (`- Plano Diretor Vigente`)

Em Florianópolis, a utilidade prática do mapa para arquitetos, engenheiros e cidadãos depende fortemente da **legenda legível com siglas e significados por classe**. Abaixo está o levantamento exato do grupo `- Plano Diretor Vigente`:

### 2.1 Legenda de `Zoneamento` (19 itens)
- **ACI** — Área Comunitária Institucional
- **AMC** — Área Mista Central
- **AMS** — Área Mista de Serviços
- **APL-E** — Áreas de Preservação de Uso Limitado de Encosta
- **APL-P** — Área de Preservação de uso Limitado de Planície
- **APL** — Área de Preservação de Uso Limitado
- **ZIP** — Zona de Interesse para Proteção
- **APT** — Área de Parque Tecnológico
- **ARC** — Área Residencial Cultural
- **ARM** — Área Residencial Mista
- **ARP** — Área Residencial Predominante
- **ARR** — Área Residencial Rural
- **ATL** — Área Turística e de Lazer
- **ATR** — Área Turista Residencial
- **AUE** — Áreas de Urbanização Especial
- **AUC** — Áreas de Unidade de Conservação
- **AVL** — Área Verde de Lazer
- **ZEIS** — Zonas Especiais de Interesse Social
- *(linha diagonal vermelha)* — Área com alteração de parâmetros urbanísticos

### 2.2 Legenda de `Sobrezoneamento` (13 itens)
- **AEBT** — Área de Entorno dos Bens Tombados pelo IPHAN
- **AEA** — Área de Estudo Ambiental
- **APC 1** — Área de Interesse Histórico-Cultural
- **APC 2** — Área de Interesse Paisagístico
- **ALA 1** — Área de Limitação Ambiental 1 (Vegetação)
- **ALA 2** — Área de Limitação Ambiental 2 (Área Passível de Inundação)
- **ALA 3** — Área de Limitação Ambiental 3 (Área Tombada)
- **AEIS** — Área Especial de Interesse Social
- **OUC** — Área Prioritária para Operação Urbana Consorciada
- **Polígono Central** / **Triângulo Central**
- **ACAU** — Áreas de Conflito Ambiental e Urbano
- **AAU** — Áreas de Adequação Urbana

---

## 3. Inventário Completo por Grupo e Camada (27 Grupos • 185 Camadas)

| # | Grupo (Florianópolis) | Camada (Florianópolis) | Equivalente em Araquari? |
| :---: | :--- | :--- | :--- |
| 1 | `- Cadastro` | Logradouros | A pesquisar (Fase 2) |
| 2 | `- Cadastro` | Quadras | A pesquisar (Fase 2) |
| 3 | `- Cadastro` | Territoriais | A pesquisar (Fase 2) |
| 4 | `- Cadastro` | Edificações | A pesquisar (Fase 2) |
| 5 | `- Cadastro` | Meio-Fio | A pesquisar (Fase 2) |
| 6 | `- Cadastro` | Piscinas | A pesquisar (Fase 2) |
| 7 | `- Cadastro` | Patrimônio - Cadastro Imobiliário Territorial | A pesquisar (Fase 2) |
| 8 | `- Cadastro` | Ocupação - Cadastro Imobiliário Territorial | A pesquisar (Fase 2) |
| 9 | `- Cadastro` | Situação - Cadastro Imobiliário Territorial | A pesquisar (Fase 2) |
| 10 | `- Cadastro` | PGV m² Territorial (LC nº 480/2013, atualização 2023) | A pesquisar (Fase 2) |
| 11 | `- Cadastro` | Distritos Cadastrais | A pesquisar (Fase 2) |
| 12 | `- Cadastro` | Marcos Geodésicos | A pesquisar (Fase 2/3) |
| 13 | `- Ambiental` | Nascentes e Olhos d'Água Pontuais | A pesquisar / auditar (Fase 5) |
| 14 | `- Ambiental` | Nascentes e Olhos d'Água Difusos | A pesquisar (Fase 5) |
| 15 | `- Ambiental` | Cursos d'Água Linear | A pesquisar / auditar (Fase 5) |
| 16 | `- Ambiental` | Cursos d'Água Polígonos | A pesquisar / auditar (Fase 5) |
| 17 | `- Ambiental` | Canal da Barra da Lagoa *(específico de Floripa)* | A pesquisar (avaliar aplicabilidade) |
| 18 | `- Ambiental` | Lagoas | A pesquisar (Fase 5) |
| 19 | `- Ambiental` | APP Nascentes e Olhos d'Águas | A pesquisar (Fase 5) |
| 20 | `- Ambiental` | APP Hidrografia | A pesquisar (Fase 5) |
| 21 | `- Ambiental` | Banhados | A pesquisar (Fase 5) |
| 22 | `- Ambiental` | Áreas Naturais Tombadas | A pesquisar (Fase 5) |
| 23 | `- Ambiental` | Costões | A pesquisar (Fase 5) |
| 24 | `- Ambiental` | Declividades | A pesquisar (Fase 3/5) |
| 25 | `- Ambiental` | Dunas | A pesquisar (Fase 5) |
| 26 | `- Ambiental` | Ecossistema de Manguezal | A pesquisar (Fase 5) |
| 27 | `- Ambiental` | Praias | A pesquisar (Fase 5) |
| 28 | `- Ambiental` | Promontórios e Tômbolos | A pesquisar (Fase 5) |
| 29 | `- Ambiental` | Restingas em formação | A pesquisar (Fase 5) |
| 30 | `- Ambiental` | Topo de Morro (PTEC 1/IPUF/DICGP/2020) | A pesquisar (Fase 5) |
| 31 | `- Ambiental` | Zonas Culturais - MONA Lagoa do Peri *(específico de Floripa)* | A pesquisar (avaliar aplicabilidade) |
| 32 | `- Ambiental` | Unidade de Conservação | A pesquisar (Fase 5) |
| 33 | `- Ambiental` | Zona de Amortecimento de UC | A pesquisar (Fase 5) |
| 34 | `- Ambiental` | Vegetação | A pesquisar (Fase 5) |
| 35 | `- Ambiental` | Áreas Prioritárias do Plano Municipal da Mata Atlântica (PMMA 2020) | A pesquisar (Fase 5) |
| 36 | `- Ambiental` | Altimetria | A pesquisar (Fase 3) |
| 37 | `- Ambiental` | Áreas Inundáveis | A pesquisar (Fase 5) |
| 38 | `- Ambiental` | Bacias Hidrográficas (IDE/SC) | A pesquisar (Fase 5) |
| 39 | `- Ambiental` | Batimetria Marinha | A pesquisar (Fase 5) |
| 40 | `- Ambiental` | Batimetria Lagoa da Conceição *(específico de Floripa)* | A pesquisar (avaliar aplicabilidade) |
| 41 | `- Ambiental` | Batimetria Lagoa do Peri *(específico de Floripa)* | A pesquisar (avaliar aplicabilidade) |
| 42 | `- Ambiental` | Entorno Lagoas (15 m) | A pesquisar (Fase 5) |
| 43 | `- Ambiental` | Massas d'Água | A pesquisar (Fase 5) |
| 44 | `- Ambiental` | Hipsometria | A pesquisar (Fase 3) |
| 45 | `- Ambiental` | Declividade (MDT) | A pesquisar (Fase 3) |
| 46 | `- Ambiental` | Modelo Digital de Terreno (MDT) | A pesquisar (Fase 3) |
| 47 | `- Ambiental` | Modelo Digital de Superfície (MDS) | A pesquisar (Fase 3) |
| 48 | `- Defesa Civil` | Áreas de Risco do Plano Municipal de Redução de Riscos (PMRR 2014) | A pesquisar (Fase 5) |
| 49 | `- Plano Diretor Vigente` | Áreas de Desenvolvimento Incentivado I (ADI I) | A pesquisar (Fase 4) |
| 50 | `- Plano Diretor Vigente` | Áreas de Desenvolvimento Incentivado II (ADI II) | A pesquisar (Fase 4) |
| 51 | `- Plano Diretor Vigente` | Projetos de Intersecção de Vias (PI) | A pesquisar (Fase 4) |
| 52 | `- Plano Diretor Vigente` | Sistema Viário Hierarquizado | A pesquisar (Fase 4) |
| 53 | `- Plano Diretor Vigente` | Sobrezoneamento | A pesquisar (Fase 4) |
| 54 | `- Plano Diretor Vigente` | Zoneamento | A pesquisar (Fase 4) |
| 55 | `- Comitê Gestor do Plano Diretor Municipal - Decreto nº 26.160/2024` | Deliberações Sistema Viário Hierarquizado CGPDM | A pesquisar (Fase 4) |
| 56 | `- Comitê Gestor do Plano Diretor Municipal - Decreto nº 26.160/2024` | Deliberações Zoneamento CGPDM | A pesquisar (Fase 4) |
| 57 | `- Plano Diretor - Decreto nº 25.877/2023 (sem correções)` | Sistema Viário - Decreto nº 25.877/2023 (sem alterações) | A pesquisar (Fase 4) |
| 58 | `- Plano Diretor - Decreto nº 25.877/2023 (sem correções)` | Sobrezoneamento - Decreto nº 25.877/2023 (sem alterações) | A pesquisar (Fase 4) |
| 59 | `- Plano Diretor - Decreto nº 25.877/2023 (sem correções)` | Zoneamento - Decreto nº 25.877/2023 (sem alterações) | A pesquisar (Fase 4) |
| 60 | `- Plano Diretor 1985-1997 (revogado)` | Sistema Viário - Plano Diretor 1985-1997 (revogado) | A pesquisar (Fase 4) |
| 61 | `- Plano Diretor 1985-1997 (revogado)` | Áreas Especiais - Plano Diretor 1985-1997 (revogado) | A pesquisar (Fase 4) |
| 62 | `- Plano Diretor 1985-1997 (revogado)` | Zoneamento - Plano Diretor 1985-1997 (revogado) | A pesquisar (Fase 4) |
| 63 | `- Planta Genérica Urbanistica de Valores - PGUrb` | PGUrb residencial - valor de captura 0,5 - Decreto Municipal nº 25.888/2023 | A pesquisar (Fase 2/4) |
| 64 | `- Licenciamentos Urbanísticos` | Outorga Onerosa do Direito de Construir (OODC) | A pesquisar (Fase 4) |
| 65 | `Orla` | Acessos Públicos à Orla - Setor 7 | A pesquisar (Fase 4/5) |
| 66 | `- Parcelamentos e Condomínios Horizontais` | Condomínios | A pesquisar (Fase 2/4) |
| 67 | `- Parcelamentos e Condomínios Horizontais` | Desmembramentos | A pesquisar (Fase 2/4) |
| 68 | `- Parcelamentos e Condomínios Horizontais` | Loteamentos | A pesquisar (Fase 2/4) |
| 69 | `- Floripa Regular` | Mancha Urbana para fins de Reurb Histórico | A pesquisar (Fase 4) |
| 70 | `- Floripa Regular` | Minha Rua Regular | A pesquisar (Fase 4) |
| 71 | `- Floripa Regular` | Meu Bairro Regular | A pesquisar (Fase 4) |
| 72 | `- Floripa Regular` | Núcleos Urbanos Informais (2019) | A pesquisar (Fase 4) |
| 73 | `- Floripa Regular` | REURB-E | A pesquisar (Fase 4) |
| 74 | `- Floripa Regular` | Áreas inseridas no Termo de Acordo MPSC | A pesquisar (Fase 4) |
| 75 | `- Habitação` | ZEIS (Habitação) | A pesquisar (Fase 4) |
| 76 | `- Orla` | Denominação Oficial das Praias (Lei nº 5.847/2001) | A pesquisar (Fase 5) |
| 77 | `- Orla` | Acessos Públicos à Orla - Setor 1 | A pesquisar (Fase 5) |
| 78 | `- Orla` | Acessos Públicos à Orla - Setor 2 | A pesquisar (Fase 5) |
| 79 | `- Orla` | Acessos Públicos à Orla - Setor 3 | A pesquisar (Fase 5) |
| 80 | `- Orla` | Acessos Públicos à Orla - Setor 5 | A pesquisar (Fase 5) |
| 81 | `- Orla` | Acessos Públicos à Orla - Setor 7 | A pesquisar (Fase 5) |
| 82 | `- SPU - Terreno de Marinha` | SPU Linhas Marinha | A pesquisar (Fase 2/5) |
| 83 | `- SPU - Terreno de Marinha` | SPU Terreno Marinha | A pesquisar (Fase 2/5) |
| 84 | `- Rede de Equipamentos Comunitários (REC)` | REC - Administração Pública | A pesquisar (Fase 6) |
| 85 | `- Rede de Equipamentos Comunitários (REC)` | REC - Assistência Social | A pesquisar (Fase 6) |
| 86 | `- Rede de Equipamentos Comunitários (REC)` | REC - Convívio Social | A pesquisar (Fase 6) |
| 87 | `- Rede de Equipamentos Comunitários (REC)` | REC - Cultura | A pesquisar (Fase 6) |
| 88 | `- Rede de Equipamentos Comunitários (REC)` | REC - Educação Municipal | A pesquisar (Fase 6) |
| 89 | `- Rede de Equipamentos Comunitários (REC)` | REC - Educação Estadual e Federal | A pesquisar (Fase 6) |
| 90 | `- Rede de Equipamentos Comunitários (REC)` | REC - Esportivo | A pesquisar (Fase 6) |
| 91 | `- Rede de Equipamentos Comunitários (REC)` | REC - Saúde | A pesquisar (Fase 6) |
| 92 | `- Rede de Equipamentos Comunitários (REC)` | REC - Segurança | A pesquisar (Fase 6) |
| 93 | `- Rede de Equipamentos Comunitários (REC)` | REC - Serviços Funerários | A pesquisar (Fase 6) |
| 94 | `- Rede de Espaços Públicos (REP)` | REP - Parques e Praças | A pesquisar (Fase 6) |
| 95 | `- Rede de Mobilidade (REMOB)` | Bicicletas elétricas | A pesquisar (Fase 6) |
| 96 | `- Rede de Mobilidade (REMOB)` | Estações de Pequenos Reparos | A pesquisar (Fase 6) |
| 97 | `- Rede de Mobilidade (REMOB)` | Patinetes elétricos | A pesquisar (Fase 6) |
| 98 | `- Rede de Mobilidade (REMOB)` | Infraestrutura Cicloviária | A pesquisar (Fase 6) |
| 99 | `- Rede de Mobilidade (REMOB)` | Terminais de ônibus | A pesquisar (Fase 6) |
| 100 | `- Rede de Mobilidade (REMOB)` | Abrigos cobertos para passageiros de ônibus | A pesquisar (Fase 6) |
| 101 | `- Rede de Mobilidade (REMOB)` | Pontos de ônibus | A pesquisar (Fase 6) |
| 102 | `- Rede de Mobilidade (REMOB)` | Faixa de Circulação Exclusiva de Ônibus | A pesquisar (Fase 6) |
| 103 | `- Rede de Mobilidade (REMOB)` | Linhas de ônibus | A pesquisar (Fase 6) |
| 104 | `- Rede de Mobilidade (REMOB)` | Pontos de transporte lacustre | A pesquisar (Fase 6) |
| 105 | `- Rede de Mobilidade (REMOB)` | Semáforos | A pesquisar (Fase 6) |
| 106 | `- Rede de Mobilidade (REMOB)` | Pontos de táxi | A pesquisar (Fase 6) |
| 107 | `- Rede de Mobilidade (REMOB)` | Vagas de estacionamento PCD | A pesquisar (Fase 6) |
| 108 | `- Rede de Mobilidade (REMOB)` | Vagas de estacionamento para motos | A pesquisar (Fase 6) |
| 109 | `- Rede de Mobilidade (REMOB)` | Vagas rotativas Zona Azul | A pesquisar (Fase 6) |
| 110 | `- Patrimônio Cultural` | Sítios Arqueológicos - IPHAN | A pesquisar (Fase 7) |
| 111 | `- Patrimônio Cultural` | Sítios Arqueológicos - LEIA/UFSC | A pesquisar (Fase 7) |
| 112 | `- Patrimônio Cultural` | Sítio Arqueológico Ruínas do Morro da Cruz *(específico de Floripa)* | Não aplicável / substituir por sítios de Araquari (Fase 7) |
| 113 | `- Patrimônio Cultural` | Área do Sítio Arqueológico Ruínas do Morro da Cruz *(específico de Floripa)* | Não aplicável / substituir por sítios de Araquari (Fase 7) |
| 114 | `- Patrimônio Cultural` | Freguesia Luso-Brasileira : Núcleo Histórico da Lagoa *(específico de Floripa)* | A pesquisar núcleos históricos de Araquari (Fase 7) |
| 115 | `- Patrimônio Cultural` | Áreas de Preservação Cultural - APC | A pesquisar (Fase 4/7) |
| 116 | `- Patrimônio Cultural` | Vias Tombadas | A pesquisar (Fase 7) |
| 117 | `- Patrimônio Cultural` | Áreas de Tombamento | A pesquisar (Fase 7) |
| 118 | `- Patrimônio Cultural` | Áreas em processo de Tombamento | A pesquisar (Fase 7) |
| 119 | `- Patrimônio Cultural` | Patrimônio Cultural Imobiliário: Categorias de Preservação | A pesquisar (Fase 7) |
| 120 | `- Patrimônio Cultural` | Áreas de entorno de Patrimônio Cultural | A pesquisar (Fase 7) |
| 121 | `- Arte Pública` | Arte Pública Edifícios | A pesquisar (Fase 7) |
| 122 | `- Arte Pública` | Arte Pública Monumentos | A pesquisar (Fase 7) |
| 123 | `- Aeródromos e Objetos Projetados no Espaço Aéreo` | Aeródromos e Helipontos | A pesquisar (Fase 6) |
| 124 | `- Aeródromos e Objetos Projetados no Espaço Aéreo` | Helipontos - Zona de Proteção | A pesquisar (Fase 6) |
| 125 | `- Aeródromos e Objetos Projetados no Espaço Aéreo` | Aeroporto Hercílio Luz - Zona de Proteção / Pista 1 *(específico Floripa)* | A pesquisar impacto de Joinville/aeródromos locais (Fase 6) |
| 126 | `- Aeródromos e Objetos Projetados no Espaço Aéreo` | Aeroporto Hercílio Luz - Zona de Proteção / Pista 2 *(específico Floripa)* | A pesquisar impacto de Joinville/aeródromos locais (Fase 6) |
| 127 | `- Aeródromos e Objetos Projetados no Espaço Aéreo` | Aeroporto Hercílio Luz - Ruído *(específico Floripa)* | A pesquisar (Fase 6) |
| 128 | `- Aeródromos e Objetos Projetados no Espaço Aéreo` | Aeródromo Fly Park - Zona de Proteção *(específico Floripa)* | A pesquisar aeródromos de Araquari/entorno (Fase 6) |
| 129 | `- Saneamento Básico` | Inspeções de Esgoto | A pesquisar (Fase 6) |
| 130 | `- Saneamento Básico` | Regiões Saneamento | A pesquisar (Fase 6) |
| 131 | `- Saúde` | Centros de Saúde | A pesquisar (Fase 6) |
| 132 | `- Saúde` | Atenção Especializada | A pesquisar (Fase 6) |
| 133 | `- Saúde` | Áreas das Equipes de Saúde da Família | A pesquisar (Fase 6) |
| 134 | `- Saúde` | Área dos Centros de Saúde | A pesquisar (Fase 6) |
| 135 | `- Leitura Urbana` | Mancha Urbana 1977 | A pesquisar série histórica / MapBiomas (Fase 7) |
| 136 | `- Leitura Urbana` | Mancha Urbana 1994 | A pesquisar (Fase 7) |
| 137 | `- Leitura Urbana` | Mancha Urbana 2002 | A pesquisar (Fase 7) |
| 138 | `- Leitura Urbana` | Mancha Urbana 2012 | A pesquisar (Fase 7) |
| 139 | `- Leitura Urbana` | Mancha Urbana 2016 | A pesquisar (Fase 7) |
| 140 | `- Leitura Urbana` | Mancha Urbana 2019 | A pesquisar (Fase 7) |
| 141 | `- Leitura Urbana` | Áreas Urbanizadas 2024 | A pesquisar (Fase 4/7) |
| 142 | `- Leitura Urbana` | Áreas Urbanizadas 2024 - Classes de Usos Predominantes | A pesquisar (Fase 4/7) |
| 143 | `- Leitura Urbana` | Áreas Urbanizadas 2024 - Densidades Demográficas | A pesquisar (Fase 7) |
| 144 | `- Limites Administrativos` | Bairros (Decreto nº 29.142/2026) | A pesquisar (Fase 2/3) |
| 145 | `- Limites Administrativos` | Distritos Administrativos (LC nº 739/2023) | A pesquisar (Fase 3) |
| 146 | `- Limites Administrativos` | Regiões Administrativas (LC nº 739/2023) | A pesquisar (Fase 3) |
| 147 | `- Limites Administrativos` | Unidades Territoriais de Planejamento (UTP) | A pesquisar (Fase 4) |
| 148 | `- Limites Administrativos` | Unidades Espaciais de Planejamento (UEP) | A pesquisar (Fase 4) |
| 149 | `- Limites Administrativos` | Perímetro Urbano Vigente (LC nº 783/2025) | A pesquisar (Fase 4) |
| 150 | `- IBGE - Censo` | Censo 2022 - CNEFE | A pesquisar (Fase 2/7) |
| 151 | `- IBGE - Censo` | Censo 2022 - Favelas e Comunidades Urbanas | A pesquisar (Fase 7) |
| 152 | `- IBGE - Censo` | Censo 2022 - Densidade Demográfica (hab/ha) | A pesquisar (Fase 7) |
| 153 | `- IBGE - Censo` | Censo 2022 - Total de domicílios | A pesquisar (Fase 7) |
| 154 | `- IBGE - Censo` | Censo 2022 - Média de moradores por domicílios | A pesquisar (Fase 7) |
| 155 | `- IBGE - Censo` | Censo 2022 - Total de pessoas | A pesquisar (Fase 7) |
| 156 | `- IBGE - Censo` | Censo 2022 - Renda Responsável Domicílio | A pesquisar (Fase 7) |
| 157 | `- IBGE - Censo` | Censo 2010 | A pesquisar (Fase 7) |
| 158 | `- IBGE - Censo` | Censo 2000 | A pesquisar (Fase 7) |
| 159–185 | `Mapas Base` | Ortofotos históricas (1938, 1957, 1977, 1994, 2000, 2001, 2002 [1:2k e 1:5k], 2003, 2007 [1:2k e 1:5k]), Satélite 2009 Min. Cidades, Ortofotos 2012 SDS / SDS IR (1:10k), Ortofotos 2015 / 2016 (1:1k), Satélite 2023 JILIN (50 cm), Google/Bing/OSM/Carto/Here (27 itens) | A pesquisar imagens/ortofotos equivalentes para Araquari (Fases 3 e 7) |
