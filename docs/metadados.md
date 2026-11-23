# Esquema Padrão de Metadados — Geoportal Araquari

Toda camada incorporada ao Geoportal de Araquari deverá possuir uma **ficha de metadados completa e verificável**, permitindo ao cidadão, técnico ou pesquisador saber exatamente **quem produziu o dado, quando foi feito, como foi obtido, quais são seus limites e se pode ser baixado**.

> **Regra de transparência:** Nunca invente datas de atualização, escalas ou resoluções. Quando um atributo não for disponibilizado pela instituição de origem, preencha obrigatoriamente com **`"Não informado pela fonte"`**.

---

## 1. Classificação de Status da Pesquisa (Seção 6 do Projeto)

Cada camada ou demanda territorial pesquisada será classificada em um dos **6 status oficiais**:

1. **`DISPONÍVEL E INTEGRÁVEL`** — Fonte acessível localizada e tecnicamente viável para incorporação ao mapa.
2. **`DISPONÍVEL, MAS NÃO INTEGRADA`** — Arquivo ou serviço público localizado, porém ainda pendente de implementação/conversão no Geoportal.
3. **`EXISTENTE, MAS COM ACESSO RESTRITO`** — O dado existe na administração pública ou em base controlada, mas exige solicitação formal, convênio ou login institucional (não contornar controles de acesso).
4. **`NÃO LOCALIZADO`** — Não foi encontrada fonte pública confiável após pesquisa nos portais municipais, estaduais, federais e científicos.
5. **`NÃO APLICÁVEL`** — Tema sem correspondência com a realidade territorial de Araquari (ex.: feições exclusivas da geografia insular de outro município).
6. **`DADO SUBSTITUTO DISPONÍVEL`** — O dado oficial municipal não está disponível, sendo utilizada temporariamente uma fonte alternativa confiável (estadual, federal, científica, colaborativa ou digitalização de anexo legal), com diferença explicada ao usuário.

---

## 2. Classificação Obrigatória de Natureza da Fonte

- **`Oficial`**: Órgão público produtor/competente (Prefeitura de Araquari, IBGE, SIGSC, IMA-SC, SGB/CPRM, DNIT, SIE-SC, ANA, FUNAI, IPHAN, INCRA/SIGEF, DataSUS, INEP, etc.).
- **`Científica / Técnica`**: Base gerada por consórcios ou projetos científicos revisados (ex.: FBDS, MapBiomas, pesquisas universitárias).
- **`Colaborativa`**: Base mantida por colaboradores voluntários (ex.: OpenStreetMap).
- **`Digitalização não oficial`**: Vetorização e georreferenciamento de mapas oficiais em PDF anexos a leis municipais. Deve conter expressamente na legenda e nos metadados o aviso: **"Digitalização não oficial a partir do anexo X da Lei Y"**.

---

## 3. Campos Obrigatórios da Ficha de Metadados (21 Campos)

