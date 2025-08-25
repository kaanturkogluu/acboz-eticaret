<?php


require_once __DIR__ . '/../template/template.php';

?>
<link rel="stylesheet" href="<?=$router->baseUrl()?>assets/css/search.css">
   <!-- Breadcrumb -->
   <!-- <nav class="breadcrumb">
        <div class="container">
            <ul class="breadcrumb-list">
                <li><a href="index.html">Ana Sayfa</a></li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li>Arama Sonuçları</li>
            </ul>
        </div>
    </nav> -->

    <!-- Ana İçerik -->
    <main class="main-content">
        <div class="container">
            <div class="search-layout">
                <!-- Sol Sidebar - Filtreler -->
                <aside class="search-sidebar">
                    <div class="sidebar-section">
                        <h3 class="sidebar-title">
                            <i class="fas fa-filter"></i>
                            Filtreler
                        </h3>
                        
                        <!-- Kategori Filtresi -->
                        <div class="filter-group">
                            <h4 class="filter-title">Kategoriler</h4>
                            <div class="filter-options">
                                <label class="filter-option">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    Ekran Kartları (45)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    İşlemciler (32)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    Anakartlar (28)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    RAM (56)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    Depolama (67)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    Monitörler (34)
                                </label>
                            </div>
                        </div>

                        <!-- Marka Filtresi -->
                        <div class="filter-group">
                            <h4 class="filter-title">Markalar</h4>
                            <div class="filter-options">
                                <label class="filter-option">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    NVIDIA (23)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    AMD (18)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    ASUS (15)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    MSI (12)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    Gigabyte (9)
                                </label>
                            </div>
                        </div>

                        <!-- Fiyat Filtresi -->
                        <div class="filter-group">
                            <h4 class="filter-title">Fiyat Aralığı</h4>
                            <div class="price-range">
                                <div class="price-inputs">
                                    <input type="number" placeholder="Min" class="price-input" value="1000">
                                    <span class="price-separator">-</span>
                                    <input type="number" placeholder="Max" class="price-input" value="50000">
                                </div>
                                <button class="price-apply">Uygula</button>
                            </div>
                        </div>

                        <!-- Performans Filtresi -->
                        <div class="filter-group">
                            <h4 class="filter-title">Performans</h4>
                            <div class="filter-options">
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    Entry Level
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    Mid Range
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    High End
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    Ultra Premium
                                </label>
                            </div>
                        </div>

                        <!-- Bellek Filtresi -->
                        <div class="filter-group">
                            <h4 class="filter-title">Bellek (VRAM)</h4>
                            <div class="filter-options">
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    4GB (8)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    6GB (12)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    8GB (18)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    12GB (15)
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    16GB (22)
                                </label>
                            </div>
                        </div>

                        <!-- Özellik Filtresi -->
                        <div class="filter-group">
                            <h4 class="filter-title">Özellikler</h4>
                            <div class="filter-options">
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    Ray Tracing
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                    DLSS
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    RGB Aydınlatma
                                </label>
                                <label class="filter-option">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                    Overclock
                                </label>
                            </div>
                        </div>

                        <!-- Filtreleri Temizle -->
                        <button class="clear-filters">
                            <i class="fas fa-times"></i>
                            Filtreleri Temizle
                        </button>
                    </div>
                </aside>

                <!-- Sağ Ana İçerik -->
                <div class="search-main">
                    <!-- Arama Sonuçları Başlığı -->
                    <div class="search-header">
                        <div class="search-info">
                            <h2>Arama Sonuçları</h2>
                            <p>"RTX 4070" için <strong>156</strong> ürün bulundu</p>
                        </div>
                        <div class="search-controls">
                            <div class="sort-selector">
                                <label for="sort-select">Sırala:</label>
                                <select id="sort-select" class="sort-select">
                                    <option value="relevance">İlgi Sırası</option>
                                    <option value="price-low">Fiyat (Düşükten Yükseğe)</option>
                                    <option value="price-high">Fiyat (Yüksekten Düşüğe)</option>
                                    <option value="rating">Değerlendirme</option>
                                    <option value="newest">En Yeni</option>
                                    <option value="popular">En Popüler</option>
                                </select>
                            </div>
                            <div class="view-toggle">
                                <button class="view-btn active" data-view="grid">
                                    <i class="fas fa-th"></i>
                                </button>
                                <button class="view-btn" data-view="list">
                                    <i class="fas fa-list"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Ürün Grid -->
                    <div class="products-grid search-grid">
                        <!-- Ürün 1 -->
                        <div class="product-item">
                            <div class="product-badge">En Avantajlı</div>
                            <div class="product-image">
                                <a href="product-detail.html" class="product-link">
                                    <img src="https://img.freepik.com/free-photo/gaming-pc-setup_23-2149241987.jpg?w=200&h=200&fit=crop&crop=center" alt="RTX 4070 Gaming">
                                </a>
                            </div>
                            <div class="product-info">
                                <h3><a href="product-detail.html" class="product-link">RTX 4070 Gaming X Trio</a></h3>
                                <p class="product-desc">MSI Gaming X Trio, 8GB GDDR6X</p>
                                <div class="product-rating">
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count">4.9 (127)</span>
                                </div>
                                <div class="product-price">
                                    <span class="old-price">₺18,999</span>
                                    <span class="current-price">₺15,499</span>
                                </div>
                                <button class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>

                        <!-- Ürün 2 -->
                        <div class="product-item">
                            <div class="product-badge">Yeni</div>
                            <div class="product-image">
                                <a href="product-detail.html" class="product-link">
                                    <img src="https://img.freepik.com/free-photo/rtx-4080-graphics-card_23-2149241988.jpg?w=200&h=200&fit=crop&crop=center" alt="RTX 4070 Ti">
                                </a>
                            </div>
                            <div class="product-info">
                                <h3><a href="product-detail.html" class="product-link">RTX 4070 Ti Ventus 3X</a></h3>
                                <p class="product-desc">MSI Ventus 3X, 12GB GDDR6X</p>
                                <div class="product-rating">
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count">4.8 (89)</span>
                                </div>
                                <div class="product-price">
                                    <span class="old-price">₺24,999</span>
                                    <span class="current-price">₺21,499</span>
                                </div>
                                <button class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>

                        <!-- Ürün 3 -->
                        <div class="product-item">
                            <div class="product-badge">İndirim</div>
                            <div class="product-image">
                                <a href="product-detail.html" class="product-link">
                                    <img src="https://img.freepik.com/free-photo/amd-ryzen-processor_23-2149241989.jpg?w=200&h=200&fit=crop&crop=center" alt="RTX 4070 Dual">
                                </a>
                            </div>
                            <div class="product-info">
                                <h3><a href="product-detail.html" class="product-link">RTX 4070 Dual Fan</a></h3>
                                <p class="product-desc">ASUS Dual, 8GB GDDR6X, Compact</p>
                                <div class="product-rating">
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count">4.7 (156)</span>
                                </div>
                                <div class="product-price">
                                    <span class="old-price">₺17,999</span>
                                    <span class="current-price">₺14,999</span>
                                </div>
                                <button class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>

                        <!-- Ürün 4 -->
                        <div class="product-item">
                            <div class="product-badge">Popüler</div>
                            <div class="product-image">
                                <a href="product-detail.html" class="product-link">
                                    <img src="https://img.freepik.com/free-photo/nvme-ssd-drive_23-2149241979.jpg?w=200&h=200&fit=crop&crop=center" alt="RTX 4070 Gaming OC">
                                </a>
                            </div>
                            <div class="product-info">
                                <h3><a href="product-detail.html" class="product-link">RTX 4070 Gaming OC</a></h3>
                                <p class="product-desc">Gigabyte Gaming OC, 8GB GDDR6X</p>
                                <div class="product-rating">
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count">4.9 (203)</span>
                                </div>
                                <div class="product-price">
                                    <span class="old-price">₺19,999</span>
                                    <span class="current-price">₺16,499</span>
                                </div>
                                <button class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>

                        <!-- Ürün 5 -->
                        <div class="product-item">
                            <div class="product-badge">Yeni</div>
                            <div class="product-image">
                                <a href="product-detail.html" class="product-link">
                                    <img src="https://img.freepik.com/free-photo/gaming-monitor_23-2149241990.jpg?w=200&h=200&fit=crop&crop=center" alt="RTX 4070 Eagle">
                                </a>
                            </div>
                            <div class="product-info">
                                <h3><a href="product-detail.html" class="product-link">RTX 4070 Eagle</a></h3>
                                <p class="product-desc">Gigabyte Eagle, 8GB GDDR6X</p>
                                <div class="product-rating">
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count">4.8 (94)</span>
                                </div>
                                <div class="product-price">
                                    <span class="old-price">₺18,499</span>
                                    <span class="current-price">₺15,999</span>
                                </div>
                                <button class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>

                        <!-- Ürün 6 -->
                        <div class="product-item">
                            <div class="product-badge">İndirim</div>
                            <div class="product-image">
                                <a href="product-detail.html" class="product-link">
                                    <img src="https://img.freepik.com/free-photo/mechanical-gaming-keyboard_23-2149241983.jpg?w=200&h=200&fit=crop&crop=center" alt="RTX 4070 Aero">
                                </a>
                            </div>
                            <div class="product-info">
                                <h3><a href="product-detail.html" class="product-link">RTX 4070 Aero ITX</a></h3>
                                <p class="product-desc">MSI Aero ITX, 8GB GDDR6X, Mini</p>
                                <div class="product-rating">
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count">4.6 (78)</span>
                                </div>
                                <div class="product-price">
                                    <span class="old-price">₺20,999</span>
                                    <span class="current-price">₺17,999</span>
                                </div>
                                <button class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>

                        <!-- Ürün 7 -->
                        <div class="product-item">
                            <div class="product-badge">En Çok Satan</div>
                            <div class="product-image">
                                <a href="product-detail.html" class="product-link">
                                    <img src="https://img.freepik.com/free-photo/gaming-laptop_23-2149241981.jpg?w=200&h=200&fit=crop&crop=center" alt="RTX 4070 Strix">
                                </a>
                            </div>
                            <div class="product-info">
                                <h3><a href="product-detail.html" class="product-link">RTX 4070 Strix OC</a></h3>
                                <p class="product-desc">ASUS ROG Strix OC, 8GB GDDR6X</p>
                                <div class="product-rating">
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count">4.9 (167)</span>
                                </div>
                                <div class="product-price">
                                    <span class="old-price">₺22,999</span>
                                    <span class="current-price">₺19,499</span>
                                </div>
                                <button class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>

                        <!-- Ürün 8 -->
                        <div class="product-item">
                            <div class="product-badge">Öne Çıkan</div>
                            <div class="product-image">
                                <a href="product-detail.html" class="product-link">
                                    <img src="https://img.freepik.com/free-photo/wireless-gaming-headset_23-2149241982.jpg?w=200&h=200&fit=crop&crop=center" alt="RTX 4070 Gaming Pro">
                                </a>
                            </div>
                            <div class="product-info">
                                <h3><a href="product-detail.html" class="product-link">RTX 4070 Gaming Pro</a></h3>
                                <p class="product-desc">Palit Gaming Pro, 8GB GDDR6X</p>
                                <div class="product-rating">
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="rating-count">4.7 (189)</span>
                                </div>
                                <div class="product-price">
                                    <span class="old-price">₺16,999</span>
                                    <span class="current-price">₺13,999</span>
                                </div>
                                <button class="add-to-cart-btn">
                                    <i class="fas fa-shopping-cart"></i>
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Sayfalama -->
                    <div class="pagination">
                        <button class="page-btn prev" disabled>
                            <i class="fas fa-chevron-left"></i>
                            Önceki
                        </button>
                        <div class="page-numbers">
                            <button class="page-btn active">1</button>
                            <button class="page-btn">2</button>
                            <button class="page-btn">3</button>
                            <span class="page-dots">...</span>
                            <button class="page-btn">8</button>
                        </div>
                        <button class="page-btn next">
                            Sonraki
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>


<?php

require_once __DIR__ . '/../template/footer.php';



?>