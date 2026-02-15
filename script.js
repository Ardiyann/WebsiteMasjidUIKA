// Campaign Data
const campaigns = [
    {
        id: 1,
        title: 'Bangun Rumah di Surga Untuk Orang Tua',
        category: 'wakaf',
        description: 'Wakaf atas nama orang tua sebagai amal jariyah yang pahalanya terus mengalir',
        target: 500000000,
        collected: 387500000,
        donors: 2847,
        daysLeft: 45,
        image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80'
    },
    {
        id: 2,
        title: 'Sedekah Subuh, Awal Dari Segala Kemudahan',
        category: 'masjid',
        description: 'Program sedekah rutin untuk operasional masjid dan kegiatan dakwah',
        target: 50000000,
        collected: 42300000,
        donors: 1523,
        daysLeft: 30,
        image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80'
    },
    {
        id: 3,
        title: 'Makmurkan Masjid, Bangun Peradaban',
        category: 'wakaf',
        description: 'Wakaf pembangunan untuk mewujudkan Masjid Peradaban 5.0',
        target: 1000000000,
        collected: 654200000,
        donors: 3891,
        daysLeft: 60,
        image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&q=80'
    },
    {
        id: 4,
        title: 'Pahala Berlipatganda, Bahagiakan Sesama',
        category: 'sosial',
        description: 'Paket ifthar dan sahur untuk anak yatim dan dhuafa',
        target: 75000000,
        collected: 68900000,
        donors: 2156,
        daysLeft: 15,
        image: 'https://images.unsplash.com/photo-1610737241336-371badac3b66?w=800&q=80'
    },
    {
        id: 5,
        title: 'Wakaf Pembangunan Asrama Santri Akhwat',
        category: 'pendidikan',
        description: 'Bangun tempat menuntut ilmu untuk santri putri',
        target: 300000000,
        collected: 189400000,
        donors: 1678,
        daysLeft: 40,
        image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80'
    },
    {
        id: 6,
        title: '100 Titik Sumur Bor - Amal Jariyah',
        category: 'sosial',
        description: 'Sediakan air bersih untuk santri, jamaah, dan masyarakat',
        target: 200000000,
        collected: 156700000,
        donors: 2234,
        daysLeft: 50,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
    },
    {
        id: 7,
        title: 'Masjid Tanggap Bencana',
        category: 'kemanusiaan',
        description: 'Bantuan darurat untuk saudara terdampak bencana',
        target: 100000000,
        collected: 87300000,
        donors: 1892,
        daysLeft: 20,
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80'
    },
    {
        id: 8,
        title: 'Sedekah Qurban - Berbagi Kebahagiaan',
        category: 'sosial',
        description: 'Program penyaluran daging qurban untuk kaum dhuafa',
        target: 150000000,
        collected: 134500000,
        donors: 2567,
        daysLeft: 25,
        image: 'https://images.unsplash.com/photo-1583201313160-e1b37a6674cf?w=800&q=80'
    }
];

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function calculateProgress(collected, target) {
    return Math.min((collected / target) * 100, 100);
}

function formatNumber(num) {
    return num.toLocaleString('id-ID');
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}

// Render Campaign Card
function renderCampaignCard(campaign) {
    const progress = calculateProgress(campaign.collected, campaign.target);
    
    return `
        <div class="campaign-card" data-category="${campaign.category}">
            <div class="campaign-image">
                <img src="${campaign.image}" alt="${campaign.title}">
                <div class="campaign-image-overlay"></div>
                <div class="campaign-badge">
                    <span class="badge">${campaign.category}</span>
                </div>
                <div class="campaign-title-wrapper">
                    <h3 class="campaign-image-title">${campaign.title}</h3>
                </div>
            </div>

            <div class="campaign-content">
                <p class="campaign-description">${campaign.description}</p>

                <div class="progress-section">
                    <div class="progress-header">
                        <span class="progress-label">Terkumpul</span>
                        <span class="progress-percent">${progress.toFixed(1)}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>

                <div class="amount-section">
                    <div class="amount-collected">${formatCurrency(campaign.collected)}</div>
                    <div class="amount-target">dari target ${formatCurrency(campaign.target)}</div>
                </div>

                <div class="campaign-stats">
                    <div class="stat-item">
                        <svg class="stat-icon stat-icon-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span class="stat-value">${formatNumber(campaign.donors)}</span>
                        <span>donatur</span>
                    </div>
                    <div class="stat-item">
                        <svg class="stat-icon stat-icon-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span class="stat-value">${campaign.daysLeft}</span>
                        <span>hari lagi</span>
                    </div>
                </div>

                <button class="campaign-cta">
                    <svg class="cta-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span>Donasi Sekarang</span>
                </button>
            </div>
        </div>
    `;
}

// Render All Campaigns
function renderCampaigns(category = 'semua') {
    const campaignGrid = document.getElementById('campaignGrid');
    
    const filteredCampaigns = category === 'semua' 
        ? campaigns 
        : campaigns.filter(c => c.category === category);
    
    campaignGrid.innerHTML = filteredCampaigns.map(campaign => renderCampaignCard(campaign)).join('');
}

// Category Filter
function initCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get category and render campaigns
            const category = button.getAttribute('data-category');
            renderCampaigns(category);
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    renderCampaigns();
    initCategoryFilter();
    initSmoothScroll();
    
    // Add animation on scroll for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe campaign cards with delay
    setTimeout(() => {
        const cards = document.querySelectorAll('.campaign-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease-out';
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
});

// Re-render campaigns when window is resized (optional, for responsive adjustments)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Any resize-specific logic can go here
    }, 250);
});
