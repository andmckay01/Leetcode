// function maxProfit(prices: number[]): number {
//     let l = 0, r = 1;
//     let maxP = 0;

//     while (r < prices.length) {
//         if (prices[l] < prices[r]) {
//             let profit = prices[r] - prices[l];
//             maxP = Math.max(maxP, profit);
//         } else {
//             l = r;
//         }
//         r++;
//     }
//     return maxP;
// };

//above is the 2 pointer solution. It's pretty good. But below is dynamic programming which is faster and less verbose

function maxProfit(prices: number[]): number {
    let profit = 0
    let min = prices[0]

    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - min)
        min = Math.min(min, prices[i])
    }

    return profit
};