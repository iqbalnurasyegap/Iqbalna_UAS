// toggle &responsive navigasi
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navList = document.querySelector("nav")

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

//hapus form sebelum unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}

const textContainer =
document.getElementById("text-container");
let hue = 0;

const animateText = () => {
hue = (hue + 1) % 360;
const color = `hsl(${hue}, 100%, 50%)`;
const shadowColor = `hsla(${hue}, 100%, 50%, 0.3)`;
textContainer.style.color = color;
textContainer.style.textShadow 
    = `2px 2px 4px ${shadowColor}`;

// Continuously animate the text
requestAnimationFrame(animateText);
};

// Start the animation
animateText();

//json
document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan referensi ke elemen kontainer saham
    var stockContainer = document.getElementById("stock-container");
  
    // Mendefinisikan URL REST API (gantilah dengan URL yang sesuai)
    var apiUrl = "https://api.reku.id/v2/bidask";
  
    // Mengambil data dari REST API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Memproses data dan menambahkannya ke dalam elemen HTML
        data.forEach(stock => {
          var stockElement = document.createElement("div");
          stockElement.classList.add("stock");
          stockElement.innerHTML = `
            <p>Acc ID: ${stock.accid}</p>
            <p>Code: ${stock.code}</p>
            <p>Change Percentage: ${stock.changepct}</p>
            <p>Bid: ${stock.bid}</p>
            <p>Ask: ${stock.ask}</p>
          `;
          stockContainer.appendChild(stockElement);
        });
      })
      .catch(error => console.error("Error fetching data:", error));
  });



  // Seacrh Masih Eror :)
  function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    fetch('https://api.reku.id/v2/bidask') // Ganti URL_REST_API dengan URL yang sesuai
        .then(response => response.json())
        .then(data => {
            const criptoArray = Array.isArray(data.cripto) ? data.cripto : [];

            const filteredCripto = criptoArray.filter(cripto => {
                return cripto.accid.toLowerCase().includes(searchTerm);
            });

            displayProducts(filteredCripto);
        })
        .catch(error => console.error('Error fetching data:', error));
}