function maxProfit(prices: number[]): number {

    let minPrice = Infinity;
    let maxProfit = 0;

    //find min price and max price and then calculate at the end and return
    //if not profit, return 0

    for (const p of prices) {

        let profit = p - minPrice;
        minPrice = Math.min(minPrice, p);
        maxProfit = Math.max(maxProfit, profit);

    }

    return maxProfit;
    
};