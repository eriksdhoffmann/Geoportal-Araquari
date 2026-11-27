/**
 * Geoportal Araquari — Página de Downloads (Padrão Institucional Geoportal Florianópolis)
 */
(() => {
  const { BASEMAPS, LAYER_GROUPS, ATENDE_MAPA_PDF } = window.GeoCatalog;
  const Meta = window.GeoMetadata;

  const esc = (s) =>
    String(s ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const norm = (s) =>
    String(s || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

  const GROUP_PREFIX = {
    territorio_censo: 'Cadastro e Limites',
    planejamento_urbano: 'Plano Diretor e Urbanismo',
    meio_ambiente_fbds: 'Meio Ambiente',
    licenciamento_ima: 'Licenciamento Ambiental',
    hidrografia_aguas: 'Hidrografia',
    defesa_civil_riscos: 'Defesa Civil',
    geologia_relevo_solos: 'Geologia e Relevo',
    viario_mobilidade: 'Sistema Viário e Mobilidade',
    equipamentos_servicos: 'Saúde, Educação e Lazer',
    infraestrutura_energia_redes: 'Energia, Dutos e Redes',
    socioeconomico_patrimonio: 'Censo 2022 e Patrimônio',
    __basemaps__: 'Ortoimagens e Mapas Base',
    __docs__: 'Documentos e Legislação',
  };

  const SECTIONS = [
    {
      id: 'ALL_SIG',
      navLabel: 'Camadas em SIG do mapa',
      title: 'Camadas em SIG do mapa',
      subtitle: 'Acesse os arquivos vetoriais publicados no mapa interativo do GeoPortal de Araquari',
    },
    {
      id: 'territorio_censo',
      navLabel: 'Cadastro e Limites Territoriais',
      title: 'Cadastro e Estrutura Territorial',
      subtitle: 'Limite municipal IBGE, bairros, distritos, setores censitários, CNEFE 2022 e imóveis rurais SIGEF',
    },
    {
      id: 'planejamento_urbano',
      navLabel: 'Plano Diretor e Urbanismo',
      title: 'Planejamento Urbano, Plano Diretor e Indústria',
      subtitle: 'Zoneamento, macrozoneamento, perímetro urbano e sistema viário (LC nº 281/2019) e polos industriais',
    },
    {
      id: 'meio_ambiente_fbds',
      navLabel: 'Meio Ambiente e Uso do Solo',
      title: 'Meio Ambiente, Cobertura da Terra e FBDS',
      subtitle: 'Uso do solo 5 m, áreas de preservação permanente (APP), manguezais, terras indígenas e biodiversidade',
    },
    {
      id: 'licenciamento_ima',
      navLabel: 'Licenciamento Ambiental',
      title: 'Licenciamento e Fiscalização Ambiental (IMA-SC)',
      subtitle: 'Registros oficiais de licenciamento SINFAT, áreas embargadas, autos de infração e termos',
    },
    {
      id: 'hidrografia_aguas',
      navLabel: 'Hidrografia e Recursos Hídricos',
      title: 'Hidrografia e Recursos Hídricos',
      subtitle: 'Bacias hidrográficas, rios simples e duplos, nascentes (FBDS), poços SIAGAS e ilhas costeiras',
    },
    {
      id: 'defesa_civil_riscos',
      navLabel: 'Defesa Civil e Áreas de Risco',
      title: 'Defesa Civil e Riscos Hidrológicos (SGB / CPRM)',
      subtitle: 'Setores de risco alto a inundação, divisa de suscetibilidade e isolinha de planície costeira',
    },
    {
      id: 'geologia_relevo_solos',
      navLabel: 'Geologia, Solos e Relevo',
      title: 'Geologia, Geomorfologia, Solos e Altimetria',
      subtitle: 'Declividade IMA-SC/SIGSC, mapeamentos físicos oficiais do IBGE (BDIA), aquíferos e curvas de nível',
    },
    {
      id: 'viario_mobilidade',
      navLabel: 'Sistema Viário e Mobilidade',
      title: 'Sistema Viário, Rodovias, Ferrovia e Mobilidade',
      subtitle: 'Rodovias federais DNIT SNV e OAE, malha IBGE BC25-SC, ferrovia, ruas e paradas de ônibus',
    },
    {
      id: 'equipamentos_servicos',
      navLabel: 'Saúde, Educação e Lazer',
      title: 'Equipamentos Públicos, Saúde, Educação e Lazer',
      subtitle: 'Unidades de saúde oficiais (DataSUS/CNES), escolas, equipamentos públicos e espaços de lazer',
    },
    {
      id: 'infraestrutura_energia_redes',
      navLabel: 'Energia, Dutos e Redes',
      title: 'Energia, Dutos, Saneamento e Apoio Náutico',
      subtitle: 'Linhas de transmissão e concessão elétrica (ANEEL SIGEL), Oleoduto OPASC, reservatórios e trapiches',
    },
    {
      id: 'socioeconomico_patrimonio',
      navLabel: 'Censo 2022 e Patrimônio',
      title: 'Socioeconômico (Censo IBGE 2022) e Patrimônio (IPHAN)',
      subtitle: 'Densidade demográfica, saneamento domiciliar, FCU Horto Flor de Liz e sítios arqueológicos IPHAN',
    },
    {
      id: '__basemaps__',
      navLabel: 'Ortoimagens e Mapas Base',
      title: 'Ortoimagens e Modelos Digitais de Terreno',
      subtitle: 'Serviços WMS oficiais do Estado de Santa Catarina (SIGSC) e bases cartográficas de referência',
    },
    {
      id: '__docs__',
      navLabel: 'Documentos Oficiais e Leis',
      title: 'Anexos do Plano Diretor, Planos Municipais e Indicadores',
      subtitle: 'Documentos oficiais publicados pela Prefeitura de Araquari (Atende.Net) e indicadores IBGE SIDRA',
    },
  ];

  function cleanDisplayName(raw) {
    return String(raw || '')
      .replace(/\s*—\s*/g, ' - ')
      .replace(/\(\s*([^)]*?)\s*-\s*\d[\d.]*\s*\)/g, '($1)')
      .trim();
  }

  const MUNICIPAL_DOCS = [
    {
      id: 'doc_ibge_ind_json',
      name: 'Indicadores Socioeconômicos Oficiais de Araquari (IBGE SIDRA — Censo 2022, PIB 2023 e PAM 2025)',
      category: 'Documentos e Legislação',
      sourceClass: 'Oficial',
      whatIsThis: 'Série consolidada da API IBGE SIDRA para Araquari (4201307): População 2022 (45.283 hab.), PIB 2023 (R$ 9,90 bi) e Produção Agrícola Municipal 2025.',
      format: 'JSON (UTF-8)',
      localFile: 'data/ibge_indicadores_araquari.json',
      downloadLabel: 'JSON',
      orgao: 'IBGE — SIDRA API',
    },
    {
      id: 'doc_pd_parametros_json',
      name: 'Tabela de Parâmetros Urbanísticos da LC nº 281/2019 (18 Zonas — Anexo 05)',
      category: 'Documentos e Legislação',
      sourceClass: 'Oficial',
      whatIsThis: 'Parâmetros urbanísticos estruturados (TO, CAL, gabarito, lote mínimo, testada, recuo e usos admitidos) extraídos do Anexo 05 da LC nº 281/2019.',
      format: 'JSON (UTF-8)',
      localFile: 'data/plano_diretor_parametros_lc281.json',
      downloadLabel: 'JSON',
      orgao: 'Prefeitura de Araquari (LC nº 281/2019)',
    },
    {
      id: 'doc_mapa_territorial',
      name: 'Mapa Territorial Oficial de Araquari (Prefeitura / Atende.Net)',
      category: 'Documentos e Legislação',
      sourceClass: 'Oficial',
      whatIsThis: 'Mapa territorial institucional oficial publicado pela Prefeitura Municipal de Araquari em PDF.',
      format: 'PDF Oficial',
      externalUrl: ATENDE_MAPA_PDF,
      downloadLabel: 'PDF',
      orgao: 'Prefeitura Municipal de Araquari',
    },
    {
      id: 'doc_pd_anexo02',
      name: 'Plano Diretor LC nº 281/2019 — Anexo 02: Mapa de Macrozoneamento',
      category: 'Documentos e Legislação',
      sourceClass: 'Oficial',
      whatIsThis: 'Prancha oficial em PDF do Macrozoneamento Municipal da Lei Complementar nº 281/2019.',
      format: 'PDF Oficial',
      externalUrl: 'https://araquari.atende.net/atende.php?rot=1&aca=119&ajax=t&processo=viewFile&ajaxPrevent=1716224735011&file=A8C723A94D654E4B45E5E7C31B8E076253A0E20B&sistema=WPO&classe=UploadMidia',
      downloadLabel: 'PDF',
      orgao: 'Prefeitura Municipal de Araquari / SEPLAN',
    },
    {
      id: 'doc_pd_anexo03',
      name: 'Plano Diretor LC nº 281/2019 — Anexo 03: Perímetro Urbano',
      category: 'Documentos e Legislação',
      sourceClass: 'Oficial',
      whatIsThis: 'Prancha oficial em PDF do Perímetro Urbano Legal da Lei Complementar nº 281/2019.',
      format: 'PDF Oficial',
      externalUrl: 'https://araquari.atende.net/atende.php?rot=1&aca=119&ajax=t&processo=viewFile&ajaxPrevent=1716224735011&file=5E7A8D47DF7D7AF52AA0F1035AE04B2C2029F45B&sistema=WPO&classe=UploadMidia',
      downloadLabel: 'PDF',
      orgao: 'Prefeitura Municipal de Araquari / SEPLAN',
    },
    {
      id: 'doc_pd_anexo05',
      name: 'Plano Diretor LC nº 281/2019 — Anexo 05: Parâmetros Urbanísticos',
      category: 'Documentos e Legislação',
      sourceClass: 'Oficial',
      whatIsThis: 'Tabela legal oficial de índices construtivos e uso do solo por zona (LC nº 281/2019).',
      format: 'PDF Oficial',
      externalUrl: 'https://araquari.atende.net/atende.php?rot=1&aca=119&ajax=t&processo=viewFile&ajaxPrevent=1716224735011&file=3CE2D86701A64E8B63E5F63218B3A0E4627396D6&sistema=WPO&classe=UploadMidia',
      downloadLabel: 'PDF',
      orgao: 'Prefeitura Municipal de Araquari / SEPLAN',
    },
    {
      id: 'doc_pd_anexo09',
      name: 'Plano Diretor LC nº 281/2019 — Anexo 09: Mapa de Zoneamento Urbano e Rural',
      category: 'Documentos e Legislação',
      sourceClass: 'Oficial',
      whatIsThis: 'Prancha oficial em PDF do Zoneamento Urbano e Rural da Lei Complementar nº 281/2019.',
      format: 'PDF Oficial',
      externalUrl: 'https://araquari.atende.net/atende.php?rot=1&aca=119&ajax=t&processo=viewFile&ajaxPrevent=1716224735011&file=AC5948B73F81E3CD28D49E3208E4B7E7E2F49873&sistema=WPO&classe=UploadMidia',
      downloadLabel: 'PDF',
      orgao: 'Prefeitura Municipal de Araquari / SEPLAN',
    },
    {
      id: 'doc_pd_anexo12',
      name: 'Plano Diretor LC nº 281/2019 — Anexo 12: Hierarquia do Sistema Viário',
      category: 'Documentos e Legislação',
      sourceClass: 'Oficial',
      whatIsThis: 'Prancha oficial em PDF da Hierarquia do Sistema Viário da Lei Complementar nº 281/2019.',
      format: 'PDF Oficial',
      externalUrl: 'https://araquari.atende.net/atende.php?rot=1&aca=119&ajax=t&processo=viewFile&ajaxPrevent=1716224735011&file=3B92A99D7A6E299E8AA03DC48BF23A3B89A2A02B&sistema=WPO&classe=UploadMidia',
      downloadLabel: 'PDF',
      orgao: 'Prefeitura Municipal de Araquari / SEPLAN',
    },
    {
      id: 'doc_planmob_pdf',
      name: 'PlanMob — Plano de Mobilidade Urbana de Araquari',
      category: 'Documentos e Legislação',
      sourceClass: 'Oficial',
      whatIsThis: 'Documento técnico oficial do Plano Municipal de Mobilidade Urbana de Araquari.',
      format: 'PDF Oficial',
      externalUrl: 'https://araquari.atende.net/atende.php?rot=1&aca=119&ajax=t&processo=viewFile&ajaxPrevent=1716224735011&file=0DF7F2690D47992BDC3D4572AAFA8A0043D92767&sistema=WPO&classe=UploadMidia',
      downloadLabel: 'PDF',
      orgao: 'Prefeitura Municipal de Araquari',
    },
    {
      id: 'doc_sicar_car',
      name: 'SICAR / CAR — Consulta Pública de Imóveis Rurais (SFB / MMA)',
      category: 'Documentos e Legislação',
      sourceClass: 'Oficial',
      whatIsThis: 'Portal nacional oficial do Cadastro Ambiental Rural para consulta pública de imóveis em Araquari (SC).',
      format: 'Portal Oficial',
      externalUrl: 'https://consultapublica.car.gov.br/publico/municipios/downloads?sigla=SC',
      downloadLabel: 'ACESSAR',
      orgao: 'Serviço Florestal Brasileiro / MMA',
    },
  ];

  const ALL_ITEMS = [];

  for (const g of LAYER_GROUPS) {
    const prefix = GROUP_PREFIX[g.id] || g.name;
    for (const l of g.layers) {
      const m = Meta.getEntry(l.id, { ...l, groupName: g.name });
      const cleanName = cleanDisplayName(l.name);
      ALL_ITEMS.push({
        kind: 'layer',
        id: l.id,
        groupId: g.id,
        prefix,
        displayLine: `- ${prefix} - ${cleanName}`,
        cleanName,
        cfg: l,
        metaEntry: m,
        redistributable: m.redistributable !== false && Boolean(l.localFile) && l.type !== 'wms',
        searchHaystack: norm(`${prefix} ${cleanName} ${l.name} ${g.name} ${m.whatIsThis} ${m.metadata.orgao_responsavel}`),
      });
    }
  }

  for (const bm of BASEMAPS) {
    const m = Meta.getEntry(bm.id, { ...bm, groupName: 'Ortoimagens e Mapas Base' });
    const cleanName = cleanDisplayName(bm.name);
    ALL_ITEMS.push({
      kind: 'basemap',
      id: bm.id,
      groupId: '__basemaps__',
      prefix: GROUP_PREFIX.__basemaps__,
      displayLine: `- Ortoimagens e Mapas Base - ${cleanName}`,
      cleanName,
      cfg: bm,
      metaEntry: m,
      redistributable: false,
      searchHaystack: norm(`ortoimagens mapas base ${cleanName} ${bm.category || ''} ${m.metadata.orgao_responsavel}`),
    });
  }

  for (const d of MUNICIPAL_DOCS) {
    ALL_ITEMS.push({
      kind: 'doc',
      id: d.id,
      groupId: '__docs__',
      prefix: GROUP_PREFIX.__docs__,
      displayLine: `- Documentos e Legislação - ${d.name}`,
      cleanName: d.name,
      cfg: d,
      metaEntry: Meta.makeMeta({
        sourceClass: d.sourceClass,
        whatIsThis: d.whatIsThis,
        nome_camada: d.name,
        categoria: d.category,
        orgao_responsavel: d.orgao,
        instituicao_fornecedora: d.orgao,
        url_fonte_original: d.externalUrl || d.localFile,
        url_download_ou_servico: d.externalUrl || d.localFile,
        formato: d.format,
        tipo_geometria: 'Documento / Tabela Oficial',
        status_validacao: 'PUBLICADO',
      }),
      redistributable: Boolean(d.localFile),
      searchHaystack: norm(`documentos legislacao plano diretor ${d.name} ${d.whatIsThis} ${d.orgao}`),
    });
  }

  let selectedSectionId = 'ALL_SIG';
  let queryText = '';

  const searchInput = document.getElementById('dlSearchInput');
  const clearBtn = document.getElementById('dlSearchClear');
  const urlQ = new URLSearchParams(window.location.search).get('q');
  if (urlQ && searchInput) {
    queryText = urlQ;
    searchInput.value = urlQ;
  }

  function getFilteredItems() {
    const q = norm(queryText.trim());
    return ALL_ITEMS.filter((it) => {
      if (selectedSectionId === 'ALL_SIG') {
        if (!q && it.kind !== 'layer') return false;
      } else if (it.groupId !== selectedSectionId) {
        return false;
      }
      if (q && !it.searchHaystack.includes(q)) return false;
      return true;
    });
  }

  function renderSidebar() {
    const navEl = document.getElementById('dlCategoryList');
    if (!navEl) return;
    navEl.innerHTML = SECTIONS.map(
      (s) => `
      <button type="button" class="dl-nav-item ${selectedSectionId === s.id ? 'active' : ''}" data-sec-id="${esc(s.id)}">
        ${esc(s.navLabel)}
      </button>`
    ).join('');
  }

  function renderHeader() {
    const sec = SECTIONS.find((s) => s.id === selectedSectionId) || SECTIONS[0];
    const titleEl = document.getElementById('dlSectionTitle');
    const subEl = document.getElementById('dlSectionSubtitle');
    if (titleEl) titleEl.textContent = sec.title;
    if (subEl) subEl.textContent = sec.subtitle;
  }

  function renderResults() {
    const items = getFilteredItems();
    const box = document.getElementById('dlResults');
    const summary = document.getElementById('dlResultSummary');
    if (clearBtn) clearBtn.classList.toggle('visible', Boolean(queryText.trim()));
    if (summary) summary.textContent = `${items.length} ${items.length === 1 ? 'item' : 'itens'}`;
    if (!box) return;

    if (!items.length) {
      box.innerHTML = `<div class="dl-empty">Nenhum item encontrado para o filtro informado.</div>`;
      return;
    }

    box.innerHTML = items
      .map((it) => {
        const btns = [];
        if (it.redistributable && it.cfg.localFile) {
          const fmtLabel = it.kind === 'doc' ? (it.cfg.downloadLabel || 'JSON') : 'GEOJSON';
          btns.push(`<a class="dl-act-btn" href="${esc(it.cfg.localFile)}" download>${esc(fmtLabel)}</a>`);
        }
        if (it.kind === 'layer') {
          btns.push(`<a class="dl-act-btn" href="index.html?layer=${encodeURIComponent(it.id)}" data-open-map-layer="${esc(it.id)}">MAPA</a>`);
        } else if (it.kind === 'basemap') {
          btns.push(`<a class="dl-act-btn" href="index.html?basemap=${encodeURIComponent(it.id)}" data-open-map-basemap="${esc(it.id)}">MAPA</a>`);
        } else if (it.cfg.externalUrl) {
          btns.push(`<a class="dl-act-btn" href="${esc(it.cfg.externalUrl)}" target="_blank" rel="noopener">${esc(it.cfg.downloadLabel || 'ACESSAR')}</a>`);
        }
        btns.push(`<button type="button" class="dl-act-btn" data-dl-meta="${esc(it.id)}">METADADOS</button>`);

        return `
          <div class="dl-row">
            <div class="dl-row-name">${esc(it.displayLine)}</div>
            <div class="dl-action-group">
              ${btns.join('')}
            </div>
          </div>`;
      })
      .join('');
  }

  function extractCentroidCoords(geom) {
    if (!geom) return ['', ''];
    if (geom.type === 'Point') return [geom.coordinates[0], geom.coordinates[1]];
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const walk = (c) => {
      if (!Array.isArray(c)) return;
      if (typeof c[0] === 'number') {
        if (c[0] < minX) minX = c[0];
        if (c[0] > maxX) maxX = c[0];
        if (c[1] < minY) minY = c[1];
        if (c[1] > maxY) maxY = c[1];
      } else c.forEach(walk);
    };
    walk(geom.coordinates);
    if (!Number.isFinite(minX)) return ['', ''];
    return [((minX + maxX) / 2).toFixed(6), ((minY + maxY) / 2).toFixed(6)];
  }

  async function downloadCsvForLayer(layerId) {
    const it = ALL_ITEMS.find((x) => x.id === layerId);
    if (!it || !it.redistributable || !it.cfg.localFile) return;

    let gj = null;
    if (it.cfg.bundleKey && window.GEOARAQUARI_BUNDLE?.[it.cfg.bundleKey]) {
      gj = window.GEOARAQUARI_BUNDLE[it.cfg.bundleKey];
    } else if (it.cfg.isLocalData && window.ARAQUARI_LIMITE_GEOJSON) {
      gj = window.ARAQUARI_LIMITE_GEOJSON;
    } else {
      try {
        const r = await fetch(it.cfg.localFile);
        if (r.ok) gj = await r.json();
      } catch {
        // ignore
      }
    }
    if (!gj?.features?.length) {
      alert('Não foi possível carregar os registros desta camada para exportar em CSV.');
      return;
    }

    const keys = [];
    const seen = new Set();
    for (const f of gj.features.slice(0, 50)) {
      for (const k of Object.keys(f.properties || {})) {
        if (!seen.has(k)) {
          seen.add(k);
          keys.push(k);
        }
      }
    }
    const headers = [...keys, 'longitude_centro', 'latitude_centro'];
    const csvCell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const rows = [headers.map(csvCell).join(';')];
    for (const f of gj.features) {
      const props = f.properties || {};
      const [lon, lat] = extractCentroidCoords(f.geometry);
      const vals = keys.map((k) => csvCell(props[k]));
      vals.push(csvCell(lon), csvCell(lat));
      rows.push(vals.join(';'));
    }
    const blob = new Blob(['\ufeff' + rows.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `araquari_${layerId}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function dispatchReturnToMap(e, opts) {
    if (typeof window.__geoHandleReturnToMapClick === 'function') {
      window.__geoHandleReturnToMapClick(e, opts);
    }
  }

  function openDlMetadataModal(itemId) {
    const it = ALL_ITEMS.find((x) => x.id === itemId);
    if (!it) return;
    const meta = it.metaEntry.metadata;
    document.getElementById('dlModalTitle').textContent = it.cleanName;

    const rowsHtml = Meta.FIELD_LABELS.map(([k, lbl]) => {
      const val = meta[k] || 'Não informado pela fonte';
      const isUrl = typeof val === 'string' && /^https?:\/\//i.test(val);
      return `<tr><th>${esc(lbl)}</th><td>${isUrl ? `<a href="${esc(val)}" target="_blank" rel="noopener" style="color:#1d8ac7;word-break:break-all">${esc(val)}</a>` : esc(val)}</td></tr>`;
    }).join('');

    const actionBtns = [];
    if (it.redistributable && it.cfg.localFile) {
      actionBtns.push(`<a class="dl-meta-btn primary" href="${esc(it.cfg.localFile)}" download>Baixar arquivo (${esc(it.kind === 'doc' ? (it.cfg.downloadLabel || 'JSON') : 'GeoJSON')})</a>`);
      if (it.kind === 'layer') {
        actionBtns.push(`<button type="button" class="dl-meta-btn" data-modal-csv="${esc(it.id)}">Exportar tabela (CSV)</button>`);
      }
    }
    if (it.kind === 'layer') {
      actionBtns.push(`<a class="dl-meta-btn" href="index.html?layer=${encodeURIComponent(it.id)}" data-open-map-layer="${esc(it.id)}">Visualizar no mapa</a>`);
    } else if (it.kind === 'basemap') {
      actionBtns.push(`<a class="dl-meta-btn" href="index.html?basemap=${encodeURIComponent(it.id)}" data-open-map-basemap="${esc(it.id)}">Visualizar no mapa</a>`);
    } else if (it.cfg.externalUrl) {
      actionBtns.push(`<a class="dl-meta-btn primary" href="${esc(it.cfg.externalUrl)}" target="_blank" rel="noopener">Acessar fonte oficial</a>`);
    }

    const bodyEl = document.getElementById('dlModalBody');
    bodyEl.innerHTML = `
      <div class="dl-meta-actions">${actionBtns.join('')}</div>
      <table class="gp-meta-table">${rowsHtml}</table>
    `;
    bodyEl.querySelector('[data-modal-csv]')?.addEventListener('click', (e) => {
      downloadCsvForLayer(e.currentTarget.dataset.modalCsv);
    });
    bodyEl.querySelector('[data-open-map-layer]')?.addEventListener('click', (e) => {
      dispatchReturnToMap(e, { layerId: e.currentTarget.dataset.openMapLayer });
    });
    bodyEl.querySelector('[data-open-map-basemap]')?.addEventListener('click', (e) => {
      dispatchReturnToMap(e, { basemapId: e.currentTarget.dataset.openMapBasemap });
    });
    document.getElementById('dlModalBackdrop').classList.add('open');
  }

  searchInput?.addEventListener('input', () => {
    queryText = searchInput.value;
    renderResults();
  });

  clearBtn?.addEventListener('click', () => {
    if (!searchInput) return;
    searchInput.value = '';
    queryText = '';
    renderResults();
    searchInput.focus();
  });

  document.getElementById('dlCategoryList')?.addEventListener('click', (e) => {
    const b = e.target.closest('[data-sec-id]');
    if (!b) return;
    selectedSectionId = b.dataset.secId;
    renderSidebar();
    renderHeader();
    renderResults();
  });

  document.getElementById('dlResults')?.addEventListener('click', (e) => {
    const mapLayerLink = e.target.closest('[data-open-map-layer]');
    if (mapLayerLink) {
      dispatchReturnToMap(e, { layerId: mapLayerLink.dataset.openMapLayer });
      return;
    }
    const mapBmLink = e.target.closest('[data-open-map-basemap]');
    if (mapBmLink) {
      dispatchReturnToMap(e, { basemapId: mapBmLink.dataset.openMapBasemap });
      return;
    }
    const mb = e.target.closest('[data-dl-meta]');
    if (mb) {
      openDlMetadataModal(mb.dataset.dlMeta);
    }
  });

  document.getElementById('dlModalClose')?.addEventListener('click', () => {
    document.getElementById('dlModalBackdrop')?.classList.remove('open');
  });

  document.getElementById('dlModalBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'dlModalBackdrop') e.target.classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('dlModalBackdrop')?.classList.remove('open');
    }
  });

  renderSidebar();
  renderHeader();
  renderResults();
})();
