//import { cartPage} from "../user_interface/moisturizers.selectors";
import { addToCartButtonSelector, cartElements} from "../user_interface/moisturizers.selectors";
import * as assert from 'soft-assert';
import {addedProducts} from '../actions/moisturizers.actions';
export async function addToCart() {
    const cartButton = await $(addToCartButtonSelector);
    await cartButton.click()
   const products = await $$(cartElements)
   
        let cartProducts: any[] = [];
       for( const el of products){
         cartProducts.push( await el.getText())
        }
      //   console.log(cartProducts)
      //   console.log(addedProducts)

       assert.softAssert( cartProducts, addedProducts, 'there should be 2 items in the cart',[]);
       assert.softAssertAll();
     
}