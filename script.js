fetch("https://fakestoreapi.com/products").then((response) => {
  response.json().then((products) => {
    let data = "";
    for (let i = 0; i < products.length; i++) {
      data += `<div class="col">
            <p>${products[i].id}</p>
            <div class="card shadow-sm">
            <img width="350px" height="400px" src="${products[i].image}" />
              <div class="card-body">
                <p class="card-text"> ${products[i].title}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button onclick="dataGetir(${products[i].id})" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">${products[i].price} Azn</small>
                </div>
              </div>
            </div>
          </div>`;
    }
    document.querySelector("#mehsul").innerHTML = data;
  });
});

function dataGetir(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) =>
      response
        .json()
        .then((modal) => {
          document.querySelector("#modal").innerHTML = `
      <div id="modal" class="modal-body">
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">${modal.title}</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"></button>
       </div>
        <div class="modal-body">
       <p> ${modal.description} </p>
       <p> ${modal.category} </p>
       <p> ${modal.rating.count} </p>
       <p id='stars'> </p>
      </div>
    </div>`;

          let rate_length = Math.round(modal.rating.rate);
          let star = "";
          for (let i = 0; i < rate_length; i++) {
            star += `<i class="fa-solid fa-star"></i>`;
          }
          document.querySelector("#stars").innerHTML = star;
        })
        .catch((err) => console.log(err))
    )
    .catch((err) => console.log(err));
}

// let modal_id = document.querySelector('#modal');

// fetch("https://fakestoreapi.com/products/8").then((response) => {
//     response.json().then((modal) => {
//       modal_id.innerHTML = `<div id="modal" class="modal-body">
//       <p> ${modal.description}</p>
//       <p> ${modal.category}</p>
//       <p> </p>
//   </div>`
//     });
// });

navbar999.addEventListener('click', () => {
  fetch("https://fakestoreapi.com/products/categories").then(response => {
    response.json()
    .then(data=> {

      let data_al = "";
      for(let i = 0; i < data.length; i++) {
        data_al += `
        <li><a class="dropdown-item" href="#"> ${data[i]} </a></li>
      `
      }
      document.querySelector('#ul').innerHTML = data_al;
    })
  })
});
