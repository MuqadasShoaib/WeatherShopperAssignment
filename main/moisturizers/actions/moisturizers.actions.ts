import { moisturizerProductParagraphsSelector,getAloeAndAlmondMoisturizers} from "../user_interface/moisturizers.selectors";
export let addedProducts:any[] = [];

export async function addLeastExpensiveAloeProductToCart() {
    const products = await $$(moisturizerProductParagraphsSelector)
     
   let aloeProducts: any[] = [];
   for( const el of products){
   const name = await el.getText()
        if (name.toLowerCase().indexOf('aloe') !== -1){
            let priceParagraph = await el.nextElement();
            let productPrice:any = await priceParagraph.getText()
             productPrice =  productPrice.match(/[\d]+/g)
             let price = 0
             if (productPrice.length > 0) {
                price = productPrice[0]
             }
            aloeProducts.push({'products':el, 'price':price, 'name': name})
        }

   }
    
var minPrice = Number.MAX_VALUE;
var minPriceObject:any = null;

aloeProducts.forEach( function(product) {
  // Check if the current object has a lower price than the minimum price
  if (product.price < minPrice) {
    minPrice = product.price;
    minPriceObject = product;
  }
});

if (minPriceObject) {
    
    const addButton = await $(getAloeAndAlmondMoisturizers(minPriceObject.name));
    await addButton.click();
    addedProducts.push(minPriceObject.name);
    
    //await browser.pause(15000)
  }
 }
//Adding Almonds to the cart
 export async function addLeastExpensiveAlmondProductToCart() {
    const products = await $$(moisturizerProductParagraphsSelector)
  
 let almondProducts: any[] = [];
 for( const el of products){
      const name = await el.getText()
      if (name.toLowerCase().indexOf('almond') !== -1){
          let priceParagraph = await el.nextElement();
          let productPrice:any = await priceParagraph.getText()
           productPrice =  productPrice.match(/[\d]+/g)
           let price = 0
           if (productPrice.length > 0) {
              price = productPrice[0]
           }
          almondProducts.push({'products':el, 'price':price, 'name': name})
        
      }
 }
  
var minPrice = Number.MAX_VALUE;
var minPriceObject:any = null;

almondProducts.forEach( function(product) {
// Check if the current object has a lower price than the minimum price
if (product.price < minPrice) {
  minPrice = product.price;
  minPriceObject = product;
}
});

if (minPriceObject) {
  
  const addButton = await $(getAloeAndAlmondMoisturizers(minPriceObject.name));
  await addButton.click();
  addedProducts.push(minPriceObject.name);
}
 }



