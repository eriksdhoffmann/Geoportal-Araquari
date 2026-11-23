# Auditoria Técnica — Fase 1 (Código, Camadas e Proveniência Real)

**Data da auditoria:** 23/11/2026  
**Repositório analisado:** `c:\Users\Win11\Downloads\Geoportal Araquari` (`HEAD 953ebef`)  
**Script de verificação automatizada:** `scratch/audit_fase1.py`

> **Nota de transparência:** Nesta Fase 1 não foi feita nenhuma alteração nos arquivos do aplicativo ou nos GeoJSONs existentes. Todas as inconsistências, simplificações e divergências de rótulo abaixo foram detectadas diretamente nos arquivos e nos scripts originais de coleta.

---

## 1. Resumo Quantitativo Verificado

| Indicador Auditado | Valor Observado |
| :--- | :---: |
| Arquivos `data/*.geojson` | **44 arquivos** |
| Tamanho total em `data/*.geojson` | **4.811,16 KB (~4,70 MB)** |
| Grupos temáticos em `js/catalog.js` | **9 grupos** |
| Camadas cadastradas em `js/catalog.js` | **44 camadas** |
| Mapas base cadastrados em `js/catalog.js` | **9 mapas base** (3 WMS SIGSC + 6 tiles globais) |
| Camadas no bundle instantâneo (`araquari-bundle.js`) | **35 camadas** (`1.091,5 KB`) |
| Camadas no bundle extra (`araquari-bundle-extra.js`) | **8 camadas** (`3.712,8 KB`) |
| Camada em arquivo isolado (`limite-araquari.js`) | **1 camada** (`8,2 KB`) |
| Arquivos órfãos ou links quebrados entre `catalog.js` e `data/` | **0** |
| Camadas fora da lista `OFFICIAL_DOWNLOADS` | **20 de 44 camadas** |
| Total de geometrias inválidas (`~is_valid`) | **41 geometrias** (em 9 arquivos) |
| Camadas com conteúdo quase vazio (`<= 2` feições reais de infraestrutura) | **1 crítica** (`ciclovias_araquari.geojson`: apenas 1 trecho) |

---

## 2. Auditoria Completa por Camada (44 Camadas)

**Legenda de "Tipo de Fonte":**
- **Oficial:** órgão público produtor/detentor oficial do dado (IBGE, FBDS/acordo institucional ambiental, IMA-SC, SGB/CPRM, FUNAI, DataSUS, SIGSC).
- **Colaborativa:** mapeamento comunitário (OpenStreetMap).
- **Derivada (script):** camada gerada ou transformada matematicamente nos scripts de coleta a partir de outra base (ex.: dissolução de setores censitários ou extração de curvas via grade DEM).

### Grupo 1 — Território, Limites e Censo IBGE 2022 (`territorio_censo`)

