// DOM yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Ana slider fonksiyonlarını başlat
    initSlider();
    
    // Ürün slider'larını başlat
    initSliders();
    
    // Sepete ekleme fonksiyonlarını başlat
    initAddToCart();
    
    // Arama fonksiyonlarını başlat
    initSearch();
    
    // Smooth scroll fonksiyonlarını başlat
    initSmoothScroll();
    
    // Sayfa yüklendiğinde animasyonları başlat
    initAnimations();
});

// Slider fonksiyonları
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentSlide = 0;
    
    // Slider elementleri yoksa fonksiyondan çık
    if (!slides || slides.length === 0) {
        return;
    }
    
    // Slider'ı otomatik olarak çalıştır
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Sonraki slide'a geç
    function nextSlide() {
        if (slides[currentSlide]) {
            slides[currentSlide].classList.remove('active');
        }
        currentSlide = (currentSlide + 1) % slides.length;
        if (slides[currentSlide]) {
            slides[currentSlide].classList.add('active');
        }
    }
    
    // Önceki slide'a geç
    function prevSlide() {
        if (slides[currentSlide]) {
            slides[currentSlide].classList.remove('active');
        }
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        if (slides[currentSlide]) {
            slides[currentSlide].classList.add('active');
        }
    }
    
    // Buton tıklama olayları
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Mouse hover olduğunda slider'ı durdur
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.addEventListener('mouseenter', function() {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', function() {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
}

// Slider durumları
let currentSlide = {
    recommended: 0,
    bestseller: 0
};

// Slider'ları başlat
function initSliders() {
    try {
        // Tavsiye edilen ürünler slider'ı
        const recommendedSlider = document.querySelector('.product-slider:nth-child(1) .slider-track');
        
        // En çok satan ürünler slider'ı
        const bestsellerSlider = document.querySelector('.product-slider:nth-child(2) .slider-track');
        
        // Slider'lar varsa başlat
        if (recommendedSlider) {
            const recommendedSlides = recommendedSlider.querySelectorAll('.slide');
            if (recommendedSlides && recommendedSlides.length > 0) {
                // Otomatik slider
                setInterval(() => {
                    moveSlider('recommended', 1);
                }, 4000);
            }
        }
        
        if (bestsellerSlider) {
            const bestsellerSlides = bestsellerSlider.querySelectorAll('.slide');
            if (bestsellerSlides && bestsellerSlides.length > 0) {
                // Otomatik slider
                setInterval(() => {
                    moveSlider('bestseller', 1);
                }, 3500);
            }
        }
    } catch (error) {
        console.log('Slider elementleri bulunamadı:', error.message);
    }
}

// Slider hareketi
function moveSlider(type, direction) {
    try {
        const slider = document.querySelector(`.product-slider:nth-child(${type === 'recommended' ? '1' : '2'}) .slider-track`);
        
        if (!slider) return;
        
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;
        
        if (totalSlides === 0) return;
        
        if (direction === 1) {
            currentSlide[type] = (currentSlide[type] + 1) % totalSlides;
        } else {
            currentSlide[type] = (currentSlide[type] - 1 + totalSlides) % totalSlides;
        }
        
        const translateX = -currentSlide[type] * 100;
        slider.style.transform = `translateX(${translateX}%)`;
    } catch (error) {
        console.log('Slider hareketi hatası:', error.message);
    }
}

// Geri Sayım Sayacı
class CountdownTimer {
    constructor() {
        this.daysElement = document.getElementById('days');
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');
        
        // Elementler yoksa fonksiyondan çık
        if (!this.daysElement || !this.hoursElement || !this.minutesElement || !this.secondsElement) {
            console.log('Geri sayım elementleri bulunamadı');
            return;
        }
        
        // Kampanya bitim tarihi (7 gün sonra)
        this.endDate = new Date();
        this.endDate.setDate(this.endDate.getDate() + 7);
        
        this.init();
    }
    
    init() {
        this.updateTimer();
        setInterval(() => this.updateTimer(), 1000);
    }
    
    updateTimer() {
        try {
            const now = new Date();
            const timeDifference = this.endDate - now;
            
            if (timeDifference <= 0) {
                // Kampanya süresi doldu
                if (this.daysElement) this.daysElement.textContent = '00';
                if (this.hoursElement) this.hoursElement.textContent = '00';
                if (this.minutesElement) this.minutesElement.textContent = '00';
                if (this.secondsElement) this.secondsElement.textContent = '00';
                return;
            }
            
            // Gün, saat, dakika ve saniye hesaplama
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            
            // DOM'a yazma
            if (this.daysElement) this.daysElement.textContent = days.toString().padStart(2, '0');
            if (this.hoursElement) this.hoursElement.textContent = hours.toString().padStart(2, '0');
            if (this.minutesElement) this.minutesElement.textContent = minutes.toString().padStart(2, '0');
            if (this.secondsElement) this.secondsElement.textContent = seconds.toString().padStart(2, '0');
        } catch (error) {
            console.log('Geri sayım güncelleme hatası:', error.message);
        }
    }
}

// Sepete Ekle Butonu Fonksiyonalitesi
function initAddToCart() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    addToCartBtns.forEach(addToCartBtn => {
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function() {
                // Sepete ekleme animasyonu
                this.innerHTML = '<i class="fas fa-check"></i> Sepete Eklendi!';
                this.style.background = '#10b981';
                
                // 2 saniye sonra eski haline dön
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-shopping-cart"></i> Sepete Ekle';
                    this.style.background = '#2563eb';
                }, 2000);
            
            // Sepet sayısını güncelle (örnek)
            updateCartCount();
            });
        }
    });
}

