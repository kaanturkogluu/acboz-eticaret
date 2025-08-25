<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <!-- Sol: Logo ve Tagline -->
                <div class="header-left">
                    <div class="logo">
                        <h1>basital.com</h1>
                        <p class="tagline"><span class="premium">güvenin</span> adresi</p>
                    </div>
                </div>

                <script>

                    document.querySelector(".logo").addEventListener("click", function(){
                      
                        window.location.href = "<?=$router->baseUrl()?>";
                    });
                </script>

                <!-- Orta: Arama Çubuğu -->
                <div class="header-center">
                    <div class="search-bar">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" placeholder="Ürün, kategori veya marka ara" class="search-input">
                    </div>
                </div>

                <!-- Sağ: Kullanıcı İşlemleri -->
                <div class="header-right">
                    <!-- Konum Seçici -->
                    <div class="location-selector">
                        <i class="fas fa-map-marker-alt location-icon"></i>
                        <div class="location-text">
                            <span class="location-label">Konum</span>
                            <span class="location-value">Konum Seç</span>
                        </div>
                        <i class="fas fa-chevron-down chevron-icon"></i>
                    </div>

                    <!-- Giriş Yap Butonu -->
                    <div class="login-section">
                        <button class="login-btn" id="loginBtn">
                            <i class="fas fa-user user-icon"></i>
                            <div class="login-text">
                                <span class="login-main">Giriş Yap</span>
                                <span class="login-sub">veya üye ol</span>
                            </div>
                            <i class="fas fa-chevron-down chevron-icon"></i>
                        </button>
                    </div>

                    <!-- Sepet Butonu -->
                    <div class="cart-section">
                        <button class="cart-btn">
                            <i class="fas fa-shopping-cart cart-icon"></i>
                            <span class="cart-count">0</span>
                            <span class="cart-text">Sepetim</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Alt Renkli Bar -->
        <div class="header-bottom">
            <div class="color-bar">
                <div class="color-segment orange"></div>
                <div class="color-segment light-blue"></div>
                <div class="color-segment purple"></div>
                <div class="color-segment green"></div>
                <div class="color-segment dark-purple"></div>
            </div>
        </div>

        <!-- Ana Kategoriler Menüsü -->
        <nav class="main-categories">
            <div class="container">
                <ul class="categories-list">
                    <li><a href="#" class="category-link">Elektronik</a></li>
                    <li><a href="#" class="category-link">Moda</a></li>
                    <li><a href="#" class="category-link">Ev, Yaşam, Kırtasiye, Ofis</a></li>
                    <li><a href="#" class="category-link">Oto, Bahçe, Yapı Market</a></li>
                    <li><a href="#" class="category-link">Anne, Bebek, Oyuncak</a></li>
                    <li><a href="#" class="category-link">Spor, Outdoor</a></li>
                    <li><a href="#" class="category-link">Kozmetik, Kişisel Bakım</a></li>
                    <li><a href="#" class="category-link">Süpermarket, Pet Shop</a></li>
                    <li><a href="#" class="category-link">Kitap, Müzik, Film, Hobi</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <!-- Login Modal -->
    <div class="modal-overlay" id="loginModal">
        <div class="modal-container">
            <div class="modal-header">
                <h2 class="modal-title">Giriş Yap</h2>
                <button class="modal-close" id="closeModal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="modal-body">
                <form class="login-form" id="loginForm">
                    <div class="form-group">
                        <label for="email" class="form-label">E-posta</label>
                        <div class="input-group">
                            <i class="fas fa-envelope input-icon"></i>
                            <input type="email" id="email" name="email" class="form-input" placeholder="E-posta adresinizi girin" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="password" class="form-label">Şifre</label>
                        <div class="input-group">
                            <i class="fas fa-lock input-icon"></i>
                            <input type="password" id="password" name="password" class="form-input" placeholder="Şifrenizi girin" required>
                            <button type="button" class="password-toggle" id="passwordToggle">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox" id="remember" name="remember">
                            <span class="checkmark"></span>
                            Beni hatırla
                        </label>
                        <a href="#" class="forgot-password">Şifremi unuttum</a>
                    </div>
                    
                    <button type="submit" class="login-submit-btn">
                        <i class="fas fa-sign-in-alt"></i>
                        Giriş Yap
                    </button>
                </form>
                
                <div class="divider">
                    <span>veya</span>
                </div>
                
                <div class="social-login">
                    <button class="social-btn google-btn">
                        <i class="fab fa-google"></i>
                        Google ile Giriş Yap
                    </button>
                    <button class="social-btn facebook-btn">
                        <i class="fab fa-facebook-f"></i>
                        Facebook ile Giriş Yap
                    </button>
                </div>
                
                <div class="register-link">
                    Hesabınız yok mu? <a href="#" class="register-btn">Üye Ol</a>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Modal functionality
        const loginBtn = document.getElementById('loginBtn');
        const loginModal = document.getElementById('loginModal');
        const closeModal = document.getElementById('closeModal');
        const passwordToggle = document.getElementById('passwordToggle');
        const passwordInput = document.getElementById('password');
        const loginForm = document.getElementById('loginForm');

        // Open modal
        loginBtn.addEventListener('click', function() {
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close modal
        function closeLoginModal() {
            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        closeModal.addEventListener('click', closeLoginModal);

        // Close modal when clicking outside
        loginModal.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                closeLoginModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && loginModal.classList.contains('active')) {
                closeLoginModal();
            }
        });

        // Password toggle
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            const icon = passwordToggle.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });

        // Form submission
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Here you can add your login logic
            console.log('Login attempt:', { email, password, remember });
            
            // For demo purposes, show a success message
            alert('Giriş başarılı! (Demo)');
            closeLoginModal();
        });

        // Social login buttons
        document.querySelector('.google-btn').addEventListener('click', function() {
            alert('Google ile giriş özelliği yakında eklenecek!');
        });

        document.querySelector('.facebook-btn').addEventListener('click', function() {
            alert('Facebook ile giriş özelliği yakında eklenecek!');
        });

        document.querySelector('.register-btn').addEventListener('click', function(e) {
            e.preventDefault();
            closeLoginModal();
            setTimeout(() => {
                const registerModal = document.getElementById('registerModal');
                if (registerModal) {
                    registerModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }, 100);
        });

        document.querySelector('.forgot-password').addEventListener('click', function(e) {
            e.preventDefault();
            closeLoginModal();
            setTimeout(() => {
                const forgotPasswordModal = document.getElementById('forgotPasswordModal');
                if (forgotPasswordModal) {
                    forgotPasswordModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }, 100);
        });
    </script>

    <!-- Forgot Password Modal -->
    <div class="modal-overlay" id="forgotPasswordModal">
        <div class="modal-container">
            <div class="modal-header">
                <h2 class="modal-title">Şifremi Unuttum</h2>
                <button class="modal-close" id="closeForgotModal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="modal-body">
                <div class="forgot-info">
                    <i class="fas fa-info-circle info-icon"></i>
                    <p>E-posta adresinizi girin, şifrenizi sıfırlamak için size bir link göndereceğiz.</p>
                </div>
                
                <form class="forgot-form" id="forgotForm">
                    <div class="form-group">
                        <label for="forgotEmail" class="form-label">E-posta Adresi</label>
                        <div class="input-group">
                            <i class="fas fa-envelope input-icon"></i>
                            <input type="email" id="forgotEmail" name="email" class="form-input" placeholder="E-posta adresinizi girin" required>
                        </div>
                    </div>
                    
                    <button type="submit" class="forgot-submit-btn">
                        <i class="fas fa-paper-plane"></i>
                        Sıfırlama Linki Gönder
                    </button>
                </form>
                
                <div class="back-to-login">
                    <a href="#" class="back-link" id="backToLogin">
                        <i class="fas fa-arrow-left"></i>
                        Giriş sayfasına dön
                    </a>
                </div>
            </div>
        </div>
    </div>
 

    <script>
        // Forgot Password Modal functionality
        const forgotPasswordModal = document.getElementById('forgotPasswordModal');
        const closeForgotModal = document.getElementById('closeForgotModal');
        const backToLogin = document.getElementById('backToLogin');
        const forgotForm = document.getElementById('forgotForm');



        function closeForgotPasswordModal() {
            forgotPasswordModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        closeForgotModal.addEventListener('click', closeForgotPasswordModal);

        // Close modal when clicking outside
        forgotPasswordModal.addEventListener('click', function(e) {
            if (e.target === forgotPasswordModal) {
                closeForgotPasswordModal();
            }
        });

        // Back to login button
        backToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            closeForgotPasswordModal();
            loginModal.classList.add('active');
        });

        // Forgot password form submission
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('forgotEmail').value;
            
            // Show success message
            const modalBody = forgotForm.parentElement;
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>E-posta Gönderildi!</h3>
                <p>${email} adresine şifre sıfırlama linki gönderdik. Lütfen e-postanızı kontrol edin.</p>
            `;
            
            // Replace form with success message
            modalBody.insertBefore(successMessage, forgotForm);
            forgotForm.style.display = 'none';
            
            // Auto close after 3 seconds
            setTimeout(() => {
                closeForgotPasswordModal();
                // Reset form for next time
                setTimeout(() => {
                    forgotForm.style.display = 'block';
                    modalBody.removeChild(successMessage);
                    forgotForm.reset();
                }, 300);
            }, 3000);
        });

        // Close modal with Escape key (update existing listener)
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (loginModal.classList.contains('active')) {
                    closeLoginModal();
                } else if (forgotPasswordModal.classList.contains('active')) {
                    closeForgotPasswordModal();
                } else if (registerModal.classList.contains('active')) {
                    closeRegisterModal();
                }
            }
        });
    </script>

    <!-- Register Modal -->
    <div class="modal-overlay" id="registerModal">
        <div class="modal-container register-modal">
            <div class="modal-header">
                <h2 class="modal-title">Üye Ol</h2>
                <button class="modal-close" id="closeRegisterModal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="modal-body">
                <form class="register-form" id="registerForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName" class="form-label">Ad</label>
                            <div class="input-group">
                                <i class="fas fa-user input-icon"></i>
                                <input type="text" id="firstName" name="firstName" class="form-input" placeholder="Adınız" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="lastName" class="form-label">Soyad</label>
                            <div class="input-group">
                                <i class="fas fa-user input-icon"></i>
                                <input type="text" id="lastName" name="lastName" class="form-input" placeholder="Soyadınız" required>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="registerEmail" class="form-label">E-posta</label>
                        <div class="input-group">
                            <i class="fas fa-envelope input-icon"></i>
                            <input type="email" id="registerEmail" name="email" class="form-input" placeholder="E-posta adresiniz" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone" class="form-label">Telefon</label>
                        <div class="input-group">
                            <i class="fas fa-phone input-icon"></i>
                            <input type="tel" id="phone" name="phone" class="form-input" placeholder="05XX XXX XX XX" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="registerPassword" class="form-label">Şifre</label>
                        <div class="input-group">
                            <i class="fas fa-lock input-icon"></i>
                            <input type="password" id="registerPassword" name="password" class="form-input" placeholder="En az 8 karakter" required>
                            <button type="button" class="password-toggle" id="registerPasswordToggle">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="password-strength" id="passwordStrength">
                            <div class="strength-bar">
                                <div class="strength-fill" id="strengthFill"></div>
                            </div>
                            <span class="strength-text" id="strengthText">Şifre gücü</span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="confirmPassword" class="form-label">Şifre Tekrar</label>
                        <div class="input-group">
                            <i class="fas fa-lock input-icon"></i>
                            <input type="password" id="confirmPassword" name="confirmPassword" class="form-input" placeholder="Şifrenizi tekrar girin" required>
                            <button type="button" class="password-toggle" id="confirmPasswordToggle">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox" id="terms" name="terms" required>
                            <span class="checkmark"></span>
                            <span class="terms-text">
                                <a href="#" class="terms-link">Kullanım Şartları</a> ve 
                                <a href="#" class="terms-link">Gizlilik Politikası</a>'nı kabul ediyorum
                            </span>
                        </label>
                    </div>
                    
                    <div class="form-options">
                        <label class="checkbox-container">
                            <input type="checkbox" id="newsletter" name="newsletter">
                            <span class="checkmark"></span>
                            Kampanya ve indirimlerden haberdar olmak istiyorum
                        </label>
                    </div>
                    
                    <button type="submit" class="register-submit-btn">
                        <i class="fas fa-user-plus"></i>
                        Üye Ol
                    </button>
                </form>
                
                <div class="divider">
                    <span>veya</span>
                </div>
                
                <div class="social-login">
                    <button class="social-btn google-btn">
                        <i class="fab fa-google"></i>
                        Google ile Üye Ol
                    </button>
                    <button class="social-btn facebook-btn">
                        <i class="fab fa-facebook-f"></i>
                        Facebook ile Üye Ol
                    </button>
                </div>
                
                <div class="login-link">
                    Zaten hesabınız var mı? <a href="#" class="login-link-btn" id="backToLoginFromRegister">Giriş Yap</a>
                </div>
            </div>
        </div>
    </div>

   

    <script>
        // Register Modal functionality
        const registerModal = document.getElementById('registerModal');
        const closeRegisterModalBtn = document.getElementById('closeRegisterModal');
        const backToLoginFromRegister = document.getElementById('backToLoginFromRegister');
        const registerForm = document.getElementById('registerForm');
        const registerPasswordInput = document.getElementById('registerPassword');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const registerPasswordToggle = document.getElementById('registerPasswordToggle');
        const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');
        const strengthFill = document.getElementById('strengthFill');
        const strengthText = document.getElementById('strengthText');

        function closeRegisterModal() {
            registerModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        closeRegisterModalBtn.addEventListener('click', closeRegisterModal);

        // Close modal when clicking outside
        registerModal.addEventListener('click', function(e) {
            if (e.target === registerModal) {
                closeRegisterModal();
            }
        });

        // Back to login button
        backToLoginFromRegister.addEventListener('click', function(e) {
            e.preventDefault();
            closeRegisterModal();
            loginModal.classList.add('active');
        });

        // Password strength checker
        function checkPasswordStrength(password) {
            let strength = 0;

            if (password.length >= 8) strength += 1;
            if (/[a-z]/.test(password)) strength += 1;
            if (/[A-Z]/.test(password)) strength += 1;
            if (/[0-9]/.test(password)) strength += 1;
            if (/[^A-Za-z0-9]/.test(password)) strength += 1;

            switch (strength) {
                case 0:
                case 1:
                    return { level: 'weak', text: 'Zayıf', class: 'weak' };
                case 2:
                    return { level: 'fair', text: 'Orta', class: 'fair' };
                case 3:
                    return { level: 'good', text: 'İyi', class: 'good' };
                case 4:
                case 5:
                    return { level: 'strong', text: 'Güçlü', class: 'strong' };
                default:
                    return { level: 'weak', text: 'Zayıf', class: 'weak' };
            }
        }

        // Update password strength
        registerPasswordInput.addEventListener('input', function() {
            const password = this.value;
            if (password.length > 0) {
                const strength = checkPasswordStrength(password);
                strengthFill.className = `strength-fill ${strength.class}`;
                strengthText.textContent = strength.text;
            } else {
                strengthFill.className = 'strength-fill';
                strengthText.textContent = 'Şifre gücü';
            }
        });

        // Password toggles
        registerPasswordToggle.addEventListener('click', function() {
            const type = registerPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            registerPasswordInput.setAttribute('type', type);
            
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });

        confirmPasswordToggle.addEventListener('click', function() {
            const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPasswordInput.setAttribute('type', type);
            
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });

        // Form validation and submission
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Remove existing error messages
            const existingErrors = registerForm.querySelectorAll('.error-message');
            existingErrors.forEach(error => error.remove());
            
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const password = registerPasswordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            const terms = document.getElementById('terms').checked;
            const newsletter = document.getElementById('newsletter').checked;
            
            let hasErrors = false;
            
            // Validation
            if (firstName.length < 2) {
                showError('Ad en az 2 karakter olmalıdır');
                hasErrors = true;
            }
            
            if (lastName.length < 2) {
                showError('Soyad en az 2 karakter olmalıdır');
                hasErrors = true;
            }
            
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                showError('Geçerli bir e-posta adresi giriniz');
                hasErrors = true;
            }
            
            if (!phone.match(/^05[0-9]{9}$/)) {
                showError('Geçerli bir telefon numarası giriniz (05XX XXX XX XX)');
                hasErrors = true;
            }
            
            if (password.length < 8) {
                showError('Şifre en az 8 karakter olmalıdır');
                hasErrors = true;
            }
            
            if (password !== confirmPassword) {
                showError('Şifreler eşleşmiyor');
                hasErrors = true;
            }
            
            if (!terms) {
                showError('Kullanım şartlarını kabul etmelisiniz');
                hasErrors = true;
            }
            
            if (hasErrors) return;
            
            // Show success message
            const modalBody = registerForm.parentElement;
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>Kayıt Başarılı!</h3>
                <p>Hesabınız başarıyla oluşturuldu. Giriş yapabilirsiniz.</p>
            `;
            
            // Replace form with success message
            modalBody.insertBefore(successMessage, registerForm);
            registerForm.style.display = 'none';
            
            // Auto close after 3 seconds
            setTimeout(() => {
                closeRegisterModal();
                // Reset form for next time
                setTimeout(() => {
                    registerForm.style.display = 'block';
                    modalBody.removeChild(successMessage);
                    registerForm.reset();
                    strengthFill.className = 'strength-fill';
                    strengthText.textContent = 'Şifre gücü';
                }, 300);
            }, 3000);
        });

        function showError(message) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i>${message}`;
            registerForm.insertBefore(errorDiv, registerForm.firstChild);
        }

        // Social register buttons
        document.querySelectorAll('.register-modal .social-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                alert('Sosyal medya ile üye olma özelliği yakında eklenecek!');
            });
        });

        // Terms links
        document.querySelectorAll('.terms-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Kullanım şartları ve gizlilik politikası sayfaları yakında eklenecek!');
            });
        });
    </script>