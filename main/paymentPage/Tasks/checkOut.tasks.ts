import { payWithCardButton,iframeSelector,emailTextField,cardNumberTextField,monthYearTextField,cvcTextField,zipCodeTextField,payINRButtonSelector} from "./user_interface/paymentPage.selectors.tasks";

export async function paymentDetails() {
  const payWithCard = await $(payWithCardButton);
  await payWithCard.waitForClickable();
  await payWithCard.click()

      
}
export async function textFields(){
  await $(iframeSelector).waitForExist();
  await browser.switchToFrame(await $(iframeSelector))

  const email = await $(emailTextField)
  await email.setValue("muqadas@gmail.com")
  

  const card = await $(cardNumberTextField)
  const cardNumber = "4242424242424242"
  for (let i = 0; i < cardNumber.length; i++) {
    await card.addValue(cardNumber[i]);
  }  


  const monthYear = await $(monthYearTextField )
  await monthYear.setValue("12/24")
 

  const cvc = await $(cvcTextField)
  await cvc.setValue("567")
  
    
  const zipCode = await $(zipCodeTextField)
  await zipCode.setValue("46000")

   await browser.pause(10000)

  

  const inrButton = await $(payINRButtonSelector);
  await inrButton.waitForClickable();
      await inrButton.click()
      await browser.pause(10000)
   
}

    
