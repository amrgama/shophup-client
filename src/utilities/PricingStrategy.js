class PricingStrategy{
    calculateTotalPrice(products){
        throw new Error("Method 'calculateTotalPrice' must be implemented")
    }
}

export class DefaultPricingStrategy extends PricingStrategy{
    calculateTotalPrice(products){
        return products.reduce((total, product)=>{
            return total + (product.productId.price * product.quantity)
        }, 0)
    }
}

export class DiscountPricingStrategy extends PricingStrategy{
    constructor(discountPercentage){
        super();
        this.discountPercentage = discountPercentage;
    }

    calculateTotalPrice(products){
        return products.reduce((total, product)=>{
            total += (product.productId.price * product.quantity);
            const totalWithDiscount = total - (total * this.discountPercentage);
            return totalWithDiscount;
        }, 0)
    }
}