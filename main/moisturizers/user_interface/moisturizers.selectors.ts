export const moisturizerProductParagraphsSelector = '.container p.font-weight-bold';
export function getAloeAndAlmondMoisturizers(name:string){
    return `//div[./p[text()="${name}"]]//button`;
};
export const addToCartButtonSelector = 'span#cart';
export const cartPage = 'table tbody tr';
export const cartElements = 'table tbody td:first-child';
