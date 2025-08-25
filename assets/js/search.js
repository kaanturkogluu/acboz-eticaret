// Arama Sayfası JavaScript Fonksiyonalitesi

document.addEventListener('DOMContentLoaded', function() {
    initSearchFilters();
    initViewToggle();
    initSorting();
    initPagination();
    initSearchAddToCart();
    initPriceFilter();
    initClearFilters();
});

// Filtre Fonksiyonalitesi
function initSearchFilters() {
    const filterOptions = document.querySelectorAll('.filter-option input[type="checkbox"]');
    
    filterOptions.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Filtre değişikliğinde ürün sayısını güncelle
            updateProductCount();
            
            // Filtre değişikliğini kaydet
            saveFilterState();
            
            // Ürünleri filtrele (gerçek uygulamada API çağrısı yapılır)
            filterProducts();
        });
    });
}

// Görünüm Değiştirici
function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const productsGrid = document.querySelector('.search-grid');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            
            // Aktif buton sınıfını güncelle
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Grid görünümünü değiştir
            if (view === 'list') {
                productsGrid.classList.add('list-view');
                productsGrid.style.gridTemplateColumns = '1fr';
            } else {
                productsGrid.classList.remove('list-view');
                productsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
            }
            
            // Görünüm tercihini kaydet
            localStorage.setItem('searchView', view);
        });
    });
    
    // Kaydedilmiş görünüm tercihini yükle
    const savedView = localStorage.getItem('searchView');
    if (savedView) {
        const btn = document.querySelector(`[data-view="${savedView}"]`);
        if (btn) btn.click();
    }
}

// Sıralama Fonksiyonalitesi
function initSorting() {
    const sortSelect = document.getElementById('sort-select');
    
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        
        // Sıralama tercihini kaydet
        localStorage.setItem('searchSort', sortValue);
        
        // Ürünleri sırala (gerçek uygulamada API çağrısı yapılır)
        sortProducts(sortValue);
        
        // Kullanıcıya bildirim göster
        showNotification(`Ürünler ${this.options[this.selectedIndex].text} sırasına göre sıralandı`, 'info');
    });
    
    // Kaydedilmiş sıralama tercihini yükle
    const savedSort = localStorage.getItem('searchSort');
    if (savedSort) {
        sortSelect.value = savedSort;
    }
}

// Sayfalama Fonksiyonalitesi
function initPagination() {
    const pageBtns = document.querySelectorAll('.page-btn');
    
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.disabled) return;
            
            // Aktif sayfa sınıfını güncelle
            document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Sayfa numarasını al
            const pageNum = this.textContent;
            
            // Sayfa değişikliğini işle (gerçek uygulamada API çağrısı yapılır)
            changePage(pageNum);
            
            // Sayfayı yukarı kaydır
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Sepete Ekleme Fonksiyonalitesi
function initSearchAddToCart() {
    const addToCartBtns = document.querySelectorAll('.search-grid .add-to-cart-btn');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Sepete ekleme animasyonu
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Sepete Eklendi!';
            this.style.background = '#10b981';
            
            // 2 saniye sonra eski haline dön
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '#2563eb';
            }, 2000);
            
            // Sepet sayısını güncelle
            updateCartCount();
            
            // Başarı bildirimi göster
            showNotification('Ürün sepete eklendi!', 'success');
        });
    });
}

// Fiyat Filtresi
function initPriceFilter() {
    const priceApplyBtn = document.querySelector('.price-apply');
    const minInput = document.querySelector('.price-input[placeholder="Min"]');
    const maxInput = document.querySelector('.price-input[placeholder="Max"]');
    
    priceApplyBtn.addEventListener('click', function() {
        const minPrice = parseInt(minInput.value) || 0;
        const maxPrice = parseInt(maxInput.value) || 999999;
        
        if (minPrice > maxPrice) {
            showNotification('Minimum fiyat, maksimum fiyattan büyük olamaz!', 'error');
            return;
        }
        
        // Fiyat filtresini uygula
        applyPriceFilter(minPrice, maxPrice);
        
        // Başarı bildirimi göster
        showNotification(`Fiyat filtresi uygulandı: ₺${minPrice.toLocaleString()} - ₺${maxPrice.toLocaleString()}`, 'info');
    });
    
    // Enter tuşu ile uygula
    [minInput, maxInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                priceApplyBtn.click();
            }
        });
    });
}

