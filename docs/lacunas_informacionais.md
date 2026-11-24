# Matriz de Lacunas Informacionais (Florianópolis × Araquari) e Roteiro de Ofícios

Esta matriz compara os **27 grupos temáticos** do GeoPortal de Florianópolis (referência funcional) com o acervo real alcançado no **Geoportal Araquari** ao final da Fase 8 (**76 camadas vetoriais**, **10 mapas base** e **98 itens na Central de Downloads**), identificando exatamente o que já está coberto por fontes oficiais, o que usa dado substituto (científico/colaborativo/digitalização) e o que depende de fornecimento institucional pela Prefeitura ou concessionárias.

## 1. Matriz Comparativa (27 Eixos Temáticos)

| # | Eixo Temático (Ref. Floripa) | Situação em Araquari | Camadas Integradas / Observações |
|---|---|---|---|
| 1 | **Limites Administrativos** | **Coberto (Oficial)** | Limite Municipal IBGE (`4201307`), 10 Bairros, 2 Distritos e 116 Setores Censitários (Censo 2022). |
| 2 | **Cadastro Imobiliário Urbano (Lotes/IPTU)** | **Lacuna Municipal** | Não há shapefile público de lotes urbanos. Substitutos oficiais integrados: CNEFE 2022 (`23.304` endereços, `902` logradouros, `2.888` estabelecimentos) e `645` edificações OSM. |
| 3 | **Cadastro Rural (SIGEF / CAR)** | **Parcial (Oficial)** | `317` parcelas certificadas INCRA/SIGEF integradas; CAR/SICAR disponível via link oficial (WMS bloqueado por TLS no Chrome). |
| 4 | **Plano Diretor — Zoneamento e Macrozoneamento** | **Coberto (Digitalização não oficial)** | LC nº 281/2019 Anexos 02, 03, 05, 09 e 12 vetorizados (IoU 0,9349–0,9395) com índices urbanísticos (18 zonas) + PDFs originais. Solicitar shapefile/DWG oficial à SEPLAN. |
| 5 | **Licenciamento Urbanístico / Alvarás** | **Lacuna Municipal** | Sem base georreferenciada pública de alvarás/habite-se/aprovações de projetos. |
| 6 | **Parcelamento do Solo e Condomínios** | **Lacuna Municipal** | Sem cadastro oficial vetorial de loteamentos aprovados/caucionados (apenas `31` localidades/loteamentos OSM). |
| 7 | **Habitação e Regularização Fundiária (REURB/AEIS)** | **Parcial (Oficial)** | Integrada Favela/Comunidade Urbana oficial IBGE 2022 (`Horto Flor de Liz` — `CD_FCU 42013070001`). Faltam polígonos municipais de ZEIS/REURB. |
| 8 | **Uso e Cobertura da Terra** | **Coberto (Científica)** | FBDS alta resolução (5 m) + áreas industriais e manchas urbanas IBGE. |
| 9 | **Meio Ambiente, APPs e Unidades de Conservação** | **Coberto (Oficial + Científica)** | APP Hidrografia IMA-SC (`453` polígonos), APP FBDS, Manguezais, Terras Indígenas FUNAI, Área Prioritária MMA (`ZCM-122`), Espécies Arbóreas SINFAT (`6`). |
| 10 | **Licenciamento e Fiscalização Ambiental** | **Coberto (Oficial)** | IMA-SC SINFAT: Licenciamento Ambiental (`619` processos), Embargos, Autos de Infração e Termos. |
| 11 | **Hidrografia e Recursos Hídricos** | **Coberto (Oficial + Científica)** | Bacias IMA-SC, Rios Simples (`901` deduplicados), Rios Duplos, Massas d'Água, `177` Nascentes (FBDS), `25` Poços SIAGAS (SGB) e `103` Ilhas (SIGSC). |
| 12 | **Defesa Civil e Riscos Hidrológicos/Geológicos** | **Parcial (Oficial)** | `12` setores de risco alto a inundação SGB/CPRM + `3` polígonos de divisa sul (`sgb_suscetibilidade_inundacao`) + cota 5 m. Falta carta municipal completa de suscetibilidade e manchas de cheias históricas da Defesa Civil. |
| 13 | **Geologia, Geomorfologia e Pedologia** | **Coberto (Oficial)** | IBGE BDIA 1:250.000 (Geologia, Geomorfologia, Solos) e Domínios Hidrogeológicos SGB/CPRM. |
| 14 | **Altimetria, Declividade e Relevo** | **Coberto (Oficial + Científica)** | MDT e MDS oficiais SIGSC (WMS), Declividade IMA-SC/SIGSC (`5` classes), Curvas de Nível e Cota 20 m. |
| 15 | **Sistema Viário e Rodovias** | **Coberto (Oficial + Colaborativa)** | DNIT SNV vigente (`202610A`), DNIT OAE (`7` pontes/viadutos), IBGE BC25-SC (`142` rodovias, `11` pontes, ferrovia) + `1.617` vias OSM + Hierarquia Viária LC 281. |
| 16 | **Mobilidade, Transporte Coletivo e Ciclovias** | **Parcial (Colaborativa + PDF)** | `75` pontos de ônibus e `1` trecho cicloviário no OSM + `PlanMob.pdf` na Central de Downloads. Faltam rotas/GTFS oficiais e malha cicloviária oficial. |
| 17 | **Saúde** | **Coberto (Oficial)** | `20` estabelecimentos ativos oficiais via API DataSUS/CNES (com esfera jurídica e gestão SUS auditadas). |
| 18 | **Educação** | **Parcial (Oficial + Colaborativa)** | `4` edificações oficiais IBGE BC25-SC + `20` escolas/CEIs/IFC no OSM. Falta lista completa geocodificada da SEMED/SED-SC. |
| 19 | **Segurança Pública e Defesa** | **Parcial (Colaborativa)** | Pontos básicos em `equipamentos_publicos_araquari` (OSM). Falta cadastro oficial SSP-SC / PM / Bombeiros / Defesa Civil. |
| 20 | **Praças, Parques e Espaços Públicos** | **Parcial (Colaborativa)** | `34` praças, parques e quadras esportivas no OSM. Falta cadastro municipal oficial de áreas verdes/institucionais. |
| 21 | **Patrimônio Cultural e Arqueológico** | **Parcial (Oficial)** | `4` sítios arqueológicos oficiais IPHAN/CNSA (`Sambaqui Linguado I`, `Ilha do Mel I`, `Ilha do Mel III`, `Estrutura Subterrânea Ponto Alto`). Faltam bens tombados municipais/estaduais (FCC). |
| 22 | **Saneamento Básico (Água, Esgoto, Drenagem, Resíduos)** | **Parcial (Oficial Censitário + Colaborativa)** | Indicadores censitários por setor (`ibge_saneamento_domicilios_2022`) + `2` reservatórios OSM + PMSB. Faltam redes vetoriais (adutoras, coletoras, macrodrenagem) da Águas de Araquari / Prefeitura. |
| 23 | **Energia Elétrica e Dutos** | **Coberto (Oficial)** | ANEEL SIGEL (LT `138 kV`, Subestação `ARAQ.HYOSUNG`, Concessão `CELESC-DIS` — `14.609` UCs) + IBGE BC25-SC (Oleoduto OPASC `7,27 km`, LT `230 kV` e `87` torres). |
| 24 | **Apoio Náutico e Orla** | **Parcial (Colaborativa)** | `4` píeres/trapiches separados na Fase 6. Falta cadastro oficial de estruturas náuticas/marinas (SPU/Capitania). |
| 25 | **Dados Socioeconômicos e Demográficos (IBGE)** | **Coberto (Oficial)** | Censo 2022 completo por setor (`45.283` hab., `18.565` domicílios, densidade, alfabetização), Bairros, Distritos e indicadores SIDRA (`PIB 2023 R$ 9,90 bi`, `PAM 2025`). |
| 26 | **Ortofotos Históricas e Imagens de Satélite** | **Coberto (Oficial + Científica)** | Ortofoto aérea oficial SC 2012 (SIGSC 39 cm), Satélite HD Esri/Maxar, Esri Clarity, Bing Aerial e Sentinel-2 Cloudless 2024 (10 m) com cortina comparativa. |
| 27 | **Economia, Indústria e Zoneamento Produtivo** | **Parcial (Oficial + Colaborativa)** | Polos industriais, estabelecimentos CNEFE (`2.888`) e indicadores SIDRA (PIB/PAM). Falta cadastro georreferenciado de alvarás comerciais/industriais e distritos empresariais municipais. |

