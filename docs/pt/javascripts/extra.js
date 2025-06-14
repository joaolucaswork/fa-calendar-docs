// CalendarioReino Documentation JavaScript Enhancements

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all custom functionality
    initializeProgressBars();
    initializeMetricsCounters();
    initializeTooltips();
    initializeSearchEnhancements();
    initializePrintOptimization();
    initializeAccessibilityEnhancements();
});

/**
 * Initialize animated progress bars
 */
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar .progress');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.dataset.progress || '0';
                
                // Animate progress bar
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = targetWidth + '%';
                }, 100);
                
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => observer.observe(bar));
}

/**
 * Initialize animated metric counters
 */
function initializeMetricsCounters() {
    const metricValues = document.querySelectorAll('.metric-value[data-count]');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const targetValue = parseInt(element.dataset.count);
                const duration = parseInt(element.dataset.duration) || 2000;
                
                animateCounter(element, targetValue, duration);
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    metricValues.forEach(metric => observer.observe(metric));
}

/**
 * Animate counter from 0 to target value
 */
function animateCounter(element, targetValue, duration) {
    const startTime = performance.now();
    const startValue = 0;
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
        
        element.textContent = formatNumber(currentValue);
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = formatNumber(targetValue);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

/**
 * Format numbers with appropriate suffixes
 */
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

/**
 * Initialize enhanced tooltips
 */
function initializeTooltips() {
    // Add tooltips to status indicators
    const statusIndicators = document.querySelectorAll('.status-indicator');
    statusIndicators.forEach(indicator => {
        if (!indicator.title) {
            const status = indicator.className.split(' ').find(cls => 
                ['active', 'warning', 'error', 'info'].includes(cls)
            );
            
            const tooltips = {
                'active': 'Status: Active and operational',
                'warning': 'Status: Requires attention',
                'error': 'Status: Critical issue detected',
                'info': 'Status: Informational'
            };
            
            indicator.title = tooltips[status] || 'Status indicator';
        }
    });
    
    // Add tooltips to PRINCE2 process indicators
    const prince2Processes = document.querySelectorAll('.prince2-process');
    prince2Processes.forEach(process => {
        if (!process.title) {
            const processType = process.className.split(' ').find(cls => 
                ['initiation', 'planning', 'execution', 'monitoring', 'closure'].includes(cls)
            );
            
            const tooltips = {
                'initiation': 'PRINCE2 Process: Project Initiation',
                'planning': 'PRINCE2 Process: Planning Phase',
                'execution': 'PRINCE2 Process: Execution Phase',
                'monitoring': 'PRINCE2 Process: Monitoring & Control',
                'closure': 'PRINCE2 Process: Project Closure'
            };
            
            process.title = tooltips[processType] || 'PRINCE2 Process';
        }
    });
}

/**
 * Enhance search functionality
 */
function initializeSearchEnhancements() {
    // Add search result highlighting
    const searchInput = document.querySelector('[data-md-component="search-query"]');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(highlightSearchResults, 300));
    }
    
    // Add keyboard shortcuts for search
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('[data-md-component="search-query"]');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Escape to close search
        if (e.key === 'Escape') {
            const searchInput = document.querySelector('[data-md-component="search-query"]');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.blur();
            }
        }
    });
}

/**
 * Highlight search results in content
 */
function highlightSearchResults() {
    const searchInput = document.querySelector('[data-md-component="search-query"]');
    const searchTerm = searchInput ? searchInput.value.trim() : '';
    
    // Remove existing highlights
    document.querySelectorAll('.search-highlight').forEach(el => {
        el.outerHTML = el.innerHTML;
    });
    
    if (searchTerm.length > 2) {
        const content = document.querySelector('.md-content');
        if (content) {
            highlightText(content, searchTerm);
        }
    }
}

/**
 * Highlight text in element
 */
