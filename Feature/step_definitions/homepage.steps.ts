import {Given, When} from '@wdio/cucumber-framework';
import { getTemperatureFromUI } from '../../main/homepage/actions/homepage.actions';
import { addLeastExpensiveAloeProductToCart} from '../../main/moisturizers/actions/moisturizers.actions';
import { addLeastExpensiveAlmondProductToCart} from '../../main/moisturizers/actions/moisturizers.actions';
import { addToCart} from '../../main/moisturizers/Assertion/moisturizers.assertion';
import { addToCartProduct} from '../../main/sunscreens/Assertion/sunscreens.assertion';
import { addLeastExpensiveSpf50SunscreenToCart} from '../../main/sunscreens/actions/sunscreens.actions';
import { addLeastExpensiveSpf30SunscreenToCart} from '../../main/sunscreens/actions/sunscreens.actions';
import {paymentDetails} from "../../main/paymentPage/Tasks/checkOut.tasks";
import {textFields} from "../../main/paymentPage/Tasks/checkOut.tasks";


Given('User is at Weather shopper website', async function ()  {
 await browser.url('https://weathershopper.pythonanywhere.com/');
});

When('User sees the temperature displayed and decides what category to choose', async function(){
	const page = await getTemperatureFromUI()
    if (page == "moisturizers"){
    await addLeastExpensiveAloeProductToCart()
    await addLeastExpensiveAlmondProductToCart()
    await addToCart()

    }

    else{
        await addLeastExpensiveSpf50SunscreenToCart()
        await addLeastExpensiveSpf30SunscreenToCart()
        await addToCartProduct()


    }


});


// Given ('the user is on the moisturizer page', async function(){
//     await browser.url('https://weathershopper.pythonanywhere.com/moisturizer');
// });

// When ('the user adds least expensive moisturizer to the cart that contains Aloe and the user adds least expensive moisturizer to the cart that contains almond', async function(){
//     await addLeastExpensiveAloeProductToCart()
//     await addLeastExpensiveAlmondProductToCart()
//     //await browser.pause(15000)


//  });

// Then('the shopping cart should contain both items' , async function(){
//      await addToCart()
     

//  });



// Given('the user is on the sunscreen page' , async function(){
//     await browser.url('https://weathershopper.pythonanywhere.com/sunscreen');

// });
 
// When('the user adds least expensive sunscreen to the cart that contains SPF-50 and adds least expensive sunscreen to the cart that contains SPF-30' , async function(){
//     await addLeastExpensiveSpf50SunscreenToCart()
//      await addLeastExpensiveSpf30SunscreenToCart()
//         //await browser.pause(15000)
// });
  
// Then('the shopping cart should contain both items' , async function(){
//     await addToCartProduct()
// });

Given('the user is on the Payment Page' , async function(){
    await paymentDetails()

});

When('user enters the payment details into the form then payment is sucessfull' , async function(){
   await textFields()
   

   
});

