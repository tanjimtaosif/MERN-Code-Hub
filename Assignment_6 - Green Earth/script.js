// =======================
// NAVIGATION TOGGLE (MOBILE)
// =======================

// Grab the nav toggle button and the mobile menu container
const btn = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

// When the toggle button is clicked, open/close the mobile menu
btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded)); // update ARIA for accessibility
    mobileMenu.classList.toggle('hidden'); // show/hide menu
});

// =======================
// ACTIVE LINK HIGHLIGHT
// =======================

// Select all nav links from desktop & mobile menus
const links = document.querySelectorAll('#navMenu a, #mobileMenu a');

// Add click event to each link
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove highlight from all links first
        links.forEach(l => l.classList.remove('text-lime-200'));
        // Highlight the clicked link
        link.classList.add('text-lime-200');
    });
});

// =======================
// API ENDPOINTS
// =======================

// Centralized API URLs for easy access
const API = {
    allPlants: 'https://openapi.programming-hero.com/api/plants', // all plants
    categories: 'https://openapi.programming-hero.com/api/categories', // categories list
    plantsByCat: id => `https://openapi.programming-hero.com/api/category/${id}`, // plants by category
    plantDetail: id => `https://openapi.programming-hero.com/api/plant/${id}` // plant detail by ID
};

// =======================
// DOM ELEMENT REFERENCES
// =======================

const categoryList = document.getElementById('categoryList'); // Sidebar category buttons
const cardsGrid = document.getElementById('cardsGrid'); // Grid to render plant cards
const gridLoader = document.getElementById('gridLoader'); // Loader animation

const cartList = document.getElementById('cartList'); // Cart items container
const cartTotal = document.getElementById('cartTotal'); // Total price display

const detailModal = document.getElementById('detailModal'); // Plant detail modal
const modalCloseBtn = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalCategory = document.getElementById('modalCategory');
const modalPrice = document.getElementById('modalPrice');
const modalImg = document.getElementById('modalImg');

let activeCategory = 'all'; // Track which category is active
let cart = []; // Simple array to store cart items

// =======================
// HELPER FUNCTIONS
// =======================

// Shortcut for querySelector
const $ = (sel, ctx = document) => ctx.querySelector(sel);

// Helper to create an element with an optional class
const create = (tag, cls = '') => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    return el;
};

// Fetch JSON from a URL with error handling
const fetchJson = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network error');
    return res.json();
};

// Normalizes API plant object so we always have consistent keys
const normalizePlant = (p) => ({
    id: p?.id || p?.plantId || p?.plant_id || p?._id || String(p?.id || ''),
    name: p?.name || p?.plant_name || p?.title || 'Unknown Plant',
    image: p?.image || p?.img || p?.thumbnail || p?.photo || '',
    category: p?.category || p?.type || p?.category_name || 'Tree',
    price: Number(p?.price ?? p?.price_bdt ?? p?.priceUSD ?? 0),
    shortDesc: p?.short_description || p?.description || '',
});

// Format price in Bangladeshi Taka
const formatBDT = (n) => `৳${Number(n || 0).toLocaleString('en-IN')}`;

// Show or hide loader while fetching data
const setLoading = (isLoading) => {
    gridLoader.classList.toggle('hidden', !isLoading);
    cardsGrid.classList.toggle('opacity-50', isLoading);
};

// Create a slug from category name (used for IDs)
function toSlug(str, i = 0) {
    return String(str ?? `cat-${i}`)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || `cat-${i}`;
}

// =======================
// LOAD CATEGORIES
// =======================