| ID (`catalog.js`) | Nome Exibido | Arquivo | Feições | Geometria | Inv. | Dup. | Dentro Araquari (Estrito / 1 km) | Fonte Real (Script de Coleta) | Tipo | Problema Identificado | Recomendação |
| :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| `limite_municipal_ibge` | Limite Municipal Oficial (IBGE 4201307) | `data/limite_araquari.geojson` | 1 | Polygon (1) | 0 | 0 | 100% / 100% | IBGE API Malhas v3 (`municipios/4201307`) | Oficial | Simplificado (`0.00003°`) com arredondamento de 6 casas; aceitável. | Manter |
| `bairros_araquari` | Bairros Oficiais de Araquari (IBGE 2022 — 10) | `data/bairros_araquari.geojson` | 10 | MultiPolygon (3), Polygon (7) | 0 | 0 | 100% / 100% | IBGE `SC_bairros_CD2022.gpkg` (dissolvido por nome) | Oficial (processada) | Falta atributo de população/domicílios do Censo 2022 e não verifica se há lei municipal própria de bairros divergente do IBGE. | Manter e enriquecer na Fase 2/7 |
| `distritos_araquari` | Distritos Municipais (Araquari e Itapocu) | `data/distritos_araquari.geojson` | 2 | Polygon (2) | 0 | 0 | 100% / 100% | IBGE `SC_distritos_CD2022.gpkg` | Oficial | Sem dados populacionais agregados no GeoJSON. | Manter e enriquecer na Fase 7 |
| `ibge_setores_censitarios_2022` | Setores Censitários — Censo 2022 (116 setores) | `data/ibge_setores_censitarios_2022.geojson` | 116 | Polygon (116) | 0 | 0 | 100% / 100% | IBGE `SC_setores_CD2022.gpkg` | Oficial | Sem variáveis censitárias (população, domicílios, renda); `nucleo_urbano` 100% nulo e `aglomerado` 92,2% nulo. | Manter e unir com Universo/Agregados Censo 2022 na Fase 7 |
| `localidades_osm_araquari` | Localidades, Vilas e Loteamentos (31 pontos) | `data/localidades_osm_araquari.geojson` | 31 | Point (31) | 0 | 0 | 100% / 100% | OpenStreetMap Overpass (`place=*`) | Colaborativa | Título mistura vilas e loteamentos quando na verdade são nós `place` do OSM; ausente da aba Downloads. | Re-rotular como colaborativa (OSM) e buscar localidades oficiais IBGE/SIGSC |

### Grupo 2 — Planejamento Urbano, Perímetro e Indústria (`planejamento_urbano`)

| ID (`catalog.js`) | Nome Exibido | Arquivo | Feições | Geometria | Inv. | Dup. | Dentro Araquari (Estrito / 1 km) | Fonte Real (Script de Coleta) | Tipo | Problema Identificado | Recomendação |
| :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| `perimetro_urbano_ibge` | Perímetro / Área Urbana Consolidada (IBGE 2022) | `data/perimetro_urbano_ibge.geojson` | 1 | MultiPolygon (1) | 0 | 0 | 100% / 100% | Derivada via `dissolve()` dos 79 setores urbanos do `SC_setores_CD2022.gpkg` | Derivada (script) | **Não é o perímetro urbano legal** do Plano Diretor municipal — é a união dos setores urbanos do IBGE. Nome induz ambiguidade jurídica. | Re-rotular claramente (`Área Urbana Censitária IBGE`) e pesquisar/digitalizar Perímetro Legal na Fase 4 |
| `areas_industriais_araquari` | Zonas Industriais, Polos Logísticos e Mineração (23) | `data/areas_industriais_araquari.geojson` | 23 | Polygon (23) | 0 | 0 | 100% / 100% | OpenStreetMap Overpass (`landuse=industrial\|port\|quarry`) | Colaborativa | Não representa o zoneamento industrial legal (ZI) do Plano Diretor; cobertura incompleta; 39,1% sem `setor`. | Re-rotular como OSM e substituir/separar do Zoneamento na Fase 4 |
| `areas_urbanas_uso_araquari` | Manchas Residenciais e Loteamentos Mapeados | `data/areas_urbanas_uso_araquari.geojson` | 7 | Polygon (7) | 0 | 0 | 100% / 100% | OpenStreetMap Overpass (`landuse=residential\|commercial\|retail`) | Colaborativa | Cobertura extremamente incompleta (apenas 7 polígonos para todo o município). | Avaliar remoção ou re-rotular como amostra colaborativa OSM na Fase 4 |

### Grupo 3 — Meio Ambiente, Cobertura da Terra e FBDS (`meio_ambiente_fbds`)

