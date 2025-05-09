function maxProfit(prices: number[]): number {

    let maxProfit = 0;
    let minPrice = Infinity;

    for(let i=0; i<prices.length; i++) {

        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, (prices[i] - minPrice));

    }

    return maxProfit
    
};