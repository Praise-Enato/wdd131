// Temple data array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional temples
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 382207,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669.jpg"
    },
    {
      templeName: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 41010,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642.jpg"
    },
    {
      templeName: "Kona Hawaii Temple",
      location: "Kailua-Kona, Hawaii, United States",
      dedicated: "2000, January, 23",
      area: 12325,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-40578-main.jpg"
    }
  ];
  
  // DOM elements
const templeCardsContainer = document.getElementById('temple-cards');
const navLinks = document.querySelectorAll('#nav-menu a');
const pageTitle = document.querySelector('main h1');
const pageSubtitle = document.getElementById('page-subtitle');

// Function to create temple card HTML
function createTempleCard(temple) {
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    
    return `
      <div class="temple-card">
        ${img.outerHTML}
        <div class="temple-info">
          <h3>${temple.templeName}</h3>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </div>
      </div>
    `;
}

// Function to display temples based on filter
function displayTemples(filter) {
    let filteredTemples = [];
    let subtitle = "Discover Sacred Temples";
    
    switch(filter) {
        case 'old':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year < 1900;
            });
            subtitle = "Historical Temples (Before 1900)";
            break;
        case 'new':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0]);
                return year > 2000;
            });
            subtitle = "Modern Temples (After 2000)";
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            subtitle = "Large Temples (Over 90,000 sq ft)";
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            subtitle = "Small Temples (Under 10,000 sq ft)";
            break;
        default:
            filteredTemples = temples;
            subtitle = "Discover Sacred Temples";
    }
    
    templeCardsContainer.innerHTML = filteredTemples.map(createTempleCard).join('');
    pageSubtitle.textContent = subtitle;
} 
  // Event listeners for navigation
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      
      // Update active link
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      e.target.classList.add('active');
      
      // Display filtered temples
      displayTemples(filter);
    });
  });
  
  // Initialize page
  document.addEventListener('DOMContentLoaded', () => {
    // Display all temples initially
    displayTemples('all');
    
    // Update footer year and last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
    
    // Hamburger menu toggle for mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });