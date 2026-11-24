# Catálogo de Dados Geoespaciais — Geoportal Araquari (SC)

**Município:** Araquari — Santa Catarina (Código IBGE: `4201307`)  
**Data da Auditoria Final:** 24/11/2026  
**Total Integrado:** **76 camadas vetoriais** (36.439 feições, 16.56 MB em GeoJSON) organizadas em **11 grupos temáticos**, **10 mapas base** (satélite, ortofoto oficial SIGSC e relevo MDT/MDS) e **8 combos temáticos**.

## Resumo por Classe de Origem

| Classe de Origem | Quantidade de Camadas | Percentual |
|---|---:|---:|
| **Oficial** | 48 | 63.2% |
| **Científica** | 9 | 11.8% |
| **Colaborativa** | 15 | 19.7% |
| **Digitalização não oficial** | 4 | 5.3% |
| **Total** | **76** | **100,0%** |

## 1. Cadastro e Estrutura Territorial (IBGE / INCRA / OSM)

*Limite Municipal, Bairros, Distritos, Setores Censitários, Logradouros e Endereços CNEFE 2022, Imóveis Rurais SIGEF/INCRA e Edificações OSM.*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `limite_municipal_ibge` | Limite Municipal Oficial (IBGE 4201307) | Oficial | Polígono | 1 | 8.1 | `data/limite_araquari.geojson` |
| `bairros_araquari` | Bairros de Araquari (Censo IBGE 2022 — 10) | Oficial | Polígono / Multipolígono | 10 | 32.9 | `data/bairros_araquari.geojson` |
| `distritos_araquari` | Distritos Municipais (Araquari e Itapocu) | Oficial | Polígono | 2 | 28.7 | `data/distritos_araquari.geojson` |
| `ibge_setores_censitarios_2022` | Setores Censitários — Censo 2022 (116 setores) | Oficial | Polígono | 116 | 165.4 | `data/ibge_setores_censitarios_2022.geojson` |
| `cnefe_logradouros_araquari` | Logradouros e CEPs Oficiais (CNEFE 2022 — 902) | Oficial | Ponto (centro representativo de cada logradouro/CEP) | 902 | 247.6 | `data/cnefe_logradouros_araquari.geojson` |
| `cnefe_estabelecimentos_araquari` | Estabelecimentos Não Residenciais (CNEFE 2022 — 2.888) | Oficial | Ponto | 2.888 | 977.0 | `data/cnefe_estabelecimentos_araquari.geojson` |
| `cnefe_enderecos_2022` | Endereços e Edificações — CNEFE 2022 (23.304 pts) | Oficial | Ponto | 23.304 | 6553.7 | `data/cnefe_enderecos_2022.geojson` |
| `incra_sigef_araquari` | Imóveis Rurais Certificados — INCRA/SIGEF (317) | Oficial | Polígono / Multipolígono | 317 | 235.9 | `data/incra_sigef_araquari.geojson` |
| `edificacoes_osm_araquari` | Edificações — Contornos OSM (Referência Parcial — 645) | Colaborativa | Polígono | 645 | 206.8 | `data/edificacoes_osm_araquari.geojson` |
| `ibge_bc25_localidades` | Sede Municipal e Distrital Oficiais (IBGE BC25-SC — 2) | Oficial | Ponto | 2 | 0.5 | `data/ibge_bc25_localidades.geojson` |
| `localidades_osm_araquari` | Localidades e Comunidades (OpenStreetMap — 31) | Colaborativa | Ponto | 31 | 5.0 | `data/localidades_osm_araquari.geojson` |

## 2. Planejamento Urbano, Plano Diretor e Indústria

