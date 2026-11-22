# Geoportal Araquari — Base Geoespacial Integrada (SC)

Geoportal interativo do Município de **Araquari — Santa Catarina** (Código IBGE **`4201307`** — Área Oficial **`386,872 km²`**), desenvolvido no padrão visual e funcional do **Geoportal de Florianópolis**, reunindo em uma única plataforma **44 camadas geoespaciais oficiais verificadas** e **9 mapas base** (incluindo Ortoimagem Aérea Oficial SC 2012 de 39 cm e MDT/MDS via SIGSC HTTPS WMS + Satélite HD).

- **GitHub Pages (Online):** https://eriksdhoffmann.github.io/Geoportal-Araquari/
- **Execução Local (Offline/Local):** abra `index.html` no navegador ou execute `ABRIR_GEOPORTAL_ARAQUARI.bat`.

---

## Principais Funcionalidades

- **Interface padrão Geoportal de Florianópolis:** cabeçalho institucional com abas *Início* (6 conjuntos temáticos prontos), *Mapas Interativos*, *Download*, *Emissão de Documentos* e *Ajuda*.
- **Recorte pelo Limite Oficial IBGE (`4201307`):** máscara vetorial limpa recortando o mapa ao limite exato de Araquari (com opção de ativar/desativar a qualquer momento para visualizar municípios vizinhos).
- **Série Histórica, Relevo SIGSC e Cortina Comparativa (Antes × Depois):**
  - **Satélite Alta Resolução (Atual — Esri / Maxar)**
  - **Ortoimagem Aérea Oficial SC 2012 (SIGSC — 39 cm via HTTPS WMS)**
  - **Satélite Híbrido**, **Satélite Clarity HD**, **Bing Satélite Aéreo**
  - **MDT — Relevo Sombreado Oficial SC (SIGSC WMS)** e **MDS — Modelo Digital de Superfície SC (SIGSC WMS)**
  - **OpenStreetMap** e **Carto Positron (Claro)**
  - **Cortina arrastável** diretamente sobre o mapa para comparar o Satélite Atual contra a Ortofoto Oficial SC 2012 ou contra o MDT Relevo.
- **Empilhamento Determinístico e Aba "Ordem":** cada camada possui pane e renderizador Canvas exclusivo, garantindo sobreposição fiel com controle de ordem (`▲ Subir` / `▼ Descer` / `↑ Frente` / `↓ Trás`), transparência individual, legenda automática e exportação em GeoJSON.
- **Ferramentas GIS Integradas:**
  - **Busca Unificada:** pesquisa instantânea por Bairro, Localidade, Rodovia (`BR-101`, `BR-280`, `SC-415`), Rua, Escola, Unidade de Saúde, Área Industrial, Terra Indígena, Setor de Risco ou Coordenada (`SIRGAS 2000 / UTM 22S` e `WGS84`).
  - **Medição de Distância e Área:** traçado em camada SVG exclusiva no topo (`zIndex: 650`) com halo branco de alto contraste.
  - **Desenho e Anotação:** crie pontos, linhas e polígonos e exporte em GeoJSON.
  - **Raio-X Territorial do Ponto:** clique em qualquer local para consultar Bairro, Distrito, Setor Censitário 2022, Risco CPRM, Bacia Hidrográfica, Uso do Solo FBDS, APP, Geologia, Solos e coordenadas UTM 22S / WGS84 / DMS + link para Google Street View.
  - **Importação Local de SIG:** arraste arquivos **Shapefile (`.zip`)**, **GeoJSON** ou **KML** (com reprojeção automática de SIRGAS 2000 UTM 22S para WGS84).
- **100% Funcional Online e Local (`file://`):** todas as 44 camadas possuem cópia estruturada em `data/*.geojson` e bundles instantâneos (`js/araquari-bundle.js` + `js/araquari-bundle-extra.js`), eliminando falhas de CORS ou indisponibilidade de servidores externos.

---

## Fontes de Dados Integradas (9 Grupos • 44 Camadas)

1. **Território, Limites e Censo IBGE 2022:** Limite Municipal Oficial (`4201307`), 10 Bairros Oficiais (Censo 2022), 2 Distritos (Araquari e Itapocu), 116 Setores Censitários (79 urbanos e 37 rurais) e 31 Localidades.
2. **Planejamento Urbano, Perímetro e Indústria:** Perímetro / Área Urbana Consolidada (IBGE 2022), 23 Zonas Industriais / Polos Logísticos e manchas residenciais.
3. **Meio Ambiente, Cobertura da Terra e FBDS:** Uso e Cobertura da Terra em alta resolução (`SC_4201307_USO` — 1.428 polígonos), APPs (`SC_4201307_APP` — 380 polígonos), Vegetação IBGE BDIA, Regiões Fitogeográficas IMA-SC, Áreas Úmidas/Manguezais SIGSC e 3 Terras Indígenas Guarani Mbya (Piraí, Tarumã e Pindoty — FUNAI).
4. **Licenciamento e Fiscalização Ambiental (IMA-SC):** 619 processos de licenciamento (Sinfat), 258 autos de infração (GAIA) e 12 áreas de embargo ambiental.
5. **Hidrografia e Recursos Hídricos:** Rios Simples (1.802 trechos), Rios Duplos (33), Massas d’Água (50) e Nascentes (177) da FBDS; Bacias Hidrográficas Itapocu e Cubatão Norte (IMA-SC); 407 Ottobacias e 137 Ilhas (SIGSC/ANA); 25 Poços Tubulares (SIAGAS / SGB-CPRM).
6. **Defesa Civil e Riscos Hidrológicos:** 12 Setores Oficiais de Risco Alto a Inundação em Araquari (SGB/CPRM) e Isolinha Cota 5 m (Planície Costeira/Alagável).
7. **Geologia, Geomorfologia, Solos e Altimetria:** Geologia (59 unidades), Geomorfologia (23) e Pedologia/Solos (34) do IBGE BDIA 1:250k; Domínios Hidrogeológicos SGB/CPRM; Curvas de Nível (10 m / 50 m) e Cota 20 m (SRTM/DEM).
8. **Sistema Viário, Rodovias, Ferrovia e Mobilidade:** BR-101, BR-280, SC-415 (315 trechos), Sistema Viário Municipal (1.618 trechos), Malha Ferroviária (Ramal São Francisco do Sul), 36 Pontes/Viadutos, 75 Pontos de Ônibus e Ciclovias.
9. **Equipamentos Públicos, Saúde, Educação e Lazer:** 19 Unidades de Saúde Oficiais (DataSUS/CNES), 20 Escolas/CEIs/IFC Campus Araquari, 15 Equipamentos Públicos e Patrimônio, 34 Praças/Parques e 6 pontos de Saneamento/Náutica.

---

## Como Ativar o GitHub Pages

No repositório GitHub (`Settings → Pages → Build and deployment`), selecione **Source: Deploy from a branch**, escolha **`main`** e pasta **`/ (root)`**, e clique em **Save**. Em instantes o geoportal ficará disponível em:
`https://eriksdhoffmann.github.io/Geoportal-Araquari/`