async function loadCategories() {
    try {
        const data = await fetchJson(API.categories);

        // Normalize category data from API (handles multiple formats)
        const raw = Array.isArray(data?.categories)
            ? data.categories
            : Array.isArray(data?.data)
                ? data.data
                : Array.isArray(data)
                    ? data
                    : [];

        const cats = raw.map((c, i) => {
            if (typeof c === 'string') {
                return { id: toSlug(c, i), name: c };
            }
            if (c && typeof c === 'object') {
                return {
                    id: c.id || c.category_id || c.categoryId || c.slug ||
                        toSlug(c.name || c.category || c.title || 'cat', i),
                    name: c.name || c.category || c.category_name || c.title || `Category ${i + 1}`,
                };
            }
            return null;
        }).filter(Boolean);

        if (!cats.length) throw new Error('No categories from API');

        // Clear and render category buttons
        categoryList.innerHTML = '';
        categoryList.appendChild(categoryButton({ id: 'all', name: 'All Trees' }, true));
        cats.forEach(cat => categoryList.appendChild(categoryButton(cat, false)));
    } catch (e) {
        console.error('Failed to load categories', e);
    }
}

// Creates a clickable button for each category
function categoryButton(cat, active = false) {
    const btn = create(
        'button',
        'w-full text-left px-3 py-2 rounded-md transition text-[#1f2d27] hover:bg-green-100 hover:text-[#1f2d27]'
    );
    btn.dataset.catId = cat.id;
    btn.textContent = cat.name;

    if (active) applyActive(btn);

    btn.addEventListener('click', async () => {
        // Remove active style from others, apply to this one
        [...categoryList.children].forEach(b => removeActive(b));
        applyActive(btn);

        activeCategory = cat.id;
        // Load plants based on selected category
        if (cat.id === 'all') await loadAllPlants();
        else await loadPlantsByCategory(cat.id);
    });

    return btn;
}

// Style for active category button
function applyActive(el) {
    el.classList.remove('hover:bg-green-100', 'hover:text-[#1f2d27]', 'text-[#1f2d27]');
    el.classList.add('bg-[#1e8f4b]', 'text-white', 'font-medium', 'hover:bg-[#187941]', 'hover:text-white');
}

// Remove active styles
function removeActive(el) {
    el.classList.remove('bg-[#1e8f4b]', 'text-white', 'font-medium', 'hover:bg-[#187941]', 'hover:text-white');
    el.classList.add('text-[#1f2d27]', 'hover:bg-green-100', 'hover:text-[#1f2d27]');
}

// =======================
// LOAD PLANTS
// =======================

// Load all plants (for "All Trees" view)
async function loadAllPlants() {
    try {
        setLoading(true);
        const data = await fetchJson(API.allPlants);
        const list = (data?.plants || data?.data || []).map(normalizePlant);
        renderCards(list);
    } catch (e) {
        cardsGrid.innerHTML = `<p class="text-sm text-red-600">Failed to load plants.</p>`;
        console.error(e);
    } finally {
        setLoading(false);
    }
}

// Load plants by selected category
async function loadPlantsByCategory(catId) {
    try {
        setLoading(true);
        const data = await fetchJson(API.plantsByCat(catId));
        const list = (data?.plants || data?.data || []).map(normalizePlant);
        renderCards(list);
    } catch (e) {
        cardsGrid.innerHTML = `<p class="text-sm text-red-600">Failed to load this category.</p>`;
        console.error(e);
    } finally {
        setLoading(false);
    }
}

// =======================
// RENDER PLANT CARDS
// =======================

