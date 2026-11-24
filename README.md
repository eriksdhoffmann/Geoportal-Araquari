# Geoportal Araquari — Infraestrutura Municipal de Dados Geoespaciais (SC)

Plataforma WebGIS aberta e gratuita para o município de **Araquari — Santa Catarina (IBGE `4201307`)**, estruturada no padrão visual e funcional do GeoPortal de Florianópolis, alimentada exclusivamente por dados reais, auditados e documentados em **21 campos de metadados**.

- **Acesso Online (GitHub Pages):** https://eriksdhoffmann.github.io/Geoportal-Araquari/
- **Central de Downloads & Metadados:** https://eriksdhoffmann.github.io/Geoportal-Araquari/downloads.html
- **Execução Local (Offline):** abra `index.html` diretamente no navegador ou execute `ABRIR_GEOPORTAL_ARAQUARI.bat`.

---

## Resumo do Acervo Integrado (Auditado)

- **76 camadas vetoriais** (`36.439` feições geoespaciais, `16.56 MB`) organizadas em **11 grupos temáticos**.
- **10 mapas base** (Satélite HD Maxar/Esri, Ortofoto Aérea Oficial SC 2012 SIGSC 39 cm, Sentinel-2 Cloudless 2024, MDT/MDS SIGSC, OpenStreetMap e Carto Positron) com **Cortina Comparativa (Antes × Depois)**.
- **98 itens pesquisáveis** na Central de Downloads (`downloads.html`), com busca, filtros por classe de origem, ficha completa de 21 metadados e exportação em **GeoJSON** e **CSV**.
- **Qualidade Auditada:** `0` geometrias inválidas, `0` erros de codificação UTF-8, `100%` de cobertura nos 21 campos de metadados.

### Transparência por Classe de Origem

| Classe de Origem | Camadas | Exemplos Principais |
|---|---:|---|
| **Oficial** | 48 | IBGE (Censo 2022, CNEFE, BC25-SC, BDIA), INCRA/SIGEF, DNIT (SNV/OAE), IMA-SC (SINFAT/APP/Declividade), SGB/CPRM, FUNAI, MMA, ANEEL SIGEL, DataSUS/CNES, IPHAN/CNSA |
| **Científica** | 9 | FBDS (Uso do Solo 5 m, APP, Hidrografia, Nascentes), Altimetria SRTM/Terrarium |
| **Colaborativa** | 15 | OpenStreetMap (Ruas complementares, Escolas, Praças, Pontos de Ônibus, Edificações, Trapiches) |
| **Digitalização não oficial** | 4 | Plano Diretor LC nº 281/2019 (Zoneamento com parâmetros do Anexo 05, Macrozoneamento, Perímetro Urbano e Sistema Viário) |

---

## Grupos Temáticos (11)

1. **Cadastro e Estrutura Territorial (IBGE / INCRA / OSM)** — Limite municipal, 10 Bairros e 2 Distritos com população Censo 2022, 116 Setores Censitários, CNEFE 2022 (`23.304` endereços, `902` logradouros, `2.888` estabelecimentos), `317` imóveis rurais INCRA/SIGEF e edificações.
2. **Planejamento Urbano, Plano Diretor e Indústria** — Zoneamento, Macrozoneamento, Perímetro Urbano e Sistema Viário da LC nº 281/2019 (digitalização não oficial com aviso explícito + PDFs oficiais) e polos industriais.
3. **Meio Ambiente, Cobertura da Terra e FBDS** — Uso do Solo 5 m, APP FBDS, APP Hidrografia IMA-SC (`453`), Manguezais, Terras Indígenas Guarani Mbya (FUNAI), Área Prioritária MMA (`ZCM-122`) e Espécies Arbóreas SINFAT.
4. **Licenciamento e Fiscalização Ambiental (IMA-SC)** — Licenciamento (`619` processos), Embargos, Autos de Infração e Termos.
5. **Hidrografia e Recursos Hídricos (FBDS, IMA & SGB)** — Bacias hidrográficas, Rios Simples (`901`), Rios Duplos, Massas d'Água, `177` Nascentes, `25` Poços SIAGAS e `103` Ilhas (SIGSC).
6. **Defesa Civil e Riscos Hidrológicos (SGB / CPRM)** — `12` setores de risco alto a inundação, divisa sul de suscetibilidade e isolinha de cota 5 m.
7. **Geologia, Geomorfologia, Solos e Altimetria** — Declividade IMA-SC (`5` classes), Geologia, Geomorfologia, Solos (IBGE BDIA), Domínios Hidrogeológicos e Curvas de Nível.
8. **Sistema Viário, Rodovias, Ferrovia e Mobilidade** — DNIT SNV `202610A` (BR-101/BR-280), DNIT OAE (`7`), IBGE BC25-SC (rodovias, ferrovia, pontes), malha viária municipal e paradas de ônibus.
9. **Equipamentos Públicos, Saúde, Educação e Lazer** — `20` estabelecimentos ativos DataSUS/CNES, edificações de ensino IBGE BC25-SC (`4`) + escolas OSM (`20`), equipamentos públicos e praças.
10. **Energia, Dutos, Saneamento e Apoio Náutico** — ANEEL SIGEL (LT `138 kV`, Subestação `ARAQ.HYOSUNG`, Concessão `CELESC-DIS`), IBGE BC25-SC (Oleoduto OPASC, LT `230 kV`, `87` torres), reservatórios de água e trapiches náuticos.
11. **Socioeconômico (Censo IBGE 2022) e Patrimônio Cultural (IPHAN)** — Densidade demográfica (`45.283` hab.), Saneamento domiciliar (água, esgoto, lixo), FCU oficial `Horto Flor de Liz`, indicadores SIDRA (`PIB 2023 R$ 9,90 bi`) e `4` sítios arqueológicos IPHAN/CNSA.

---

## Documentação Técnica (`docs/`)

- [Catálogo de Dados (`docs/catalogo_dados.md`)](docs/catalogo_dados.md)
- [Registro Completo de Metadados — 21 Campos (`docs/metadados.md`)](docs/metadados.md)
- [Fontes de Dados e Serviços (`docs/fontes_dados.md`)](docs/fontes_dados.md)
- [Matriz de Lacunas Floripa × Araquari e Ofícios (`docs/lacunas_informacionais.md`)](docs/lacunas_informacionais.md)
- [Arquitetura Geoespacial e Fluxo QGIS (`docs/arquitetura_geoespacial.md`)](docs/arquitetura_geoespacial.md)
- [Relatório de Auditoria Final (`docs/relatorio_auditoria_final.md`)](docs/relatorio_auditoria_final.md)
