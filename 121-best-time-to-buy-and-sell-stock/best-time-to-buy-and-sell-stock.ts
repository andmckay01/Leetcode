function maxProfit(prices: number[]): number {

    /*
    two pointer
    dynamic

    variables:
    1. min price
    2. max profit = max price - min price

    O(n)
    O(1)
    */

    let maxProfit = 0;
    let minPrice = Infinity;

    for(let i=0; i<prices.length; i++) {

        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, (prices[i] - minPrice));

    }

    return maxProfit
    
};