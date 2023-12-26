export const sunscreenProductParagraphsSelector = '.container p.font-weight-bold';
export function getSpf50AndSpf30Sunscreens(name:string){
    return `//div[./p[text()="${name}"]]//button`;
};
export const addToCartButtonSelector = 'span#cart';
export const cartPage = 'table tbody tr';
export const cartElements = 'table tbody td:first-child';