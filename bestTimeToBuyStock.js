/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length;
    var i = 0;
    var minIndex = i;
    var maxProfit = 0;
    if(len > 1) {
        for(i = 1; i < len; i++) {
            if(prices[minIndex] > prices[i]) {
                minIndex = i
            } else {
                maxProfit =
                    maxProfit < prices[i] - prices[minIndex] ? prices[i] - prices[minIndex] : maxProfit;
            }
        }
    }
    return maxProfit;

};
