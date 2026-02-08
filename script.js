// Global variables
let currentPage = 0;
let totalPages = 0;
let bookPages = [];

// Create neon background elements
function createNeonBackground() {
    const neonBg = document.createElement('div');
    neonBg.className = 'neon-bg';
    
    // Create grid
    const neonGrid = document.createElement('div');
    neonGrid.className = 'neon-grid';
    neonBg.appendChild(neonGrid);
    
    // Create pulse
    const neonPulse = document.createElement('div');
    neonPulse.className = 'neon-pulse';
    neonBg.appendChild(neonPulse);
    
    // Create orbs
    const neonOrbs = document.createElement('div');
    neonOrbs.className = 'neon-orbs';
    
    for (let i = 0; i < 3; i++) {
        const orb = document.createElement('div');
        orb.className = 'neon-orb';
        neonOrbs.appendChild(orb);
    }
    neonBg.appendChild(neonOrbs);
    
    // Create lines
    const neonLines = document.createElement('div');
    neonLines.className = 'neon-lines';
    
    for (let i = 0; i < 3; i++) {
        const line = document.createElement('div');
        line.className = 'neon-line';
        neonLines.appendChild(line);
    }
    neonBg.appendChild(neonLines);
    
    // Add to body
    document.body.insertBefore(neonBg, document.body.firstChild);
    
    // Create additional floating particles
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'neon-orb';
        particle.style.width = `${Math.random() * 50 + 30}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.background = `radial-gradient(circle, rgba(0, ${195 + Math.random() * 60}, 255, 0.2), transparent 70%)`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `-${Math.random() * 20}s`;
        neonOrbs.appendChild(particle);
    }
}

// Initialize book
function initBook(pagesData) {
    bookPages = pagesData;
    totalPages = bookPages.length + 1; // +1 for the back cover
    const book = document.getElementById('book');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');

    // Set total pages
    totalPagesSpan.textContent = totalPages;

    // Create pages
    createPages(bookPages);
    
    // Event listeners
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);
    book.addEventListener('click', handleBookClick);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextPage();
        } else if (e.key === 'ArrowLeft') {
            prevPage();
        }
    });
    
    updateBookPosition();
    updateButtons();
}

// Create pages
function createPages(pagesData) {
    const book = document.getElementById('book');
    book.innerHTML = '';
    
    // Create front cover
    const frontCover = document.createElement('div');
    frontCover.className = 'page';
    frontCover.style.left = '50%';
    frontCover.style.zIndex = totalPages + 1;
    frontCover.innerHTML = `
        <div class="page-front" style="background: linear-gradient(135deg, #001133, #0a0a2a); color: white; justify-content: center; align-items: center; text-align: center;">
            <div>
                <h1 style="font-size: 2.8rem; margin-bottom: 20px; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${pagesData[0].bookTitle || 'Calculus Lesson'}</h1>
                <p style="font-size: 1.5rem; margin-bottom: 10px; color: #00c3ff;">Interactive Learning</p>
                <div style="margin: 40px 0;">
                    <i class="fas fa-calculator" style="font-size: 5rem; color: #00c3ff; opacity: 0.9;"></i>
                    <i class="fas fa-chart-line" style="font-size: 5rem; color: #0077ff; opacity: 0.9; margin: 0 20px;"></i>
                    <i class="fas fa-shapes" style="font-size: 5rem; color: #00c3ff; opacity: 0.9;"></i>
                </div>
                <p style="font-size: 1.2rem; font-style: italic; margin-top: 40px; color: rgba(0, 195, 255, 0.9);">Flip the page to begin your lesson</p>
            </div>
            <div class="page-number" style="color: rgba(255,255,255,0.7);">Cover</div>
        </div>
        <div class="page-back">
            <div class="page-header">${pagesData[0].title}</div>
            <div class="page-content">${pagesData[0].content}</div>
            <div class="page-number">Page 1</div>
        </div>
    `;
    book.appendChild(frontCover);
    
    // Create inner pages (back-to-back)
    for (let i = 1; i < totalPages - 1; i++) {
        const page = document.createElement('div');
        page.className = 'page';
        page.style.left = '50%';
        page.style.zIndex = totalPages - i;
        page.innerHTML = `
            <div class="page-front">
                <div class="page-header">${pagesData[i-1].title}</div>
                <div class="page-content">${pagesData[i-1].content}</div>
                <div class="page-number">Page ${i}</div>
            </div>
            <div class="page-back">
                <div class="page-header">${pagesData[i].title}</div>
                <div class="page-content">${pagesData[i].content}</div>
                <div class="page-number">Page ${i+1}</div>
            </div>
        `;
        book.appendChild(page);
    }
    
    // Create back cover
    const backCover = document.createElement('div');
    backCover.className = 'page';
    backCover.style.left = '50%';
    backCover.style.zIndex = 1;
    backCover.innerHTML = `
        <div class="page-front">
            <div class="page-header">${pagesData[totalPages-2].title}</div>
            <div class="page-content">${pagesData[totalPages-2].content}</div>
            <div class="page-number">Page ${totalPages-1}</div>
        </div>
        <div class="page-back" style="background: linear-gradient(135deg, #001133, #0a0a2a); color: white; justify-content: center; align-items: center; text-align: center;">
            <div>
                <h1 style="font-size: 2.8rem; margin-bottom: 20px; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Lesson Complete!</h1>
                <p style="font-size: 1.5rem; margin-bottom: 10px; color: #00c3ff;">You've mastered this concept</p>
                <div style="margin: 40px 0;">
                    <i class="fas fa-graduation-cap" style="font-size: 5rem; color: #00c3ff; opacity: 0.9;"></i>
                    <i class="fas fa-award" style="font-size: 5rem; color: #0077ff; opacity: 0.9; margin: 0 20px;"></i>
                    <i class="fas fa-star" style="font-size: 5rem; color: #00c3ff; opacity: 0.9;"></i>
                </div>
                <p style="font-size: 1.2rem; font-style: italic; margin-top: 40px; color: rgba(0, 195, 255, 0.9);">Return to the index to continue learning!</p>
            </div>
            <div class="page-number" style="color: rgba(255,255,255,0.7);">Back Cover</div>
        </div>
    `;
    book.appendChild(backCover);
}

// Update book position based on current page
function updateBookPosition() {
    // Position pages based on current page
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        // Set z-index so later pages appear on top
        page.style.zIndex = totalPages - index;
        
        // Flip pages that are before current page
        if (index < currentPage) {
            page.style.transform = 'rotateY(-180deg)';
        } else {
            page.style.transform = 'rotateY(0deg)';
        }
    });
    
    // Update page indicator
    const currentPageSpan = document.getElementById('current-page');
    if (currentPage === 0) {
        currentPageSpan.textContent = 'Cover';
    } else if (currentPage === totalPages) {
        currentPageSpan.textContent = 'End';
    } else {
        currentPageSpan.textContent = currentPage;
    }
}

// Update button states
function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages;
}

// Flip to next page
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updateBookPosition();
        updateButtons();
        
        // Add flipping animation to current page
        const pages = document.querySelectorAll('.page');
        if (currentPage > 0 && currentPage <= pages.length) {
            const pageToFlip = pages[currentPage - 1];
            pageToFlip.classList.add('flipped');
            setTimeout(() => {
                pageToFlip.classList.remove('flipped');
            }, 1200);
        }
    }
}

// Flip to previous page
function prevPage() {
    if (currentPage > 0) {
        // Add flipping animation to previous page
        const pages = document.querySelectorAll('.page');
        if (currentPage > 0 && currentPage <= pages.length) {
            const pageToFlip = pages[currentPage - 1];
            pageToFlip.classList.add('flipped');
            setTimeout(() => {
                pageToFlip.classList.remove('flipped');
            }, 1200);
        }
        
        currentPage--;
        updateBookPosition();
        updateButtons();
    }
}

// Handle click on book edges for flipping
function handleBookClick(e) {
    const book = document.getElementById('book');
    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // Click on right third of book to go forward
    if (x > width * 0.66 && currentPage < totalPages) {
        nextPage();
    }
    // Click on left third of book to go backward
    else if (x < width * 0.33 && currentPage > 0) {
        prevPage();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create neon background
    createNeonBackground();
    
    // Add interactive cursor effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        const pulse = document.querySelector('.neon-pulse');
        if (pulse) {
            pulse.style.background = `
                radial-gradient(circle at ${x}% ${y}%, rgba(0, 195, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(0, 119, 255, 0.3) 0%, transparent 50%)
            `;
        }
    });
    
    // Animate cards on index page
    const cards = document.querySelectorAll('.lesson-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 150 * index);
    });
});