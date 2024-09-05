let divData = document.getElementById("divData");

function getData() {
    const promesa = fetch("https://freetestapi.com/api/v1/products", { method: "GET" }); // cierre fetch
    promesa.then((Response) => {
        Response.json().then(
            (data) => {
                console.log(data);
                createCards(data);
            }).catch((error) => console.log("Problema con el JSON", error));
    })
        .catch((err) => console.log("Existió un problema con la solicitud", err));
} // cierre getData


// función para crear las tarjetas
function createCards(products) {
    console.log(products.length);
    console.log(products[0].name);

    products.forEach(product => {
        // HTML pa la card
        let cardHTML = 
        `
        <div class="col-md-4 mb-4">
            <div class="card" style="width: 100%">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-name"> ${product.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Description: ${product.description}</li>
                    <li class="list-group-item">Price: ${product.price}</li>
                    <li class="list-group-item">Rating: ${product.rating}</li>
                    <li class="list-group-item">brand: ${product.brand}</li>
                    <li class="list-group-item">color: ${product.color}</li>
                    <li class="list-group-item">connectivity: ${product.connectivity}</li>
                    <li class="list-group-item">wireless: ${product.wireless}</li>
                </ul>
            </div>
        </div>
        `;
        divData.insertAdjacentHTML('beforeend', cardHTML)
    }); // cierre forEach
} //cierre createCards


getData();

// ir a bootstrap y copiar unos cards de producto y poner en divData
// recorrer productos y crear card por cada producto con sus datos escenciales (nombre, descripción, precio e imagen)