function highlightText(element, searchTerm) {
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    textNodes.forEach(textNode => {
        const text = textNode.textContent;
        const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
        
        if (regex.test(text)) {
            const highlightedText = text.replace(regex, '<mark class="search-highlight">$1</mark>');
            const wrapper = document.createElement('span');
            wrapper.innerHTML = highlightedText;
            textNode.parentNode.replaceChild(wrapper, textNode);
        }
    });
}

/**
 * Escape special regex characters
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Debounce function to limit function calls
 */
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

/**
 * Initialize print optimization
 */
function initializePrintOptimization() {
    // Add print button to pages
    const content = document.querySelector('.md-content');
    if (content) {
        const printButton = document.createElement('button');
        printButton.className = 'md-button md-button--primary print-button';
        printButton.innerHTML = '🖨️ Print Page';
        printButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            border-radius: 50px;
            padding: 12px 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        `;
        
        printButton.addEventListener('click', () => {
            window.print();
        });
        
        document.body.appendChild(printButton);
    }
    
    // Optimize content for printing
    window.addEventListener('beforeprint', () => {
        // Expand all collapsed sections for printing
        document.querySelectorAll('details:not([open])').forEach(details => {
            details.setAttribute('open', '');
            details.setAttribute('data-print-opened', 'true');
        });
        
        // Show all tabbed content
        document.querySelectorAll('.tabbed-set input[type="radio"]:not(:checked)').forEach(radio => {
            radio.checked = true;
            radio.setAttribute('data-print-checked', 'true');
        });
    });
    
    window.addEventListener('afterprint', () => {
        // Restore original state after printing
        document.querySelectorAll('[data-print-opened]').forEach(details => {
            details.removeAttribute('open');
            details.removeAttribute('data-print-opened');
        });
        
        document.querySelectorAll('[data-print-checked]').forEach(radio => {
            radio.checked = false;
            radio.removeAttribute('data-print-checked');
        });
    });
}

/**
 * Initialize accessibility enhancements
 */
function initializeAccessibilityEnhancements() {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--md-primary-fg-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const mainContent = document.querySelector('.md-content');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
    
    // Enhance keyboard navigation for custom elements
    document.querySelectorAll('.metric-card, .prince2-principle, .management-product').forEach(card => {
        if (!card.hasAttribute('tabindex')) {
            card.setAttribute('tabindex', '0');
        }
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
    
    // Add ARIA labels to interactive elements
    document.querySelectorAll('.progress-bar').forEach(bar => {
        if (!bar.hasAttribute('aria-label')) {
            const progress = bar.querySelector('.progress');
            const value = progress ? progress.dataset.progress : '0';
            bar.setAttribute('aria-label', `Progress: ${value}%`);
            bar.setAttribute('role', 'progressbar');
            bar.setAttribute('aria-valuenow', value);
            bar.setAttribute('aria-valuemin', '0');
            bar.setAttribute('aria-valuemax', '100');
        }
    });
}

/**
 * Initialize theme-aware Mermaid diagrams
 */
function initializeMermaidTheme() {
    if (typeof mermaid !== 'undefined') {
        // Get current theme
        const isDark = document.body.getAttribute('data-md-color-scheme') === 'slate';
        
        // Configure Mermaid theme
        mermaid.initialize({
            theme: isDark ? 'dark' : 'default',
            themeVariables: {
                primaryColor: '#3f51b5',
                primaryTextColor: isDark ? '#ffffff' : '#000000',
                primaryBorderColor: '#3f51b5',
                lineColor: isDark ? '#ffffff' : '#000000',
                secondaryColor: '#f8f9fa',
                tertiaryColor: '#e9ecef'
            }
        });
        
        // Re-render diagrams when theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-md-color-scheme') {
                    location.reload(); // Simple approach to re-render Mermaid diagrams
                }
            });
        });
        
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['data-md-color-scheme']
        });
    }
}

// Initialize Mermaid theme when available
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMermaidTheme);
} else {
    initializeMermaidTheme();
}
