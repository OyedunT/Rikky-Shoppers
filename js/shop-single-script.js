let singleProductContainer = document.getElementById('singleProductContainer')
  let product = JSON.parse(localStorage.getItem("${productid}"));
  singleProductContainer.innerHTML = `
  <div class="card">
  <img src="${element.images[0]}" />  
  <h5>${element.title}</h5>  
  <h6>${element.description}</h6>
  <h6>${element.price}</h6>

  <button class="show-more-btn" onclick="ShowMore(event, '${element.id}')">ShowMore</button>
</div>`;

function showMore(event, id) {
    event.preventDefault();
    localStorage.setItem("selectedProductId", id);
    window.location.href = "checkout.html";
  }