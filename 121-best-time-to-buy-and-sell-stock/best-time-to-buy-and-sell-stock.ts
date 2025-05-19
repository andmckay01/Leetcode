function maxProfit(prices: number[]): number {

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let p of prices) {
        let profit = p - minPrice;
        minPrice = Math.min(minPrice, p);
        maxProfit = Math.max(maxProfit, profit);
        
    }

    return maxProfit;
    
};