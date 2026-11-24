# Arquitetura Geoespacial e Fluxo de Atualização — Geoportal Araquari

## 1. Visão Geral da Arquitetura (100% Estática + Offline)

O **Geoportal Araquari** opera como um WebGIS cliente estático de alto desempenho (compatível com **GitHub Pages HTTPS** e abertura direta local via `file://` através de `ABRIR_GEOPORTAL_ARAQUARI.bat`), sem dependência de servidor proprietário ou banco de dados pago:

- **Motor Cartográfico:** Leaflet 1.9.4 com renderização vetorial em Canvas/SVG, suporte a projeções SIRGAS 2000 / UTM 22S (`EPSG:31982`), WGS 84 (`EPSG:4326`) e DMS (`js/coords.js`), além de serviços OGC WMS/WMTS/XYZ (`js/layer-engine.js`).
- **Camada de Dados Dual-Bundle:**
  - `data/*.geojson`: **76 arquivos GeoJSON** validados em WGS 84 (`36.439` feições, `16.56 MB`, `0` geometrias inválidas).
  - `js/limite-araquari.js` (`8.2 KB`), `js/araquari-bundle.js` (`3496.9 KB`, 62 camadas principais) e `js/araquari-bundle-extra.js` (`5715.5 KB`, 10 camadas pesadas carregadas com `defer`), permitindo funcionamento instantâneo mesmo sem servidor HTTP.
- **Governança de Metadados e Transparência:**
  - `js/metadata.js`: registro central de **21 campos obrigatórios**, classificação em 4 classes de procedência (`Oficial`, `Científica`, `Colaborativa`, `Digitalização não oficial`), textos didáticos *"O que é isto?"* e explicação por classe de legenda (`classHelp`).
- **Central de Downloads e Navegação Integrada (`downloads.html` ↔ `index.html`):**
  - Página dedicada (`downloads.html` + `js/downloads-page.js`) com busca instantânea, filtros por categoria e classe de origem, visualização dos 21 metadados e exportação em GeoJSON/CSV apenas para camadas com `redistributable: true`.
  - Ao abrir `downloads.html` a partir de `index.html`, clicar em **"Ver no Mapa ↗"** ou **"← Voltar ao Mapa Interativo"** retorna o foco diretamente para a aba original do mapa (ativando e aproximando a camada escolhida) e fecha a aba de Downloads sem abrir novas abas, com fallback automático na mesma aba quando acessada diretamente.

## 2. Fluxo de Atualização de Camadas (QGIS → GitHub Pages)

1. Editar ou substituir a camada desejada no **QGIS** (em SIRGAS 2000) e exportar como **GeoJSON (WGS 84 / EPSG:4326)** substituindo o arquivo correspondente em `data/`.
2. Executar o script de empacotamento para atualizar `js/araquari-bundle.js` / `js/araquari-bundle-extra.js` (e, se for camada nova, cadastrar em `js/catalog.js` e `js/metadata.js`).
3. Validar geometrias e sintaxe (`node --check`) e enviar para `origin/main` via `FAZER_PUSH_GITHUB.bat` (ou Git CLI). Em menos de 1 minuto o GitHub Pages publica a atualização.
