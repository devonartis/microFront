import faker from 'faker';

let products = '';

for (let i = 0; i < 100; i++) {
  products += `
    <div class="product">
      <div class="product-image">
        <img src="${faker.image.image()}" />
      </div>
      <div class="product-info">
        <h3>${faker.commerce.productName()}</h3>
        <p>${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}</p>
        <p>${faker.commerce.price()}</p>
      </div>
    </div>
  `;
}

document.querySelector('#dev-products').innerHTML = products;

//console.log(products);