// Filtreleri Temizle
function initClearFilters() {
    const clearBtn = document.querySelector('.clear-filters');
    
    clearBtn.addEventListener('click', function() {
        // Tüm checkbox'ları temizle
        const checkboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
        
        // Fiyat input'larını sıfırla
        const minInput = document.querySelector('.price-input[placeholder="Min"]');
        const maxInput = document.querySelector('.price-input[placeholder="Max"]');
        minInput.value = '';
        maxInput.value = '';
        
        // Sıralamayı sıfırla
        const sortSelect = document.getElementById('sort-select');
        sortSelect.value = 'relevance';
        
        // Görünümü grid'e çevir
        const gridBtn = document.querySelector('[data-view="grid"]');
        if (gridBtn) gridBtn.click();
        
        // Sayfa 1'e dön
        const firstPageBtn = document.querySelector('.page-numbers .page-btn:first-child');
        if (firstPageBtn) firstPageBtn.click();
        
        // Filtreleri temizle
        clearFilterState();
        
        // Ürünleri yeniden yükle
        resetProducts();
        
        // Başarı bildirimi göster
        showNotification('Tüm filtreler temizlendi!', 'success');
    });
}

// Yardımcı Fonksiyonlar
function updateProductCount() {
    const checkedFilters = document.querySelectorAll('.filter-option input[type="checkbox"]:checked');
    const productCount = document.querySelector('.search-info strong');
    
    // Gerçek uygulamada API'den gelen sayı kullanılır
    const newCount = Math.max(156 - (checkedFilters.length * 10), 50);
    productCount.textContent = newCount;
}

function saveFilterState() {
    const filters = {};
    const checkboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    
    checkboxes.forEach(cb => {
        const filterGroup = cb.closest('.filter-group').querySelector('.filter-title').textContent;
        if (!filters[filterGroup]) filters[filterGroup] = [];
        
        if (cb.checked) {
            const label = cb.parentElement.textContent.trim();
            filters[filterGroup].push(label);
        }
    });
    
    localStorage.setItem('searchFilters', JSON.stringify(filters));
}

function clearFilterState() {
    localStorage.removeItem('searchFilters');
}

function filterProducts() {
    // Gerçek uygulamada burada API çağrısı yapılır
    console.log('Ürünler filtreleniyor...');
}

function sortProducts(sortType) {
    // Gerçek uygulamada burada API çağrısı yapılır
    console.log(`Ürünler ${sortType} sırasına göre sıralanıyor...`);
}

function changePage(pageNum) {
    // Gerçek uygulamada burada API çağrısı yapılır
    console.log(`Sayfa ${pageNum} yükleniyor...`);
}

function applyPriceFilter(minPrice, maxPrice) {
    // Gerçek uygulamada burada API çağrısı yapılır
    console.log(`Fiyat filtresi uygulanıyor: ${minPrice} - ${maxPrice}`);
}

function resetProducts() {
    // Gerçek uygulamada burada API çağrısı yapılır
    console.log('Ürünler sıfırlanıyor...');
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const currentCount = parseInt(cartCount.textContent) || 0;
    cartCount.textContent = currentCount + 1;
    
    // LocalStorage'a kaydet
    localStorage.setItem('cartCount', currentCount + 1);
}

function showNotification(message, type = 'info') {
    // Mevcut bildirimi kaldır
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Yeni bildirim oluştur
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Bildirimi sayfaya ekle
    document.body.appendChild(notification);
    
    // CSS stillerini ekle
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                padding: 16px 20px;
                display: flex;
                align-items: center;
                gap: 15px;
                z-index: 1000;
                animation: slideIn 0.3s ease;
                max-width: 400px;
            }
            
            .notification-success {
                border-left: 4px solid #10b981;
            }
            
            .notification-error {
                border-left: 4px solid #ef4444;
            }
            
            .notification-info {
                border-left: 4px solid #3b82f6;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
                flex: 1;
            }
            
            .notification-content i {
                font-size: 18px;
            }
            
            .notification-success .notification-content i {
                color: #10b981;
            }
            
            .notification-error .notification-content i {
                color: #ef4444;
            }
            
            .notification-info .notification-content i {
                color: #3b82f6;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: #6b7280;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                transition: all 0.3s ease;
            }
            
            .notification-close:hover {
                background: #f3f4f6;
                color: #374151;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Kapatma butonuna event listener ekle
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // 5 saniye sonra otomatik kapat
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Sayfa yüklendiğinde mevcut filtreleri yükle
function loadSavedFilters() {
    const savedFilters = localStorage.getItem('searchFilters');
    if (savedFilters) {
        const filters = JSON.parse(savedFilters);
        
        Object.keys(filters).forEach(filterGroup => {
            const filterTitles = document.querySelectorAll('.filter-title');
            filterTitles.forEach(title => {
                if (title.textContent === filterGroup) {
                    const filterOptions = title.nextElementSibling.querySelectorAll('.filter-option');
                    filterOptions.forEach(option => {
                        const checkbox = option.querySelector('input[type="checkbox"]');
                        const label = option.textContent.trim();
                        
                        if (filters[filterGroup].includes(label)) {
                            checkbox.checked = true;
                        }
                    });
                }
            });
        });
    }
}

// Sayfa yüklendiğinde kaydedilmiş filtreleri yükle
loadSavedFilters();