// Popüler Ürünler Sepete Ekle Butonları
function initPopularProductsAddToCart() {
    const addToCartBtns = document.querySelectorAll('.popular-products .add-to-cart-btn');
    
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
        });
    });
}

// En çok satılanlar için sepete ekleme fonksiyonalitesi
function initBestSellersAddToCart() {
    const bestSellerBtns = document.querySelectorAll('.best-sellers .add-to-cart-btn');
    
    bestSellerBtns.forEach(btn => {
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
        });
    });
}

// Öne çıkan ürünler için sepete ekleme fonksiyonalitesi
function initFeaturedProductsAddToCart() {
    const featuredBtns = document.querySelectorAll('.featured-products .add-to-cart-btn');
    
    featuredBtns.forEach(btn => {
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
        });
    });
}

// Sepet sayısını güncelle
function updateCartCount() {
    // Burada localStorage veya session kullanarak sepet sayısını güncelleyebilirsiniz
    console.log('Ürün sepete eklendi!');
}

// Bildirim gösterme fonksiyonu
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
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease-in-out;
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

// Arama fonksiyonları
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (searchInput && searchButton) {
        // Enter tuşu ile arama
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Arama butonu ile arama
        searchButton.addEventListener('click', function() {
            performSearch();
        });
    }
}

// Arama işlemi
function performSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const query = searchInput.value.trim();
    
    if (query.length > 0) {
        // Gerçek uygulamada burada API çağrısı yapılır
        showNotification(`"${query}" için arama yapılıyor...`, 'info');
        
        // Arama sonuçlarını simüle et
        setTimeout(() => {
            showNotification(`"${query}" için ${Math.floor(Math.random() * 100) + 10} sonuç bulundu`, 'success');
        }, 1000);
    } else {
        showNotification('Lütfen arama yapmak istediğiniz ürünü yazın', 'error');
    }
}

// Smooth scroll fonksiyonları
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Sayfa animasyonları
function initAnimations() {
    // Intersection Observer ile scroll animasyonları
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animasyon yapılacak elementler
    const animatedElements = document.querySelectorAll('.category-card, .product-card, .campaign-card, .brand-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
}

// Kategori kartlarına hover efekti
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = '#e3f2fd';
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = '';
            this.style.transform = '';
        });
    });
});

