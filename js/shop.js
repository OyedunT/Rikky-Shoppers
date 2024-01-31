const screen = document.getElementById('screen');

function fetchAllProducts() {
  fetch('https://dummyjson.com/products')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network error');
      }
      return response.json();
    })
    .then((res) => {
      console.log(res.products);
      const allProducts = res.products;
      localStorage.setItem("allProd", JSON.stringify(allProducts));
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
}

fetchAllProducts();

function dispAllProd() {
    const products = JSON.parse(localStorage.getItem("allProd"));
    console.log(products);
  
    products.forEach(element => {
      const card = `
      <a class="card col-lg-2 col-sm-4 itemcard" style="width: 50rem;" href="shop-single.html?id=${element.id}">
              <div class="card">
                  <img src="${element.images[0]}" />  
                  <h5>${element.title}</h5>  
                  <h6>${element.description}</h6>
                  <h6>$${element.price}</h6>

                  <button class="show-more-btn" onclick="ShowMore(event, '${element.id}')">ShowMore</button>
              </div>
              </a>
          `;
      screen.innerHTML += card;
    });
  }
  
  dispAllProd()

  function showMore(event, id) {
    event.preventDefault();
    localStorage.setItem("selectedProductId", id);
    window.location.href = "shop-single.html";
  }
