let bar = document.getElementById('bar')
let navbar = document.getElementById('navbar')
let no = document.getElementById('noP')
bar.addEventListener('click', function(){
    navbar.classList.toggle('show')
    no.classList.toggle('no')
})
fetch('menu-items.json')
    .then(response => response.json())
    .then(menuItems => {
        const menuContainer = document.getElementById('menu-container');
        menuItems.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('menu-item');
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="order-btn">Order Now</button>
            `;
            menuContainer.appendChild(div);
        });

        // সব newly added button select করে click listener যোগ করো
        document.querySelectorAll('.order-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                alert("✅ Thank you! This is a sample order confirmation from my Fiverr gig. No real order has been placed.");
            });
        });
    })
    .catch(error => console.error("Menu loading error:", error));


      // Accordion functionality
  const faqItems = document.querySelectorAll(".faq-question");

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });