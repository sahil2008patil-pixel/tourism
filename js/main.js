// Main JavaScript - Tourism Website Functionality

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initSmoothScroll();
    initScrollReveal();
    initCounterAnimation();
    activateCurrentPage();
});

// ==================== NAVBAR FUNCTIONALITY ====================
function initNavbar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle?.classList.remove('active');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            navLinks?.classList.remove('active');
            menuToggle?.classList.remove('active');
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

// ==================== ACTIVE PAGE HIGHLIGHTING ====================
function activateCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==================== SCROLL REVEAL ANIMATION ====================
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-item').forEach(el => {
        observer.observe(el);
    });
}

// ==================== COUNTER ANIMATION ====================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter-value');
    if (counters.length === 0) return;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// ==================== DESTINATIONS PAGE ====================
function renderDestinations(destinations = destinationsData) {
    const container = document.getElementById('destinations-container');
    if (!container) return;

    if (destinations.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No destinations found. Try a different search or filter.</p></div>';
        return;
    }

    container.innerHTML = destinations.map(destination => `
        <article class="destination-card reveal-item">
            <img src="${destination.image}" alt="${destination.name}" class="destination-image">
            <div class="destination-info">
                <div class="destination-tag">${destination.category}</div>
                <h3 class="destination-name">${destination.name}</h3>
                <p class="destination-region">📍 ${destination.region}</p>
                <p class="destination-description">${destination.description}</p>
                <div class="attractions">
                    ${destination.attractions.map(attr => `<span class="attraction-badge">${attr}</span>`).join('')}
                </div>
                <button class="btn-primary" onclick="bookDestination('${destination.name}')">Explore Now</button>
            </div>
        </article>
    `).join('');

    initScrollReveal();
}

function filterDestinationsByRegion(region) {
    const filtered = region === 'all' 
        ? destinationsData 
        : destinationsData.filter(dest => dest.region === region);
    renderDestinations(filtered);
    updateActiveFilter('region-filters', region);
}

function filterDestinationsByCategory(category) {
    const filtered = category === 'all'
        ? destinationsData
        : destinationsData.filter(dest => dest.category === category);
    renderDestinations(filtered);
    updateActiveFilter('category-filters', category);
}

function searchDestinations(query) {
    const filtered = destinationsData.filter(dest => 
        dest.name.toLowerCase().includes(query.toLowerCase()) ||
        dest.description.toLowerCase().includes(query.toLowerCase()) ||
        dest.region.toLowerCase().includes(query.toLowerCase())
    );
    renderDestinations(filtered);
}

function updateActiveFilter(containerId, activeValue) {
    const container = document.getElementById(containerId);
    if (container) {
        container.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = container.querySelector(`[data-value="${activeValue}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
}

function bookDestination(destinationName) {
    alert(`🎉 Great choice! Booking ${destinationName}...\n\nPlease proceed to our Contact page to complete your booking.`);
    window.location.href = 'contact.html';
}

// ==================== PACKAGES PAGE ====================
function renderPackages(packages = packagesData) {
    const container = document.getElementById('packages-container');
    if (!container) return;

    if (packages.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No packages found. Try a different filter.</p></div>';
        return;
    }

    container.innerHTML = packages.map(pkg => `
        <article class="package-card reveal-item">
            <img src="${pkg.image}" alt="${pkg.name}" class="package-image">
            <div class="package-overlay">
                <button class="btn-secondary" onclick="viewPackageDetails(${pkg.id})">View Details</button>
            </div>
            <div class="package-info">
                <span class="package-category">${pkg.category}</span>
                <h3 class="package-name">${pkg.name}</h3>
                <p class="package-duration">⏱️ ${pkg.duration}</p>
                <p class="package-description">${pkg.description}</p>
                <div class="package-highlights">
                    <strong>Highlights:</strong>
                    ${pkg.highlights.slice(0, 2).map(h => `<span>• ${h}</span>`).join('')}
                </div>
                <div class="package-footer">
                    <span class="package-price">${pkg.price}</span>
                    <button class="btn-primary" onclick="bookPackage('${pkg.name}', '${pkg.price}')">Book Now</button>
                </div>
            </div>
        </article>
    `).join('');

    initScrollReveal();
}

function filterPackagesByCategory(category) {
    const filtered = category === 'all'
        ? packagesData
        : packagesData.filter(pkg => pkg.category === category);
    renderPackages(filtered);
    updateActiveFilter('category-filters', category);
}

function viewPackageDetails(packageId) {
    const pkg = packagesData.find(p => p.id === packageId);
    if (!pkg) return;

    const detailsHTML = `
        <div class="modal-content">
            <h2>${pkg.name}</h2>
            <p><strong>Duration:</strong> ${pkg.duration}</p>
            <p><strong>Price:</strong> ${pkg.price}</p>
            <h3>Description</h3>
            <p>${pkg.description}</p>
            <h3>What's Included</h3>
            <ul>
                ${pkg.included.map(item => `<li>✓ ${item}</li>`).join('')}
            </ul>
            <h3>Highlights</h3>
            <ul>
                ${pkg.highlights.map(item => `<li>★ ${item}</li>`).join('')}
            </ul>
            <button class="btn-primary" onclick="bookPackage('${pkg.name}', '${pkg.price}')">Book This Package</button>
            <button class="btn-secondary" onclick="closeModal()">Close</button>
        </div>
    `;

    showModal(detailsHTML);
}

function bookPackage(packageName, price) {
    alert(`🎉 Excellent choice!\n\nPackage: ${packageName}\nPrice: ${price}\n\nProceed to contact us to complete your booking.`);
    closeModal();
}

// ==================== MODAL FUNCTIONALITY ====================
function showModal(content) {
    let modal = document.getElementById('modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal';
        modal.className = 'modal';
        modal.innerHTML = '<div class="modal-wrapper"><button class="modal-close" onclick="closeModal()">×</button><div class="modal-body"></div></div>';
        document.body.appendChild(modal);
    }

    modal.querySelector('.modal-body').innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ==================== GALLERY PAGE ====================
function renderGallery(gallery = galleryImages) {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    container.innerHTML = gallery.map((image, index) => `
        <div class="gallery-item reveal-item" onclick="openLightbox(${index})">
            <img src="${image.image}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-info">
                    <p>${image.title}</p>
                    <span class="gallery-category">${image.category}</span>
                </div>
            </div>
        </div>
    `).join('');

    initScrollReveal();
}

function filterGallerByCategory(category) {
    const filtered = category === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === category);
    renderGallery(filtered);
    updateActiveFilter('category-filters', category);
}

let currentLightboxIndex = 0;

function openLightbox(index) {
    currentLightboxIndex = index;
    displayLightbox();
}

function displayLightbox() {
    const image = galleryImages[currentLightboxIndex];
    let lightbox = document.getElementById('lightbox');
    
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close" onclick="closeLightbox()">×</button>
            <button class="lightbox-prev" onclick="prevLightbox()">❮</button>
            <div class="lightbox-content">
                <img id="lightbox-image" src="" alt="">
                <div class="lightbox-info">
                    <p id="lightbox-title"></p>
                    <span id="lightbox-category" class="lightbox-category"></span>
                </div>
            </div>
            <button class="lightbox-next" onclick="nextLightbox()">❯</button>
        `;
        document.body.appendChild(lightbox);
    }

    document.getElementById('lightbox-image').src = image.image;
    document.getElementById('lightbox-title').textContent = image.title;
    document.getElementById('lightbox-category').textContent = image.category;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    displayLightbox();
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    displayLightbox();
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'Escape') closeLightbox();
    }
});