*Zoneamento (18 zonas), Macrozoneamento, Perímetro Urbano e Hierarquia Viária digitalizados dos Anexos da LC nº 281/2019, Área Urbana IBGE e polos industriais.*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `pd_zoneamento_lc281` | Zoneamento Urbano e Rural — LC nº 281/2019 (Digit. não oficial) | Digitalização não oficial | Polígono | 18 | 459.2 | `data/pd_zoneamento_lc281.geojson` |
| `pd_macrozoneamento_lc281` | Macrozoneamento Municipal — LC nº 281/2019 (Digit. não oficial) | Digitalização não oficial | Polígono | 2 | 447.3 | `data/pd_macrozoneamento_lc281.geojson` |
| `pd_perimetro_urbano_lc281` | Perímetro Urbano Legal — LC nº 281/2019 (Digit. não oficial) | Digitalização não oficial | Polígono | 1 | 95.7 | `data/pd_perimetro_urbano_lc281.geojson` |
| `pd_sistema_viario_lc281` | Hierarquia Viária Plano Diretor — LC nº 281/2019 (Digit. não oficial) | Digitalização não oficial | Linha / Polilinha | 4 | 265.5 | `data/pd_sistema_viario_lc281.geojson` |
| `perimetro_urbano_ibge` | Área Urbana Censitária (IBGE 2022 — derivada dos setores) | Oficial | Multipolígono | 1 | 12.1 | `data/perimetro_urbano_ibge.geojson` |
| `areas_industriais_araquari` | Áreas Industriais e Mineração Mapeadas (OSM — 23) | Colaborativa | Polígono | 23 | 9.7 | `data/areas_industriais_araquari.geojson` |
| `areas_urbanas_uso_araquari` | Manchas Residenciais Mapeadas (OSM — amostra de 7) | Colaborativa | Polígono | 7 | 2.3 | `data/areas_urbanas_uso_araquari.geojson` |

## 3. Meio Ambiente, Cobertura da Terra e FBDS

*Base FBDS (Uso e 378 APPs), APP Oficial IMA-SC, Áreas Prioritárias MMA, Vegetação IBGE, Fitogeográfico IMA, Áreas Úmidas e Terras Indígenas FUNAI.*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `fbds_uso_solo` | Uso e Cobertura da Terra — Alta Resolução (FBDS) | Científica | Polígono | 1.428 | 1382.8 | `data/fbds_uso_solo.geojson` |
| `fbds_app` | Áreas de Preservação Permanente — APP (FBDS — 378) | Científica | Polígono | 378 | 327.3 | `data/fbds_app.geojson` |
| `ima_app_hidrografia` | APP Hidrográfica Oficial SC (IMA-SC / SDS — 453) | Oficial | Polígono | 453 | 1041.4 | `data/ima_app_hidrografia.geojson` |
| `mma_areas_prioritarias_biodiversidade` | Áreas Prioritárias para Biodiversidade (MMA — Costa SC) | Oficial | Polígono | 1 | 1.7 | `data/mma_areas_prioritarias_biodiversidade.geojson` |
| `ibge_vegetacao` | Unidades de Vegetação / Mata Atlântica (IBGE BDIA) | Oficial | Polígono / Multipolígono | 23 | 59.1 | `data/ibge_vegetacao.geojson` |
| `ima_fitogeografico` | Regiões Fitogeográficas de SC (IMA-SC) | Oficial | Polígono / Multipolígono | 3 | 9.7 | `data/ima_fitogeografico.geojson` |
| `sigsc_areas_umidas` | Áreas Úmidas, Manguezais e Banhados (SIGSC / INDE) | Oficial | Polígono / Multipolígono | 52 | 29.5 | `data/sigsc_areas_umidas.geojson` |
| `funai_terras_indigenas` | Terras Indígenas Guarani Mbya — FUNAI (3 áreas) | Oficial | Polígono / Multipolígono | 3 | 6.4 | `data/funai_terras_indigenas.geojson` |

## 4. Licenciamento e Fiscalização Ambiental (IMA-SC)

*Processos de licenciamento ambiental (Sinfat), autos de infração e áreas embargadas (GAIA) em Araquari.*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `ima_licenciamento` | Licenciamento Ambiental — Sinfat (619 processos) | Oficial | Ponto | 619 | 345.0 | `data/ima_licenciamento.geojson` |
| `ima_autos_infracao` | Autos de Infração Ambiental — GAIA (258 registros) | Oficial | Ponto | 258 | 75.1 | `data/ima_autos_infracao.geojson` |
| `ima_embargos` | Áreas de Embargo Ambiental — GAIA (12 polígonos) | Oficial | Polígono | 12 | 7.7 | `data/ima_embargos.geojson` |
| `ima_especies_arboreas_sinfat` | Ocorrências Arbóreas — Autorização de Corte (SINFAT — 6) | Oficial | Ponto | 6 | 1.7 | `data/ima_especies_arboreas_sinfat.geojson` |

## 5. Hidrografia e Recursos Hídricos (FBDS, IMA & SGB)

