// Aura Estates - PropTech & Yield Aggregator Logic

const PROPERTIES_DATA = [
  {
    id: "prop-01",
    title: "The Glass Pavilion & Cedar Grove",
    city: "Zurich",
    district: "Zürichberg",
    country: "Switzerland",
    type: "Villa",
    price: 4850000,
    currency: "EUR",
    area_sqm: 420,
    bedrooms: 5,
    bathrooms: 4,
    net_yield: 5.4,
    monthly_rent: 21800,
    cap_rate: 5.2,
    year_built: 2022,
    badge: "Prime Investment",
    summary: "Panoramic Lake Zurich vista with triple-glazed acoustic curtain walls, private geothermal heating, and 300 sqm landscaped Zen garden.",
    accent_color: "#1E3A8A",
    tags: ["Geothermal", "Lake View", "Concierge", "Private Garage"],
    svg_theme: "villa"
  },
  {
    id: "prop-02",
    title: "Kensington Mews Residence",
    city: "London",
    district: "South Kensington",
    country: "United Kingdom",
    type: "Townhouse",
    price: 3200000,
    currency: "EUR",
    area_sqm: 260,
    bedrooms: 4,
    bathrooms: 3,
    net_yield: 6.1,
    monthly_rent: 16250,
    cap_rate: 5.9,
    year_built: 2019,
    badge: "High Rental Demand",
    summary: "Victorian brick façade restoration paired with bespoke walnut joinery, wine cellar, and private rooftop terrace.",
    accent_color: "#78350F",
    tags: ["Freehold", "Roof Garden", "Smart Home", "Wine Cellar"],
    svg_theme: "townhouse"
  },
  {
    id: "prop-03",
    title: "Minato Sky Haven Duplex",
    city: "Tokyo",
    district: "Roppongi Hills",
    country: "Japan",
    type: "Penthouse",
    price: 2750000,
    currency: "EUR",
    area_sqm: 195,
    bedrooms: 3,
    bathrooms: 2,
    net_yield: 6.8,
    monthly_rent: 15600,
    cap_rate: 6.5,
    year_built: 2023,
    badge: "High Yield",
    summary: "48th floor skyline penthouse facing Tokyo Tower. Features Hinoki cedar bathroom, smart air purification, and valet service.",
    accent_color: "#0F766E",
    tags: ["Skyline View", "Turnkey", "24/7 Security", "Gym & Spa"],
    svg_theme: "penthouse"
  },
  {
    id: "prop-04",
    title: "SoHo Cast-Iron Atelier Loft",
    city: "New York",
    district: "SoHo Historic District",
    country: "United States",
    type: "Loft",
    price: 3950000,
    currency: "EUR",
    area_sqm: 310,
    bedrooms: 3,
    bathrooms: 3,
    net_yield: 5.8,
    monthly_rent: 19100,
    cap_rate: 5.6,
    year_built: 2020,
    badge: "Architectural Icon",
    summary: "Original 14ft Corinthian columns, rift-sawn white oak flooring, direct key-locked elevator access, and museum-grade gallery lighting.",
    accent_color: "#831843",
    tags: ["Elevator", "High Ceilings", "Art Collector Ready", "Fireplace"],
    svg_theme: "loft"
  },
  {
    id: "prop-05",
    title: "Palm Jumeirah Horizon Villa",
    city: "Dubai",
    district: "Palm Fronds",
    country: "UAE",
    type: "Villa",
    price: 5400000,
    currency: "EUR",
    area_sqm: 610,
    bedrooms: 6,
    bathrooms: 7,
    net_yield: 7.6,
    monthly_rent: 34200,
    cap_rate: 7.3,
    year_built: 2024,
    badge: "Golden Visa Eligible",
    summary: "Direct private beach frontage, infinity lap pool, Carrara marble slab finishes, and zero capital gains tax environment.",
    accent_color: "#B45309",
    tags: ["Private Beach", "Infinity Pool", "0% Tax", "Smart Security"],
    svg_theme: "villa"
  },
  {
    id: "prop-06",
    title: "Haussmannian Grand Promenade",
    city: "Paris",
    district: "8ème Arrondissement",
    country: "France",
    type: "Apartment",
    price: 2980000,
    currency: "EUR",
    area_sqm: 225,
    bedrooms: 3,
    bathrooms: 2,
    net_yield: 5.2,
    monthly_rent: 12900,
    cap_rate: 4.9,
    year_built: 2021,
    badge: "Heritage Asset",
    summary: "Herringbone parquet, intricate plaster moldings, marble fireplaces in every salon, with views of Parc Monceau.",
    accent_color: "#312E81",
    tags: ["Historic", "Balcony", "Service Quarter", "Storage Vault"],
    svg_theme: "townhouse"
  }
];

