// Ürün Detay Sayfası JavaScript Fonksiyonalitesi

document.addEventListener('DOMContentLoaded', function() {
    // Tab sistemi
    initTabs();
    
    // Ürün görsel galerisi
    initImageGallery();
    
    // Miktar kontrolleri
    initQuantityControls();
    
    // Sepete ekleme fonksiyonalitesi
    initProductActions();
    
    // Breadcrumb navigasyonu
    initBreadcrumb();
    
    // Smooth scroll
    initSmoothScroll();
});

// Tab Sistemi
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Aktif tab butonunu güncelle
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Aktif tab içeriğini göster
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === targetTab) {
                    pane.classList.add('active');
                }
            });
        });
    });
}

// Ürün Görsel Galerisi
function initImageGallery() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const newSrc = this.getAttribute('data-src');
            
            // Ana görseli güncelle
            mainImage.src = newSrc;
            
            // Aktif thumbnail'ı güncelle
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Smooth transition efekti
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 150);
        });
    });
    
    // Ana görsel hover efekti
    mainImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    mainImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Miktar Kontrolleri
function initQuantityControls() {
    const quantityInput = document.getElementById('quantity');
    const qtyBtns = document.querySelectorAll('.qty-btn');
    
    // Miktar değiştirme fonksiyonu
    window.changeQuantity = function(change) {
        let currentValue = parseInt(quantityInput.value);
        let newValue = currentValue + change;
        
        // Minimum ve maksimum değerleri kontrol et
        if (newValue >= 1 && newValue <= 10) {
            quantityInput.value = newValue;
            
            // Miktar değiştiğinde fiyat güncelleme (opsiyonel)
            updateTotalPrice(newValue);
        }
    };
    
    // Manuel miktar girişi
    quantityInput.addEventListener('input', function() {
        let value = parseInt(this.value);
        
        if (value < 1) {
            this.value = 1;
            value = 1;
        } else if (value > 10) {
            this.value = 10;
            value = 10;
        }
        
        updateTotalPrice(value);
    });
    
    // Miktar değiştiğinde fiyat güncelleme
    function updateTotalPrice(quantity) {
        const currentPrice = 79999; // Ana fiyat
        const totalPrice = currentPrice * quantity;
        
        // Toplam fiyat gösterimi (opsiyonel)
        const totalPriceElement = document.querySelector('.total-price');
        if (totalPriceElement) {
            totalPriceElement.textContent = `৳${totalPrice.toLocaleString()}`;
        }
    }
}

// Ürün Aksiyonları
function initProductActions() {
    const addToCartBtn = document.querySelector('.add-to-cart-large');
    const buyNowBtn = document.querySelector('.buy-now');
    
    // Sepete Ekle
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('quantity').value);
            addToCart(quantity);
        });
    }
    
    // Hemen Al
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('quantity').value);
            buyNow(quantity);
        });
    }
}

// Sepete Ekleme Fonksiyonu
function addToCart(quantity) {
    // Sepete ekleme animasyonu
    const btn = document.querySelector('.add-to-cart-large');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-check"></i> Sepete Eklendi!';
    btn.style.background = '#10b981';
    btn.disabled = true;
    
    // Sepet sayısını güncelle
    updateCartCount(quantity);
    
    // Bildirim göster
    showNotification(`${quantity} adet RTX 4090 sepete eklendi!`, 'success');
    
    // 2 saniye sonra eski haline dön
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '#2563eb';
        btn.disabled = false;
    }, 2000);
}

// Hemen Al Fonksiyonu
function buyNow(quantity) {
    // Ödeme sayfasına yönlendirme (örnek)
    showNotification(`${quantity} adet RTX 4090 için ödeme sayfasına yönlendiriliyorsunuz...`, 'info');
    
    // Gerçek uygulamada ödeme sayfasına yönlendir
    setTimeout(() => {
        // window.location.href = '/checkout';
        console.log('Ödeme sayfasına yönlendiriliyor...');
    }, 1500);
}

// Sepet Sayısını Güncelle
function updateCartCount(quantity) {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const currentCount = parseInt(localStorage.getItem('cartCount') || 0);
        const newCount = currentCount + quantity;
        localStorage.setItem('cartCount', newCount);
        cartCount.textContent = newCount;
    }
}

// Bildirim Sistemi
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
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // CSS stilleri ekle
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease-in-out;
        max-width: 300px;
    `;
    
    // Bildirimi sayfaya ekle
    document.body.appendChild(notification);
    
    // Animasyonla göster
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Kapatma butonu olayı
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // 5 saniye sonra otomatik kapat
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Breadcrumb Navigasyonu
function initBreadcrumb() {
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb-list a');
    
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Ana sayfa dışındaki linkler için örnek davranış
            if (this.getAttribute('href') !== 'index.html') {
                e.preventDefault();
                showNotification('Bu sayfa henüz hazır değil', 'info');
            }
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const reviewLink = document.querySelector('.review-link');
    
    if (reviewLink) {
        reviewLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Reviews sekmesini aktif et
            const reviewsTab = document.querySelector('[data-tab="reviews"]');
            const reviewsPane = document.getElementById('reviews');
            
            if (reviewsTab && reviewsPane) {
                // Tab'ı aktif et
                document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
                
                reviewsTab.classList.add('active');
                reviewsPane.classList.add('active');
                
                // Smooth scroll
                reviewsPane.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Sayfa yüklendiğinde ek özellikler
window.addEventListener('load', function() {
    // Sepet sayısını localStorage'dan yükle
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const savedCount = localStorage.getItem('cartCount') || 0;
        cartCount.textContent = savedCount;
    }
    
    // Sayfa fade-in efekti
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Klavye kısayolları
document.addEventListener('keydown', function(e) {
    // Ctrl + Enter ile sepete ekle
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        const quantity = parseInt(document.getElementById('quantity').value);
        addToCart(quantity);
    }
    
    // Ctrl + Shift + Enter ile hemen al
    if (e.ctrlKey && e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        const quantity = parseInt(document.getElementById('quantity').value);
        buyNow(quantity);
    }
});

// Ürün görseli zoom efekti (opsiyonel)
function initImageZoom() {
    const mainImage = document.getElementById('mainImage');
    const zoomLens = document.querySelector('.image-zoom-lens');
    
    if (mainImage && zoomLens) {
        mainImage.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Zoom lens pozisyonunu güncelle
            zoomLens.style.left = (x - 50) + 'px';
            zoomLens.style.top = (y - 50) + 'px';
            zoomLens.style.display = 'block';
        });
        
        mainImage.addEventListener('mouseleave', function() {
            zoomLens.style.display = 'none';
        });
    }
}

// Sayfa görünürlüğü değiştiğinde
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Sayfa tekrar görünür olduğunda
        console.log('Ürün detay sayfası tekrar görünür');
    }
});

// Responsive tasarım için ek kontroller
window.addEventListener('resize', function() {
    // Mobil cihazlarda tab navigasyonunu optimize et
    if (window.innerWidth <= 768) {
        const tabNavigation = document.querySelector('.tab-navigation');
        if (tabNavigation) {
            tabNavigation.style.overflowX = 'auto';
        }
    }
});