*Rede de drenagem FBDS (1.802 trechos, rios duplos, massas d’água e 177 nascentes), Bacias, Ottobacias, Ilhas e Poços SIAGAS.*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `fbds_rios_simples` | Rios e Córregos — Drenagem Unifilar (FBDS — 901) | Científica | Linha | 901 | 886.4 | `data/fbds_rios_simples.geojson` |
| `fbds_rios_duplos` | Rios Largos e Canais Duplos (FBDS — 32 trechos) | Científica | Polígono | 32 | 61.2 | `data/fbds_rios_duplos.geojson` |
| `fbds_massas_dagua` | Massas d’Água e Lagoas (FBDS — 50 corpos) | Científica | Polígono | 50 | 48.0 | `data/fbds_massas_dagua.geojson` |
| `fbds_nascentes` | Nascentes Mapeadas (FBDS — 177 pontos) | Científica | Ponto | 177 | 35.8 | `data/fbds_nascentes.geojson` |
| `ima_bacias_hidrograficas` | Bacias Hidrográficas (Itapocu e Cubatão Norte) | Oficial | Polígono / Multipolígono | 2 | 9.3 | `data/ima_bacias_hidrograficas.geojson` |
| `sigsc_ottobacias` | Microbacias / Ottobacias Hidrográficas (SIGSC — 407) | Oficial | Polígono | 407 | 428.8 | `data/sigsc_ottobacias.geojson` |
| `sigsc_ilhas` | Ilhas Costeiras e Fluviais — Babitonga/Parati (103) | Oficial | Polígono | 103 | 40.7 | `data/sigsc_ilhas.geojson` |
| `sgb_pocos_siagas` | Poços Tubulares / Águas Subterrâneas (SIAGAS — 25) | Oficial | Ponto | 25 | 10.4 | `data/sgb_pocos_siagas.geojson` |

## 6. Defesa Civil e Riscos Hidrológicos (SGB / CPRM)

*Setorização oficial de áreas de risco alto a inundação da CPRM/SGB e faixa da planície costeira baixa (cota 5 m).*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `sgb_setores_risco` | Setores de Risco Alto a Inundação (SGB/CPRM — 12) | Oficial | Polígono | 12 | 15.8 | `data/sgb_setores_risco.geojson` |
| `sgb_suscetibilidade_inundacao` | Suscetibilidade a Inundação — Divisa Sul (SGB/CPRM — 3) | Oficial | Polígono | 3 | 2.4 | `data/sgb_suscetibilidade_inundacao.geojson` |
| `cota_5m_planicie_araquari` | Isolinha Cota ~5 m — Planície (MDE Terrarium) | Científica | Linha | 51 | 37.4 | `data/cota_5m_planicie_araquari.geojson` |

## 7. Geologia, Geomorfologia, Solos e Altimetria

*Bases geológicas, geomorfológicas e pedológicas (IBGE BDIA 1:250k), Declividade IMA-SC, Aquíferos (SGB) e Curvas de Nível.*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `ima_declividade_araquari` | Declividade do Relevo — 5 Classes (IMA-SC / SIGSC) | Oficial | Polígono / Multipolígono | 5 | 576.8 | `data/ima_declividade_araquari.geojson` |
| `ibge_geologia` | Mapa Geológico / Litologia (IBGE BDIA 1:250k) | Oficial | Polígono / Multipolígono | 59 | 107.5 | `data/ibge_geologia.geojson` |
| `ibge_geomorfologia` | Geomorfologia e Unidades de Relevo (IBGE BDIA) | Oficial | Polígono / Multipolígono | 23 | 67.4 | `data/ibge_geomorfologia.geojson` |
| `ibge_pedologia_solos` | Mapa de Solos / Pedologia (IBGE BDIA 1:250k) | Oficial | Polígono / Multipolígono | 34 | 84.8 | `data/ibge_pedologia_solos.geojson` |
| `sgb_hidrogeologia` | Domínios Hidrogeológicos / Aquíferos (SGB / CPRM) | Oficial | Polígono | 3 | 12.6 | `data/sgb_hidrogeologia.geojson` |
| `curvas_nivel_araquari` | Curvas de Nível ~10 m/50 m (MDE Terrarium) | Científica | Linha | 307 | 200.9 | `data/curvas_nivel_araquari.geojson` |
| `cota_20m_araquari` | Cota Altimétrica ~20 m (MDE Terrarium) | Científica | Linha | 82 | 69.4 | `data/cota_20m_araquari.geojson` |

## 8. Sistema Viário, Rodovias, Ferrovia e Mobilidade