| ID (`catalog.js`) | Nome Exibido | Arquivo | Feições | Geometria | Inv. | Dup. | Dentro Araquari (Estrito / 1 km) | Fonte Real (Script de Coleta) | Tipo | Problema Identificado | Recomendação |
| :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| `fbds_uso_solo` | Uso e Cobertura da Terra — Alta Resolução (FBDS) | `data/fbds_uso_solo.geojson` | 1428 | Polygon (1428) | **19** | 0 | 98,7% / 100% | FBDS `SC_4201307_USO.shp` | Oficial / Técnica (filtrada) | **19 geometrias inválidas** (pós-simplificação `0.00014°`); polígonos `< 0,05 ha` foram filtrados na coleta. | Corrigir geometrias inválidas e documentar filtro/data FBDS na Fase 5 |
| `fbds_app` | Áreas de Preservação Permanente — APP (FBDS — 380) | `data/fbds_app.geojson` | 380 | Polygon (380) | **5** | 0 | 91,1% / 100% | FBDS `SC_4201307_APP.shp` | Oficial / Técnica | **5 geometrias inválidas**; coluna `fonte` ausente no GeoJSON (`fontes_in_data=[]`); 8,9% tocam margem externa limítrofe. | Corrigir geometrias inválidas e inserir coluna `fonte` |
| `ibge_vegetacao` | Unidades de Vegetação / Mata Atlântica (IBGE BDIA) | `data/ibge_vegetacao.geojson` | 23 | MultiPolygon (4), Polygon (19) | 0 | 0 | 100% / 100% | IBGE GeoServer WFS `BDIA:vege_area` (1:250.000) | Oficial | Escala regional (1:250.000); muitos nulos em `nm_uveg` (47,8%) e `nm_uantr` (60,9%); fora de Downloads. | Manter com nota de escala cartográfica e incluir em Downloads |
| `ima_fitogeografico` | Regiões Fitogeográficas de SC (IMA-SC) | `data/ima_fitogeografico.geojson` | 3 | MultiPolygon (1), Polygon (2) | 0 | 0 | 100% / 100% | IMA-SC WFS `ima:ft_fitogeografico` | Oficial | Rótulos traduzidos via mapa em script; atributo `fit_ar_ha` refere-se à área estadual da região. | Manter e documentar que `fit_ar_ha` é estadual |
| `sigsc_areas_umidas` | Áreas Úmidas, Manguezais e Banhados (SIGSC / INDE) | `data/sigsc_areas_umidas.geojson` | 52 | Polygon (51), MultiPolygon (1) | 0 | 0 | 100% / 100% | SIGSC WFS `SIGSC:INDE_area_umida` | Oficial | Todos os 52 polígonos receberam o rótulo genérico `'Área Úmida / Manguezal / Banhado'` em script sem distinguir subtipo original. | Verificar atributos originais SIGSC na Fase 5 |
| `funai_terras_indigenas` | Terras Indígenas Guarani Mbya — FUNAI (3 áreas) | `data/funai_terras_indigenas.geojson` | 3 | Polygon (2), MultiPolygon (1) | 0 | 0 | 100% / 100% | IMA-SC WFS `ima:funai_terra_indigena` (espelho FUNAI) | Oficial | Recortado com buffer `near`; validar se as 3 TIs cruzam Araquari ou estão em limites imediatos e conferir atualização FUNAI. | Manter e verificar vigência FUNAI na Fase 5 |

### Grupo 4 — Licenciamento e Fiscalização Ambiental (`licenciamento_ima`)

| ID (`catalog.js`) | Nome Exibido | Arquivo | Feições | Geometria | Inv. | Dup. | Dentro Araquari (Estrito / 1 km) | Fonte Real (Script de Coleta) | Tipo | Problema Identificado | Recomendação |
| :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| `ima_licenciamento` | Licenciamento Ambiental — Sinfat (619 processos) | `data/ima_licenciamento.geojson` | 619 | Point (619) | 0 | **374** | 100% / 100% | IMA-SC WFS `ima:sinfat_licenciamento_ima_pontos` | Oficial | **374 pontos com coordenadas sobrepostas** (vários processos no mesmo empreendimento; clique mostra só 1 sem seletor). Texto `atividade` truncado a 140 chars. | Manter; tratar empilhamento de pontos no popup/cluster na Fase 5 |
| `ima_autos_infracao` | Autos de Infração Ambiental — GAIA (258 registros) | `data/ima_autos_infracao.geojson` | 258 | Point (258) | 0 | **66** | 100% / 100% | IMA-SC WFS `ima:auto_infracacao_ambiental` | Oficial | **66 pontos com coordenadas sobrepostas**; fora da aba Downloads. | Manter e tratar múltiplos pontos sobrepostos |
| `ima_embargos` | Áreas de Embargo Ambiental — GAIA (12 polígonos) | `data/ima_embargos.geojson` | 12 | Polygon (12) | 0 | 1 | 100% / 100% | IMA-SC WFS `ima:gaia_embargos` | Oficial | 1 geometria duplicada; 58,3% nulo em `infracao_categoria`; `infracao_descricao` truncada em 220 chars. | Manter e checar duplicata na Fase 5 |

### Grupo 5 — Hidrografia e Recursos Hídricos (`hidrografia_aguas`)

| ID (`catalog.js`) | Nome Exibido | Arquivo | Feições | Geometria | Inv. | Dup. | Dentro Araquari (Estrito / 1 km) | Fonte Real (Script de Coleta) | Tipo | Problema Identificado | Recomendação |
| :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| `fbds_rios_simples` | Rios e Córregos — Drenagem Unifilar (FBDS — 1.802) | `data/fbds_rios_simples.geojson` | 1802 | LineString (1802) | 0 | **910** | 91,3% / 100% | FBDS `SC_4201307_RIOS_SIMPLES.shp` | Oficial / Técnica | **910 geometrias idênticas duplicadas** (apenas 892 geometrias distintas repetidas). Dobrando peso e poluição visual sem ganho. | Auditar SHP bruto e deduplicar mantendo contagem real na Fase 3/5 |
| `fbds_rios_duplos` | Rios Largos e Canais Duplos (FBDS — 33 trechos) | `data/fbds_rios_duplos.geojson` | 33 | Polygon (33) | **2** | 0 | 100% / 100% | FBDS `SC_4201307_RIOS_DUPLOS.shp` | Oficial / Técnica | **2 geometrias inválidas**; coluna `fonte` ausente (`fontes_in_data=[]`). | Corrigir geometrias e incluir coluna `fonte` |
| `fbds_massas_dagua` | Massas d’Água e Lagoas (FBDS — 50 corpos) | `data/fbds_massas_dagua.geojson` | 50 | Polygon (49), MultiPolygon (1) | **1** | 0 | 96,0% / 100% | FBDS `SC_4201307_MASSAS_DAGUA.shp` | Oficial / Técnica | **1 geometria inválida**; coluna `fonte` ausente (`fontes_in_data=[]`). | Corrigir geometria e incluir coluna `fonte` |
| `fbds_nascentes` | Nascentes Mapeadas (FBDS — 177 pontos) | `data/fbds_nascentes.geojson` | 177 | Point (177) | 0 | 0 | 98,9% / 100% | FBDS `SC_4201307_NASCENTES.shp` | Oficial / Técnica | Coluna `fonte` ausente (`fontes_in_data=[]`). | Incluir coluna `fonte` |
| `ima_bacias_hidrograficas` | Bacias Hidrográficas (Itapocu e Cubatão Norte) | `data/ima_bacias_hidrograficas.geojson` | 2 | Polygon (1), MultiPolygon (1) | 0 | 0 | 100% / 100% | IMA-SC WFS `ima:ft_bacia_hidrografica` | Oficial | Dado íntegro (escala estadual/regional recortada). | Manter |
| `sigsc_ottobacias` | Microbacias / Ottobacias Hidrográficas (SIGSC — 407) | `data/sigsc_ottobacias.geojson` | 407 | Polygon (365), MultiPolygon (42) | **10** | 0 | 100% / 100% | SIGSC WFS `SIGSC:ANA_ottobacia` | Oficial | **10 geometrias inválidas** após simplificação (`0.00012°`). | Corrigir geometrias inválidas |
| `sigsc_ilhas` | Ilhas Costeiras e Fluviais — Babitonga/Parati (137) | `data/sigsc_ilhas.geojson` | 137 | Polygon (137) | 0 | 0 | **71,5% / 95,6%** | SIGSC WFS `SIGSC:INDE_ilha` | Oficial | Cerca de 28,5% das feições ficam fora do limite estrito de Araquari (e ~4,4% além de 1 km, abrangendo ilhas da Babitonga em municípios vizinhos). | Filtrar/sinalizar abrangência (`Babitonga/Entorno`) ou recortar estritamente |
| `sgb_pocos_siagas` | Poços Tubulares / Águas Subterrâneas (SIAGAS — 25) | `data/sgb_pocos_siagas.geojson` | 25 | Point (25) | 0 | 0 | 100% / 100% | SGB/CPRM FeatureServer `hidrologia/SIAGAS_MODDAD` | Oficial | `num_vazao_especifica` 44% nulo e `str_aquifero` 28% nulo (lacuna da fonte). | Manter e documentar campos vazios no metadado |