// ==================== CONTACT PAGE - FORM VALIDATION ====================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        if (validateContactForm(formData)) {
            showFormSuccess(formData);
            contactForm.reset();
        }
    });

    // Real-time validation
    ['name', 'email', 'subject', 'message'].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', function() {
                validateField(fieldId);
            });
            field.addEventListener('input', function() {
                clearFieldError(fieldId);
            });
        }
    });
}

function validateContactForm(data) {
    let isValid = true;

    if (!data.name || data.name.length < 2) {
        showFieldError('name', 'Name must be at least 2 characters');
        isValid = false;
    }

    if (!isValidEmail(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!data.subject || data.subject.length < 3) {
        showFieldError('subject', 'Subject must be at least 3 characters');
        isValid = false;
    }

    if (!data.message || data.message.length < 10) {
        showFieldError('message', 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    const value = field.value.trim();
    let isValid = true;
    let errorMsg = '';

    switch(fieldId) {
        case 'name':
            if (value.length < 2) {
                isValid = false;
                errorMsg = 'Name must be at least 2 characters';
            }
            break;
        case 'email':
            if (!isValidEmail(value)) {
                isValid = false;
                errorMsg = 'Please enter a valid email address';
            }
            break;
        case 'subject':
            if (value.length < 3) {
                isValid = false;
                errorMsg = 'Subject must be at least 3 characters';
            }
            break;
        case 'message':
            if (value.length < 10) {
                isValid = false;
                errorMsg = 'Message must be at least 10 characters';
            }
            break;
    }

    if (!isValid) {
        showFieldError(fieldId, errorMsg);
    } else {
        clearFieldError(fieldId);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    field.classList.add('error');
    
    let errorDiv = field.parentElement.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('span');
        errorDiv.className = 'error-message';
        field.parentElement.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    field.classList.remove('error');
    const errorDiv = field.parentElement.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.textContent = '';
    }
}

function showFormSuccess(formData) {
    const successMsg = `
        Thank you for your message, ${formData.name}! ✨
        
        We've received your inquiry about "${formData.subject}" and will get back to you at ${formData.email} within 24 hours.
        
        Safe travels!
    `;
    alert(successMsg);
}

// Initialize contact form on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
} else {
    initContactForm();
}

// ==================== UTILITY FUNCTIONS ====================
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize on page load
window.addEventListener('load', function() {
    // Initialize destinations if on destinations page
    const destinationsContainer = document.getElementById('destinations-container');
    if (destinationsContainer) {
        renderDestinations();
    }

    // Initialize packages if on packages page
    const packagesContainer = document.getElementById('packages-container');
    if (packagesContainer) {
        renderPackages();
    }

    // Initialize gallery if on gallery page
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        renderGallery();
    }
});