*Rodovias federais oficiais DNIT SNV (BR-101/BR-280), OAE federais, malha rodoviária/ferroviária IBGE BC25-SC 1:25.000 e arruamento complementar OSM.*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `dnit_snv_rodovias` | Rodovias Federais Vigentes (DNIT SNV 202610A — 7) | Oficial | Linha | 7 | 67.3 | `data/dnit_snv_rodovias.geojson` |
| `dnit_oae_pontes` | Pontes e Viadutos Federais — OAE (DNIT — 7) | Oficial | Ponto | 7 | 2.1 | `data/dnit_oae_pontes.geojson` |
| `ibge_bc25_rodovias` | Malha Rodoviária Oficial 1:25.000 (IBGE BC25-SC — 142) | Oficial | Linha | 142 | 129.5 | `data/ibge_bc25_rodovias.geojson` |
| `ibge_bc25_ferrovia` | Ferrovia Oficial 1:25.000 (IBGE BC25-SC — ALL Malha Sul) | Oficial | Linha | 2 | 6.2 | `data/ibge_bc25_ferrovia.geojson` |
| `ibge_bc25_pontes_viadutos` | Pontes e Viadutos 1:25.000 (IBGE BC25-SC — 11) | Oficial | Linha | 11 | 4.0 | `data/ibge_bc25_pontes_viadutos.geojson` |
| `rodovias_araquari` | Rodovias e Acessos Complementares (OSM — 314) | Colaborativa | Linha | 314 | 108.3 | `data/rodovias_araquari.geojson` |
| `sistema_viario_araquari` | Sistema Viário Municipal — Ruas e Estradas (OSM — 1.617) | Colaborativa | Linha | 1.617 | 450.5 | `data/sistema_viario_araquari.geojson` |
| `ferrovia_araquari` | Malha Ferroviária — Referência Complementar (OSM) | Colaborativa | Linha | 7 | 2.8 | `data/ferrovia_araquari.geojson` |
| `pontes_viadutos_araquari` | Pontes, Viadutos e Travessias (OSM — 36) | Colaborativa | Linha | 36 | 8.4 | `data/pontes_viadutos_araquari.geojson` |
| `pontos_onibus_araquari` | Pontos de Ônibus Mapeados (OSM — 75) | Colaborativa | Ponto | 75 | 17.2 | `data/pontos_onibus_araquari.geojson` |
| `ciclovias_araquari` | Ciclovias Mapeadas (OSM — 1 trecho parcial) | Colaborativa | Linha | 1 | 0.3 | `data/ciclovias_araquari.geojson` |

## 9. Equipamentos Públicos, Saúde, Educação e Lazer

*Unidades de Saúde oficiais (DataSUS/CNES), Escolas e IFC Araquari, Prefeitura, Praças, Parques e Infraestrutura.*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `unidades_saude_cnes` | Unidades de Saúde Oficiais (DataSUS / CNES — 20) | Oficial | Ponto | 20 | 14.1 | `data/unidades_saude_cnes.geojson` |
| `ibge_bc25_edif_ensino` | Edificações de Ensino Oficiais 1:25.000 (IBGE BC25-SC — 4) | Oficial | Ponto | 4 | 1.4 | `data/ibge_bc25_edif_ensino.geojson` |
| `escolas_araquari` | Escolas, CEIs e IFC Araquari (OSM — 20 unidades) | Colaborativa | Ponto | 20 | 5.2 | `data/escolas_araquari.geojson` |
| `equipamentos_publicos_araquari` | Equipamentos Públicos, Segurança e Patrimônio (OSM — 15) | Colaborativa | Ponto | 15 | 3.4 | `data/equipamentos_publicos_araquari.geojson` |
| `pracas_lazer_araquari` | Praças, Parques e Espaços Esportivos (OSM — 34) | Colaborativa | Ponto | 34 | 6.7 | `data/pracas_lazer_araquari.geojson` |

## 10. Energia, Dutos, Saneamento e Apoio Náutico