// Ürün kartlarına hover efekti
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});

// Sayfa scroll olduğunda header'ı gölgelendir
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Mobil menü toggle (gelecekte eklenebilir)
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('mobile-open');
}

// Sayfa yüklendiğinde loading animasyonu
window.addEventListener('load', function() {
    // Loading animasyonunu kaldır
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 300);
    }
    
    // Sayfa içeriğini göster
    document.body.style.opacity = '1';
});

// Sayfa yüklenirken loading durumu
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease-in-out';

// Utility fonksiyonlar
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Scroll olaylarını optimize et
const optimizedScrollHandler = debounce(function() {
    // Scroll olayında yapılacak işlemler
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Console'a hoş geldin mesajı
console.log('%cTechShop E-ticaret Sitesi', 'color: #007bff; font-size: 20px; font-weight: bold;');
console.log('%cBaşarıyla yüklendi! 🚀', 'color: #28a745; font-size: 16px;');

// Kart hover efektleri
function initCardEffects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Smooth scroll için
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Header scroll efekti
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Aşağı scroll
            header.style.transform = 'translateY(-100%)';
        } else {
            // Yukarı scroll
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

 
// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Geri sayım sayacını başlat
    new CountdownTimer();
    
    
    // Sepete ekle butonunu başlat
    initAddToCart();
    
    // Popüler ürünler sepete ekle butonlarını başlat
    initPopularProductsAddToCart();
    
    // En çok satılanlar sepete ekle butonlarını başlat
    initBestSellersAddToCart();
    
    // Öne çıkan ürünler sepete ekle butonlarını başlat
    initFeaturedProductsAddToCart();
    
    // Kart efektlerini başlat
    initCardEffects();
    
    // Smooth scroll'u başlat
    initSmoothScroll();
    
    // Header scroll efektini başlat
    initHeaderScroll();
    
    // Header fonksiyonalitesini başlat
    initHeaderFunctionality();
    
    // Sayfa yüklendiğinde fade-in efekti
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Sayfa görünürlüğü değiştiğinde geri sayımı güncelle
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Sayfa tekrar görünür olduğunda geri sayımı güncelle
        location.reload();
    }
});

// Header fonksiyonalitesi
function initHeaderFunctionality() {
    try {
        // Konum seçici
        const locationSelector = document.querySelector('.location-selector');
        if (locationSelector) {
            locationSelector.addEventListener('click', function() {
                // Konum seçim modalı açılabilir
                console.log('Konum seçici tıklandı');
            });
        }
        
        // Giriş yap butonu
        const loginBtn = document.querySelector('.login-btn');
        if (loginBtn) {
            loginBtn.addEventListener('click', function() {
                // Giriş modalı açılabilir
                console.log('Giriş yap butonu tıklandı');
            });
        }
        
        // Sepet butonu
        const cartBtn = document.querySelector('.cart-btn');
        if (cartBtn) {
            cartBtn.addEventListener('click', function() {
                // Sepet sayfası açılabilir
                console.log('Sepet butonu tıklandı');
            });
        }
        
        // Arama çubuğu
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    // Arama işlemi yapılabilir
                    console.log('Arama yapılıyor:', this.value);
                }
            });
        }
    } catch (error) {
        console.log('Header fonksiyonalitesi hatası:', error.message);
    }
}

// Sepet sayısını güncelle
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        // LocalStorage'dan sepet sayısını al
        const currentCount = localStorage.getItem('cartCount') || 0;
        const newCount = parseInt(currentCount) + 1;
        localStorage.setItem('cartCount', newCount);
        cartCount.textContent = newCount;
    }
}

// Sepet sayısını localStorage'dan yükle
window.addEventListener('load', function() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const savedCount = localStorage.getItem('cartCount') || 0;
        cartCount.textContent = savedCount;
    }
});