| # | Campo | Descrição / Regra de Preenchimento |
| :---: | :--- | :--- |
| 1 | **Nome da camada** | Título claro e fiel exibido no Geoportal (`catalog.js`). |
| 2 | **Descrição** | Explicação didática simples ("O que é isto?") para o usuário comum + objetivo técnico da camada. |
| 3 | **Categoria** | Grupo temático ao qual pertence no Geoportal. |
| 4 | **Órgão responsável** | Entidade detentora/autora intelectual do dado (ou tipo de fonte não oficial). |
| 5 | **Instituição fornecedora** | Portal ou plataforma onde o dado foi efetivamente obtido (ex.: WFS IMA-SC, GeoServer IBGE, Overpass/OSM). |
| 6 | **URL da fonte original** | Endereço institucional da página/catálogo do órgão. |
| 7 | **URL direta do download ou serviço** | Endpoint exato (WMS, WFS, ArcGIS REST, arquivo SHP/GPKG/CSV) ou `Não informado pela fonte`. |
| 8 | **Formato** | Formato na origem e no Geoportal (ex.: `Shapefile -> GeoJSON`, `WMS`, `GeoPackage -> GeoJSON`). |
| 9 | **Tipo de geometria** | `Ponto`, `Linha`, `Polígono`, `Raster` ou `Misto`. |
| 10 | **Sistema de referência de coordenadas** | SRC na origem (ex.: `SIRGAS 2000 / UTM 22S — EPSG:31982` ou `EPSG:4674`) e SRC exibido na web (`WGS 84 — EPSG:4326`). |
| 11 | **Escala cartográfica** | Ex.: `1:25.000`, `1:250.000` ou `Não informado pela fonte`. |
| 12 | **Resolução espacial** | Para rasters/ortofotos ou grades (ex.: `0,39 m`, `30 m`, ou `Não aplicável` para vetores sem resolução definida). |
| 13 | **Data de produção** | Ano/data de criação do levantamento original ou `Não informado pela fonte`. |
| 14 | **Data de atualização** | Última revisão publicada pela fonte ou `Não informado pela fonte`. |
| 15 | **Data de consulta** | Data exata em que o dado foi acessado/baixado pela equipe do Geoportal (`DD/MM/AAAA`). |
| 16 | **Abrangência territorial** | Ex.: `Município de Araquari — SC (IBGE 4201307)` ou `Região da Babitonga / Entorno`. |
| 17 | **Licença e condições de uso** | Ex.: `Dados Abertos Governamentais`, `CC BY 4.0`, `ODbL (OpenStreetMap)`, `Domínio Público`, ou `Não informado pela fonte`. |
| 18 | **Restrições de acesso** | Ex.: `Público (sem restrições)`, `Público para visualização — download não autorizado pela fonte`, ou `Dados pessoais anonimizados/omitidos (LGPD)`. |
| 19 | **Método de obtenção** | Como chegou ao portal (ex.: `Coleta via WFS oficial e recorte pelo limite IBGE 4201307`, `Vetorização sobre anexo PDF da Lei...`). |
| 20 | **Observações sobre qualidade** | Limitações reais: geometrias simplificadas, completude, sobreposição de pontos, defasagem temporal ou nulos. |
| 21 | **Status de validação** | Um dos 6 status da Seção 1 + indicação de verificação geométrica/topológica realizada. |

---

## 4. Modelo de Ficha (Template JSON para Integração Futura no Catálogo)

A partir da Fase 2, cada camada passará a carregar estruturadamente este bloco `metadata` (para exibição no Painel de Metadados e no Catálogo de Downloads):

```json
{
  "layerId": "id_da_camada",
  "sourceClass": "Oficial | Científica | Colaborativa | Digitalização não oficial",
  "whatIsThis": "Explicação simples e direta em 1 ou 2 frases para qualquer cidadão entender o que aparece no mapa.",
  "metadata": {
    "nome_camada": "",
    "descricao": "",
    "categoria": "",
    "orgao_responsavel": "",
    "instituicao_fornecedora": "",
    "url_fonte_original": "",
    "url_download_ou_servico": "Não informado pela fonte",
    "formato": "",
    "tipo_geometria": "",
    "sistema_referencia_coordenadas": "",
    "escala_cartografica": "Não informado pela fonte",
    "resolucao_espacial": "Não aplicável",
    "data_producao": "Não informado pela fonte",
    "data_atualizacao": "Não informado pela fonte",
    "data_consulta": "DD/MM/AAAA",
    "abrangencia_territorial": "Município de Araquari — SC (IBGE 4201307)",
    "licenca_uso": "Não informado pela fonte",
    "restricoes_acesso": "",
    "metodo_obtencao": "",
    "observacoes_qualidade": "",
    "status_validacao": "DISPONÍVEL E INTEGRÁVEL"
  }
}
```

> **Nota da Fase 1:** Este arquivo define o esquema e o contrato técnico dos metadados. O preenchimento individual das fichas das camadas existentes e novas ocorrerá progressivamente a partir da **Fase 2**, junto à implementação do visualizador de metadados e legendas didáticas na interface.