*Rede de transmissão e concessão elétrica oficial (ANEEL SIGEL), Oleoduto OPASC e linhas/torres 1:25.000 (IBGE BC25-SC), reservatórios de água e trapiches náuticos (OSM).*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `aneel_transmissao_linhas` | Linhas de Transmissão 138 kV (ANEEL SIGEL — 3) | Oficial | Linha | 3 | 1.7 | `data/aneel_transmissao_linhas.geojson` |
| `aneel_subestacoes` | Subestação de Energia — ARAQ.HYOSUNG (ANEEL SIGEL — 1) | Oficial | Ponto | 1 | 0.3 | `data/aneel_subestacoes.geojson` |
| `aneel_concessao_distribuicao` | Área de Concessão Elétrica — CELESC-DIS (ANEEL SIGEL) | Oficial | Polígono | 1 | 56.9 | `data/aneel_concessao_distribuicao.geojson` |
| `ibge_bc25_dutos` | Oleoduto OPASC — Faixa de Dutos 1:25.000 (IBGE BC25-SC — 2) | Oficial | Linha | 2 | 2.5 | `data/ibge_bc25_dutos.geojson` |
| `ibge_bc25_energia_linhas` | Linhas de Energia 230 kV / Alta Tensão 1:25.000 (IBGE BC25-SC — 4) | Oficial | Linha | 4 | 4.4 | `data/ibge_bc25_energia_linhas.geojson` |
| `ibge_bc25_torres_energia` | Torres de Transmissão de Energia 1:25.000 (IBGE BC25-SC — 87) | Oficial | Ponto | 87 | 23.0 | `data/ibge_bc25_torres_energia.geojson` |
| `saneamento_reservatorios_osm` | Reservatórios de Água Mapeados (OSM — 2) | Colaborativa | Ponto | 2 | 0.6 | `data/saneamento_reservatorios_osm.geojson` |
| `apoio_nautico_trapiches_osm` | Píeres e Trapiches de Apoio Náutico (OSM — 4) | Colaborativa | Ponto | 4 | 0.9 | `data/apoio_nautico_trapiches_osm.geojson` |

## 11. Socioeconômico (Censo IBGE 2022) e Patrimônio Cultural (IPHAN)

*Mapa coroplético de densidade demográfica e alfabetização (45.283 hab.), saneamento domiciliar (água, esgoto e lixo), Favela e Comunidade Urbana oficial (Horto Flor de Liz) e Sítios Arqueológicos IPHAN.*

| ID da Camada | Nome no Geoportal | Classe de Origem | Geometria | Feições | Tamanho (KB) | Arquivo Local |
|---|---|---|---|---:|---:|---|
| `ibge_densidade_demografica_2022` | Densidade Demográfica e População (Censo IBGE 2022) | Oficial | Polígono | 116 | 151.1 | `data/ibge_densidade_demografica_2022.geojson` |
| `ibge_saneamento_domicilios_2022` | Saneamento Domiciliar — Água, Esgoto e Lixo (Censo IBGE 2022) | Oficial | Polígono | 116 | 148.1 | `data/ibge_saneamento_domicilios_2022.geojson` |
| `ibge_favelas_comunidades_urbanas_2022` | Favelas e Comunidades Urbanas — Horto Flor de Liz (IBGE 2022 — 1) | Oficial | Polígono | 1 | 0.6 | `data/ibge_favelas_comunidades_urbanas_2022.geojson` |
| `iphan_sitios_arqueologicos` | Sítios Arqueológicos Cadastrados (IPHAN / CNSA — 4) | Oficial | Ponto | 4 | 2.2 | `data/iphan_sitios_arqueologicos.geojson` |

## Mapas Base, Ortoimagens e Modelos de Elevação (10)

| ID | Nome | Ano / Ref. | Categoria | Classe | Redistribuível |
|---|---|---|---|---|---|
| `satelite_global` | Satélite Alta Resolução (Atual — Maxar/Esri) | Atual | Satélite HD | Científica | Visualização online |
| `orto_sigsc_2012` | Ortoimagem Aérea Oficial SC 2012 (SIGSC — 39 cm) | 2012 | Oficial SC (SIGSC) | Oficial | Visualização online |
| `satelite_hibrido` | Satélite Híbrido (Satélite + Ruas e Rótulos) | Atual | Satélite HD | Científica | Visualização online |
| `esri_clarity` | Satélite Clarity (Ultra-Nítido) | Global | Satélite HD | Científica | Visualização online |
| `bing_aerial` | Bing Satélite Aéreo (VirtualEarth) | Global | Satélite HD | Científica | Visualização online |
| `sentinel2_2024` | Satélite Sentinel-2 Cloudless 2024 (EOX — 10 m) | 2024 | Satélite HD | Científica | Visualização online |
| `mdt_sigsc_2012` | MDT — Relevo Sombreado Oficial SC (SIGSC) | 2012 | Relevo Oficial SC | Oficial | Visualização online |
| `mds_sigsc_2012` | MDS — Modelo Digital de Superfície SC (SIGSC) | 2012 | Relevo Oficial SC | Oficial | Visualização online |
| `osm` | OpenStreetMap (Ruas e Logradouros) | Global | Mapa Base | Colaborativa | Visualização online |
| `carto_light` | Carto Positron (Mapa Claro) | Global | Mapa Base | Colaborativa | Visualização online |
