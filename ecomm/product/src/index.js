import faker from 'faker';

let products = '';

for (let i = 0; i < 3; i++) {
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

//document.querySelector('#products').innerHTML = products;

console.log(products);