function renderCards(plants) {
    cardsGrid.innerHTML = '';
    if (!plants?.length) {
        cardsGrid.innerHTML = `<p class="text-sm text-gray-600">No trees found.</p>`;
        return;
    }

    plants.forEach(p => {
        // Create card container
        const card = create('article', 'bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden');

        // Image wrapper
        const imgWrap = create('div', 'aspect-[4/3] bg-gray-100');
        if (p.image) {
            const img = create('img', 'w-full h-full object-cover');
            img.src = p.image;
            img.alt = p.name;
            imgWrap.appendChild(img);
        }
        card.appendChild(imgWrap);

        // Card body
        const body = create('div', 'p-4');

        // Plant name (clickable)
        const nameEl = create('h3', 'text-base font-semibold text-gray-900 hover:text-[#1e8f4b] cursor-pointer');
        nameEl.textContent = p.name;
        body.appendChild(nameEl);

        // Plant short description
        const desc = create('p', 'mt-1 text-sm text-gray-600 line-clamp-2');
        desc.textContent = p.shortDesc || '—';
        body.appendChild(desc);

        // Category tag + price
        const meta = create('div', 'mt-3 flex items-center justify-between text-sm');
        const catTag = create('span', 'px-2 py-0.5 rounded-full bg-green-50 text-[#1e8f4b] border border-green-100');
        catTag.textContent = p.category;
        const priceEl = create('span', 'font-semibold text-gray-900');
        priceEl.textContent = formatBDT(p.price);
        meta.appendChild(catTag);
        meta.appendChild(priceEl);
        body.appendChild(meta);

        // Add to Cart button
        const btn = create('button', 'mt-4 w-full rounded-full bg-[#1e8f4b] text-white py-2 text-sm font-semibold hover:bg-[#187941] transition');
        btn.textContent = 'Add to Cart';
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent triggering modal
            addToCart(p);
            alert(`${p.name} has been added to your cart!`);
        });

        body.appendChild(btn);

        card.appendChild(body);
        cardsGrid.appendChild(card);

        // Clicking image or name opens detail modal
        imgWrap.classList.add('cursor-pointer');
        imgWrap.addEventListener('click', () => openDetailModal(p));
        nameEl.addEventListener('click', () => openDetailModal(p));
    });
}

// =======================
// MODAL FUNCTIONALITY
// =======================

async function openDetailModal(plantOrId) {
    try {
        let p;
        if (typeof plantOrId === 'object') {
            p = plantOrId;
        } else {
            const data = await fetchJson(API.plantDetail(plantOrId));
            p = normalizePlant(data?.plant || data?.data || data);
        }

        // Fill modal fields
        modalTitle.textContent = p.name || 'Tree Details';
        modalDesc.textContent = p.shortDesc || '—';
        modalCategory.textContent = p.category || '—';
        modalPrice.textContent = formatBDT(p.price || 0);

        if (p.image) {
            modalImg.src = p.image;
            modalImg.alt = p.name || 'Tree preview';
        } else {
            modalImg.removeAttribute('src');
            modalImg.alt = 'No image available';
        }

        // Show modal
        detailModal.classList.remove('hidden');
    } catch (e) {
        console.error(e);
    }
}

// Close modal on button click, outside click, or ESC key
modalCloseBtn.addEventListener('click', () => detailModal.classList.add('hidden'));
detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) detailModal.classList.add('hidden');
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') detailModal.classList.add('hidden');
});

// =======================
// CART FUNCTIONALITY
// =======================

// Add plant to cart (increase qty if already there)
function addToCart(p) {
    const idx = cart.findIndex(x => x.id === p.id);
    if (idx >= 0) {
        cart[idx].qty += 1;
    } else {
        cart.push({ id: p.id, name: p.name, price: p.price || 0, qty: 1 });
    }
    renderCart();
}

// Remove one quantity from cart, delete if qty = 1
function removeFromCart(id) {
    cart = cart.reduce((acc, item) => {
        if (item.id === id) {
            if (item.qty > 1) acc.push({ ...item, qty: item.qty - 1 });
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
    renderCart();
}

// Render cart list in the sidebar
function renderCart() {
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        const li = create('li', 'flex items-center justify-between rounded-md border border-gray-100 px-3 py-2');
        const left = create('div', '');
        const n = create('p', 'text-sm font-medium text-gray-900');
        n.textContent = item.name;
        const sub = create('span', 'text-xs text-gray-500');
        sub.textContent = `${formatBDT(item.price)} × ${item.qty}`;
        left.appendChild(n);
        left.appendChild(sub);

        const rm = create('button', 'text-red-500 hover:text-red-600 text-sm font-semibold');
        rm.textContent = '✕';
        rm.title = 'Remove one';
        rm.addEventListener('click', () => removeFromCart(item.id));

        li.appendChild(left);
        li.appendChild(rm);
        cartList.appendChild(li);
    });

    // Update total price
    cartTotal.textContent = formatBDT(total);
}

// =======================
// API INITIALIZATION
// =======================

// Load categories and plants on first page load
(async function init() {
    await loadCategories();
    await loadAllPlants();
})();