---

## 2. Lista Priorizada de Solicitações Formais (Ofícios / LAI)

1. **Prioridade 1 — Secretaria de Planejamento (SEPLAN) / Fazenda (Prefeitura de Araquari):**
   - Base vetorial oficial (Shapefile/GeoPackage/DWG em SIRGAS 2000 UTM 22S) do **Cadastro Imobiliário Urbano (lotes e quadras)** sem dados pessoais (apenas inscrição/geometria/testada) e **arquivos vetoriais originais da LC nº 281/2019** (substituindo a digitalização não oficial).
   - Cadastro vetorial de **loteamentos aprovados, áreas institucionais e núcleos REURB/ZEIS**.
2. **Prioridade 2 — Águas de Araquari / Secretaria de Infraestrutura:**
   - Traçado vetorial das **redes de abastecimento de água, esgotamento sanitário, estações elevatórias/ETEs e rede de macrodrenagem urbana**.
3. **Prioridade 3 — Secretaria de Educação (SEMED) e Mobilidade Urbana:**
   - Planilha oficial geocodificada de **todas as escolas municipais, CEIs e creches** (com código INEP).
   - Traçados oficiais (GeoJSON/KML/GTFS) das **linhas de transporte coletivo e malha cicloviária implantada/projetada do PlanMob**.
4. **Prioridade 4 — Defesa Civil Municipal / SGB-CPRM:**
   - Carta municipal de **suscetibilidade a inundações e movimentos de massa** e manchas históricas de alagamento.
5. **Prioridade 5 — Fundação Catarinense de Cultura (FCC) / Secretaria de Cultura:**
   - Inventário georreferenciado de **imóveis tombados e patrimônio histórico-cultural municipal**.
