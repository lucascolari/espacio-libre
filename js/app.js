/* =========================================================
   Espacio Libre — App (layout, carrito y páginas)
   ========================================================= */
(function () {
  "use strict";

  /* ---------------- Íconos (SVG inline) ---------------- */
  const ICON = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13l-7 7-9-9V4h7l9 9z"/><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-5A8 8 0 1 1 21 12z"/></svg>',
    cartMini: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>',
    swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13l-3-3M20 16H7l3 3"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l4 4 10-10"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 0 16 8 8 0 0 1-4.1-1.1l-.3-.2-2.8.9.9-2.7-.2-.3A8 8 0 0 1 12 4zm4.5 10.3c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3c-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 1.6.6 2.2.7 2.9.6.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.5-.3z"/></svg>'
  };

  const LOGO = `
    <svg class="logo-mark" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="21" fill="var(--violet)"/>
      <circle class="head" cx="27" cy="12" r="3" fill="#fff"/>
      <g fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 33l7-6 4 3"/>
        <path d="M18 27l3-6 6 2"/>
        <path d="M21 21l5 4 5-2"/>
        <path d="M27 25l-2 8"/>
      </g>
    </svg>`;

  const FOOTER_LOGO = `
    <svg class="logo-mark footer-logo-mark" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r="21"/>
      <circle class="head" cx="27" cy="12" r="3"/>
      <g fill="none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 33l7-6 4 3"/><path d="M18 27l3-6 6 2"/>
        <path d="M21 21l5 4 5-2"/><path d="M27 25l-2 8"/>
      </g>
    </svg>`;

  /* ---------------- Carrito (localStorage) ---------------- */
  const CART_KEY = "el_cart_v1";
  const Cart = {
    read() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; } },
    write(items) { try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch (e) {} updateBadge(); },
    add(id, size, color, qty) {
      const items = Cart.read();
      const found = items.find(i => i.id === id && i.size === size && i.color === color);
      if (found) found.qty += qty; else items.push({ id, size, color, qty });
      Cart.write(items);
    },
    setQty(index, qty) { const items = Cart.read(); if (items[index]) { items[index].qty = Math.max(1, qty); Cart.write(items); } },
    remove(index) { const items = Cart.read(); items.splice(index, 1); Cart.write(items); },
    count() { return Cart.read().reduce((n, i) => n + i.qty, 0); },
    total() { return Cart.read().reduce((s, i) => { const p = getProduct(i.id); return s + (p ? p.price * i.qty : 0); }, 0); }
  };

  function updateBadge() {
    document.querySelectorAll(".cart-count").forEach(el => {
      const n = Cart.count();
      el.textContent = n;
      el.style.display = n > 0 ? "flex" : "flex"; // siempre visible (como el boceto: "0")
    });
  }

  /* ---------------- Header / Footer ---------------- */
  function buildHeader() {
    const page = document.body.dataset.page;
    const cat = document.body.dataset.cat;
    const nav = [
      { label: "Tienda", href: "tienda.html", match: p => p === "tienda" && !cat },
      { label: "Conjuntos", href: "tienda.html?cat=conjuntos", match: () => cat === "conjuntos" },
      { label: "Calzas", href: "tienda.html?cat=calzas", match: () => cat === "calzas" },
      { label: "Tops", href: "tienda.html?cat=tops", match: () => cat === "tops" }
    ];
    const links = nav.map(n => `<a href="${n.href}" class="${n.match(page) ? "is-active" : ""}">${n.label}</a>`).join("");

    return `
      <div class="topbar">Indumentaria deportiva femenina</div>
      <header class="site-header">
        <div class="container header-inner">
          <a class="brand" href="index.html" aria-label="Espacio Libre — inicio">
            <span class="el-mark" style="--s:46px" role="img" aria-label="Espacio Libre"></span>
            <span class="brand__text">
              <span class="brand__name">espacio libre</span>
              <span class="brand__sub">Indumentaria</span>
            </span>
          </a>
          <nav class="main-nav" id="mainNav">${links}</nav>
          <div class="header-actions">
            <button class="icon-btn search-text" id="searchToggle" aria-label="Buscar">${ICON.search}<span>Buscar</span></button>
            <a class="icon-btn cart-btn" href="carrito.html" aria-label="Carrito">${ICON.bag}<span class="cart-count">0</span></a>
            <button class="nav-toggle" id="navToggle" aria-label="Menú">${ICON.menu}</button>
          </div>
        </div>
        <div class="search-bar" id="searchBar">
          <div class="container">
            <form id="searchForm" role="search">
              <input type="search" name="q" id="searchInput" placeholder="Buscar conjuntos, calzas, tops…" autocomplete="off">
              <button class="btn btn--primary" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </header>`;
  }

  function buildFooter() {
    return `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <div class="brand">
              <span class="el-mark el-mark--badge" style="--s:46px"></span>
              <span class="brand__text"><span class="brand__name">Espacio Libre</span></span>
            </div>
            <p>Indumentaria para acompañar tu movimiento y todos tus días.</p>
          </div>
          <div class="footer-col">
            <h4>Tu compra</h4>
            <a href="envios.html">Envíos y retiros</a>
            <a href="cambios.html">Cambios y devoluciones</a>
            <a href="medios-de-pago.html">Medios de pago</a>
          </div>
          <div class="footer-col">
            <h4>Estamos cerca</h4>
            <a href="talles.html">Ayuda para elegir tu talle</a>
            <a href="contacto.html">Consultanos por WhatsApp</a>
          </div>
        </div>
        <div class="footer-bottom">
          Propuesta visual · Fotografía de ambientación de referencia · Productos y precios ilustrativos · Sin pagos reales
        </div>
      </footer>`;
  }

  /* ---------------- Tarjeta de producto ---------------- */
  function swatchDots(colors) {
    return `<span class="swatches">${colors.map(c =>
      `<span class="swatch" style="background:${c.hex}" title="${c.name}"></span>`).join("")}</span>`;
  }

  function productCard(p) {
    return `
      <article class="card" data-cat="${p.category}">
        <a class="card__media" href="producto.html?id=${p.id}">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          <span class="card__play" title="Video próximamente">${ICON.play}</span>
        </a>
        <div class="card__body">
          <span class="card__cat">${catLabel(p.category)}</span>
          <a class="card__name" href="producto.html?id=${p.id}">${p.name}</a>
          <span class="card__price">${formatPrice(p.price)}</span>
          <div class="card__foot">
            ${swatchDots(p.colors)}
            <button class="link-underline" data-size-trigger="${p.id}">Elegir talle</button>
          </div>
        </div>
      </article>`;
  }

  /* ---------------- Modal de talle ---------------- */
  function buildModal() {
    const el = document.createElement("div");
    el.className = "modal";
    el.id = "sizeModal";
    el.hidden = true;
    el.innerHTML = `
      <div class="modal__backdrop" data-close></div>
      <div class="modal__panel">
        <button class="modal__x" data-close aria-label="Cerrar">&times;</button>
        <div class="modal__img"><img id="mdImg" src="" alt=""></div>
        <div class="modal__info">
          <span class="product__cat" id="mdCat"></span>
          <h3 id="mdName"></h3>
          <span class="price" id="mdPrice"></span>
          <div class="field-label">Color</div>
          <div class="option-row" id="mdColors"></div>
          <div class="field-label">Talle <a href="talles.html" style="font-weight:400;color:var(--violet-700)">Guía de talles</a></div>
          <div class="option-row" id="mdSizes"></div>
          <button class="btn btn--primary btn--wide" id="mdAdd">Agregar al carrito</button>
          <a class="arrow-link" id="mdDetail" style="margin-top:14px" href="#">Ver detalle del producto ${ICON.arrow}</a>
        </div>
      </div>`;
    document.body.appendChild(el);
    el.addEventListener("click", e => { if (e.target.hasAttribute("data-close")) closeModal(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
    return el;
  }

  let modalState = { id: null, size: null, color: null };
  function openModal(id) {
    const p = getProduct(id); if (!p) return;
    const m = document.getElementById("sizeModal") || buildModal();
    modalState = { id, size: null, color: p.colors[0].hex };
    m.querySelector("#mdImg").src = p.img;
    m.querySelector("#mdImg").alt = p.name;
    m.querySelector("#mdCat").textContent = catLabel(p.category);
    m.querySelector("#mdName").textContent = p.name;
    m.querySelector("#mdPrice").textContent = formatPrice(p.price);
    m.querySelector("#mdDetail").href = "producto.html?id=" + p.id;
    m.querySelector("#mdColors").innerHTML = p.colors.map((c, i) =>
      `<button class="color-opt ${i === 0 ? "is-active" : ""}" style="background:${c.hex}" data-color="${c.hex}" title="${c.name}"></button>`).join("");
    m.querySelector("#mdSizes").innerHTML = window.SIZES.map(s =>
      `<button class="chip" data-size="${s}">${s}</button>`).join("");

    m.querySelector("#mdColors").onclick = e => {
      const b = e.target.closest("[data-color]"); if (!b) return;
      modalState.color = b.dataset.color;
      m.querySelectorAll("#mdColors .color-opt").forEach(x => x.classList.toggle("is-active", x === b));
    };
    m.querySelector("#mdSizes").onclick = e => {
      const b = e.target.closest("[data-size]"); if (!b) return;
      modalState.size = b.dataset.size;
      m.querySelectorAll("#mdSizes .chip").forEach(x => x.classList.toggle("is-active", x === b));
    };
    m.querySelector("#mdAdd").onclick = () => {
      if (!modalState.size) { toast("Elegí un talle para continuar"); return; }
      const col = p.colors.find(c => c.hex === modalState.color) || p.colors[0];
      Cart.add(p.id, modalState.size, col.name, 1);
      closeModal();
      toast(`${p.name} (${modalState.size}) agregado al carrito`, true);
    };
    m.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    const m = document.getElementById("sizeModal");
    if (m) m.hidden = true;
    document.body.style.overflow = "";
  }

  /* ---------------- Toast ---------------- */
  let toastTimer;
  function toast(msg, ok) {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
    t.innerHTML = (ok ? ICON.check : "") + "<span>" + msg + "</span>";
    requestAnimationFrame(() => t.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  /* ---------------- Interacciones globales ---------------- */
  function wireGlobal() {
    // abrir modal desde cualquier "Elegir talle"
    document.addEventListener("click", e => {
      const trg = e.target.closest("[data-size-trigger]");
      if (trg) { e.preventDefault(); openModal(trg.dataset.sizeTrigger); }
    });
    // buscador
    const toggle = document.getElementById("searchToggle");
    const bar = document.getElementById("searchBar");
    const input = document.getElementById("searchInput");
    if (toggle && bar) {
      toggle.addEventListener("click", () => {
        bar.classList.toggle("open");
        if (bar.classList.contains("open")) setTimeout(() => input.focus(), 80);
      });
    }
    const form = document.getElementById("searchForm");
    if (form) form.addEventListener("submit", e => {
      e.preventDefault();
      const q = input.value.trim();
      location.href = "tienda.html" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
    // menú mobile
    const nt = document.getElementById("navToggle");
    const mn = document.getElementById("mainNav");
    if (nt && mn) nt.addEventListener("click", () => mn.classList.toggle("open"));
  }

  /* ---------------- Páginas ---------------- */
  const qs = new URLSearchParams(location.search);

  function sortList(list, mode) {
    const l = list.slice();
    if (mode === "menor") l.sort((a, b) => a.price - b.price);
    else if (mode === "mayor") l.sort((a, b) => b.price - a.price);
    else if (mode === "nombre") l.sort((a, b) => a.name.localeCompare(b.name));
    return l; // "destacados" = orden original
  }

  function initHome() {
    const grid = document.getElementById("featuredGrid");
    const tabs = document.querySelectorAll("#homeTabs .tab");
    const sortSel = document.getElementById("homeSort");
    let current = "todas";

    function render() {
      let list = current === "todas"
        ? PRODUCTS.filter(p => p.featured)
        : PRODUCTS.filter(p => p.category === current);
      list = sortList(list, sortSel ? sortSel.value : "destacados");
      grid.innerHTML = list.map(productCard).join("") ||
        '<p class="grid-empty">No hay productos en esta categoría.</p>';
    }
    tabs.forEach(t => t.addEventListener("click", () => {
      tabs.forEach(x => x.classList.toggle("is-active", x === t));
      current = t.dataset.filter;
      render();
    }));
    if (sortSel) sortSel.addEventListener("change", render);
    render();
  }

  function initTienda() {
    const grid = document.getElementById("shopGrid");
    const tabs = document.querySelectorAll("#shopTabs .tab");
    const sortSel = document.getElementById("shopSort");
    const titleEl = document.getElementById("shopCount");
    let current = (qs.get("cat") || "todas").toLowerCase();
    const query = (qs.get("q") || "").toLowerCase().trim();

    if (query) {
      const qi = document.getElementById("shopQueryInfo");
      if (qi) { qi.hidden = false; qi.querySelector("b").textContent = qs.get("q"); }
    }
    tabs.forEach(t => t.classList.toggle("is-active", t.dataset.filter === current));

    function render() {
      let list = PRODUCTS.slice();
      if (current !== "todas") list = list.filter(p => p.category === current);
      if (query) list = list.filter(p =>
        (p.name + " " + catLabel(p.category) + " " + p.desc).toLowerCase().includes(query));
      list = sortList(list, sortSel ? sortSel.value : "destacados");
      grid.innerHTML = list.map(productCard).join("") ||
        '<p class="grid-empty">No encontramos prendas con ese criterio. Probá con otra categoría.</p>';
      if (titleEl) titleEl.textContent = list.length + (list.length === 1 ? " producto" : " productos");
    }
    tabs.forEach(t => t.addEventListener("click", () => {
      current = t.dataset.filter;
      tabs.forEach(x => x.classList.toggle("is-active", x === t));
      render();
      const u = new URL(location); current === "todas" ? u.searchParams.delete("cat") : u.searchParams.set("cat", current);
      history.replaceState(null, "", u);
    }));
    if (sortSel) sortSel.addEventListener("change", render);
    render();
  }

  function initProducto() {
    const root = document.getElementById("productRoot");
    const p = getProduct(qs.get("id")) || PRODUCTS[0];
    document.title = p.name + " — Espacio Libre";
    let size = null, color = p.colors[0], qty = 1;

    root.innerHTML = `
      <nav class="breadcrumb"><a href="index.html">Inicio</a> / <a href="tienda.html?cat=${p.category}">${catLabel(p.category)}</a> / ${p.name}</nav>
      <div class="product">
        <div>
          <div class="product__media"><img src="${p.img}" alt="${p.name}"></div>
        </div>
        <div class="product__info">
          <span class="product__cat">${catLabel(p.category)}</span>
          <h1>${p.name}</h1>
          <div class="product__price">${formatPrice(p.price)}</div>
          <p class="product__desc">${p.desc}</p>

          <div class="field-label">Color: <span id="colorName" style="font-weight:400;color:var(--muted)">${color.name}</span></div>
          <div class="option-row" id="pColors">
            ${p.colors.map((c, i) => `<button class="color-opt ${i === 0 ? "is-active" : ""}" style="background:${c.hex}" data-i="${i}" title="${c.name}"></button>`).join("")}
          </div>

          <div class="field-label">Talle <a href="talles.html" style="font-weight:400;color:var(--violet-700)">Guía de talles</a></div>
          <div class="option-row" id="pSizes">
            ${window.SIZES.map(s => `<button class="chip" data-size="${s}">${s}</button>`).join("")}
          </div>

          <div class="product__actions">
            <div class="qty-stepper" id="pQty">
              <button data-step="-1" aria-label="Restar">−</button><span id="qtyVal">1</span><button data-step="1" aria-label="Sumar">+</button>
            </div>
            <button class="btn btn--primary" id="pAdd">Agregar al carrito</button>
          </div>

          <ul class="product__meta">
            ${p.details.map(d => `<li>${ICON.check}${d}</li>`).join("")}
            <li>${ICON.truck}${window.SITE.shippingNote}</li>
          </ul>
        </div>
      </div>`;

    root.querySelector("#pColors").addEventListener("click", e => {
      const b = e.target.closest("[data-i]"); if (!b) return;
      color = p.colors[+b.dataset.i];
      root.querySelector("#colorName").textContent = color.name;
      root.querySelectorAll("#pColors .color-opt").forEach(x => x.classList.toggle("is-active", x === b));
    });
    root.querySelector("#pSizes").addEventListener("click", e => {
      const b = e.target.closest("[data-size]"); if (!b) return;
      size = b.dataset.size;
      root.querySelectorAll("#pSizes .chip").forEach(x => x.classList.toggle("is-active", x === b));
    });
    root.querySelector("#pQty").addEventListener("click", e => {
      const b = e.target.closest("[data-step]"); if (!b) return;
      qty = Math.max(1, qty + (+b.dataset.step));
      root.querySelector("#qtyVal").textContent = qty;
    });
    root.querySelector("#pAdd").addEventListener("click", () => {
      if (!size) { toast("Elegí un talle para continuar"); return; }
      Cart.add(p.id, size, color.name, qty);
      toast(`${p.name} (${size}) agregado al carrito`, true);
    });

    // relacionados
    const rel = document.getElementById("relatedGrid");
    if (rel) {
      const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id)
        .concat(PRODUCTS.filter(x => x.category !== p.category))
        .slice(0, 4);
      rel.innerHTML = related.map(productCard).join("");
    }
  }

  function initCarrito() {
    const root = document.getElementById("cartRoot");
    function render() {
      const items = Cart.read();
      if (!items.length) {
        root.innerHTML = `
          <div class="cart-empty">
            ${ICON.cartMini.replace('width="1.7"', 'width="1.4"')}
            <h2 style="font-weight:500;margin:10px 0 8px">Tu carrito está vacío</h2>
            <p style="color:var(--muted);margin-bottom:22px">Sumá tus prendas favoritas y volvé cuando quieras.</p>
            <a class="btn btn--primary" href="tienda.html">Ir a la tienda ${ICON.arrow}</a>
          </div>`;
        return;
      }
      const rows = items.map((i, idx) => {
        const p = getProduct(i.id); if (!p) return "";
        return `
          <div class="cart-item">
            <a class="cart-item__img" href="producto.html?id=${p.id}"><img src="${p.img}" alt="${p.name}"></a>
            <div class="cart-item__info">
              <a class="card__name" href="producto.html?id=${p.id}">${p.name}</a>
              <span class="meta">${catLabel(p.category)} · Talle ${i.size} · ${i.color}</span>
              <button class="cart-item__remove" data-remove="${idx}">Quitar</button>
            </div>
            <div class="cart-item__right">
              <span class="cart-item__price">${formatPrice(p.price * i.qty)}</span>
              <div class="qty-stepper qty-stepper--sm" data-idx="${idx}">
                <button data-step="-1" aria-label="Restar">−</button><span>${i.qty}</span><button data-step="1" aria-label="Sumar">+</button>
              </div>
            </div>
          </div>`;
      }).join("");

      const total = Cart.total();
      const freeLeft = window.SITE.freeShipFrom - total;
      root.innerHTML = `
        <div class="cart-layout">
          <div>
            <h1 style="font-weight:500;font-size:1.8rem;margin-bottom:6px">Tu carrito</h1>
            <p style="color:var(--muted);margin-bottom:10px">${Cart.count()} ${Cart.count() === 1 ? "prenda" : "prendas"} seleccionadas</p>
            ${rows}
            <a class="arrow-link" href="tienda.html" style="margin-top:22px;display:inline-flex">${ICON.arrow} Seguir comprando</a>
          </div>
          <aside class="summary">
            <h3>Resumen</h3>
            <div class="summary__row"><span>Subtotal</span><span>${formatPrice(total)}</span></div>
            <div class="summary__row"><span>Envío</span><span>${freeLeft <= 0 ? "Sin cargo" : "A coordinar"}</span></div>
            <div class="summary__row summary__row--total"><span>Total</span><span>${formatPrice(total)}</span></div>
            ${freeLeft > 0 ? `<p class="summary__note">Te faltan ${formatPrice(freeLeft)} para acceder a envío sin cargo.</p>` : `<p class="summary__note">¡Tu compra tiene envío sin cargo! 🎉</p>`}
            <button class="btn btn--primary btn--wide" id="checkout" style="margin-top:18px">${ICON.wa} Finalizar por WhatsApp</button>
            <p class="summary__note">Demostración: la compra se coordina por WhatsApp. Sin pagos reales en este sitio.</p>
          </aside>
        </div>`;

      root.querySelectorAll("[data-remove]").forEach(b =>
        b.addEventListener("click", () => { Cart.remove(+b.dataset.remove); render(); }));
      root.querySelectorAll(".qty-stepper[data-idx]").forEach(st => {
        const idx = +st.dataset.idx;
        st.addEventListener("click", e => {
          const b = e.target.closest("[data-step]"); if (!b) return;
          const items = Cart.read();
          Cart.setQty(idx, items[idx].qty + (+b.dataset.step));
          render();
        });
      });
      const co = root.querySelector("#checkout");
      if (co) co.addEventListener("click", () => {
        const items = Cart.read();
        let msg = "Hola Espacio Libre! Quiero coordinar esta compra:%0A";
        items.forEach(i => { const p = getProduct(i.id); msg += `%0A• ${p.name} — Talle ${i.size} — ${i.color} — x${i.qty}`; });
        msg += `%0A%0ATotal aprox: ${formatPrice(Cart.total())}`;
        window.open(`https://wa.me/${window.SITE.whatsapp}?text=${msg}`, "_blank");
      });
    }
    render();
  }

  /* ---------------- Boot ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    const h = document.getElementById("site-header");
    const f = document.getElementById("site-footer");
    if (h) h.innerHTML = buildHeader();
    if (f) f.innerHTML = buildFooter();
    const fav = document.querySelector('link[rel="icon"]');
    if (fav) fav.href = "img/logo.png";
    updateBadge();
    wireGlobal();

    // enlaces de WhatsApp genéricos
    document.querySelectorAll("[data-wa]").forEach(a => {
      const txt = a.dataset.wa || window.SITE.whatsappText;
      a.href = `https://wa.me/${window.SITE.whatsapp}?text=${encodeURIComponent(txt)}`;
      a.target = "_blank";
    });

    switch (document.body.dataset.page) {
      case "home": initHome(); break;
      case "tienda": initTienda(); break;
      case "producto": initProducto(); break;
      case "carrito": initCarrito(); break;
    }
  });
})();
