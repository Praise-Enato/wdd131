// DOM Elements
const tipContainer = document.getElementById('tipContainer');
const productLists = document.querySelectorAll('.product-list');
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

// Data
const wigTips = [
    { title: "Washing", content: "Use sulfate-free shampoo for human hair wigs." },
    { title: "Drying", content: "Always air-dry on a wig stand to maintain shape." },
    { title: "Styling", content: "Use low heat (under 300°F) for synthetic fibers." }
];

const products = {
    shampoos: [
        { name: "Sulfate-Free Shampoo", desc: "Gentle cleansing for human hair wigs" },
        { name: "Wig-Specific Shampoo", desc: "Formulated for synthetic fibers" }
    ],
    styling: [
        { name: "Heat Protectant Spray", desc: "For human hair wigs up to 350°F" },
        { name: "Wig Detangler", desc: "Alcohol-free formula" }
    ]
};

// Functions
function displayTips() {
    if (tipContainer) {
        tipContainer.innerHTML = wigTips.map(tip => `
            <div class="tip-card">
                <h3>${tip.title}</h3>
                <p>${tip.content}</p>
            </div>
        `).join('');
    }
}

function displayProducts() {
    productLists.forEach(list => {
        const category = list.parentElement.id;
        if (products[category]) {
            list.innerHTML = products[category].map(product => `
                <div class="product">
                    <h4>${product.name}</h4>
                    <p>${product.desc}</p>
                </div>
            `).join('');
        }
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        question: document.getElementById('question').value,
        message: document.getElementById('message').value
    };
    
    // Save to localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    
    // Show response
    formResponse.innerHTML = `
        <p class="success">Thank you, ${formData.name}! We'll respond within 24 hours.</p>
    `;
    
    // Reset form
    e.target.reset();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayTips();
    displayProducts();
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Load saved data if exists
        const savedData = localStorage.getItem('contactFormData');
        if (savedData) {
            const data = JSON.parse(savedData);
            document.getElementById('name').value = data.name || '';
            document.getElementById('email').value = data.email || '';
        }
    }

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
        });
    }
});