### Grupo 6 — Defesa Civil e Riscos Hidrológicos (`defesa_civil_riscos`)

| ID (`catalog.js`) | Nome Exibido | Arquivo | Feições | Geometria | Inv. | Dup. | Dentro Araquari (Estrito / 1 km) | Fonte Real (Script de Coleta) | Tipo | Problema Identificado | Recomendação |
| :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| `sgb_setores_risco` | Setores de Risco Alto a Inundação (SGB/CPRM — 12) | `data/sgb_setores_risco.geojson` | 12 | Polygon (12) | 0 | 0 | 100% / 100% | SGB/CPRM FeatureServer `gestaoterritorial/risco` | Oficial | Campos `descricao` e `sug_interv` truncados em 260 caracteres no script de polimento. | Manter e restaurar textos completos na Fase 5 |
| `cota_5m_planicie_araquari` | Isolinha Cota 5 m — Planície Costeira / Alagável | `data/cota_5m_planicie_araquari.geojson` | 51 | LineString (43), MultiLineString (8) | 0 | 0 | 100% / 100% | **Gerada via Marching Squares** sobre tiles AWS Terrarium DEM z11 (`sigma=1.4`) | Derivada (script / científica) | **Não é mancha de inundação oficial** nem produto cartográfico direto do SIGSC/Defesa Civil; rótulo sugere área alagável quando é uma isolinha suavizada de MDE global. | Re-rotular explicitando cálculo aproximado sobre MDE Terrarium ou substituir por base oficial de altimetria/inundação na Fase 5 |

### Grupo 7 — Geologia, Geomorfologia, Solos e Altimetria (`geologia_relevo`)