function getVisualSvg(theme, title) {
  // Generates crisp architectural silhouette illustrations with refined gradients
  if (theme === 'penthouse') {
    return `
      <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#0F172A"/>
        <path d="M0 190L400 190" stroke="#334155" stroke-width="2"/>
        <rect x="50" y="60" width="110" height="130" fill="#1E293B" stroke="#475569" stroke-width="1.5"/>
        <rect x="180" y="30" width="140" height="160" fill="#1E293B" stroke="#B45309" stroke-width="2"/>
        <line x1="200" y1="50" x2="300" y2="50" stroke="#FDE68A" stroke-width="2" opacity="0.8"/>
        <line x1="200" y1="75" x2="300" y2="75" stroke="#FDE68A" stroke-width="2" opacity="0.6"/>
        <line x1="200" y1="100" x2="300" y2="100" stroke="#FDE68A" stroke-width="2" opacity="0.7"/>
        <circle cx="340" cy="50" r="16" fill="#F59E0B" opacity="0.25"/>
        <circle cx="340" cy="50" r="6" fill="#F59E0B"/>
        <text x="25" y="222" font-family="'JetBrains Mono', monospace" font-size="10" fill="#94A3B8" letter-spacing="1.5">SKYLINE ATELIER // ARCHITECTURAL DOSSIER</text>
      </svg>
    `;
  } else if (theme === 'villa') {
    return `
      <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#182234"/>
        <path d="M40 180H360" stroke="#334155" stroke-width="2"/>
        <rect x="60" y="110" width="280" height="70" fill="#0F172A" stroke="#CBD5E1" stroke-width="1.5"/>
        <rect x="110" y="70" width="180" height="40" fill="#1E293B" stroke="#B45309" stroke-width="2"/>
        <rect x="140" y="80" width="50" height="25" fill="#38BDF8" opacity="0.3"/>
        <rect x="210" y="80" width="50" height="25" fill="#38BDF8" opacity="0.3"/>
        <circle cx="90" cy="140" r="14" fill="#10B981" opacity="0.3"/>
        <path d="M60 180L140 130L220 180" stroke="#475569" stroke-width="1.5" stroke-dasharray="4 4"/>
        <text x="25" y="222" font-family="'JetBrains Mono', monospace" font-size="10" fill="#94A3B8" letter-spacing="1.5">RESIDENTIAL ESTATE // ELEVATION 01</text>
      </svg>
    `;
  } else {
    return `
      <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#1E1E24"/>
        <rect x="70" y="40" width="260" height="150" fill="#2B2D42" stroke="#B45309" stroke-width="1.5"/>
        <line x1="70" y1="90" x2="330" y2="90" stroke="#4F5D75" stroke-width="1"/>
        <line x1="70" y1="140" x2="330" y2="140" stroke="#4F5D75" stroke-width="1"/>
        <rect x="100" y="55" width="40" height="25" fill="#FBBF24" opacity="0.4"/>
        <rect x="170" y="55" width="40" height="25" fill="#FBBF24" opacity="0.7"/>
        <rect x="240" y="55" width="40" height="25" fill="#FBBF24" opacity="0.3"/>
        <rect x="100" y="105" width="40" height="25" fill="#FBBF24" opacity="0.5"/>
        <rect x="170" y="105" width="40" height="25" fill="#FBBF24" opacity="0.6"/>
        <rect x="240" y="105" width="40" height="25" fill="#FBBF24" opacity="0.2"/>
        <text x="25" y="222" font-family="'JetBrains Mono', monospace" font-size="10" fill="#94A3B8" letter-spacing="1.5">HISTORIC FACADE // STRUCTURAL PROFILE</text>
      </svg>
    `;
  }
}

function formatCurrency(val) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
}

