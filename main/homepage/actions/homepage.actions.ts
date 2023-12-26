import { homepagetemperature, buttonbuyMoisturizer, buttonbuySunscreens } from "../user_interface/homepage.Selectors";

export async function getTemperatureFromUI() {

    const temperature = parseInt(await $(homepagetemperature).getText());
    let page = " ";
    if (temperature < 19) {
        page="moisturizers" 
        await $(buttonbuyMoisturizer).click();
    } else if (temperature > 34) {
        page ="sunscreens"
        await $(buttonbuySunscreens).click();
    }

    return page;
 }
 