| ID (`catalog.js`) | Nome Exibido | Arquivo | Feições | Geometria | Inv. | Dup. | Dentro Araquari (Estrito / 1 km) | Fonte Real (Script de Coleta) | Tipo | Problema Identificado | Recomendação |
| :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| `ibge_geologia` | Mapa Geológico / Litologia (IBGE BDIA 1:250k) | `data/ibge_geologia.geojson` | 59 | MultiPolygon (3), Polygon (56) | 0 | 0 | 100% / 100% | IBGE WFS `BDIA:geol_area` (1:250.000) | Oficial | `nm_lito1` e `nm_lito2` estão **98,3% nulos**; escala regional 1:250k (verificar se SGB 1:100k oferece maior detalhe). | Manter, checar SGB 1:100k na Fase 3/5 |
| `ibge_geomorfologia` | Geomorfologia e Unidades de Relevo (IBGE BDIA) | `data/ibge_geomorfologia.geojson` | 23 | Polygon (17), MultiPolygon (6) | **1** | 0 | 100% / 100% | IBGE WFS `BDIA:geom_area` (1:250.000) | Oficial | **1 geometria inválida**. | Corrigir geometria inválida |
| `ibge_pedologia_solos` | Mapa de Solos / Pedologia (IBGE BDIA 1:250k) | `data/ibge_pedologia_solos.geojson` | 34 | Polygon (29), MultiPolygon (5) | **1** | 0 | 100% / 100% | IBGE WFS `BDIA:pedo_area` (1:250.000) | Oficial | **1 geometria inválida**; ~11,8% sem `ordem`/`subordem` (corpos d'água/áreas urbanas). | Corrigir geometria inválida |
| `sgb_hidrogeologia` | Domínios Hidrogeológicos / Aquíferos (SGB / CPRM) | `data/sgb_hidrogeologia.geojson` | 3 | Polygon (2), MultiPolygon (1) | 0 | 0 | 100% / 100% | SGB/CPRM FeatureServer `hidrologia/Dominios_hidrogeologicos_Brasil` | Oficial | Campo `potenc` está 100% nulo. | Manter e remover campo vazio no popup |
| `curvas_nivel_araquari` | Curvas de Nível — Altimetria (10 m / 50 m) | `data/curvas_nivel_araquari.geojson` | 307 | LineString (288), MultiLineString (19) | 0 | 0 | 100% / 100% | **Gerada via Marching Squares** sobre AWS Terrarium DEM z11 (`sigma=1.4`) | Derivada (script / científica) | Rotulada genericamente como `SRTM / Copernicus DEM (Terrarium)` sem informar resolução z11 (~50 m/px) nem suavização Gaussiana. | Buscar curvas oficiais IBGE BC25 `1:25.000` (`CCAR:BC25_Curva_Nivel_L`) ou SIGSC na Fase 3 |
| `cota_20m_araquari` | Cota Altimétrica de Referência 20 m | `data/cota_20m_araquari.geojson` | 82 | LineString (78), MultiLineString (4) | 0 | 0 | 100% / 100% | **Gerada via Marching Squares** sobre AWS Terrarium DEM z11 | Derivada (script / científica) | Mesma derivação aproximada em z11 que as curvas gerais. | Substituir por isolinha oficial 20 m se houver ou explicitar método na Fase 3 |

### Grupo 8 — Sistema Viário, Rodovias, Ferrovia e Mobilidade (`viario_mobilidade`)

| ID (`catalog.js`) | Nome Exibido | Arquivo | Feições | Geometria | Inv. | Dup. | Dentro Araquari (Estrito / 1 km) | Fonte Real (Script de Coleta) | Tipo | Problema Identificado | Recomendação |
| :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| `rodovias_araquari` | Rodovias Federais (BR-101 / BR-280) e Estaduais (SC-415) | `data/rodovias_araquari.geojson` | 315 | LineString (313), MultiLineString (2) | **1** | 0 | 100% / 100% | **100% OpenStreetMap Overpass** (`ov_a`) | Colaborativa (**rotulada errado**) | **Erro grave de procedência:** o campo `fonte` diz `'OpenStreetMap / DNIT / SIE-SC'`, porém **não veio do DNIT nem da SIE-SC** (e `jurisdicao` foi inferida por substring em `ref`). Há **1 geometria inválida**. | Re-rotular já como OpenStreetMap na revisão e buscar SNV/DNIT e SIE-SC oficiais na Fase 3/6 |
| `sistema_viario_araquari` | Sistema Viário Municipal — Ruas e Estradas (1.618) | `data/sistema_viario_araquari.geojson` | 1618 | LineString (1615), MultiLineString (3) | **1** | 0 | 100% / 100% | OpenStreetMap Overpass (`ov_b`) | Colaborativa | **1 geometria inválida**; 54,9% sem `pavimento`, 94,5% sem `vel_max`, muitas vias sem nome oficial (`nome` cai no tipo genérico `Via Local / Residencial`). | Manter como colaborativa explícita; confrontar com logradouros oficiais (IBGE CNEFE / Prefeitura) na Fase 2/6 |
| `ferrovia_araquari` | Malha Ferroviária — Ramal São Francisco do Sul | `data/ferrovia_araquari.geojson` | 7 | LineString (7) | 0 | 0 | 100% / 100% | **100% OpenStreetMap Overpass** | Colaborativa (**rotulada errado**) | **Erro de procedência:** rotulada como `'OpenStreetMap / ANTT'` e preencheu `'operador': 'Rumo Logística / ANTT'` como fallback de script. | Re-rotular como OpenStreetMap e buscar base oficial ANTT / IBGE BC25 na Fase 3/6 |
| `pontes_viadutos_araquari` | Pontes, Viadutos e Travessias (36 estruturas) | `data/pontes_viadutos_araquari.geojson` | 36 | LineString (36) | 0 | 0 | 100% / 100% | OpenStreetMap Overpass (`bridge=yes`) | Colaborativa | 50% sem `rodovia`; fora da aba Downloads. | Manter como colaborativa; buscar DNIT SGO/OAE e IBGE BC25 na Fase 6 |
| `pontos_onibus_araquari` | Pontos de Ônibus e Transporte Coletivo (75) | `data/pontos_onibus_araquari.geojson` | 75 | Point (75) | 0 | 0 | 100% / 100% | OpenStreetMap Overpass (`bus_stop`) | Colaborativa | 33,3% sem `operador`; sem linhas vinculadas; fora de Downloads. | Manter como colaborativa (OSM) e pesquisar transporte municipal na Fase 6 |
| `ciclovias_araquari` | Infraestrutura Cicloviária Mapeada | `data/ciclovias_araquari.geojson` | **1** | LineString (1) | 0 | 0 | 100% / 100% | OpenStreetMap Overpass (`cycleway`) | Colaborativa | **Camada praticamente vazia (`1` única feição, `0,27 KB`).** Induz expectativa de rede cicloviária municipal completa. | Pesquisar dados oficiais na Fase 6 ou sinalizar lacuna / cobertura parcial |

### Grupo 9 — Equipamentos Públicos, Saúde, Educação e Lazer (`equipamentos_servicos`)

| ID (`catalog.js`) | Nome Exibido | Arquivo | Feições | Geometria | Inv. | Dup. | Dentro Araquari (Estrito / 1 km) | Fonte Real (Script de Coleta) | Tipo | Problema Identificado | Recomendação |
| :--- | :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- |
| `unidades_saude_cnes` | Unidades de Saúde Oficiais (DataSUS / CNES — 19) | `data/unidades_saude_cnes.geojson` | 19 | Point (19) | 0 | 1 | 100% / 100% | API Dados Abertos Saúde / CNES (`420130`) | Oficial | **1 par duplicado de coordenada:** `CMRF CENTRAL MUNICIPAL DE REDE DE FRIO` e `UBS BARRA DO ITAPOCU` estão exatamente no mesmo ponto; verificar se há atualização no CNES. | Manter e checar endereço correto do CMRF/UBS na Fase 6 |
| `escolas_araquari` | Escolas, CEIs e IFC Campus Araquari (20 unidades) | `data/escolas_araquari.geojson` | 20 | Point (20) | 0 | 0 | 100% / 100% | OpenStreetMap Overpass | Colaborativa | Dado **não oficial** (OSM); 75% sem `operador` e 60% sem `bairro`. Faltam escolas possivelmente ausentes do OSM. | Cruzar com Censo Escolar INEP/MEC e Portal da Prefeitura na Fase 6 |
| `equipamentos_publicos_araquari` | Equipamentos Públicos, Segurança e Patrimônio (15) | `data/equipamentos_publicos_araquari.geojson` | 15 | Point (15) | 0 | 0 | 100% / 100% | OpenStreetMap Overpass | Colaborativa | Mistura administração, segurança, cultura e turismo em 15 pontos do OSM; contém feição genérica `'Patrimônio Histórico (yes)'` e 40% sem `endereco`. | Separar por subtema e buscar fontes oficiais (IPHAN, PM/BM, Prefeitura) na Fase 6/7 |
| `pracas_lazer_araquari` | Praças, Parques e Espaços Esportivos (34 locais) | `data/pracas_lazer_araquari.geojson` | 34 | Point (34) | 0 | 0 | 100% / 100% | OpenStreetMap Overpass (`leisure=*`) | Colaborativa | 55,9% sem `esporte`; mistura parques, quadras privadas/clubes e marinas. | Re-rotular e revisar na Fase 6 |
| `infra_saneamento_nautica` | Saneamento (CASAN) e Apoio Náutico (6 locais) | `data/infra_saneamento_nautica.geojson` | 6 | Point (6) | 0 | 0 | 100% / 100% | OpenStreetMap Overpass (`man_made=*`) | Colaborativa (**rotulada errado**) | **Erro de atributo em script:** preencheu `operador: 'CASAN / Municipal'` por padrão, inclusive para `Píer / Trapiche Náutico`! Nome afirma CASAN mesmo em trapiches. | Separar saneamento de apoio náutico e corrigir operador real na Fase 6 |

---

## 3. Outras Inconsistências Encontradas no Catálogo e Mapas Base

1. **Mapa Base SIGSC 2012 com divergência entre Rótulo e Camada WMS (`js/catalog.js:138-145`):**
   - O catálogo exibe o nome **`Ortoimagem Aérea Oficial SC 2012 (SIGSC — 39 cm)`**, porém a camada solicitada ao servidor `https://sigsc.sc.gov.br/sigserver/ows` é **`SIGSC:OrtoRGB-Landsat-2012`** (Landsat tem resolução de ~15–30 m, não 39 cm!). É obrigatório consultar o `GetCapabilities` completo do SIGSC na Fase 3 para confirmar qual é o nome exato do layer aerofotogramétrico de 39 cm (`OrtoRGB` de 2010–2012) ou corrigir o rótulo.
2. **Aba Download incompleta (`OFFICIAL_DOWNLOADS` em `catalog.js`):**
   - **20 camadas** das 44 existentes não aparecem na lista de Downloads: `localidades_osm_araquari`, `areas_urbanas_uso_araquari`, `ibge_vegetacao`, `ima_fitogeografico`, `sigsc_areas_umidas`, `ima_autos_infracao`, `ima_embargos`, `sigsc_ottobacias`, `sigsc_ilhas`, `sgb_pocos_siagas`, `cota_5m_planicie_araquari`, `ibge_geomorfologia`, `sgb_hidrogeologia`, `cota_20m_araquari`, `pontes_viadutos_araquari`, `pontos_onibus_araquari`, `ciclovias_araquari`, `equipamentos_publicos_araquari`, `pracas_lazer_araquari` e `infra_saneamento_nautica`.
   - O usuário também solicitou uma **aba/página dedicada de Downloads com buscador** (superando o modelo de Floripa, que lista 158 camadas sem busca).
3. **Ausência de `fonte` interna em 4 arquivos da FBDS:** `fbds_app.geojson`, `fbds_rios_duplos.geojson`, `fbds_massas_dagua.geojson` e `fbds_nascentes.geojson` não possuem propriedade `fonte`.
4. **Lacuna total nos temas prioritários:** Nenhuma camada cadastral real (`lotes`, `quadras`, `edificações`, `endereços CNEFE`, `logradouros oficiais`, `PGV`), nenhuma camada de `Plano Diretor / Zoneamento / Parâmetros urbanísticos`, e nenhum dado numérico populacional/domiciliar nos setores censitários do IBGE 2022.
