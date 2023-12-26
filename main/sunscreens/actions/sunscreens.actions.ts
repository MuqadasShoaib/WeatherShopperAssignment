import { sunscreenProductParagraphsSelector, getSpf50AndSpf30Sunscreens } from "../user_interface/sunscreens.selectors";
export let addedProducts:any[] = [];
export async function addLeastExpensiveSpf50SunscreenToCart() {
  const products = await $$(sunscreenProductParagraphsSelector);

  let spf50Products: any[] = [];
  for (const el of products) {
    const name = await el.getText();
    if (name.toLowerCase().includes('spf-50')) {
      let priceParagraph = await el.nextElement();
      let productPrice: any = await priceParagraph.getText();
      productPrice = productPrice.match(/[\d]+/g);
      let price = 0;
      if (productPrice && productPrice.length > 0) {
        price = parseInt(productPrice[0], 10);
      }
      spf50Products.push({ 'products': el, 'price': price, 'name': name });
      //console.log(spf50Products)
    }
  }

  var minPrice = Number.MAX_VALUE;
  var minPriceObject: any = null;

  spf50Products.forEach(function (product) {
    // Check if the current object has a lower price than the minimum price
    if (product.price < minPrice) {
      minPrice = product.price;
      minPriceObject = product;
    }
  });

  if (minPriceObject) {
    const addButton = await $(getSpf50AndSpf30Sunscreens(minPriceObject.name));
    await addButton.click();
    addedProducts.push(minPriceObject.name);
  }
}

// Adding SPF-30 Product to the cart
export async function addLeastExpensiveSpf30SunscreenToCart() {
  const products = await $$(sunscreenProductParagraphsSelector);

  let spf30Products: any[] = [];
  for (const el of products) {
    const name = await el.getText();
    if (name.toLowerCase().includes('spf-30')) {
      let priceParagraph = await el.nextElement();
      let productPrice: any = await priceParagraph.getText();
      productPrice = productPrice.match(/[\d]+/g);
      let price = 0;
      if (productPrice && productPrice.length > 0) {
        price = parseInt(productPrice[0], 10);
      }
      spf30Products.push({ 'products': el, 'price': price, 'name': name });
      
    }
  }

  var minPrice = Number.MAX_VALUE;
  var minPriceObject: any = null;

  spf30Products.forEach(function (product) {
    // Check if the current object has a lower price than the minimum price
    if (product.price < minPrice) {
      minPrice = product.price;
      minPriceObject = product;
    }
  });

  if (minPriceObject) {
    const addButton = await $(getSpf50AndSpf30Sunscreens(minPriceObject.name));
    await addButton.click();
    addedProducts.push(minPriceObject.name);

  }
}