// DOM Rendering
function renderProperties(list) {
  const grid = document.getElementById('catalog-grid');
  const countBadge = document.getElementById('results-count');
  if (countBadge) {
    countBadge.textContent = `${list.length} properties curated`;
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem; background: #fff; border-radius: 12px; border: 1px solid #E7E2D8;">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem;">No matching assets found</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Try relaxing your yield or budget filters to view available prime listings.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(item => `
    <article class="property-card" data-id="${item.id}">
      <div class="property-visual">
        ${getVisualSvg(item.svg_theme, item.title)}
        <span class="property-badge-tag">${item.badge}</span>
        <span class="property-yield-badge">Yield ${item.net_yield}%</span>
      </div>
      <div class="property-body">
        <div class="property-location">${item.district}, ${item.city}</div>
        <h3 class="property-name">${item.title}</h3>
        <p class="property-snippet">${item.summary}</p>
        
        <div class="property-specs">
          <div>
            <div class="spec-val">${item.area_sqm} m²</div>
            <div class="spec-lbl">Living Space</div>
          </div>
          <div>
            <div class="spec-val">${item.bedrooms} Bed</div>
            <div class="spec-lbl">Bedrooms</div>
          </div>
          <div>
            <div class="spec-val">${formatCurrency(item.monthly_rent)}</div>
            <div class="spec-lbl">Est. Rent / mo</div>
          </div>
        </div>

        <div class="property-footer">
          <div class="property-price">
            ${formatCurrency(item.price)}
            <br><span>Cap Rate ${item.cap_rate}%</span>
          </div>
          <button class="btn-primary view-dossier-btn" data-id="${item.id}">
            View Dossier &rarr;
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Attach Dossier Modal Listeners
  document.querySelectorAll('.view-dossier-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openModal(id);
    });
  });
}

// Filtering
function applyFilters() {
  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const city = document.getElementById('city-filter').value;
  const type = document.getElementById('type-filter').value;
  const minYield = parseFloat(document.getElementById('yield-filter').value) || 0;
  const sort = document.getElementById('sort-filter').value;

  let filtered = PROPERTIES_DATA.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search) || 
                          item.city.toLowerCase().includes(search) || 
                          item.district.toLowerCase().includes(search);
    const matchesCity = city === 'all' || item.city === city;
    const matchesType = type === 'all' || item.type === type;
    const matchesYield = item.net_yield >= minYield;
    return matchesSearch && matchesCity && matchesType && matchesYield;
  });

  if (sort === 'yield-desc') {
    filtered.sort((a, b) => b.net_yield - a.net_yield);
  } else if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'area-desc') {
    filtered.sort((a, b) => b.area_sqm - a.area_sqm);
  }

  renderProperties(filtered);
}

// Interactive Mortgage & Yield Calculator
function updateCalculator() {
  const price = parseFloat(document.getElementById('calc-price').value);
  const downPaymentPercent = parseFloat(document.getElementById('calc-downpayment').value);
  const interestRate = parseFloat(document.getElementById('calc-interest').value);
  const loanTermYears = parseInt(document.getElementById('calc-term').value);
  const monthlyRent = parseFloat(document.getElementById('calc-rent').value);

  // Update label displays
  document.getElementById('calc-price-lbl').textContent = formatCurrency(price);
  document.getElementById('calc-downpayment-lbl').textContent = `${downPaymentPercent}% (${formatCurrency(price * downPaymentPercent / 100)})`;
  document.getElementById('calc-interest-lbl').textContent = `${interestRate.toFixed(1)}%`;
  document.getElementById('calc-term-lbl').textContent = `${loanTermYears} years`;
  document.getElementById('calc-rent-lbl').textContent = formatCurrency(monthlyRent);

  // Calculation formulas
  const downPayment = price * (downPaymentPercent / 100);
  const principal = price - downPayment;
  const monthlyRate = (interestRate / 100) / 12;
  const numPayments = loanTermYears * 12;

  let monthlyMortgage = 0;
  if (monthlyRate > 0) {
    monthlyMortgage = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  } else {
    monthlyMortgage = principal / numPayments;
  }

  const annualRent = monthlyRent * 12;
  const estimatedMaintenanceAnnual = price * 0.008; // 0.8% annual maintenance & management
  const netOperatingIncome = annualRent - estimatedMaintenanceAnnual;
  const annualMortgageTotal = monthlyMortgage * 12;
  const annualCashflow = netOperatingIncome - annualMortgageTotal;
  const monthlyCashflow = annualCashflow / 12;

  const netYieldPercent = (netOperatingIncome / price) * 100;
  const cashOnCashReturn = (annualCashflow / downPayment) * 100;

  // Render outputs
  document.getElementById('res-cashflow').textContent = `${monthlyCashflow >= 0 ? '+' : ''}${formatCurrency(monthlyCashflow)} / mo`;
  document.getElementById('res-cashflow').style.color = monthlyCashflow >= 0 ? '#34D399' : '#F87171';
  document.getElementById('res-net-yield').textContent = `${netYieldPercent.toFixed(2)}%`;
  document.getElementById('res-mortgage-pmt').textContent = formatCurrency(monthlyMortgage);
  document.getElementById('res-loan-amount').textContent = formatCurrency(principal);
  document.getElementById('res-coc-return').textContent = `${cashOnCashReturn.toFixed(1)}%`;
}

// Modal handling
function openModal(id) {
  const item = PROPERTIES_DATA.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById('property-modal');
  const body = document.getElementById('modal-details-body');

  body.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-subtle);">
      <div>
        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-gold); font-weight: 700;">${item.type} // ${item.city}, ${item.country}</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; margin-top: 0.25rem;">${item.title}</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem;">${item.district} — Built ${item.year_built}</p>
      </div>
      <div style="text-align: right;">
        <div style="font-family: var(--font-mono); font-size: 1.6rem; font-weight: 700;">${formatCurrency(item.price)}</div>
        <div style="font-size: 0.82rem; color: #047857; font-weight: 600;">Net Yield: ${item.net_yield}% (Cap Rate ${item.cap_rate}%)</div>
      </div>
    </div>

    <div style="margin-bottom: 1.5rem; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1.25rem; border-radius: 8px;">
      <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; margin-bottom: 0.5rem;">Asset Synopsis</h4>
      <p style="font-size: 0.95rem; line-height: 1.6; color: #1E293B;">${item.summary}</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
      <div style="background: var(--bg-primary); padding: 1rem; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
        <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted);">Area</div>
        <div style="font-size: 1.25rem; font-weight: 700; font-family: var(--font-mono);">${item.area_sqm} m²</div>
      </div>
      <div style="background: var(--bg-primary); padding: 1rem; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
        <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted);">Layout</div>
        <div style="font-size: 1.25rem; font-weight: 700;">${item.bedrooms} Bed / ${item.bathrooms} Bath</div>
      </div>
      <div style="background: var(--bg-primary); padding: 1rem; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
        <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted);">Monthly Rent</div>
        <div style="font-size: 1.25rem; font-weight: 700; font-family: var(--font-mono);">${formatCurrency(item.monthly_rent)}</div>
      </div>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; margin-bottom: 0.75rem;">Verified Key Amenities</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${item.tags.map(t => `<span style="background: #FEF3C7; color: #92400E; padding: 0.35rem 0.75rem; border-radius: 4px; font-size: 0.8rem; font-weight: 600;">✓ ${t}</span>`).join('')}
      </div>
    </div>

    <form id="dossier-request-form" style="background: #F1F5F9; padding: 1.5rem; border-radius: 8px;">
      <h4 style="font-family: var(--font-serif); font-size: 1.1rem; margin-bottom: 0.4rem;">Request Comprehensive Due Diligence Dossier</h4>
      <p style="font-size: 0.82rem; color: #64748B; margin-bottom: 1rem;">Includes land registry title excerpts, 5-year tenancy historical yield, structural audits, and tax advisory notes.</p>
      <div style="display: flex; gap: 0.75rem;">
        <input type="email" required placeholder="investor@familyoffice.ch" style="flex: 1; padding: 0.65rem 0.9rem; border: 1px solid #CBD5E1; border-radius: 4px; font-size: 0.9rem;">
        <button type="submit" class="btn-primary">Dispatch Dossier (PDF)</button>
      </div>
      <div id="dossier-feedback" style="display: none; margin-top: 0.75rem; font-size: 0.85rem; color: #047857; font-weight: 600;">
        ✓ Request logged. Secure download link sent via encrypted transfer.
      </div>
    </form>
  `;

  modal.classList.add('active');

  const form = document.getElementById('dossier-request-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('dossier-feedback').style.display = 'block';
    });
  }
}

function closeModal() {
  const modal = document.getElementById('property-modal');
  modal.classList.remove('active');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProperties(PROPERTIES_DATA);

  // Filters
  document.getElementById('search-input').addEventListener('input', applyFilters);
  document.getElementById('city-filter').addEventListener('change', applyFilters);
  document.getElementById('type-filter').addEventListener('change', applyFilters);
  document.getElementById('yield-filter').addEventListener('change', applyFilters);
  document.getElementById('sort-filter').addEventListener('change', applyFilters);

  // Calculator
  const sliders = ['calc-price', 'calc-downpayment', 'calc-interest', 'calc-term', 'calc-rent'];
  sliders.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateCalculator);
  });
  updateCalculator();

  // Modal close
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('property-modal').addEventListener('click', (e) => {
    if (e.target.id === 'property-modal') closeModal();
  });
});
